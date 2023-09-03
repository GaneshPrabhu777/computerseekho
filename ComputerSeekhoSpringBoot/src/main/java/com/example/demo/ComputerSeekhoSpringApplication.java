package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@ComponentScan(basePackages="com.example.*")
@EntityScan(basePackages="com.example.*")
@EnableJpaRepositories(basePackages="com.example.*")
@SpringBootApplication
@EnableWebMvc
public class ComputerSeekhoSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(ComputerSeekhoSpringApplication.class, args);
		
//	    public void addCorsMappings(CorsRegistry registry) {
//	        registry.addMapping("/api/**")
//	                .allowedOrigins("http://localhost:3000") // Replace with your frontend origin
//	                .allowedMethods("GET", "POST", "PUT", "DELETE")
//	                .allowedHeaders("*")
//	                .allowCredentials(true);
//	    
	}
		
	}
