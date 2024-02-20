package com.example.bus_nav.Controller;

import com.example.bus_nav.Repository.UserRepository;
import com.example.bus_nav.Service.UserService;
import com.example.bus_nav.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public String addUser(@RequestBody User user) {

            User storedUser = userRepository.findByEmail(user.getEmail());
            if (storedUser != null && storedUser.getEmail().equals(user.getEmail())) {
                return "Email is Already Registered!";
            } else {
                userService.saveUser(user);
                return "Sign up Successful";
            }

    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        // Retrieve user from the database based on the provided username
        User storedUser = userRepository.findByEmail(user.getEmail());

        if (storedUser != null && storedUser.getPassword().equals(user.getPassword())) {
            return "Login successful!";
        } else {
            return "Invalid email or password";
        }
    }

    @GetMapping("/getAll")
    public List<User> getAllUser() {
        return userService.getAllUser();
    }
}
