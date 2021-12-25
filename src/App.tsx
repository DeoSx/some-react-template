import React, { useMemo } from 'react';

// utils
import { useSelector } from 'react-redux';

// settings
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './style/global';
import theme from './style/theme';

// components
import User from './pages/UserProfile';
import LogIn from './components/LogIn';
import Graph from './components/Graph';

// styles
import { AppContainer, AppContent } from './style/styles';

// types
import { RootState } from './_reducers';

const App = () => {
  const { login } = useSelector(({ user }: RootState) => user.user);
  const isAuth = useMemo(() => {
    return login || !!localStorage.getItem('login');
  }, [login]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {!isAuth ? (
          <LogIn />
        ) : (
          <AppContainer>
            <AppContent>
              <Routes>
                <Route path="/" element={<Graph />} />
                <Route path="/user" element={<User />} />
              </Routes>
            </AppContent>
          </AppContainer>
        )}
      </ThemeProvider>
    </Router>
  );
};

export default App;
