"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "@/public/images/puzzle/puzzle_piece_1.png";

export default function Home() {
  const facultyMembers = [

    {
      name: "Dr. Debayan Gupta",
      desig: "Faculty Counsellor",
      email: "debayan.gupta@ashoka.edu.in",
      imageUrl: "/images/Debayan Gupta.jpg",
    },
    
    {
      name: "Subhashis Banerjee",
      desig: "Institutional Department Head",
      email: "subhan@ashoka.edu.in",
      imageUrl: "/images/Suban.jpg",
    },
    {
      name: "Dr. Partha Pratim Das",
      desig: "Faculty Advisor",
      email: "partha.das@ashoka.edu.in",
      imageUrl: "/images/Partha pratim Das.webp",
    },


    {
      name: "Dr. Sudipta Tung",
      desig: "Faculty Advisor",
      email: "sudipta.tung@ashoka.edu.in",
      imageUrl: "/images/Sudipta Tung.webp",
    },
    // Add more faculty members as needed
  ];

  const Council = [
    {
      name: "Kashyap J",
      imageUrl: "/images/Kashyap J.jpg",
      desig: "Co-Director, PR",
    },

    {
      name: "Sashwat Dhanuka",
      imageUrl: "/images/Sashwat Dhanuka.jpg",
      desig: "Co-Director, IT",
    },

    {
      name: "Firstname Lastname",
      imageUrl: "/images/faculty1.jpg",
      desig: "Title 3",
    },

    {
      name: "Firstname Lastname",
      imageUrl: "/images/faculty1.jpg",
      desig: "Title 4",
    },
    // Add more as needed
  ];

  const General = [
    {
      name: "Munashe Nyagono",
      imageUrl: "/images/Munashe Nyagono.jpeg",
      desig: "IT",
    },

    {
      name: "Aarush Anandh",
      imageUrl: "/images/Aarush Anandh.jpeg",
      desig: "IT",
    },

    {
      name: "Abhimanyu Durvasula",
      imageUrl: "/images/Abhimanyu Durvasula.jpg",
      desig: "IT",
    },

    {
      name: "Soham Tulsyan",
      imageUrl: "/images/Soham Tulsyan.jpeg",
      desig: "IT",
    },

    {
      name: "Shreenand Bhattad",
      imageUrl: "/images/Shreenand Bhattad (1).jpeg",
      desig: "Growth",
    },

    {
      name: "Kaushik Patra",
      imageUrl: "/images/Kaushik Patra.jpeg",
      desig: "Growth",
    },

    {
      name: "Roshni Pai",
      imageUrl: "/images/Roshni Pai.jpeg",
      desig: "Growth",
    },

    {
      name: "Sarthak Ghosh",
      imageUrl: "/images/SARTHAK GHOSH.jpg",
      desig: "Growth",
    },

    {
      name: "Soham Lad",
      imageUrl: "/images/Soham Lad.jpeg",
      desig: "Growth",
    },

    {
      name: "Tia Mohanani",
      imageUrl: "/images/Tia Mohanani.JPG",
      desig: "PR",
    },

    {
      name: "Anjashi Ghosh",
      imageUrl: "/images/Anjashi Ghosh.jpg",
      desig: "PR",
    },

    {
      name: "Shreya Rajagopal",
      imageUrl: "/images/Shreya Rajagopal.jpeg",
      desig: "PR",
    },

    {
      name: "Riday Chatterjee",
      imageUrl: "/images/Riday CHatterjee.jpg",
      desig: "E&O",
    },


    {
      name: "Dheer Jhaveri",
      imageUrl: "/images/Dheer Jhaveri.jpeg",
      desig: "E&O",
    },

    {
      name: "Kenisha Chandak",
      imageUrl: "/images/Kenisha Chandak.jpg",
      desig: "E&O",
    },

    {
      name: "Sarthak Saini",
      imageUrl: "/images/Sarthak Saini.jpg",
      desig: "E&O",
    },

    {
      name: "Papaa Morindat",
      imageUrl: "/images/Papaa Morindat.jpg",
      desig: "E&O",
    },

    {
      name: "Hrishika Popli",
      imageUrl: "/images/Hrishika Popli.jpeg",
      desig: "E&O",
    },


    {
      name: "Megha Mudakkayil",
      imageUrl: "/images/Megha Mudakkayil.jpg",
      desig: "E&O",
    },
    // Add more as needed
  ];

  const CoreTeam = [
    {
      name: "Agnim Agarwal",
      imageUrl: "/images/Agnim Agarwal.jpg",
      desig: "Secretary",
    },
    {
      name: "Core Member 2",
      imageUrl: "/images/core2.jpg",
      desig: "Core Title 2",
    },
    {
      name: "Core Member 3",
      imageUrl: "/images/core3.jpg",
      desig: "Core Title 3",
    },
    {
      name: "Core Member 4",
      imageUrl: "/images/core4.jpg",
      desig: "Core Title 4",
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
            className="bg-transparent p-6 flex flex-col items-center shadow-lg"
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

      {/* Core Team Section */}
      <motion.h2
        className="text-center text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.45 }}
      >
        Core Team
      </motion.h2>
      <motion.div
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12"
      >
        {CoreTeam.map((core, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="rounded-lg p-6 flex flex-col items-center shadow-lg"
          >
            <div className="relative w-40 h-40 border-5 border-[#467eb5] rounded-full overflow-hidden">
              <Image
                src={core.imageUrl || "/images/placeholder.jpg"}
                alt={`${core.name} Image`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="font-bold text-2xl mt-6">{core.name}</h2>
            <p className="mt-4 text-sm text-[#c2674b] font-bold">
              {core.desig}
            </p>
          </motion.div>
        ))}
      </motion.div>
<br></br>
<br></br>
      {/* Executive Council Section */}
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
            className="shadow-lg rounded-lg p-6 flex flex-col items-center"
          >
            <div className="relative w-40 h-40 border-5 border-[#467eb5] rounded-full overflow-hidden">
              <Image
                src={council.imageUrl || "/images/placeholder.jpg"}
                alt={`${council.name} Image`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="font-bold text-2xl mt-6">{council.name}</h2>
            <p className="mt-4 text-sm text-[#c2674b] font-bold">
              {council.desig}
            </p>
            <p className="text-sm text-[#d47557] font-bold">
            </p>
          </motion.div>
        ))}
      </motion.div>
      {/* General Section */}
      <motion.h2
        className="text-center text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.45 }}
      >
        General Team
      </motion.h2>
      <motion.div
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12"
      >
        {General.map((general, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="rounded-lg p-6 flex flex-col items-center shadow-lg"
          >
            <div className="relative w-40 h-40 border-5 border-[#467eb5] rounded-full overflow-hidden">
              <Image
                src={general.imageUrl || "/images/placeholder.jpg"}
                alt={`${general.name} Image`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="font-bold text-2xl mt-6">{general.name}</h2>
            <p className="mt-4 text-sm text-[#c2674b] font-bold">
              {general.desig}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
