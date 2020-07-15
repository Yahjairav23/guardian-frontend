import React, {Component} from 'react'
import EventContainer from '../Container/EventsContainer.js'
import { Grid, Image, Button, Modal, Header, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'



class GroupShow extends Component {

    constructor(){
        super()
        this.state ={
            members: [],
            joinedModal: false,
            deleteModal: false
        }
    }

    handleCloseJoinedModal=()=>{
        this.setState({
          joinedModal : false
        })
      }

      handleState=()=>{

          this.setState({
            joinedModal : !this.state.joinedModal
          })
        }

        handleDeleteState=()=>{

            this.setState({
              deleteModal : !this.state.deleteModal
            })
          }
   

    render(){
      
    
        const group = this.props.group
        
        const groupEvents = this.props.events.filter( event => event.group_id === group.id)
    
        const startDate = new Date(this.props.group.created_at)
    
        const user_groups = this.props.userGroups.filter(ug => {
           return ug.group_id === this.props.group.id
        })
        
        const member =  user_groups.map(ug => {
                return <p key={ug.member.id} className='disc-ptag'>{ug.member.name}</p>
            })
        
        // const existingUG = user_groups.filter(ug => ug.member.id === this.props.user.id)
        
            
        return(
            <>
                <div style={{'margin-left': '2em', 'margin-bottom': '0'}}>
               <Button as={Link} to='/groups'>
                    {'<'} Back To Groups
                </Button>
                </div>
           <div className='group-show'>
        <Grid >
            
            <Grid columns='equal'>
                <Grid.Row >
                    <Grid.Column>
                        <Image src={this.props.group.image}  circular/>
                    </Grid.Column>
                    
                    <Grid.Column>
                        <div className='group-show-title'>{this.props.group.name}</div>
                        <div className='group-show-location'>{this.props.group.city}, {this.props.group.state}</div>

                        {/* <h4 className='disc-header about'>About</h4> */}
                        <p className='disc-ptag about' >{this.props.group.about}</p>

                        {/* <br></br> */}
                        <div className='group-join'>
                            {this.props.user ?
                             user_groups.filter(ug => ug.member.id === this.props.user.id).length > 0 ?
                                    <Button 
                                    className='leave-btn'
                                    // style={{'background-color': 'rgb(4, 208, 208)'}}
                                    onClick={() => {
                                        this.handleDeleteState()
                                    }}>
                                        Leave Group
                                    </Button>
                                        :
                                    <Button 
                                    className='join-btn'
                                    // style={{'background-color': 'rgb(4, 208, 208)'}}
                                    onClick={() => {
                                        this.handleState()
                                    }}>
                                        Join Group
                                    </Button>
                                :
                                false}
                        </div>

                    </Grid.Column>

                    <Grid.Column>
                        {/* <br></br> */}
                        <h4 className='disc-header'>Founded By:</h4>
                        <p className='disc-ptag'>{this.props.founder.name}</p>
                        <h4 className='disc-header'>Founded On:</h4>
                        <p className='disc-ptag'>{startDate.toDateString()}</p>
                        <h5>Contact Us:</h5>
                        <p className='disc-ptag'>{this.props.group.phone}</p>
                        <p className='disc-ptag'>{this.props.group.email}</p>
                    </Grid.Column>

                    <Grid.Column>
                    <h3>Members</h3>
                        {member}
                    </Grid.Column>
            
                        

                </Grid.Row>
                </Grid>

                                    
            <Grid.Row stretched={true} style={{'margin-top': '3em', 'border-top': 'solid', 'border-width': '.1px', 'border-color': 'lightgrey'}}>
                <EventContainer userEvents={this.props.userEvents} events={groupEvents} user={this.props.user} groups={this.props.groups} handleRSVP={this.props.handleRSVP} />
            
            
             
                {this.state.joinedModal ?
                <Modal open={this.state.joinedModal} centered={true}>
                      <Header content='Are you sure?' />
                        <Modal.Content>
                        <p>
                            Do you want to join {this.props.group.name}?
                        </p>
                        </Modal.Content>
                        <Modal.Actions>

                        <Button color='red' onClick={() => {
                            this.handleState()
                            }}>
                            Cancel
                        </Button>

                        <Button color='green' inverted onClick={()=> {
                            this.handleCloseJoinedModal()
                            this.props.handleJoinGroup(this.props.group.id)
                            }}>
                            <Icon name='checkmark' /> Join!
                        </Button>
                        </Modal.Actions>
                
                </Modal>
                :
                null
                }

        {this.state.deleteModal ?
                <Modal open={this.state.deleteModal} centered={true}>
                      <Header content='Are you sure?' />
                        <Modal.Content>
                        <p>
                            Do you want to leave {this.props.group.name}?
                        </p>
                        </Modal.Content>
                        <Modal.Actions>

                        <Button color='red' onClick={() => {
                            this.handleDeleteState()
                            }}>
                            Cancel
                        </Button>

                        <Button color='green' inverted onClick={(e)=> {
                            this.handleDeleteState()
                            this.props.deleteUG(e, this.props.group.id)
                            }}>
                            <Icon name='checkmark' /> Leave!
                        </Button>
                        </Modal.Actions>
                
                </Modal>
                :
                null
                }

            </Grid.Row>

        </Grid>

        </div> 

        </>
        )
        
    }

}

export default GroupShow