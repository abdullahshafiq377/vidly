import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";
import Navbar from "./components/common/navbar";
import { Redirect, Route, Switch } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from './components/Rentals';
import NotFound from './components/notFound';
import MovieForm from "./components/movieForm";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieForm}/>
            <Route path="/movies" component={Movies}/>
            <Route path="/customers" component={Customers}/>
            <Route path="/rentals" component={Rentals}/>
            <Route path="/not-found" component={NotFound}/>
            <Redirect from="/" exact to="/movies"/>
            <Redirect to="/not-found"/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
