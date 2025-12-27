import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Link } from "react-router-dom";
import logo from "@/assets/images/logo-white.png";

import { IoHomeOutline } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { GrBlog } from "react-icons/gr";
import { FaRegComments } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { GoDot } from "react-icons/go";

const AppSidebar = () => {
  return (
    <Sidebar>
      {/* Logo */}
      <SidebarHeader className="bg-white border-b px-6 py-4">
        <img src={logo} alt="Logo" className="w-28" />
      </SidebarHeader>

      <SidebarContent className="bg-white px-1">
        {/* Main Menu */}
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="flex items-center gap-3 rounded-lg">
                <IoHomeOutline className="text-lg" />
                <span>Home</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton className="flex items-center gap-3 rounded-lg">
                <GrBlog className="text-lg" />
                <span>Blogs</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton className="flex items-center gap-3 rounded-lg">
                <FaRegComments className="text-lg" />
                <span>Comments</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton className="flex items-center gap-3 rounded-lg">
                <BiCategoryAlt className="text-lg" />
                <span>Categories</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton className="flex items-center gap-3 rounded-lg">
                <LuUsers className="text-lg" />
                <span>Users</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* Categories Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="px-3 text-xs uppercase tracking-wide text-muted-foreground">
            Categories
          </SidebarGroupLabel>

          <SidebarMenu>
            {["Technology", "Programming", "AI", "Web Dev"].map((item) => (
              <SidebarMenuItem key={item}>
                <SidebarMenuButton className="flex items-center gap-3 pl-6 rounded-lg">
                  <GoDot className="text-sm" />
                  <span>{item}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
