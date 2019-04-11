import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

const Spinner = styled.div`
  font-size: 2rem;
  top: 50%;
  z-index: 1;
  opacity: 1;
  background-color: transparent;
  color: #ecd018;
  position: absolute;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: 2;
  animation-iteration-count: infinite;

  @keyframes example {
    0% {
      left: 0px;
    }
    100% {
      left: 100%;
    }
  }
`;

export default class Loading extends Component {
  render() {
    return (
      <Spinner>
        <FontAwesomeIcon icon={faPlane} />
      </Spinner>
    );
  }
}
