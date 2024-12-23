package com.vulnerable.xssposure.controller;

import com.vulnerable.xssposure.model.Post;
import com.vulnerable.xssposure.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/posts")
public class PostController {

    private PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("")
    public List<Post> getAll() {
        return postService.getAll();
    }

    @GetMapping("/{id}")
    public Post getPostById(@PathVariable("id") int id) {
        return postService.getById(id);
    }

    @PostMapping("/insert")
    public ResponseEntity<String> insertPost(@RequestBody Post post) {
        return postService.insert(post);
    }

}
