package com.example.HotelApp;

import com.example.HotelApp.repository.UserRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
@EnableJpaRepositories(basePackageClasses = UserRepository.class)
public class HotelAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(HotelAppApplication.class, args);
    }
}

//extends SpringBootServletInitializer
