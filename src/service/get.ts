export const getPuzzles = async () => {
  const response = await fetch('./local-data.json')  
  const results = await response.json();
  // return results[ Math.round(Math.random() * (results.length - 1))]; 
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(results[ Math.round(Math.random() * (results.length - 1))]);
    }, 1500);
  });
}
