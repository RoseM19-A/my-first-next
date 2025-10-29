import Link from 'next/link'

export default function Nav() {
    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50 px-6 sm:px-10 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className="text-3xl sm:text-2xl font-bold">
                        <span className="text-slate-900 font-serif text-xl">BTVTED</span>
                        <span className="text-blue-500 lg:text-3xl md:text-2xl sm:text-xl font-thin">
                            COURSES
                        </span>
                    </h1>
                </div>
                <input type="checkbox" id="menu-toggle" className="hidden peer" />
                <label
                    htmlFor="menu-toggle"
                    className="text-slate-900 text-3xl cursor-pointer md:hidden select-none"
                >
                    ☰
                </label>
                <ul className="hidden md:flex items-center text-slate-600 font-bold gap-6 lg:gap-10">
                    <li>
                        <Link  href="/"
                            className="rounded-full px-3 py-1 hover:bg-amber-500 hover:text-white transition duration-300" >
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link href="/Major"
                            className="rounded-full px-3 py-1 hover:bg-blue-500 hover:text-white transition duration-300">
                            MAJORS
                        </Link>
                    </li>
                    <li>
                        <Link  href="/events"
                            className="rounded-full px-3 py-1 hover:bg-green-500 hover:text-white transition duration-300" >
                            EVENTS
                        </Link>
                    </li>
                    <li> <Link href="/contact"
                            className="rounded-full px-3 py-1 hover:bg-orange-500 hover:text-white transition duration-300">
                            CONTACT
                        </Link>
                    </li>
                </ul>
                <div className="hidden md:block">
                  <a href ="#enroll">   <button className="text-black font-bold px-6 py-2 rounded-full bg-amber-300 hover:bg-amber-400 transition">
                        ENROLL NOW
                    </button></a>
                </div>
                <div className="absolute top-20 left-0 w-full bg-white/95 backdrop-blur-lg shadow-md text-slate-700 font-semibold space-y-4 py-6 items-center flex-col hidden peer-checked:flex md:hidden">
                    <Link href="/" className="hover:text-amber-500">
                        HOME
                    </Link>
                    <Link href="/Major" className="hover:text-blue-500">
                        MAJORS
                    </Link>
                    <Link href="/events" className="hover:text-green-500">
                        EVENTS
                    </Link>
                    <Link href="/contact" className="hover:text-orange-500">
                        CONTACT
                    </Link>
                
                  <button className="text-black font-bold px-6 py-2 rounded-full bg-amber-300 hover:bg-amber-400 transition">
                        ENROLL NOW
                    </button>
                </div>
            </nav>

        </>
    );
}