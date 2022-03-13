package com.example.HotelApp.model;

import lombok.*;
import javax.persistence.*;

// Osäkert om classen behövs!

@Entity
@Table(name = "service_provided")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class ServiceProvided {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "booking_id")// FK
    private long bookingId;
    @Column(name = "service_id")
    private long serviceId; // FK
    @Column(name = "price")
    private double price;

}
