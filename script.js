// const button = document.querySelector('.body-last');




// function sumArray(){
    // let numArray =[4,8,20,80,75,40]
   
//     let sum = 0;
//     let count = 6;
//     for(let i = 0; i< numArray.length; i++){
//         sum += numArray[i]
//     }
//     let average = sum/count;
//    console.log(average)
// }
// sumArray();


// const sumArray= arry =>{
//     reducer = (total, currentValue)=>
//         total+currentValue;
//         sum = arry.reduce(reducer); 
//     return sum;
// }

let numArray =
function average(numArray){
   let count = numArray.length;
   let sum = 0;
    for(i=0; i<numArray.length; i++){
        sum = sum + numArray[i]
    }
  let average = sum/count;
    console.log(average);
}
average([4,8,20,80,75,40]);




function oddNumbelow20(){
    for(i=1; i <=20; i++){
        let remainder = i % 2;
        if (remainder != 0){
            console.log(i);
        }  
    }   
}
oddNumbelow20();


// Write a JavaScript conditional 
//statement to find the sign of product of three numbers. Display an alert box with


// function product(sampleNumbers){
//     sign = 0;
//     for(i = 0; i <sampleNumbers.length; i++){
//         sign = sign * sampleNumbers[i];
//         console.log(sign);
//     }
// }
// product([3, -7, 2]);


// function oddNumbelow20(){
//     for(i=1; i <20; i+=2){
//         console.log(i);
//     }   
// }
// oddNumbelow20();