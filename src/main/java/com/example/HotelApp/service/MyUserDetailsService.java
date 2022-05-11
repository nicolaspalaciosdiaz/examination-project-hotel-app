package com.example.HotelApp.service;

import com.example.HotelApp.model.MyUserPrincipal;
import com.example.HotelApp.model.User;
import com.example.HotelApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        Optional<User> user = Optional.ofNullable(userRepository.findUserByEmail(email));

        user.orElseThrow(() -> new UsernameNotFoundException("Not found " + email));

        return user.map(MyUserPrincipal::new).get();
    }
}



