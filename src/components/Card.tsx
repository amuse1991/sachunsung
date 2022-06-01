import styled from "styled-components";
import { TPoint } from "../types/TPoint";

type TCardProps = TPoint & {
  imgPath: string;
  onClick: (point: TPoint) => void;
  highlight?: boolean;
};

const Card: React.FC<TCardProps> = ({ x, y, num, imgPath, onClick }) => {
  return (
    <Container>
      <img
        src={imgPath}
        alt={`card${num}`}
        onClick={() => onClick({ x, y, num })}
      />
    </Container>
  );
};

const Container = styled.div`
  cursor: pointer;
`;

export default Card;
