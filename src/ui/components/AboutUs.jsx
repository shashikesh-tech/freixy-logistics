"use client";

import Image from "next/image";
import CommonHeading from "./CommonHeading";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutUs() {
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: true });

  return (
    <div className="mx-auto max-w-7xl w-full px-6 lg:px-4 about-us py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <CommonHeading
            textAlign="left"
            heading="About Us"
            color="secondary"
            subHeading=" Dolor iure expedita id fuga asperiores qui sunt consequatur minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui magnam itaque veritatis dolores. Corrupti totam ut eius incidunt reiciendis veritatis asperiores placeat. "
          />
          <ul className="my-2 grid gap-4 lg:my-6">
            {[
              {
                icon: "amd",
                title: "Ullamco laboris nisi ut aliquip consequat",
                desc: "Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade",
              },
              {
                icon: "archive-fill",
                title: "Magnam soluta odio exercitationem reprehenderi",
                desc: "Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi",
              },
              {
                icon: "award-fill",
                title: "Voluptatem et qui exercitationem",
                desc: "Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt maxime veniam",
              },
            ].map((item, index) => (
              <li key={index} className="flex gap-3">
                <div>
                  <i
                    className={`bi bi-${item.icon} text-[#d53503] text-4xl`}
                  ></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#d53503]">
                    {item.title}
                  </h3>
                  <p>{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src="/about.webp"
            width={400}
            height={400}
            className="w-full rounded"
            alt="About us"
          />
        </motion.div>
      </div>
    </div>
  );
}
