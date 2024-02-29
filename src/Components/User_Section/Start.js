// YourComponent.js

import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user,
  };
};



const UserEvents = ({ user }) => {
  // Dummy data
  const [eventData, setEventData] = useState([]);
  const [updatedData,setUpdateEventData]=useState(false);

  const handleDelete = async (eventId) => {
    // Filter out the event with the specified eventId
    const updatedEvents = eventData.filter((event) => event.eventId !== eventId);
    // Update the state with the new events array
  
    try {
      // Construct the URL with the email parameter
      const response = await fetch(`http://localhost:8080/user/deleteById?eventId=${eventId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }); // <-- Missing closing parenthesis here
      const data = await response.json();
  
      // Log the data structure
      console.log('Deleted The Given EventDetails:', data);
  
      // Assuming the data is an array of events
      setEventData(data); // Update this line based on the actual data structure
    } catch (error) {
      console.error('Error fetching event data:', error.message);
    }
  
    fetchEventDataFromDatabase();
  };
  

  const fetchEventDataFromDatabase = async () => {
    try {
      // Construct the URL with the email parameter
      const response = await fetch(`http://localhost:8080/api/getEvents?email=${user.email}`);
      const data = await response.json();

      // Log the data structure
      console.log('Fetched data:', data);

      // Assuming the data is an array of events
      setEventData(data); // Update this line based on the actual data structure
    } catch (error) {
      console.error('Error fetching event data:', error.message);
    }
  };

  useEffect(() => {
    // Fetch event data when the component mounts
    fetchEventDataFromDatabase();
  }, []); // Add user.email as a dependency to useEffect

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column' }}>
    {eventData && eventData.map((event) => (
      <EventCard key={event.eventId} {...event} onDelete={handleDelete} />
    ))}
  </div>
  );
};

export default connect(mapStateToProps)(UserEvents);