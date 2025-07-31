package com.negroni.repository.auth;

import com.negroni.model.User;

public interface IUserRepository {
    User findByUsername(String username);
    void save(User user);
}
