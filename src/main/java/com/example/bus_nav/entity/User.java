package com.example.bus_nav.entity;

import jakarta.persistence.*;

@Entity
public class User {



    @Column(nullable=false)
    private String username;


    @Id
    @Column(nullable=false)
    private String email;


    @Column(nullable=false)
    private String password;

    public User() {
    }

    public User( String email, String username, String password) {

        this.email = email;
        this.username = username;
        this.password = password;

    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return super.toString();
    }
}