import { nanoid } from "nanoid";
import { useState } from "react";
import styled, { css } from "styled-components";
import { Nullable } from "../types/Nullable";
import { TPoint } from "../types/TPoint";

type GameBoardProps = {
  board: (number | number[])[][];
};

const GameBoard: React.FC<GameBoardProps> = ({ board }) => {
  const [point1, setPoint1] = useState<Nullable<TPoint>>(null);
  const [point2, setPoint2] = useState<Nullable<TPoint>>(null);
  const onClick = (point: TPoint) => {};

  return (
    <Container>
      {board.map(line =>
        line.map(
          value =>
            !Array.isArray(value) &&
            value > 0 && (
              <Card
                src={`/images/card${value}.png`}
                alt={`card number ${value}`}
                key={nanoid()}
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
const Card = styled.img`
  cursor: pointer;
`;

export default GameBoard;
