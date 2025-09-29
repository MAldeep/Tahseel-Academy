"use client";
import React from "react";
import { images } from "../../../public/assets/images";

export default function Hero() {
  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {/* Background Image */}
      <img
        src={images.hero.src}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        {/* Content goes here */}
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to My Website</h1>
          <p className="mt-4 text-lg md:text-xl">
            This is the hero section
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-black rounded-lg shadow-md hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
