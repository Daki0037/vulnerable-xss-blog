package com.vulnerable.xssposure;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.vulnerable.xssposure.repository")
public class XsSposureApplication {

	public static void main(String[] args) {
		SpringApplication.run(XsSposureApplication.class, args);
	}

}
