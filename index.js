// Code your solution in this file


function findMatching (drivers, string) {
  let driversLower = drivers.toLowerCase(); 
  let result = driversLower.filter(x => x === string);
  
  
  return result;
  
console.log(result);
}