import React from "react";
import PropTypes from "prop-types";
import Square from "../square/square";

const CurrentFigure = ({ figure }) => {
  return (
    <>
      {figure.isEmpty
        ? null
        : figure.coords.map((item, index) => (
            <Square key={index} color={figure.color} x={item.x} y={item.y} />
          ))}
    </>
  );
};

CurrentFigure.propTypes = {
  figure: PropTypes.object
};

CurrentFigure.defaultProps = {
  figure: {}
};

export default CurrentFigure;
