package com.negroni.repository.negroni;

import com.negroni.model.Negroni;

import java.util.List;

public interface INegroniRepository {
    void save(Negroni negroni);
    List<Negroni> listAllNegroni();
}