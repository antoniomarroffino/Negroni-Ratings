package com.negroni.repository.auth;

import com.negroni.model.User;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class UserRepository implements IUserRepository, PanacheRepository<User> {

    @Override
    public User findByUsername(String username) {
        return find("username", username).firstResult();
    }

    @Override
    public void save(User user) {
        persist(user);
    }
}
