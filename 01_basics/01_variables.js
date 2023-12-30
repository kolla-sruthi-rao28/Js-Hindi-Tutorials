// 3 Keywords to store the data

// var // Not to use - bcs of Issue in block Scope & functional scope
// let
// const

console.log();
console.table(['Kolla','Sruthi']);

const accountId = 3233;
let accountEmail = 'kollasruthi@gmail.com';
var accountPassword = 'test';
accountCity = 'Bengalore'; // Don't Initailize like this
let accountState; // undefined

console.table([accountId,accountEmail,accountCity,accountState]);

// accountId = 2; // Not allowing to assign since it is const
accountEmail = 'test@gmail.com';
accountPassword = 'test2';
accountCity = 'Vizag';

console.table([accountId,accountEmail,accountCity,accountState]);