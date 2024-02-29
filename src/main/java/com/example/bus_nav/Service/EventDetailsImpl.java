package com.example.bus_nav.Service;

import com.example.bus_nav.Repository.EventRepository;
import com.example.bus_nav.Repository.UserRepository;
import com.example.bus_nav.entity.EventDetails;
import com.example.bus_nav.entity.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class EventDetailsImpl implements EventDetailsService{

    @Autowired
    private EventRepository eventRepository;

    @PersistenceContext
    private EntityManager entityManager;


    @Autowired
    private UserRepository userRepository;


    public EventDetails saveEventDetails(EventDetails eventDetails) {
        return eventRepository.save(eventDetails);
    }

    @Override
    public List<EventDetails> getAllEvents() {
        return eventRepository.findAll();
    }

    public List<EventDetails> getEventsByEmail(String email) {
        return eventRepository.findEventsByEmail(email);
    }



    public void deleteById(Long eventId) {
        eventRepository.deleteById(eventId);
    }

    public boolean existsById(Long eventId) {
        return eventRepository.existsById(eventId);
    }
}
