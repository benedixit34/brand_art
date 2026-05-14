"use client"; // Required for useState

import { useState } from "react";
import GeneralForm from "@/components/GeneralForm";
import HireForm from "@/components/HireForm";
import PartnerForm from "@/components/PartnerForm";

export default function Page() {
  const [activeTab, setActiveTab] = useState("hire");
  

  return (
    <>
    
      <main className="relative min-h-screen bg-white overflow-hidden">
      <div className="absolute z-0 inset-0 bg-[url('/img/BACK.png')] bg-cover bg-center opacity-10 pointer-events-none">
        </div>
        <section className="grid lg:grid-cols-2 grid-cols-1 2xl:p-40 xl:p-20 px-10 py-20 relative gap-20">
          <div className="lg:space-y-10 space-y-6 lg:border-r-1 lg:pr-20">
            <h1 className="2xl:text-8xl/24 text-4xl/14 font-bold tracking-tighter">
              Big Dreams Need Bold <span className="text-amber-500">Collaborators.</span>
            </h1>
            <p className="text-xl/12 font-light">
              Whether you're launching something new, refreshing your brand, or
              looking to break through the noise—we’d love to build it with you.
            </p>
          </div>

          <div className="pb-20 flex flex-col gap-y-10">
            <div className="grid grid-cols-3 2xl:text-xl xl:text-lg text-sm font-medium tracking-tight border-1 bg-white place-content-stretch text-center cursor-pointer">
              
              <div 
                onClick={() => setActiveTab("hire")}
                className={`md:p-4 p-2 border-r-1 transition-colors ${activeTab === 'hire' ? 'bg-teal-400' : 'bg-white'}`}
              >
                <h1>Hire Us</h1>
              </div>

              <div 
                onClick={() => setActiveTab("partner")}
                className={`md:p-4 p-2 border-r-1 transition-colors ${activeTab === 'partner' ? 'bg-teal-400' : 'bg-white'}`}
              >
                <h1>Partner With Us</h1>
              </div>

              <div 
                onClick={() => setActiveTab("general")}
                className={`md:p-4 p-2 transition-colors ${activeTab === 'general' ? 'bg-teal-400' : 'bg-white'}`}
              >
                <h1>General Inquiry</h1>
              </div>
            </div>

         
            <div className="mt-10">
              {activeTab === "hire" && <HireForm />}
            {activeTab === "partner" && <PartnerForm />}
            {activeTab === "general" && <GeneralForm />}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}