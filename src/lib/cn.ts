import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]): string {
  // Merge class names
  return twMerge(clsx(inputs));
}
