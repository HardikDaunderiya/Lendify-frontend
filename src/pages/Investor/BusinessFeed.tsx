import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  fetchBusinesses,
  reset,
} from "@/store/investor-business/investorBusinessSlice";
import BusinessFilters from "../../components/Business/BusinessFilter";
import BusinessList from "../../components/Business/BusinessList";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { Business } from "@/lib/types/BusinessTypes"; // Import the Business type

export default function BusinessFeed() {
  const { toast } = useToast();

  const { businesses, isLoading, isError, message } = useAppSelector(
    (state) => state.investorBusiness
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
      navigate("/investor/login");
    } else {
      dispatch(fetchBusinesses());
    }

    return () => {
      dispatch(reset());
    };
  }, [user, isError, message, dispatch, navigate, toast]);

  const [filteredBusinesses, setFilteredBusinesses] = useState<Business[]>([]);
  const [sortBy, setSortBy] = useState<keyof Business>("business_name");

  useEffect(() => {
    setFilteredBusinesses(businesses);
  }, [businesses]);

  const handleFilter = (category: string) => {
    if (category === "all") {
      setFilteredBusinesses(businesses);
    } else {
      setFilteredBusinesses(
        businesses.filter((b) => b.business_name === category)
      );
    }
  };

  const handleSort = (field: keyof Business) => {
    setSortBy(field);
    setFilteredBusinesses(
      [...filteredBusinesses].sort((a, b) => {
        if (a[field] < b[field]) return -1;
        if (a[field] > b[field]) return 1;
        return 0;
      })
    );
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {message}</p>;
  }

  return (
    <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col items-center justify-center space-y-6 mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center">
            Businesses To Invest
          </h2>

          {/* Responsive Filters and Sort Section */}
          <div className="w-full flex flex-wrap flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8">
            <BusinessFilters
              sortBy={sortBy}
              handleSort={handleSort}
              handleFilter={handleFilter}
              filteredBusinesses={filteredBusinesses}
              businesses={businesses}
            />
          </div>
        </div>

        <BusinessList businesses={filteredBusinesses} type={"investor"} />
      </div>
    </section>
  );
}
