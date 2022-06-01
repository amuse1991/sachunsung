import { useEffect, useState } from "react";
import { TPoint } from "../types/TPoint";

const MAX_CARD_NUM = 36;
const MIN_CARD_NUM = 1;

const createRandomValues = () =>
  Math.floor(Math.random() * (MAX_CARD_NUM - MIN_CARD_NUM + 1)) + MIN_CARD_NUM;
const shuffle = (unshuffleds: number[]) =>
  unshuffleds
    .map(val => ({ value: val, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

export const useGameBoard = (n: number, m: number) => {
  const [board, setBoard] = useState<(number | number[] | null)[][]>([[]]);

  const createBoard = () => {
    // n * m 크키 TCard 배열 생성
    const radnomValues = Array.from({ length: (n * m) / 2 }, () =>
      createRandomValues()
    );
    const cardValues = shuffle([...radnomValues, ...radnomValues]);
    const newBoard = Array(m + 2)
      .fill(0)
      .map((_, idx) => {
        if (idx === 0 || idx === m + 1) return Array(n + 2).fill(0);
        return [0, ...cardValues.slice(idx * n - 10, idx * n), 0];
      });

    setBoard(newBoard);
  };

  const removeCards = (p1: TPoint, p2: TPoint) => {
    if (!board) {
      throw new Error("게임이 시작되지 않았습니다.");
    }

    if (board[p1.x][p1.y] !== board[p2.x][p2.y]) {
      throw new Error("두 카드가 일치하지 않습니다.");
    }

    setBoard(prev => {
      if (!prev) return prev;
      const next = [...prev];
      next[p1.x][p1.y] = 0;
      next[p2.x][p2.y] = 0;
      return next;
    });
  };

  return { board, createBoard, removeCards };
};
