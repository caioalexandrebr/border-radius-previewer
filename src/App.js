import React from 'react';
import styled from 'styled-components';

import InputLabel from './components/InputLabel';

const Content = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  background: white;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 350px;
  height: 350px;
  background: #e91e63;
  border-top-left-radius: ${props => props.border.topLeft}px;
  border-top-right-radius: ${props => props.border.topRight}px;
  border-bottom-left-radius: ${props => props.border.bottomLeft}px;
  border-bottom-right-radius: ${props => props.border.bottomRight}px;
`;

const Properties = styled.div`
  width: 290px;
  padding: 30px;
  margin: 0 30px;
  border-radius: 5px;
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
    background: #e91e63;
    cursor: pointer;
  }

  ::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #e91e63;
    cursor: pointer;
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

  handleChange(topLeft, topRight, bottomLeft, bottomRight) {
    this.setState({ border: { topLeft: topLeft, topRight: topRight, bottomLeft: bottomLeft, bottomRight: bottomRight } });
  }

  render() {
    return (
      <Content>
        <Properties>
          <InputLabel label="All Corners" placeholder={this.state.border.topLeft}/>
          <Input onChange={e => this.handleChange(e.target.value, e.target.value, e.target.value, e.target.value)} type="range" min="1" max="100"/>
          
          <InputLabel label="Top Left" placeholder={this.state.border.topLeft}/>
          <Input onChange={e => this.handleChange(e.target.value, this.state.border.topRight, this.state.border.bottomLeft, this.state.border.bottomRight)} type="range" min="1" max="100"/>
          
          <InputLabel label="Top Right" placeholder={this.state.border.topRight}/>
          <Input onChange={e => this.handleChange(this.state.border.topLeft, e.target.value, this.state.border.bottomLeft, this.state.border.bottomRight)} type="range" min="1" max="100"/>
          
          <InputLabel label="Bottom Left" placeholder={this.state.border.bottomLeft}/>
          <Input onChange={e => this.handleChange(this.state.border.topLeft, this.state.border.topRight, e.target.value, this.state.border.bottomRight)} type="range" min="1" max="100"/>
          
          <InputLabel label="Bottom Right" placeholder={this.state.border.bottomRight}/>
          <Input onChange={e => this.handleChange(this.state.border.topLeft, this.state.border.topRight, this.state.border.bottomLeft, e.target.value)} type="range" min="1" max="100"/>
        </Properties>
        <Box border={this.state.border}/>
      </Content>
    );
  }
}

export default App;
