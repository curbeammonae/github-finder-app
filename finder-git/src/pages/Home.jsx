import React from 'react'
import { useEffect } from 'react'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

export default function Home() {

  // const apiUrl = import.meta.env.VITE_GITHUB_URL;
 

  return (
    <div>
        <UserResults />
        <UserSearch />
       
        
        
    </div>
  )
}
