const array1 = [1,2,3,4,5];
const array2 = [8,5,9,7,6];
array1.push(0);
console.log("Array 1:", array1);
console.log("Element at index 2:", array1[2]);
console.log("Index of element 3:", array1.indexOf(3));
console.log("Array length:", array1.length);

console.log("Array 2:", array2);
const array3 = array2.map(element => element*2);
console.log("Array 2 multiplied by 2:", array3);

const filteredArray = array2.filter(element => element<8);
console.log("Elements less than 8 in array 2:", filteredArray);

const sortedDescend = array2.sort((a,b) => a>b ? -1:1);
console.log("Array 2 in descending order:", sortedDescend);

const sortedAscend = array2.sort((a,b) => a<b ? -1:1);
console.log("Array 2 in ascending order:", sortedAscend);

console.log("Each element in array 2:");
array2.forEach(element => (
    console.log(element)
));

const numArray = [10,11,12,13,14];
const newArray = array2.concat(numArray);
console.log("Concatenated array 2:", newArray);

const everyMethod = array2.every(element => element < 10);
console.log("Every elements in array 2 is less than 10:", everyMethod);

const someMethod = array2.some(element => element < 10);
console.log("Some elements in array 2 is less than 10:", someMethod);

const includeArray = array2.includes(6);
console.log("Array 2 includes 6:", includeArray);

const strArray = ["R","I","Y","A"];
const joinedArray = strArray.join('');
console.log("Join array strArray:", joinedArray);

const reduceArray = array1.reduce((total,current) => total + current);
console.log("Reduce Method:", reduceArray);

const findArray = array1.find(Element => Element>3);
console.log("Find first element greater than 3 in array 1:", findArray);

const findIndex = array1.findIndex(Element => Element===3);
console.log("Find index of element 3 in array 1:", findIndex);

const sliceArray = strArray.slice(2,4);
console.log("Slice Method:", sliceArray);

const reverseArray = array2.reverse();
console.log("Reverse array 2:", reverseArray);

const fillArray = new Array(3);
console.log("New array:", fillArray);
const filledArray = fillArray.fill(10);
console.log("Filled Array:", filledArray);

const popValue = array2.pop();
console.log("Pop value:",popValue,"New Array:",array2);

const shiftArray = array2.shift();
console.log("Remove first element of array 2:",shiftArray);


const StringArray = ["R","I","Y","A"];
StringArray.unshift("S");
// StringArray ="s" + StringArray 
console.log("Unshifted Array:",StringArray);