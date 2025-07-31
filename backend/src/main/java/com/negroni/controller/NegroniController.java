package com.negroni.controller;

import com.negroni.model.dto.NegroniDTO;
import com.negroni.service.negroni.INegroniService;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.parameters.RequestBody;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;

import java.util.List;

@Path("/negroni")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class NegroniController {

    @Inject
    INegroniService negroniService;

    @POST
    @Operation(summary = "Add a new Negroni")
    @RequestBody(
            required = true,
            content = @Content(
                    mediaType = MediaType.APPLICATION_JSON,
                    schema = @Schema(implementation = NegroniDTO.class)
            )
    )
    @APIResponse(
            responseCode = "201",
            description = "Negroni created"
    )
    public void create(NegroniDTO dto) {
        negroniService.create(dto);
    }

    @GET
    @Operation(summary = "Get all Negroni entries")
    @APIResponse(
            responseCode = "200",
            description = "List of Negroni",
            content = @Content(
                    mediaType = MediaType.APPLICATION_JSON,
                    schema = @Schema(implementation = NegroniDTO.class)
            )
    )
    public List<NegroniDTO> list() {
        return negroniService.getAll();
    }
}
