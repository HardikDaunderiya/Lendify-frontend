import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useToast } from "@/components/ui/use-toast";
import { fetchBusinessById } from "@/store/business/businessSlice";
import { useNavigate, useParams } from "react-router-dom";
import { BusinessDetailResponse } from "@/store/business/businessTypes"; // Import the BusinessDetailResponse type

export default function BusinessById() {
  const { toast } = useToast();
  const { business, isLoading, isError, message } = useAppSelector(
    (state) => state.business
  );
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchBusinessById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (isError) {
      toast({
        variant: "destructive",
        title: "Error",
        description: message,
      });
    }
  }, [isError, message, toast]);

  const handleChat = () => {
    navigate("/investor/chat");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl text-red-500">Failed to load business data</div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-full max-w-md border border-purple-700">
        <CardHeader className="flex items-center gap-4 p-6">
          <Avatar className="h-14 w-14 bg-gray-100 dark:bg-gray-800">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>
              <BuildingIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-xl font-semibold">
              {business?.business_info?.business_name || "Business Name"}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {"-- " +
                (business?.business_info?.business_owner_firstname || "First") +
                " " +
                (business?.business_info?.business_owner_lastname || "Last")}
            </p>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium">
            <StarIcon className="h-4 w-4 fill-primary" />
            <span>{business?.business_info?.business_ratings || "0.0"}</span>
          </div>
        </CardHeader>
        <CardContent className="p-6 pt-0 grid gap-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <a href="#" className="text-gray-500 dark:text-gray-400">
                {business?.business_info?.business_contact || "N/A"}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <a href="#" className="text-gray-500 dark:text-gray-400">
                {business?.business_info?.business_email || "N/A"}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2">
              <LocateIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">
                {business?.address_info
                  ? `${business.address_info.address_street} ${business.address_info.address_city} ${business.address_info.address_state} ${business.address_info.address_country} ${business.address_info.address_zipcode}`
                  : "Address not available"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">
                Established 2010
              </span>
            </div>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="text-gray-500 dark:text-gray-400">
              Investment Requirement Amount
            </div>
            <div className="font-semibold">
              {business?.business_info?.business_minamount
                ? `${business.business_info.business_minamount}₹`
                : "N/A"}
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex justify-center gap-2">
          <Button
            variant={"outline"}
            size="sm"
            className="border border-purple-700"
            onClick={handleChat}
          >
            Connect
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

function BuildingIcon(props) {
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
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function LocateIcon(props) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
