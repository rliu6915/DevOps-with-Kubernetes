package com.example.webserverk8d.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/content")
public class contentController {

    @GetMapping("/")
    public String findAll() {
        return "Hello, World!";
    }
}
