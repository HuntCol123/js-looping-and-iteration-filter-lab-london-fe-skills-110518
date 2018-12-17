// Code your solution in this file


function findMatching (drivers, string) {
  let lowerDrivers = drivers.toLowerCase; 
  let result = lowerDrivers.filter(x => x === string)  ;
  return result;

}