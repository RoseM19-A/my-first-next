// import Nav from "@/components/nav"
// export default function App() {
//     return (
//         <>
//         <Nav/>
//             <div id='events' className="`bg-gradient-to-br from-rose-100 via-white to-rose-200 mt-40 lg:w-full md:w-full min-w-150">
//                 <div className="max-w-7xl mx-auto px-6 text-center">
//                     <h2 className="text-4xl md:text-5xl font-serif text-amber-600 mb-12">
//                         Upcoming <span className="text-amber-500 font-semibold">BTVTED Events</span>
//                     </h2>

//                     <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

//                         <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
//                             <img src="https://images.unsplash.com/photo-1659354221888-d317ea556fe8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171"
//                                 className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"/>
//                                 <div className="p-6 text-left">
//                                     <h3 className="text-2xl font-bold text-amber-600 mb-2">Culinary Arts Workshop</h3>
//                                     <p className="text-gray-700 mb-4">A hands-on event where students explore the art of baking, cooking, and food presentation under expert guidance.</p>
//                                     <p className="text-gray-600 text-sm mb-3"></p>
//                                     <a href="#" className="inline-block bg-amber-500 text-white px-5 py-2 rounded-full hover:bg-rose-600 transition">Join Event</a>
//                                 </div>
//                         </div>
//                         <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
//                             <img src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80" alt="Technical Skills Competition"
//                                 className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"/>
//                                 <div className="p-6 text-left">
//                                     <h3 className="text-2xl font-bold text-amber-600 mb-2">Technical Skills Competition</h3>
//                                     <p className="text-gray-700 mb-4">Showcase your innovation and technical craftsmanship in this inter-department competition featuring BTVTED students.</p>
//                                     <p className="text-gray-600 text-sm mb-3"></p>
//                                     <a href="#" className="inline-block bg-amber-500 text-white px-5 py-2 rounded-full hover:bg-rose-600 transition">Join Event</a>
//                                 </div>
//                         </div>

//                         <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
//                             <img src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=800&q=80" alt="Innovation Expo"
//                                 className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"/>
//                                 <div className="p-6 text-left">
//                                     <h3 className="text-2xl font-bold text-amber-600 mb-2">BTVTED Innovation Expo</h3>
//                                     <p className="text-gray-700 mb-4">An exciting exhibit where students present their research, prototypes, and creative innovations for future industries.</p>
//                                     <p className="text-gray-600 text-sm mb-3"></p>
//                                     <a href="#" className="inline-block bg-amber-500 text-white px-5 py-2 rounded-full hover:bg-rose-600 transition">Join Event</a>
//                                 </div>
//                         </div>

//                     </div>
//                 </div>

//             </div>




//         </>
//     )
// }
"use client";

import Nav from "@/components/nav";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function App() {

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax movement
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["60px", "-60px"]);

  const events = [
    {
      title: "Culinary Arts Workshop",
      image: "https://images.unsplash.com/photo-1659354221888-d317ea556fe8?auto=format&fit=crop&w=1171&q=80",
      desc: "Hands-on baking and cooking experience guided by industry experts."
    },
    {
      title: "Technical Skills Competition",
      image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
      desc: "Students compete to showcase innovation and craftsmanship."
    },
    {
      title: "Innovation Expo",
      image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=800&q=80",
      desc: "Exhibit of research, prototypes, and creative technologies."
    },
    {
      title: "Teaching Strategies Seminar",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      desc: "Modern classroom strategies and digital teaching tools workshop."
    },
    {
      title: "Digital Education Summit",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      desc: "Exploring innovation in online learning and education technology."
    },
    {
      title: "Hospitality & Tourism Forum",
      image: "https://plus.unsplash.com/premium_photo-1683134374806-9ea735de4b37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvc3BpdGFsaXR5JTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D",
      desc: "Industry forum connecting students with tourism professionals."
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const card = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Nav />

      <section
        ref={sectionRef}
        id="events"
        className="relative bg-zinc-50 py-32 mt-40 overflow-hidden"
      >
        {/* Parallax Background Glow */}
        <motion.div
          style={{ y: bgY }}
          className="absolute top-32 left-1/2 -translate-x-1/2 w-[700px h-700px] bg-zinc-200 rounded-full blur-[140px] opacity-40"
        />

        <div className="relative max-w-7xl mx-auto px-6 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light text-zinc-900 mb-20 tracking-tight"
          >
            Upcoming BTVTED Events
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ y: cardsY }}
            className="grid gap-12 md:grid-cols-2 lg:grid-cols-3"
          >
            {events.map((event, index) => (
              <motion.div
                key={index}
                variants={card}
                className="group bg-white rounded-2xl border border-zinc-200 overflow-hidden transition duration-500 hover:shadow-xl"
              >
                <img
                  src={event.image}
                  className="w-full h-56 object-cover transition duration-700 group-hover:scale-105"
                  alt={event.title}
                />
                <div className="p-8 text-left">
                  <h3 className="text-xl font-medium text-zinc-900 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-zinc-600 text-sm mb-6 leading-relaxed">
                    {event.desc}
                  </p>
                  <button className="text-sm text-black border border-zinc-900 px-6 py-2 rounded-full hover:bg-zinc-900 hover:text-white transition">
                    Join Event
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
}