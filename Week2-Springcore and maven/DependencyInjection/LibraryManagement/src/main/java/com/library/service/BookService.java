package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    // Setter method for Dependency Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayService() {
    System.out.println("Book Service is working...");

    if (bookRepository != null) {
        System.out.println("Dependency Injection Successful!");
    } else {
        System.out.println("Dependency Injection Failed!");
    }

    bookRepository.displayRepository();
}
}