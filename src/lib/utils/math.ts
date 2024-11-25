export const romanize = (num) => {
  const lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
  let roman = ''
  for (let i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

export const pick = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}

export const weightedPick = (array, weightSelector) => {
  let totalWeight = array.reduce((acc, item) => acc + weightSelector(item), 0)
  let random = Math.random() * totalWeight
  for (let item of array) {
    random -= weightSelector(item)
    if (random <= 0) {
      return item
    }
  }
}

export const randomRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function clamp(input: number, min: number, max: number): number {
  return input < min ? min : input > max ? max : input;
}

export function map(current: number, in_min: number, in_max: number, out_min: number, out_max: number): number {
  const mapped: number = ((current - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  return clamp(mapped, out_min, out_max);
}