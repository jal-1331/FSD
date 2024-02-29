package com.example.bus_nav.Controller;


import com.example.bus_nav.Repository.UserRepository;
import com.example.bus_nav.Service.EventDetailsService;
import com.example.bus_nav.entity.EventDetails;
import com.example.bus_nav.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EventController {


    @Autowired
    private EventDetailsService eventDetailsService;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/api/getEventData")
    public List<EventDetails> getAllEvents() {
        return eventDetailsService.getAllEvents();
    }


    @PostMapping("/api/users/events")
    public ResponseEntity<EventDetails> createEvent(@RequestBody EventDetails eventDetails) {
        EventDetails savedEvent = eventDetailsService.saveEventDetails(eventDetails);
        return new ResponseEntity<>(savedEvent, HttpStatus.CREATED);
    }

    @DeleteMapping("/user/deleteById")
    public ResponseEntity<String> deleteEventById(@RequestParam Long eventId) {
        // Check if the event exists
        if (eventDetailsService.existsById(eventId)) {
            // Event exists, proceed with deletion
            eventDetailsService.deleteById(eventId);
            return ResponseEntity.ok("Deleted the given EventDetails");
        } else {
            // Event not found
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Event with ID " + eventId + " not found");
        }
    }


    @GetMapping("/api/getEvents")
    public List<EventDetails> getEventDetailsByEmail(@RequestParam String email) {
        User user = userRepository.findByEmail(email);

        if (user != null) {
            return eventDetailsService.getEventsByEmail(email);
        }

        return Collections.emptyList();
    }
}
