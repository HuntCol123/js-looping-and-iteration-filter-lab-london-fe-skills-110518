// Code your solution in this file


function findMatching (drivers, string) {
  let result = drivers.filter (match => string === drivers);
  return result;
}