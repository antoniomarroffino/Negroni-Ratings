package com.negroni.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;

@Entity
public class Negroni extends PanacheEntity {

    @Column(nullable = false)
    public String location;

    @Column(nullable = false)
    public String evaluation;

    public String comments;
}

