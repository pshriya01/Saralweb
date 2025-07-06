function isLetter(char) {
  return (char >= "A" && char <= "Z") || (char >= "a" && char <= "z");
}

function isDigit(char) {
  return char >= "0" && char <= "9";
}

function isValidCode(code) {
  if (code.length !== 7) return false;

  // Check first 3 are letters
  for (let i = 0; i < 3; i++) {
    if (!isLetter(code[i])) return false;
  }

  // Check last 4 are digits
  for (let i = 3; i < 7; i++) {
    if (!isDigit(code[i])) return false;
  }

  return true;
}

function normalizeCode(code) {
  return code.slice(0, 3).toUpperCase() + code.slice(3);
}

function processData(data) {
  let validCodes = [];
  let invalidCount = 0;

  for (const code of data) {
    if (isValidCode(code)) {
      validCodes.push(normalizeCode(code));
    } else {
      invalidCount++;
    }
  }

  validCodes.sort(); // sort alphabetically

  return {
    totalCodes: data.length,
    validCodes: validCodes.length,
    invalidCodes: invalidCount,
    normalizedValidCodes: validCodes,
  };
}

module.exports = { processData };
