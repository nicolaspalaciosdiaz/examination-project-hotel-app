package com.example.HotelApp.model;

import lombok.*;
import javax.persistence.*;

@Entity
@Table(name = "user")
@NoArgsConstructor
@AllArgsConstructor
@Getter//@Data Ska göra allt från @Getter till @ToString, ska testas sen.
@Setter
@ToString
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;
    @Column(name = "phone_number")
    private long phoneNumber;
    @Column(name = "role")
    private String role;
}

//TODO lägga till födelsedatum.
