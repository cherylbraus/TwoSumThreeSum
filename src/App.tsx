import "./styles.css";

const tests = [
  [[1, 2, 3, 4, 5], 5],
  [[10, 2, 9, 8, 16, 4, 5, 1], 10],
  [[1, 2, 3, 6], 10]
];

// Given an array "numbers" & number "target",
// return 2 numbers with the sum equal to target
// Return -1 if no numbers sum equal to target

const twoSum = ([numbers, target]: any): string => {
  const length = numbers.length;
  let comboNumbers = [];

  numbers.forEach((d, i) => {
    for (let ind = i + 1; ind < length; ind++) {
      // check if seed value equals total with one other single number
      if (numbers[i] + numbers[ind] === target) {
        comboNumbers.push([numbers[i], numbers[ind]]);
      }

      // check if seed value equals total with two other numbers
      if (ind < length - 1) {
        for (let indTwo = ind + 1; indTwo < length; indTwo++) {
          if (numbers[i] + numbers[ind] + numbers[indTwo] === target) {
            comboNumbers.push([numbers[i], numbers[ind], numbers[indTwo]]);
          }
        }
      }
    }
  });

  if (comboNumbers.length > 0) {
    let finalString = [];
    comboNumbers.forEach((p, i) => {
      finalString.push(p.join(" + "));
    });
    return `${finalString.join(" or ")} = ${target}`;
  } else {
    return `None added up to ${target}!`;
  }
};

export default function App() {
  return (
    <div className="App">
      {tests.map((i) => (
        <p>{twoSum(i)}</p>
      ))}
    </div>
  );
}
