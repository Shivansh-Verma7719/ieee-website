"use client";
import React, { useState } from "react";
import { Input, Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Mail, MapPin, Phone } from "lucide-react";
import submitQuery, { Query } from "./helper";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { ShieldAlert, CheckCheck } from "lucide-react";

const ContactPage = () => {
  const [query, setQuery] = useState<Query>({
    first_name: "",
    last_name: "",
    email: "",
    query: "",
    status: "pending",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const validateEmail = (query: Query) => {
    return (
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(query.email) &&
      query.email.length > 0 &&
      query.email.length < 255 &&
      query.first_name.length > 0 &&
      query.last_name.length > 0 &&
      query.query.length > 0
    );
  };

  const handleSubmit = async () => {
    setLoading(true);
    const response = await submitQuery(query);
    setLoading(false);
    console.log(response);
    if (response.success) {
      setSuccess(true);
    } else {
      if (response.error == undefined) {
        setError("Something went wrong");
      } else {
        setError(response.error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 pt-24 lg:pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-0 w-[10rem] h-[10rem] md:w-[30rem] md:h-[30rem] bg-[#467eb5] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-[10rem] h-[10rem] md:w-[30rem] md:h-[30rem] bg-[#f186c1] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-16 left-1/2 w-[10rem] h-[10rem] md:w-[30rem] md:h-[30rem] bg-[#d47557] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="bg-white p-8 rounded-xl shadow-2xl w-full opacity-90 max-w-7xl mx-auto border border-blue-200">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-[#302f2f]">Contact Us</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/3">
            <form className="flex flex-col gap-2">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="w-full md:w-1/2 md:mb-4">
                  <Input
                    className="w-full px-3 py-2"
                    id="first-name"
                    label="First Name"
                    type="text"
                    isRequired
                    value={query.first_name}
                    onChange={(e) =>
                      setQuery({ ...query, first_name: e.target.value })
                    }
                  />
                </div>
                <div className="w-full md:w-1/2 md:mb-4">
                  <Input
                    className="w-full px-3 py-2"
                    id="last-name"
                    label="Last Name"
                    type="text"
                    isRequired
                    value={query.last_name}
                    onChange={(e) =>
                      setQuery({ ...query, last_name: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="md:mb-4 col-span-2">
                <Input
                  className="w-full px-3 py-2"
                  id="email"
                  label="Email"
                  type="email"
                  isRequired
                  value={query.email}
                  onChange={(e) =>
                    setQuery({ ...query, email: e.target.value })
                  }
                />
              </div>
              <div className="md:mb-4 col-span-2">
                <Textarea
                  className="w-full px-3 py-2"
                  id="query"
                  label="Your Query here..."
                  rows={4}
                  isRequired
                  value={query.query}
                  onChange={(e) =>
                    setQuery({ ...query, query: e.target.value })
                  }
                />
              </div>
              <div className="flex-col gap-2 m-3 col-span-2 flex justify-center">
                <Button
                  color={success ? "success" : "primary"}
                  variant="shadow"
                  className="w-full md:w-1/2 mx-auto"
                  isDisabled={!validateEmail(query) || success}
                  isLoading={loading}
                  onClick={handleSubmit}
                >
                  {success ? <CheckCheck /> : "Submit"}
                </Button>
                {error && (
                  <Card
                    radius="lg"
                    className="mt-4 bg-red-500/20 p-2"
                    shadow="sm"
                  >
                    <CardHeader>
                      <ShieldAlert className="text-red-500 mr-2" />
                      <h1 className="text-red-500">Error</h1>
                    </CardHeader>
                    <CardBody>
                      <p className="text-red-500">{error}</p>
                    </CardBody>
                  </Card>
                )}
              </div>
            </form>
          </div>
          <div className="lg:w-1/3">
            <div className="bg-gray-50 p-6 rounded-lg h-full">
              <h2 className="text-2xl font-bold mb-4 text-[#302f2f]">
                Contact Information
              </h2>
              <p className="text-gray-700 flex items-center">
                <MapPin className="w-8 h-8 mr-2" />
                <a
                  href="https://www.google.com/maps/place/Ashoka+University/@28.9469475,77.1031697,17z/data=!3m1!4b1!4m6!3m5!1s0x390dadd1aaaa9d5d:0xb7a3d4d03b0e0fde!8m2!3d28.9469475!4d77.1057446!16s%2Fm%2F0_1n0yd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover transition-colors duration-300"
                >
                  Ashoka University, Rajiv Gandhi Education City, Sonipat,
                  Haryana 131029
                </a>
              </p>
              <div className="flex flex-row gap-2">
                <Mail className="w-6 h-6 mr-2" />
                <p className="text-gray-700 mt-2">ieee.asb@ashoka.edu.in</p>
              </div>
              <div className="flex flex-row gap-2">
                <Phone className="w-6 h-6 mr-2" />
                <p className="text-gray-700 mt-2">+91 9999999999</p>
              </div>
              <div className="mt-4 h-64 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.9261976237996!2d77.10316971505713!3d28.946947582311683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dadd1aaaa9d5d%3A0xb7a3d4d03b0e0fde!2sAshoka%20University!5e0!3m2!1sen!2sin!4v1650456844399!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
