import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import {JSX} from "react";

interface PrivateRouteProps {
    children: JSX.Element
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
    const { isAuthenticated } = useAuth()

    return isAuthenticated ? children : <Navigate to="/login" replace />
}
