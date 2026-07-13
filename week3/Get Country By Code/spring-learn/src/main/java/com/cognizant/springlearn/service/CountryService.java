package com.cognizant.springlearn.service;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.util.ApplicationContextUtil;

@Service
public class CountryService {

    public Country getCountry(String code) {

        ApplicationContext context = ApplicationContextUtil.getApplicationContext();

        @SuppressWarnings("unchecked")
        List<Country> countryList = (List<Country>) context.getBean("countryList");

        for (Country country : countryList) {
            if (country.getCode().equalsIgnoreCase(code)) {
                return country;
            }
        }

        return null;
    }
}