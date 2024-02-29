package com.example.bus_nav.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class MyNotFoundException extends RuntimeException {
    public MyNotFoundException(String message) {
        super(message);
    }
}