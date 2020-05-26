import React, {Component} from 'react'
import EventContainer from '../Container/EventsContainer.js'
import { Grid, Image} from 'semantic-ui-react'
// import { render } from 'react-dom'


class GroupShow extends Component {

    constructor(){
        super()
        this.state ={
            members: [],
        }
    }

    componentDidMount =() => {
        fetch(`http://localhost:3000/user_groups/group/${this.props.group.id}`)
        .then(resp => resp.json())
        .then(data => {
           
            this.setState({members: data})
        })
            
    }

    // findFounder = () => {
    //     let founder = this.state.members.find(member => member.id === this.props.group.creator_id)
    //     this.setState({founder: founder})
    // }
    
    
    render(){
        const group = this.props.group
        
        const groupEvents = this.props.events.filter( event => event.group_id == group.id)
    
        const startDate = new Date(this.props.group.created_at)

        const member = this.state.members.map(member => {
            return <p key={member.id}>{member.name}</p>
        })
        
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
                <EventContainer events={groupEvents} groups={this.props.groups}/>
            </Grid.Column>

        </Grid>
        )
    }

}

export default GroupShow