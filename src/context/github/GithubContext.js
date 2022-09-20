import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  //const [users, setUsers] = useState([]);
  //const [loading, setLoading] = useState(true);

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async () => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    //console.log(data);

    setTimeout(() => {
      dispatch({
        type: 'GET_USERS',
        payload: data,
      });
    }, 2000);
  };

  //

  //Serch User by name

  //Clear Result

  const clearSearch = () => {
    dispatch({
      type: 'CLEAR_SEARCH',
    });
  };

  const setLoading = () => {
    dispatch({
      type: 'SET_LOADING',
    });
  };
  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
        fetchUsers,
        clearSearch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
