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

  const General = [
    { name: "Firstname Lastname", 
      website: "example.org", 
      email: "name1@example.com",  
      imageUrl: "/images/faculty1.jpg" 
    },
    
    { name: "Firstname Lastname", 
      website: "example.org", 
      email: "name2@example.com",  
      imageUrl: "/images/faculty2.jpg" 
    },
    
    { name: "Firstname Lastname", 
      website: "example.org", 
      email: "name3@example.com",  
      imageUrl: "/images/faculty3.jpg" 
    },

    { name: "Firstname Lastname", 
      website: "example.org", 
      email: "name4@example.com",  
      imageUrl: "/images/faculty3.jpg" 
    },
    // Add more researchers as needed
  ];

  const Council = [
    { name: "Firstname Lastname", 
      email: "name1@example.com", 
      website: "example.org", 
      imageUrl: "/images/faculty1.jpg" 
    },
    
    { name: "Firstname Lastname", 
      email: "name2@example.com", 
      website: "example.org",
      imageUrl: "/images/faculty1.jpg"  
    },
    
    { name: "Firstname Lastname", 
      email: "name3@example.com", 
      website: "example.org", 
      imageUrl: "/images/faculty1.jpg"  
    },
    
    
    { name: "Firstname Lastname", 
      email: "name4@example.com", 
      website: "example.org", 
      imageUrl: "/images/faculty1.jpg"  
    },
    // Add more researchers as needed
  ];

  

  return (
    <div className="min-h-screen p-12 gap-25 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Faculty Section */}
      <h1 className="text-center text-4xl font-bold mb-8">Faculty Council</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {facultyMembers.map((faculty, index) => (
          <div key={index} className="bg-white rounded-lg p-6 flex flex-col items-center shadow-lg">
            <div className="border-5 border-[#467eb5] p-5 rounded-full">
              <Image
                className="rounded-full"
                src={faculty.imageUrl}
                alt={`${faculty.name} Image`}
                width={150}
                height={150}
              />
            </div>
            <h2 className="font-bold text-2xl mt-6">{faculty.name}</h2>
            <div className="mt-4 text-center">
              <p className="text-sm text-[#c2674b] font-bold"><span className="font-bold"></span>{faculty.desig}</p>
              <p className="text-sm text-[#d47557] font-bold">
                <a href={`mailto:${faculty.email}`}>
                  <img src="https://static.vecteezy.com/system/resources/previews/020/009/614/large_2x/email-and-mail-icon-black-free-png.png" alt="Email" className="inline w-6 h-6 mr-1" />
                </a>
                <a href={`:${faculty.website}`}>
                  <img src= "https://icon-library.com/images/white-website-icon-png/white-website-icon-png-0.jpg" alt="Website" className="inline w-4 h-4 mr-1" /> 
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
<br></br>
      {/* Council Section */}
      <h1 className="text-center text-4xl font-bold mt-12 mb-8">Council</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Council.map((Council, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <div className="border-5 border-[#467eb5] p-5 rounded-full">
              <Image
                className="rounded-full"
                src={Council.imageUrl}
                alt={`${Council.name} Image`}
                width={150}
                height={150}
              />
            </div>
            <h2 className="font-bold text-2xl mt-6">{Council.name}</h2>
            <div className="mt-4 text-center">
            <a href={`mailto:${Council.email}`}>
                  <img src="https://static.vecteezy.com/system/resources/previews/020/009/614/large_2x/email-and-mail-icon-black-free-png.png" alt="Email" className="inline w-6 h-6 mr-1" />
                </a>
                <a href={`mailto:${Council.website}`}>
                  <img src= "https://icon-library.com/images/white-website-icon-png/white-website-icon-png-0.jpg" alt="Website" className="inline w-4 h-4 mr-1" /> 
                </a>
            </div>
          </div>
        ))}
      </div>
      <br></br>
      
      {/* General Member Section */}
      <h1 className="text-center text-4xl font-bold mt-12 mb-8">General Members</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {General.map((General, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-10 flex flex-col items-center">
            <div className="border-5 border-[#467eb5] p-5 rounded-full">
              <Image
                className="rounded-full"
                src={General.imageUrl}
                alt={`${General.name} Image`}
                width={150}
                height={150}
              />
            </div>
            <h2 className="font-bold text-2xl mt-6">{General.name}</h2>
            <div className="mt-4 text-center">
              <a href={`mailto:${General.email}`}>
                  <img src="https://static.vecteezy.com/system/resources/previews/020/009/614/large_2x/email-and-mail-icon-black-free-png.png" alt="Email" className="inline w-6 h-6 mr-1" />
                </a>
                <a href={`:${General.website}`}>
                  <img src= "https://icon-library.com/images/white-website-icon-png/white-website-icon-png-0.jpg" alt="Website" className="inline w-4 h-4 mr-1" /> 
                </a>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
  


      
}
