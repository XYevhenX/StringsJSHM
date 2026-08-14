const stringsHref = [
  `http://example.com`,
  `https://openai.com`,
  `ftp://website.com`,
  `http://google.com`,
  `https://stackoverflow.com`,
  `http://github.com`,
  `http://youtube.com`,
  `https://wikipedia.org`,
  `ftp://server.net`,
  `http://facebook.com`,
  `https://amazon.com`,
  `http://twitter.com`,
  `https://linkedin.com`,
  `ftp://host.com`,
  `http://reddit.com`,
  `https://medium.com`,
];

function unSafe(arr) {
  const notSafe = [`http://`, `ftp://`];

  return arr.filter((link) =>
    notSafe.some((elem) => link.toLowerCase().startsWith(elem)),
  );
}

console.log(unSafe(stringsHref));
