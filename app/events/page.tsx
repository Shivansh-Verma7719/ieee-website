import React from 'react';
import EventCard from '../../components/landing/EventCard';

const events = [
  { 
    id: '1', 
    title: 'Annual Hackathon', 
    date: 'October 15, 2024', 
    category: 'Hackathon',
    content: 'Join us for 24 hours of coding, creativity, and innovation!',
    src: '/images/hero-5.jpg',
    register: '/events/1'
  },
  { 
    id: '2', 
    title: 'Tech Talk: AI in Healthcare', 
    date: 'November 5, 2024', 
    category: 'Workshop',
    content: 'Learn about the latest applications of AI in the healthcare industry.',
    src: '/images/hero-4.jpg',
    register: '/events/2'
  },
  { 
    id: '3', 
    title: 'Networking Mixer', 
    date: 'December 1, 2024', 
    category: 'Networking',
    content: 'Connect with professionals and students in the tech industry.',
    src: '/images/hero-3.jpg',
    register: '/events/3'
  },
];

const EventsPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8 sm:space-y-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 pt-12 sm:pt-20">Upcoming Events</h1>
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 pt-12 sm:pt-20">Past Events</h1>
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
