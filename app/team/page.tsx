"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const facultyMembers = [
    {
      name: "Subhashis Banerjee",
      desig: "Faculty Counsellor",
      email: "name@example.com",
      website: "example.org",
      imageUrl: "/images/Suban.jpg",
    },
    {
      name: "Lorem Ipsum",
      desig: "Title2",
      email: "lorem.ipsun@ashoka.edu.in",
      website: "ashoka.edu.in",
      imageUrl: "/images/lorem.png",
    },

    {
      name: "Firstname Lastname",
      desig: "Title 3",
      email: "name@example.com",
      website: "example.org",
      imageUrl: "/images/faculty3.jpg",
    },

    {
      name: "Firstname Lastname",
      desig: "Title 4",
      email: "name@example.com",
      website: "example.org",
      imageUrl: "/images/faculty4.jpg",
    },
    // Add more faculty members as needed
  ];

  const Council = [
    {
      name: "Firstname Lastname",
      email: "name1@example.com",
      website: "example.org",
      imageUrl: "/images/faculty1.jpg",
      desig: "Title 1",
    },

    {
      name: "Firstname Lastname",
      email: "name2@example.com",
      website: "example.org",
      imageUrl: "/images/faculty1.jpg",
      desig: "Title 2",
    },

    {
      name: "Firstname Lastname",
      email: "name3@example.com",
      website: "example.org",
      imageUrl: "/images/faculty1.jpg",
      desig: "Title 3",
    },

    {
      name: "Firstname Lastname",
      email: "name4@example.com",
      website: "example.org",
      imageUrl: "/images/faculty1.jpg",
      desig: "Title 4",
    },
    // Add more as needed
  ];

  const General = [
    {
      name: "Firstname Lastname",
      website: "example.org",
      email: "name1@example.com",
      imageUrl: "/images/faculty1.jpg",
      desig: "Title 1",
    },

    {
      name: "Firstname Lastname",
      website: "example.org",
      email: "name2@example.com",
      imageUrl: "/images/faculty2.jpg",
      desig: "Title 2",
    },

    {
      name: "Firstname Lastname",
      website: "example.org",
      email: "name3@example.com",
      imageUrl: "/images/faculty3.jpg",
      desig: "Title 3",
    },

    {
      name: "Firstname Lastname",
      website: "example.org",
      email: "name4@example.com",
      imageUrl: "/images/faculty3.jpg",
      desig: "Title 4",
    },
    // Add more as needed
  ];

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
      }
    },
  };

  return (
    <div className="min-h-screen p-12 gap-25 sm:p-20 relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.h1
        className="text-center text-6xl pb-4 font-bold mb-6 mt-8 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
      >
        Meet the Team
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#467eb5]"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.3 }}
        />
      </motion.h1>

      {/* Faculty Section */}
      <motion.h2
        className="text-center text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.45 }}
      >
        Faculty Council
      </motion.h2>
      <motion.div
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 p-2 pb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12"
      >
        {facultyMembers.map((faculty, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="bg-white rounded-lg p-6 flex flex-col items-center shadow-lg"
          >
            <div className="relative w-40 h-40 border-5 border-[#467eb5] rounded-full overflow-hidden">
              <Image
                className="rounded-full"
                src={faculty.imageUrl}
                alt={`${faculty.name} Image`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="font-bold text-2xl mt-6">{faculty.name}</h2>
            <div className="mt-4 text-center">
              <p className="text-sm text-[#c2674b] font-bold">
                <span className="font-bold"></span>
                {faculty.desig}
              </p>
              <p className="text-sm text-[#d47557] font-bold">
                <a href={`mailto:${faculty.email}`}>
                  <Image
                    src="https://static.vecteezy.com/system/resources/previews/020/009/614/large_2x/email-and-mail-icon-black-free-png.png"
                    alt="Email"
                    className="inline w-6 h-6 mr-1"
                    width={24}
                    height={24}
                  />
                </a>
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Council Section */}
      <motion.h2
        className="text-center text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.45 }}
      >
        Executive Council
      </motion.h2>
      <motion.div
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
        className="grid p-2 pb-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12"
      >
        {Council.map((council, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
          >
            <div className="relative w-40 h-40 border-5 border-[#467eb5] rounded-full overflow-hidden">
              <Image
                className="rounded-full"
                src={council.imageUrl}
                alt={`${council.name} Image`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="font-bold text-2xl mt-6">{council.name}</h2>
            <div className="mt-4 text-center">
              <p className="text-sm text-[#c2674b] font-bold">
                {council.desig}
              </p>
              <p className="text-sm text-[#d47557] font-bold"> </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* General Member Section */}
      <motion.h2
        className="text-center text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.45 }}
      >
        General Members
      </motion.h2>
      <motion.div
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
        className="grid p-2 pb-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12"
      >
        {General.map((general, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
          >
            <div className="relative w-40 h-40 border-5 border-[#467eb5] rounded-full overflow-hidden">
              <Image
                className="rounded-full"
                src={general.imageUrl}
                alt={`${general.name} Image`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="font-bold text-2xl mt-6">{general.name}</h2>
            <div className="mt-4 text-center">
              <p className="text-sm text-[#c2674b] font-bold">
                {general.desig}
              </p>
              <p className="text-sm text-[#d47557] font-bold"> </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
