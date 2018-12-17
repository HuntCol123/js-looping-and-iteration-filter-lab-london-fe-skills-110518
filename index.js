// Code your solution in this file


function findMatching (drivers, string) {
  let driversLower = drivers.toLowerCase(); 
  let result = drivers.filter(x => x === string);
  return result;

}