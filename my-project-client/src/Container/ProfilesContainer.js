import React, {Component} from 'react'
import Profile from '../Component/Profile.js'
import { Card } from 'semantic-ui-react'

class ProfilesContainer extends Component{

    render(){

        const profile = this.props.users.map(user => {
            return <Profile key={user.id} user={user}/>
        })

        return(
            <div>
                <h1>ProfilesContainer</h1>
                <Card.Group centered itemsPerRow={3}>
                    {profile}
                </Card.Group>
            </div>
        )
    }
}

export default ProfilesContainer