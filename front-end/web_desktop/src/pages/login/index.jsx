import React, { useState } from 'react';

import axios from 'axios';

import { Container, Fields, Title, Input, Button } from './style';

import history from '../../history';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = async () => {
    const response = await axios.post('http://localhost:5252/users', {
      password,
      email,
    });

    history.push('/chatroom', response.data);
  };

  return (
    <Container>
      <Fields>
        <Title>Chat Room</Title>
        <Input
          placeholder="Username"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button onClick={handleClick}>Logar</Button>
      </Fields>
    </Container>
  );
};

export default Login;
