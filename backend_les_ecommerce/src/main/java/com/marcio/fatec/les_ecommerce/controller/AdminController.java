package com.marcio.fatec.les_ecommerce.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/adm")
public class AdminController {

    @GetMapping("/dashboard")
    public ResponseEntity getDashboard(){


        return null;
    }
}
