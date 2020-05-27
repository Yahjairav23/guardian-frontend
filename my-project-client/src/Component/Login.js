import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
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
            <div>
                {this.props.errorMessage ? this.props.handleError() : null}
                <Form onSubmit={ (e) => {
                    e.preventDefault()
                    this.props.handleLogin(this.state)
                }}>
                    <Form.Group widths='equal'>
                        <Form.Field
                            id='form-input-control-username'
                            control={Input}
                            label='Username'
                            placeholder='Username'
                            name='username'
                            onChange={this.handleForm}
                        />

                        <Form.Field
                            id='form-input-control-password'
                            control={Input}
                            label='Password'
                            placeholder='Password'
                            name='password'
                            input='password'
                            onChange={this.handleForm}
                        />

                        <Form.Field
                        id='form-button-control-public'
                        control={Button}
                        content='Confirm'
                        />
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default withRouter(Login)