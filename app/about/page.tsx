"use client"; // This marks the file as a Client Component
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { getPhotos, Photo } from "./helpers";
import EmblaCarousel from "@/components/ui/carousel/carousel";
import { EmblaOptionsType } from 'embla-carousel'
import '@/app/about/embla.css'

const OPTIONS: EmblaOptionsType = { align: 'start', loop: true }

const data = [
  {
    title: "About",
    content: (
      <div>
        <p className="text-sm md:text-base font-normal mb-8">
          IEEE Ashoka is a student-led chapter dedicated to fostering innovation
          and technological advancement on campus. We organize workshops,
          seminars, and projects to bridge the gap between academic learning and
          real-world applications in engineering and technology.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/IMG_6072.jpg"
            alt="IEEE Ashoka Workshop"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <Image
            src="/images/ieee-ashoka-event-2.jpg"
            alt="IEEE Ashoka Seminar"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <Image
            src="/images/ieee-ashoka-project-1.jpg"
            alt="IEEE Ashoka Project Showcase"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <Image
            src="/images/ieee-ashoka-team.jpg"
            alt="IEEE Ashoka Team"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
        </div>
      </div>
    ),
  },
  {
    title: "What We Do",
    content: (
      <div>
        <p className="text-neutral-800 text-sm md:text-base font-normal mb-4">
          IEEE Ashoka offers a wide range of activities and opportunities:
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Technical workshops and hands-on training sessions
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Guest lectures by industry experts and academics
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Hackathons and coding competitions
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Project showcases and tech exhibitions
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Networking events with industry professionals
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/ieee-ashoka-workshop.jpg"
            alt="IEEE Ashoka Workshop"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <Image
            src="/images/ieee-ashoka-hackathon.jpg"
            alt="IEEE Ashoka Hackathon"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Our Impact",
    content: (
      <div>
        <p className="text-neutral-800 text-sm md:text-base font-normal mb-4">
          
        </p>
      </div>
    )
  }
];

const AboutPage = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    getPhotos().then(setPhotos);
  }, []);

  return (
    <>
      <div className="w-full pb-10">
        <Timeline data={data} />
      </div>

      <EmblaCarousel slides={photos} options={OPTIONS} isLoading={photos.length === 0} />

      {/* Image Gallery */}
      {/* <div className="mt-12 mb-10 z-20 bg-[#fbfbf8] p-4 mx-auto max-w-7xl rounded-lg shadow-lg relative">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
        <div className="overflow-x-hidden whitespace-nowrap relative">
          <div 
            className="inline-flex space-x-4 transition-transform duration-300 ease-in-out pb-16"
            style={{ transform: `translateX(-${currentIndex * 400}px)` }}
          >
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="w-full md:w-1/4 p-2 transition transform hover:scale-105 flex-shrink-0"
              >
                <Image
                  className="rounded-lg object-cover shadow-lg"
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  width={400}
                  height={400}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <button
            onClick={scrollLeft}
            className={`bg-gray-100 flex items-center justify-center h-12 w-12 text-black rounded-full transition-colors disabled:opacity-50`}
            disabled={isAtStart}
            aria-label="Previous image"
          >
            <IconArrowNarrowLeft />
          </button>
          <button
            onClick={scrollRight}
            className={`bg-gray-100 flex items-center justify-center h-12 w-12 text-black rounded-full transition-colors disabled:opacity-50`}
            aria-label="Next image"
            disabled={isAtEnd}
          >
            <IconArrowNarrowRight />
          </button>
        </div>
      </div> */}
    </>
  );
};

export default AboutPage;
