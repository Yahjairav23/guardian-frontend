import React, {Component} from 'react';
import './App.css';
import Navbar from './Navbar.js'
import LandingPage from './LandingPage.js'
import UnhousedContainer from './Container/UnhousedContainer.js'
import EventsContainer from './Container/EventsContainer.js'
import GroupsContainer from './Container/GroupsContainer.js'
import ProfilesContainer from './Container/ProfilesContainer.js'
import Profile from './Component/Profile.js'
import SignUp from './Component/SignUp.js'
import GroupShow from './Component/GroupShow.js'
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
        groups : [], 
        currentUser: {}
      }
    }

    componentDidMount(){
      

      fetch(GROUPS)
      .then(resp => resp.json())
      .then(groupsArr => {this.setState({groups: groupsArr})})
      
      fetch(USERS)
      .then(resp => resp.json())
      .then(usersArray => {this.setState({users: usersArray})})

      fetch(EVENTS)
      .then(resp => resp.json())
      .then(eventsArr => {this.setState({events: eventsArr})})

      

    }

    handleSignUp = (userInfo) => {
      
      fetch(USERS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
      })
      .then(resp => resp.json())
      .then(data =>{
        this.setState({currentUser: data})
        // return <Redirect to='/profiles/current-user' />
      })
    }


  render(){
    return (
     

      <>
       <Navbar />
        <Switch>
          <Route exact path='/' render={()=> <LandingPage />} />
          <Route exact path='/unhoused' render={ () =>  <UnhousedContainer/>} />
          <Route exact path='/events' render={ () =>  <EventsContainer events={this.state.events} groups={this.state.groups}/>} />
          <Route exact path='/groups' render={ () =>  <GroupsContainer groups={this.state.groups}/>} />
          <Route exact path='/profiles' render={ () =>  <ProfilesContainer users={this.state.users}/>} />
          <Route exact path='/sign-up' render={ () =>  <SignUp users={this.state.users} handleSignUp={this.handleSignUp}/>} />
          <Route exact path='/profiles/current-user' render={ () => <Profile users={this.state.currentUser}/> }/>
         
          <Route exact path='/groups/:id' render={ (routerProps) => {
            const id = routerProps.match.params.id 
            const group = this.state.groups.find(group => group.id === parseInt(id))
            const founder = this.state.users.find(user => user.id == group.creator_id)
            return  this.state.groups.length && this.state.users.length ? <GroupShow group={group} events={this.state.events} groups={this.state.groups} founder={founder}/> : null
            } 
          }/>

          <Route render={()=> <div>404 Not Found</div>} />

        </Switch>
      </>
    )
  }
}

export default App;
