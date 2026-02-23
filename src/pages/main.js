
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
export default function App() {
  return (
    <main className="relative min-h-screen flex items-center justify-center text-center px-6">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=90')",
        }}
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative z-10 py-40 max-w-4xl text-gray-300">
        <h1 className=" text-amber-100 text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 tracking-wide">
          Welcome to BTVTED Courses
        </h1>

        <h2 className=" text-shadow-gray-50 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-8">
          Interactive Learning <br />
          Engaging Students <br />
          In The Digital Age
        </h2>

        <button
          type="button"
          className="mt-6 bg-white text-black font-semibold text-lg px-8 py-4 rounded-full shadow-xl transition duration-300 hover:bg-amber-500 hover:scale-105"
        >
          Find Your Best Majors
        </button>
      </div>
    </main>
  );
}