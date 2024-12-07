export interface Business {
  id: string;
  name: string;
  description: string;
  logo: string;
  coverImage: string;
  features: BusinessFeature[];
  contact: ContactInfo;
  socialMedia: SocialMedia;
  location: Location;
  isVerified?: boolean; // Indicates if the business is verified
  promotion?: string; // Current promotion or special offer
  categories?: string[]; // Tags or categories for the business
  ratings?: BusinessRatings; // Ratings information
  reviews?: BusinessReview[]; // Array of reviews (new)
  hours?: BusinessHours; // Business hours
  isOpen?: boolean; // Indicates if the business is currently open (new)
}

export interface BusinessFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface SocialMedia {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}

export interface Location {
  latitude: number;
  longitude: number;
  address: string;
  city: string;
  province: string; 
  country: string;
  postalCode: string; 
}

export interface BusinessRatings {
  average: number; // Average rating (out of 5 stars)
  count: number; // Number of reviews
}

export interface BusinessReview { 
  reviewer: string; 
  comment: string; 
  rating: number; // Rating given by the reviewer (out of 5 stars)
  date: string; // Date of the review
}

export interface BusinessHours {
  open: string; // Opening time in "HH:mm" format
  close: string; // Closing time in "HH:mm" format
}
