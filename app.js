
// Multi-dimensional array
let myArray = [['Cats', 10], ['Dogs', 6]];


// For-loop in for-loop
function myArr(arr){
   let quotient = 1;
    
for(let i = 0; i < arr.length; i++) {
    for(let j= 0; j < arr[i].length; j++);
    console.log(arr[i][j]);
} 
}; myArr([[12, 6], [16, 82]]);


//  Largest number
function compare(x, y){
    return x > y ? x : y;
}
console.log(compare(14, 3))


// Equality
function compareString(x, y){
    if(x === y){
        return 'strings are equal'
    } else {
        return 'strings arent equal'
    }
}
compareString('hello', 'Hello')