// reverse a string 2 ways
let string = "banana phone";
let anotherString = "Quinn";

let practice = {}

// # 1
practice.reverseStr = function(str){
    if(str === '') return str
    str = str.toLowerCase().split('')
    let rev = []
    for(let i = str.length; i >= 0; i--){
        rev.push(str[i])
    }
    return rev.join('')
}
// console.log(reverseStr(string));

// # 2 (recursive)
function recurseReverse(str){
    if(str === '') return 'no empty strings, please'
    if(str.length <= 1) return str
    str = str.toLowerCase()
    return recurseReverse(str.substr(1)) + str[0];
}
// console.log(recurseReverse(anotherString))


// make a frequency counter 2 ways
let toCount = "supercalifragil isticexpialidocious!";
let moreToCount = "A horse of course!";

practice.firstCounter = function(str){
    str = str.toLowerCase();
    let counter = {};
    for(i = 0; i < str.length; i++){
        let currLetter = str[i]
        if (currLetter !== " ") {
            if (!counter[currLetter]) {
                counter[currLetter] = 1
            } else {
                counter[currLetter] += 1
            }
        }
    }
    return counter;
}
// console.log(firstCounter(toCount))

function secondCounter(str){
    str = str.toLowerCase();
    let counter = {};
    for(letter of str){
        if(letter !== " "){
            counter[letter] = (counter[letter] || 0) + 1
        }
    }
    return counter;
}
// console.log(secondCounter(moreToCount))


// filter out the numbers/non numbers
let toFilter = [1,3,'h','k',1,7,'b',3,'e'];
practice.getRidOfType = function(arr, type){
    let newArr = arr.filter(item => typeof item !== type)
    return newArr;
}
// console.log(practice.getRidOfType())


// remove the duplicates
let declutterMe = [1,2,3,6,8,1,2,5];
function removeDuplicates(arr){
    let newArr = arr.filter((item, index) => {
        return arr.indexOf(item) === index
    })
    return newArr;
}
// console.log(removeDuplicates(declutterMe))


// count unique values
let vals = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];

function countUniqueValues(arr) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1
}
// console.log(countUniqueValues(vals))


let weirdArrayFromSO = ["jam", "beef", "cream", "jam"]

function countUniqs(arr){
    let uniqs = arr.reduce((acc, val) => {
        acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
        return acc;
    }, {});
    return uniqs
}

console.log(countUniqs(weirdArrayFromSO))


// sum range recursive
let num = 4;
function sumRange(num){
    if(num === 0) return num;
    return num + sumRange(num - 1)
}
// console.log(sumRange(num))



module.exports = practice;