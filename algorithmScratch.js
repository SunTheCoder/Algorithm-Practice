//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//BUBBLE SORT aka "sinking sort"---------------------------------------------------------------------------------------------------------------------------------------------

function bubbleSort(arr) {  // Best case: O(n), Worst case: O(n^2)
   
    for (let i = 1; i < arr.length; i++) {                      // Iterate through the array/Perform the operation N times

        for (let j = 0; j < arr.length - 1; j++) {              // Iterate through/compare EACH element of the array
            
            if (arr[j] > arr[j+1]) {                            // If the current value is greater than its neighbor to the right
                                                                 
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]         // Swap those values                                      
            }
        }
    }                                                              
    return arr                                                  // If you get to the end of the array and no swaps have occurred, return
                                                                // Otherwise, repeat from the beginning
}

console.log('Bubble Sort: ', bubbleSort([3,2,0,4,1]))

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//INSERTION SORT-------------------------------------------------------------------------------------------------------------------------------------------------------------

function insertionSort(arr) {     // Best case: O(n), Worst case: O(n^2)

    for (let i = 1; i < arr.length; i++) {                               // loop to reset the elements/pairs being checked

        let currentElement = arr[i] 
        let divider = i - 1                                              // initialize a currentElement starting at index i; lastIndex is also a good varible name and/or way of thinking about it
    
        while (divider >= 0 && arr[divider] > currentElement) {          // the while loop that will check if divider/index is greater than 0 and if the array is sorted; 
                                                                         // therefore we will continue checking values against the current element

            arr[divider+1] = arr[divider]                                // shifts the element that is greater than currentElement in the index to the right

            divider--                                                    //increment divider

        }
        arr[divider+1] = currentElement                                  // inserts the currentElement at the place of the divider/lastIndex

    }
    return arr
}

let arr = [3,2,0,4,1] // [0,1,2,3,4]

console.log('Insertion Sort: ', insertionSort(arr))

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//SELECTION SORT-------------------------------------------------------------------------------------------------------------------------------------------------------------

function selectionSort(arr) {  // O(n^2) time complexity

    // variable i acts as the divider in this solution
    
    for (let i = 0; i < arr.length; i++) {                      // Set a pointer at zero dividing the array into sorted and unsorted halves
                                                                // Repeat while the unsorted half is not empty:

        let min = i                                             // Find the index of the minimum value in the unsorted half
                                                                // Save the min value

        for (let j = i + 1; j < arr.length; j++) {  
          if (arr[j] < arr[min]) {
            min = j
            }
        }     
        if (min !== i) {                                        // Shift every unsorted value to the left of the min value to the right by 1
            // Swap
            [arr[i], arr[min]] = [arr[min], arr[i]]             // Put the min value at the divider
            }

    }
    return arr
}

let arr2 = [3,2,0,4,1] // [0,1,2,3,4]

console.log('Selection Sort: ', selectionSort(arr2))

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//MERGE SORT-----------------------------------------------------------------------------------------------------------------------------------------------------------------

function mergesort(arr) {  // O(n*Log n)
    
    if (arr.length <= 1) return arr                             // Check if the input is length 1 or less
                                                                // If so, it's already sorted: return
  
    let mid = Math.floor(arr.length / 2)                        // Divide the array in half
    
    let leftHalf = mergesort(arr.slice(0, mid))                 // Recursively sort the left half

    let rightHalf = mergesort(arr.slice(mid))                   // Recursively sort the right half
      
    return merge(leftHalf, rightHalf)                           // Merge the halves together and return
}
      


function merge(left, right) {                                   // Takes in two sorted arrays and returns them merged into one
      
    let sortedArr = []                                          // Create an empty return array
                                                                // the sorted items will go here

    while (left.length && right.length) {                       // While there are still values in each array...
                                                                // Point to the first value of each array
                                                                // Compare the first values of each array
        if (left[0] < right[0]) {
                                                                          
            sortedArr.push(left.shift())                        // Insert the smaller value into sortedArr
        } else {
            sortedArr.push(right.shift())
        }
    }
                                                                // Use spread operators to create a new array, combining the three arrays
        return [...sortedArr, ...left, ...right]                // Return the merged array
}

let arr3 = [3,2,0,4,1] // [0,1,2,3,4]
    
console.log('Merge Sort: ', mergesort(arr3))