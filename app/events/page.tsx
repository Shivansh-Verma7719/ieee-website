import React from 'react';
import EventCard from '../../components/landing/EventCard';

const events = [
  { 
    id: '1', 
    title: 'Annual Hackathon', 
    date: 'October 15, 2024', 
    description: 'Join us for 24 hours of coding, creativity, and innovation!',
    imageUrl: '/images/hero-5.jpg'
  },
  { 
    id: '2', 
    title: 'Tech Talk: AI in Healthcare', 
    date: 'November 5, 2024', 
    description: 'Learn about the latest applications of AI in the healthcare industry.',
    imageUrl: '/images/hero-4.jpg'
  },
  { 
    id: '3', 
    title: 'Networking Mixer', 
    date: 'December 1, 2024', 
    description: 'Connect with professionals and students in the tech industry.',
    imageUrl: '/images/hero-3.jpg'
  },
];

const EventsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-10">
        <h1 className="text-3xl font-bold mb-8 pt-12">Upcoming Events</h1>
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;