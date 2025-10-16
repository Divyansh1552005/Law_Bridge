
import {createContext, useState} from 'react';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [userData, setUserData] = useState(null);

  const currencySymbol = "₹";

  const value = {
    token,
    setToken,
    userData,
    setUserData,
    currencySymbol
  }

  return(
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;


