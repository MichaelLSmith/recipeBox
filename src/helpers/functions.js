export function stringToArray(str) {
  //this will take in a comma delimited string and convert it to an array
  let arr = _.split(str, ',');
  arr = arr.map(v => _.trim(v));
  return arr;
}
