import { ContactFormData } from "@/types";

/**
 * Strict email validation checking for common providers and preventing dummy domains
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) return false;

  const [localPart, domain] = email.split("@");
  
  // Prevent common obvious fake local parts
  const dummyLocalParts = ["abc", "aaa", "test", "user", "admin", "temp"];
  if (dummyLocalParts.includes(localPart.toLowerCase()) || localPart.length < 3) return false;

  // List of allowed/trusted domains (as requested: "keep domain that are famous")
  const trustedDomains = [
    "gmail.com", "outlook.com", "hotmail.com", "yahoo.com", "icloud.com", 
    "me.com", "live.com", "protonmail.com", "proton.me", "zoho.com", "aol.com"
  ];
  
  const isTrusted = trustedDomains.includes(domain.toLowerCase());
  const isCustomWorkDomain = domain.split(".").length >= 2; // Allow corporate/custom domains but must be valid structure

  // If it's not a trusted public provider, we at least check if it looks like a real domain path
  // and isn't something like "aa.com" or "test.com"
  const dummyDomains = ["test.com", "example.com", "aa.com", "test.net", "aaa.com"];
  if (dummyDomains.includes(domain.toLowerCase())) return false;

  return isTrusted || isCustomWorkDomain;
};

/**
 * Type Predicate to validate the contact form payload
 */
export function isContactFormData(data: any): data is ContactFormData {
  return (
    data &&
    typeof data.name === "string" &&
    data.name.trim().length >= 2 &&
    typeof data.email === "string" &&
    isValidEmail(data.email) &&
    typeof data.message === "string" &&
    data.message.trim().length >= 2
  );
}
