import React, { useEffect } from "react";
import Square from "../square/square";
import { useDispatch } from "react-redux";
import { moveDown } from "../../actions/actions";

const CurrentFigure = ({ figure, speed }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // let timerId = setTimeout(function tick() {
    //   dispatch(moveDown());
    //   timerId = setTimeout(tick, speed);
    // }, speed);
  }, [dispatch, speed]);

  return (
    <>
      {figure.coords.map(item => (
        <Square color={figure.color} x={item.x} y={item.y} />
      ))}
    </>
  );
};

export default CurrentFigure;
