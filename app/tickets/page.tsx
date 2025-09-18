"use client";

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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import {
  Check,
  CreditCard,
  Crown,
  LoaderCircle,
  Minus,
  Plus,
  Sparkles,
  Users,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import { payTicket } from "./mutation.server";
import Image from "next/image"

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
    name: "Admission générale",
    price: 100,
    description:
      "Vivez la magie du Bal Créole avec un accès complet à la salle de bal principale et aux festivités.",
    features: [
      "Accès à la salle de bal principale",
      "Cocktail de bienvenue",
      "Spectacles culturels",
      "Danser jusqu'à minuit",
      "Programme commémoratif",
    ],
    icon: Users,
    maxQuantity: 4,
    available: 245,
  },
  {
    id: "premium",
    name: "Expérience Premium",
    price: 175,
    description:
      "Une expérience haut de gamme avec des équipements VIP et un accès exclusif aux zones premium.",
    features: [
      "Tous les avantages de l'admission générale",
      "Cocktail VIP",
      "Espace salon haut de gamme",
      "Vestiaire gratuit",
      "Scéance photo professionnelle",
      "Sac cadeau exclusif",
    ],
    icon: Crown,
    maxQuantity: 2,
    available: 89,
  },
  {
    id: "royal",
    name: "Forfait Cour royale",
    price: 250,
    description:
      "L'expérience de luxe ultime avec un accès exclusif et un service personnalisé.",
    features: [
      "Tous les avantages de l'Expérience Premium",
      "Réception privée avant l'événement",
      "Table réservée pour le dîner",
      "Service de conciergerie personnel",
      "Rencontre avec les artistes",
      "Arrangement de transport de luxe",
      "Bijoux souvenirs personnalisés",
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
  const [loading, setLoading] = useState(false);

  const [paymentType, setPaymentType] = useState("moncash");

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

  const handlePurchase = async () => {
    // In a real app, this would integrate with a payment processor
    const totalTickets = getTotalTickets();
    const price = getTotalPrice();
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
    setLoading(true);
    if (paymentType === "moncash") {
      const res = await payTicket("moncash", price, totalTickets);
      if (res?.redirectUrl) {
        window.location.href = res.redirectUrl;
      }
      return;
    }

    const res = await payTicket("stripe", price, totalTickets);
    if (res?.redirectUrl) {
      window.location.href = res.redirectUrl;
    }
    setLoading(false);
    return;
  };

  return (
    <div>
      {/* Header */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 font-[var(--font-playfair-display)]">
            Réservez votre place au Bal Créole
          </h1>
          <p className="text-lg opacity-90">
            Choisissez votre niveau d&apos;expérience et réservez vos billets pour cette célébration culturelle extraordinaire.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ticket Selection */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Sélectionnez vos billets</h2>
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
                      <div className="flex items-start flex-col md:flex-row justify-between gap-3">
                        <div className="flex items-cente gap-3">
                          <div className="w-12 h-12 min-w-12 bg-primary/10 rounded-full flex items-center justify-center">
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
                          <div className="text-xl font-bold text-primary">
                            {ticket.price} HTG
                          </div>
                          <Badge
                            variant={isAvailable ? "secondary" : "destructive"}
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
                              onClick={() => updateTicketQuantity(ticket.id, 1)}
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
                                <div className="font-medium">{ticket.name}</div>
                                <div className="text-sm text-muted-foreground">
                                  Qty: {quantity}
                                </div>
                              </div>
                              <div className="font-semibold">
                                {ticket.price * quantity} HTG
                              </div>
                            </div>
                          );
                        })}
                      <Separator />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span className="text-primary">
                          {getTotalPrice()} HTG
                        </span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Customer Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Customer Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
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
                    <div className="space-y-2">
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
                  <div className="space-y-2">
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
                  <div className="space-y-2">
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
              {/* Purchase Button */}
              <div>
                <RadioGroup
                  defaultValue="moncash"
                  onValueChange={(v) => setPaymentType(v)}
                >
                  <div className="flex items-center space-x-2 border rounded-2xl p-2">
                    <RadioGroupItem value="moncash" id="moncash" />
                    <Image
                    width={56}
                      height={36}
                      src={"/moncash.png"}
                      alt="Moncash logo"
                      className="w-14 h-8 object-contain"
                    />
                    <Label htmlFor="moncash">Moncash</Label>
                  </div>
                  <div className="flex items-center space-x-2  border rounded-2xl p-2">
                    <RadioGroupItem value="card" id="card" />
                    <Image
                      width={56}
                      height={36}
                      src={"/card.png"}
                      alt="Moncash logo"
                      className="w-14 h-8 object-contain"
                    />
                    <Label htmlFor="card">Card</Label>
                  </div>
                </RadioGroup>
              </div>
              <Button
                onClick={handlePurchase}
                size="lg"
                className="w-full text-lg py-6"
                disabled={getTotalTickets() <= 0 || loading}
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Complete Purchase - ${getTotalPrice()}
                {loading ? <LoaderCircle className="h-4 w-4 animate-spin" />: null}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
