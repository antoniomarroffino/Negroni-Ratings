package com.negroni.controller;

import com.negroni.model.dto.LoginDTO;
import com.negroni.model.dto.AuthResponseDTO;
import com.negroni.model.dto.RegisterDTO;
import com.negroni.service.auth.IAuthService;
import com.negroni.service.register.IRegisterService;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

@Path("/auth")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class AuthController {

    @Inject
    IAuthService authService;

    @Inject
    IRegisterService registerService;

    @POST
    @Path("/login")
    public AuthResponseDTO login(LoginDTO dto) {
        return authService.login(dto);
    }

    @POST
    @Path("/register")
    public AuthResponseDTO register(RegisterDTO dto) {
        return registerService.register(dto);
    }
}
