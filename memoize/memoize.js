module.exports = function(fn) {
  var result;
  if (!result) {
    result = fn();
  }
  return function() {
    return result;
  }
};
