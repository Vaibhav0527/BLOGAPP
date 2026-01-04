import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import logo from "@/assets/images/logo-white.png";
import SearchBox from "./SearchBox";
import { RouteIndex, RouteProfile, RouteSignIn } from "@/helpers/RouteName";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar" 
import { FaRegUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoLogOutOutline, IoSearch } from "react-icons/io5";
import { removeUser } from "@/redux/user/user.slice";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "@/helpers/showToast";
import { getEvn } from "@/helpers/getEnv";





const Topbar = () => { 
  
    const dispath = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)


    const handleLogout = async () => {
        try {
            const response = await fetch(`${getEvn('VITE_API_BASE_URL')}/auth/logout`, {
                method: 'get',
                credentials: 'include',
            })
            const data = await response.json()
            if (!response.ok) {
                return showToast('error', data.message)
            }
            dispath(removeUser())
            navigate(RouteIndex)
            showToast('success', data.message)
        } catch (error) {
            showToast('error', error.message)
        }
    }

  return (
    <div className="flex justify-between items-center h-16 fixed w-full z-20 bg-white px-5 border-b">
      
      {/* Left */}
      <div>
        <img src={logo} alt="logo" />
      </div>

      {/* Center */}
      <div> <SearchBox /></div>

      {/* Right */}
       <div className='flex items-center gap-5'>

              
                {!user.isLoggedIn ?
                    <Button asChild className="rounded-full">
                        <Link to={RouteSignIn}  >
                            <MdLogin />
                            Sign In
                        </Link>
                    </Button>
                    :
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src={user.user.avatar || usericon} />
                            </Avatar>

                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>
                                <p>{user.user.name}</p>
                                <p className='text-sm'>{user.user.email}</p>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild className="cursor-pointer">
                                <Link to={RouteProfile} >
                                    <FaRegUser />
                                    Profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="cursor-pointer">
                                <Link >
                                    <FaPlus />
                                    Create Blog
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                                <IoLogOutOutline color='red' />
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                }


            </div>



        </div >
  );
};

export default Topbar;
