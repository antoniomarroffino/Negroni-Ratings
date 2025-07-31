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