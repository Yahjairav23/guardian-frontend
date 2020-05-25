import React from 'react'
import { Button, Header, Image, Modal, ModalDescription } from 'semantic-ui-react'

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
                <Header><p>Hosted by: {group.name}</p></Header>
                    <p>{props.event._instance.range.end.toDateString()}</p>
                    <p>{props.event._def.extendedProps.address}</p>
                    <p>{props.event._def.extendedProps.city}, {props.event._def.extendedProps.state}</p>
                    <h4>{props.event._def.extendedProps.description}</h4>
                </Modal.Description>
            </Modal.Content>

            <Modal.Actions>
            <Button negative onClick={(event) => props.handleCloseButton(event)}>Close</Button>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content='RSVP'
            />
          </Modal.Actions>
       
        </div>
    
    )

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

export default Event