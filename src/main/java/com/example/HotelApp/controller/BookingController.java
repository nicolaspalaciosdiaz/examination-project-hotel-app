package com.example.HotelApp.controller;

import com.example.HotelApp.model.Booking;
import com.example.HotelApp.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class BookingController {

    @Autowired
    BookingRepository bookingRepository;

    @GetMapping("/bookings")
    public ResponseEntity<List<Booking>> getAllBookings() {
        return new ResponseEntity<>(bookingRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/bookings/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable("id") long id) {
        Optional<Booking> booking = bookingRepository.findById(id);
        if (booking.isPresent()) {
            return new ResponseEntity<>(booking.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/bookings/addbooking")
    public ResponseEntity<Booking> createBooking(@RequestBody Booking booking) {
        try {
            bookingRepository.save(booking);
            return new ResponseEntity<>(booking, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/bookings/{id}")
    public ResponseEntity<Booking> updateBooking(@PathVariable("id") long id, @RequestBody Booking booking) {
        Optional<Booking> bookingData = bookingRepository.findById(id);
        if (bookingData.isPresent()) {
            Booking updateBooking = bookingData.get();
            updateBooking.setStartDate(booking.getStartDate());
            updateBooking.setEndDate(booking.getEndDate());
            updateBooking.setPrice(booking.getPrice());
            updateBooking.setDiscount(booking.getDiscount());
            updateBooking.setPriceFinal(booking.getPriceFinal());
            updateBooking.setCanceled(booking.isCanceled());
            return new ResponseEntity<>(bookingRepository.save(updateBooking), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/bookings/{id}")
    public ResponseEntity<HttpStatus> deleteBooking(@PathVariable("id") long id) {
        try {
            bookingRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.GONE);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
// TODO REFAKTORERA