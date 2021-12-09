let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];
let newArray = set1.concat(set2);
let obj = {};
let count = 1;
let sum1 = 0; // sum of the elements that appeared more than once across the sets 
let sum2 = 0; // sum of the elements that appeared once across the sets

for (let i = 0; i < newArray.length; i++) {
  let count = 1
  if (newArray[i] in obj === false){
    obj[newArray[i]] = count
  }
  else if (newArray[i] in obj){
    obj[newArray[i]] = obj[newArray[i]] +1
  }
}
// To get the sum of the elements that appeared more than once across the sets

for (key in obj){
  if(obj[key] === 2){
    sum1 += parseInt(key * obj[key]) 
  }
}
console.log(sum1)

// To get the sum of the elements that appeared once across the sets

 for (key in obj) {
   if (obj[key] === 1){
     sum2 += parseInt(key)
   }
 }
 console.log(sum2) 
