import React from 'react';
import { notFound } from 'next/navigation';

// Mock function to fetch event data
const getEventById = (id: string) => {
  const events = [
    // add events here and attributes
    { id: '1'}
  ];
  return events.find(event => event.id === id);
};

export default function EventPage({ params }: { params: { id: string } }) {
  const event = getEventById(params.id);

  if (!event) {
    notFound();
  }

  return (
    <>
    {/* Add event details page here */}
    </>
  );
}
