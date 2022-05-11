package com.example.HotelApp;

import com.example.HotelApp.model.User;
import com.example.HotelApp.repository.BookingRepository;
import com.example.HotelApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.time.LocalDate;

@SpringBootApplication
@EnableJpaRepositories(basePackageClasses = UserRepository.class)
public class HotelAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(HotelAppApplication.class, args);
    }

    @Autowired
    UserRepository userRepository;

    @Autowired
    BookingRepository bookingRepository;

    @Bean
    CommandLineRunner run() throws Exception {
        return args -> {
            userRepository.save(new User(
                    "Tony",
                    "Svensson",
                    LocalDate.of(1979, 6, 19),
                    "tony@svensson.se",
                    "$2a$12$3Te1EgUhuE5yQ0jexeWhpO.JFH.drOZpAnwZ3v8x/TDZkWOR3NhO6",
                    78099543,
                    "USER"
            ));
            userRepository.save(new User(
                    "Angelica",
                    "Hermansson",
                    LocalDate.of(1989, 8, 29),
                    "angelica@hermansson.se",
                    "PlK0076bt",
                    70923498,
                    "USER"
            ));
            userRepository.save(new User(
                    "Kristian",
                    "Eriksson",
                    LocalDate.of(1979, 6, 19),
                    "kristian@eriksson.se",
                    "MnI9673lm",
                    73557747,
                    "USER"
            ));
            userRepository.save(new User(
                    "Admin",
                    "Adminsson",
                    LocalDate.of(1989, 2, 8),
                    "admin@adminsson.se",
                    "MlkH8276",
                    73557747,
                    "ADMIN"
            ));
        };
    }
}

//extends SpringBootServletInitializer
//@SpringBootApplication(exclude = SecurityAutoConfiguration.class)

