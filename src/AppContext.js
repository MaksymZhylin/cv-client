import React, { useState } from 'react';
import Axios from 'axios';

const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const [file, setFile] = useState([]);

  const getFile = () => {
    Axios.get('http://localhost:3001/file')
      .then((response) => {
        setFile(response.data);
      })
      .catch((err) => console.log(err));
  };

  const value = {
    file,
    setFile,
    getFile,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContextProvider, AppContext };
