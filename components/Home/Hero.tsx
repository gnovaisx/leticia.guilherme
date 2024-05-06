"use client";
import bg from "@/public/bg4.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-[calc(100vh-100px)] w-screen">
      <Image alt="bg" src={bg} className="w-full h-full object-cover" />
    </div>
  );
}
