package com.cognizant.springlearn.controller;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springlearn.util.JwtUtil;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(
            @RequestHeader("Authorization") String authHeader) {

        // Remove "Basic "
        String base64Credentials = authHeader.substring(6);

        // Decode username:password
        byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);
        String credentials = new String(decodedBytes, StandardCharsets.UTF_8);

        // Split username and password
        String[] values = credentials.split(":", 2);

        String username = values[0];
        String password = values[1];

        // Generate JWT using username
        String token = JwtUtil.generateToken(username);

        Map<String, String> response = new HashMap<>();
        response.put("token", token);

        return response;
    }
}