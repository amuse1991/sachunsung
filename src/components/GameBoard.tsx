import { nanoid } from "nanoid";
import { useState } from "react";
import styled from "styled-components";
import { Nullable } from "../types/Nullable";
import { TPoint } from "../types/TPoint";
import Card from "./Card";

type GameBoardProps = {
  board: (number | number[])[][];
};

const GameBoard: React.FC<GameBoardProps> = ({ board }) => {
  const [point1, setPoint1] = useState<Nullable<TPoint>>(null);
  const [point2, setPoint2] = useState<Nullable<TPoint>>(null);
  const onClick = (point: TPoint) => {
    if (point1 === null) {
      console.log("set point1", point);
      setPoint1(point);
    } else if (point2 === null) {
      setPoint2(point);
      console.log("set point2", point);
      // check path and remove
      setPoint1(null);
      setPoint2(null);
    }
  };

  return (
    <Container>
      {board.map((col, y) =>
        col.map(
          (value, x) =>
            !Array.isArray(value) &&
            value > 0 && (
              <Card
                imgPath={`/images/card${value}.png`}
                key={nanoid()}
                onClick={onClick}
                x={x}
                y={y}
                num={value}
              />
            )
        )
      )}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
`;
// const Card = styled.img`
//   cursor: pointer;
// `;

export default GameBoard;
