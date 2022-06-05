const animalsArr = ["Trau", "bo", "cho", "meo"];
const animals = new Set(animalsArr);

// add new
animals.add("ga");
console.log(animals);

// delete
animals.delete("bo");
console.log(animals);

// show list
console.log(animals.values());

