"use client";

import "@/styles/globals.css";

import Hero from "@/components/ui/Hero";
import Subscription from "@/components/ui/Subscription";
import TechnologySolutions from "@/components/ui/Services";
import ProjectShowcasing from "@/components/ui/ProjectShowcasing";
import HowWeWork from "@/components/ui/HowWeWork";
import MilestoneSection from "@/components/ui/MilestoneSection";
import TestimonialSection from "@/components/ui/ClientTestimonials";
// import OurLocations from "@/components/OurLocation";
import ContactUs from "@/components/ui/ContactUsSection";
import GsapAnimejs from '@/components/ui/AnimatedGradientBg' 
import DevtechTape from '@/components/ui/DevtechTape' 
import Techrain from '@/components/ui/Techrain' 

import Noise from '@/assets/Taxture.png'
import DottedLine from '@/assets/SVGs/Dotted-Line-for-Section.svg';

import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full overflow-hidden relative">
      <div className="  relative w-full h-screen">
        <Hero />
      </div>
      <div className="relative w-full h-auto">
        <div className="relative w-full h-auto bg-cover  bg-center bg-no-repeat">
          <Image className="absolute lg:left-[-10%] lg:top-[-42.5%] xl:top-[-41.2%]  2xl:left-20 2xl:top-[-41%] h-full z-0 w-full opacity-30 overflow-hidden object-fill" src={DottedLine} alt="Background" />
          <div id="about">
            <Subscription />
          </div>
          <div id="services">
            <TechnologySolutions />
          </div>
          <DevtechTape/>
          <div id="products">
            <ProjectShowcasing />
          </div>
          <div id="why-us">
            <HowWeWork />
          </div>
        </div>

        <div className="relative w-full h-auto">
          <MilestoneSection />
          <div id="testimonials">
            {/* <TestimonialSection /> */}
          </div>
          <div className="absolute invisible lg:visible left-[10%] p-4 sm:p-5 sm:left-[20%] md:left-[9%] lg:left-[10%] xl:left-[15%] 2xl:left-[18%] top-[43%] z-30 w-2/3 sm:w-3/5 md:w-5/6 lg:w-4/5 xl:w-5xl 2xl:w-2/3 bg-white rounded-4xl shadow-[2px_2px_8px_#00000040] md:flex flex-col gap-1 lg:flex-row items-center justify-between">
            <span className="text-center sm:text-left">
              "Statistics show that
              <span className="text-red-500"> 95%</span>
              of new products introduced each year end up failing"
            </span>
            <span className="mt-4 text-blue-500 sm:mt-0">With Us It Won't Happen!</span>
          </div>
        </div>

        <div className="relative w-full h-auto">
          <div id="contact">
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
}
