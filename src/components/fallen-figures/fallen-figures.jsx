import React from "react";
import Square from "../square/square";
import { useDispatch, useSelector } from "react-redux";

const FallenFigures = () => {
  const fallenFigures = useSelector(state => state.fallenFigures);

  return (
    <>
      {fallenFigures.length === 0
        ? null
        : fallenFigures.map((figure, index) => (
            <Square
              key={index}
              color={figure.color}
              x={figure.x}
              y={figure.y}
            />
          ))}
    </>
  );
};

export default FallenFigures;
