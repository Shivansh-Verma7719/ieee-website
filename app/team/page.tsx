import React from 'react';
import Image from "next/image";
import { generateUtilityClass } from '@mui/material';

export default function Home() {
  const facultyMembers = [
    { name: "Subhashis Banerjee", 
      desig: "Faculty Counsellor",  
      email: "name@example.com", 
      website: "example.org", 
      imageUrl:  "/images/Suban.jpg"
    },
    { name: "Lorem Ipsum", 
      desig: "Title2", 
      email: "lorem.ipsun@ashoka.edu.in", 
      website: "ashoka.edu.in", 
      imageUrl: "/images/lorem.png" 
    },
    
    { name: "Firstname Lastname", 
      desig: "Title 3", 
      email: "name@example.com", 
      website: "example.org", 
      imageUrl: "/images/faculty3.jpg" 
    },

    { name: "Firstname Lastname", 
      desig: "Title 4", 
      email: "name@example.com", 
      website: "example.org", 
      imageUrl: "/images/faculty4.jpg" 
    },
    // Add more faculty members as needed
  ];


  const Council = [
    { name: "Firstname Lastname", 
      email: "name1@example.com", 
      website: "example.org", 
      imageUrl: "/images/faculty1.jpg",
      desig: "Title 1"
    },
    
    { name: "Firstname Lastname", 
      email: "name2@example.com", 
      website: "example.org",
      imageUrl: "/images/faculty1.jpg", 
      desig: "Title 2"
    },
    
    { name: "Firstname Lastname", 
      email: "name3@example.com", 
      website: "example.org", 
      imageUrl: "/images/faculty1.jpg",  
      desig: "Title 3"
    },
    
    
    { name: "Firstname Lastname", 
      email: "name4@example.com", 
      website: "example.org", 
      imageUrl: "/images/faculty1.jpg",
      desig: "Title 4" 
    },
    // Add more as needed
  ];

  const General = [
    { name: "Firstname Lastname", 
      website: "example.org", 
      email: "name1@example.com",  
      imageUrl: "/images/faculty1.jpg",
      desig: "Title 1"
    },
    
    { name: "Firstname Lastname", 
      website: "example.org", 
      email: "name2@example.com",  
      imageUrl: "/images/faculty2.jpg",
      desig: "Title 2"
    },
    
    { name: "Firstname Lastname", 
      website: "example.org", 
      email: "name3@example.com",  
      imageUrl: "/images/faculty3.jpg",
      desig: "Title 3"
    },

    { name: "Firstname Lastname", 
      website: "example.org", 
      email: "name4@example.com",  
      imageUrl: "/images/faculty3.jpg",
      desig: "Title 4"
    },
    // Add more as needed
  ];


  

  return (
    <div className="min-h-screen p-12 gap-25 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      {/* Faculty Section */}
      <h1 className="text-center text-4xl font-bold mb-8">Faculty Council</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {facultyMembers.map((faculty, index) => (
          <div key={index} className="bg-white rounded-lg p-6 flex flex-col items-center shadow-lg transition-transform transform hover:scale-105">
            <div className="relative w-40 h-40 border-5 border-[#467eb5] rounded-full overflow-hidden">
              <Image
                className="rounded-full"
                src={faculty.imageUrl}
                alt={`${faculty.name} Image`}
                layout='fill'
                objectFit='cover'
              
              />
            </div>
            <h2 className="font-bold text-2xl mt-6">{faculty.name}</h2>
            <div className="mt-4 text-center">
              <p className="text-sm text-[#c2674b] font-bold"><span className="font-bold"></span>{faculty.desig}</p>
              <p className="text-sm text-[#d47557] font-bold">
                <a href={`mailto:${faculty.email}`}>
                  <img src="https://static.vecteezy.com/system/resources/previews/020/009/614/large_2x/email-and-mail-icon-black-free-png.png" alt="Email" className="inline w-6 h-6 mr-1" />
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
<br></br>


      {/* Council Section */}
      <h1 className="text-center text-4xl font-bold mb-8">Executive Council</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {Council.map((Council, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105">
            <div className="relative w-40 h-40 border-5 border-[#467eb5] rounded-full overflow-hidden">
              <Image
                className="rounded-full"
                src={Council.imageUrl}
                alt={`${Council.name} Image`}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <h2 className="font-bold text-2xl mt-6">{Council.name}</h2>
            <div className="mt-4 text-center">
            <p className="text-sm text-[#c2674b] font-bold">{Council.desig}</p>
            <p className="text-sm text-[#d47557] font-bold"> </p>
            </div>
          </div>
        ))}
      </div>
      <br></br>
      
      {/* General Member Section */}
      <h1 className="text-center text-4xl font-bold mb-8">General Members</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {General.map((General, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105">
            <div className="relative w-40 h-40 border-5 border-[#467eb5] rounded-full overflow-hidden">
            <Image
                className="rounded-full"
                src={General.imageUrl}
                alt={`${General.name} Image`}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <h2 className="font-bold text-2xl mt-6">{General.name}</h2>
            <div className="mt-4 text-center">
            <p className="text-sm text-[#c2674b] font-bold">{General.desig}</p>
            <p className="text-sm text-[#d47557] font-bold"> </p>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
  


      
}
