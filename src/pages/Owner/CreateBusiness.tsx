"use client";

import { useEffect, useState } from "react";
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
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  createBusiness,
  reset,
} from "@/store/owner-business/ownerBusinessSlice";
import axios from "axios";

import { Combobox } from "@/components/Combobox";

const validationSchema = z.object({
  business_owner_firstname: z.string().min(1, "First name is required"),
  business_owner_lastname: z.string().min(1, "Last name is required"),
  business_email: z.string().email("Invalid email address"),
  business_contact: z.string().min(10, "Phone number is required"),
  business_name: z.string().min(1, "Business name is required"),
  business_domain_code: z.string({
    required_error: "Please select a Business Domain.",
  }),
  business_state_code: z.string({
    required_error: "Please select a State.",
  }),
  business_ratings: z
    .number()
    .min(0, "Rating must be at least 0")
    .max(5, "Rating must be at most 5"),
  business_investment_amount: z.coerce
    .number()
    .positive("Business minimum amount must be positive"),
  address_street: z.string().min(1, "Street address is required"),
  address_city: z.string().min(1, "City is required"),
  address_country: z.string().min(1, "Country is required"),
  address_zipcode: z.string().min(1, "Zipcode is required"),
});

export default function CreateBusiness() {
  const [currentStep, setCurrentStep] = useState(1);
  const [states, setStates] = useState([]);
  const [domains, setDomains] = useState([]);
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
      business_domain_code: "",
      business_state_code: "",
      business_ratings: 0,
      business_investment_amount: 0,
      address_street: "",
      address_city: "",
      address_country: "",
      address_zipcode: "",
    },
  });

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/quick_codes/states"
        );
        const { data } = response;
        if (data.status === "success") {
          setStates(data.data);
        }
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    const fetchDomains = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/quick_codes/domains"
        );
        const { data } = response;
        if (data.status === "success") {
          setDomains(data.data);
        }
      } catch (error) {
        console.error("Error fetching domains:", error);
      }
    };

    fetchStates();
    fetchDomains();
  }, []);

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
    const selectedState = states.find(
      (state) => state.code === data.business_state_code
    );

    const businessData = {
      BusinessDetails: {
        business_owner_firstname: data.business_owner_firstname,
        business_owner_lastname: data.business_owner_lastname,
        business_email: data.business_email,
        business_contact: data.business_contact,
        business_state_code: data.business_state_code,
        business_domain_code: data.business_domain_code,
        business_name: data.business_name,
        business_ratings: data.business_ratings,
        business_investment_amount: data.business_investment_amount,
      },
      AddressDetails: {
        address_street: data.address_street,
        address_city: data.address_city,
        address_state: selectedState ? selectedState.name : "",
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

  if (isLoading) {
    return <div>Loading Spinner ...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-6 md:p-8 bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white border border-purple-900 rounded-lg shadow-md">
        <Button
          variant="outline"
          onClick={() => navigate("/owner/mybusiness")}
          className="mb-4"
        >
          Back to My Business
        </Button>
        <h2 className="text-2xl font-bold text-center mb-4">Create Business</h2>
        <ScrollArea className="h-[500px] max-h-[80vh] w-full overflow-y-auto">
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
                              onChange={(e) => {
                                const value = e.target.value;
                                if (
                                  value === "" ||
                                  (Number(value) >= 0 && Number(value) <= 5)
                                ) {
                                  field.onChange(value);
                                }
                              }}
                              onBlur={(e) => {
                                let value = Number(e.target.value);
                                if (value < 0) value = 0;
                                if (value > 5) value = 5;
                                field.onChange(value);
                              }}
                              min={0}
                              max={5}
                              step={0.1}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="business_domain_code"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Domains</FormLabel>
                          <Combobox
                            form={form}
                            field={field}
                            domains={domains}
                            Info="Domain"
                            formValue="business_domain_code"
                          />
                          <FormDescription>Select the Domains</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="business_investment_amount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Minimum Amount</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Business Investment Amount"
                              {...field}
                              onChange={(e) =>
                                field.onChange(Number(e.target.value))
                              }
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
                      name="business_state_code"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>States</FormLabel>
                          <Combobox
                            form={form}
                            field={field}
                            domains={states}
                            Info="State"
                            formValue="business_state_code"
                          />
                          <FormDescription>Select the State</FormDescription>
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
                <div className="flex justify-between flex-wrap gap-4">
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
