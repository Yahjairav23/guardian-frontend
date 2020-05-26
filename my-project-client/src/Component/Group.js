import React from 'react'
import {Link} from 'react-router-dom'
import { Card, Icon, Image} from 'semantic-ui-react'

const Group=(props)=>{
    return(
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
                22 Members
            </p>
        </Card.Content>
  
  </Card>

    )

}

// t.string "name"
// t.string "city"
// t.string "state"
// t.string "email"
// t.string "phone"
// t.string "about"
// t.string "image"
// t.integer "creator_id"

export default Group