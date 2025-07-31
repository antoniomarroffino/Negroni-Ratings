package com.negroni.service.auth;

import com.negroni.model.User;
import com.negroni.model.dto.AuthResponseDTO;
import com.negroni.model.dto.LoginDTO;
import com.negroni.repository.auth.IUserRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.BadRequestException;

@ApplicationScoped
public class AuthService implements IAuthService {

    @Inject
    IUserRepository userRepository;

    public AuthResponseDTO login(LoginDTO dto) {
        User user = userRepository.findByUsername(dto.username);

        if (user == null || !user.password.equals(dto.password)) {
            throw new BadRequestException("Invalid username or password");
        }

        // 🔐 In produzione usa un JWT
        String fakeToken = "token-" + user.username;

        return new AuthResponseDTO(fakeToken, user.username, user.name, user.surname);
    }
}
