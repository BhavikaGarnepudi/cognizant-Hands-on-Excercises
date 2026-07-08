package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {

    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {

        SpringApplication.run(SpringLearnApplication.class, args);

        LOGGER.info("========== Spring Core - Load Country from XML ==========");

        displayCountry();

        LOGGER.info("========== Hands-on 4 Executed Successfully ==========");
    }

    public static void displayCountry() {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        Country country = context.getBean("country", Country.class);

        LOGGER.debug("Country : {}", country);

        LOGGER.info("--------------------------------");
        LOGGER.info("Country Code : {}", country.getCode());
        LOGGER.info("Country Name : {}", country.getName());
        LOGGER.info("--------------------------------");
    }
}