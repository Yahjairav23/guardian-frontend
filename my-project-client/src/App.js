import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js'
import LandingPage from './LandingPage.js'
import UnhousedContainer from './Container/UnhousedContainer.js'
import EventsContainer from './Container/EventsContainer.js'
import GroupsContainer from './Container/GroupsContainer.js'
import ProfilesContainer from './Container/ProfilesContainer.js'
import SignUp from './Component/SignUp.js'
import {Route, Switch} from 'react-router-dom';
// import {Router} from 'react-router-dom'

const USERS = 'http://localhost:3000/users'
const EVENTS = 'http://localhost:3000/events'
const GROUPS = 'http://localhost:3000/groups'

class App extends Component{

    constructor(){
      super()
      this.state={
        users : [],
        events: [],
        groups : []
      }
    }

    componentDidMount(){
      fetch(USERS)
      .then(resp => resp.json())
      .then(usersArray => {
        this.setState({
          users : usersArray
        })
      })

      fetch(EVENTS)
      .then(resp => resp.json())
      .then(eventsArr => {
        this.setState({
          events: eventsArr
        })
      })

      fetch(GROUPS)
      .then(resp => resp.json())
      .then(groupsArr => {
        this.setState({
          groups: groupsArr
        })
      })
    }


  render(){
    return (
     

      <div>
       <Navbar />
        <Switch>
          <Route exact path='/' render={()=> <LandingPage />} />
          <Route exact path='/unhoused' render={ () =>  <UnhousedContainer/>} />
          <Route exact path='/events' render={ () =>  <EventsContainer events={this.state.events} groups={this.state.groups}/>} />
          <Route exact path='/groups' render={ () =>  <GroupsContainer/>} />
          <Route exact path='/profiles' render={ () =>  <ProfilesContainer users={this.state.users}/>} />
          <Route exact path='/sign-up' render={ () =>  <SignUp users={this.state.users}/>} />

          <Route render={()=> <div>404 Not Found</div>} />

        </Switch>
      </div>
    )
  }
}

export default App;
