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
import { fetchBusinessById } from "@/store/investor-business/investorBusinessSlice";
import { useNavigate, useParams } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  BuildingIcon,
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  LocateIcon,
  MailIcon,
  PhoneIcon,
  StarIcon,
} from "@/lib/icons";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div>
          <Carousel className="rounded-lg overflow-hidden">
            <CarouselContent>
              <CarouselItem>
                <img
                  src="/src/assets/res-1.jpg"
                  width={600}
                  height={400}
                  alt="Slide 1"
                  className="object-cover w-full aspect-[3/2]"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/src/assets/res-4.jpg"
                  width={600}
                  height={400}
                  alt="Slide 2"
                  className="object-cover w-full aspect-[3/2]"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/src/assets/res-3.jpg"
                  width={600}
                  height={400}
                  alt="Slide 3"
                  className="object-cover w-full aspect-[3/2]"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full shadow-md transition-colors">
              <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
            </CarouselPrevious>
            <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full shadow-md transition-colors">
              <ChevronRightIcon className="h-6 w-6 text-gray-700" />
            </CarouselNext>
          </Carousel>
        </div>

        <Card className="w-full  border border-purple-700">
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
                  (business?.business_info?.business_owner_firstname ||
                    "First") +
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
    </div>
  );
}
