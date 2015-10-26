module.exports = function(arr) {
  var result = [];
  var flattenPart = function(obj) {
    if (Array.isArray(obj)) {
      obj.forEach(flattenPart);
    } else {
      result.push(obj);
    }
  };
  flattenPart(arr);
  return result;
};
