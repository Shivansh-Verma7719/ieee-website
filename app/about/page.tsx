"use client"; // This marks the file as a Client Component
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use from next/navigation for Next.js 13
import Image from "next/image";
import { Timeline } from "../../components/ui/timeline"; // Import the timeline component

// Define the structure for the timeline data (matching the expected type in Timeline component)
interface TimelineEntry {
  title: string;
  date: string;
  content: string; // Add 'content' property
}

const timelineData: TimelineEntry[] = [
  { title: "Founded", date: "2020-01-01", content: "IEEE Ashoka was founded." },
  { title: "First Event", date: "2020-03-15", content: "We held our first event focusing on AI and machine learning." },
  { title: "International Collaboration", date: "2021-05-10", content: "Partnered with IEEE chapters globally for knowledge sharing." },
  { title: "Hackathon", date: "2022-10-20", content: "Organized a successful 24-hour hackathon." },
  { title: "Research Publication", date: "2023-06-30", content: "Published research on sustainable technology." }
];

const AboutPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const galleryImages = [
    "/images/lorem.png",
    "/images/lorem.png",
    "/images/lorem.png",
    "/images/lorem.png",
    "/images/lorem.png",
    "/images/lorem.png",
    "/images/lorem.png",
    "/images/lorem.png",
    "/images/lorem.png",
    "/images/lorem.png",
    "/images/lorem.png",
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="relative font-sans p-1 max-w-6xl mx-auto rounded-lg shadow-lg pb-10 mt-24 bg-gradient-to-br from-[#23417c] via-[#467eb5] to-[#fbfbf8]">
        <header className="pb-4 border-b-2 border-purple-400 mb-8 text-left text-3xl font-bold text-white">
          IEEE ASHOKA UNIVERSITY STUDENT CHAPTER
        </header>
        <section className="relative z-10 flex justify-between items-start space-x-8">
          <div className="flex-1 text-left">
            <h2 className="text-2xl font-semibold mb-4 text-white">Mission and Vision</h2>
            <div className="bg-transparent px-2 rounded-lg mb-4">
              <h3 className="text-xl font-semibold mb-2 text-white">Mission Statement</h3>
              <p className="text-white">
                The Ashoka chapter focuses on fostering innovation, and collaboration to
                impact society and improve professional development.
              </p>
            </div>
            <div className="bg-transparent px-2 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">Vision Statement</h3>
              <p className="text-white">
                To enable evolving ideas that can solve pressing challenges come to life.
                Create a space that accommodates a diverse set of voices to produce
                dynamic solutions to the ever-changing world’s challenges.
              </p>
            </div>
          </div>
          <div>
            <img
              src="/images/logo.png"
              alt="IEEE Ashoka"
              className="bg-white rounded-[12px] w-72 h-85 object-cover p-2"
            />
          </div>
        </section>
        <aside className="relative z-10 mt-7 bg-indigo-100 p-6 rounded-lg w-48">
          <h3 className="text-lg font-semibold mb-2">Get involved:</h3>
          <ul className="list-none">
            <li className="mb-2">✔️ Our events</li>
            <li className="mb-2">✔️ Membership</li>
            <li>✔️ Sponsorship</li>
          </ul>
        </aside>
        <button className="relative z-10 mt-10 px-6 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition">
          About IEEE
        </button>
      </div>
      
      {/* Timeline Section */}
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-[#23417c]">Our Timeline</h2>
        <Timeline data={timelineData} /> {/* Pass timeline data as a prop */}
      </div>

    

    
      {/* Image Gallery */}
      <div className="mt-12 w-full bg-white p-4 rounded-lg shadow-lg">
        <div className="overflow-x-auto whitespace-nowrap">
          <div className="inline-flex space-x-4">
            {galleryImages.slice(0, 4).map((src, index) => (
              <div key={index} className="p-2 transition transform hover:scale-105 flex-shrink-0">
                <img
                  className="rounded-lg"
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  width={400}
                  height={400}
                />
              </div>
            ))}
            {/* Display rest of the images in a horizontally scrollable view */}
            {galleryImages.slice(4).map((src, index) => (
              <div key={index + 4} className="p-2 transition transform hover:scale-105 flex-shrink-0">
                <img
                  className="rounded-lg"
                  src={src}
                  alt={`Gallery Image ${index + 5}`}
                  width={400}
                  height={400}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
