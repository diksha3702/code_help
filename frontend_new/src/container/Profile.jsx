import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
const Profile = () => {
    const {userDetails} = useContext(AuthContext);
  return (
    <div>
        {userDetails["email"]}
    </div>
  )
}

export default Profile