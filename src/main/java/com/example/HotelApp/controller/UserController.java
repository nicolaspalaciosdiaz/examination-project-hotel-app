package com.example.HotelApp.controller;

import com.example.HotelApp.model.User;
import com.example.HotelApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8080", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class UserController {
    //Ska flyttas senare till service klassen.
    @Autowired
    UserRepository userRepository;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {

        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long id) {

        Optional<User> user = userRepository.findById(id);

        if (user.isPresent()) {
            return new ResponseEntity<>(user.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
// ------------------------------>
//    @GetMapping("/users/{id}/email")
//    public ResponseEntity<String> getUserByEmail(@PathVariable("id") Long id) {
//
//        Optional<User> user = Optional.of(userRepository.getById(id));
//
//        user.get().getEmail();
//
//        if (user.isPresent()) {
//            return new ResponseEntity<>(user.get().getEmail(), HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }

    @PostMapping("/users/adduser")
    public ResponseEntity<User> createUser(@RequestBody User user) {

        try {
            //userRepository.getById(user.getId());

//            LocalDate birthDate = user.getDateOfBirth();
//
//            SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
//            sdf.format(birthDate);


            User saveUser = userRepository
                    .save(user);
            return new ResponseEntity<>(saveUser, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") long id, @RequestBody User user) {
        Optional<User> userData = userRepository.findById(id);
        if (userData.isPresent()) {
            User updateUser = userData.get();
            updateUser.setFirstName(user.getFirstName());
            updateUser.setLastName(user.getLastName());
            updateUser.setEmail(user.getEmail());
            updateUser.setPassword(user.getPassword());
            updateUser.setPhoneNumber(user.getPhoneNumber());
            updateUser.setEnabled(user.getEnabled());
            return new ResponseEntity<>(userRepository.save(updateUser), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") long id) {
        try {
            userRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.GONE);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/users/deletall")
    public ResponseEntity<HttpStatus> deleteAllUsers() {
        try {
            userRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    // TODO LÄGGA TILL ATT SÖKA PÅ FÖRNAMN.
    // TODO LÄGGA TILL ATT SÖKA PÅ EFTERNAMN.
    // TODO REFAKTORERA
}
