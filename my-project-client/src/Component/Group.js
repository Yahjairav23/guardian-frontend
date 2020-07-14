import React from 'react'
import {Link} from 'react-router-dom'
import { Card, Icon, Image} from 'semantic-ui-react'

const Group=(props)=>{

    return(
       
       <Card.Group centered itemsPerRow={3}>
            <Card as={Link} to={`/groups/${props.group.id}`}>
                <Image src={props.group.image} wrapped ui={false} />
                <Card.Content>
                <Card.Header>{props.group.name}</Card.Header>
                {/* <Card.Meta>
                    <span className='date'>Started on {props.group.created_at}</span>
                </Card.Meta> */}
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
         
        </Card.Group>
    


    )

}

export default Group