package com.example.HotelApp.model;

import lombok.*;
import javax.persistence.*;

@Entity
@Table(name = "service")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "service_name")
    private String serviceName;
    @Column(name = "duration")
    private int duration;
    @Column(name = "price")
    private double price;
    @Column(name = "amount")
    private int amount;
}
