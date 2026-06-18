"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContactSection } from "@/components/ContactSection";
import { useGroupScrollAnimation } from "@/hooks/useGroupScrollAnimation";
import { useEaseAnimation } from "@/hooks/useEaseAnimation";


gsap.registerPlugin(SplitText, ScrollTrigger);

const tabs = [
  { id: "All", label: "All" },
  { id: "brand", label: "Brand Strategy" },
  { id: "creative", label: "Creative Concept" },
  { id: "logo", label: "Visual Identity" },
  { id: "communications", label: "Brand Comms" },
  { id: "experience", label: "Experience Design" },
];

const projects = [
  {
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f4d11b222383449.67e4d3f6ab80f.jpg",
    title: "MotoMight",
    href: "",
    description:
      "Strategy, visual identity, and experience design for a concept-driven brand.",
    category: "brand",
  },
  {
    image:
      "https://static.wixstatic.com/media/84b06e_c6eba792b09f4cf2bc555f26a381e1cb~mv2.png/v1/fill/w_1000,h_571,al_c,q_90,usm_0.66_1.00_0.01/84b06e_c6eba792b09f4cf2bc555f26a381e1cb~mv2.png",
    title: "DesignCo",
    href: "",
    description:
      "Brand architecture and digital systems for a forward-thinking studio.",
    category: "creative",
  },
  {
    image:
      "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&q=80",
    title: "Luminary",
    href: "",
    description:
      "Editorial design and motion identity for an independent publishing house.",
    category: "logo",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    title: "Terroir",
    href: "",
    description:
      "Packaging, spatial, and digital experience for an artisanal food brand.",
    category: "communications",
  },
  {
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    title: "Axiom Studio",
    href: "",
    description:
      "Full-stack brand system and product design for a boutique architecture firm.",
    category: "experience",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=800&q=80",
    title: "Vantage",
    href: "",
    description:
      "Visual strategy, typeface selection, and UX direction for a fintech startup.",
    category: "brand",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    title: "Nullform",
    href: "",
    description:
      "Experimental identity and interactive installation design for a digital art collective.",
    category: "creative",
  },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState("All");
  const tabsRef = useRef(null);
  const headerRef = useRef(null);

  const { setRef: setProjectRef } = useGroupScrollAnimation(activeTab);
  useEaseAnimation(tabsRef)
  useEaseAnimation(headerRef);

  const filteredProjects = projects.filter((p) =>
    activeTab === "All" ? true : p.category === activeTab
  );

  return (
    <>
      <main>
        <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-8 sm:py-12 md:py-16 lg:py-20">
          <h1
            ref={headerRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
          >
            Portfolio
          </h1>

          <div ref={tabsRef} className="py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="flex flex-wrap border border-gray-200 bg-white rounded-lg overflow-hidden">
              {tabs.map((tab, index) => (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                  flex-1 min-w-[120px] sm:min-w-[140px] md:min-w-[160px]
                  p-2 sm:p-3 md:p-4 text-center cursor-pointer transition-all duration-300
                  ${
                    activeTab === tab.id
                      ? "bg-yellow-400 text-black"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }
                  ${index < tabs.length - 1 ? "border-r border-gray-200" : ""}
                `}
                >
                  <h1 className="text-xs sm:text-sm md:text-base lg:text-sm 2xl:text-base font-medium uppercase tracking-tight">
                    {tab.label}
                  </h1>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                ref={setProjectRef(index)}
                className="flex flex-col gap-4 sm:gap-5 md:gap-6 group"
              >
                {/* Image */}
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Title and Explore Link */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter">
                    {project.title}
                  </h1>
                  <a
                    href={project.href}
                    className="text-lg sm:text-xl md:text-2xl tracking-tight hover:underline underline-offset-4 transition-all"
                  >
                    Explore
                  </a>
                </div>

                {/* Divider */}
                <div className="border-b border-gray-200" />

                {/* Description */}
                <p className="text-base sm:text-lg md:text-xl leading-relaxed sm:leading-10 font-light">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <ContactSection />

      </main>
    </>
  );
}
