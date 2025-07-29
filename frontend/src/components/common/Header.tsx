export default function Header() {
    return (
        <header className="bg-gradient-to-r from-red-600 to-orange-400 shadow-md p-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-extrabold tracking-wide drop-shadow">
                    🍸 Negroni Ratings
                </h1>
                <nav>
                    <ul className="flex gap-6 text-white font-medium">
                        <li className="hover:underline cursor-pointer transition duration-200">Home</li>
                        <li className="hover:underline cursor-pointer transition duration-200">Top 10</li>
                        <li className="hover:underline cursor-pointer transition duration-200">Add Negroni</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
