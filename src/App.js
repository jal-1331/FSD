import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/LoginForm';
import Head from './Heading/Head';
import EventDetails from './Home/EventDetails';
import EventCreationForm from './Home/EventCreationForm';


function App() {
  return (
    <div className="App">
      {/* <Head /> */}
      {/* <EventCreationForm/> */}
      <EventDetails />
      {/* <LoginForm/> */}
    </div>
  );
}

export default App;
