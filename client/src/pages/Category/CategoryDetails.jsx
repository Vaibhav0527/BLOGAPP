import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { RouteAddCategory, RouteEditCategory } from '@/helpers/RouteName'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useFetch } from '@/hooks/useFetch'
import { getEvn } from '@/helpers/getEnv'
import Loading from '@/components/Loading'
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { deleteData } from '@/helpers/handleDelete'
import { showToast } from '@/helpers/showToast'

const CategoryDetails = () => {
    const [refreshData, setRefreshData] = useState(false)
    const { data: categoryData, loading, error } = useFetch(`${getEvn('VITE_API_BASE_URL')}/category/all-category`, {
        method: 'get',
        credentials: 'include'
    }, [refreshData])

    const handleDelete = async (id) => {
        const response = await deleteData(`${getEvn('VITE_API_BASE_URL')}/category/delete/${id}`)
        if (response) {
            setRefreshData(!refreshData)
            showToast('success', 'Data deleted.')
        } else {
            showToast('error', 'Data not deleted.')
        }
    }

    if (loading) return <Loading />
    if (error) {
        return (
            <div className="p-4">
                <p className="text-red-600">Failed to load categories.</p>
            </div>
        )
    }
    return (
     <div className="p-8 space-y-6">
            
            <Card>
                 <div className="p-4 border-b">
    <Button
      asChild
      className="bg-violet-600 text-white hover:bg-violet-700"
    >
      <Link to={RouteAddCategory}>
        + Add Category
      </Link>
    </Button>
  </div>
                <CardContent>
                    <Table>

                        <TableHeader>
                            <TableRow>
                                <TableHead>Category </TableHead>
                                <TableHead>Slug </TableHead>

                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {categoryData?.category?.length > 0 ?

                                categoryData.category.map(category =>
                                    <TableRow key={category._id}>
                                        <TableCell>{category.name}</TableCell>
                                        <TableCell>{category.slug}</TableCell>
                                        <TableCell className="flex gap-3">
                                            <Button variant="outline" className="hover:bg-violet-500 hover:text-white" asChild>
                                                <Link to={RouteEditCategory(category._id)}>
                                                    <FiEdit />
                                                </Link>
                                            </Button>
                                            <Button onClick={() => handleDelete(category._id)} variant="outline" className="hover:bg-violet-500 hover:text-white" >
                                                <FaRegTrashAlt />
                                            </Button>
                                        </TableCell>
                                    </TableRow>

                                )

                                :

                                <TableRow>
                                    <TableCell colSpan="3">
                                        Data not found.
                                    </TableCell>
                                </TableRow>
                            }
                        </TableBody>
                    </Table>

                </CardContent>
            </Card>
             
        </div>
    )
}

export default CategoryDetails

