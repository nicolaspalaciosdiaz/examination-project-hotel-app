package com.example.HotelApp.controller;

import com.example.HotelApp.model.Booking;
import com.example.HotelApp.model.ServiceProvided;
import com.example.HotelApp.repository.ServiceProvidedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api")
public class ServiceProvidedController {

    @Autowired
    ServiceProvidedRepository serviceProvidedRepository;

    @GetMapping("/serviceprovided")
    public ResponseEntity<List<ServiceProvided>> getAllServiceProvided(){
        return new ResponseEntity<>(serviceProvidedRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/serviceprovided/{id}")
    public ResponseEntity<ServiceProvided> getServiceProvidedById(@PathVariable("id") long id) {
        Optional<ServiceProvided> serviceProvided = serviceProvidedRepository.findById(id);
        if (serviceProvided.isPresent()) {
            return new ResponseEntity<>(serviceProvided.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping("/serviceprovided/createserviceprovided")
    public ResponseEntity<ServiceProvided> createServiceProvided(@RequestBody ServiceProvided serviceProvided) {
        try {
            serviceProvidedRepository.save(serviceProvided);
            return new ResponseEntity<>(serviceProvided, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/serviceprovided/{id}")
    public ResponseEntity<HttpStatus> deleteServiceProvided(@PathVariable("id") long id) {
        try {
            serviceProvidedRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.GONE);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
