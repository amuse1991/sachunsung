import path from "../../../src/lib/gamePath";

describe("gamePath", () => {
  context("hasPath ", () => {
    it.skip("4방향을 탐색해 진행 가능한 방향이 있으면, 해당 방향으로 move를 다시 호출한다.", () => {
      const spy = cy.spy(path, "hasPath");
      const board = [
        [2, 2, 1, 2],
        [2, 1, 0, 2],
        [2, 2, 2, 2]
      ];
      const srcPoint = {
        x: 1,
        y: 1
      };
      const destPoint = {
        x: 2,
        y: 0
      };

      spy({ board, srcPoint, destPoint });
      expect(spy).to.have.callCount(2);
    });

    it.skip("값을 찾은 경우 true를 반환한다.", () => {
      const board = [
        [2, 2, 1, 2],
        [2, 1, 0, 2],
        [2, 2, 2, 2]
      ];
      const srcPoint = {
        x: 1,
        y: 1
      };
      const destPoint = {
        x: 2,
        y: 0
      };

      const res = path.hasPath({ board, srcPoint, destPoint });
      expect(res).to.be.true;
    });

    it("탐색 가능한 방향이 없으면 반환값 없이 return 한다.", () => {
      const board = [
        [2, 2, 2, 1],
        [2, 1, 0, 2],
        [2, 2, 2, 2]
      ];
      const srcPoint = {
        x: 1,
        y: 1
      };
      const destPoint = {
        x: 3,
        y: 0
      };

      const res = path.hasPath({ board, srcPoint, destPoint });
      expect(res).to.be.undefined;
    });
  });
});
