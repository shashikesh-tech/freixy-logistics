"use client";
import { motion } from "framer-motion";
import CommonHeading from "./CommonHeading";

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const benefits = [
  {
    title: "Largest Pincode Network",
    points: [
      "Spanning 31000+ pin codes vs. 19000 of largest shipping provider",
      "COD available on 19K+ pin codes. Largest in India.",
    ],
  },
  {
    title: "Best Rates",
    points: [
      "Lowest shipping rates",
      "Lowest COD charges",
      "Discounted insurance",
      "Lowest packaging charges",
    ],
  },
  {
    title: "Optimised Shipping Performance",
    points: [
      "Achieve 20% faster deliveries",
      "Reduce shipping expenses up to 40%",
      "Increase successful delivery rate by 20% using our NDR validation feature.",
    ],
  },
  {
    title: "Intelligent Courier Selection",
    points: [
      "We select best carrier partner based on their ratings that are calculated on different metrics like: delivery SLAs, pickup SLAs and RTO",
    ],
  },
  {
    title: "Automated Delivery Updates",
    points: [
      "Reduce customer contacts by 20%",
      "Customers are notified on each step of your shipment lifecycle",
    ],
  },
  {
    title: "Bulk Order Upload",
    points: ["Upload orders in bulk", "Process your orders in minutes"],
  },
];

export default function WhyUs() {
  return (
    <div
      className="relative flex h-full bg-[#021725] bg-cover bg-center bg-no-repeat py-4 mb-4"
      style={{
        backgroundImage:
          "linear-gradient(to right, #000101, #001d30), url('/cta-bg.jpg')",
      }}
    >
      <div className="mx-auto max-w-7xl w-full px-6 lg:px-4 about-us py-8">
        <CommonHeading
          textAlign="center"
          heading="Why Freixy?"
          color="default"
          subHeading="Dolor iure expedita id fuga asperiores qui sunt consequatur minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui magnam itaque veritatis dolores. Corrupti totam ut eius incidunt reiciendis veritatis asperiores placeat."
        />
        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 lg:mb-6 mt-4 lg:mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit, idx) => (
            <motion.li key={idx} className="text-white" variants={itemVariants}>
              <h3 className="text-xl flex gap-2 mb-3">
                <i className="bi bi-geo-fill"></i>
                <span>{benefit.title}</span>
              </h3>
              <ol>
                {benefit.points.map((point, i) => (
                  <li className="flex gap-2" key={i}>
                    <i className="bi bi-check2"></i>
                    <span>{point}</span>
                  </li>
                ))}
              </ol>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
