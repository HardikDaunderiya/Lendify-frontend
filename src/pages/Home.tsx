/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GLDx0nE4QeD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { NavLink } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="relative w-full h-[80vh] bg-gray-900">
        <img
          src="/placeholder.svg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center justify-center h-full space-y-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight ">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-2  text-custom-purple">
              Featured Investment Opportunities
            </h2>
            <p className="text-gray-500 max-w-md">
              Explore our curated selection of the best investment
              opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Investment 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Investment 1</h3>
                <p className="text-gray-500 font-medium">$50,000 - $100,000</p>
                <p className="text-gray-500 font-medium">15% ROI</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Investment 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Investment 2</h3>
                <p className="text-gray-500 font-medium">$100,000 - $500,000</p>
                <p className="text-gray-500 font-medium">20% ROI</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Investment 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Investment 3</h3>
                <p className="text-gray-500 font-medium">$25,000 - $75,000</p>
                <p className="text-gray-500 font-medium">12% ROI</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Investment 4"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Investment 4</h3>
                <p className="text-gray-500 font-medium">$75,000 - $250,000</p>
                <p className="text-gray-500 font-medium">18% ROI</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Featured Business Opportunities
            </h2>
            <p className="text-gray-500 max-w-md">
              Discover the best business opportunities to invest in.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Business 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Business 1</h3>
                <p className="text-gray-500 font-medium">$50,000 - $100,000</p>
                <p className="text-gray-500 font-medium">25% Equity</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Business 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Business 2</h3>
                <p className="text-gray-500 font-medium">$100,000 - $500,000</p>
                <p className="text-gray-500 font-medium">30% Equity</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Business 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Business 3</h3>
                <p className="text-gray-500 font-medium">$25,000 - $75,000</p>
                <p className="text-gray-500 font-medium">20% Equity</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Business 4"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Business 4</h3>
                <p className="text-gray-500 font-medium">$75,000 - $250,000</p>
                <p className="text-gray-500 font-medium">27% Equity</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
