import React from 'react'
import { Image, Grid } from 'semantic-ui-react'

class UserProfile extends React.Component {
    
    render(){
    //    debugger
        return(
            
        <>
        <Grid>
            <Grid.Column width={4}>
                
                <h1>{this.props.user.name}</h1>
                <Image src={this.props.user.image} size='medium' circular/>
                <p>{this.props.user.username}</p>
                <p>{this.props.user.city}, {this.props.user.state}</p>
                <p>{this.props.user.email}</p>
                <p>{this.props.user.bio}</p>
                <p>{this.props.user.age}</p>
                <p>{this.props.user.birthday}</p>
                
            </Grid.Column>

            <Grid.Column width={4}>
                <h1>My Events</h1>
                {this.props.user.events.map(event => {
                    return <p>{event.title}</p>
                })
                }
                <h1>My Groups</h1>
        
                {this.props.user.member_user_groups.map(group => {
                    return <p>{group.group.name}</p>
                })
                }


            
            </Grid.Column>
        </Grid>
        </>
        )
    }
}

export default UserProfile