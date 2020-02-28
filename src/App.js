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

  border-radius: ${props => props.borderTopLeft || "50"}px ${props => props.borderTopRight || "50"}px ${props => props.borderBottomLeft || "50"}px ${props => props.borderBottomRight || "50"}px;
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
        all: 50,
        topLeft: 50,
        topRight: 50,
        bottomLeft: 50,
        bottomRight: 50
      }
    };
  }

  handleChange(name, value) {
    if (name === 'all') {
      this.setState({ border: { all: value } });
    } else if (name === 'topLeft') {
      this.setState({ border: { topLeft: value } });
    } else if (name === 'topRight') {
      this.setState({ border: { topRight: value } });
    } else if (name === 'bottomLeft') {
      this.setState({ border: { bottomLeft: value } });
    } else if (name === 'bottomRight') {
      this.setState({ border: { bottomRight: value } });
    }
  }

  render() {
    console.log('all: ', this.state.border.all);
    console.log('topLeft: ', this.state.border.topLeft);
    console.log('topRight: ', this.state.border.topRight);
    console.log('bottomLeft: ', this.state.border.bottomLeft);
    console.log('bottomRight: ', this.state.border.bottomRight);

    return (
      <Content>
        <Properties>
          <InputLabel label="All Corners" placeholder={this.state.border.all}/>
          <Input onChange={e => this.handleChange('all', e.target.value)} type="range" min="1" max="100"/>
          <InputLabel label="Top Left" placeholder={this.state.border.topLeft}/>
          <Input onChange={e => this.handleChange('topLeft', e.target.value)} type="range" min="1" max="100"/>
          <InputLabel label="Top Right" placeholder={this.state.border.topRight}/>
          <Input onChange={e => this.handleChange('topRight', e.target.value)} type="range" min="1" max="100"/>
          <InputLabel label="Bottom Left" placeholder={this.state.border.bottomLeft}/>
          <Input onChange={e => this.handleChange('bottomLeft', e.target.value)} type="range" min="1" max="100"/>
          <InputLabel label="Bottom Right" placeholder={this.state.border.bottomRight}/>
          <Input onChange={e => this.handleChange('bottomRight', e.target.value)} type="range" min="1" max="100"/>
        </Properties>
        <Box borderTopLeft={this.state.border.topLeft} borderTopRight={this.state.border.topRight} borderBottomLeft={this.state.border.bottomLeft} borderBottomRight={this.state.border.bottomRight}/>
      </Content>
    );
  }
}

export default App;
