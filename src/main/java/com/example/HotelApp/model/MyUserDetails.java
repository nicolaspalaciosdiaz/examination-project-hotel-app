package com.example.HotelApp.model;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

public class MyUserDetails implements UserDetails {

    private String userName;
    private String password;
    private boolean active;
    private List<GrantedAuthority> authorities;

//    public MyUserDetails(User user) {
//        this.userName = user.getUserName();
//        this.password = user.getPassword();
//        this.active = user.isActive();
//        this.authorities = Arrays.stream(user.getRoles().split(","))
//                .map(SimpleGrantedAuthority::new)
//                .collect(Collectors.toList());
//    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return userName;
    }
    //TODO: Den här nedre är hådkodad, kolla upp hur man kan göra den dynamisk.
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }
    //TODO: Den här nedre är hådkodad, kolla upp hur man kan göra den dynamisk.
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }
    //TODO: Den här nedre är hådkodad, kolla upp hur man kan göra den dynamisk.
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return active;
    }
}
