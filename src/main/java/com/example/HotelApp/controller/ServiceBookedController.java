package com.example.HotelApp.controller;

import com.example.HotelApp.model.Booking;
import com.example.HotelApp.model.ServiceBooked;
import com.example.HotelApp.repository.ServiceBookedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api")
public class ServiceBookedController {

    @Autowired
    ServiceBookedRepository serviceBookedRepository;

    @GetMapping("/servicebooked")
    public ResponseEntity<List<ServiceBooked>> getAllServicesBooked() {
        return new ResponseEntity<>(serviceBookedRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/servicebooked/{id}")
    public ResponseEntity<ServiceBooked> getServiceBookedById(@PathVariable("id") long id) {
        Optional<ServiceBooked> serviceBooked = serviceBookedRepository.findById(id);
        if (serviceBooked.isPresent()) {
            return new ResponseEntity<>(serviceBooked.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/servicebooked/addbookedservice")
    public ResponseEntity<ServiceBooked> createServiceBooked(@RequestBody ServiceBooked serviceBooked) {
        try {
            serviceBookedRepository.save(serviceBooked);
            return new ResponseEntity<>(serviceBooked, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/servicebooked/{id}")
    public ResponseEntity<HttpStatus> deleteServiceBooked(@PathVariable("id") Long id) {
        try {
            serviceBookedRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.GONE);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
