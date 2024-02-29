import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import {connect} from 'react-redux';
import {setUser} from '../Redux_management/actions';

import axios from "axios";
// import './fontawesome.min.css';


const mapStateToProps = (state) => ({
  user: state.user,  // Assuming 'user' is a top-level property in your state
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});


const LoginForm = ({user,setUser}) => {
 const [passwordType, setPasswordType] = useState('password');
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [email, setEmail] = useState('');
 const [msgVisible,setMsgVisible]=useState(true);
 const [msgLogin,setMsgLogin]=useState('');
 const [msgSignup,setMsgSignup]=useState('');
 const [errors, setErrors] = useState([]);



  const [showText, setShowText] = useState('SHOW');
  const [color, setColor] = useState('#222');
  const [isLogin, setIsLogin] = useState(true); // Added state for conditional rendering


  const navigate=useNavigate();
  
  useEffect(() => {
    return () => {
      setUsername('');
      setPassword('');
      setEmail('');
    };
  },[]);


  const handlePasswordVisibility = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      setShowText('HIDE');
      setColor('#3498db');
    } else {
      setPasswordType('password');
      setShowText('SHOW');
      setColor('#222');
    }
  };

  const toggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
    setMsgVisible(true);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const minEmailLength = 5; // adjust this value based on your minimum length requirement
    return emailRegex.test(email) && email.length >= minEmailLength;
};


const isValidPassword = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

const handleAuthentication = async (e) => {
  e.preventDefault();

  try {
    if (isLogin) {
      if (!email || !password) {
        console.error("Please enter both email and password");
        return;
      }

      const response = await axios.post('http://localhost:8080/user/login', {
        email,
        password
      });

      if (response.data === 'Login successful!') {
        setMsgLogin('Login successful!');

        setUser({
          ...user,
          email: email,
          username: username,
          password: password
        });

        setEmail('');
        navigate("/EventDetails");
      } else {
        setMsgLogin('Invalid email or password');
      }

      console.log(response.data);
      setUsername('');
      setPassword('');
      setEmail('');
    } else {
      if (!username || !email || !password) {
        console.error("Please enter all fields");
        return;
      }

      const validationErrors = [];

      if (!isValidEmail(email)) {
        validationErrors.push('Invalid email format. Please follow the correct email format: Must contain @ symbol, a valid domain, and have a minimum length.');
      }

      if (!isValidPassword(password)) {
        validationErrors.push('Invalid password. Please follow the correct password format: Must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one digit, and one special character.');
      }

      setErrors(validationErrors);

      if (validationErrors.length === 0) {
        const response = await axios.post('http://localhost:8080/user/signup', {
          username,
          email,
          password
        });

        if (response.data === 'Sign up Successful') {
          setMsgLogin('Sign up Successful');

          setUser({
            ...user,
            email: email,
            username: username,
            password: password
          });

          setEmail('');
        } else {
          setMsgLogin('Email is Already Registered!');
        }

        console.log(response.data);
        setMsgVisible(false);
        setIsLogin(false);
        setPassword('');
        setEmail('');
      }
    }
  } catch (error) {
    console.error(error);
  }
};
  

  return (


    <div className="bg-img">

      <div className="content">
        <header>{isLogin ? 'Login Form' : 'Signup Form'}</header>
  
        {errors.length > 0 && (
          <div style={{ marginTop: '5px' }}>
              {errors.map((error, index) => (
                  <p key={index} style={{ color: 'white' ,marginTop:'5px'}}>{error}</p>
              ))}
          </div>
      )}
        
      {!msgVisible && (
        <div className="message-container">
          {/* Display user information here */}
          <p>Sign-Up Succesfull Do Login</p>
        </div>
      )}

        <form onSubmit={handleAuthentication}>

        {isLogin ? null : ( // Conditionally render for signup
        <div className="field username">
          <span className="fa fa-user"></span>
          <input type="text" required placeholder="Username"                 
           value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      )}

          <div className="field">
            <span className="fa fa-user"></span>
            <input type="text" required placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>


          <div className="field space">
            <span className="fa fa-lock"></span>
            <input
              type={passwordType}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pass-key"
              required
              placeholder="Password"
            />


            <span className="show" style={{ color }} onClick={handlePasswordVisibility}>
              {showText}
            </span>
          </div>
          <div className="pass">
            <a href="#">Forgot Password?</a>
          </div>
          <div className="field">
            <input type="submit" value={isLogin ? 'LOGIN' : 'SIGNUP'} />
          </div>
        </form>

        <div className="signup">
          {isLogin ? (
            <>
              Don't have an account?
              <a href="#" onClick={toggleForm}>
                Signup Now
              </a>
            </>
          ) : (
            <>
              Already have an account?
              <a href="#" onClick={toggleForm}>
                Login Now
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
