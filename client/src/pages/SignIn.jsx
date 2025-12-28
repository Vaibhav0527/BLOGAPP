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
import { RouteSignUp } from '@/helpers/RouteName'

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long"),
})

const SignIn = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen">
     <card className="p-6 shadow-lg">
     <h1 className="text-2xl font-bold mb-4 text-center">
  Login into your account
</h1>

       <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-[350px]"
        >
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
<div className="mt-6">
  <Button
    type="submit"
    className="w-full h-11 rounded-lg text-base font-medium 
               bg-purple-600 hover:bg-purple-700 text-white 
               transition-colors"
  >
    Sign In
  </Button>

 <div className="flex justify-center items-center mt-4 text-sm text-gray-600 gap-1">
  <p>Don't have an account?</p>

  <Link
    to={RouteSignUp}
    className="font-medium text-purple-600 hover:text-purple-700 hover:underline transition"
  >
    Sign Up
  </Link>
</div>

</div>

        </form>
      </Form>
     </card>
    </div>
  )
}

export default SignIn
