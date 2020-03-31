import React from "react";
import Square from "../square/square";
import { useDispatch } from "react-redux";

const FallenFigures = ({ figures }) => {
  const dispatch = useDispatch();
  const isEmpty = Object.keys(figures).length === 0;
  const lines = Object.entries(figures);

  return (
    <>
      {isEmpty
        ? null
        : lines.map(line =>
            line[1].map((item, i) => (
              <Square key={i} x={item.x} y={+line[0]} color={item.color} />
            ))
          )}
    </>
  );
};

export default React.memo(FallenFigures);
