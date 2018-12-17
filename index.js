// Code your solution in this file


function findMatching (drivers, string) {
  let result = drivers.filter(x => x === string.includes(drivers.toLowerCase() ));

  
  return result;
  
}