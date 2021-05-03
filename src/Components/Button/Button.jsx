import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import BaseButton from "./BaseButton";

const ButtonComponent = styled(BaseButton)`
  padding: 10px 15px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 14px;
  text-transform: capitalize;
  ${props =>
    props.color === "primary"
      ? css`
          background-color: ${props.theme.palette.primary.main};
          color: #fff;
          border: 1px solid ${props.theme.palette.primary.main};
        `
      : props.color === "secondary"
      ? css`
          background-color: ${props.theme.palette.secondary.main};
          color: #fff;
          border: 1px solid ${props.theme.palette.secondary.main};
        `
      : props.color === "primary_bordered"
      ? css`
          background-color: #fff;
          color: ${props.theme.color.mainText};
          border: 1px solid ${props.theme.palette.primary.main};
        `
      : props.color === "secondary_bordered"
      ? css`
          background-color: #fff;
          color: ${props.theme.color.mainText};
          border: 1px solid ${props.theme.palette.secondary.main};
        `
      : props.color === "primary_transparent"
      ? css`
          background-color: transparent;
          color: ${props.theme.color.mainText};
          border: 1px solid ${props.theme.palette.primary.main};
        `
      : props.color === "secondary_transparent" &&
        css`
          background-color: transparent;
          color: ${props.theme.color.mainText};
          border: 1px solid ${props.theme.palette.secondary.main};
        `};
  ${props =>
    props.disabled &&
    css`
      background-color: #e5e9f2;
      color: #8492a6;
      border: 1px solid #e5e9f2;
      cursor: auto;
    `};
`;

export default function Button(props) {
  return <ButtonComponent {...props} />;
}

Button.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "primary_bordered",
    "secondary_bordered",
    "primary_transparent",
    "secondary_transparent",
  ]).isRequired,
};
