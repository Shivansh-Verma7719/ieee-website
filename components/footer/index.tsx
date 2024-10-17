"use client";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Youtube, Twitter, Mail } from "lucide-react";
import { useInView } from "react-intersection-observer";
const Footer = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    {
      id: 0,
      icon: Mail,
      href: "mailto:ieee.asb@ashoka.edu.in",
      label: "Email",
    },
    {
      id: 1,
      icon: Instagram,
      href: "https://www.instagram.com/ieee.ashoka",
      label: "Instagram",
    },
    {
      id: 2,
      icon: Twitter,
      href: "https://x.com/IEEEAshoka",
      label: "Twitter",
    },
    {
      id: 3,
      icon: Linkedin,
      href: "https://www.linkedin.com/company/ieee-ashoka-student-branch",
      label: "LinkedIn",
    },
    {
      id: 3,
      icon: Youtube,
      href: "https://www.youtube.com/@IEEEAshoka",
      label: "YouTube",
    },
  ];
  return (
    <motion.section
      ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7 }}
        className={`w-full py-10 bg-[#fbfbf8]`}
      >
        <div className="flex justify-center space-x-12">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center"
            >
              <div className="text-[#467eb5] p-4 rounded-full mb-2">
                <link.icon size={35} />
              </div>
              <span className="text-sm font-medium text-[#fbfbf8]">
                {link.label}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.section>
  );
};

export default Footer;
