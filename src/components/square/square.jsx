import React from "react";
import styled from "styled-components";

const SquareWrapper = styled.div`
  position: absolute;
  left: ${props => props.x + "px"};
  top: ${props => props.y + "px"};
  width: 40px;
  height: 40px;
  background-color: ${props => props.color};
`;

const Square = ({ color, x, y }) => {
  return <SquareWrapper x={x} y={y} color={color} />;
};

export default Square;
