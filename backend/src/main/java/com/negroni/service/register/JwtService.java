package com.negroni.service.register;

import io.smallrye.jwt.build.Jwt;
import jakarta.enterprise.context.ApplicationScoped;

import java.time.Duration;
import java.util.Set;

@ApplicationScoped
public class JwtService {
    public String generateToken(String username, String name, String surname) {
        return Jwt.issuer("http://localhost:8080")
                .upn(username)
                .subject(username)
                .claim("name", name)
                .claim("surname", surname)
                .groups(Set.of("user"))
                .expiresIn(Duration.ofHours(12))
                .sign();
    }
}

