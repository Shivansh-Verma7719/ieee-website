import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Mock function to fetch event data
const getEventById = (id: string) => {
  const events = [
    { id: '1', title: 'Annual Hackathon', date: 'October 15, 2024', description: 'Join us for 24 hours of coding, creativity, and innovation!', location: 'University Campus', time: '9:00 AM - 9:00 AM (next day)', registration: 'Open until October 10, 2024' },
    { id: '2', title: 'Tech Talk: AI in Healthcare', date: 'November 5, 2024', description: 'Learn about the latest applications of AI in the healthcare industry.', location: 'Virtual Event', time: '6:00 PM - 7:30 PM', registration: 'Open until November 3, 2024' },
    { id: '3', title: 'Networking Mixer', date: 'December 1, 2024', description: 'Connect with professionals and students in the tech industry.', location: 'TechHub Downtown', time: '7:00 PM - 9:00 PM', registration: 'Open until November 28, 2024' },
  ];
  return events.find(event => event.id === id);
};

export default function EventPage({ params }: { params: { id: string } }) {
  const event = getEventById(params.id);

  if (!event) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 py-12">{event.title}</h1>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-2">Event Details</h2>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Time:</strong> {event.time}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Registration:</strong> {event.registration}</p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p>{event.description}</p>
      </div>
      <Link href="/events" className="text-blue-500 hover:underline">
        &larr; Back to Events
      </Link>
    </div>
  );
}