package com.vulnerable.xssposure.repository;

import com.vulnerable.xssposure.model.Post;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends CrudRepository<Post, Long> {

    Post findById(long id);

    List<Post> findByUserId(long id);

    List<Post> findAll();

    List<Post> findAllByOrderByPostedAtDesc();
}
