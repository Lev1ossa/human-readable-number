module.exports = function toReadable (number) {

  const strNumber = String(number);

  const units = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };
  const tens = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  };

  if (number == 0) {
    return 'zero';
  } else if (number < 20) {
    return units[number];
  } else if (strNumber.length == 3 && strNumber.slice(1) < 20) {
    return `${units[strNumber[0]]} hundred ${units[+strNumber.slice(1)]}`.trim();
  } else {
    if (strNumber.length == 1) {
      return units[number];
    } else if (strNumber.length == 2) {
      return `${tens[strNumber[0]]} ${units[strNumber[1]]}`.trim();
    } else if (strNumber.length == 3) {
      return `${units[strNumber[0]]} hundred ${tens[strNumber[1]]} ${units[strNumber[2]]}`.trim();
    } else {
      return 'Error';
    }
  }
}
