module.exports = function(arr, fn, context) {
  context = context | this;
  var newArr = [];
  arr.forEach(function(el, i, arr) {
    newArr.push(fn.call(context, el, i, arr));
  });
  return newArr;
}
