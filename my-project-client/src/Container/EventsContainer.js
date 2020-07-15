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

    rsvpShow = () => {
        if(this.props.userEvents.includes(this.state.event)){
            return true
        }else{
            return false
        }
    }
//

    render(){
       
        const eventsArr = this.props.events.filter(event => new Date(event.event_date).getTime() >= new Date().getTime()).map(event => {
            return {title: event.title, date: event.event_date, description: event.description, address: event.street_address, image: event.image, city: event.city, state: event.state, group_id: event.group_id, event_id:event.id}
        }) 
        
        return(
            <>

            <div>
                <Grid textAlign='center' divided padded>
                <Grid.Column width={10}>
                    <h1>Calendar of Events</h1>
                    <FullCalendar eventClick={this.handleClick} defaultView="dayGridMonth" plugins={[ dayGridPlugin, interactionPlugin ]}  events={
                    eventsArr  
                    }/>

                    
                    {this.state.event ? 
                    <Modal open={this.state.showEvent} centered={false}>  
                        <Event rsvpShow={this.rsvpShow} event={this.state.event} groups={this.props.groups} handleCloseButton={this.handleCloseButton} handleRSVP={this.props.handleRSVP} handleClose={this.handleClose}/>
                    </Modal> 
                    :
                    false
                    }
                </Grid.Column>

                    
                <Grid.Column width={4}>
                    {this.props.user ?
                        <div> <h1>My Upcoming Events</h1>
                            <div className='ue-title'></div>
                         
                        

                        {this.props.userEvents.length > 0 ?
                    
                            <div className='upcoming-events'>
                                <List>
                                {this.props.userEvents.filter(event => new Date(event.event_date).getTime() >= new Date().getTime()).map(event => {
                                    const eventDate = new Date(event.event_date)
                                    return(
                                        <List.Content as={Link} to={`/events/${event.id}`} >
                                            <List.Header>{event.title} </List.Header>
                                            <List.Description style={{'padding-bottom': '15px'}}> {eventDate.toDateString()} </List.Description>
                                        </List.Content>
                                    )
                                })
                                }
                                </List>
                            </div>
                    
                           
                    :
                    <p>You Do Not Have Any Upcoming Events.</p>
                    }
                    </div>
                    :
                    null
                    }
                </Grid.Column>
            </Grid>
            </div>
            </>
        ) 
    }
}

export default EventsContainer