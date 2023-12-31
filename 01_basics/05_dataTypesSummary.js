// DataTypes:
// 2 Types: 
    // Prmitive 
    // Non Primitive

// Primitive: (Copy) -- 7 Category 
//     String
//     Number
//     Boolean
//     null
//     undefined
//     Symbol
//     BigInt

// Non Primitive: (Reference)
        // Array
        // Object
        // Functions


// Array:
//     const heros = ['thor','ironman','spiderman'];

// Objects:
//     let user = {
//         name: "Sruthi",
//         age : 20
//     }

// Function:
//     const myFunction =  function(){
//         console.log('Hello All.....')
//     }


// console.log(typeof BigInt); // FUNCTION

// Stack and Memory:

// Memory:  2 Types
//     Stack (Used for Primitive) (copy meltha)
//     Heap (Used for nonPrimitive) (Reference meltha)


// let myChannel = 'Channel1'; //(It will go to the Stack)
// let anothername = myChannel;
// console.log(anothername); // Channel1
// anothername = 'TestChannel';
// console.log(anothername); // TestChannel
// console.log(myChannel); //Channel1  // Since it is store in Stack, copy of the variable is storing Hence real variable doesn't changing.

// Heap:

let user = {
    name : 'Sruthi'
}

let user2 = user

console.log(user2)

user2.name = 'Kolla Sruthi'

console.table([user,user2]); // User2 is pointing to reference of the user, Hence changing user values as well....





