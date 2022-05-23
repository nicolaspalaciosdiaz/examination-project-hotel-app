package com.example.HotelApp.controller;

import com.example.HotelApp.model.Booking;
import com.example.HotelApp.model.Service;
import com.example.HotelApp.model.ServiceBooked;
import com.example.HotelApp.model.User;
import com.example.HotelApp.repository.BookingRepository;

import com.example.HotelApp.repository.ServiceBookedRepository;
import com.example.HotelApp.repository.ServiceRepository;
import com.example.HotelApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/bookings/")
public class BookingController {

    @Autowired
    BookingRepository bookingRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ServiceRepository serviceRepository;

    @Autowired
    ServiceBookedRepository serviceBookedRepository;

    //    @PreAuthorize("ADMIN")
    @GetMapping("/allbookings")
    public ResponseEntity<List<Booking>> getAllBookings() {
        return new ResponseEntity<>(bookingRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("getbookingsfromuser/{id}")
    public ResponseEntity<List<Booking>> getBookingsFromUser(@PathVariable("id") Long id) {

        Optional<User> user = userRepository.findById(id);

        return new ResponseEntity<>(user.get().getBookingList(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable("id") Long id) {

        Optional<Booking> booking = bookingRepository.findById(id);

        if (booking.isPresent()) {
            return new ResponseEntity<>(booking.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("addbookingtouser/{serviceId}/{id}")
    public ResponseEntity<Booking> addBookingToUser(@RequestBody Booking booking, @PathVariable("id") Long id) {

        Optional<User> user = userRepository.findById(id);

        Service service = serviceRepository.findById(1L).get();

        try {
            booking.setUserId(user.get().getId());

            Booking booked = bookingRepository.save(booking);

            user.get().getBookingList().add(booked);

            userRepository.save(user.get());

            ServiceBooked serviceId = new ServiceBooked();

            serviceId.setServiceId(service.getId());

            serviceId.setBookingId(booking.getId());

            serviceBookedRepository.save(serviceId);

            return new ResponseEntity<>(booking, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PutMapping("{id}")
    public ResponseEntity<Booking> updateBooking(@PathVariable("id") Long id, @RequestBody Booking booking) {

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

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteBooking(@PathVariable("id") Long id) {

        try {
            bookingRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.GONE);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
// TODO REFAKTORERA