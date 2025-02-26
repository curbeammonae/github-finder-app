import React from 'react'
import { useState, useContext } from 'react'
import GithubContext from '../../context/GithubContext'
import AlertContext from '../../context/AlertContext'

export default function UserSearch() {
    const [text, setText] = useState('')
    const {users, searchUsers, clearUsers} = useContext(GithubContext)
    const {setAlert} = useContext(AlertContext)


const handleChange = (e) => {
    setText(e.target.value)
    console.log(e.target.value)
}
const handleSubmit = (e) => {
    e.preventDefault()
    if(text === ''){
        setAlert('please enter something','error')
    }else{
        //search users
        searchUsers(text)

        setText('')
    }
}

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input onChange={handleChange} value={text} type="text" className="w-full pr-50 bg-gray-200 input input-lg text-black" placeholder='search'/>
                        <button type='submit'className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                                Go
                        </button>
                    </div>
                </div>
            </form>

        </div>
        {users.length > 0 &&  <div>
            <button onClick={clearUsers} className="btn btn-ghost btn-lg">
                Clear
            </button>
        </div>}
       
    </div>
  )
}
