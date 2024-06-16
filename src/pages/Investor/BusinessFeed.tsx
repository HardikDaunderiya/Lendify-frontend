import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchBusinesses } from "@/store/business/businessSlice";
import BusinessFilters from "../../components/Business/BusinessFilter";
import BusinessList from "../../components/Business/BusinessList";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function BusinessFeed() {
  const { toast } = useToast();

  const { businesses, status, error, message } = useAppSelector(
    (state) => state.business
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBusinesses());
    }
    // if (status === "failed") {
    //   toast({
    //     variant: "destructive",
    //     title: "Error",
    //     description: message,
    //   });
    // }
  }, [dispatch, status, toast, message]);

  const [filteredBusinesses, setFilteredBusinesses] = useState(businesses);
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    setFilteredBusinesses(businesses);
  }, [businesses]);

  const handleFilter = (category) => {
    if (category === "all") {
      setFilteredBusinesses(businesses);
    } else {
      setFilteredBusinesses(businesses.filter((b) => b.category === category));
    }
  };

  const handleSort = (field) => {
    setSortBy(field);
    setFilteredBusinesses(
      [...filteredBusinesses].sort((a, b) => {
        if (a[field] < b[field]) return -1;
        if (a[field] > b[field]) return 1;
        return 0;
      })
    );
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
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
