
export default function App() {
    return (
        <>
            <main className="flex flex-col items-center justify-center py-30 px-5 text-center bg-gray-900 lg:w-full md:w-full min-w-150">
                <div
                    id="Home"
                    className="flex flex-col justify-center items-center text-white w-full max-w-6xl"
                >
                    <h1 className="text-amber-300 text-2xl sm:text-3xl md:text-4xl lg:text-2xl font-semibold py-6">
                        Welcome to BTVTED Courses
                    </h1>
                    <div className="font-bold font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-6 leading-tight tracking-normal">
                        Interactive Learning
                        <br className="hidden sm:block" />
                        Engaging Students
                        <br className="hidden sm:block" />
                        In The Digital Age
                    </div>
                    <button  type="button"
                        className="mt-10 mb-8 bg-amber-300 text-black text-lg sm:text-lg md:text-md font-bold px-5 sm:px-5 py-4 sm:py-3 rounded-full shadow-lg hover:bg-amber-400 transition-transform duration-300 hover:scale-105">
                        Find Your Best Major
                    </button>
                </div>
            </main>

        </>
    );
}