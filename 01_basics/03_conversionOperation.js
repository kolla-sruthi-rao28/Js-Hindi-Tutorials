// let score = 50;
// console.log(typeof score); // number
// console.log(typeof (score)); // number

// let score = '33';
// console.log(typeof score); // string
// console.log(typeof (score)); // string

// let valueInNumber = Number(score); // where score: '33'
// console.log(typeof valueInNumber);// number

// let score2 = "33a"
// let score = Number(score2);
// console.log(typeof score2); // String
// console.log(typeof score);// number
// console.log(score); //NaN

// let nullValue = null;
// let nullValueNumber = Number(nullValue);
// console.log(typeof nullValue); // object
// console.log(typeof nullValueNumber); //number
// console.log(nullValueNumber); //0


// let undefinedValue = undefined;
// let undefinedValueNumber = Number(undefinedValue);
// console.log(typeof undefinedValue); // undefined
// console.log(typeof undefinedValueNumber); //number
// console.log(undefinedValueNumber); //NaN

// NOtes
// Number Conversation
        // "33" => 33
        // "33abc" => NaN (Not a Number)
        // true => 1 
        // false => 0
// boolean Conversation:
    // let isLoggedIn =  1
    // let isLoggedInBoolean = Boolean(isLoggedIn);
    // console.log(isLoggedInBoolean); // true
    // console.log(typeof isLoggedInBoolean); // boolean

        // 1 => true
        // 0 => false
        // "" => false
        // "Kolla" = > true

// String Conversation:
    // let stringNumberConversation = String(22)
    // console.log(stringNumberConversation); // 22
    // console.log(typeof stringNumberConversation) // string

let value = 3;
let negValue = -value;
console.log(negValue); // -3

//Operators:
    // +
    // -
    // *
    // /
    // %

// let str1 = "hello";
// let str2 = " Kolla";
// let str3 = str1 + str2;
// console.log(str3);
// console.log("1"+2); //12
// console.log(1+"2"); //12
// console.log("1"+2+2); 122
// console.log(1+2+"2"); //32
// console.log(+true); //1
// console.log(+""); //0

// Prefix & Post Increament  
        // let x = 3;
        // const y = x++;

        // console.log(`x:${x}, y:${y}`);
        // // Expected output: "x:4, y:3"

        // let a = 3;
        // const b = ++a;

        // console.log(`a:${a}, b:${b}`);
        // // Expected output: "a:4, b:4"  


// Prefix & Post Decrement  
        let x = 3;
        const y = x--;

        console.log(`x:${x}, y:${y}`);
        // Expected output: "x:2, y:3"

        let a = 3;
        const b = --a;

        console.log(`a:${a}, b:${b}`);
        // Expected output: "a:2, b:2"  
