//package com.example.HotelApp.service;
//
////import com.example.HotelApp.model.MyUserPrincipal;
//
//import com.example.HotelApp.model.MyUserPrincipal;
//import com.example.HotelApp.model.User;
//import com.example.HotelApp.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//@Service
//public class MyUserDetailsService implements UserDetailsService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
//
//        User user = userRepository.getUserByUserName(userName);
//
//        if (user == null){
//            throw new UsernameNotFoundException("Kunde inte hitta användaren");
//        }
//        return new MyUserPrincipal(user);
//    }
//}
//
//
//
