package com.example.HotelApp.repository;

import java.util.List;

import com.example.HotelApp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByFirstName(String firstName);
    List<User> findByLastName(String lastName);

    User findUserByEmail(String email);
}
