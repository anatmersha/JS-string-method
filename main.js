// 1
// function printLongerName (firstName, lastName) {
//     if(firstName.length>lastName.length) {
//         console.log(firstName + " ",firstName.length);
//     }
//     else {
//         console.log(lastName +" ",lastName.length);
//     }
// }
// console.log(printLongerName ("anat", "mersha"));
// 2
// function printIsAExist(string) {
//     if (string.indexOf("a") != -1) {
//         console.log("it exist");
//     }
//     else {
//         console.log("doesn`t exist");
//     }
// }
// console.log(printIsAExist("anat"));
// function printIsAPIExist (string) {
//         if(string.indexOf("api") != -1) {
//         console.log("it exist");
//     }
//         console.log("doesn`t exist");
// }
// console.log(printIsAPIExist ("mersha"));
// 3
// function brokenString (fullName) {
//     console.log("String length: ",fullName.length);
//     if(fullName.indexOf(" ") != -1) {
//         console.log("True");     
//     }
//         console.log("First half string: ",fullName.substring(0, fullName.indexOf(" ")));
//         console.log("Last half string: ",fullName.substring(fullName.indexOf(" ")+1));
// }
// console.log(brokenString("anat mersha"));
// 4
// function getIsLonger(String) {
//     if (String.length > 5) {
//         return "long";
//     }
//     return "short";
// }
// console.log(getIsLonger("anat mersha"));
// 5
// function getIsShorter (string) {
//     if(string.length<3) {
//         return "yes";
//     }
//     return "no";
// }
// console.log(getIsShorter ("Ethiopia"));
// 6
// function getIsCharIn(char, string) {
//     if (string.length > 6) {
//         return string;
//     }
//     else if (string.indexOf(char) != -1) {
//         return string.indexOf(char);
//     }
// }
// console.log(getIsCharIn('a', "mersha"));
// 7
// function getIsCharInside (string, char) {
//     if(string.indexOf(char) != -1) {
//         return string.indexOf(char);
//     }
//     return string;
// }
// console.log(getIsCharInside ("anat mersha", 'a'));
// 8
// function getFullName(firstName, lastName) {
//     return `${firstName.substr(0, 1)}. ${lastName.toUpperCase()}`;
// }
// console.log(getFullName("anat", "mersha"));

// 9
// function getLongerName (lastName1, lastName2) {
// if(lastName1.length>lastName2.length) {
//     return lastName1;
// }
// return lastName2;
// }
// console.log(getLongerName ("mersha", "partush"));
// 10
// function getIsCharIn (char, string) {
//     if(string.indexOf(char) != -1) {
//         return string;
//     }
//     return "doesn`t exist";
// }
// console.log(getIsCharIn ('a', "anat"));