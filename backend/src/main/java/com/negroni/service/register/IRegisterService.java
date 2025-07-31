package com.negroni.service.register;

import com.negroni.model.dto.AuthResponseDTO;
import com.negroni.model.dto.RegisterDTO;

public interface IRegisterService {
    AuthResponseDTO register(RegisterDTO dto);
}

