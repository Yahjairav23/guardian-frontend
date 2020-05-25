import React, {Component} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import Event from '../Component/Event.js'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
// import { Button, Popup } from 'semantic-ui-react'

class EventsContainer extends Component{
    
    constructor(){
        super()
        this.state={
            event: null,
            showEvent: false, 
        }
    } 

    handleClick=(e)=>{
        
        this.setState({
            // showEvent : !this.state.showEvent,
            event : e.event,
            showEvent: !this.state.showEvent
        })
    }
    handleCloseButton=(event)=>{
       event.preventDefault();
        this.closeModal()
    }
    closeModal = () => {
        this.setState({
            showEvent : false
        })
      }


    render(){
       
        const eventsArr = this.props.events.map(event => {
            return {title: event.title, date: event.event_date, description: event.description, address: event.street_address, image: event.image, city: event.city, state: event.state, group_id: event.group_id}
        }) 
        return(
            <div>
                <h1>Calendar of Events</h1>
                <FullCalendar eventClick={this.handleClick} defaultView="dayGridMonth" plugins={[ dayGridPlugin, interactionPlugin ]}  events={
                    // make the event dates dynamic
                  eventsArr  
                }/>

                
                {this.state.event ?    
                <Modal open={this.state.showEvent} centered={true}>  
                <Event event={this.state.event} groups={this.props.groups} handleCloseButton={this.handleCloseButton}/>
                </Modal> 
                :
                false
                }

                {/* <Modal trigger={<Button>Show Modal</Button>}> */}
                    {/* <Modal.Header>Select a Photo</Modal.Header>
                    <Modal.Content image>
                    <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
                    <Modal.Description>
                        <Header>Default Profile Image</Header>
                        <p>
                        We've found the following gravatar image associated with your e-mail
                        address.
                        </p>
                        <p>Is it okay to use this photo?</p>
                    </Modal.Description>
                    </Modal.Content> */}
                {/* </Modal> */}

            </div>
        ) 
    }
}

export default EventsContainer