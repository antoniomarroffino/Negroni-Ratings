import Header from './Header'
import Footer from './Footer'

export default function PageLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-orange-50 to-white">
            <Header />

            <main className="flex-1 px-4 py-8 max-w-4xl mx-auto w-full">
                {children}
            </main>

            <Footer />
        </div>
    )
}
