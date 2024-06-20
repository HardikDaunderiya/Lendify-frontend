import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchBusinesses, reset } from "@/store/business/businessSlice";
import BusinessFilters from "../../components/Business/BusinessFilter";
import BusinessList from "../../components/Business/BusinessList";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { Business } from "@/store/business/businessTypes"; // Import the Business type

export default function BusinessFeed() {
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
      setFilteredBusinesses(businesses.filter((b) => b.category === category));
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
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Businesses To Invest
          </h2>
          <BusinessFilters
            sortBy={sortBy}
            handleSort={handleSort}
            handleFilter={handleFilter}
            filteredBusinesses={filteredBusinesses}
            businesses={businesses}
          />
        </div>
        <BusinessList businesses={filteredBusinesses} />
      </div>
    </section>
  );
}
