import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import { LoginDTO } from '../../api/authApi'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

interface LoginFormProps {
    toggle: () => void
}

export default function LoginForm({ toggle }: LoginFormProps) {
    const [form, setForm] = useState<LoginDTO>({ username: '', password: '' })
    const loginMutation = useLogin()
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        loginMutation.mutate(form, {
            onSuccess: (data) => {
                login(data)
                navigate('/')
            }
        })
    }

    return (
        <form className="form sign-in" onSubmit={handleSubmit}>
            <div className="input-group">
                <i className="bx bxs-user"></i>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={e => setForm({ ...form, username: e.target.value })}
                    required
                />
            </div>

            <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                    required
                />
            </div>

            <button type="submit" disabled={loginMutation.isPending}>
                {loginMutation.isPending ? 'Logging in...' : 'Login'}
            </button>

            <p>
                <span>Non hai un account?</span>
                <b onClick={toggle} className="pointer">Registrati</b>
            </p>

            {loginMutation.isError && (
                <p className="text-red-500">Errore: {loginMutation.error?.message}</p>
            )}
        </form>
    )
}
