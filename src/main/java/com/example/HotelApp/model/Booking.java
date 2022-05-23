package com.example.HotelApp.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "booking")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "user_id")
    private long userId;

    @Column(name = "service_id")
    private long serviceId;

    @Column(name = "date_created")
    private LocalDate dateCreated = LocalDate.now();
    @Column(name = "start_date")
    private String startDate;
    @Column(name = "end_date")
    private String endDate;
    @Column(name = "price")
    private double price;
    @Column(name = "discount")
    private double discount;
    @Column(name = "price_final")
    private double priceFinal;
    @Column(name = "canceled")
    private boolean canceled;
//
//    @ManyToOne
//    private User user;

}

//    static DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
