package com.example.bus_nav.Repository;

import com.example.bus_nav.entity.EventDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EventRepository extends JpaRepository<EventDetails,Long> {


    boolean existsById(Long eventId);

    @Query("SELECT e FROM EventDetails e WHERE e.email = :email")
    List<EventDetails> findEventsByEmail(@Param("email") String email);
}