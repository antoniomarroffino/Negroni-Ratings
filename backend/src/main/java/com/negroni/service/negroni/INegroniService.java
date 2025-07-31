package com.negroni.service.negroni;

import com.negroni.model.dto.NegroniDTO;

import java.util.List;

public interface INegroniService {
    void create(NegroniDTO dto);
    List<NegroniDTO> getAll();
}

