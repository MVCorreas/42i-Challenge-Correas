"use client";

import Navbar from "../Components/NavBar";
import InvestmentSection from "../Components/InvestmentSection";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-grow">
       <InvestmentSection/>
      </div>
    </div>
  );
}
