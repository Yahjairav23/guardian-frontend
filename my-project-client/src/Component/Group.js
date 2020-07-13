import React from 'react'
import {Link} from 'react-router-dom'
import { Card, Icon, Image, Grid} from 'semantic-ui-react'

const Group=(props)=>{

    return( 
              
       <>
            <Card as={Link} to={`/groups/${props.group.id}`}>
                <img src={props.group.image} height={350}/>                
                <Card.Content>
                <Card.Header>{props.group.name}</Card.Header>
                <Card.Description>
                    {props.group.city}, {props.group.state}
                </Card.Description>
                    <br></br>
                </Card.Content>
                <Card.Content extra>
                    <p>
                        <Icon name='user' />
                        {props.group.user_groups.length} 
                    </p>
                </Card.Content>
    
            </Card>
         
        </>
        
    )
}

export default Group