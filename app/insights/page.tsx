"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContactSection } from "@/components/ContactSection";

gsap.registerPlugin(SplitText, ScrollTrigger);

const insights = [
  {
    id: 1,
    image: "https://neilpatel.com/wp-content/uploads/2023/02/Tips-for-Writing-a-Blog-Post-in-Under-60-Minutes.jpg",
    title: "Loyalty & Advocacy: The Hourglass Flips, and Every Bad Experience Becomes the Next Buyer's First Impression.",
    date: "08.02.2026",
    category: "Brand Strategy",
    readTime: "5 min read"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1558685555-bcdb675f9b9a?q=80&w=1470",
    title: "The Future of Digital Experience: Why Personalization is No Longer Optional",
    date: "05.02.2026",
    category: "Experience Design",
    readTime: "7 min read"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    title: "Sustainable Branding: How Eco-Conscious Design Builds Trust",
    date: "01.02.2026",
    category: "Creative Concept",
    readTime: "6 min read"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    title: "Visual Identity in the Age of AI: Balancing Automation with Authenticity",
    date: "28.01.2026",
    category: "Logo and Visual Identity",
    readTime: "8 min read"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80",
    title: "Brand Communications: Storytelling Strategies for 2026",
    date: "25.01.2026",
    category: "Brand Communications",
    readTime: "4 min read"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
    title: "The Psychology of Color in Modern Branding",
    date: "20.01.2026",
    category: "Brand Strategy",
    readTime: "6 min read"
  }
];

export default function Page() {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const insightsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Set up refs for insight cards
  const setInsightRef = (index: number) => (el: HTMLDivElement | null) => {
    insightsRef.current[index] = el;
  };

  useEffect(() => {
    // Animation for header
    if (headerRef.current) {
      gsap.fromTo(headerRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

   
    insightsRef.current.forEach((insight, index) => {
      if (insight) {
        gsap.fromTo(insight,
          {
            opacity: 0,
            y: 60,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: insight,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });


    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
    <main>
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Header */}
        <h1 
          ref={headerRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter pb-8 sm:pb-12 md:pb-16 lg:pb-20"
        >
          Insights
        </h1>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {insights.map((insight, index) => (
            <div 
              key={insight.id}
              ref={setInsightRef(index)}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="overflow-hidden rounded-lg mb-4 sm:mb-5 md:mb-6">
                <img 
                  src={insight.image} 
                  alt={insight.title}
                  className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Category Tag */}
              <div className="mb-2 sm:mb-3">
                <span className="inline-block text-xs sm:text-sm font-medium text-yellow-600 bg-yellow-50 px-2 py-1 rounded">
                  {insight.category}
                </span>
              </div>
              
              {/* Title */}
              <h4 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold tracking-tight mb-2 sm:mb-3 group-hover:text-yellow-600 transition-colors duration-300 line-clamp-3">
                {insight.title}
              </h4>
              
              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm sm:text-base text-gray-500">
                <p>{insight.date}</p>
                <p>{insight.readTime}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button (Optional) */}
        <div className="flex justify-center mt-12 sm:mt-16 md:mt-20">
          <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-black text-white rounded-sm hover:bg-yellow-400 hover:text-black transition-all duration-300 text-sm sm:text-base font-medium">
            Load More Insights
          </button>
        </div>

       
      </section>
      <ContactSection />
      </main>
    </>
  );
}