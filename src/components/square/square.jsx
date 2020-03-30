import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SquareWrapper = styled.div.attrs(props => ({
  style: {
    left: `${props.x}px`,
    top: `${props.y}px`,
    backgroundColor: props.color
  }
}))`
  position: absolute;
  width: 40px;
  height: 40px;
`;

const Square = ({ color, x, y }) => {
  return <SquareWrapper x={x} y={y} color={color} />;
};

Square.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  color: PropTypes.string
};
Square.defaultProps = {
  x: 0,
  y: 0,
  color: "red"
};

export default Square;
