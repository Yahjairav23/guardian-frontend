import React from 'react'

const Profile=(props)=>{
    const user = props.user
    const birthday = user.birthday
    
    return(
        <div>
            <h2>My Profile</h2>
            {/* <img src={user.image}/> */}
           <h3>{user.name}</h3>
            <p>{user.city}, {user.state}</p>
           <p>Age: {user.age}</p>
           <p>Email: {user.email}</p>
           <p>Bio: {user.bio}</p>
           <p>Birthday: {birthday}</p>
        </div>
    )
}

export default Profile