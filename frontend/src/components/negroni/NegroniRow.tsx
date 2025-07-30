export default function NegroniRow({ location, evaluation, comments }) {
    return (
        <div className="bg-white shadow-md rounded-xl p-5 border border-gray-200 hover:shadow-xl transition duration-300">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-red-700">{location}</h3>
                <span className="text-sm text-orange-600 font-medium italic">{evaluation}</span>
            </div>
            <p className="text-gray-600">{comments}</p>
        </div>
    )
}
