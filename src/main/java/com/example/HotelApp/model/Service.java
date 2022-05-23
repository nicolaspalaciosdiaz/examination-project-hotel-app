package com.example.HotelApp.model;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "service")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Service {
    @Id
    @Column(name = "service_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "service_name")
    private String serviceName;

    @Column(name = "duration")
    private int duration;

    @Column(name = "price")
    private double price;

    @Column(name = "amount")
    private int amount;

    public Service(String serviceName, int duration, double price, int amount) {
        this.serviceName = serviceName;
        this.duration = duration;
        this.price = price;
        this.amount = amount;
    }
}
