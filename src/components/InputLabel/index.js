import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  width: 100%;
  display: flex;
  margin: 10px 0;
  align-items: center;
  justify-content: space-between;

  input {
    padding: 0;
    width: 25px;
    height: 25px;
    text-align: center;
  }

  span {
    margin-left: 5px;
  }
`;

const InputLabel = (props) => (
  <Content>
    <span>{props.label}</span>
    <div>
      <input type="text" placeholder={props.placeholder}/>
      <span>px</span>
    </div>
  </Content>
);

export default InputLabel;
