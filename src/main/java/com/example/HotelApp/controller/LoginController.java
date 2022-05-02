package com.example.HotelApp.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:8080", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class LoginController {

    @GetMapping("/")
    public String home() {
        return ("<h1>Välkommen</h1>");
    }

    @GetMapping("/userpage")
    public String user() {
        return ("<h1>User</h1>");
    }

    @GetMapping("/adminpage")
    public String admin() {
        return ("<h1>Admin</h1>");
    }
}
