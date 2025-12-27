import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import logo from "@/assets/images/logo-white.png";
import SearchBox from "./SearchBox";
import { RouteSignIn } from "@/helpers/RouteName";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center h-16 fixed w-full z-20 bg-white px-5 border-b">
      
      {/* Left */}
      <div>
        <img src={logo} alt="logo" />
      </div>

      {/* Center */}
      <div> <SearchBox /></div>

      {/* Right */}
      <div>
        <Button asChild>
          <Link to={RouteSignIn} className="rounded-full flex items-center gap-2">
            <MdLogin />
            Sign In
          </Link>
        </Button>
      </div>

    </div>
  );
};

export default Topbar;
