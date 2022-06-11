import { IPuzzleData } from "../commons/IShare";

export const localStorageKeyName = "savedMineSweeperGame";

export const getPuzzles = async (): Promise<IPuzzleData[][]> => {
  const data = window.localStorage.getItem(localStorageKeyName);

  let results: IPuzzleData[][][] = [];
  if (data && data !== "") {
    results = [JSON.parse(data)];
  } else {
    const response = await fetch("./local-data.json");
    results = await response.json();
  }

  // return results[ Math.round(Math.random() * (results.length - 1))];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(results[Math.round(Math.random() * (results.length - 1))]);
    }, 3500);
  });
};
