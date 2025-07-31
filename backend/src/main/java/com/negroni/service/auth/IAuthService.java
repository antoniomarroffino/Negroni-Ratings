package com.negroni.service.auth;

import com.negroni.model.dto.AuthResponseDTO;
import com.negroni.model.dto.LoginDTO;

public interface IAuthService {
    AuthResponseDTO login(LoginDTO dto);
}

