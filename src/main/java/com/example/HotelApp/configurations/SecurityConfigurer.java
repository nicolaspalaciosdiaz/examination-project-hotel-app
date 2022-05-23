//package com.example.HotelApp.configurations;
//
//import com.example.HotelApp.service.MyUserDetailsService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfigurer extends WebSecurityConfigurerAdapter {
//
//    @Bean
//    public MyUserDetailsService userDetailsService() {
//        return new MyUserDetailsService();
//    };
//
//    @Bean
//    public BCryptPasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    };
//
//    @Bean
//    public DaoAuthenticationProvider authenticationProvider() {
//        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
//        authenticationProvider.setPasswordEncoder(passwordEncoder());
//        authenticationProvider.setUserDetailsService(userDetailsService());
//        return authenticationProvider;
//    };
//
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.authenticationProvider(authenticationProvider());
//    };
//
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.authorizeRequests()
//                .antMatchers("api/adminpage").hasAuthority("ADMIN")
//                .antMatchers("api/userpage").hasAnyAuthority("USER","RECEPTION", "ADMIN")
//                .antMatchers("api/home").permitAll()
//                .anyRequest().authenticated()
//                .and().formLogin().permitAll()
//                .and()
//                .logout().permitAll();
//    };
//}