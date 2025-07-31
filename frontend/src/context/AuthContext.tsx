import { createContext, useContext, useState, ReactNode } from 'react'
import { AuthResponse } from '../api/authApi'

interface AuthContextType {
    user: AuthResponse | null
    login: (user: AuthResponse) => void
    logout: () => void
    isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<AuthResponse | null>(null)

    const login = (userData: AuthResponse) => {
        setUser(userData)
        // optionally save to localStorage
    }

    const logout = () => {
        setUser(null)
        // optionally clear localStorage
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth must be used within AuthProvider')
    return context
}
