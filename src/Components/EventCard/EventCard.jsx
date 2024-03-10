import React,{useState}from 'react';




const EventCard = ({ event, onItemClick}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleItemClick = () => {
    setIsSelected(!isSelected);
    onItemClick(event, !isSelected);
  };



  return (
    <div className={`event-card ${isSelected ? 'selected' : ''}`} onClick={handleItemClick}>
      <div className="description-block">
        <div className='UpperBlock'> 
        <h2>{event.eventName}</h2>
       
        <div className='date'>
          <strong>Date:</strong> {event.date}
        </div>
        <div>
          <strong>Time:</strong> {event.startTime} - {event.endTime}
        </div>
        <div>
          <strong>Location:</strong> {event.location}
        </div>
        
        <div>
          <strong>Registration Deadline:</strong> {event.registrationDeadline}
        </div>
       
        </div>
        
      
      </div>
      <div className="info-block">
      <p>{event.eventDescription}</p>
      
      <div className='maker'>
      <div className='organizer'>
          <div>
          <strong>Organizer:</strong> {event.organizerName}
          </div>
        
          <div>
          <strong>Contact:</strong> {event.organizerContact}
          </div>
        </div>
          <strong>Social Media Links:</strong> {event.socialMediaLinks}
        </div>
        
      </div>
    </div>
  );
};

export default EventCard;
