package com.negroni.repository;

import com.negroni.model.Negroni;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;

import java.util.List;

@ApplicationScoped
public class NegroniRepository implements INegroniRepository, PanacheRepository<Negroni> {

    @Override
    public void save(Negroni negroni) {
        persist(negroni);
    }

    @Override
    public List<Negroni> listAllNegroni() {
        return listAll();
    }
}

