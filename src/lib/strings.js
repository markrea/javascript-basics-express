const sayHello = string => {
  return `Hello, ${string}!`;
};

const uppercase = string => {
  return string.toUpperCase();
};

const lowercase = string => {
  return string.toLowerCase();
};

const countCharacters = string => {
  return string.length;
};

const firstCharacter = string => {
  return string.charAt(0);
};

const firstCharacters = (string, n) => {
  const charList = [];

  for (let i = 0; i < n; i++){
    charList.push(string.charAt(i));
  }
  return charList.join('');
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
