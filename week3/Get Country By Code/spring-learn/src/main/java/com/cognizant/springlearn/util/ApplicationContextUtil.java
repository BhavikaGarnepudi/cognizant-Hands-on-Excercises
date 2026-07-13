package com.cognizant.springlearn.util;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class ApplicationContextUtil {

    private static ApplicationContext context;

    static {
        context = new ClassPathXmlApplicationContext("country.xml");
    }

    public static ApplicationContext getApplicationContext() {
        return context;
    }
}
