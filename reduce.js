const numbers=[1,2,3,4,5];
let accumulator=0
numbers.map((currentValue)=>{
    console.log("currentValue",currentValue)
    accumulator + currentValue
    console.log (accumulator)
})


const sum = numbers.reduce((accumulator,currentValue)=>{
    console.log("acc",accumulator,"curr",currentValue)
    return accumulator + currentValue;
},0);

console.log(sum);

const number = [5,8,2,12,6]
const max = numbers.reduce((accumulator,currentValue)=> {
    return accumulator>currentValue?accumulator:currentValue
}, -Infinity
);
console.log(max);

const Numbers =[5,8,2,12,6];
const min = number.reduce((accumulator,currentValue)=> {
    return accumulator<currentValue?accumulator:currentValue
}, Infinity
);
console.log(min);

const words = ["hello","","world","!"]
const sentance = words.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue
},""
);
console.log(sentance);


// const array = [1,2],[3,4],[5,6];
// const flattened = array.reduce((accumulator,currentValue)=> {
//     return accumulator(currentValue);
// }, []
// );
// console.log(flattened);

const colors =  ['red','blue','green','red','blue','red'];
const frequency= colors.reduce((accumulator,currentValue)=>{
accumulator[currentValue] = (accumulator[currentValue] || 0)+1;
return accumulator;
},{}
);


console.log(frequency)