

console.log("==========WAP To Find Length / Total No. Character");

const str = "Hello, World";
const len = str.length;
console.log(`The Length of str: ${str} is : ${len}`);

const str1 = "JavaScript is the language of Internet";
const len1 = str1.length;
console.log(`The Length of str: ${str1} is : ${len1}`);

console.log("==========WAP To Find Last Character of given str");

const str2 = "Hey,my friend, programming Language";
const result = str2.charAt(str2.length-1);
console.log(`The Last Character of the str: ${str2} is:${result}`);

const str3 = "I am Learning Logical Programs";
const result1 = str3.charAt(str3.length-1);
console.log(`The Last Character of the str: ${str3} is: ${result1}`);

const str4 = "Angular";
const result2 = str4.charAt(str4.length-1);
console.log(`The Last Character of the str: ${str4} is: ${result2}`);

console.log("==========WAP To Find First Character of given str");

const str5 = "React";
const result3 = str5.charAt(0);
console.log(`The First Character Of Given str: ${str5} is: ${result3}`);

const str6 = "Elon Musk";
const result4 = str6.charAt(0);
console.log(`The First Character Of Given str: ${str6} is: ${result4}`);

const str7 = "Apple Founder is Stew Job";
const result5 = str7.charAt(0);
console.log(`The First Character Of Given str: ${str7} is: ${result5}`);

console.log("==========WAP To check str contain 'UI' or 'Not'");

function containUI(string) {
    return string.includes('UI');
};
const string = "React - UI Devloper";
console.log(`Does the str: ${string} contain 'UI'? ${containUI(string)}`);

const string1 = "UI Devloper";
console.log(`Does the str: ${string1} contain 'UI'? ${containUI(string1)}`);

const string2 = "Front end and backend technologies";
console.log(`Does the str: ${string2} contain 'UI'? ${containUI(string2)}`);

console.log("==========WAP To Split String to Array of SubString ");

function splitString(string,delimiter) {
    return string.split(delimiter);
};
const string3 = "apple,orange,banana";
const result7 = splitString(string3,',');
console.log(`The Array Of SubStrings from "${string3}" is:`, result7);

const string4 = "Stew,Bill,Jenny,Elon";
const result8 = splitString(string4, ',');
console.log(`The Array Of SubStrings from "${string4}" is:`, result8);

