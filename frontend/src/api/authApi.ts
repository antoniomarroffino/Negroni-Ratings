import axios from 'axios'

export const publicApi = axios.create({
    baseURL: 'http://localhost:8080/api/auth',
    withCredentials: true
})

export const privateApi = axios.create({
    baseURL: 'http://localhost:8080/api/auth',
    withCredentials: true
})

privateApi.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

import { LoginDTO, RegisterDTO, AuthResponse } from '../types/types'

export const loginUser = async (data: LoginDTO): Promise<AuthResponse> => {
    const res = await publicApi.post('/login', data)
    return res.data
}

export const registerUser = async (data: RegisterDTO): Promise<AuthResponse> => {
    const res = await publicApi.post('/register', data)
    return res.data
}
