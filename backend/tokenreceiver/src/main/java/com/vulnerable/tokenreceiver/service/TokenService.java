package com.vulnerable.tokenreceiver.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class TokenService {

    public ResponseEntity<String> getToken(String jwtToken) {
        if(jwtToken.trim().isEmpty())
            return ResponseEntity.badRequest().body("Provided token is not valid.");


        return ResponseEntity.ok("Token succesfully archived.");
    }

}
