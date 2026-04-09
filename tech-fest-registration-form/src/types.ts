export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  college: string;
  department: string;
  year: string;
  events: string[];
  teamName: string;
  teamSize: string;
  tshirtSize: string;
  dietaryPreference: string;
  experience: string;
  accommodation: string;
  agreeTerms: boolean;
}

export interface FormErrors {
  [key: string]: string;
}

export interface EventInfo {
  id: string;
  name: string;
  icon: string;
  description: string;
  category: string;
  date: string;
  teamSize: string;
  prize: string;
  venue: string;
}
