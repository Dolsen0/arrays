/* 
Create an array with a list of fruits starting with 3 fruit

with that array now do the following
- Add a new fruit to the end of the array
- Display the array
- Add a new fruit to the beginning of the array
- Display the array
- Remove the last fruit.
- Display the array
*/

let fruits = [
    `Kiwi`,
    `Mango`,
    `Apple`
]

fruits.push(`Avocado`)
fruits.unshift(`Clementine`)
fruits.pop()

console.log(`this is regular display:`, fruits)
console.log(`this is spread:`, ...fruits)

const chickenEgg = [`🐓`,`🥚`].sort()

console.log(`the ${chickenEgg[0]} came first`)


