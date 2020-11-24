import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Countries from './Component/Countries';
import CountryDetails from './Component/CountryDetails';
import CheckWeather from './Component/CheckWeather';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Countries}/>
        <Route path='/CountryDetails' component={CountryDetails}/>
        <Route path='/CheckWeather' component={CheckWeather}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
