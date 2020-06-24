import React, {Component} from 'react'
import { Search, Grid} from 'semantic-ui-react'

class GroupSearch extends Component{

    constructor(){
        super()
        this.state={
            search : ''
        }
    }


    changeSearch=(e)=>{
        this.setState({
            search: e.target.value
        })
    }


    render(){
        return(
            <>
            <Grid.Column width={6}>
            <Search
            placeholder='Search...'
            value={this.state.search}
            onSearchChange={(e)=>{
                this.changeSearch(e)
                this.props.handleSearch(e)
                
            }}
            />
          </Grid.Column>
          <br></br>
          </>
        )
    }
}

export default GroupSearch 