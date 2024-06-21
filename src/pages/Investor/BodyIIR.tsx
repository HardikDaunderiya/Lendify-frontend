import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";

export default function BodyIIR() {
  return (
    <div className="flex flex-col items-center gap-4 my-8 bg-cover bg-center">
      <div className="flex justify-start items-center gap-4">
        <div className="mr-4" />
        <Select>
          <SelectTrigger className="w-[298px] h-[69px] pt-0 rounded-lg">
            <SelectValue placeholder="Select city" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="new-york">New York</SelectItem>
              <SelectItem value="los-angeles">Los Angeles</SelectItem>
              <SelectItem value="chicago">Chicago</SelectItem>
              <SelectItem value="houston">Houston</SelectItem>
              <SelectItem value="phoenix">Phoenix</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[298px] h-[69px] rounded-lg">
            <SelectValue placeholder="Select amount" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="100">$100</SelectItem>
              <SelectItem value="250">$250</SelectItem>
              <SelectItem value="500">$500</SelectItem>
              <SelectItem value="1000">$1000</SelectItem>
              <SelectItem value="2500">$2500</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="w-[396px] h-[392px] rounded-lg shadow-lg">
          <div className="w-[356px] h-[239px] bg-gray-200 rounded-t-lg mx-auto mt-4 relative">
            <img
              src="src\assets\res-1.jpg"
              alt="RES PIC"
              className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-lg font-medium">Restaurant Name</h3>
            <div className="flex items-center justify-center gap-2">
              <HeartIcon className="w-4 h-4" />
              <span>50%</span>
            </div>
          </div>
        </div>
        <div className="w-[396px] h-[392px] rounded-lg shadow-lg">
          <div className="w-[356px] h-[239px] bg-gray-200 rounded-t-lg mx-auto mt-4 relative">
            <img
              src="src\assets\res-2.jpg"
              alt="RES PIC"
              className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-lg font-medium">Restaurant Name</h3>
            <div className="flex items-center justify-center gap-2">
              <HeartIcon className="w-4 h-4" />
              <span>75%</span>
            </div>
          </div>
        </div>
        <div className="w-[396px] h-[392px] rounded-lg shadow-lg">
          <div className="w-[356px] h-[239px] bg-gray-200 rounded-t-lg mx-auto mt-4 relative">
            <img
              src="src\assets\res-3.jpg"
              alt="RES PIC"
              className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-lg font-medium">Restaurant Name</h3>
            <div className="flex items-center justify-center gap-2">
              <HeartIcon className="w-4 h-4" />
              <span>90%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="w-[396px] h-[392px] rounded-lg shadow-lg">
          <div className="w-[356px] h-[239px] bg-gray-200 rounded-t-lg mx-auto mt-4 relative">
            <img
              src="src\assets\res-4.jpg"
              alt="RES PIC"
              className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-lg font-medium">Restaurant Name</h3>
            <div className="flex items-center justify-center gap-2">
              <HeartIcon className="w-4 h-4" />
              <span>50%</span>
            </div>
          </div>
        </div>
        <div className="w-[396px] h-[392px] rounded-lg shadow-lg">
          <div className="w-[356px] h-[239px] bg-gray-200 rounded-t-lg mx-auto mt-4 relative">
            <img
              src="src\assets\res-5.jpg"
              alt="RES PIC"
              className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-lg font-medium">Restaurant Name</h3>
            <div className="flex items-center justify-center gap-2">
              <HeartIcon className="w-4 h-4" />
              <span>75%</span>
            </div>
          </div>
        </div>
        <div className="w-[396px] h-[392px] rounded-lg shadow-lg">
          <div className="w-[356px] h-[239px] bg-gray-200 rounded-t-lg mx-auto mt-4 relative">
            <img
              src="src\assets\res-6.jpg"
              alt="RES PIC"
              className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-lg font-medium">Restaurant Name</h3>
            <div className="flex items-center justify-center gap-2">
              <HeartIcon className="w-4 h-4" />
              <span>90%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="w-[396px] h-[392px] rounded-lg shadow-lg">
          <div className="w-[356px] h-[239px] bg-gray-200 rounded-t-lg mx-auto mt-4 relative">
            <img
              src="src\assets\res-7.jpg"
              alt="RES PIC"
              className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-lg font-medium">Restaurant Name</h3>
            <div className="flex items-center justify-center gap-2">
              <HeartIcon className="w-4 h-4" />
              <span>50%</span>
            </div>
          </div>
        </div>
        <div className="w-[396px] h-[392px] rounded-lg shadow-lg">
          <div className="w-[356px] h-[239px] bg-gray-200 rounded-t-lg mx-auto mt-4 relative">
            <img
              src="src\assets\res-8.jpg"
              alt="RES PIC"
              className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-lg font-medium">Restaurant Name</h3>
            <div className="flex items-center justify-center gap-2">
              <HeartIcon className="w-4 h-4" />
              <span>75%</span>
            </div>
          </div>
        </div>
        <div className="w-[396px] h-[392px] rounded-lg shadow-lg">
          <div className="w-[356px] h-[239px] bg-gray-200 rounded-t-lg mx-auto mt-4 relative">
            <img
              src="src\assets\res-9.jpg"
              alt="RES PIC"
              className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-lg font-medium">Restaurant Name</h3>
            <div className="flex items-center justify-center gap-2">
              <HeartIcon className="w-4 h-4" />
              <span>90%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
