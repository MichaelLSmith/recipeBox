export function stringToArray(str) {
  //this will take in a comma delimited string and convert it to an array
  let arr = _.split(str, ',');
  console.log(arr);
  arr = arr.map(v => _.trim(v));
  console.log(arr);
  return arr;
}
