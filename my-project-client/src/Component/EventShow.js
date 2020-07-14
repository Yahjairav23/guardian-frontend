import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Header, Image, Grid } from 'semantic-ui-react'

const Event=(props)=>{

    const group = props.groups.find(group => {
      
    //   return  group.id === props.event._def.extendedProps.group_id
      return  group.id === props.event.group_id

    })
    return(
        
        
        <div>
                <Button as={Link} to='/events'>
                    {'<'} Back To Events
                </Button>
       
       {/* <Container textAlign='center'> */}
            <Grid>
                <Grid.Column width='8'>
                    <Image fluid src={props.event.image} />
                </Grid.Column>
                <Grid.Column width='8'>
                    <Header as='h1' icon textAlign='center'>{props.event.title}</Header>
                    <Header as='h4'>Hosted by: {group.name}</Header>
                        <p>{props.event.event_date}</p>
                        <p>{props.event.street_address}</p>
                        <p>{props.event.city}, {props.event.state}</p>
                        <h4>{props.event.description}</h4>
                </Grid.Column>
            </Grid>
       {/* </Container> */}
           
        </div>
    
    )

}

export default Event