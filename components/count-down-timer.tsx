"use client"

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate?: Date;
  className?: string;
  variant?: 'hero' | 'card';
}

const CountdownTimer = ({ 
  targetDate = new Date('2025-01-05T00:00:00'), 
  className = "",
  variant = 'hero'
}: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (variant === 'card') {
    return (
      <div className={`bg-sports-green text-sports-dark p-6 rounded-2xl ${className}`}>
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-4xl font-bold">{String(timeLeft.days).padStart(2, '0')}</div>
            <div className="text-sm font-medium opacity-70">Days</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">{String(timeLeft.hours + timeLeft.minutes / 60).slice(0, 2)}</div>
            <div className="text-sm font-medium opacity-70">Speakers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="text-sm font-medium opacity-70">Brands</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex space-x-8 ${className}`}>
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-white">
          {String(timeLeft.days).padStart(2, '0')}
        </div>
        <div className="text-sm text-white/70 font-medium">DAYS</div>
      </div>
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-white">
          {String(timeLeft.hours).padStart(2, '0')}
        </div>
        <div className="text-sm text-white/70 font-medium">HOURS</div>
      </div>
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-white">
          {String(timeLeft.minutes).padStart(2, '0')}
        </div>
        <div className="text-sm text-white/70 font-medium">MINUTES</div>
      </div>
    </div>
  );
};

export default CountdownTimer;