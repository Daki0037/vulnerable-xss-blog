package com.vulnerable.xssposure.service;

import com.vulnerable.xssposure.model.Post;
import com.vulnerable.xssposure.repository.PostRepository;
import com.vulnerable.xssposure.repository.UserRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    private PostRepository postRepository;

    @Autowired
    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<Post> getAll() {
        return postRepository.findAll();
    }

    public Post getById(int id) {
        return postRepository.findById(id);
    }

    public ResponseEntity<String> insert(Post post) {
        postRepository.save(post);
        return new ResponseEntity<>("Post successfully added.", HttpStatus.OK);
    }

}
