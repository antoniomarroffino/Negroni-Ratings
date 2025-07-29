export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white py-8 mt-16 shadow-inner">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <p className="text-sm tracking-wide text-gray-400">
                        Crafted with 🧡, Vermouth & Code — 2025 © Negroni Ratings
                    </p>
                    <p className="text-xs italic text-gray-500 mt-1">
                        In bitters we trust.
                    </p>
                </div>

                <div className="flex space-x-4 text-gray-300 text-sm">
                    <a href="#" className="hover:text-red-400 transition">About</a>
                    <a href="#" className="hover:text-red-400 transition">Privacy</a>
                    <a href="#" className="hover:text-red-400 transition">Contact the Negroni God</a>
                </div>
            </div>

            <div className="mt-6 text-center text-xs text-gray-500 tracking-widest">
                NE · GR · O · NI 🍊
            </div>
        </footer>
    );
}
