package com.example.HotelApp.configurations;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration

public class CorsWebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry myCorsRegistry){
        myCorsRegistry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000/")
                .allowedHeaders("*")
                .allowedMethods("*")
                .maxAge(4800);
    }
}
