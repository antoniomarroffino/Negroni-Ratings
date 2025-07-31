package com.negroni.service.register;

import com.negroni.model.User;
import com.negroni.model.dto.AuthResponseDTO;
import com.negroni.model.dto.RegisterDTO;
import com.negroni.repository.auth.IUserRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.BadRequestException;
import org.mindrot.jbcrypt.BCrypt;

@ApplicationScoped
public class RegisterService implements IRegisterService {

    @Inject
    IUserRepository userRepository;

    @Inject
    JwtService jwtService;

    @Override
    @Transactional
    public AuthResponseDTO register(RegisterDTO dto) {
        if (userRepository.findByUsername(dto.username) != null) {
            throw new BadRequestException("Username already exists");
        }

        User newUser = new User();
        newUser.username = dto.username;
        newUser.name = dto.name;
        newUser.surname = dto.surname;
        newUser.password = BCrypt.hashpw(dto.password, BCrypt.gensalt());

        userRepository.save(newUser);

        String token = jwtService.generateToken(newUser.username, newUser.name, newUser.surname);
        return new AuthResponseDTO(token, newUser.username, newUser.name, newUser.surname);
    }
}

