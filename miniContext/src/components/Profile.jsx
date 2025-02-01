import React, { useContext } from 'react'
import UserContext from '../Context/userContext'

function Profile() {
    const { user } = UserContext(userContext)

    if (!user)
        return
    <div>
        Please Login
    </div>
   return <div>
    Welcome {user.username}
   </div>
}

export default Profile