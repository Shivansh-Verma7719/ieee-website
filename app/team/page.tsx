"use client";
import React from "react";
import {
  CoreTeam,
  Faculty,
  ITteam,
  EventsTeam,
  PRteam,
  GrowthTeam,
} from "./team";
import TeamSection from "@/components/TeamSection";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="min-h-screen py-14 px-6 gap-25 sm:p-20 relative overflow-hidden">
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

      <TeamSection title="Faculty Council" members={Faculty} />
      <br />
      <br />
      <TeamSection title="Core Team" members={CoreTeam} />
      <br />
      <br />
      <TeamSection title="IT Team" members={ITteam} />
      <br />
      <br />
      <TeamSection title="Events Team" members={EventsTeam} />
      <br />
      <br />
      <TeamSection title="PR Team" members={PRteam} />
      <br />
      <br />
      <TeamSection title="Growth Team" members={GrowthTeam} />
    </div>
  );
}
