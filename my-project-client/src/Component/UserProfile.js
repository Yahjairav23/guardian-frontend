import React from 'react'
import {Link} from 'react-router-dom'
import { List, Image, Grid, Segment, Divider} from 'semantic-ui-react'

class UserProfile extends React.Component {
    
    render(){
        
        if(this.props.user){
        //   debugger
        return(
            
        <>
    
    <div className='up-background'></div>
    
      
            <Grid className='up-container'>
           
             <Grid.Column width={2}></Grid.Column>
     
             
            
                <Grid.Column width={4} textAlign='center' className='border' padded divided>
                    
                    <h1 className='up-title-details'>Welcome Back {this.props.user.name}!</h1>
                    <br></br>
                    <Image src={this.props.user.image} size='medium' circular/>
                    <br></br>
                    <div className='border-top'>
                        <p><h3>Username:</h3> {this.props.user.username}</p>
                        <p><h3>Location:</h3> {this.props.user.city}, {this.props.user.state}</p>
                        <p><h3>Email:</h3> {this.props.user.email}</p>
                        <p><h3>Bio:</h3> {this.props.user.bio}</p>
                        <p><h3>Age:</h3> {this.props.user.age}</p>
                        <p><h3>DOB:</h3> {this.props.user.birthday.split('-')[1]}/{this.props.user.birthday.split('-')[2]}/{this.props.user.birthday.split('-')[0]}</p>
                    </div>
                </Grid.Column>
                
                <Grid.Column width={8} textAlign='center' padded>
                    
                            <h1 className='up-title-details'>My Events</h1>
                            <div className='up-title'></div>
                            {this.props.userEvents.length > 0  ?
                            <List>
                                {this.props.userEvents.map(event => {
                                    return <List.Item as={Link} to={`/events/${event.id}`}>{event.title}</List.Item>
                                })
                                }
                            </List>
                            :
                            <p>You Don't Have Any Upcoming Events.</p>
                            }
                   
                            <h1 className='up-title-details'>My Groups</h1>
                            <div className='up-title'></div>
                            {this.props.user.member_user_groups.length > 0 ?
                            <List>
                                {this.props.user.member_user_groups.map(group => {
                                    return <List.Item as={Link} to={`/groups/${group.id}`}>{group.group.name}</List.Item>
                                })
                                }
                            </List>
                            :
                            <p>You Are Not A Part Of Any Groups Yet.</p>
                            }
            
                
                </Grid.Column>
               
                

                <Grid.Column width={2}></Grid.Column>
               

            </Grid>
       
      
        </>
        )
        }else{
            return null
        }
    }
}

export default UserProfile