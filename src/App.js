import './App.css';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Event from './Components/Event/Event';
import Profile from './Components/Profile/Profile';
import  {Provider} from 'react-redux';
import store from './Components/Redux_management/store';

import EventDetails from './Components/EventDetails/EventDetails';


function App() {
    return (
        <>
        <Provider store={store}>
        <Router>
        <Routes>
        <Route path="/" element={<Login/>} />  
        <Route path="/login" element={<Login/>} />
        <Route path="/EventDetails" element={<EventDetails/>}/>
        <Route path="/Event" element={<Event/>}/>
        <Route path="/Profile" element={<Profile/>}/>

        </Routes>
      </Router> 
      </Provider> 
     
      </>    
    
    );
}

export default App;
