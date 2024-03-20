import React, { useState, useEffect } from 'react';
import './EventDetails.css'
import Head from '../Head/Head';

import EventCard from '../EventCard/EventCard'
import { connect } from 'react-redux';
import ContactUs from '../ContactUs/ContactUs';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user,
  };
};
// EventCard component for displaying an event in a card format



// EventDetails component that fetches data and displays it using multiple EventCards
const EventDetails = ({user}) => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);




  const fetchEventDataFromDatabase = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/getEventData');
      const data = await response.json();
      setEventData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const  giveDataOfRemindersToDataBase= async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/setReminders?userEmail=${user.email}`,selectedItems);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleItemClick = (event, isSelected) => {
    if (isSelected) {
      setSelectedItems((prevItems) => [...prevItems, event]);
      console.log(selectedItems); 
    } else {
      setSelectedItems((prevItems) => prevItems.filter((item) => item !== event));
    }
  };

 

  useEffect(() => {
    fetchEventDataFromDatabase();
  }, []);


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='full'>
    <Head />

    <div style={{display:"flex",flexDirection:'row',alignItems:'center'}}>
    </div>

    <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '8px', marginTop: '10px', fontSize: '2rem', color: 'white' }}></h1>

  <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-end',height:'20px',marginBottom:'50px'}}>
  
</div>

    {eventData?.map((event, index) => (
      <EventCard key={index} event={event} onItemClick={handleItemClick} isSelected={selectedItems.includes(event)} />
    ))} 
    


  </div>
  );
};

export default connect(mapStateToProps)(EventDetails);
