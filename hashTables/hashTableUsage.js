// hash table is object in javascript that contains key-value pair
// New implementation is a Map and Set in ES6.

const obj = {
    name : "Krunal",
    age : 24,
    hobbies : ['travelling','gyming','reading'],
    isEngineer : function(){
        return true;
    }
}

// get or lookup - O(1) // sometime O(n) because of hash collison
console.log(obj.name);

//insert - O(1)
obj.email = "krunal.bapodara.1@gmail.com";
console.log(obj);

//delete - O(1)
delete obj.email;
console.log(obj);

// search - O(1)
console.log(obj['age']);