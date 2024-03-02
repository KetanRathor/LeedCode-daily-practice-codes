var romanToInt = function(s) {
    let num = 0;
  let obj = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] < obj[s[i + 1]]) {
      num = num + obj[s[i + 1]] - obj[s[i]];
      i++;
    } else {
      num = num + obj[s[i]];
    }
  }
  return num;
};
