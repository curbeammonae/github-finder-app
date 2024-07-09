import React from 'react'
import {  useContext } from 'react'
import UserItem from './UserItem'
import GithubContext from '../../context/GithubContext'
export default function UserResults() {

    const {users, isLoading, fetchUsers} = useContext(GithubContext)

    // const [users, setUsers] = useState([])
    // const [isLoading, setIsLoading] = useState(true)


    // useEffect(() => {
    //     fetchUsers()

    // }, [])

    // const fetchUsers = async () => {
    //     const response = await fetch(`http://api.github.com/users`)
    //     const data = await response.json()
    //    setUsers(data)
    //    setIsLoading(false)
        
    // }

    if(!isLoading){

        return (
          <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
              {users.map((user) =>
                 <UserItem key={user.id} user={user} />
              )}
          </div>
        )
    }else{
        return <h3>loading...</h3>
    }
}
