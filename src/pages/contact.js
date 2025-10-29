export default function App() {
    return (
        <>
            <footer
                id="contact"
                className="bg-black text-white py-50 px-6 lg:w-full md:w-full min-w-150" >
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Follow</h2>
                        <div className="flex justify-center md:justify-start gap-6 mt-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                                className="w-6 h-6 text-blue-600 hover:text-blue-300 transition fill-current bg-white">
                                <path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 640 640" className="w-6 h-6 text-pink-600 hover:text-pink-300 transition fill-current bg-white">
                            <path d="M290.4 275.7C274 286 264.5 304.5 265.5 323.8C266.6 343.2 278.2 360.4 295.6 368.9C313.1 377.3 333.8 375.5 349.6 364.3C366 354 375.5 335.5 374.5 316.2C373.4 296.8 361.8 279.6 344.4 271.1C326.9 262.7 306.2 264.5 290.4 275.7zM432.7 207.3C427.5 202.1 421.2 198 414.3 195.3C396.2 188.2 356.7 188.5 331.2 188.8C327.1 188.8 323.3 188.9 320 188.9C316.7 188.9 312.8 188.9 308.6 188.8C283.1 188.5 243.8 188.1 225.7 195.3C218.8 198 212.6 202.1 207.3 207.3C202 212.5 198 218.8 195.3 225.7C188.2 243.8 188.6 283.4 188.8 308.9C188.8 313 188.9 316.8 188.9 320C188.9 323.2 188.9 327 188.8 331.1C188.6 356.6 188.2 396.2 195.3 414.3C198 421.2 202.1 427.4 207.3 432.7C212.5 438 218.8 442 225.7 444.7C243.8 451.8 283.3 451.5 308.8 451.2C312.9 451.2 316.7 451.1 320 451.1C323.3 451.1 327.2 451.1 331.4 451.2C356.9 451.5 396.2 451.9 414.3 444.7C421.2 442 427.4 437.9 432.7 432.7C438 427.5 442 421.2 444.7 414.3C451.9 396.3 451.5 356.9 451.2 331.3C451.2 327.1 451.1 323.2 451.1 319.9C451.1 316.6 451.1 312.8 451.2 308.5C451.5 283 451.9 243.6 444.7 225.5C442 218.6 437.9 212.4 432.7 207.1L432.7 207.3zM365.6 251.8C383.7 263.9 396.2 282.7 400.5 304C404.8 325.3 400.3 347.5 388.2 365.6C382.2 374.6 374.5 382.2 365.6 388.2C356.7 394.2 346.6 398.3 336 400.4C314.7 404.6 292.5 400.2 274.4 388.1C256.3 376 243.8 357.2 239.5 335.9C235.2 314.6 239.7 292.4 251.7 274.3C263.7 256.2 282.6 243.7 303.9 239.4C325.2 235.1 347.4 239.6 365.5 251.6L365.6 251.6zM394.8 250.5C391.7 248.4 389.2 245.4 387.7 241.9C386.2 238.4 385.9 234.6 386.6 230.8C387.3 227 389.2 223.7 391.8 221C394.4 218.3 397.9 216.5 401.6 215.8C405.3 215.1 409.2 215.4 412.7 216.9C416.2 218.4 419.2 220.8 421.3 223.9C423.4 227 424.5 230.7 424.5 234.5C424.5 237 424 239.5 423.1 241.8C422.2 244.1 420.7 246.2 419 248C417.3 249.8 415.1 251.2 412.8 252.2C410.5 253.2 408 253.7 405.5 253.7C401.7 253.7 398 252.6 394.9 250.5L394.8 250.5zM544 160C544 124.7 515.3 96 480 96L160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160zM453 453C434.3 471.7 411.6 477.6 386 478.9C359.6 480.4 280.4 480.4 254 478.9C228.4 477.6 205.7 471.7 187 453C168.3 434.3 162.4 411.6 161.2 386C159.7 359.6 159.7 280.4 161.2 254C162.5 228.4 168.3 205.7 187 187C205.7 168.3 228.5 162.4 254 161.2C280.4 159.7 359.6 159.7 386 161.2C411.6 162.5 434.3 168.3 453 187C471.7 205.7 477.6 228.4 478.8 254C480.3 280.3 480.3 359.4 478.8 385.9C477.5 411.5 471.7 434.2 453 452.9L453 453z"/></svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                                className="w-6 h-6 text-yellow-600 hover:text-yellow-300 transition fill-current bg-white" >
                                <path d="M523.4 215.7C523.7 220.2 523.7 224.8 523.7 229.3C523.7 368 418.1 527.9 225.1 527.9C165.6 527.9 110.4 510.7 64 480.8C72.4 481.8 80.6 482.1 89.3 482.1C138.4 482.1 183.5 465.5 219.6 437.3C173.5 436.3 134.8 406.1 121.5 364.5C128 365.5 134.5 366.1 141.3 366.1C150.7 366.1 160.1 364.8 168.9 362.5C120.8 352.8 84.8 310.5 84.8 259.5L84.8 258.2C98.8 266 115 270.9 132.2 271.5C103.9 252.7 85.4 220.5 85.4 184.1C85.4 164.6 90.6 146.7 99.7 131.1C151.4 194.8 229 236.4 316.1 240.9C314.5 233.1 313.5 225 313.5 216.9C313.5 159.1 360.3 112 418.4 112C448.6 112 475.9 124.7 495.1 145.1C518.8 140.6 541.6 131.8 561.7 119.8C553.9 144.2 537.3 164.6 515.6 177.6C536.7 175.3 557.2 169.5 576 161.4C561.7 182.2 543.8 200.7 523.4 215.7z" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                        <ul className="space-y-2 text-gray-200">
                            <li>123 Education St., City Campus, Philippines</li>
                            <li>
                                <a href="tel:+639123456789" className="hover:underline">
                                    +63 9079792128
                                </a>
                            </li>
                            <li>
                                <a href="mailto:btvted@university.edu" className="hover:underline">
                                    btvted@university.edu
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div id="enroll" className="text-center">
                            <h2 className="text-2xl font-bold mb-4 text-white">Enroll Now</h2>
                            <p className="mb-4 text-gray-200">
                                Start your journey toward becoming<br />a skilled technical-vocational<br />educator today!
                            </p>
                            <input type="checkbox" id="enroll-modal" className="peer hidden" />
                            <label
                                htmlFor="enroll-modal"
                                className="inline-block bg-yellow-400 text-blue-900 font-semibold px-6 py-2 rounded-lg hover:bg-yellow-300 transition duration-300 cursor-pointer"
                            >
                                Enroll Here
                            </label>

                            <div className="fixed inset-0 bg-black/50 hidden peer-checked:flex items-center justify-center z-50">
                                <div className="bg-white rounded-2xl w-full max-w-lg p-8 relative text-gray-800 shadow-lg">
                                    <label
                                        htmlFor="enroll-modal"
                                        className="absolute top-3 right-3 text-gray-500 hover:text-red-500 cursor-pointer text-2xl"
                                    >
                                        &times;
                                    </label>

                                    <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
                                        Enrollment Form
                                    </h3>
                                    <form className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-semibold mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="Enter your full name"
                                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold mb-2">Email</label>
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold mb-2">Phone Number</label>
                                            <input
                                                type="tel"
                                                placeholder="Enter your phone number"
                                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold mb-2">Select Course</label>
                                            <select
                                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none"
                                                required
                                            >
                                                <option value="">-- Choose a Course --</option>
                                                <option>BTVTED Major in Home Economics</option>
                                                <option>BTVTED Major in Industrial Technology</option>
                                                <option>BTVTED Major in ICT</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold mb-2">Message</label>
                                            <textarea
                                                rows="3"
                                                placeholder="Any additional information..."
                                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none"
                                            ></textarea>
                                        </div>

                                        <div className="text-center">
                                            <button
                                                type="submit"
                                                className="bg-yellow-400 text-blue-900 font-semibold px-8 py-2 rounded-lg hover:bg-yellow-300 transition duration-300"
                                            >
                                                Submit Enrollment
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-blue-400 mt-10 pt-5 text-center text-sm text-gray-200">
                    © 2025 BTVTED Program | All Rights Reserved
                </div>
            </footer>

        </>
    );
}