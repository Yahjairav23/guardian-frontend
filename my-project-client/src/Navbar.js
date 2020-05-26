import React, {Component} from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class Navbar extends Component{

    constructor(){
        super()
        this.state = {
            activeItem: null
        }
    }

    // state = {}
    
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })


    }

    render(){
        const activeItem = this.state.activeItem

        return(
            <Menu stackable>
                
            <Menu.Item>
              <img src='https://react.semantic-ui.com/logo.png' alt='logo' />
            </Menu.Item>
        
        {/* // */}

            <Menu.Item
              name='Home'
              active={activeItem === 'Home'}
              onClick={this.handleItemClick}
              as={Link}
              to='/'
            >
                    Home

            </Menu.Item>

        {/* // */}
    
            <Menu.Item
              name='events'
              active={activeItem === 'events'}
              onClick={this.handleItemClick}
              as={Link}
              to='/events'
            >
                Events
            </Menu.Item>
    
        {/* // */}

            <Menu.Item
              name='groups'
              active={activeItem === 'groups'}
              onClick={this.handleItemClick}
              as={Link}
              to='/groups'
            >
                    Groups
            </Menu.Item>

        {/* // */}

            <Menu.Item
              name='profile'
              active={activeItem === 'profile'}
              onClick={this.handleItemClick}
              as={Link}
              to='/profiles'
            >
                My Profile
            </Menu.Item>


        {/* // */}


            <Menu.Item
                name='sign-up'
                active={activeItem === 'sign-up'}
                onClick={this.handleItemClick}
                as={Link}
                to='/sign-up'
            >
                    Sign Up
            </Menu.Item>
            </Menu>
        )
    }

}

export default Navbar