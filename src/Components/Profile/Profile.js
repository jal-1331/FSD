import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './Profile.css'; // Import your CSS file
import UserEvents from '../User_Section/Start';
import { connect } from 'react-redux';
// import userLogoo from './userLogo.png';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user,
  };
};




const Profile = ({user}) => {
  const [userOption, setUserOption] = useState(null);
  const navigate = useNavigate();
  const [userLogo, setUserLogo] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [userdata, setUserData] = useState({
    // your initial state properties
    username: '',
    email: '',
    password: '',
    // ... other properties
  });


  const handleSettingChange = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userdata,
      [name]: value,
    });
  };


  const fetchUserByEmail=async()=>{
    try {
      const response = await fetch(`http://localhost:8080/user/getUserByEmail?userEmail=${user.email}`);
      const data = await response.json();
      console.log("by emal we are getting whole user object")
      console.log(data);

      setUserData({
        ...userdata,
        username:data.username,
        email:data.email,
        password:data.password
      });

    } catch (error) {
      console.log(error.message);
    } finally {
      console.log("over");
    }
  };

  
  useEffect(() => {
    fetchUserByEmail();
  }, []);


  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Convert the selected file to a data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSettingsClick = () => {
    document.body.classList.add('popup-open');
    setShowSettings(true);
  };

  const handleCloseSettings = () => {
    document.body.classList.remove('popup-open');
    setShowSettings(false);
  };

  const handleSaveSettings = async () => {
    const response = await fetch(`http://localhost:8080/user/changeUserByEmail?userEmail=${user.email}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(userdata),
});

// Check the response status
if (response.ok) {
  const data = await response.json();
  console.log("User updated successfully:", data);
} else {
  console.error("Failed to update user:", response.statusText);
}

    handleCloseSettings();

  };

  return (
    <div className="outer-container">
      <div className="inner-container">
        <div className="UserProfile">
          <div className="UserProfile-up">
          <div className="user-container">
          <label htmlFor="fileInput">
          <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
          id="fileInput"
        />
            <img
              src={userLogo || 1}
              alt={userdata.username}
              className="user-image"
              style={{ backgroundRepeat: 'no-repeat', color: 'white', cursor: 'pointer' }}
            />
          </label>
          <p className="user-name">{userdata.username}</p>
    
          {/* User Settings Popup */}
          {showSettings && (
            <div className="settings-popup">
              <span className="close" onClick={handleCloseSettings}>
                &times;
              </span>
              <h2>Settings</h2>
              <label>
                Username:
                <input type="text"  name="username" value={userdata.username} onChange={(e) => handleSettingChange(e)}/>
              </label>
              <label>
                Email:
                <input type="email" name="email" value={userdata.email} onChange={(e) => handleSettingChange(e.target.value)}  disabled/>
              </label>
              <label>
                Password:
                <input type="password" name="password" value={userdata.password} onChange={(e) =>handleSettingChange(e)} />
              </label>
              <button onClick={handleSaveSettings}>Save</button>
            </div>
          )}
        </div>
          </div>
          <div className="UserProfile-down">
       

             {/* 
        This is a multi-line comment in JSX.
        You can write multiple lines here.

             <button
              type="button"
              className={`btn btn-lg btn-light ${
                userOption === 'Reminders' ? 'active' : ''
              }`}
              onClick={() => setUserOption('Reminders')}
            >
              Reminders
            </button>

      */}
      <button
      type="button"
      className={`btn btn-lg btn-light ${
        userOption === 'userSetting' ? 'active' : ''
      }`}
      onClick={handleSettingsClick}
    >
        Settings
    </button>

            <button
              type="button"
              className={`btn btn-lg btn-light ${
                userOption === 'Your-Events' ? 'active' : ''
              }`}
              onClick={() => setUserOption('Your-Events')}
            >
              Your Creates
            </button>
            <button
              type="button"
              className="btn btn-lg btn-light"
              onClick={() => {
                navigate('/Event');
              }}
            >
              Create Activity
            </button>
          </div>
        </div>

        <div className="mainProfile-right">
          {userOption === 'Your-Events' ? <UserEvents /> : null}
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Profile);