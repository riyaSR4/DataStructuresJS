let origDogs = ["Husky","Beagle","Labrador"];
console.log("Dogs: ", origDogs);
let cats = ["American Curl","Bengal"];
console.log("Cats: ", cats);
let birds = ["Falcons","Ducks","Flamingoes"];
console.log("Birds: ", birds);

//Array copy elements
let sliceDogs = origDogs.slice(1,2);
console.log("Sliced dogs: ", sliceDogs);
let copyDogs = [...origDogs];
console.log("Copy Dogs: ", copyDogs);
let dogs = origDogs.slice(0);
console.log("Dogs: ", dogs);

//Stack
let pushDog = origDogs.push("Golden Retriever");
console.log("Push Dogs: ", pushDog);
let popDog  = origDogs.pop();
console.log("Pop Dogs: ", popDog);
dogs[dogs.length] = "Poodle";
console.log("Dogs: ", dogs);

//Add and remove from the first
let addFirst = dogs.unshift("Golden Retriever");
console.log(" Unshift Dogs: ", addFirst);
let removeFirst = dogs.shift();
console.log(" Shift Dogs: ", removeFirst);

//Automatic add and remove elements
dogs.slice(2,1,"Pug","Boxer");
console.log(dogs);

//Concat
let animals = dogs.concat(cats,birds);
console.log("Concatenaion:", animals);
let newAnimals = [...dogs,...cats,...birds].toString();
console.log("New animals: ", newAnimals);
let sortDogs = dogs.slice(0).sort();
console.log("Sort Dogs: " + sortDogs);
function scanArray([first,second]){
    console.log("First: " + first + " " + "Second: " + second);
}
scanArray(animals);

let allAnimals = "";
for(let animal in animals){
    allAnimals += animal;
}
console.log("All animals: " + allAnimals);