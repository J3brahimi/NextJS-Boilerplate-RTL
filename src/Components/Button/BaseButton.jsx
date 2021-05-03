import styled from "styled-components";

const BaseButton = styled.button`
  border: none;
  font-size: 100%;
  text-align: center;
  outline: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export default BaseButton;
