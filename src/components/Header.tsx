import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { logout, reset } from "@/store/auth/authSlice";
import { clearAccessToken } from "@/lib/helper";
// import { logout } from "@/store/slices/authSlice"; // Assuming you have a logout action in your authSlice

export default function Component() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();
  const signout = () => {
    dispatch(logout());
    clearAccessToken();
    //Remove acess token
    //Remove User Info
    localStorage.removeItem("userInfo");

    navigate("/home");
  };

  return (
    <header className="w-full border border-grey rounded-sm py-4 px-6 md:px-10 flex items-center justify-between border-purple-900">
      <Link to="#" className="flex items-center gap-2">
        <MountainIcon className="h-6 w-6" />
        <span className="text-xl font-bold">Lendmefy</span>
      </Link>

      <div className="flex items-center gap-4">
        <ModeToggle />
        {user ? (
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  Settings <ChevronDownIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link
                    to="/profile"
                    className="flex items-center justify-between"
                  >
                    Profile
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              onClick={signout}
              variant={"outline"}
              className="border border-purple-700"
            >
              Signout
            </Button>
          </div>
        ) : (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  Sign Up <ChevronDownIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link
                    to="/owner/signup"
                    className="flex items-center justify-between"
                  >
                    Owner Account
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/investor/signup"
                    className="flex items-center justify-between"
                  >
                    Investor Account
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  Sign In <ChevronDownIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link
                    to="/owner/login"
                    className="flex items-center justify-between"
                  >
                    Owner
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/investor/login"
                    className="flex items-center justify-between"
                  >
                    Investor
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        )}
      </div>
    </header>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
