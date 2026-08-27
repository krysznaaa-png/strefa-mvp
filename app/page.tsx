"use client";

import { useMemo, useState } from "react";

type Tab = "home" | "discover" | "bookings" | "benefits" | "profile";

type Service = {
  name: string;
  place: string;
  price: number;
  category: string;
  icon: "fitness" | "trainer" | "yoga" | "spa" | "dance" | "massage";
};

const services: Service[] = [
  {
    name: "Siłownia",
    place: "STREFA Fitness Centrum",
    price: 49,
    category: "Sport",
    icon: "fitness",
  },
  {
    name: "Trening personalny",
    place: "STREFA Fitness Centrum",
    price: 90,
    category: "Sport",
    icon: "trainer",
  },
  {
    name: "Joga",
    place: "STREFA Fitness Centrum",
    price: 45,
    category: "Wellness",
    icon: "yoga",
  },
  {
    name: "SPA & Wellness",
    place: "STREFA SPA",
    price: 120,
    category: "Wellness",
    icon: "spa",
  },
  {
    name: "Taniec",
    place: "STREFA Studio",
    price: 55,
    category: "Aktywność",
    icon: "dance",
  },
  {
    name: "Masaż",
    place: "STREFA SPA",
    price: 110,
    category: "Wellness",
    icon: "massage",
  },
];

const categories = ["Wszystko", "Sport", "Wellness", "Aktywność"];

const timeSlots = [
  "09:00",
  "10:00",
  "11:30",
  "12:30",
  "13:30",
  "15:00",
  "16:30",
  "18:00",
  "19:30",
  "20:00",
];

function Icon({
  name,
  size = 24,
}: {
  name: string;
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "home":
      return (
        <svg {...common}>
          <path d="M3 10.5 12 
