import {
  findAdjacent,
  getRemainingTime,
  generateTimer,
  IGenerateTimer,
} from "../helper";
import { IPuzzleData, IPuzzle } from "../IShare";

describe("[helper]", () => {
  let data: IPuzzleData[][] = [];
  beforeEach(() => {
    data = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, -1],
    ];
  });

  afterEach(() => {
    data = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, -1],
    ];
  });

  describe("[findAdjacent]", () => {
    test("find 1 adjacent", () => {
      const result = findAdjacent(data, 1, 1);
      expect((result[1][1] as IPuzzle).value).toEqual(1);
    });
  });

  describe("[getRemainingTime]", () => {
    test("should return 0 remaining menute", () => {
      const currentTime = Date.now();
      const totalTime = 1000 * 60 * 20;
      const result: number = getRemainingTime(
        currentTime - totalTime,
        currentTime,
        totalTime
      );

      expect(result).toEqual(0);
    });
  });

  describe("[generateTimer]", () => {
    test("should return 0 minute", () => {
      const currentTime = Date.now();
      const totalTime = 1000 * 60 * 20;
      const result: IGenerateTimer = generateTimer(
        currentTime - totalTime,
        currentTime,
        totalTime
      );

      expect(result.minutes).toEqual(0);
      expect(result.seconds).toEqual(0);
      expect(result.remainingTime).toEqual(0);
    });
  });
});
