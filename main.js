var low = {
  apastrophe: {
    mask: function (payload) {
      return payload.toString().split("'").join("%EF%BC%87");
    },
    nullEncode: function (payload) {
      return payload.toString().split("'").join("%00%27");
    },
  },
  addNullByte: function (payload) {
    return payload + "%00";
  },
  toBase64: function (payload) {
    return window.atob(payload);
  },
};
var norm = {
  blankSpace: function (payload) {
    return payload.toString().split(" ").join("%09");
  },
};
var high = {
  repBetw: function (payload) {
    var word = payload.toString().split(" ");
    var word2 = word;
    for (var i = 0; i < word.length; i ++) {
      if (word[i] == ">") {
        word[i] = "NOT BETWEEN 0 AND";
      } else if (word[i] == "=") {
        word[i - 1] = "BETWEEN " + word[i - 1];
        word[i] = "AND";
      }
    }
    return word2.join(" ");
  },
  equal2like: function (payload) {
    return payload.toString().split("=").join(" LIKE ");
  },
};
