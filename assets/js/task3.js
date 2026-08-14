function findVowels(str) {
  const vowels = "AEIOU";
  let res = 0;
  str = str.toUpperCase();
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      res += 1;
    }
  }
  return res;
}
