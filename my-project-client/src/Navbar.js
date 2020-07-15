import React, {Component} from 'react'
import {Menu, Image} from 'semantic-ui-react'
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
              <Image src='https://i.imgur.com/oIajXtc.png' alt='logo' size='mini' circular/>
            </Menu.Item>
        
           {/* / / */}

            <Menu.Item
              name='Home'
              active={activeItem === 'Home'}
              onClick={this.handleItemClick}
              as={Link}
              to='/'
              className='menu-item'
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
              className='menu-item'
            >
                Events
            </Menu.Item>
    
        {/* // */}

            <Menu.Item
              name='groups'
              active={activeItem === 'groups'}
              onClick={this.handleItemClick}
              as={Link}
              className='menu-item'
              to='/groups'
              
            >
                    Groups
            </Menu.Item>

        {/* // */}
            {this.props.currentUser ?
            <Menu.Item
              name='profile'
              active={activeItem === 'profile'}
              onClick={this.handleItemClick}
              as={Link}
              to='/profiles/current-user'
              className='menu-item'
            >
                My Profile
            </Menu.Item>
            :
            false}

        {/* // */}
            {this.props.currentUser ?
            <Menu.Menu position='right'>
                 <Menu.Item
                    name='logout'
                    active={activeItem === 'logout'}
                    onClick={()=>{
                        
                        this.props.logout()
                    }}
                    as={Link}
                    to='/login'
                    className='menu-item'
                >
                        Logout
                </Menu.Item>
            </Menu.Menu>
                :
            <Menu.Menu position='right'>
                <Menu.Item
                    name='login'
                    active={activeItem === 'login'}
                    onClick={this.handleItemClick}
                    as={Link}
                    to='/login'
                    className='menu-item'
                >
                        Login
                </Menu.Item>
            
                <Menu.Item
                    name='sign-up'
                    active={activeItem === 'sign-up'}
                    onClick={this.handleItemClick}
                    as={Link}
                    to='/sign-up'
                    className='menu-item'
                >
                        Sign Up
                </Menu.Item>
            </Menu.Menu>
            }
            </Menu>
        )
    }

}

export default Navbar