import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { ReactElement } from 'react'

interface PrivateRouteProps {
    children: ReactElement
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
    const { isAuthenticated } = useAuth()

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    return children
}
