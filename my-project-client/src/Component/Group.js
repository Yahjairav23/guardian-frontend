import React from 'react'
import {Link} from 'react-router-dom'
import { Card, Icon} from 'semantic-ui-react'

const Group=(props)=>{

    return( 
              
       <>
            <Card as={Link} to={`/groups/${props.group.id}`} className='group-card'>
                <img src={props.group.image} height={350}/>                
                <Card.Content>
                <Card.Header><p>{props.group.name}</p></Card.Header>
                <Card.Description>
                    <p>{props.group.city}, {props.group.state}</p>
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