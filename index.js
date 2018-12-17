// Code your solution in this file


function findMatching (drivers, string) {
  let drivers = drivers.toLowerCase; 
  let result = drivers.filter(x => x === string)  ;
  return result;

}