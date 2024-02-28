package com.example.webserverk8d;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @GetMapping("/")
    public String hello() {
        return "The server is up and running!";
    }
}
