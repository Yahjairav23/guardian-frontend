import React from 'react'
import { Container, Header, Button, Icon, Modal, Image} from 'semantic-ui-react'

const About=(props)=>{
    return(
        <>
        <Modal.Header>Welcome to Guardian</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='https://i.imgur.com/oIajXtc.png' circular/>
          <Modal.Description size='large'>
            {/* <Header>Welcome to Guardian</Header> */}
           
            <h3>Guardian is an app that connects people to groups that participate in outreach unhoused individuals.</h3>
            <br></br>
            <br></br>
            <p>Using Guardian you can:</p>
            <ul>
            <li>Find locations of the homeless that you would like to help</li>
            <li>RSVP for local outreach events</li>
            <li>Join and create groups where you meet up with other's who want to help just like you!</li>
            </ul>

            <p>To demo:</p>
            <br></br>
            <p>Click 'Sign Up' in the navigation bar </p>
            <p>or</p>
            <p>'Log In' using:</p>
            <br></br>
            <ul>
             <li>username:demo  </li>
             <li>password:demo</li>
            </ul>

           <h5>This app was created with Ruby on Rails, React, and Javascript</h5> 

           <h5>Created By: Yahjaira Vasquez & Deijah Price</h5> 
            
          
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary onClick={props.closeModal}>
            Close <Icon name='right chevron' />
          </Button>
        </Modal.Actions>
    </>
    )
}

export default About