import styled from 'styled-components';

export const ButtonFeedback = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 4px;
  cursor: pointer;

  &:first-letter {
    text-transform: uppercase;
}

  &:not(:last-child) {
    margin-right: 10px;
  }

  :not(:active) {
    transition: background-color 300ms step-end;
}

  &:active {
    background-color: #add8e6;
  }

`;
