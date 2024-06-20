import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Business } from "@/store/business/businessTypes"; // Import the Business type

const BusinessCard = ({ business }: { business: Business }) => {
  return (
    <Link
      to={`/investor/business/${business.business_id}`}
      className="no-underline"
    >
      <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300">
        <img
          src="/placeholder.svg"
          alt={business.business_name}
          width={600}
          height={400}
          className="rounded-t-lg object-cover w-full aspect-[3/2]"
        />
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">{business.business_name}</h3>
            <p className="text-gray-500 dark:text-gray-400">
              {business.business_email}
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <MapPinIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span>{business.business_contact}</span>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span>{business.business_ratings}</span>
            </div>
            {business.business_minamount && (
              <div className="flex items-center space-x-2">
                <GlobeIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <span className="text-blue-600">
                  {business.business_minamount}
                </span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

function GlobeIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function MapPinIcon(props) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
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

export default BusinessCard;
