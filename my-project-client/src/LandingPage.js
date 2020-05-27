import React, {Component} from 'react'
import { Container, Header, Button, Icon, Modal, Image} from 'semantic-ui-react'
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
        <div className='landing-page'>
        <Container text>
          {/* <Image src='https://react.semantic-ui.com/images/wireframe/image.png' fluid /> */}
        <Header
          as='h1'
          content='Guardian'
        //   inverted
          style={{
            fontSize: '4em',
            // mobile ? '2em' :
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '3em'
            // mobile ? '1.5em' : 
          }}
        />
        <Header
          as='h2'
          content='Lend A Helping Hand.'
        //   inverted
          style={{
            fontSize:  '1.7em',
            
            // mobile ? '1.5em' :
            fontWeight: 'normal',
            marginTop:  '1.5em'
            // mobile ? '0.5em' :
          }}
        />
        <br></br>
        <Button primary size='huge' onClick={this.handleModal}>
          Learn More
          {/* <Icon name='add' /> */}
        </Button>

          {this.state.showModal ? 
            <Modal open={this.state.showModal}>
                <About closeModal={this.closeModal}/>
            </Modal>
            :
            false
          }

      </Container>
      </div>
    )
}
}

export default LandingPage