import React, { useEffect } from 'react';
import { Switch, Router, Route } from 'react-router-dom';

import io from 'socket.io-client';

import history from './history';
import Login from './pages/login';
import ChatRoom from './pages/chatroom';

function App() {
  useEffect(() => {
    const socket = io('http://localhost:5252');
    socket.on('connect', () => {});
  }, []);

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/chatroom" component={ChatRoom} />
      </Switch>
    </Router>
  );
}

export default App;
