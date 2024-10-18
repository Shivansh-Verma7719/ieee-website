"use client"; // This marks the file as a Client Component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use from next/navigation for Next.js 13

const AboutPage = () => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);

  const galleryImages = [
    "/images/lorem.png",
    "/images/lorem.png",
    "/images/lorem.png",
    "/images/lorem.png",
    "/images/lorem.png",
    "/images/lorem.png"
  ];

  const moreImages = [
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

  return (
    <>
      <div className="relative font-sans p-6 max-w-5xl mx-auto rounded-lg shadow-lg pb-10 pt-20 bg-gradient-to-br from-[#23417c] via-[#23417c] to-[#d47557]">
        <header className="pb-4 border-b-2 border-purple-400 mb-8 text-left text-3xl font-bold text-white">
          IEEE ASHOKA UNIVERSITY STUDENT CHAPTER
        </header>
        <section className="relative z-10 flex justify-between items-start space-x-8">
          <div className="flex-1 text-left">
            <h2 className="text-2xl font-semibold mb-4 text-white">Mission and Vision</h2>
            <div className="bg-transparent p-6 rounded-lg mb-4">
              <h3 className="text-xl font-semibold mb-2 text-white">Mission Statement</h3>
              <p className="text-white">
                The Ashoka chapter focuses on fostering innovation, and collaboration to
                impact society and improve professional development.
              </p>
            </div>
            <div className="bg-transparent p-6 rounded-lg">
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
        <aside className="relative z-10 mt-8 bg-indigo-100 p-6 rounded-lg w-48">
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

      {/* Image Gallery */}
      <div className="mt-12 w-full bg-white p-4 rounded-lg shadow-lg">
        <div className="overflow-x-auto">
          <div className="grid grid-cols-3 gap-2">
            {galleryImages.map((src, index) => (
              <div key={index} className="p-1">
                <img
                  className="rounded-lg"
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  width={400}
                  height={400}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View More Button */}
      <button
        onClick={() => setShowPopup(true)}
        className="fixed bottom-4 right-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition z-50"
      >
        View More
      </button>

      {/* Popup Window */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg p-6 w-4/5 h-4/5 overflow-y-auto">
            <button
              onClick={() => setShowPopup(false)}
              className="fixed top-2 left-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition z-50"
            >
              Close
            </button>
            <div className="grid grid-cols-3 gap-4">
              {moreImages.map((src, index) => (
                <div key={index} className="p-1">
                  <img
                    className="rounded-lg"
                    src={src}
                    alt={`More Gallery Image ${index + 1}`}
                    width={400}
                    height={400}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutPage;
