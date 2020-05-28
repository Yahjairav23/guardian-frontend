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
            //   loading={isLoading}
            //   onResultSelect={this.handleResultSelect}
            //   onSearchChange={_.debounce(this.handleSearchChange, 500, {
            //     leading: true,
            //   })}
            //   results={results}
            //   value={value}
            //   {...this.props}
            placeholder='Search...'
            value={this.state.search}
            onSearchChange={(e)=>{
                this.changeSearch(e)
                this.props.handleSearch(e, this.state.search)
                
            }}
            />
          </Grid.Column>
          <br></br>
          </>
        )
    }
}

export default GroupSearch 