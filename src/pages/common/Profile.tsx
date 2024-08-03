import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useAppSelector } from "@/store/hooks";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  Label,
} from "@radix-ui/react-dropdown-menu";
import React, { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const { user } = useAppSelector((state) => state.auth);
  console.log(user);

  return (
    <div>
      <Card className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-4 mb-4">
        <CardContent>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="h-24 w-24 ring-2 ring-primary cursor-pointer">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <div className="grid w-full items-center gap-1.5">
                      <Label>Update Profile Picture</Label>
                      <Input id="picture" type="file" />
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="text-center">
                <h1 className="text-3xl font-bold">{user.user_profile_name}</h1>
                {/* <p className="text-muted-foreground">Software Engineer</p> */}
              </div>
            </div>
            <div className="grid w-full gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                {isEditing ? (
                  <Input
                    id="email"
                    type="email"
                    defaultValue="john@example.com"
                  />
                ) : (
                  <Input
                    id="email"
                    type="email"
                    value="john@example.com"
                    readOnly
                  />
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
