import React, { useState } from 'react';
import './EventCreation.css'



const EventCreationForm = () => {
  const [eventData, setEventData] = useState({
    eventName: '',
    eventDescription: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    organizerName: '',
    organizerContact: '',
    registrationDeadline: '',
    socialMediaLinks: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the submission of event data (e.g., send to a server).
    console.log('Event data submitted:', eventData);
  };

  return (
    <div className="event-form-container">

      <div className="header-text">
      <h1>Create Event</h1>
      </div>
   

      <div className="form-row main-home-container">



     <div className="form-row form-left-side">
      <form className="event-form " onSubmit={handleSubmit}>
        <div className="form-column">
          <div className="form-row">
            <input
              type="text"
              name="eventName"
              value={eventData.eventName}
              onChange={handleChange}
              placeholder="Event Name"
            />
          </div>
          <div className="form-column">
            <div className="form-row">
              <input
                type="date"
                name="date"
                value={eventData.date}
                onChange={handleChange}
                placeholder="Date"
              />
              <input
                type="date"
                name="registrationDeadline"
                value={eventData.registrationDeadline}
                onChange={handleChange}
                placeholder="Registration Deadline"
              />
            </div>
            <div className="form-column">
              <div className="form-row">
                <input
                  type="time"
                  name="startTime"
                  value={eventData.startTime}
                  onChange={handleChange}
                  placeholder="Start Time"
                />
                <input
                  type="time"
                  name="endTime"
                  value={eventData.endTime}
                  onChange={handleChange}
                  placeholder="End Time"
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <textarea
              name="eventDescription"
              value={eventData.eventDescription}
              onChange={handleChange}
              placeholder="Event Description"
            ></textarea>
          </div>
          <div className="form-row">
            <input
              type="text"
              name="location"
              value={eventData.location}
              onChange={handleChange}
              placeholder="Location"
            />
          </div>
          <div className="form-row">
            <div className="form-column">
              <input
                type="text"
                name="organizerName"
                value={eventData.organizerName}
                onChange={handleChange}
                placeholder="Organizer Name"
              />
            </div>
            <div className="form-column">
              <input
                type="text"
                name="organizerContact"
                value={eventData.organizerContact}
                onChange={handleChange}
                placeholder="Organizer Contact"
              />
            </div>
          </div>
          <div className="form-row">
            <input
              type="text"
              name="socialMediaLinks"
              value={eventData.socialMediaLinks}
              onChange={handleChange}
              placeholder="Social Media Links"
            />
          </div>
        </div>
        <div className="form-row">
          <button type="submit">Create Event</button>
        </div>
      </form>
    </div>



   <div className="form-row data-right-side">
      
            <div>
                <h3>Existing Events Are Here</h3>
            </div>

            <div className="event-list">
      <div className="event-list-item">
        <div>Hackathon 1</div>
      </div>
      <div className="event-list-item">
        <div>Hackathon 2</div>
      </div>
      <div className="event-list-item">
        <div>Hackathon 3</div>
      </div>
      <div className="event-list-item">
        <div>Hackathon 4</div>
      </div>
      <div className="event-list-item">
        <div>Hackathon 5</div>
      </div>
      <div className="event-list-item">
        <div>Hackathon 6</div>
      </div>
    </div>

            <div className="form-column  right-bottom-container">
                <div>
                <h4>cant find the answers you need? Get in touch!</h4>
                </div>

                <div>
                <button type="submit">Create Event</button>
                </div>
          </div>
   </div>

    </div>
    </div>
    
  );
};

export default EventCreationForm;