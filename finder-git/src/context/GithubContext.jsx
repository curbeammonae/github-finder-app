import { createContext, useReducer  } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()


export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        isLoading: false,
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)
    // const [users, setUsers] = useState([])
    // const [isLoading, setIsLoading] = useState(true)
    const fetchUsers = async () => {

        setLoading()



        const response = await fetch(`http://api.github.com/users`)
        const data = await response.json()
        dispatch({
            type: 'GET_USERS',
            payload: data,
        })
    //    setUsers(data)
    //    setIsLoading(false)
        
    }

    //set loading
    const setLoading = () => dispatch({
        type: 'SET_LOADING'
    })

    return <GithubContext.Provider value={{
        users: state.users,
        isLoading: state.isLoading,
        fetchUsers,
    }}>
        {children}
    </GithubContext.Provider>

}

export default GithubContext;