package com.marcio.fatec.les_ecommerce.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/teste")
public class ControllerTest {


    @GetMapping
    public ResponseEntity teste(){


        return ResponseEntity.ok("Hello World");
    }
}
