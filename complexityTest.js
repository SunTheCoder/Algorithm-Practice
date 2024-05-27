let arr = [5,99,397,16,268]
console.log(arr)

let increment = 1000

    for (let n = increment ; n <= 10; n += increment) {
        let startTime = Date.now();
        quickSort(arr)
        let endTime = Date.now();
        console.log(`${endTime - startTime}`);
    }
// console.log(arr.sort())


function fillArr(n) {
    
    let arr = []
    
    for (let i = 10000 * n ; i >= 0 ; i--) {
        arr.push(i);
    }
    
    return arr.sort();
}

function quickSort(arr) {                           // O(1)?
    
    if (arr.length <= 1) return                     // Check if the input is length 1 or less
    // If so, it's already sorted: return
    for (let i = 0; i < arr.length; i++) {
        
        let pivot = arr[i]                          // Pick a pivot
        // console.log(pivot)
        // console.log(i)
        
        let pivotIndex = i
        
        for (let j = i; j < arr.length; j++) {      //initialize j as the index of the pivot each time/ start check at pivot. more efficent if done in O(1)
            
            // console.log(shift)
            if (pivot > arr[j]) {                   // Put all values smaller than the pivot to the `left`
                // console.log(arr)
                let temp = arr[j]
                
                arr[j] = pivot
                
                arr[pivotIndex] = temp
                pivotIndex = j
                
                i--
            } 
        }
        pivotIndex++
    } 
    
    return arr
    
}