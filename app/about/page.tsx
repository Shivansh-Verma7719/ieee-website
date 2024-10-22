"use client"; // This marks the file as a Client Component
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use from next/navigation for Next.js 13

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
    "/images/lorem.png"
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
      {/* Dropdown Section: Events and Operations */}
      <div className="mt-8">
        <button
          onClick={toggleDropdown}
          className="w-full text-left px-6 py-3 text-[#23417c] bg-white rounded-md font-semibold focus:outline-none transition"
        >
          {dropdownOpen ? "▼ Events and Operations" : "► Events and Operations"}
        </button>
        {dropdownOpen && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="flex space-x-4">
              <img
                src="/images/lorem.png"
                alt="Lorem Ipsum"
                className="w-48 h-48 object-cover rounded-lg"
              />
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Fusce sed libero nec urna posuere fermentum. Aenean in felis non felis fringilla auctor at at justo. Suspendisse sit amet velit nisi.
              </p>
            </div>
          </div>
        )}
      </div>
      {/* Image Gallery */}
      <div className="mt-12 w-full bg-white p-4 rounded-lg shadow-lg">
        <div className="overflow-x-auto whitespace-nowrap">
          <div className="inline-flex">
            {galleryImages.map((src, index) => (
              <div key={index} className="p-1 transition transform hover:scale-105">
                <img
                  className="rounded-lg"
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  width={300}
                  height={300}
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
