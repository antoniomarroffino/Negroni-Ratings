import { useMutation } from '@tanstack/react-query'
import { registerUser, RegisterDTO, AuthResponse } from '../api/authApi'

export function useRegister() {
    return useMutation<AuthResponse, Error, RegisterDTO>({
        mutationFn: registerUser
    })
}
