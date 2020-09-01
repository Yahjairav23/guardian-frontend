import React from 'react'
import {Link} from 'react-router-dom'
import { List, Image, Grid} from 'semantic-ui-react'

class UserProfile extends React.Component {
    
    render(){
        
        if(this.props.user){
        return(
            
        <>
    
    <div className='up-background'></div>
    
      
            <Grid className='up-container' divided='vertically'>
           
             
     
             
             <Grid.Row columns={3}
             className='gr-container'
             style={{
                 padding: '5em'
                 
             }} >
                        <div className='profile-card'>
                            <Grid>
                                <Grid.Column width={5} textAlign='center' padded className='card-border'>
                                    <br></br>
                                        <p><h1 className='up-title-details'>{this.props.user.name}, <h3>Age:</h3> {this.props.user.age}</h1></p>
                                        
                                        <Image src={this.props.user.image} className='avatar'/>
                                        <br></br>
                                        <br></br>
                                    
                                    <br></br>
                                </Grid.Column>
                              
                                <Grid.Column width={5} textAlign='center' padded className='card-border'>
                                    <br></br>
                                            <p><h3>DOB:</h3> {this.props.user.birthday.split('-')[1]}/{this.props.user.birthday.split('-')[2]}/{this.props.user.birthday.split('-')[0]}</p>
                                            <p><h3>Location:</h3> {this.props.user.city}, {this.props.user.state}</p>            
                                            <p><h3>Email:</h3> {this.props.user.email}</p>
                                     <br></br>
                                     
                               
                                 </Grid.Column>
                                 
                                 <Grid.Column width={5} textAlign='center' padded>
                                   <br></br>
                                        <p><h3>Username:</h3> {this.props.user.username}</p>
                                        <p><h3>Bio:</h3> {this.props.user.bio}</p>
                                    </Grid.Column>

                            </Grid>
                       
                        </div>
            </Grid.Row>
        
            <Grid.Row columns={2} className='gr-container-2'>
                <Grid.Column textAlign='center' padded className='border'>
                    
                            <h1 className='up-title-details'>My Upcoming Event RSVPs</h1>
                            <div className='up-title'></div>
                            {this.props.userEvents.length > 0  ?
                            <List>
                                {this.props.userEvents.filter(event => new Date(event.event_date).getTime() >= new Date().getTime()).map(event => {
                                    return <List.Content as={Link} to={`/events/${event.id}`}>
                                     <List.Item>{event.title}</List.Item>
                                     </List.Content>
                                })
                                }
                            </List>
                            :
                            <p>You Don't Have Any Upcoming Events.</p>
                            }
                   </Grid.Column>

                   <Grid.Column textAlign='center' padded>
                            <h1 className='up-title-details'>My Groups</h1>
                            <div className='up-title'></div>
                            {this.props.user.member_user_groups.length > 0 ?
                            <List>
                                {this.props.user.member_user_groups.map(group => {
                                    return <List.Content>
                                                 <List.Item as={Link} to={`/groups/${group.id}`}>{group.group.name}</List.Item>
                                    </List.Content>
                                })
                                }
                            </List>
                            :
                            <p>You Are Not A Part Of Any Groups Yet.</p>
                            }
            
                     </Grid.Column>
                
               </Grid.Row>
               

            </Grid>
       
      
        </>
        )
        }else{
            return null
        }
    }
}

export default UserProfile