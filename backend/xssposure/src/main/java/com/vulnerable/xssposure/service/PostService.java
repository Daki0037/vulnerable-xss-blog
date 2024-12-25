package com.vulnerable.xssposure.service;

import com.vulnerable.xssposure.model.Post;
import com.vulnerable.xssposure.repository.PostRepository;
import com.vulnerable.xssposure.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;

@Service
public class PostService {

    private PostRepository postRepository;
    private UserRepository userRepository;

    @Autowired
    public PostService(PostRepository postRepository, UserRepository userRepository) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
    }

    public List<Post> getAll() {
        return postRepository.findAll();
    }

    public Post getById(int id) {
        return postRepository.findById(id);
    }

    public ResponseEntity<String> insert(Post post, UserDetails userDetails) {
        if (userDetails == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User is not authenticated.");
        }

        String username = userDetails.getUsername();
        post.setUser(userRepository.findByUsername(username));
        post.setPostedAt(new Timestamp(System.currentTimeMillis()));
        postRepository.save(post);
        return ResponseEntity.status(HttpStatus.CREATED).body("Post successfully created");
    }

}
