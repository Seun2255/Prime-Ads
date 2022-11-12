function addressShortener(address) {
  var newString;
  var start = address.substring(0, 2);
  var end = address.substring(address.length, address.length - 7);
  newString = start + "...." + end;
  return newString;
}

export default addressShortener;
