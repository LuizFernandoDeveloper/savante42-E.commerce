package com.savante.handler;

import com.savante.entities.error.ErrorMesage;
import com.savante.entities.exception.ProductNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class RestExceptionHandler {

    @ExceptionHandler(ProductNotFoundException.class)
    public ResponseEntity<?> handlerResourceNotFoundException(ProductNotFoundException exception){
        ErrorMesage error = new ErrorMesage("Product Not Found", HttpStatus.NOT_FOUND.value(),exception.getMessage() );
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }
}
