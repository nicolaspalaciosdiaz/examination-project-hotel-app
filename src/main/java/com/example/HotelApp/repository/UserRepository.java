package com.example.HotelApp.repository;

import java.util.List;

import com.example.HotelApp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT u FROM User u WHERE u.userName = :userName")
    public User getUserByUserName(@Param("userName")String userName);
}

//    List<User> findByFirstName(String firstName);
//    List<User> findByLastName(String lastName);
