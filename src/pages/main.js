
// export default function App() {
//     return (
//         <>
//             <main className="h-screen flex flex-col items-center justify-center py-50 px-5 text-center bg-gray-300 lg:w-full md:w-full min-w-150">
//                 <div
//                     id="Home"
//                     className="flex flex-col justify-center items-center text-gray-700 w-full max-w-6xl"
//                 >
//                     <h1 className="text-gray-900 text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold py-10">
//                         Welcome to BTVTED Courses
//                     </h1>
//                     <div className="font-bold font-sans text-3xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl mt-6 leading-tight tracking-normal">
//                         Interactive Learning
//                         <br className="hidden sm:block" />
//                         Engaging Students
//                         <br className="hidden sm:block" />
//                         In The Digital Age
//                     </div>
//                     <button  type="button"
//                         className="mt-10 mb-8 bg-white text-black text-lg sm:text-lg md:text-md font-bold px-5 sm:px-5 py-4 sm:py-3 rounded-full shadow-lg hover:bg-amber-400 transition-transform duration-300 hover:scale-105">
//                         Find Your Best Majors
//                     </button>
//                 </div>
//             </main>

//         </>
//     );
// }
"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function App() {

  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"] // important fix
  });

  // Parallax only inside hero
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const zoom = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const [allRatings] = useState([
    {
      id: 1,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Maria Santos",
      testimonial:
        "This course helped me improve my teaching strategies using modern digital tools."
    },
    {
      id: 2,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "John Cruz",
      testimonial:
        "Very interactive and engaging lessons. Highly recommended for future educators!"
    },
    {
      id: 3,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Angela Reyes",
      testimonial:
        "The digital approach makes learning more exciting and effective."
    }
  ]);

  return (
    <div className="bg-[#0B0F19] text-white">

      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center text-center overflow-hidden"
      >

        {/* Parallax Background */}
        <motion.div
          style={{ y: bgY, scale: zoom }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=90"
            className="w-full h-full object-cover blur-md scale-110"
            alt="Students"
          />
        </motion.div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to from-[#0B0F19]/80 via-[#0B0F19]/70 to-[#0B0F19]" />

        {/* Floating Gold Light */}
        <motion.div
          style={{ y: textY }}
          className="absolute w-[600 h-600px] bg-[#C6A75E]/10 rounded-full blur-[150px]"
        />

        {/* Content */}
        <motion.div
          style={{ y: textY }}
          className="relative z-10 max-w-4xl px-6"
        >

          <h1 className="text-gray-950 mt-30 text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-serif font-semibold leading-tight mb-8">
            Welcome to BTVTED Course
          </h1>

          <h2 className="text-white font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-12">
            Interactive Learning
            <br />
            <span className="text-white">Engaging Students</span>
            <br />
            In The Digital Age
          </h2>

          <button className="px-12 py-4 rounded-full bg-black text-white font-semibold text-lg shadow-xl hover:scale-105 transition duration-300">
            Explore Majors
          </button>
        </motion.div>
      </section>


      {/* TESTIMONIAL SECTION */}
      <section className="relative py-32 px-6 bg-gradient-to from-[#0B0F19] via-[#111827] to-[#0B0F19]">

        {/* Decorative Glows */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#C6A75E]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#C6A75E]/10 rounded-full blur-3xl" />

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-bold text-center text-[#E5D3A1] mb-20 tracking-wide"
        >
          Student Testimonials
        </motion.h2>

        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3">

          {allRatings.map((rating, index) => (
            <motion.div
              key={rating.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative backdrop-blur-xl bg-white/5 border border-[#C6A75E]/20 rounded-3xl p-10 text-center shadow-2xl hover:scale-105 transition duration-500"
            >
              <img
                src={rating.image}
                alt={rating.name}
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-2 border-[#C6A75E]/40"
              />

              <h3 className="text-xl font-semibold text-[#E5D3A1] mb-3">
                {rating.name}
              </h3>

              <div className="flex justify-center mb-4 text-[#C6A75E] text-lg">
                ★★★★★
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                "{rating.testimonial}"
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to from-[#C6A75E]/0 via-[#C6A75E]/10 to-[#C6A75E]/0 opacity-0 hover:opacity-100 transition duration-500"></div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}