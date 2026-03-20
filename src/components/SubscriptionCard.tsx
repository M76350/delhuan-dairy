import React from "react";
import { Check, Zap } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PayButton from "@/components/PayButton";

interface SubscriptionPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  razorpayLink: string;
  popular?: boolean;
  badge?: string;
}

const plans: SubscriptionPlan[] = [
  {
    id: "weekly-cow",
    name: "Weekly Cow Milk",
    price: "₹350",
    period: "/ week",
    description: "Fresh cow milk delivered daily for 7 days",
    features: [
      "1 Litre/day cow milk",
      "Daily morning delivery",
      "Quality tested",
      "Cancel anytime",
    ],
    // Replace with your actual Razorpay payment link
    razorpayLink: "https://rzp.io/l/delhuan-weekly-cow",
  },
  {
    id: "monthly-cow",
    name: "Monthly Cow Milk",
    price: "₹1,400",
    period: "/ month",
    description: "Best value — 30 days of pure cow milk",
    features: [
      "1 Litre/day cow milk",
      "Daily morning delivery",
      "Quality tested",
      "Free home delivery",
      "Save ₹100 vs weekly",
    ],
    razorpayLink: "https://rzp.io/l/delhuan-monthly-cow",
    popular: true,
    badge: "Best Value",
  },
  {
    id: "monthly-buffalo",
    name: "Monthly Buffalo Milk",
    price: "₹2,100",
    period: "/ month",
    description: "Rich, creamy buffalo milk for 30 days",
    features: [
      "1 Litre/day buffalo milk",
      "Daily morning delivery",
      "High fat content",
      "Free home delivery",
      "Priority support",
    ],
    razorpayLink: "https://rzp.io/l/delhuan-monthly-buffalo",
    badge: "Premium",
  },
];

const SubscriptionCard: React.FC = () => {
  return (
    <section id="subscriptions" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-accent/20 text-accent-dark text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Subscription Plans
          </span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-4">
            Subscribe & Save
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get fresh milk delivered to your door every morning. Choose a plan
            and pay securely via Razorpay.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-primary shadow-lg scale-105"
                  : "border-border hover:border-primary/40"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground px-4 py-1 text-xs font-bold">
                    {plan.popular && <Zap className="w-3 h-3 mr-1 inline" />}
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pt-8 pb-4">
                <h3 className="text-xl font-poppins font-bold text-primary">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {plan.description}
                </p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {plan.period}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="pb-8">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <PayButton
                  link={plan.razorpayLink}
                  label="Subscribe Now"
                  className={`w-full justify-center ${
                    plan.popular ? "premium-gradient text-white" : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Secure payments powered by{" "}
          <span className="font-semibold text-primary">Razorpay</span>. Cancel
          or modify your subscription anytime via WhatsApp.
        </p>
      </div>
    </section>
  );
};

export default SubscriptionCard;
