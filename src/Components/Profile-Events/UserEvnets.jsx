import React, { useState } from 'react';
import EventCard from '../EventCard/EventCard';
import './UserEvnets.css';

export const UserEvents = () => {
  const [userEventData, setUserEventData] = useState([
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
      eventName: 'Default Event 3',
      eventDescription: 'Default Description 3',
      date: '2024-03-01',
      startTime: '4:00 PM',
      endTime: '5:00 PM',
      location: 'Default Location 3',
      organizerName: 'Default Organizer 3',
      organizerContact: 'Default Contact 3',
      registrationDeadline: '2023-12-31',
      socialMediaLinks: 'https://example.com/default-event-3',
    },
    {
        eventName: 'Default Event 3',
        eventDescription: 'Default Description 3',
        date: '2024-03-01',
        startTime: '4:00 PM',
        endTime: '5:00 PM',
        location: 'Default Location 3',
        organizerName: 'Default Organizer 3',
        organizerContact: 'Default Contact 3',
        registrationDeadline: '2023-12-31',
        socialMediaLinks: 'https://example.com/default-event-3',
      },
    // Add more default events as needed
  ]);

  return (
    <div>
      <h2>User Events</h2>
  
      <div className='UserEventsMain'>
      {userEventData.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
      </div>
    </div>
  );
};
