import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Mock function to fetch event data
const getEventById = (id: string) => {
  const events = [
    { id: '1', title: 'Annual Hackathon', date: 'October 15, 2024', description: 'Join us for 24 hours of coding, creativity, and innovation!', location: 'University Campus', time: '9:00 AM - 9:00 AM (next day)', registration: 'Open until October 10, 2024', coverPhoto: '/images/hero-5.jpg' },
    { id: '2', title: 'Tech Talk: AI in Healthcare', date: 'November 5, 2024', description: 'Learn about the latest applications of AI in the healthcare industry.', location: 'Virtual Event', time: '6:00 PM - 7:30 PM', registration: 'Open until November 3, 2024', coverPhoto: '/images/hero-4.jpg' },
    { id: '3', title: 'Networking Mixer', date: 'December 1, 2024', description: 'Connect with professionals and students in the tech industry.', location: 'TechHub Downtown', time: '7:00 PM - 9:00 PM', registration: 'Open until November 28, 2024', coverPhoto: '/images/hero-3.jpg' },
  ];
  return events.find(event => event.id === id);
};

export default function EventPage({ params }: { params: { id: string } }) {
  const event = getEventById(params.id);

  if (!event) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100"> {/* Set page background color */}
      {/* Cover Photo Section */}
      <div className="relative">
        <img src={event.coverPhoto} alt={`${event.title} cover photo`} className="w-full h-96 object-cover rounded-lg shadow-lg" />
        <div className="absolute rounded inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">{event.title}</h1>
        </div>
      </div>

      {/* Event Details and Register Button Section */}
      <div className="mt-8 flex flex-col md:flex-row md:space-x-6 h-auto">
  {/* Event Details */}
  <div className="bg-white shadow-lg rounded-lg p-6 flex-grow">
    <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
    <p><strong>Date:</strong> {event.date}</p>
    <p><strong>Time:</strong> {event.time}</p>
    <p><strong>Location:</strong> {event.location}</p>
    <p><strong>Registration:</strong> {event.registration}</p>
  </div>

  {/* Register Button */}
  <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-center md:w-1/4 md:h-full h-auto"> {/* Ensures equal height */}
    <a
      href="#"
      className="inline-block bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition"
    >
      Register Now
    </a>
  </div>
</div>

      {/* Event Description Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-4">
        <div className="prose mt-8">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p>{event.description}</p>
        </div>
      </div>

      {/* Back to Events Link */}
      <Link href="/events" className="text-blue-500 hover:underline block mt-6">
        &larr; Back to Events
      </Link>
    </div>
  );
}
