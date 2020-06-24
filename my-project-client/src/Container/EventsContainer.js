import React, {Component} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import Event from '../Component/Event.js'
import { Modal, Grid, List } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
// const USEREVENTS = 'http://localhost:3000/user_events'
// import { Button, Popup } from 'semantic-ui-react'

class EventsContainer extends Component{
    
    constructor(){
        super()
        this.state={
            event: null,
            showEvent: false, 
            // userEvents: []
        }
    } 

    // componentDidMount(){
    
    //     this.setState({
    //         userEvents: this.props.user.events
    //     })
    // }

 

    handleClose = () => {
        this.closeModal()
    }

    handleClick=(e)=>{
        
        this.setState({
            event : e.event,
            showEvent: !this.state.showEvent
        })
        // this.props.updateUserEvents(this.state.userEvents
    
    }
    
//for Modal
    handleCloseButton=(event)=>{
       event.preventDefault();
        this.closeModal()
    }

    closeModal = () => {
        this.setState({
            showEvent : false
        })
      }
//

    render(){
        
        const eventsArr = this.props.events.map(event => {
            return {title: event.title, date: event.event_date, description: event.description, address: event.street_address, image: event.image, city: event.city, state: event.state, group_id: event.group_id, event_id:event.id}
        }) 
        
        return(
            <div>
                <Grid>
                <Grid.Column width={10}>
                    <h1>Calendar of Events</h1>
                    <FullCalendar eventClick={this.handleClick} defaultView="dayGridMonth" plugins={[ dayGridPlugin, interactionPlugin ]}  events={
                        // make the event dates dynamic
                    eventsArr  
                    }/>

                    
                    {this.state.event ?    
                    <Modal open={this.state.showEvent} centered={true}>  
                    <Event event={this.state.event} groups={this.props.groups} handleCloseButton={this.handleCloseButton} handleRSVP={this.props.handleRSVP} handleClose={this.handleClose}/>
                    </Modal> 
                    :
                    false
                    }
                </Grid.Column>

                <Grid.Column width={4}>
                        <h1>My Upcoming Events</h1>
                        {this.props.userEvents.length > 0 ?
                            <List>
                            {this.props.userEvents.map(event => {
                                return <List.Item as={Link} to={`/events/${event.id}`}>{event.title}</List.Item>
                            })
                            }
                            </List>
                    :
                    <p>You Do Not Have Any Upcoming Events.</p>
                    }
                </Grid.Column>
            </Grid>
            </div>
        ) 
    }
}

export default EventsContainer