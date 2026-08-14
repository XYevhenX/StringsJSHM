function censorFirstLetter(text) {
  let temp = text.split(" ");
  return temp.map((elem) => "*" + elem.slice(1)).join(" ");
}
