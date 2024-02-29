package com.example.bus_nav.Service;

import com.example.bus_nav.entity.EventDetails;
import org.springframework.stereotype.Service;

import java.util.List;



public interface EventDetailsService {
    EventDetails saveEventDetails(EventDetails event);
    List<EventDetails> getAllEvents();

    List<EventDetails> getEventsByEmail(String email) ;
    public void deleteById(Long eventId);
    public boolean existsById(Long eventId);

}
