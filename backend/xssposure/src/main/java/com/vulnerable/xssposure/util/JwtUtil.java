package com.vulnerable.xssposure.util;

import io.jsonwebtoken.*;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.function.Function;

@Component
public class JwtUtil {

    private static final String SECRET_KEY = "SecretDevelopmentKeyV1SecretDevelopmentKeyV1SecretDevelopmentKeyV1SecretDevelopmentKeyV1";
    private static final long EXPIRATION_TIME = 1000 * 60 * 60;

    public static String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .compact();
    }

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    public JwsHeader extractHeader(String token) {
        if (token == null || token.trim().isEmpty()) {
            return null;
        }
        try {
            return Jwts
                    .parser()
                    .setSigningKey(SECRET_KEY)
                    .build()
                    .parseSignedClaims(token)
                    .getHeader();
        }
        catch (JwtException ex) {
            return null;
        }

    }
    public Claims extractAllClaims(String token) {
        return Jwts
                .parser()
                .setSigningKey(SECRET_KEY)
                .build()
                .parseSignedClaims(token)
                .getBody();
    }

    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(SECRET_KEY).build().parseClaimsJws(token);
            return true;
        }
        catch (SignatureException e) {
            throw new JwtException("JWT signature is invalid.");
        } catch (MalformedJwtException e) {
            throw new JwtException("JWT token is invalid.");
        } catch (ExpiredJwtException e) {
            throw new JwtException("JWT token has expired.");
        } catch (UnsupportedJwtException e) {
            throw new JwtException("JWT token is unsupported.");
        } catch (IllegalArgumentException e) {
            throw new JwtException("JWT token claims or compact representation are invalid.");
        }

    }

}
