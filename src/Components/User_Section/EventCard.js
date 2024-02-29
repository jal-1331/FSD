// EventCard.js

import React from 'react';

const EventCard = ({
  eventId,
  eventName,
  eventDescription,
  date,
  startTime,
  endTime,
  location,
  organizerName,
  organizerContact,
  registrationDeadline,
  socialMediaLinks,
  onDelete
}) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '30px',
    margin: '10px',
    width: 'max-content',
    backgroundColor: '#f9f9f9',  // Updated background color
    color: '#333',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',  // Added box shadow for depth
  };

  const headerStyle = {
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const h2Style = {
    margin: '0',
    fontSize: '20px',
    color: '#0066cc',  // Updated header color
  };

  const eventIdStyle = {
    fontSize: '12px',
    color: '#777',
  };

  const descriptionStyle = {
    fontSize: '14px',
    margin: '0 0 10px',
  };

  const listItemStyle = {
    fontSize: '12px',
    marginBottom: '5px',
    color: '#555',  // Updated list item color
  };

  const strongStyle = {
    color: '#333',
  };

  const handleDelete = () => {
    // Call the onDelete prop with the eventId when the delete button is clicked
    onDelete(eventId);
  };

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <h2 style={h2Style}>{eventName}</h2>
        <p style={eventIdStyle}>ID: {eventId}</p>
        <button onClick={handleDelete}   style={{
          backgroundColor: '#D04848',
          border: 'none',
          color: 'white',
          padding: '10px 20px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          margin: '10px',
          cursor: 'pointer',
          marginTop:'30px',
          borderRadius:'7px'
        }}>Delete</button>
      </div>
      <p style={descriptionStyle}>{eventDescription}</p>
      <ul style={{ padding: '0', listStyleType: 'none',width:'300px' }}>
        <li style={listItemStyle}><strong style={strongStyle}>Date:</strong> {date}</li>
        <li style={listItemStyle}><strong style={strongStyle}>Time:</strong> {startTime} - {endTime}</li>
        <li style={listItemStyle}><strong style={strongStyle}>Location:</strong> {location}</li>
        <li style={listItemStyle}><strong style={strongStyle}>Organizer:</strong> {organizerName}</li>
        <li style={listItemStyle}><strong style={strongStyle}>Contact:</strong> {organizerContact}</li>
        <li style={listItemStyle}><strong style={strongStyle}>Deadline:</strong> {registrationDeadline}</li>
        <li style={listItemStyle}><strong style={strongStyle}>Social Media:</strong> {socialMediaLinks}</li>
      </ul>
    </div>
  );
};

export default EventCard;
