const palindromes = function (input) {
  const cleanString = input.toLowerCase().replace(/[^a-z]/g, "");
  return (
    cleanString
      .split("")
      .reverse()
      .join("") == cleanString
  );
};

// Do not edit below this line
module.exports = palindromes;
