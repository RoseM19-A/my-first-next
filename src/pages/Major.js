export default function App() {
    return (
        <>
            <div className="w-full bg-linear-to-b from-black to-gray-900 py-50 px-4 lg:w-full md:w-full min-w-150">
                <h2 className="text-center text-white font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10">
                    MAJORS
                </h2>
                <div className="flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1171"
                        alt="Majors"
                        className="w-full max-w-6xl h-56 sm:h-72 md:h-96 lg:h-120 object-cover rounded-xl shadow-lg"
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12 max-w-6xl mx-auto place-items-center">
                    <div className="w-full max-w-xs bg-black/80 border border-gray-700 text-white text-center rounded-2xl shadow-md p-6 hover:bg-black/90 transition-all duration-300">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-3">FSM</h3>
                        <p className="text-sm sm:text-base">
                            Focuses on competencies in food selection, preparation, and management. 
                        </p>
                    </div>
                    <div className="w-full max-w-xs bg-black/80 border border-gray-700 text-white text-center rounded-2xl shadow-md p-6 hover:bg-black/90 transition-all duration-300">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-3">DRAFTING</h3>
                        <p className="text-sm sm:text-base">
                            Create detailed technical drawings and plans.
                        </p>
                    </div>
                    <div className="w-full max-w-xs bg-black/80 border border-gray-700 text-white text-center rounded-2xl shadow-md p-6 hover:bg-black/90 transition-all duration-300">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-3">BS TOURISM</h3>
                        <p className="text-sm sm:text-base">
                            Program designed to prepare students for careers in the tourism industry.
                        </p>
                    </div>
                    <div className="w-full max-w-xs bg-black/80 border border-gray-700 text-white text-center rounded-2xl shadow-md p-6 hover:bg-black/90 transition-all duration-300">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-3">Automotive Technology</h3>
                        <p className="text-sm sm:text-base">
                         Prepares students for diagnostics, repairs, and maintenance of vehicles. 
                        </p>
                    </div>
                    <div className="w-full max-w-xs bg-black/80 border border-gray-700 text-white text-center rounded-2xl shadow-md p-6 hover:bg-black/90 transition-all duration-300">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-3">Electrical Technology</h3>
                        <p className="text-sm sm:text-base">
                         Equips students with knowledge and skills in electrical systems and applications.
                        </p>
                    </div>
                    <div className="w-full max-w-xs bg-black/80 border border-gray-700 text-white text-center rounded-2xl shadow-md p-6 hover:bg-black/90 transition-all duration-300">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-3"> Mechanical Technology</h3>
                        <p className="text-sm sm:text-base">
                         Provides training in mechanical engineering principles and applications. 
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
}