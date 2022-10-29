//1. Create an array called ages that contains the following values:
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

//1a. Programmatically subract the value of the first element in the array from the value in the last element of the array
console.log(ages[ages.length-1]-ages[0]);

//1b. Add a new age to your array and repeat the step above to ensure it is dynamic
ages.push(13);
console.log(ages[ages.length-1]-ages[0]);

//1c. Use a loop to iterate through the array and calculate the average age
let sum = 0; 
for(i = 0; i<ages.length; i++){
    sum = sum + ages[i]
}
console.log(sum/ages.length)

//2. Create an array called names that contains the following values:
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
console.log(names)

//2a. Use a loop to iterate through the array and calculate the average number of letters per name.
let sum2 = 0
for(i=0; i<names.length; i++){
    sum2 = sum2 + names[i].length
}
console.log(sum2/names.length)

//2b. Use a loop to iterate through the array again and concatenate all the names together, seperated by spaces
let concatenatedNames= names[0];
for(i=1; i<names.length; i++){
    concatenatedNames = concatenatedNames.concat(" ",names[i]);
}
console.log(concatenatedNames);

//3. How do you access the last element of an array
let lastArrayName = names[names.length-1]
console.log(lastArrayName)

//4. How do you access the first element of an array
let firstArrayName = names[0]
console.log(firstArrayName)

//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = ['Kelly', 'Sam', 'Kate']
function convertIntArray(nameLengths){
    let arrayLength = []
    for(i = 0; i < nameLengths.length; i++){
        arrayLength.push(nameLengths[i].length)
    }
    return arrayLength
}
nameLengths = convertIntArray(nameLengths)
console.log(nameLengths)

//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array
sum = 0
for(i = 0; i<nameLengths.length; i++) {
    sum += nameLengths[i]
}
console.log(sum)

//7. Write a function that takes two paramaters, word and n, as arguments and returns the word concanated to itself n number of times.
function repeatWord(word, n){
    let s = ""
    for(let i = 0; i < n; i++){
        s+=word
    }
    console.log(s)
}
repeatWord("word", 3)

//8.  Write a function that takes two paramaters, firstName and lastName and returns a full name
function fullName (firstName, lastName){
return firstName.concat(" ", lastName)
}
console.log(fullName("Serenity", "Caves"))

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100
let sumArray = [27, 24, 16, 3]
function sumGreaterThan100(sumArray){
    let sum = 0
    for (let i = 0; i < sumArray.length; i++){
        sum += sumArray[i]
    }
    if(sum > 100){
        return true
    } else( sum <= 100)
        return false
    }
console.log(sumGreaterThan100(sumArray))

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array
let averageArray = [71, 25, 58, 29, 43]
function arrayAverage(averageArray){
    sum = 0
    for(let i = 0; i < averageArray.length; i++){
        sum = sum + averageArray[i]
    }
    return (sum/averageArray.length)
}
console.log(arrayAverage(averageArray))

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function greaterAverage (array1, array2){
    let tot1 = 0
    for(i = 0; i < array1.length; i++){
        tot1 += array1[i];
    }
    let tot2 = 0;
    for(i = 0; i < array2.length; i++){
        tot2 += array2[i];
    }
    let avg1 = tot1 / array1.length;
    let avg2 = tot2 / array2.length;
    if(avg1>avg2){
        return true
    } else {
        return false
    }
}
let gA = greaterAverage([3, 5, 1 ,4, 23], [5, 2, 43, 2])
console.log(gA)

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50
function willBuyDrink(isHotOutside, moneyInPocket){
    if((isHotOutside) && (moneyInPocket > 10.50)){
        return true
    } else {
        return false
    }
}
console.log(willBuyDrink(true, 12))

//13. Create a function of your own that solves a problem.
function shouldTakePainMeds(inPain, timeHasPassed){
    if((inPain) && (timeHasPassed > 4)){
        return true
    } else {
        return false
    }
}
console.log(shouldTakePainMeds(true, 5))