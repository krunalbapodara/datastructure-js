var arr = [];

//push() - O(1) - add element at the last position
arr.push(2); //[2]
arr.push(4); //[2,4]
arr.push(1); //[2,4,1]
arr.push(9); //[2,4,1,9]
arr.push(7); //[2,4,1,9,7]

//pop() - O(1) - remove last element
arr.pop(); // [2,4,1,9]

//insert at index - splice() - O(n) - need to re-arrange all elements
arr.splice(1,0,5); // [2,5,4,1,9]

//delete from index - splice() - O(n) - need to re-arrange all elements
arr.splice(1,1); // [2,4,1,9]

//unshift() - O(n) - add element at the first place, re-arrange all elements
arr.unshift(7); // [7,2,4,1,9]

//lookup by index - O(1) - get element from specific index
console.log(arr[1]); // 2

// searching - O(n) - need to traverse through all element (worst case)
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element === 9){
        console.log("found"); // found
    }
}



