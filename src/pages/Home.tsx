import { NavLink } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full h-screen bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          loading="lazy"
        />

        <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center justify-center h-full space-y-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Connect Investors and Business Owners
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Discover the best investment opportunities and connect with business
            owners who need funding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <NavLink
              to="#"
              className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Find Investors
            </NavLink>
            <NavLink
              to="#"
              className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-white text-blue-500 font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Find Businesses
            </NavLink>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-custom-purple">
              Featured Investment Opportunities
            </h2>
            <p className="text-gray-500 max-w-md">
              Explore our curated selection of the best investment
              opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                src: "src/assets/res-1.jpg",
                title: "Investment 1",
                amount: "$50,000 - $100,000",
                roi: "15% ROI",
              },
              {
                src: "src/assets/res-2.jpg",
                title: "Investment 2",
                amount: "$100,000 - $500,000",
                roi: "20% ROI",
              },
              {
                src: "src/assets/res-3.jpg",
                title: "Investment 3",
                amount: "$25,000 - $75,000",
                roi: "12% ROI",
              },
              {
                src: "src/assets/res-4.jpg",
                title: "Investment 4",
                amount: "$75,000 - $250,000",
                roi: "18% ROI",
              },
            ].map((investment, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={investment.src}
                  alt={investment.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2">
                    {investment.title}
                  </h3>
                  <p className="text-gray-500 font-medium">
                    {investment.amount}
                  </p>
                  <p className="text-gray-500 font-medium">{investment.roi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-custom-purple">
              Featured Business Opportunities
            </h2>
            <p className="text-gray-500 max-w-md">
              Discover the best business opportunities to invest in.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                src: "src/assets/res-5.jpg",
                title: "Business 1",
                amount: "$50,000 - $100,000",
                equity: "25% Equity",
              },
              {
                src: "src/assets/res-6.jpg",
                title: "Business 2",
                amount: "$100,000 - $500,000",
                equity: "30% Equity",
              },
              {
                src: "src/assets/res-7.jpg",
                title: "Business 3",
                amount: "$25,000 - $75,000",
                equity: "20% Equity",
              },
              {
                src: "src/assets/res-8.jpg",
                title: "Business 4",
                amount: "$75,000 - $250,000",
                equity: "27% Equity",
              },
            ].map((business, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={business.src}
                  alt={business.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2">{business.title}</h3>
                  <p className="text-gray-500 font-medium">{business.amount}</p>
                  <p className="text-gray-500 font-medium">{business.equity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
