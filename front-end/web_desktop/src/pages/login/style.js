import styled from 'styled-components';

export const Container = styled.div `
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
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