import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-1">
          <h2 className="text-lg font-semibold mb-4">Lendmefy</h2>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <FacebookIcon className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Twitter">
              <TwitterIcon className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Instagram">
              <InstagramIcon className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Support Section */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Become an Affiliate
              </a>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Sample Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Apparel Production
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Label Tags Packaging
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Global Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Photography
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Products
              </a>
            </li>
          </ul>
        </div>

        {/* How Does It Work Section */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold mb-4">How Does It Work</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Customer Reviews
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Handbag Manufacture
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="mb-2">+1 123 1234 5678</p>
          <p className="mb-2">Hello@Cld.com</p>
          <p>New York, USA</p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
        All Rights Reserved For Waqp Design
      </div>
    </footer>
  );
};

const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
};

const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
};

const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
};

export default Footer;


