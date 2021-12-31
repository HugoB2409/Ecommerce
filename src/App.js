import React, { useState } from "react";
import Routes from "./utils/Routes";
import model from "./utils/model";
import { theme } from "./utils/MuiSettings";
import { AuthContext } from "./context/auth";
import { StoreProvider, createStore } from "easy-peasy";
import { ThemeProvider } from "@material-ui/core/styles";

const App = () => {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  const store = createStore(model);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <StoreProvider store={store}>
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </AuthContext.Provider>
    </StoreProvider>
  );
};

export default App;
