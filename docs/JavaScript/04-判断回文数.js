var isPalindrome = function(x) {
  // 当 String() 和运算符 new 一起作为构造函数使用时，它返回一个新创建的 String 对象，存放的是字符串 s 或 s 的字符串表示。
  // 当不用 new 运算符调用 String() 时，只把 s 转换成原始的字符串，并返回转换后的值。
  console.log(String(x));
  console.log(String(x).split('')); //split() 方法用于把一个字符串分割成字符串数组。返回数组，不改变原字符串
  console.log(String(x).split('').reverse()); //reverse() 方法用于颠倒数组中元素的顺序，返回点到后的数组，该方法会改变原来的数组，而不会创建新的数组。
  console.log(String(x).split('').reverse().join('')); //join() 方法用于把数组中的所有元素转换一个字符串。返回字符串，
  return String(x).split('').reverse().join('') === String(x);
};
console.log(isPalindrome(12321));

let isPalindrome1 = function(str) {
  let str1 = ""
  if(typeof str !== 'string'){
    return false;
  } else {
    for (let i = str.length - 1; i >= 0; i--) {
      str1 += str[i];
    }
  }
  return str1 === str;
}
console.log('isPalindrome1', isPalindrome1("12321"))

let isPalindrome2 = function(str) {
  let len = str.length;
  let flag = false;
  for(let i = 0; i < len; i++){
    if(str.charAt(i) !== str.charAt(len - i -1)){
      return false;
    } else {
      flag = true;
    }
  }
  return flag;
}

console.log('isPalindrome2', isPalindrome1("12321"))