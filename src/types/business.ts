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
  state: string;
  country: string;
  zipCode: string;
}