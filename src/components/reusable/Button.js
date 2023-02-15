import React from "react";
import styled from "styled-components";

export default function Button({ children, style, animation }) {
  return (
    <BTN className="slide" style={style} animation={animation}>
      {children}
    </BTN>
  );
}

const BTN = styled.button`
  outline: none;
  font-size:18px;
  border: 1px solid;
  border-radius:7px;
  text-transform: uppercase;
  padding: 15px;
  background-color:rgb(92, 92, 61);
  color: white;
  cursor: pointer;
  animation: ${(props) => props.animation};
  animation-duration: 2s;
`;
