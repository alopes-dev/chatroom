import React, { useState, useEffect } from 'react';

import axios from 'axios';
import history from '../../history';

import {
  Container,
  ListOfUsers,
  User,
  Message,
  MessageContainer,
  MessageTexting,
  SendMessage,
  MessageAction,
  MessageList,
  Button,
} from './style';

const ChatRoom = (props) => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const {
        state: { id: emitterid },
      } = props.history.location;

      const users = await axios.get(`http://localhost:5252/users/${emitterid}`);
      setUsers(users.data);
    }
    loadUsers();
  }, [props.history.location]);

  function renderUsers() {
    return users.map((user) => (
      <User
        key={user.id}
        onClick={() => {
          loadMessages(user.id);
        }}
      >
        {user.email}
      </User>
    ));
  }

  async function loadMessages(receptor) {
    const {
      state: { id: emitterid },
    } = props.history.location;

    const messages = await axios.get(
      `http://localhost:5252/chat/${emitterid}/${receptor}`
    );
    setMessages(messages.data);
  }

  function renderMessage() {
    const {
      state: { id: emitterid },
    } = props.history.location;

    return messages.map(({ message, id, emitter }) => {
      let float = emitter.id === emitterid ? 'right' : 'left';

      return (
        <Message float={float} key={id}>
          {message}
        </Message>
      );
    });
  }

  return (
    <>
      <Button
        onClick={() => {
          history.push('/');
        }}
      >
        Sair
      </Button>
      <Container>
        <ListOfUsers>{renderUsers()}</ListOfUsers>
        <MessageContainer>
          <MessageList>{renderMessage()}</MessageList>
          <MessageAction>
            <MessageTexting />
            <SendMessage>Enviar</SendMessage>
          </MessageAction>
        </MessageContainer>
      </Container>
    </>
  );
};

export default ChatRoom;
