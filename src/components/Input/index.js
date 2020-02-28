import React from 'react';
import styled from 'styled-components';

const Range = styled.input`
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

const Input = () => (
  <Range onChange={e => this.handleChange(this.state.border.topLeft, this.state.border.topRight, this.state.border.bottomLeft, e.target.value)} type="range" min="1" max="100"/>
);

export default Input;
