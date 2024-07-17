export const generateRandomClipPaths = () => {
  const number = Math.floor(Math.random() * 60);
  const points = [];
  let x = 0;
  let y = 0;

  for (let i = 0; i < number; i++) {
    // Alternate between x and y
    if (i % 2) {
      x = Math.floor(Math.random() * 100);
    } else {
      y = Math.floor(Math.random() * 100);
    }

    points.push(`${x}% ${y}%`);
  }

  // target.style.setProperty("--path", `polygon(${points.join(",")})`);

  console.log(`clip-path: polygon(${points});`);
  return `clip-path: polygon(${points})`
}

export const sleep = async (ms: number): Promise<unknown> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};