"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  createBusiness,
  reset,
} from "@/store/owner-business/ownerBusinessSlice"; // Ensure the correct path
import { LoadingSpinner } from "@/components/ui/LoadingSpinnet";

const validationSchema = z.object({
  business_owner_firstname: z.string().min(1, "First name is required"),
  business_owner_lastname: z.string().min(1, "Last name is required"),
  business_email: z.string().email("Invalid email address"),
  business_contact: z.string().min(10, "Phone number is required"),
  business_name: z.string().min(1, "Business name is required"),
  business_ratings: z.coerce
    .number()
    .positive("Business rating must be positive"),
  business_minamount: z.coerce
    .number()
    .positive("Business minimum amount must be positive"),
  address_street: z.string().min(1, "Street address is required"),
  address_city: z.string().min(1, "City is required"),
  address_state: z.string().min(1, "State is required"),
  address_country: z.string().min(1, "Country is required"),
  address_zipcode: z.string().min(1, "Zipcode is required"),
});

export default function CreateBusiness() {
  const [currentStep, setCurrentStep] = useState(1);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isLoading, isError, isSuccess, message } = useAppSelector(
    (state) => state.ownerBusiness
  );

  const form = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      business_owner_firstname: "",
      business_owner_lastname: "",
      business_email: "",
      business_contact: "",
      business_name: "",
      business_ratings: 0,
      business_minamount: 0,
      address_street: "",
      address_city: "",
      address_state: "",
      address_country: "",
      address_zipcode: "",
    },
  });

  console.log(isSuccess);
  useEffect(() => {
    if (isError) {
      toast({
        variant: "destructive",
        title: "Error",
        description: message,
      });
    }

    if (isSuccess) {
      navigate("/owner/mybusiness");
      toast({
        variant: "successfully",
        title: "Success",
        description: message,
      });
    }

    if (isError || isSuccess) {
      dispatch(reset());
    }
  }, [isError, isSuccess, message, navigate, toast, dispatch]);

  const onSubmit = (data) => {
    const businessData = {
      BusinessDetails: {
        business_owner_firstname: data.business_owner_firstname,
        business_owner_lastname: data.business_owner_lastname,
        business_email: data.business_email,
        business_contact: data.business_contact,
        business_name: data.business_name,
        business_ratings: data.business_ratings,
        business_minamount: data.business_minamount,
      },
      AddressDetails: {
        address_street: data.address_street,
        address_city: data.address_city,
        address_state: data.address_state,
        address_country: data.address_country,
        address_zipcode: data.address_zipcode,
      },
    };
    dispatch(createBusiness(businessData));
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleNumberChange = (event, field) => {
    form.setValue(field, Number(event.target.value));
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border p-4 rounded-lg shadow-md border-purple-900">
        <Button
          variant="outline"
          onClick={() => navigate("/owner/mybusiness")}
          className="mb-4"
        >
          Back to My Business
        </Button>
        <h2 className="text-2xl font-bold text-center mb-4">Create Business</h2>
        <ScrollArea className="h-[500px] w-[500px] overflow-y-auto">
          <div className="p-4 space-y-4 rounded-lg border">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {currentStep === 1 && (
                  <>
                    <FormField
                      control={form.control}
                      name="business_owner_firstname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="First Name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="business_owner_lastname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Last Name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="business_email"
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
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="business_contact"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="1234567890"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="business_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Name</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Business Name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="business_ratings"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Ratings</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Business Ratings"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="business_minamount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Minimum Amount</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Business Minimum Amount"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}
                {currentStep === 2 && (
                  <>
                    <FormField
                      control={form.control}
                      name="address_street"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Street Address</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Street Address"
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
                            <Input type="text" placeholder="City" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="address_state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State</FormLabel>
                          <FormControl>
                            <Input type="text" placeholder="State" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="address_country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Country"
                              {...field}
                            />
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
                            <Input
                              type="text"
                              placeholder="Zipcode"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}
                <div className="flex justify-between">
                  {currentStep > 1 && (
                    <Button variant="outline" onClick={handlePrevStep}>
                      Back
                    </Button>
                  )}
                  {currentStep < 2 && (
                    <Button onClick={handleNextStep}>Continue</Button>
                  )}
                  {currentStep === 2 && <Button type="submit">Submit</Button>}
                </div>
              </form>
            </Form>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
