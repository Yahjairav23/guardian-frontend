import React, {Component} from 'react'
import { Container, Header, Button, Modal } from 'semantic-ui-react'
import About from './Component/About.js'
import {logo} from './logo.svg'
import { withRouter } from 'react-router-dom'

class LandingPage extends Component{

    constructor(){
        super()
        this.state={
            showModal: false
        }

    }

    handleModal=()=>{
        this.setState({
            showModal: !this.state.showModal
        })
    }

    closeModal=()=>{
        this.setState({
        showModal : false
        })
    }

render(){
    return(
      <>
        <div className='landing-page' ></div>
      {/* <div style={{'text-align': 'center', 'vertical-align': 'middle'}}> */}
        <Container text position='center' style={{'text-align': 'center'}}>
  
        {/* <img src='https://i.imgur.com/oIajXtc.png' /> */}
        <Header
          position='center'
          as='h1'
          content='Guardian'
        
          style={{
            color: 'white',
            letterSpacing: '5px',
            fontSize: '4em',
            fontWeight: 'heavy',
            marginBottom: 0,
            marginTop: '3em'
          }}   
        />

        <Header
        position='center'
          as='h2'
          content='Lend A Helping Hand.'
          style={{
            borderTop: 'solid',
            padding: '1em',
            fontSize:  '1.7em',
            fontWeight: 'normal',
            // marginTop:  '1em',
            color: 'white',
            letterSpacing: '5px'
          }}
        />

        <br></br>

        <Button className='learn-more-btn' primary size='huge' position='centered' onClick={this.handleModal} style={{marginBottom: '3em'}}>
          Learn More
        </Button>

          {this.state.showModal ? 
            <Modal open={this.state.showModal}>
                <About closeModal={this.closeModal}/>
            </Modal>
            :
            false
          }
    
      </Container>
      {/* </div> */}
      </>
    )
  }
}

export default LandingPage