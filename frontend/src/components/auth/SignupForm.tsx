import { useState } from 'react'
import { RegisterDTO } from '../../api/authApi'
import { useRegister } from '../../hooks/useRegister'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

interface Props {
    toggle: () => void
}

export default function SignupForm({ toggle }: Props) {
    const [form, setForm] = useState<RegisterDTO>({
        username: '',
        password: '',
        name: '',
        surname: ''
    })

    const registerMutation = useRegister()
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        registerMutation.mutate(form, {
            onSuccess: (data) => {
                login(data)
                navigate('/')
            }
        })
    }

    return (
        <form className="form sign-up" onSubmit={handleSubmit}>
            <div className="input-group">
                <i className="bx bxs-user"></i>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleChange}
                />
            </div>
            <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                />
            </div>
            <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input
                    type="text"
                    name="name"
                    placeholder="First Name"
                    value={form.name}
                    onChange={handleChange}
                />
            </div>
            <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input
                    type="text"
                    name="surname"
                    placeholder="Last Name"
                    value={form.surname}
                    onChange={handleChange}
                />
            </div>

            <button type="submit" disabled={registerMutation.isPending}>
                {registerMutation.isPending ? 'Registrando...' : 'Sign up'}
            </button>

            <p>
                <span>Hai già un account?</span>
                <b onClick={toggle} className="pointer">Accedi</b>
            </p>

            {registerMutation.isError && (
                <p className="text-red-500">
                    Errore: {registerMutation.error?.message}
                </p>
            )}
        </form>
    )
}
