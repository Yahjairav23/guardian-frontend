import React, {Component} from 'react'
import { Input, Grid, Form, Header, Segment, Message, Button, Image } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom';


class Login extends Component {

    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleForm=(e)=>{
        this.setState({
           [e.target.name] : e.target.value
        })
    }

    render(){
        return (
            <>
           
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                <Image src='https://i.imgur.com/oIajXtc.png' circular/> Log-in to your account
            </Header>
            {this.props.errorMessage ? this.props.handleError() : null}
                <Form size='large'onSubmit={ (e) => {
                    e.preventDefault()
                    this.props.handleLogin(this.state)
                }}>
                <Segment stacked>
                <Form.Input
                  id='form-input-control-username'
                  control={Input}
                  label='Username'
                  placeholder='Username'
                  name='username'
                  onChange={this.handleForm} 
                 />
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    label='Password'
                    placeholder='Password'
                    name='password'
                    input='password'
                    onChange={this.handleForm}
                />

                <Button color='teal' fluid size='large'>
                    Login
                </Button>
                </Segment>
            </Form>
            <Message>
                New to us? <a href='/sign-up'>Sign Up</a>
            </Message>
            </Grid.Column>
            </Grid>
            </>
        )
    }
}

export default withRouter(Login)