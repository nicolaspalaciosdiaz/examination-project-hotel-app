package com.example.HotelApp.repository;

import com.example.HotelApp.model.ServiceBooked;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceBookedRepository extends JpaRepository<ServiceBooked, Long> {
}
