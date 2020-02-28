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
  background: #e91e63;
  border-radius: ${props => props.borderAll || "350"}px;
`;

const Properties = styled.div`
  width: 300px;
  min-height: 300px;
  border: 1px solid #e5e5e5;
`;

const Input = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;

  :hover {
    opacity: 1;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4CAF50;
    cursor: pointer;
  }

  ::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4CAF50;
    cursor: pointer;
}
`;

const InputLabel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    width: 30px;
    height: 30px;
  }
`;

class App extends React.Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      borderAll: 30
    };
  }

  handleChange(event) {
    this.setState({borderAll: event.target.value});
  }

  render() {
    return (
      <Content>
        <Properties>
        <InputLabel>
            <span>All Corners</span>
            <div>
              <input type="text" placeholder={this.state.borderAll}/>
              <span>px</span>
            </div>
          </InputLabel>
          <Input onChange={this.handleChange} type="range" min="1" max="100"/>
          <InputLabel>
            <span>Top Left</span>
            <div>
              <input type="text" placeholder={this.state.borderAll}/>
              <span>px</span>
            </div>
          </InputLabel>
          <Input onChange={this.handleChange} type="range" min="1" max="100"/>
          <InputLabel>
            <span>Top Right</span>
            <div>
              <input type="text" placeholder={this.state.borderAll}/>
              <span>px</span>
            </div>
          </InputLabel>
          <Input onChange={this.handleChange} type="range" min="1" max="100"/>
          <InputLabel>
            <span>Bottom Left</span>
            <div>
              <input type="text" placeholder={this.state.borderAll}/>
              <span>px</span>
            </div>
          </InputLabel>
          <Input onChange={this.handleChange} type="range" min="1" max="100"/>
          <InputLabel>
            <span>Bottom Right</span>
            <div>
              <input type="text" placeholder={this.state.borderAll}/>
              <span>px</span>
            </div>
          </InputLabel>
          <Input onChange={this.handleChange} type="range" min="1" max="100"/>
        </Properties>
        <Box borderAll={this.state.borderAll}/>
      </Content>
    );
  }
}

export default App;
