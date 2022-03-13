package com.example.HotelApp.controller;

import com.example.HotelApp.model.ContactForm;
import com.example.HotelApp.repository.ContactFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class ContactFormController {

    @Autowired
    ContactFormRepository contactFormRepository;

    @GetMapping("/contactform")
    public ResponseEntity<List<ContactForm>> getAllContactForms() {
        return new ResponseEntity<>(contactFormRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/contactform/{id}")
    public ResponseEntity<ContactForm> getContactFormById(@PathVariable("id") long id) {
        Optional<ContactForm> contactForm = contactFormRepository.findById(id);
        if (contactForm.isPresent()) {
            return new ResponseEntity<>(contactForm.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/contactform/createcontactform")
    public ResponseEntity<ContactForm> createContactForm(@RequestBody ContactForm contactForm) {
        try {
            contactFormRepository.save(contactForm);
            return new ResponseEntity<>(contactForm, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/contactform/{id}")
    public ResponseEntity<HttpStatus> deleteContactForm(@PathVariable("id") long id) {
        try {
            contactFormRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.GONE);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
