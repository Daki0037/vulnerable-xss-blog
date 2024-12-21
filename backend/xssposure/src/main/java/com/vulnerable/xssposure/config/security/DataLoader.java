package com.vulnerable.xssposure.config.security;

import com.vulnerable.xssposure.model.User;
import com.vulnerable.xssposure.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@Lazy
public class DataLoader implements CommandLineRunner {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    public DataLoader(UserRepository userRepository, @Lazy PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) throws Exception {
        if(userRepository.findByUsername("admin") == null) {
            User user = new User();
            user.setName("admin");
            user.setUsername("admin");
            user.setPassword(passwordEncoder.encode("password"));
            user.setRoles("USER");
            userRepository.save(user);
        }
    }
}
