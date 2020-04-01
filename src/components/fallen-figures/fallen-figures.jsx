import React from "react";
import Square from "../square/square";
import PropTypes from "prop-types";

const FallenFigures = ({ figures }) => {
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

FallenFigures.propTypes = {
  figures: PropTypes.object
};
FallenFigures.defaultProps = {
  figures: {}
};

export default React.memo(FallenFigures);
