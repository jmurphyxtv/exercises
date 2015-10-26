function isFunction(functionToCheck) {
 var getType = {};
 return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

module.exports = function(incoming) {
  var handleIt = function(part) {
    if (isFunction(part)) {
      return handleIt(part());
    } else {
      return part;
    }
  };
  return handleIt(incoming);
};
