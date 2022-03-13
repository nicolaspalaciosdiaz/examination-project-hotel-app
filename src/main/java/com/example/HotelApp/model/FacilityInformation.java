package com.example.HotelApp.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "facility_information")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class FacilityInformation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "nameOfFacility")
    private String nameOfFacility;
    @Column(name = "about")
    private String about;


}
