/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3yGtTFW6vsi
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function BusinessFeed() {
  const businesses = [
    {
      name: "Acme Corp",
      description: "Leading provider of industrial supplies",
      address: "123 Main St, Anytown USA",
      phone: "(555) 555-5555",
      website: "www.acmecorp.com",
      category: "Manufacturing",
      image: "/placeholder.svg",
    },
    {
      name: "Bloom Flowers",
      description: "Artisanal floral arrangements for all occasions",
      address: "456 Oak Rd, Smallville CA",
      phone: "(555) 555-1234",
      website: "www.bloomflowers.com",
      category: "Retail",
      image: "/placeholder.svg",
    },
    {
      name: "Techno Solutions",
      description: "IT services and software development",
      address: "789 Elm St, Bigcity NY",
      phone: "(555) 555-9876",
      website: "www.technosolutions.com",
      category: "Technology",
      image: "/placeholder.svg",
    },
    {
      name: "Cozy Cafe",
      description: "Neighborhood coffee shop and eatery",
      address: "321 Pine Ave, Smalltown OR",
      phone: "(555) 555-2468",
      website: "www.cozycafe.com",
      category: "Food & Beverage",
      image: "/placeholder.svg",
    },
    {
      name: "Artisan Crafts",
      description: "Handmade goods and local artisan products",
      address: "159 Birch Rd, Craftsville VT",
      phone: "(555) 555-3698",
      website: "www.artisancrafts.com",
      category: "Retail",
      image: "/placeholder.svg",
    },
    {
      name: "Innovative Designs",
      description: "Custom furniture and interior design services",
      address: "753 Maple St, Designtown CT",
      phone: "(555) 555-7890",
      website: "www.innovativedesigns.com",
      category: "Home & Garden",
      image: "/placeholder.svg",
    },
  ];
  const [filteredBusinesses, setFilteredBusinesses] = useState(businesses);
  const [sortBy, setSortBy] = useState("name");
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
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Businesses To invest
          </h2>
          <div className="flex items-center space-x-4">
            <Button
              variant={sortBy === "name" ? "primary" : ("outline" as const)}
              onClick={() => handleSort("name")}
            >
              Sort by Name
            </Button>
            <Button
              variant={sortBy === "category" ? "primary" : "outline"}
              onClick={() => handleSort("category")}
            >
              Sort by Category
            </Button>
            <Button
              variant={sortBy === "location" ? "primary" : "outline"}
              onClick={() => handleSort("address")}
            >
              Sort by Location
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant={
                filteredBusinesses.length === businesses.length
                  ? "primary"
                  : "outline"
              }
              onClick={() => handleFilter("all")}
            >
              All
            </Button>
            <Button
              variant={
                filteredBusinesses.some((b) => b.category === "Manufacturing")
                  ? "primary"
                  : "outline"
              }
              onClick={() => handleFilter("Manufacturing")}
            >
              Manufacturing
            </Button>
            <Button
              variant={
                filteredBusinesses.some((b) => b.category === "Retail")
                  ? "primary"
                  : "outline"
              }
              onClick={() => handleFilter("Retail")}
            >
              Retail
            </Button>
            <Button
              variant={
                filteredBusinesses.some((b) => b.category === "Technology")
                  ? "primary"
                  : "outline"
              }
              onClick={() => handleFilter("Technology")}
            >
              Technology
            </Button>
            <Button
              variant={
                filteredBusinesses.some((b) => b.category === "Food & Beverage")
                  ? "primary"
                  : "outline"
              }
              onClick={() => handleFilter("Food & Beverage")}
            >
              Food & Beverage
            </Button>
            <Button
              variant={
                filteredBusinesses.some((b) => b.category === "Home & Garden")
                  ? "primary"
                  : "outline"
              }
              onClick={() => handleFilter("Home & Garden")}
            >
              Home & Garden
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBusinesses.map((business, index) => (
            <Card key={index}>
              <img
                src="/placeholder.svg"
                alt={business.name}
                width={600}
                height={400}
                className="rounded-t-lg object-cover w-full aspect-[3/2]"
              />
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{business.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {business.description}
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPinIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span>{business.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <PhoneIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span>{business.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GlobeIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {business.website}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

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
