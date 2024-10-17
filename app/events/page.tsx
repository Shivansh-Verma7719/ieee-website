"use client";
import React from "react";
import { ExpandableCardDemo } from "@/components/ui/expandableCards";
import getEvents, { Event } from "@/app/events";
import { useState, useEffect } from "react";

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await getEvents();
      setEvents(res);
    };
    fetchEvents();
  }, []);
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8 sm:space-y-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 pt-12 sm:pt-20">
          Upcoming Events
        </h1>
        <ExpandableCardDemo cards={events} />
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 pt-12 sm:pt-20">
          Past Events
        </h1>
        <ExpandableCardDemo cards={events} />
      </div>
    </div>
  );
};

export default EventsPage;
