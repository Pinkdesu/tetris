import React, { useContext } from "react";
import PropTypes from "prop-types";
import { TableContext } from "../table/table";
import styled from "styled-components";

const SquareWrapper = styled.div.attrs(({ x, y, color, width }) => ({
  style: {
    left: `${width * x}px`,
    top: `${width * y}px`,
    backgroundColor: color
  }
}))`
  position: absolute;
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.9);
`;

const Square = ({ color, x, y }) => {
  const { width } = useContext(TableContext);
  return <SquareWrapper width={width} x={x} y={y} color={color} />;
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
