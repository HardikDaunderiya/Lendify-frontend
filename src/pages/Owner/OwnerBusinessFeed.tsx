import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  fetchBusinesses,
  reset,
} from "@/store/owner-business/ownerBusinessSlice";
import BusinessList from "../../components/Business/BusinessList";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
// import { Business } from "../../lib/types/BusinessTypes"; // Import the Business type

export default function OwnerBusinessFeed() {
  const { toast } = useToast();

  const { businesses, isLoading, isError, message } = useAppSelector(
    (state) => state.business
  );
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) {
      toast({
        variant: "destructive",
        title: "Error",
        description: message,
      });
    }

    if (!user) {
      navigate("/owner/login");
    } else {
      dispatch(fetchBusinesses());
    }

    return () => {
      dispatch(reset());
    };
  }, [user, isError, message, dispatch, navigate, toast]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {message}</p>;
  }
  const handleCreateBusiness = () => {
    navigate("/owner/createbusiness");
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <div className="flex items-start">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              My Business
            </h2>
          </div>
          <div className="flex justify-end mt-4">
            <Button
              variant="outline"
              className="border border-purple-700"
              onClick={handleCreateBusiness}
            >
              Create Business
            </Button>
          </div>
        </div>
        <BusinessList businesses={businesses} />
      </div>
    </section>
  );
}
