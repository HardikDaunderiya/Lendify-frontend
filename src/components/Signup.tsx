"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Dropdown from "./Dropdown";

const signupSchema = z.object({
  profile_name: z.string().min(1, "Profile name is required"),
  user_email: z.string().email("Invalid email address"),
  user_password: z
    .string()
    .min(6, "Password must be at least 6 characters long"),
  address_street: z.string().min(1, "Street address is required"),
  address_city: z.string().min(1, "City is required"),
  address_state: z.string().min(1, "State is required"),
  address_country: z.string().min(1, "Country is required"),
  address_zipcode: z.string().min(5, "Zipcode is required"),
});

export function Signup({ onSubmit, title }) {
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      profile_name: "",
      user_email: "",
      user_password: "",
      address_street: "",
      address_city: "",
      address_state: "",
      address_country: "",
      address_zipcode: "",
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="border  p-4 rounded-lg shadow-md  border-purple-900">
        <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
        <ScrollArea className="h-[500px] w-[500px] overflow-y-auto">
          <div className="p-4 space-y-4 rounded-lg border">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="profile_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Profile Name</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Owner" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="user_email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Enter your email address
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="user_password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Your password"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Enter your password</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address_street"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Street</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="123 Main St"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address_city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Anytown" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <FormField
                  control={form.control}
                  name="address_state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State</FormLabel>
                      <FormControl>
                        <Dropdown
                          type="state"
                          name="address_state"
                          register={form.register}
                          placeholder="Select State"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
                <FormField
                  control={form.control}
                  name="address_country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="USA" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address_zipcode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Zipcode</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="12345" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Signup
                </Button>
              </form>
            </Form>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

export default Signup;
