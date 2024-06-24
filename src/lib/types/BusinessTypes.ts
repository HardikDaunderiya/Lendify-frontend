export interface Address {
  address_id: number;
  address_street: string;
  address_city: string;
  address_state: string;
  address_country: string;
  address_zipcode: string;
}

export interface Business {
  business_id: number;
  business_owner_id: number;
  business_owner_firstname: string;
  business_owner_lastname: string;
  business_email: string;
  business_contact: string;
  business_name: string;
  business_address_id: number;
  business_ratings: number;
  business_minamount: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface BusinessFeedResponse {
  business_info: Business[];
}

export interface BusinessDetailResponse {
  business_info: Business;
  address_info: Address;
}

export interface BusinessState {
  businesses: Business[];
  business: BusinessDetailResponse | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}
