import { createContext, useReducer  } from "react";
import githubReducer from "./GithubReducer";
import { useParams } from "react-router-dom";

const GithubContext = createContext()


export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        user:{},
        repos: [],
        isLoading: false,
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)
    // const [users, setUsers] = useState([])
    // const [isLoading, setIsLoading] = useState(true)
    const fetchUsers = async () => {

        setLoading()



        const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`)
        const data = await response.json()
        dispatch({
            type: 'GET_USERS',
            payload: data,
        })
    //    setUsers(data)
    //    setIsLoading(false)
        
    }
    const searchUsers = async (text) => {

        setLoading()

        const params = new URLSearchParams({
            q: text,
        })



        const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/search/users?${params}`)
        const {items} = await response.json()
        dispatch({
            type: 'GET_USERS',
            payload: items,
        })
    //    setUsers(data)
    //    setIsLoading(false)
        
    }
    //get a single user
    const getUser = async (login) => {

        setLoading()

       



        const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users/${login}`)

        if(response.status === 4040){
            window.location='/'
        }else{

            const data = await response.json()
            dispatch({
                type: 'GET_USER',
                payload: data,
            })
        }
    //    setUsers(data)
    //    setIsLoading(false)
        
    }
    //get a user repo
    const getUserRepos = async (login) => {

        setLoading()
        
        const params = new URLSearchParams({
           sort: 'created',
           per_page:5,
        })

       



        const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users/${login}/repos?${params}`
         )

        if(response.status === 4040){
            window.location='/'
        }else{

            const data = await response.json()
            dispatch({
                type: 'GET_REPOS',
                payload: data,
            })
        }
    //    setUsers(data)
    //    setIsLoading(false)
        
    }

    //clear users from state
    const clearUsers = () =>dispatch({

        type: 'CLEAR_USERS'
    })
  

    //set loading
    const setLoading = () => dispatch({
        type: 'SET_LOADING'
    })

    return <GithubContext.Provider value={{
        users: state.users,
        isLoading: state.isLoading,
        user: state.user,
        repos: state.repos,
        clearUsers,
        searchUsers,
        getUser,
        getUserRepos
    }}>
        {children}
    </GithubContext.Provider>

}

export default GithubContext;