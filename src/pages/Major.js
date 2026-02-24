"use client";

import Nav from "@/components/nav";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function App() {

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Multi-layer parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const midY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const zoom = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  return (
    <>
      <Nav />

      <div ref={containerRef} className="bg-[#0B0F19] text-white overflow-hidden">

        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center justify-center text-center">

          {/* BACKGROUND LAYER */}
          <motion.div
            style={{ y: bgY, scale: zoom }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=90"
              className="w-full h-full object-cover"
              alt="Students"
            />
          </motion.div>

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-[#0B0F19]/80" />

          {/* MID LAYER LIGHT GLOW */}
          <motion.div
            style={{ y: midY }}
            className="absolute w-[600px] h-[600px] bg-[#C6A75E]/20 rounded-full blur-[120px]"
          />

          {/* TEXT LAYER */}
          <motion.div
            style={{ y: textY }}
            className="relative z-10"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-wide text-[#E5D3A1]">
              Discover Your Future
            </h1>
            <p className="mt-6 text-gray-300 max-w-xl mx-auto text-lg">
              Empowering excellence through innovation, discipline, and mastery.
            </p>
          </motion.div>
        </section>


        {/* MAJORS SECTION */}
        <section className="relative py-32 px-6 bg-gradient-to-b from-[#0B0F19] via-[#111827] to-[#0B0F19]">

          {/* Floating Decorative Glow */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#C6A75E]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#C6A75E]/10 rounded-full blur-3xl" />

          <h2 className="text-center text-4xl md:text-5xl font-serif font-bold mb-20 text-[#E5D3A1] tracking-widest">
            OUR MAJORS
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

            {[
              "FSM",
              "DRAFTING",
              "BS TOURISM",
              "Automotive Technology",
              "Electrical Technology",
              "Mechanical Technology"
            ].map((title, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative p-10 rounded-3xl border border-[#C6A75E]/20 backdrop-blur-xl bg-white/5 shadow-2xl hover:scale-105 transition duration-500 group"
              >
                <h3 className="text-2xl font-semibold mb-6 text-[#E5D3A1] group-hover:text-[#C6A75E] transition">
                  {title}
                </h3>

                <p className="text-gray-300 leading-relaxed text-sm">
                  A professionally designed program to develop technical excellence
                  and real-world mastery in this specialization.
                </p>

                {/* Elegant gold glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to from-[#C6A75E]/0 via-[#C6A75E]/10 to-[#C6A75E]/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              </motion.div>

            ))}

          </div>
        </section>

      </div>
    </>
  );
}