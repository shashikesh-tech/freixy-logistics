"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import CommonHeading from "./CommonHeading";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of logistics solutions, including domestic and international shipping, freight forwarding, warehousing, last-mile delivery, and custom logistics solutions tailored to your business needs.",
  },
  {
    question: "How can I track my shipment?",
    answer:
      "You can track your shipment by entering the tracking ID on our Tracking Page. You’ll receive real-time updates on your parcel's location and estimated delivery time.",
  },
  {
    question: "Do you offer same-day or express delivery?",
    answer:
      "Yes, we provide express and same-day delivery options in select locations. Please contact our customer service or check availability at the time of booking.",
  },
  {
    question: "What items are restricted or prohibited?",
    answer:
      "Items such as flammable liquids, explosives, illegal substances, and certain perishable goods are prohibited. For a complete list, please refer to our Shipping Guidelines page.",
  },
  {
    question: "How do I schedule a pickup?",
    answer:
      "You can schedule a pickup through our website or mobile app. Simply log in, select 'Schedule a Pickup,' and provide the necessary details. Our team will confirm and pick up the package at your location.",
  },
  {
    question: "What are your shipping charges?",
    answer:
      "Shipping charges depend on the weight, size, delivery location, and service type. You can use our Shipping Rate Calculator on the website for an estimate.",
  },
  {
    question: "Do you provide insurance for shipments?",
    answer:
      "Yes, we offer insurance coverage options to protect your shipment against loss or damage. You can opt for this during the booking process.",
  },
  {
    question: "Can I change the delivery address after shipping?",
    answer:
      "In most cases, yes. However, changing the delivery address after dispatch may involve additional charges and delays. Please contact our support team as soon as possible.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our support team via email at support@yourlogisticscompany.com or call our helpline at +91-XXXXXXXXXX. Our support hours are Monday to Saturday, 9 AM to 7 PM.",
  },
  {
    question: "Do you offer business solutions or bulk shipping?",
    answer:
      "Yes, we provide tailored logistics solutions for businesses, including bulk shipping, dedicated account managers, and warehouse integration. Please reach out to our B2B team for more information.",
  },
];
export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (
            rect.top < window.innerHeight - 100 &&
            !visibleItems.includes(index)
          ) {
            setVisibleItems((prev) => [...prev, index]);
          }
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleItems]);
  return (
    <div className="mx-auto max-w-7xl w-full px-6 lg:px-4 about-us py-8">
      <CommonHeading textAlign="center" heading="FAQs" color="secondary" />
      <div className="space-y-4 mt-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            initial={{ opacity: 0, y: 50 }}
            animate={visibleItems.includes(index) ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 focus:outline-none"
            >
              <span className="text-left font-medium text-lg">
                {faq.question}
              </span>
              <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
            </button>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden px-4 pb-4 text-gray-700 text-base"
            >
              {openIndex === index && <div>{faq.answer}</div>}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
