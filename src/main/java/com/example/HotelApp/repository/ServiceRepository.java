package com.example.HotelApp.repository;

import com.example.HotelApp.model.Service;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRepository extends JpaRepository<Service, Long> {
}
