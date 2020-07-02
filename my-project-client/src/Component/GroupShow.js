import React, {Component} from 'react'
import EventContainer from '../Container/EventsContainer.js'
import { Grid, Image, Button, Modal, Header, Icon} from 'semantic-ui-react'
// import { render } from 'react-dom'


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
        
        const groupEvents = this.props.events.filter( event => event.group_id == group.id)
    
        const startDate = new Date(this.props.group.created_at)
    
        const user_groups = this.props.userGroups.filter(ug => {
           return ug.group_id === this.props.group.id
        })
       
        const member =  user_groups.map(ug => {
                return <p key={ug.member.id}>{ug.member.name}</p>
            })

        const existingUG = user_groups.filter(ug => ug.member.id === this.props.user.id)
            
        return(
            
        <Grid>
                <Grid.Column width={4}>
                    <Image src={this.props.group.image} />
                    {this.props.group.name}
                    <br></br>
                    {this.props.group.city}, {this.props.group.state}
                    <br></br>
                    <h4>Founder:</h4>
                    <p>{this.props.founder.name}</p>
                    <h4>Founded On:</h4>
                    <p>{startDate.toDateString()}</p>
                    <h4>About</h4>
                    <p>{this.props.group.about}</p>
                    <h5>Contact Us:</h5>
                    <p>Email: {this.props.group.email}</p>
                    <p>Phone: {this.props.group.phone}</p>
                    <br></br>
                    <h3>Members</h3>
                        {member}
            
                        

                </Grid.Column>

            <Grid.Column width={10}>
                <EventContainer userEvents={this.props.userEvents} events={groupEvents} user={this.props.user} groups={this.props.groups} handleRSVP={this.props.handleRSVP} />
            
            {this.props.user ?
           
           
              existingUG.length > 0 ?
                    <Button onClick={() => {
                        this.handleDeleteState()
                    }}>
                        Leave Group
                    </Button>
                        :
                    <Button onClick={() => {
                        this.handleState()
                    }}>
                        Join Group
                    </Button>
                

                :
                false}
             
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

            </Grid.Column>

        </Grid>
        )
        
    }

}

export default GroupShow