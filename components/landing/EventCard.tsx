import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

const EventCard: React.FC<EventCardProps> = ({ id, title, date, description, imageUrl }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 shadow-md flex bg-white">
      <div className="flex-grow pr-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">{date}</p>
        <p className="mb-4">{description}</p>
        <Link href={`/events/${id}`} className="text-blue-500 hover:underline">
          Learn More
        </Link>
      </div>
      <div className="w-1/4 flex-shrink-0 p-2 bg-gray-100 rounded-lg">
        <div className="rounded-lg overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:scale-[1.02]">
          <Image 
            src={imageUrl} 
            alt={title} 
            width={250} 
            height={250} 
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default EventCard;