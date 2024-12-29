package com.vulnerable.xssposure.config.security;

import com.vulnerable.xssposure.model.User;
import com.vulnerable.xssposure.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

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
        List<User> userList = createUserList();

        for(User user : userList) {
            if(userRepository.findByUsername(user.getUsername()) == null) {
                userRepository.save(user);
            }
        }
    }

    public List<User> createUserList() {
        List<User> userList = new ArrayList<>();

        User user1 = new User();
        user1.setName("admin");
        user1.setUsername("admin");
        user1.setPassword(passwordEncoder.encode("password"));
        user1.setRoles("ADMIN");

        User user2 = new User();
        user2.setName("Marko Marković");
        user2.setUsername("marko95");
        user2.setPassword(passwordEncoder.encode("marko.95"));
        user2.setRoles("USER");

        User user3 = new User();
        user3.setName("Petar Petrović");
        user3.setUsername("PetarP1");
        user3.setPassword(passwordEncoder.encode("Petar.P1"));
        user3.setRoles("USER");

        User user4 = new User();
        user4.setName("Stefan Stefanović");
        user4.setUsername("Stefan00");
        user4.setPassword(passwordEncoder.encode("Stefan.00"));
        user4.setRoles("USER");

        userList.add(user1);
        userList.add(user2);
        userList.add(user3);
        userList.add(user4);

        return userList;
    }
}
