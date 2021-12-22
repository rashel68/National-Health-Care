import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import Services from './components/Services/Services';
import Doctors from './components/Doctors/Doctors';
import NotFound from './components/NotFound/NotFound';
import BookingSerial from './components/BookingSerial/BookingSerial';
import Login from './components/Login/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/bookingserial/:serialId">
            <BookingSerial></BookingSerial>
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
