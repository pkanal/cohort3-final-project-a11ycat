import styled, { css } from 'styled-components';
import { variables } from './variables';
import React, { Component } from 'react';

const StyledToast = styled.div`
  position: fixed;
  top: 2em;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 600px;
  min-width: 320px;
  border-radius: ${variables.button.borderRadius};
  padding: 25px 20px 25px 70px;
  line-height: 1.5;
  background: ${variables.colour.paleGrey};
  color: ${variables.colour.offBlack};
  box-shadow: 4px 4px 12px ${variables.colour.lightGrey};

  &:before {
    color: white;
    height: 50px;
    width: 50px;
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 30px;
    padding: 3px 3px 2px 3px;
    border-radius: ${variables.circle};
  }

  ${props =>
    props.state === 'success' &&
    css`
      &:before {
        background: #6cd577;
        background: linear-gradient(to bottom right, #6cd577, #b6eec9);
        content: '✔';
      }
    `} ${props =>
    props.state === 'error' &&
    css`
      &:before {
        background: #eb6773;
        background: linear-gradient(to bottom right, #eb6773, #f3b2ba);
        content: '✘';
      }
    `};
`;

export const Toast = props => {
  return <StyledToast state={props.state}>{props.message}</StyledToast>;
};
