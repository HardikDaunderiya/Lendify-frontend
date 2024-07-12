import BusinessCard from "./BusinessCard";
import { Business } from "../../lib/types/BusinessTypes"; // Import the Business type

const BusinessList = ({
  businesses,
  type,
}: {
  businesses: Business[];
  type: string;
}) => {
  if (!businesses) {
    // Return null or a loading indicator if businesses is null or undefined
    return null;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {businesses.map((business) => (
        <BusinessCard
          key={business.business_id}
          business={business}
          type={type}
        />
      ))}
    </div>
  );
};

export default BusinessList;
