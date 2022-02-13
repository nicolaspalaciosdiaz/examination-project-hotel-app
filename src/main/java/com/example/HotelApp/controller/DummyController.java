package com.example.HotelApp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DummyController {

    @GetMapping("/")
    public String dummy() {
        return "Dummy string" + " <h1>Välkommen</h1>";
    }

    @GetMapping("/user")
    public String user() {
        return "Dummy string" + " <h1>Användare</h1>";
    }

    @GetMapping("/admin")
    public String admin() {
        return "Dummy string" + " <h1>Admin</h1>";
    }
}
