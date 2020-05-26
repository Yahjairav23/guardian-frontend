import React, {Component} from 'react'
import Group from '../Component/Group.js'

class GroupsContainer extends Component{


    render(){
        const group = this.props.groups.map(group => {
            return <Group key={group.id} group={group}/>
        })

        return(
            <div>
                {group}
            </div>
        )
    }
}

export default GroupsContainer