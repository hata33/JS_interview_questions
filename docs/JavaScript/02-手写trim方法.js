String.prototype.trim1 = function (){
  return this.replace(/^\s+/, '').replace(/\s+$/, '')
}

let a = ' 123abc c ';
let trima = a.trim1()
console.log(trima);