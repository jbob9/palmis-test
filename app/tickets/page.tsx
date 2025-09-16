"use client";

import type React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Check,
  CreditCard,
  Crown,
  Minus,
  Plus,
  Sparkles,
  Users,
} from "lucide-react";
import { useState } from "react";

interface TicketType {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
  maxQuantity: number;
  available: number;
}

const ticketTypes: TicketType[] = [
  {
    id: "general",
    name: "General Admission",
    price: 150,
    description:
      "Experience the magic of Le Bal Créole with full access to the main ballroom and festivities.",
    features: [
      "Access to main ballroom",
      "Welcome cocktail reception",
      "Cultural performances",
      "Dancing until midnight",
      "Commemorative program",
    ],
    icon: Users,
    maxQuantity: 4,
    available: 245,
  },
  {
    id: "premium",
    name: "Premium Experience",
    price: 275,
    description:
      "Elevated experience with VIP amenities and exclusive access to premium areas.",
    features: [
      "All General Admission benefits",
      "VIP cocktail hour",
      "Premium seating area",
      "Complimentary coat check",
      "Professional photography session",
      "Exclusive gift bag",
    ],
    icon: Crown,
    maxQuantity: 2,
    available: 89,
  },
  {
    id: "royal",
    name: "Royal Court Package",
    price: 450,
    description:
      "The ultimate luxury experience with exclusive access and personalized service.",
    features: [
      "All Premium Experience benefits",
      "Private pre-event reception",
      "Reserved table for dinner",
      "Personal concierge service",
      "Meet & greet with performers",
      "Luxury transportation arrangement",
      "Custom keepsake jewelry",
    ],
    icon: Sparkles,
    maxQuantity: 2,
    available: 23,
  },
];

export default function TicketsPage() {
  const [selectedTickets, setSelectedTickets] = useState<
    Record<string, number>
  >({});
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const updateTicketQuantity = (ticketId: string, change: number) => {
    const currentQuantity = selectedTickets[ticketId] || 0;
    const ticketType = ticketTypes.find((t) => t.id === ticketId);
    if (!ticketType) return;

    const newQuantity = Math.max(
      0,
      Math.min(currentQuantity + change, ticketType.maxQuantity)
    );
    setSelectedTickets((prev) => ({
      ...prev,
      [ticketId]: newQuantity,
    }));
  };

  const getTotalPrice = () => {
    return Object.entries(selectedTickets).reduce(
      (total, [ticketId, quantity]) => {
        const ticketType = ticketTypes.find((t) => t.id === ticketId);
        return total + (ticketType?.price || 0) * quantity;
      },
      0
    );
  };

  const getTotalTickets = () => {
    return Object.values(selectedTickets).reduce(
      (total, quantity) => total + quantity,
      0
    );
  };

  const handlePurchase = () => {
    // In a real app, this would integrate with a payment processor
    const totalTickets = getTotalTickets();
    if (totalTickets === 0) {
      alert("Please select at least one ticket.");
      return;
    }

    if (
      !customerInfo.firstName ||
      !customerInfo.lastName ||
      !customerInfo.email
    ) {
      alert("Please fill in all required customer information.");
      return;
    }

    // Simulate successful purchase and redirect to merchandise
    alert(
      "Purchase successful! Redirecting to our exclusive merchandise collection..."
    );
    window.location.href = "/merchandise?from=tickets";
  };

  return (
    <div className="min-h-screen">
      <div className="pt-16">
        {/* Header */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 font-[var(--font-playfair-display)]">
              Reserve Your Place at Le Bal Créole
            </h1>
            <p className="text-lg opacity-90">
              Choose your experience level and secure your tickets to this
              extraordinary cultural celebration
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ticket Selection */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Select Your Tickets</h2>
              <div className="space-y-6">
                {ticketTypes.map((ticket) => {
                  const Icon = ticket.icon;
                  const quantity = selectedTickets[ticket.id] || 0;
                  const isAvailable = ticket.available > 0;

                  return (
                    <Card
                      key={ticket.id}
                      className={`${!isAvailable ? "opacity-50" : ""}`}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-xl">
                                {ticket.name}
                              </CardTitle>
                              <CardDescription className="text-base">
                                {ticket.description}
                              </CardDescription>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">
                              ${ticket.price}
                            </div>
                            <Badge
                              variant={
                                isAvailable ? "secondary" : "destructive"
                              }
                              className="text-xs"
                            >
                              {isAvailable
                                ? `${ticket.available} available`
                                : "Sold Out"}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2">Includes:</h4>
                          <ul className="space-y-1">
                            {ticket.features.map((feature, index) => (
                              <li
                                key={index}
                                className="flex items-center gap-2 text-sm text-muted-foreground"
                              >
                                <Check className="w-4 h-4 text-primary" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {isAvailable && (
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  updateTicketQuantity(ticket.id, -1)
                                }
                                disabled={quantity === 0}
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                              <span className="w-8 text-center font-semibold">
                                {quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  updateTicketQuantity(ticket.id, 1)
                                }
                                disabled={quantity >= ticket.maxQuantity}
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Max {ticket.maxQuantity} per order
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Order Summary & Customer Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Order Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {getTotalTickets() === 0 ? (
                      <p className="text-muted-foreground text-center py-4">
                        No tickets selected
                      </p>
                    ) : (
                      <div className="space-y-3">
                        {Object.entries(selectedTickets)
                          .filter(([, quantity]) => quantity > 0)
                          .map(([ticketId, quantity]) => {
                            const ticket = ticketTypes.find(
                              (t) => t.id === ticketId
                            );
                            if (!ticket) return null;

                            return (
                              <div
                                key={ticketId}
                                className="flex justify-between"
                              >
                                <div>
                                  <div className="font-medium">
                                    {ticket.name}
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    Qty: {quantity}
                                  </div>
                                </div>
                                <div className="font-semibold">
                                  ${ticket.price * quantity}
                                </div>
                              </div>
                            );
                          })}
                        <Separator />
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total</span>
                          <span className="text-primary">
                            ${getTotalPrice()}
                          </span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Customer Information */}
                {getTotalTickets() > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Customer Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            value={customerInfo.firstName}
                            onChange={(e) =>
                              setCustomerInfo((prev) => ({
                                ...prev,
                                firstName: e.target.value,
                              }))
                            }
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={customerInfo.lastName}
                            onChange={(e) =>
                              setCustomerInfo((prev) => ({
                                ...prev,
                                lastName: e.target.value,
                              }))
                            }
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={customerInfo.email}
                          onChange={(e) =>
                            setCustomerInfo((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={customerInfo.phone}
                          onChange={(e) =>
                            setCustomerInfo((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Purchase Button */}
                {getTotalTickets() > 0 && (
                  <Button
                    onClick={handlePurchase}
                    size="lg"
                    className="w-full text-lg py-6"
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Complete Purchase - ${getTotalPrice()}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
