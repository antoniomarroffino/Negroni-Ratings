import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {AuthProvider} from './context/AuthContext'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import PrivateRoute from './components/common/PrivateRoute'
import './index.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

function App() {
    const queryClient = new QueryClient();

    return (
        <>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route
                            path="/"
                            element={
                                <PrivateRoute>
                                    <HomePage/>
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </Router>
            </AuthProvider>
        </QueryClientProvider>
        </>
    )
}

export default App
