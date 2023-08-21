package com.iternova.empleados.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


public class ResourceNotFoundException extends RuntimeException{



    public ResourceNotFoundException(Long id){
        super("User could not be found");
    }
}
