import React from "react";
import { ExternalLink, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PayButtonProps {
  link: string;
  label?: string;
  variant?: "default" | "outline" | "ghost";
  className?: string;
}

/**
 * Razorpay payment link button.
 * Replace the `link` prop with your actual Razorpay payment page URL.
 * Example: https://rzp.io/l/your-payment-link
 */
const PayButton: React.FC<PayButtonProps> = ({
  link,
  label = "Pay Now",
  variant = "default",
  className = "",
}) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block">
    <Button variant={variant} className={`gap-2 ${className}`}>
      <CreditCard className="w-4 h-4" aria-hidden="true" />
      {label}
      <ExternalLink className="w-3 h-3 opacity-70" aria-hidden="true" />
    </Button>
  </a>
);

export default PayButton;
