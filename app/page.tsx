"use client";

import {
  color,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

import heroImage from "@/public/images/hero-1.jpg";
const events = [
  {
    id: 1,
    title: "Tech Talk: AI in Healthcare",
    date: "2024-03-15",
    src: "/placeholder.svg?height=200&width=300",
    category: "Workshop",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Workshop: IoT Basics",
    date: "2024-03-22",
    src: "/placeholder.svg?height=200&width=300",
    category: "Workshop",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Hackathon: Sustainable Solutions",
    date: "2024-04-05",
    src: "/placeholder.svg?height=200&width=300",
    category: "Hackathon",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    title: "Networking Mixer",
    date: "2024-04-12",
    src: "/placeholder.svg?height=200&width=300",
    category: "Networking",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const photos = [
  {
    id: 1,
    src: "/placeholder.svg?height=300&width=300",
    alt: "IEEE Ashoka Event 1",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=300&width=300",
    alt: "IEEE Ashoka Event 2",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=300&width=300",
    alt: "IEEE Ashoka Event 3",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=300&width=300",
    alt: "IEEE Ashoka Event 4",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=300&width=300",
    alt: "IEEE Ashoka Event 5",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=300&width=300",
    alt: "IEEE Ashoka Event 6",
  },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const cards = events.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden bg-[#fbfbf8]">
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 rounded-full bg-[#467eb5] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="w-full h-screen flex items-center justify-center relative overflow-hidden bg-[#23417c]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-[#fbfbf8] mb-6">
            IEEE Ashoka
          </h1>
          <p className="text-xl md:text-2xl text-[#fbfbf8] mb-8">
            Empowering Innovation, Inspiring Technology
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#f186c1] hover:bg-[#d47557] text-[#302f2f] font-bold py-3 px-8 rounded-full text-lg transition duration-300"
          >
            Discover More
          </motion.button>
        </motion.div>
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        >
          <Image
            src={heroImage}
            alt="IEEE Ashoka Background"
            layout="fill"
            objectFit="cover"
            className="filter brightness-50"
          />
        </motion.div>
      </section>

      {/* About Section */}
      <Section>
        <h2 className="text-5xl font-bold mb-12 text-[#302f2f]">
          About IEEE Ashoka
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`bg-[#467eb5] p-6 rounded-lg shadow-lg`}
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#302f2f]">
              Our Mission
            </h3>
            <div className="text-[#302f2f]">
              IEEE Ashoka is dedicated to fostering technological innovation and
              excellence for the benefit of humanity, inspiring a global
              community of innovators.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`bg-[#f186c1] p-6 rounded-lg shadow-lg`}
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#302f2f]">
              What We Do
            </h3>
            <div className="text-[#302f2f]">
              We organize workshops, seminars, and projects that allow students
              to apply their knowledge to real-world problems, bridging the gap
              between academia and industry.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`bg-[#d47557] p-6 rounded-lg shadow-lg`}
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#302f2f]">
              Our Vision
            </h3>
            <div className="text-[#302f2f]">
              To be the leading platform for technological advancement and
              professional growth, nurturing future leaders in the field of
              electrical and electronic engineering.
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Events Preview Section */}
      <div className="container w-full mx-auto h-full py-20">
        <h2 className="max-w-7xl px-4 text-xl md:text-5xl font-bold text-[#302f2f]">
          Upcoming Events
        </h2>
        <Carousel items={cards} />
      </div>

      {/* Photos Section */}
      <Section>
        <h2 className="text-5xl font-bold mb-12 text-[#302f2f]">
          Photo Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </Section>
    </main>
  );
}

const Section = ({
  children,
  bgColor = "#fbfbf8",
}: {
  children: React.ReactNode;
  bgColor?: string;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full py-20 ${bgColor}`}
    >
      <div className="container mx-auto px-4">{children}</div>
    </motion.section>
  );
};

const AnimatedCard = ({
  children,
  title,
  color,
  delay = 0,
}: {
  children: React.ReactNode;
  title: string;
  color?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-[${color}] p-6 rounded-lg shadow-lg`}
    >
      {title && (
        <h3 className="text-2xl font-semibold mb-4 text-[#302f2f]">{title}</h3>
      )}
      <div className="text-[#302f2f]">{children}</div>
    </motion.div>
  );
};
