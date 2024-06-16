import { Button } from "@/components/ui/button";

const BusinessFilters = ({
  sortBy,
  handleSort,
  handleFilter,
  filteredBusinesses,
  businesses,
}) => {
  return (
    <>
      <div className="flex items-center space-x-4">
        <Button
          variant={sortBy === "name" ? "default" : "outline"}
          onClick={() => handleSort("business_owner_firstname")}
        >
          Sort by Name
        </Button>
        <Button
          variant={sortBy === "category" ? "default" : "outline"}
          onClick={() => handleSort("category")}
        >
          Sort by Category
        </Button>
        <Button
          variant={sortBy === "location" ? "default" : "outline"}
          onClick={() => handleSort("address")}
        >
          Sort by Location
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <Button
          variant={
            filteredBusinesses.length === businesses.length
              ? "default"
              : "outline"
          }
          onClick={() => handleFilter("all")}
        >
          All
        </Button>
        <Button
          variant={
            filteredBusinesses.some((b) => b.category === "Manufacturing")
              ? "default"
              : "outline"
          }
          onClick={() => handleFilter("Manufacturing")}
        >
          Manufacturing
        </Button>
        <Button
          variant={
            filteredBusinesses.some((b) => b.category === "Retail")
              ? "default"
              : "outline"
          }
          onClick={() => handleFilter("Retail")}
        >
          Retail
        </Button>
        <Button
          variant={
            filteredBusinesses.some((b) => b.category === "Technology")
              ? "default"
              : "outline"
          }
          onClick={() => handleFilter("Technology")}
        >
          Technology
        </Button>
        <Button
          variant={
            filteredBusinesses.some((b) => b.category === "Food & Beverage")
              ? "default"
              : "outline"
          }
          onClick={() => handleFilter("Food & Beverage")}
        >
          Food & Beverage
        </Button>
        <Button
          variant={
            filteredBusinesses.some((b) => b.category === "Home & Garden")
              ? "default"
              : "outline"
          }
          onClick={() => handleFilter("Home & Garden")}
        >
          Home & Garden
        </Button>
      </div>
    </>
  );
};

export default BusinessFilters;
