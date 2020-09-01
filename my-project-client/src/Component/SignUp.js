import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'
import {Input, TextArea, Dropdown } from 'semantic-ui-react'
import states from '../states.json'
import {withRouter} from 'react-router-dom';


class SignUp extends Component{

    constructor(){
        super()
        this.state={
            states: states,
            newUser : {
                name : '',
                username : '',
                city: '',
                state: '',
                bio: '',
                email: '',
                birthday:'',
                age: '',
                image: '',
                password: ''
            }
        } 
    }

    handleForm=(e)=>{
        this.setState({
       newUser:  {...this.state.newUser, [e.target.name] : e.target.value}
        })
    }

    handleBirthday=(e)=>{
        const birthday = e.target.value 
          var diff_ms = Date.now() - Date.parse(birthday)
          var age_dt = new Date(diff_ms);
          const age = Math.abs(age_dt.getUTCFullYear() - 1970);
  
          this.setState({
              newUser:  {...this.state.newUser,  age : age, [e.target.name] : e.target.value}
          }) 
    
     }
    
    handleStateForm=(e) => {
        this.setState({
            newUser:  {...this.state.newUser, state: e.target.innerText}
        })
    }


    render(){
       
        return(   

            <>
                {this.props.errorMessage ? this.props.handleError : null}

                <Form className='sign-up-form' style={{padding: '5em', width: '30em'}} onSubmit={(e)=>{
                    e.preventDefault()
                    this.props.handleSignUp(this.state.newUser)
                    }
                }>
                    <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-full-name'
                        control={Input}
                        label='Full Name'
                        placeholder='Full Name'
                        name='name'
                        onChange={this.handleForm}
                    />

                    <Form.Field
                        id='form-input-control-username'
                        control={Input}
                        label='Username'
                        placeholder='Username'
                        name='username'
                        onChange={this.handleForm}
                    />

                    </Form.Group>
                    
                        <Form.Input
                            type='date'
                            control={Input}
                            label="Date of Birth"
                            placeholder='Date'
                            name='birthday'
                            onChange={(e)=>{
                                this.handleBirthday(e)
                                }}
                            />
                
                    <Form.Field
                            id='form-input-control-city'
                            control={Input}
                            label='City'
                            placeholder='City'
                            name='city'
                            onChange={this.handleForm}
                        />
                     
                        <Dropdown 
                        id='form-input-control-error-state'
                        placeholder='State' 
                        search 
                        selection
                        name='state'
                        label='State'
                        onChange={this.handleStateForm}
                        options={this.state.states.map(state=> { 
                        return {
                            text: state.name,
                            value: state.abbreviation,
                            key: state.abbreviation 
                            }
                        })
                    } />


                    <Form.Field
                        id='form-textarea-control-bio'
                        control={TextArea}
                        label='Bio'
                        placeholder='Tell us a bit about yourself...'
                        name='bio'
                        onChange={this.handleForm}
                    />

                    <Form.Field
                        id='form-input-control-error-email'
                        control={Input}
                        label='Email'
                        placeholder='janedoe@demo.com'
                        name='email'
                        onChange={this.handleForm}
                    />

                    <Form.Field >
                        <input
                            id='form-input-control-image'
                            type="file"
                            accept="image/*"
                            multiple={false}
                            name="image"
                            onChange={this.handleForm}
                        />
                    </Form.Field>

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
                </Form>
  </>
        )
    }
}


export default withRouter(SignUp)