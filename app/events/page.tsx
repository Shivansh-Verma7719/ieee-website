"use client";
import React from "react";
import { ExpandableCardDemo } from "@/components/ui/expandableCards";
import getEvents, { Event } from "@/app/events";
import { useState, useEffect } from "react";
import { Skeleton } from "@nextui-org/react";

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const res = await getEvents();
        setEvents(res);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const EventSkeleton = () => (
    <div className="p-6 flex flex-col md:flex-row justify-between items-center rounded-xl shadow-md mb-4">
      <div className="flex gap-4 flex-col md:flex-row items-center md:items-start">
        <Skeleton className="h-40 w-40 md:h-30 md:w-30 rounded-lg" />
        <div className="flex flex-col items-center md:items-start">
          <Skeleton className="h-6 w-48 mb-2" />
          <Skeleton className="h-4 w-32 mb-2" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
      <Skeleton className="h-10 w-24 rounded-full mt-4 md:mt-0" />
    </div>
  );

  if (loading) {
    return (
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 py-12">
        <div className="space-y-8 sm:space-y-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 pt-12 sm:pt-20">
            Upcoming Events
          </h1>
          {[...Array(5)].map((_, index) => (
            <EventSkeleton key={`upcoming-${index}`} />
          ))}
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 pt-12 sm:pt-20">
            Past Events
          </h1>
          {[...Array(5)].map((_, index) => (
            <EventSkeleton key={`past-${index}`} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 sm:px-12 lg:px-20 py-12">
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
