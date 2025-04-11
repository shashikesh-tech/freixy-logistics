"use client";

import { motion } from "framer-motion";
import CommonHeading from "./CommonHeading";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Storage",
    img: "/service-1.webp",
    content: "Secure and reliable storage solutions for your goods.",
  },
  {
    id: 2,
    title: "Logistics",
    img: "/service-2.webp",
    content: "Efficient logistics services to streamline your supply chain.",
  },
  {
    id: 3,
    title: "Cargo",
    img: "/service-3.webp",
    content: "Safe and fast cargo transportation across various locations.",
  },
  {
    id: 4,
    title: "Trucking",
    img: "/service-4.webp",
    content:
      "Professional trucking services to transport your goods with care.",
  },
  {
    id: 5,
    title: "Packaging",
    img: "/service-5.webp",
    content: "High-quality packaging solutions to protect your products.",
  },
  {
    id: 6,
    title: "Warehousing",
    img: "/service-6.webp",
    content: "Spacious and secure warehousing for all your storage needs.",
  },
];

const rowVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

export default function OurServices() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 lg:px-4 my-8">
      <CommonHeading
        heading="Our Services"
        textAlign="center"
        subHeading="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit."
      />

      <div className="my-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 lg:mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={rowVariants}
        >
          {services.slice(0, 3).map(({ id, title, img, content }) => (
            <motion.div
              key={id}
              className="card rounded border border-gray-600 overflow-hidden p-4"
              variants={rowVariants}
            >
              <div className="card-img overflow-hidden hover:scale-105 transition-transform duration-300">
                <Image
                  src={img}
                  alt={title}
                  width={500}
                  height={300}
                  className="w-full h-full transition-transform ease-in-out duration-300 hover:scale-110"
                />
              </div>
              <h3 className="uppercase p-4">{title}</h3>
              <p className="px-4 text-lg pb-4">{content}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={rowVariants}
          transition={{ delay: 0.5 }}
        >
          {services.slice(3, 6).map(({ id, title, img, content }) => (
            <motion.div
              key={id}
              className="card rounded border border-gray-600 overflow-hidden p-4"
              variants={rowVariants}
            >
              <div className="card-img overflow-hidden hover:scale-105 transition-transform duration-300">
                <Image
                  src={img}
                  alt={title}
                  width={500}
                  height={300}
                  className="w-full h-full transition-transform ease-in-out duration-300 hover:scale-110"
                />
              </div>
              <h3 className="uppercase p-4">{title}</h3>
              <p className="px-4 text-lg pb-4">{content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
