package com.vulnerable.xssposure.repository;

import com.vulnerable.xssposure.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

    List<User> findAll();

    User findById(int id);

    User findByUsername(String username);

}
