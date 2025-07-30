import PageLayout from "../components/common/PageLayout";
import NegroniList from "../components/negroni/NegroniList";

export default function HomePage() {
    return (
        <PageLayout>
            <h2 className="text-4xl font-bold text-red-700 mb-4 drop-shadow">Welcome to the Negroni Club</h2>
            <p className="text-lg text-gray-700 mb-6">
                Here, we don’t just drink Negroni — we rate, share, and celebrate them 🥂
            </p>
            <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
                <p className="text-md text-gray-600 italic">“There is no Negroni like your Negroni.”</p>
            </div>

            <NegroniList />
        </PageLayout>
    );
}
