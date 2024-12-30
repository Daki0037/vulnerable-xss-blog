package com.vulnerable.tokenreceiver.controller;

import com.vulnerable.tokenreceiver.service.TokenService;
import com.vulnerable.tokenreceiver.utils.TokenLogger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/token")
public class TokenController {

    private TokenService tokenService;

    @Autowired
    public TokenController(TokenService tokenService) {
        this.tokenService = tokenService;
    }

    @GetMapping("/get")
    public ResponseEntity<String> getToken(@RequestParam("jwt") String jwtToken) {
        TokenLogger.logMessage("TOKEN: " + jwtToken);
        return tokenService.getToken(jwtToken);
    }

}
