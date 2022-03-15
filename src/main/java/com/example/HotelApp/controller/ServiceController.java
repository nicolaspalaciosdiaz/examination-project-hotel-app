package com.example.HotelApp.controller;

import com.example.HotelApp.model.Booking;
import com.example.HotelApp.model.Service;
import com.example.HotelApp.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class ServiceController {

    @Autowired
    ServiceRepository serviceRepository;

    @GetMapping("/service/getall")
    public ResponseEntity<List<Service>> getAllServices() {
        return new ResponseEntity<>(serviceRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/service/{id}")
    public ResponseEntity<Service> getServiceById(@PathVariable("id") long id) {
        Optional<Service> service = serviceRepository.findById(id);
        if (service.isPresent()) {
            return new ResponseEntity<>(service.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @PostMapping("/service/createservice")
    public ResponseEntity<Service> createService(@RequestBody Service service) {
        try {
            serviceRepository.save(service);
            return new ResponseEntity<>(service, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/service/{id}")
    public ResponseEntity<Service> updateService(@PathVariable("id") long id, @RequestBody Service service) {
        Optional<Service> serviceData = serviceRepository.findById(id);
        if (serviceData.isPresent()) {
            Service updateService = serviceData.get();
            updateService.setServiceName(service.getServiceName());
            updateService.setDuration(service.getDuration());
            updateService.setPrice(service.getPrice());
            updateService.setAmount(service.getAmount());
            return new ResponseEntity<>(serviceRepository.save(updateService), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/service/{id}")
    public ResponseEntity<HttpStatus> deleteService(@PathVariable("id") long id) {
        try {
            serviceRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.GONE);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
