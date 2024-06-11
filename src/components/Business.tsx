/**
 * v0 by Vercel.
 * @see https://v0.dev/t/aO1nwOKMPoe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Business() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
              Restaurant Image
            </h3>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                width={800}
                height={600}
                alt="Restaurant Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-6 mt-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Acme Inc.</h1>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Trusted provider of high-quality products and services.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Phone
                </h3>
                <p className="text-base font-medium">+1 (555) 555-5555</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Email
                </h3>
                <p className="text-base font-medium">info@acmeinc.com</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Website
                </h3>
                <Link
                  to="#"
                  className="text-base font-medium text-blue-600 hover:underline"
                >
                  www.acmeinc.com
                </Link>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Address
                </h3>
                <p className="text-base font-medium">
                  123 Main St, Anytown USA 12345
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                Location
              </h3>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  width={800}
                  height={600}
                  alt="Location Map"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Ratings & Reviews
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-0.5 text-yellow-500">
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5 text-gray-300" />
              </div>
              <span className="text-base font-medium">4.2</span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                (123 reviews)
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Avatar className="w-12 h-12">
                <img src="/placeholder.svg" alt="User Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-medium">John Doe</h3>
                  <div className="flex items-center gap-0.5 text-yellow-500">
                    <StarIcon className="w-4 h-4" />
                    <StarIcon className="w-4 h-4" />
                    <StarIcon className="w-4 h-4" />
                    <StarIcon className="w-4 h-4" />
                    <StarIcon className="w-4 h-4 text-gray-300" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Acme Inc. has been a reliable partner for our business. Their
                  products are top-notch and their customer service is
                  exceptional.
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <time dateTime="2023-06-11">June 11, 2023</time>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Avatar className="w-12 h-12">
                <img src="/placeholder.svg" alt="User Avatar" />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-medium">Sarah Anderson</h3>
                  <div className="flex items-center gap-0.5 text-yellow-500">
                    <StarIcon className="w-4 h-4" />
                    <StarIcon className="w-4 h-4" />
                    <StarIcon className="w-4 h-4" />
                    <StarIcon className="w-4 h-4" />
                    <StarIcon className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  I've been using Acme Inc. products for years and I'm always
                  impressed by their quality and innovation. Highly recommended!
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <time dateTime="2023-05-28">May 28, 2023</time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">About Acme Inc.</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4">
            Acme Inc. is a leading provider of high-quality products and
            services. Founded in 1985, we have a long history of delivering
            exceptional value to our customers. Our team of dedicated
            professionals is committed to innovation and customer satisfaction.
          </p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Business Hours</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Monday - Friday
              </h3>
              <p className="text-base font-medium">9:00 AM - 5:00 PM</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Saturday
              </h3>
              <p className="text-base font-medium">10:00 AM - 3:00 PM</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Sunday
              </h3>
              <p className="text-base font-medium">Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
