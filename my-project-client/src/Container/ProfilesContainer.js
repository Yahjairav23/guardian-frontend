import React, {Component} from 'react'
import Profile from '../Component/Profile.js'

class ProfilesContainer extends Component{

    render(){

        const profile = this.props.users.map(user => {
            return <Profile key={user.id} user={user}/>
        })

        return(
            <div>
                ProfilesContainer
                {profile}
            </div>
        )
    }
}

export default ProfilesContainer