import { useState } from 'react'
import AuthLayout from '../components/auth/AuthLayout'
import '../assets/css/login.css'

export default function LoginPage() {
    const [activeForm, setActiveForm] = useState('signin')

    return (
        <AuthLayout activeForm={activeForm} toggleForm={() => setActiveForm(prev => prev === 'signin' ? 'signup' : 'signin')} />
    )
}
