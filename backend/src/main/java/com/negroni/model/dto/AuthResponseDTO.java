package com.negroni.model.dto;

public class AuthResponseDTO {
    public String token;
    public String username;
    public String name;
    public String surname;

    public AuthResponseDTO(String token, String username, String name, String surname) {
        this.token = token;
        this.username = username;
        this.name = name;
        this.surname = surname;
    }
}
