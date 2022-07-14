
// everything in js is an object
// object {}




// array[]
// collection of items stored at contiguous memory locations, hopefully of the same type.
// aprox. 65k values can be held.

//push 
//adds to end of array

// shift
//removes first item

//.pop
//removes and returns last item in array

//unshift
//add item to start of array

//indexOf
// tells you first occurrence of the element or -1 if not found.

// concat(arr1, arr2)
//combines two or more arrays and returns new array.

//toString
//converts array into a string

//join
//convert array into a long string but seperates with a character
// arr.join( ` - `) 
//the above will have array items listed with - inbetween each value

//split
//convert string into an array seperated by the character given.
//arr.split(givenChar)



let fruits = [
    `Banana`,
    `Apple`,
    `Orange`
]

fruits.push(`Mango`)

// let arr = []

console.log(...fruits, `\nThis is not a test`)