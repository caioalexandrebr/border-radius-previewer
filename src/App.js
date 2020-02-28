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

  border-radius: ${props => props.borderTopLeft || "50"}px ${props => props.borderTopRight || "50"}px ${props => props.borderBottomLeft || "50"}px ${props => props.borderBottomRight || "50"}px;
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
      border: {
        topLeft: 50,
        topRight: 50,
        bottomLeft: 50,
        bottomRight: 50
      }
    };
  }

  handleChange(name, value) {
    if (name === 'all') {
      this.setState({border: {topLeft: value, topRight: value, bottomLeft: value, bottomRight: value}});
    } else if (name === 'topLeft') {
      this.setState({border: {topLeft: value}});
    }
  }

  render() {
    console.log('topLeft: ', this.state.border.topLeft);
    console.log('topRight: ', this.state.border.topRight);
    console.log('bottomLeft: ', this.state.border.bottomLeft);
    console.log('bottomRight: ', this.state.border.bottomRight);
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
          <Input onChange={e => this.handleChange('all', e.target.value)} type="range" min="1" max="100"/>
          <Input onChange={e => this.handleChange('topLeft', e.target.value)} type="range" min="1" max="100"/>
          <Input onChange={e => this.handleChange('all', e.target.value)} type="range" min="1" max="100"/>
          <Input onChange={e => this.handleChange('all', e.target.value)} type="range" min="1" max="100"/>
        </Properties>
        <Box borderTopLeft={this.state.border.topLeft} borderTopRight={this.state.border.topRight} borderBottomLeft={this.state.border.bottomLeft} borderBottomRight={this.state.border.bottomRight}/>
      </Content>
    );
  }
}

export default App;
