/**
 * v0 by Vercel.
 * @see https://v0.dev/t/QoUEK9AQLxQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function CreateBusiness() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    phoneNumber: "",
    businessName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    fundingGoal: "",
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const { toast } = useToast();

  useEffect(() => {
    if (showToast) {
      toast({
        variant: "destructive",
        title: "Error",
        description: toastMessage,
      });
    }
  }, [toast, showToast]);

  const handleNextStep = () => {
    if (
      currentStep === 1 &&
      (formData.firstName === "" ||
        formData.lastName === "" ||
        formData.businessEmail === "" ||
        formData.phoneNumber === "")
    ) {
      setToastMessage("Please enter all required details to continue");
      setShowToast(true);
      return;
    }
    if (
      currentStep === 2 &&
      (formData.businessName === "" ||
        formData.address === "" ||
        formData.city === "" ||
        formData.state === "" ||
        formData.country === "" ||
        formData.zipCode === "")
    ) {
      setToastMessage("Please enter all required details to continue");
      setShowToast(true);
      return;
    }
    setCurrentStep(currentStep + 1);
  };
  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Business Details</h1>
        <p className="text-muted-foreground">
          Fill out the form to get started with your business.
        </p>
      </div>
      {currentStep === 1 && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="businessEmail">Business Email</Label>
            <Input
              id="businessEmail"
              name="businessEmail"
              type="email"
              value={formData.businessEmail}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePreviousStep}
              disabled={currentStep === 1}
            >
              Back
            </Button>
            <Button onClick={handleNextStep}> Continue</Button>
          </div>
        </div>
      )}
      {currentStep === 2 && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="businessName">Business Name</Label>
            <Input
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State/Region</Label>
              <Input
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zipCode">Zip/Postal Code</Label>
              <Input
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="flex justify-between">
            <Button variant="outline" onClick={handlePreviousStep}>
              Back
            </Button>
            <Button onClick={handleNextStep}>Continue</Button>
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fundingGoal">Minimum Starting Amount</Label>
            <Input
              id="fundingGoal"
              name="fundingGoal"
              type="number"
              value={formData.fundingGoal}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex justify-between">
            <Button variant="outline" onClick={handlePreviousStep}>
              Back
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </div>
      )}
    </div>
  );
}
