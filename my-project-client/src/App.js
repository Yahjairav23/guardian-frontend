import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js'
import UnhousedContainer from './Container/UnhousedContainer.js'
import EventsContainer from './Container/EventsContainer.js'
import GroupsContainer from './Container/GroupsContainer.js'
import ProfilesContainer from './Container/ProfilesContainer.js'

const USERS = 'http://localhost:3000/users'

class App extends Component{

    constructor(){
      super()
      this.state={
        users : []
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
    }


  render(){
    return (
      <div>

      <Navbar />
      <UnhousedContainer />
      <EventsContainer />
      <GroupsContainer />
      <ProfilesContainer users={this.state.users}/>

      </div>
    )
  }
}

export default App;
