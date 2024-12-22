package com.vulnerable.xssposure.repository;

import com.vulnerable.xssposure.model.Post;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PostRepository extends CrudRepository<Post, Long> {

    Post findById(long id);

    List<Post> findByUserId(long id);

    List<Post> findAll();

    boolean insert(Post post);
}
