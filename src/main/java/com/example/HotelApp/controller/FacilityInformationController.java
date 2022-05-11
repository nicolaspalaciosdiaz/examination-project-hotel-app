package com.example.HotelApp.controller;

import com.example.HotelApp.model.Booking;
import com.example.HotelApp.model.FacilityInformation;
import com.example.HotelApp.repository.FacilityInformationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api")
public class FacilityInformationController {

    @Autowired
    FacilityInformationRepository facilityInformationRepository;

    @GetMapping("/facilityinformation")
    public ResponseEntity<List<FacilityInformation>> getAllFacilityInformation(){
        return new ResponseEntity<>(facilityInformationRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/facilityinformation/{id}")
    public ResponseEntity<FacilityInformation> getFacilityInformationById(@PathVariable("id") long id) {
        Optional<FacilityInformation> facilityInformation = facilityInformationRepository.findById(id);
        if (facilityInformation.isPresent()) {
            return new ResponseEntity<>(facilityInformation.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/facilityinformation/create")
    public ResponseEntity<FacilityInformation> createFacilityInformation(@RequestBody FacilityInformation facilityInformation) {
        try {
            facilityInformationRepository.save(facilityInformation);
            return new ResponseEntity<>(facilityInformation, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/facilityinformation/{id}")
    public ResponseEntity<HttpStatus> deleteFacilityInformation(@PathVariable("id") long id) {
        try {
            facilityInformationRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.GONE);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
