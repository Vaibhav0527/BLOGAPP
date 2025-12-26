import React from 'react'
import { Outlet } from 'react-router-dom'
import AppSidebar from '@/components/AppSidebar'
import Footer from '@/components/Footer'
import Topbar from '@/components/Topbar'
import { SidebarProvider } from '@/components/ui/sidebar'

const Layout = () => {
  return (
   <SidebarProvider>
  <Topbar />
  <AppSidebar />

  <main className="border border-red-500 w-full">
    <div className="w-full min-h-[calc(100vh-64px)]">
      <Outlet />
    </div>
    <Footer />
  </main>
</SidebarProvider>

  )
}

export default Layout
