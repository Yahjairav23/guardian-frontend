import React, {Component} from 'react'
import Group from '../Component/Group.js'
import GroupSearch from '../Component/GroupSearch.js'
import { Grid, Card } from 'semantic-ui-react'

class GroupsContainer extends Component{


    render(){

        const group = this.props.groups.map(group => {
            return <Group key={group.id} group={group}/>
        })

        return(
            <div className='groups-page'>
                <Grid padded='horizontally'>
                    <GroupSearch handleSearch={this.props.handleSearch} />
                    <h1 className='groups-page-title'> Community Groups </h1>
                </Grid>
                <Card.Group itemsPerRow={3}>
                    {group}
                </Card.Group>
            </div>
        )
    }
} 

export default GroupsContainer