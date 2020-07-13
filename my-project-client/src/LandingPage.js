import React, {Component} from 'react'
import { Container, Header, Button, Icon, Modal, Image, Grid} from 'semantic-ui-react'
import About from './Component/About.js'

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

        <Container text position='center'>
  
        <Header
          position='center'
          as='h1'
          content='Guardian'
        
          style={{
            fontSize: '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '3em'
          }}   
        />

        <Header
        position='center'
          as='h2'
          content='Lend A Helping Hand.'
          style={{
            fontSize:  '1.7em',
            fontWeight: 'normal',
            marginTop:  '1.5em'
          }}
        />

        <br></br>

        <Button primary size='huge' position='centered' onClick={this.handleModal}>
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
      
        </>
    )
  }
}

export default LandingPage