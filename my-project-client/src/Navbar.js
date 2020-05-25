import React, {Component} from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class Navbar extends Component{

    state = {}
    
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })


    }

    render(){
        const { activeItem } = this.state

        return(
            <Menu stackable>
                
            <Menu.Item>
              <img src='https://react.semantic-ui.com/logo.png' />
            </Menu.Item>
        
        {/* // */}

            <Menu.Item
              name='Home'
              active={activeItem === 'Home'}
              onClick={this.handleItemClick}
            >
                <Link to='/'>
                    Home
                </Link>

            </Menu.Item>

        {/* // */}
    
            <Menu.Item
              name='events'
              active={activeItem === 'events'}
              onClick={this.handleItemClick}
            >

                <Link to='events'>
                Events
                </Link>
            </Menu.Item>
    
        {/* // */}

            <Menu.Item
              name='groups'
              active={activeItem === 'groups'}
              onClick={this.handleItemClick}
            >
                <Link to='/groups'>
                    Groups
                </Link>
            </Menu.Item>

        {/* // */}

            <Menu.Item
              name='profile'
              active={activeItem === 'profile'}
              onClick={this.handleItemClick}
            >
                <Link to='/profiles'>
                My Profile
                </Link>
            </Menu.Item>


        {/* // */}


            <Menu.Item
                name='sign-up'
                active={activeItem === 'sign-up'}
                onClick={this.handleItemClick}
            >
                <Link to='/sign-up'>
                    Sign Up
                </Link>
            </Menu.Item>
            </Menu>
        )
    }

}

export default Navbar