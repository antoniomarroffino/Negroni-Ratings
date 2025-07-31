import axios from 'axios'

export interface LoginDTO {
    username: string
    password: string
}

export interface RegisterDTO extends LoginDTO {
    name: string
    surname: string
}

export interface AuthResponse {
    token: string
    username: string
    name: string
    surname: string
}

const api = axios.create({
    baseURL: 'http://localhost:8080/api/auth',
    withCredentials: true
})

export const loginUser = async (data: LoginDTO): Promise<AuthResponse> => {
    const res = await api.post('/login', data)
    return res.data
}

export const registerUser = async (data: RegisterDTO): Promise<AuthResponse> => {
    const res = await api.post('/register', data)
    return res.data
}
