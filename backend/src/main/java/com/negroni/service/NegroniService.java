package com.negroni.service;

import com.negroni.mapper.NegroniMapper;
import com.negroni.model.Negroni;
import com.negroni.model.dto.NegroniDTO;
import com.negroni.repository.INegroniRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@ApplicationScoped
@Transactional
public class NegroniService implements INegroniService{

    @Inject
    INegroniRepository repository;

    @Override
    public void create(NegroniDTO dto) {
        Negroni negroni = NegroniMapper.toEntity(dto);
        repository.save(negroni);
    }

    @Override
    public List<NegroniDTO> getAll() {
        return repository.listAllNegroni()
                .stream()
                .map(NegroniMapper::toDTO)
                .collect(Collectors.toList());
    }
}
