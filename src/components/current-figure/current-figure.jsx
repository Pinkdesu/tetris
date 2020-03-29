import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Square from "../square/square";
import { useDispatch } from "react-redux";
import { moveDown } from "../../actions/actions";

const CurrentFigure = ({ figure, speed }) => {
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     let timerId = setTimeout(function tick() {
  //       dispatch(moveDown());
  //       timerId = setTimeout(tick, speed);
  //     }, speed);
  //   }, [dispatch, speed]);

  return (
    <>
      {!figure.isEmpty
        ? figure.coords.map((item, index) => (
            <Square key={index} color={figure.color} x={item.x} y={item.y} />
          ))
        : null}
    </>
  );
};

CurrentFigure.propTypes = {
  figure: PropTypes.object,
  speed: PropTypes.number
};

CurrentFigure.defaultProps = {
  figure: {},
  speed: 1000
};

export default CurrentFigure;
