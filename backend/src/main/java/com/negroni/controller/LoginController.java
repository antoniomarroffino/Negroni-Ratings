package com.negroni.controller;

import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import io.quarkus.qute.Template;

@Path("/no")
public class LoginController {

    @Inject
    Template login;
    
    @GET
    @Produces(MediaType.TEXT_HTML)
    public String uploadLoginPage() {
        System.out.println("test");
        return login.instance()
        .data("activeForm", "login")
        .data("error", null)
        .render();
    }
}
