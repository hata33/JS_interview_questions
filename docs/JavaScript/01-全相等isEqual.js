const obj1 = {
  a: 100,
  b: {
    x: 100,
    y: 200,
    // z: {
    //   m: 500,
    //   n: 1000
    // }
  }
}
const obj2 = {
  a: 100,
  b: {
    x: 100,
    y: 200,
    // z: {
    //   m: 500,
    //   n: 1000
    // }
  }
}
function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

function isEqual(obj1, obj2){
  if(!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2
  }
  if (obj1 === obj2){
    return ture
  }

  const obj1Key = Object.keys(obj1)
  const obj2Key = Object.keys(obj2)
  if (obj1Key.length !== obj2Key.length) {
    return false
  }
  for (const key in obj1) {
    const res = isEqual(obj1[key], obj2[key])
    if (!res) {
      return false
    }
  }

  return true
}

console.log( isEqual(obj1, obj2) );
