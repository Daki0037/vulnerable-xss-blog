# XSSposure 🌐 #

A demonstration of **Cross-Site Scripting (XSS)** vulnerabilities in a blogging platform. 
This project simulates **a vulnerable blog** where user-generated content can be exploited for XSS attacks, leading to stolen cookies, session tokens, or user credentials.

## Overview

XSSposure is an educational project designed to highlight **XSS vulnerabilities** in modern web applications. 
It showcases how malicious actors can exploit unsanitized user input to execute harmful scripts in a victim's browser. 
This project is built with **React** (Frontend) and **Spring Boot** (Backend), simulating a simple blogging platform with authentication and user-generated content.

## Features

* **Login System**: Users log in using JWT-based authentication.
* **Create and View Posts**: Users can create blog posts with text or HTML content. However, input is not sanitized, allowing for XSS vulnerabilities.
* **Simulate XSS Attacks**: Users can inject malicious scripts into blog posts, which are then executed in the browsers of viewers.

##

**Enjoy exploring XSS vulnerabilities, and remember: always sanitize user input in production apps!**
