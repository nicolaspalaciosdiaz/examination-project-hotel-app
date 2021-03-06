package com.example.HotelApp.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "service_booked")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class ServiceBooked {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "booking_id")// FK
    private long bookingId;
    @Column(name = "service_id")// FK
    private long serviceId;
}
