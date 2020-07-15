import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Image, Grid } from 'semantic-ui-react'

const Event=(props)=>{

    const eventDate = new Date(props.event.event_date)

    const group = props.groups.find(group => {
      
    //   return  group.id === props.event._def.extendedProps.group_id
      return  group.id === props.event.group_id

    })
    return(
        
        
        <div className='event-page'>
                <Button as={Link} to='/events'>
                    {'<'} Back To Events
                </Button>
       
       <div className='event-show'>
            <Grid>
                <Grid.Column width='8'>
                    <Image fluid src={props.event.image} />
                </Grid.Column>
                <Grid.Column width='8' verticalAlign='middle'>
                <h1 className='event-modal-header show'>{props.event.title}</h1>
                <h3 className='event-modal-header host show' style={{'text-align': 'center'}}>Hosted by: {group.name}</h3> 
                  

                        <div className='event-modal-descr-div show'><span style={{'font-weight': 'bold', 'font-size': '25px'}}>Date: </span> <p className='event-modal-ptag show'>{eventDate.toDateString()}</p></div>
                        <div className='event-modal-descr-div'>
                            <span style={{'font-weight': 'bold', 'font-size': '25px'}}>Location: </span>
                            <p className='event-modal-ptag show'>{props.event.street_address}</p>
                            <p className='event-modal-ptag show'>{props.event.city}, {props.event.state}</p>
                        </div>
                        <h4 className='event-modal-descr show'>{props.event.description}</h4>

                        <Button
                            onClick={()=>{
                                
                                // props.updateUserEvents(props.event)
                                props.handleRSVP(props.event._def.extendedProps.event_id)
                                props.handleClose()
                            }}
                            positive
                            icon='checkmark'
                            labelPosition='right'
                            content='RSVP'
                        />

                </Grid.Column>
            </Grid>
       </div>
           
        </div>
    
    )

}

export default Event