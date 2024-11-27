"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import EmblaCarousel from "@/components/ui/carousel/carousel";
import { EmblaOptionsType } from "embla-carousel";
import { Photo } from "./actions";
import "@/app/about/embla.css";
import { NumberTicker } from "@/components/ui/numberTicker";
import Image from "next/image";

const OPTIONS: EmblaOptionsType = { align: "start", loop: true };

const data = [
  {
    title: "About",
    content: (
      <div>
        <p className="text-neutral-800 text-lg md:text-xl font-normal mb-8">
          The IEEE Ashoka Student Branch (IASB) is created to encourage, promote
          and reward distinction in the areas of computer science, biology and
          other areas of interest to IEEE at Ashoka University.
        </p>
      </div>
    ),
  },
  {
    title: "What We Do",
    content: (
      <div>
        <p className="text-neutral-800 text-lg md:text-xl font-normal mb-4">
          At Ashoka University, our society presents a unique opportunity to
          cater to a student community from various academic backgrounds. With
          our flagship hands-on lab sessions, coupled with an earnest attempt to
          increase technological literacy in the community at large, we look
          forward to providing scientific exposure that leads to the development
          of an enthusiastic and inclusive STEM audience.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/about/whiteboard.jpg"
            alt="Workshop"
            width={500}
            height={500}
            className="rounded-lg object-cover h-36 md:h-56 lg:h-80 w-full shadow-lg"
          />
          <Image
            src="/images/about/chimera.jpg"
            alt="Chimera"
            width={500}
            height={500}
            className="rounded-lg object-cover h-36 md:h-56 lg:h-80 w-full shadow-lg"
          />
          <Image
            src="/images/about/run.png"
            alt="Run for a Cause"
            width={500}
            height={500}
            className="rounded-lg object-cover h-36 md:h-56 lg:h-80 w-full shadow-lg"
          />
          <Image
            src="/images/about/caliper.png"
            alt="Caliper"
            width={500}
            height={500}
            className="rounded-lg object-cover h-36 md:h-56 lg:h-80 w-full shadow-lg"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Our Impact",
    content: (
      <div>
        <p className="text-neutral-800 text-lg md:text-xl font-normal mb-4">
          Through our yearly fundraiser event, Run for a Cause, we have raised
          over ₹20,000 for Neev, the community engagement club at Ashoka, for
          STEM equipment for workshops for children around the area. Our yearly
          inter-collegiate fest, Chimera, and yearly Ashokan STEM Expo, Caliper,
          raises awareness about STEM @ Ashoka to the greater university and
          academic community through academic talks, competitions, and student
          research presentations. Our flagship workshops, Bugs & Bytes, offers
          the opportunity to explore the sciences through a hands-on learning
          experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <h2 className="font-normal text-black text-4xl">
              <NumberTicker value={3000} />+
            </h2>
            <p className="text-sm md:text-lg font-normal">Students Reached</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-normal text-black text-4xl">
              <NumberTicker value={20} />+
            </h2>
            <p className="text-sm md:text-lg font-normal">Events Conducted</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-normal text-black text-4xl">
              <NumberTicker value={10} />+
            </h2>
            <p className="text-sm md:text-lg font-normal">
              Workshops Conducted
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function AboutWrapper({ photos }: { photos: Photo[] }) {
  return (
    <>
      <div className="w-full pb-10">
        <Timeline data={data} />
      </div>

      <EmblaCarousel
        slides={photos}
        options={OPTIONS}
        isLoading={photos.length === 0}
      />
    </>
  );
}
