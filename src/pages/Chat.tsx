/**
 * v0 by Vercel.
 * @see https://v0.dev/t/x22YXjvwDSM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Chat() {
  return (
    <div className="flex flex-col h-[800px] w-full max-w-[800px] mx-auto bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gray-100 dark:bg-gray-900 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">John Doe</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Online
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <SearchIcon className="w-5 h-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon">
            <MoveHorizontalIcon className="w-5 h-5" />
            <span className="sr-only">More</span>
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="flex items-start gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 max-w-[70%]">
            <div className="font-medium">John Doe</div>
            <div className="text-sm">
              Hey there! How's it going? I wanted to follow up on our discussion
              from yesterday.
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 justify-end">
          <div className="bg-blue-500 text-white rounded-lg p-3 max-w-[70%]">
            <div>
              Great, I'm available to chat now. What did you want to discuss?
            </div>
          </div>
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>YO</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-start gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 max-w-[70%]">
            <div className="font-medium">John Doe</div>
            <div className="text-sm">
              I wanted to discuss the new feature we're working on. I have a few
              ideas I'd like to run by you.
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 max-w-[70%]">
            <div className="font-medium">John Doe</div>
            <div className="text-sm">
              Hey, just wanted to check in and see how you're doing. I'm
              available to chat whenever you have a chance.
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 justify-end">
          <div className="bg-blue-500 text-white rounded-lg p-3 max-w-[70%]">
            <div>
              I'm doing great, thanks for asking! I have some time now if you'd
              like to chat.
            </div>
          </div>
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>YO</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-start gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 max-w-[70%]">
            <div className="font-medium">John Doe</div>
            <div className="text-sm">
              Sounds good, let's hop on a quick call. I have a few things I want
              to run by you.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-900 px-4 py-3 flex items-center gap-2">
        <Textarea
          placeholder="Type your message..."
          className="flex-1 rounded-lg border-none focus:ring-0 dark:bg-gray-800 dark:text-gray-50"
        />
        <Button size="icon">
          <SendIcon className="w-5 h-5" />
          <span className="sr-only">Send</span>
        </Button>
      </div>
    </div>
  );
}

function MoveHorizontalIcon(props) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function SendIcon(props) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
