import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const Event=(props)=>{

    const group = props.groups.find(group => {
      return  group.id === props.event._def.extendedProps.group_id
    })
    return(
        
        
        <div>
       
        <Modal.Header> <h1>{props.event._def.title}</h1> </Modal.Header>
            <Modal.Content image> 
                <Image wrapped size='medium' src={props.event._def.extendedProps.image} />
               
                <Modal.Description>
                <Header>Hosted by: {group.name}</Header>
                    <p>{props.event._instance.range.end.toDateString()}</p>
                    <p>{props.event._def.extendedProps.address}</p>
                    <p>{props.event._def.extendedProps.city}, {props.event._def.extendedProps.state}</p>
                    <h4>{props.event._def.extendedProps.description}</h4>
                </Modal.Description>
            </Modal.Content>

            <Modal.Actions>
            <Button negative onClick={props.handleCloseButton}>Close</Button>
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
          </Modal.Actions>
       
        </div>
    
    )

}

export default Event