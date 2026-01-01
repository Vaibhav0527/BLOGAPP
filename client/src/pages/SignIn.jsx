import React from 'react'
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Link, useNavigate } from 'react-router-dom'
import { RouteIndex, RouteSignUp } from '@/helpers/RouteName'
import { showToast } from '@/helpers/showToast'
import { getEvn } from '@/helpers/getEnv'
import { Card } from "@/components/ui/card"
import { setUser } from '@/redux/user/user.slice'
import { useDispatch } from 'react-redux'
import GoogleLogin from '@/components/GoogleLogin'

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password field required"),
})

const SignIn = () => {
   const dispath = useDispatch()
  const navigate = useNavigate()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values) {
    try {
      const response = await fetch(
        `${getEvn('VITE_API_BASE_URL')}/auth/login`,
        {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        return showToast('error', data.message)
      }
       dispath(setUser(data.user))

      showToast('success', data.message)
      navigate(RouteIndex)

    } catch (error) {
      showToast('error', error.message)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Card className="p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Login into your account
        </h1>
          <div className=''>
                    <GoogleLogin />
                    <div className='border my-5 flex justify-center items-center'>
                        <span className='absolute bg-white text-sm'>Or</span>
                    </div>

                </div>


        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-[350px]"
          >

            <div className="mb-3">
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

            <div className="mb-3">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="enter your password"
                        {...field}
                      />
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
      </Card>
    </div>
  )
}

export default SignIn
