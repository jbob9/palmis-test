"use client";

import type React from "react";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bell,
  Calendar,
  Clock,
  ExternalLink,
  Heart,
  Play,
  Share2,
  Twitch,
  Users,
  Video,
  Youtube,
} from "lucide-react";
import { useEffect, useState } from "react";

interface StreamPlatform {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  isLive: boolean;
  viewerCount?: number;
  description: string;
  color: string;
}

export default function StreamPage() {
  const [eventStarted, setEventStarted] = useState(false);
  const [timeUntilEvent, setTimeUntilEvent] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("youtube");

  // Check if event has started (March 15, 2025 7:00 PM)
  useEffect(() => {
    const eventDate = new Date("2025-09-30T19:00:00");

    const checkEventStatus = () => {
      const currentTime = new Date();
      const timeDiff = eventDate.getTime() - currentTime.getTime();

      if (timeDiff <= 0) {
        setEventStarted(true);
        setTimeUntilEvent("");
      } else {
        setEventStarted(false);
        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

        if (hours > 24) {
          const days = Math.floor(hours / 24);
          setTimeUntilEvent(`${days} day${days !== 1 ? "s" : ""} remaining`);
        } else if (hours > 0) {
          setTimeUntilEvent(`${hours}h ${minutes}m remaining`);
        } else {
          setTimeUntilEvent(`${minutes} minutes remaining`);
        }
      }
    };

    checkEventStatus();
    const interval = setInterval(checkEventStatus, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const streamPlatforms: StreamPlatform[] = [
    {
      id: "youtube",
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/live/bridgerton-creole-ball",
      isLive: eventStarted,
      viewerCount: eventStarted ? 2847 : undefined,
      description:
        "Flux de haute qualité avec interaction par chat et angles de caméra multiples",
      color: "text-red-600",
    },
    {
      id: "twitch",
      name: "Twitch",
      icon: Twitch,
      url: "https://twitch.tv/bridgerton-legacy",
      isLive: eventStarted,
      viewerCount: eventStarted ? 1923 : undefined,
      description:
        "Expérience de streaming interactive avec engagement du public en temps réel.",
      color: "text-purple-600",
    },
    {
      id: "tiktok",
      name: "TikTok Live",
      icon: Video,
      url: "https://tiktok.com/@bridgertonlegacy/live",
      isLive: eventStarted,
      viewerCount: eventStarted ? 5621 : undefined,
      description: "Flux optimisé pour mobile, parfait pour une visualisation en déplacement",
      color: "text-pink-600",
    },
  ];

  const selectedPlatformData = streamPlatforms.find(
    (p) => p.id === selectedPlatform
  );

  return (
      <div className="pb-24">
        {/* Header */}
      {!eventStarted ? (
          <section className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Play className="w-8 h-8 text-primary" />
              <h1 className="text-3xl sm:text-4xl font-bold font-[var(--font-playfair-display)]">
                Live Stream
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Vivez Le Bal Créole où que vous soyez dans le monde grâce à notre diffusion en direct multiplateforme
            </p>

            {/* Event Status */}
            
              <div className="space-y-2">
                <Badge variant="outline" className="text-lg px-6 py-3">
                  <Clock className="w-4 h-4 mr-2" />
                  {timeUntilEvent}
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Vivez Le Bal Créole où que vous soyez dans le monde grâce à notre diffusion en direct multiplateforme
                </p>
              </div>
              <Button className="mt-4" onClick={() => setEventStarted(true)}>
                🔴 Simulate Livel
                </Button>
          </div>
        </section>
      ): null}

        <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 pb-12">
          {eventStarted ? (
            /* Live Streaming Interface */
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Stream Player */}
              <div className="lg:col-span-3">
                <Card className="overflow-hidden py-0">
                  <div className="aspect-[16/12] md:aspect-video bg-black relative">
                    {/* Simulated Video Player */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                      <div className="text-center text-white">
                        <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                        <h3 className="text-xl font-semibold mb-2">
                          Bridgerton Legacy – Le Bal Créole
                        </h3>
                        <p className="text-sm opacity-80">
                          Live from Grand Ballroom, New Orleans
                        </p>
                        <Badge className="mt-4 bg-red-600 text-white">
                          🔴 LIVE
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Stream Controls */}
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">
                          Le Bal Créole - Live Stream
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>
                              {selectedPlatformData?.viewerCount?.toLocaleString()}{" "}
                              viewers
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>March 15, 2025</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Heart className="w-4 h-4 mr-1" />
                          Like
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="w-4 h-4 mr-1" />
                          Share
                        </Button>
                      </div>
                    </div>

                    {/* Platform Selector */}
                    <Tabs
                      value={selectedPlatform}
                      onValueChange={setSelectedPlatform}
                    >
                      <TabsList className="grid w-full grid-cols-3">
                        {streamPlatforms.map((platform) => {
                          const Icon = platform.icon;
                          return (
                            <TabsTrigger
                              key={platform.id}
                              value={platform.id}
                              className="flex items-center gap-2"
                            >
                              <Icon className={`w-4 h-4 ${platform.color}`} />
                              {platform.name}
                            </TabsTrigger>
                          );
                        })}
                      </TabsList>

                      {streamPlatforms.map((platform) => (
                        <TabsContent
                          key={platform.id}
                          value={platform.id}
                          className="mt-4"
                        >
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-muted-foreground">
                              {platform.description}
                            </p>
                            <Button asChild variant="outline" size="sm">
                              <a
                                href={platform.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="w-4 h-4 mr-1" />
                                Open in {platform.name}
                              </a>
                            </Button>
                          </div>
                        </TabsContent>
                      ))}
                    </Tabs>
                  </CardContent>
                </Card>
              </div>

              {/* Live Chat & Info */}
              <div className="lg:col-span-1">
                <div>
                  {/* Event Schedule */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Tonight&quot;s Schedule</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Welcome Reception</span>
                        <span className="text-muted-foreground">7:00 PM</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Cultural Performances</span>
                        <span className="text-muted-foreground">7:30 PM</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Opening Ceremony</span>
                        <span className="text-muted-foreground">8:00 PM</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Grand Ball Dancing</span>
                        <span className="text-muted-foreground">8:30 PM</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Midnight Celebration</span>
                        <span className="text-muted-foreground">12:00 AM</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ) : (
            /* Pre-Event Information */
            <div className="max-w-4xl mx-auto">
              <Alert className="mb-8">
                <Bell className="h-4 w-4" />
                <AlertDescription>
                  La diffusion en direct débutera automatiquement au début de l'événement. Ajoutez cette page à vos favoris et revenez le 30 septembre à 19h00 (heure centrale).
                </AlertDescription>
              </Alert>

              {/* Platform Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {streamPlatforms.map((platform) => {
                  const Icon = platform.icon;
                  return (
                    <Card key={platform.id} className="text-center">
                      <CardHeader>
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className={`w-8 h-8 ${platform.color}`} />
                        </div>
                        <CardTitle>{platform.name}</CardTitle>
                        <CardDescription>
                          {platform.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button
                          variant="outline"
                          className="w-full bg-transparent"
                          disabled
                        >
                          <Clock className="w-4 h-4 mr-2" />
                          Available at Event Time
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* What to Expect */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-[var(--font-playfair-display)]">
                    À quoi s'attendre de notre diffusion en direct
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2">
                        Plusieurs angles de caméra
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Vivez le bal sous différents angles grâce à notre caméra professionnelle qui capture chaque instant magique.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                       Performances culturelles
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Assistez à des spectacles culturels créoles authentiques et à des divertissements traditionnels de l’époque de Bridgerton.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Chat interactif</h3>
                      <p className="text-muted-foreground text-sm">
                        Rejoignez la conversation avec les téléspectateurs du monde entier et partagez votre enthousiasme en temps réel.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Dans les coulisses</h3>
                      <p className="text-muted-foreground text-sm">
                        Obtenez des aperçus exclusifs des préparatifs, des interviews avec les artistes et des moments spéciaux.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
  );
}
