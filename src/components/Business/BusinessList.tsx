import BusinessCard from "./BusinessCard";
import { Business } from "@/store/investor-business/investorBusinessTypes"; // Import the Business type

const BusinessList = ({ businesses }: { businesses: Business[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {businesses.map((business) => (
        <BusinessCard key={business.business_id} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;
