export default function App() {
    return (
        <>
            <div id='events' className="`bg-gradient-to-br from-rose-100 via-white to-rose-200 mt-40 lg:w-full md:w-full min-w-150">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif text-amber-600 mb-12">
                        Upcoming <span className="text-amber-500 font-semibold">BTVTED Events</span>
                    </h2>

                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

                        <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
                            <img src="https://images.unsplash.com/photo-1659354221888-d317ea556fe8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171"
                                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"/>
                                <div className="p-6 text-left">
                                    <h3 className="text-2xl font-bold text-amber-600 mb-2">Culinary Arts Workshop</h3>
                                    <p className="text-gray-700 mb-4">A hands-on event where students explore the art of baking, cooking, and food presentation under expert guidance.</p>
                                    <p className="text-gray-600 text-sm mb-3"></p>
                                    <a href="#" className="inline-block bg-amber-500 text-white px-5 py-2 rounded-full hover:bg-rose-600 transition">Join Event</a>
                                </div>
                        </div>
                        <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
                            <img src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80" alt="Technical Skills Competition"
                                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"/>
                                <div className="p-6 text-left">
                                    <h3 className="text-2xl font-bold text-amber-600 mb-2">Technical Skills Competition</h3>
                                    <p className="text-gray-700 mb-4">Showcase your innovation and technical craftsmanship in this inter-department competition featuring BTVTED students.</p>
                                    <p className="text-gray-600 text-sm mb-3"></p>
                                    <a href="#" className="inline-block bg-amber-500 text-white px-5 py-2 rounded-full hover:bg-rose-600 transition">Join Event</a>
                                </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
                            <img src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=800&q=80" alt="Innovation Expo"
                                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"/>
                                <div className="p-6 text-left">
                                    <h3 className="text-2xl font-bold text-amber-600 mb-2">BTVTED Innovation Expo</h3>
                                    <p className="text-gray-700 mb-4">An exciting exhibit where students present their research, prototypes, and creative innovations for future industries.</p>
                                    <p className="text-gray-600 text-sm mb-3"></p>
                                    <a href="#" className="inline-block bg-amber-500 text-white px-5 py-2 rounded-full hover:bg-rose-600 transition">Join Event</a>
                                </div>
                        </div>

                    </div>
                </div>

            </div>




        </>
    )
}