import { Nullable } from "../types/Nullable";
import { TPoint } from "../types/TPoint";

const DIRECTION = {
  UP: 0,
  DOWN: 1,
  LEFT: 2,
  RIGHT: 3
};

export type THasPathParams = {
  board: (number | number[])[][];
  srcPoint: TPoint;
  destPoint: TPoint;
  __curPoint: TPoint;
  __prevDir?: number;
  __curve?: number;
};

const hasPath = (params: THasPathParams) => {
  // debugger;
  const { board, srcPoint, destPoint, __curPoint, __prevDir, __curve } = params;
  const curPoint = __curPoint || srcPoint;
  const curve = __curve || 0;

  let { x, y } = curPoint;
  const { x: sx, y: sy } = srcPoint;
  const { x: dx, y: dy } = destPoint;

  if (x === dx && y === dy && board[y][x] === board[sy][sx]) {
    console.log("ok, find");
    return true;
  }

  if (curve > 2) return;

  if (y - 1 >= 0) {
    const nextVal = board[y - 1][x];
    if (nextVal === 0 || nextVal === board[sy][sx]) {
      console.log("up", "curve", curve);
      return hasPath({
        ...params,
        __curPoint: { x, y: y - 1 },
        __prevDir: DIRECTION.UP,
        __curve: __prevDir === DIRECTION.UP ? curve : curve + 1
      });
    }
  }
  if (y + 1 < board.length) {
    const nextVal = board[y + 1][x];
    if (nextVal === 0 || nextVal === board[sy][sx]) {
      console.log("down", "curve", curve);
      return hasPath({
        ...params,
        __curPoint: { x, y: y + 1 },
        __prevDir: DIRECTION.DOWN,
        __curve: __prevDir === DIRECTION.DOWN ? curve : curve + 1
      });
    }
  }
  if (x - 1 >= 0) {
    // debugger;
    const nextVal = board[y][x - 1];
    if (nextVal === 0 || nextVal === board[sy][sx]) {
      console.log("left", "curve", curve);
      return hasPath({
        ...params,
        __curPoint: { x: x - 1, y },
        __prevDir: DIRECTION.LEFT,
        __curve: __prevDir === DIRECTION.LEFT ? curve : curve + 1
      });
    }
  }
  if (x + 1 < board[0].length) {
    // debugger;
    const nextVal = board[y][x + 1];
    if (nextVal === 0 || nextVal === board[sy][sx]) {
      console.log("right", "curve", curve);
      return hasPath({
        ...params,
        __curPoint: { x: x + 1, y },
        __prevDir: DIRECTION.RIGHT,
        __curve: __prevDir === DIRECTION.RIGHT ? curve : curve + 1
      });
    }
  }
};

export default { hasPath };
