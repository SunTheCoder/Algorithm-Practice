let arr = [0,1,2,3,4,5]

let temp = arr[1]

arr[1] = arr[0]
console.log(arr)

arr[0] = arr[1]
console.log(arr)