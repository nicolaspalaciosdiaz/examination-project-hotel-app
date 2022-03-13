package com.example.HotelApp.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "contact_form")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class ContactForm {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "email")
    private String email;
    @Column(name = "message")
    private String message;
}
