import React, {Component} from 'react'
import EventContainer from '../Container/EventsContainer.js'
import { Grid, Image, Button, Modal, Header, Icon} from 'semantic-ui-react'
// import { render } from 'react-dom'


class GroupShow extends Component {

    constructor(){
        super()
        this.state ={
            members: [],
            user_group:{
            member_id: 0,
            group_id: 0
            },
            joinedModal: false
        }
    }

    handlCloseJoinedModal=()=>{
        this.setState({
          joinedModal : false
        })
      }

      handleState=()=>{
          this.setState({
            joinedModal : !this.state.joinedModal
          })
        }

    componentDidMount =() => {
        fetch(`http://localhost:3000/groups/${this.props.group.id}`)
        .then(resp => resp.json())
        .then(data => {
           const members = data.user_groups.map( ug => ug.member)
            this.setState({members: members,
                            user_group: { 
                            member_id: this.props.user.id,
                            group_id: this.props.group.id
                        }
            })
        })
    }


    render(){
       
        const group = this.props.group
        
        const groupEvents = this.props.events.filter( event => event.group_id === group.id)
    
        const startDate = new Date(this.props.group.created_at)

        const member = this.state.members.map(member => {
            return <p key={member.id}>{member.name}</p>
        })
        
        const userGroupEvents = this.props.user.events.filter(event => event.group_id === group.id)
        debugger

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
                <EventContainer events={groupEvents} user={this.props.user} groups={this.props.groups} handleRSVP={this.props.handleRSVP} group={true}/>
                
                <Button onClick={this.handleState}>
                    Join Group
                </Button>
             
                <Modal >
                {this.state.joinedModal ?
            
                    <>
                      <Header content='Thank you for Joining!' />
                        <Modal.Content>
                        <p>
                            You have joined {this.props.group.name}
                        </p>
                        </Modal.Content>
                        <Modal.Actions>
                    
                        <Button color='green' inverted onClick={this.handleCloseJoinedModal}>
                            <Icon name='checkmark' /> Got It!
                        </Button>
                        </Modal.Actions>
                </>
                :
                null
                }
                </Modal>

            </Grid.Column>

        </Grid>
        )
    }

}

export default GroupShow