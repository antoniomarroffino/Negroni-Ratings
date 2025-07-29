package com.negroni.mapper;

import com.negroni.model.Negroni;
import com.negroni.model.dto.NegroniDTO;

public class NegroniMapper {

    public static Negroni toEntity(NegroniDTO dto) {
        Negroni negroni = new Negroni();
        negroni.location = dto.location;
        negroni.evaluation = dto.evaluation;
        negroni.comments = dto.comments;
        return negroni;
    }

    public static NegroniDTO toDTO(Negroni entity) {
        NegroniDTO dto = new NegroniDTO();
        dto.location = entity.location;
        dto.evaluation = entity.evaluation;
        dto.comments = entity.comments;
        return dto;
    }
}

