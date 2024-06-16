import BusinessCard from "./BusinessCard";

const BusinessList = ({ businesses }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {businesses.map((business, index) => (
        <BusinessCard key={index} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;
