import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Square from "../square/square";

const NextFigureWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 25%;
  height: 100%;
`;

const Header = styled.h1`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const FigureWrapper = styled.div`
  position: relative;
  width: ${({ startWidth, width }) => startWidth * width}px;
  height: ${({ startHeight, width }) => startHeight * width}px;
`;

const NextFigure = ({ nextFigure, width }) => {
  return (
    <NextFigureWrapper>
      <Header>Next figure</Header>
      <FigureWrapper
        width={width}
        startWidth={nextFigure.startWidth}
        startHeight={nextFigure.startHeight}
      >
        {nextFigure.isEmpty
          ? null
          : nextFigure.startCoords.map((item, index) => (
              <Square
                key={index}
                color={nextFigure.color}
                x={item.x}
                y={item.y}
              />
            ))}
      </FigureWrapper>
    </NextFigureWrapper>
  );
};

NextFigure.propTypes = {
  figure: PropTypes.object,
  width: PropTypes.number
};

NextFigure.defaultProps = {
  figure: {},
  width: 40
};

export default NextFigure;
