import styled from "styled-components";

export const StartWindowWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  width: 400px;
  height: 200px;
  margin-top: calc(50vh - 100px);
`;

export const StartWindowHeader = styled.h1`
  font-size: 20px;
  margin: 0 0 20px 0;
  color: #fff;
`;

export const StartWindowInput = styled.input.attrs({
  type: "text",
  placeholder: "Введите имя",
})`
  padding: 5px 10px;
  vertical-align: top;
  text-align: center;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  background: none;
  color: #fff;
  border: none;
  border-bottom: 1px solid #fff;
  margin: 0 0 20px 0;
`;

export const StartWindowButton = styled(StartWindowInput)`
  font-size: 14px;
  border: 2px solid #fff;

  &:hover {
    cursor: pointer;
  }
`;

export const TableWrapper = styled.div`
  display: ${(props) => (props.isDisplayed ? "flex" : "none")};
  flex-flow: row nowrap;
  min-width: ${(props) => 20 * props.width}px;
  width: ${(props) => 20 * props.width}px;
  height: ${(props) => 20 * props.width}px;
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid black;
`;

export const PlayingFieldWrapper = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid black;
  outline: none;
`;

export const CenterSideWrapper = styled(PlayingFieldWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 80px;
  font-weight: bold;
`;

export const SideWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 25%;
  height: 100%;
`;

export const SideHeader = styled.h1`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const SideText = styled(SideHeader)`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const FigureWrapper = styled.div`
  position: relative;
  width: ${({ startWidth, width }) => startWidth * width}px;
  height: ${({ startHeight, width }) => startHeight * width}px;
`;

export const SquareWrapper = styled.div.attrs(({ x, y, color, width }) => ({
  style: {
    left: `${width * x}px`,
    top: `${width * y}px`,
    backgroundColor: color,
  },
}))`
  position: absolute;
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.9);
`;
