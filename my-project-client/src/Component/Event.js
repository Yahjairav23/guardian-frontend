import React from 'react'
import { Button, Image, Modal, Grid } from 'semantic-ui-react'

const Event=(props)=>{
    

    const group = props.groups.find(group => {
      return  group.id === props.event._def.extendedProps.group_id
    })
  

    return(
        
        
        <>
        <Modal.Header> 
          <h1 className='event-modal-header'>{props.event._def.title}</h1>
          <h3 className='event-modal-header host'>Hosted by: {group.name}</h3> 
        </Modal.Header>
        <Modal.Content image> 

            <Grid.Column width='8'>
                <Image wrapped size='medium' src={props.event._def.extendedProps.image} />
            </Grid.Column>

            <Grid.Column width='8'>
                    <div className='event-modal-descr-div'><span style={{fontWeight: 'bold'}}>Date: </span> <p className='event-modal-ptag'>{props.event._instance.range.end.toDateString()}</p></div>
                    <div className='event-modal-descr-div'>
                      <span style={{fontWeight: 'bold'}}>Location: </span>
                      <p className='event-modal-ptag'>{props.event._def.extendedProps.address}</p>
                      <p className='event-modal-ptag'>{props.event._def.extendedProps.city}, {props.event._def.extendedProps.state}</p>
                    </div>
                    <h4 className='event-modal-descr'>{props.event._def.extendedProps.description}</h4>
            </Grid.Column>
        </Modal.Content>


        <Modal.Actions>
          <Button negative onClick={props.handleCloseButton}>Close</Button>
          
          <Button
            onClick={()=>{
              props.handleRSVP(props.event._def.extendedProps.event_id)
              props.handleClose()
            }}
            positive
            icon='checkmark'
            labelPosition='right'
            content='RSVP'
          />

        </Modal.Actions>
       
        </>
    
    )

}

export default Event