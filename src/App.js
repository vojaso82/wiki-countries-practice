import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import countries from './countries.json';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <div class="container">
     <div class="row">
     <CountriesList listofCountries={ countries } />
      </div>
      </div>

     
    </div>
  );
}

export default App;
