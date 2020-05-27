import React, {Component} from 'react';
import './App.css';
import Navbar from './Navbar.js'
import LandingPage from './LandingPage.js'
import UnhousedContainer from './Container/UnhousedContainer.js'
import EventsContainer from './Container/EventsContainer.js'
import GroupsContainer from './Container/GroupsContainer.js'
import ProfilesContainer from './Container/ProfilesContainer.js'
import Profile from './Component/Profile.js'
import UserProfile from './Component/UserProfile.js'
import SignUp from './Component/SignUp.js'
import Login from './Component/Login.js'
import GroupShow from './Component/GroupShow.js'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import { Message } from 'semantic-ui-react'
// import {Router} from 'react-router-dom'

// const USERS = 'http://localhost:3000/users'
const USERS = 'http://localhost:3000/api/v1/users'
const EVENTS = 'http://localhost:3000/events'
const GROUPS = 'http://localhost:3000/groups'
const USEREVENTS = 'http://localhost:3000/user_events'
const USERGROUPS = 'http://localhost:3000/user_groups'


class App extends Component{

    constructor(){
      super()
      this.state={
        users : [],
        events: [],
        groups : [],
        currentUser: null, //logged in user
        userEvents: [], 
        filteredGroups : [], 
        errorMessage : null
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
      .then(newUser =>{
        if (newUser.error){
          this.setState({errorMessage: newUser.error})
        }else{
          this.setState({
            users: [...this.state.users, newUser],
            currentUser: newUser})
          // return <Redirect to='/profiles/current-user' />
        }
      })
    }

    handleError=()=>{
    return (
    <Message negative>
      <Message.Header>{this.state.errorMessage}</Message.Header>
      <p>Please try again.</p>
      </Message>
    )
    }
    
    handleLogin = (userInfo) => {
      fetch('http://localhost:3000/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // "Accept" : "application.json"
        },
        body: JSON.stringify(userInfo)
      })
      .then(resp => resp.json())
      .then(loggedUser => {
        if (loggedUser.error){
          this.setState({errorMessage: loggedUser.error})
        }else{
          this.setState({
            currentUser: loggedUser,
            userEvents: loggedUser.events
          })
        }
      })
    }

    handleRSVP = (eventId) => {

      let obj = {
        event_id: eventId,
        user_id: this.state.currentUser.id
      }

      fetch(USEREVENTS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
      })
      .then(resp => resp.json())
      .then(userEvent => {
        // console.log(userEvent)
        this.setState({
          userEvent: [...this.state.userEvents, userEvent.event]
        })
        
      })
      
    }


    handleSearch=(e, search)=>{
      if(search.length > 0){

       const groups=this.state.groups.filter(group => group.name.toLowerCase().includes(search.toLowerCase()))
        this.setState({
          filteredGroups: groups
        })

      }
    }

    handleLogout = () => {
      this.setState({currentUser: null})
    }

    updateUserEvents = (events) => {
      this.setState({userEvents: events})
    }

  


  render(){
    return (
     

      <>
       <Navbar currentUser={this.state.currentUser} logout={this.handleLogout} />
        <Switch>
          {/* {this.state.currentUser ? <Redirect to='/profiles/current-user' /> : null } */}
            
          <Route exact path='/profiles/current-user' render={ () => this.state.currentUser ? <UserProfile user={this.state.currentUser} userEvents={this.state.userEvents}/> : <Redirect to="/login"/> }/> 
          <Route exact path='/' render={()=> <LandingPage />} />
          <Route exact path='/unhoused' render={ () =>  <UnhousedContainer/>} />
          <Route exact path='/events' render={ () =>  (this.state.currentUser == null ? <Redirect to="/login"/> : <EventsContainer userEvents={this.state.userEvents} updateUserEvents={this.updateUserEvents} handleRSVP={this.handleRSVP} events={this.state.events} groups={this.state.groups} user={this.state.currentUser} />)} />
          <Route exact path='/groups' render={ () => {
            return this.state.filteredGroups.length ?
             <GroupsContainer groups={this.state.filteredGroups} handleSearch={this.handleSearch} /> :
            <GroupsContainer groups={this.state.groups} handleSearch={this.handleSearch} />
          } }/>
          <Route exact path='/profiles' render={ () =>  <ProfilesContainer users={this.state.users}/>}  />
          <Route exact path='/sign-up' render={ () =>  (this.state.currentUser == null ? <SignUp users={this.state.users} errorMessage={this.state.errorMessage} handleError={this.handleError}  handleSignUp={this.handleSignUp}/> : <Redirect to='/profiles/current-user' /> )} /> 
          <Route exact path='/login' render={ () =>  (this.state.currentUser == null ? <Login users={this.state.users} errorMessage={this.state.errorMessage} handleError={this.handleError} handleLogin={this.handleLogin}/> : <Redirect to='/profiles/current-user' /> )} /> 

         
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

export default withRouter(App);
