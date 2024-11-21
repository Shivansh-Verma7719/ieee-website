"use client";
import React from "react";
import { ExpandableCardDemo } from "@/components/ui/expandableCards";
import { Event } from "@/app/events";

const EventsWrapper = ({ events }: { events: Event[] }) => {

  return (
    <div className="container mx-auto px-12 sm:px-24 lg:px-32 py-12">
      <div className="space-y-8 sm:space-y-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 pt-12 sm:pt-20">
          Our Events
        </h1>
        <ExpandableCardDemo cards={events} />
      </div>
    </div>
  );
};

export default EventsWrapper;
