import React from 'react'

import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod" 
import { Link } from 'react-router-dom'
import { RouteSignIn} from '@/helpers/RouteName'
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string().refine(data => data.password === data.confirmPassword, {message:"Passwords do not match"}),
})


const SignUp = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const onSubmit = (values) => {
    console.log(values)
  }
  return (
      <div className="flex justify-center items-center h-screen w-screen">
         <card className="p-6 shadow-lg">
         <h1 className="text-2xl font-bold mb-4 text-center">
  Create your account
    </h1>
    
           <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 w-[350px]"
            >
           
            <div className='mb-3'>
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
    
                    <FormControl>
                      <Input placeholder="enter your name" {...field} />
                    </FormControl>
    
                 
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='mb-3'>
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
    
                    <FormControl>
                      <Input placeholder="enter your email" {...field} />
                    </FormControl>
    
                 
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
              <div className='mb-3'>
                <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
    
                    <FormControl>
                      <Input placeholder="enter your password" {...field} />
                    </FormControl>
    
                    
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
              <div className='mb-3'>
                <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
    
                    <FormControl>
                      <Input placeholder="enter password again" {...field} />
                    </FormControl>
    
                    
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
    <div className="mt-6">
      <Button
        type="submit"
        className="w-full h-11 rounded-lg text-base font-medium 
                   bg-purple-600 hover:bg-purple-700 text-white 
                   transition-colors"
      >
        Sign Up
      </Button>
    
    <div className="flex justify-center items-center mt-4 text-sm text-gray-600 gap-1">
  <p>Already have an account?</p>

  <Link
    to={RouteSignIn}
    className="font-medium text-purple-600 hover:text-purple-700 hover:underline transition"
  >
    Sign In
  </Link>
</div>

    </div>
    
            </form>
          </Form>
         </card>
        </div>
  )
}

export default SignUp