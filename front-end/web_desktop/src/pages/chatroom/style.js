import styled, { css } from 'styled-components';

export const Container = styled.div `
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 0px 50px 0px 50px;
`;

export const Fields = styled.div `
  width: 350px;
  padding: 15px 10px 15px 10px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1 `
  color: #fff;
  text-align: center;
`;

export const Input = styled.input `
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 2px;
  margin-bottom: 20px;
  padding: 0 15px;
`;

export const Button = styled.button `
  height: 35px;
  border: 1px solid #103048;
  border-radius: 2px;
  margin-bottom: 20px;
  padding: 0 15px;
  font-weight: bold;
  font-size: 14px;
  background-color: #103048;
  color: #fff;
  box-shadow: 0px 1.6px 3.6px rgba(0, 0, 0, 0.2529175640624825),
    0px 0px 2.9px rgba(0, 0, 0, 0.21400716959133134);
  cursor: pointer;
`;

export const ListOfUsers = styled.div `
  flex: 1;
  flex-direction: row;
  border: 1px solid #ccc;
  border-right: 0;
  min-height: 60vh;
`;
export const User = styled.div `
  height: 40px;
  margin: 10px 0px;
  background-color: #424242;
  font-size: 13px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
`;

export const MessageContainer = styled.div `
  flex: 2.3;
  flex-direction: row;
  border: 1px solid #ccc;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const MessageList = styled.div `
  min-height: 49.29vh;
  overflow-y: scroll;
  padding: 0 20px;
`;
export const Message = styled.div `
  height: 50px;
  margin: 10px 0px;
  background-color: #424242;
  font-size: 13px;
  width: 330px;
  min-width: 100px;
  display: flex;
  align-items: center;
  padding: 0 10px 0 20px;
  border-radius: 20px;

  cursor: pointer;
  ${(props) =>
    props.float === 'left'
      ? css`
          float: left;
          clear: both;
          background-color: #103048;
          border-color: #103048;
        `
      : css`
          float: right;
          clear: both;
          background-color: #424242;
          border-color: #424242;
        `}
`;

export const MessageAction = styled.div`
  height: 55px;
  border: 1px solid #ccc;
  border-left: 0;
  border-bottom: 0;
  border-right: 0;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
`;
export const MessageTexting = styled.textarea`
  border: 0;
  padding: 5px 15px;
  flex: 2.3;
  resize: none;
`;
export const SendMessage = styled.button`
  height: 55px;
  flex: 0.3;
  border: 1px solid #103048;
  border-radius: 2px;
  margin-bottom: 20px;
  padding: 0 15px;
  font-weight: bold;
  font-size: 14px;
  background-color: #103048;
  color: #fff;
  box-shadow: 0px 1.6px 3.6px rgba(0, 0, 0, 0.2529175640624825),
    0px 0px 2.9px rgba(0, 0, 0, 0.21400716959133134);
  cursor: pointer;
`;