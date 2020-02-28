import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  background: white;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 500px;
  height: 500px;
  background: #CCC;
`;

function App() {
  return (
    <Content>
      <Box/>
      <div className="slidecontainer">
        <input type="range" min="1" max="100" value="50" className="slider" id="myRange"/>
        <p>Value: <span id="demo"></span></p>
      </div>
    </Content>
  );
}

export default App;
