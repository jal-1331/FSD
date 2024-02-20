import React, { useState, useEffect } from 'react';
import './EventDetails.css'
import Head from '../Heading/Head';
// EventCard component for displaying an event in a card format
const EventCard = ({ event }) => {
  return (
     
    <div className="event-card">
    <div className="description-block">
      <h2>{event.eventName}</h2>
      <p>{event.eventDescription}</p>
    </div>
    <div className="info-block">
      <div>
        <strong>Date:</strong> {event.date}
      </div>
      <div>
        <strong>Time:</strong> {event.startTime} - {event.endTime}
      </div>
      <div>
        <strong>Location:</strong> {event.location}
      </div>
      <div>
        <strong>Organizer:</strong> {event.organizerName}
      </div>
      <div>
        <strong>Contact:</strong> {event.organizerContact}
      </div>
      <div>
        <strong>Registration Deadline:</strong> {event.registrationDeadline}
      </div>
      <div>
        <strong>Social Media Links:</strong> {event.socialMediaLinks}
      </div>
    </div>
  </div>
  );
};

// EventDetails component that fetches data and displays it using multiple EventCards
const EventDetails = () => {
  const [eventData, setEventData] = useState([
    {
      eventName: 'Default Event 1',
      eventDescription: 'Default Description 1',
      date: '2024-01-01',
      startTime: '12:00 PM',
      endTime: '1:00 PM',
      location: 'Default Location 1',
      organizerName: 'Default Organizer 1',
      organizerContact: 'Default Contact 1',
      registrationDeadline: '2023-12-31',
      socialMediaLinks: 'https://example.com/default-event-1',
    },
    {
      eventName: 'Default Event 2',
      eventDescription: 'Default Description 2',
      date: '2024-02-01',
      startTime: '2:00 PM',
      endTime: '3:00 PM',
      location: 'Default Location 2',
      organizerName: 'Default Organizer 2',
      organizerContact: 'Default Contact 2',
      registrationDeadline: '2023-12-31',
      socialMediaLinks: 'https://example.com/default-event-2',
    },
    {
        eventName: 'Default Event 1',
        eventDescription: 'Default Description 1',
        date: '2024-01-01',
        startTime: '12:00 PM',
        endTime: '1:00 PM',
        location: 'Default Location 1',
        organizerName: 'Default Organizer 1',
        organizerContact: 'Default Contact 1',
        registrationDeadline: '2023-12-31',
        socialMediaLinks: 'https://example.com/default-event-1',
      }
    // Add more default events as needed
  ]);

  // Assuming a fictional function to fetch event data from a database
  const fetchEventDataFromDatabase = async () => {
    try {
      // Perform the actual fetch operation here (e.g., using fetch or Axios)
      // Replace this with your database fetch logic
      const response = await fetch('/api/getEventData');
      const data = await response.json();

      // Assuming the data is an array of events
      setEventData(data);
    } catch (error) {
      console.error('Error fetching event data:', error.message);
    }
  };

  useEffect(() => {
    // Fetch event data when the component mounts
    fetchEventDataFromDatabase();
  }, []);

  return (
    <div className='full' >
        <Head/>
      <h1>See your Desire Activity And Dive In It With Hobbies</h1>
      {eventData.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
};

export default EventDetails;
