let arr = [1,2,3,4,5] 
let arr2 = ['x','y','z']

let newArr = arr.concat(arr2)
console.log(newArr)

//reduce function
let sum = arr.reduce(function (sum, cv){
  return sum += cv;
})
console.log(sum)

function fuc(a, b) {
  return [a, b]
}

let ar = arr.reduce(fuc)
console.log(ar)