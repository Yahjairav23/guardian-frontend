import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const Profile=(props)=>{
    const user = props.user
    const birthday = user.birthday
    const bdate = new Date(birthday)
    
    
    return(
        <Card color='teal'>
            <h2>{user.name}</h2>
            <Image src={user.image} alt="avitar" wrapped ui={false} />
            <Card.Meta>{user.city}, {user.state}</Card.Meta>
            <Card.Meta>{user.age} y/o  -  Birthday: {bdate.toLocaleDateString()}</Card.Meta>
            <Card.Description>{user.email}</Card.Description>
            <Card.Description>Bio: {user.bio}</Card.Description>
        </Card>
    )
}

export default Profile