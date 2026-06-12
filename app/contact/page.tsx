"use client";

import { useRef, useState } from "react";
import GeneralForm from "@/components/GeneralForm";
import HireForm from "@/components/HireForm";
import PartnerForm from "@/components/PartnerForm";
import { useGroupScrollAnimation } from "@/hooks/useGroupScrollAnimation";
import { useEaseAnimation } from "@/hooks/useEaseAnimation";



type TabId = "hire" | "partner" | "general";

export default function Page() {
  const [activeTab, setActiveTab] = useState<TabId>("hire");
  const tabsRef = useRef<HTMLDivElement>(null);
  const { setRef: setFormRef } = useGroupScrollAnimation(activeTab)

  useEaseAnimation(tabsRef);
 
  

  const tabs: TabId[] = ["hire", "partner", "general"];
  const labels: Record<TabId, string> = { 
    hire: "Hire Us", 
    partner: "Partner With Us", 
    general: "General Inquiry" 
  };
  const forms: Record<TabId, React.ReactNode> = { 
    hire: <HireForm />, 
    partner: <PartnerForm />, 
    general: <GeneralForm /> 
  };

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <section className="grid lg:grid-cols-2 grid-cols-1 2xl:p-40 xl:p-20 px-10 py-20 gap-20">
        
      
<div className="lg:space-y-8 space-y-6 lg:border-r lg:border-gray-200 lg:pr-20">
  <h1 className="xl:text-6xl text-4xl font-bold tracking-tighter leading-[1.2]">
    Big Dreams Need Bold <span className="text-yellow-400 inline-block">Collaborators.</span>
  </h1>
  <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
    Whether you're launching something new, refreshing your brand, or
    looking to break through the noise — we'd love to build it with you.
  </p>
</div>

       
        <div className="flex flex-col">
          <div ref={tabsRef} className="pb-20">
            <div className="flex flex-wrap border border-gray-200 bg-white rounded-lg overflow-hidden">
              {tabs.map((tab, index) => (
                <div
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    flex-1 min-w-[120px] sm:min-w-[140px] md:min-w-[160px]
                    p-2 sm:p-3 md:p-4 text-center cursor-pointer transition-all duration-300
                    ${activeTab === tab 
                      ? "bg-yellow-400 text-black" 
                      : "bg-white text-gray-700 hover:bg-gray-50"
                    }
                    ${index < tabs.length - 1 ? "border-r border-gray-200" : ""}
                  `}
                >
                  <h1 className="text-xs sm:text-sm md:text-base lg:text-sm 2xl:text-base font-medium uppercase tracking-tight">
                    {labels[tab]}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <div ref={setFormRef(0)}>{forms[activeTab]}</div>
        </div>

      </section>
    </main>
  );
}