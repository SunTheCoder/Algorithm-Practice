
let arr = [3,2,0,4,1] // [0,1,2,3,4]

// function insertionSort(arr) {     // Best case: O(n), Worst case: O(n^2)

//         for (let i = 1; i < arr.length; i++) {                               // loop to reset the elements/pairs being checked

//             let currentElement = arr[i] 
//             let divider = i - 1                                              // initialize a currentElement starting at index i; lastIndex is also a good varible name and/or way of thinking about it
        
//             while (divider >= 0 && arr[divider] > currentElement) {          // the while loop that will check if divider/index is greater than 0 and if the array is sorted; 
//                                                                              // therefore we will continue checking values against the current element
// ``
//                 arr[divider+1] = arr[divider]                                // shifts the element that is greater than currentElement in the index to the right

//                 divider--                                                    //increment divider

//             }
//             arr[divider+1] = currentElement                                  // inserts the currentElement at the place of the divider/lastIndex

//         }
//         return arr
// }

// console.log(insertionSort(arr))




function insertionSort(arr) {     // Best case: O(n), Worst case: O(n^2)

    for (let i = 1; i< arr.length; i++) {
        let currentElement = arr[i]
        let divider = i - 1

        while (divider >= 0 && arr[divider] > currentElement) {

            arr[divider+1] = arr[divider]

            divider--
        }
        arr[divider+1] = currentElement
    }

    return arr

}

console.log(insertionSort(arr))

