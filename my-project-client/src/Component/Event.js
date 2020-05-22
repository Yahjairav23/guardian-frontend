import React from 'react'


const Event=(props)=>{

    const group = props.groups.find(group => {
      return  group.id === props.event._def.extendedProps.group_id
    })

    return(
        <div>
            <h2>{props.event._def.title}</h2> 
            <p>Hosted by: {group.name}</p>
            {/* <img src={props.event._def.extendedProps.address} /> */}
            <p>{props.event._instance.range.end.toDateString()}</p>
            <p>{props.event._def.extendedProps.address}</p>
            <p>{props.event._def.extendedProps.city}, {props.event._def.extendedProps.state}</p>
            <h4>{props.event._def.extendedProps.description}</h4>
        </div>
    )

}

export default Event