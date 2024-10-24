

console.log(" Q.1 ========== WAP To Find Length / Total No. Character=====");

const str = "Hello, World";
const len = str.length;
console.log(`The Length of str: ${str} is : ${len}`);

const str1 = "JavaScript is the language of Internet";
const len1 = str1.length;
console.log(`The Length of str: ${str1} is : ${len1}`);

console.log(" Q.2 ========== WAP To Find Last Character of given str ========");

const str2 = "Hey,my friend, programming Language";
const result = str2.charAt(str2.length-1);
console.log(`The Last Character of the str: ${str2} is:${result}`);

const str3 = "I am Learning Logical Programs";
const result1 = str3.charAt(str3.length-1);
console.log(`The Last Character of the str: ${str3} is: ${result1}`);

const str4 = "Angular";
const result2 = str4.charAt(str4.length-1);
console.log(`The Last Character of the str: ${str4} is: ${result2}`);

console.log(" Q.3 ========== WAP To Find First Character of given str========");

const str5 = "React";
const result3 = str5.charAt(0);
console.log(`The First Character Of Given str: ${str5} is: ${result3}`);

const str6 = "Elon Musk";
const result4 = str6.charAt(0);
console.log(`The First Character Of Given str: ${str6} is: ${result4}`);

const str7 = "Apple Founder is Stew Job";
const result5 = str7.charAt(0);
console.log(`The First Character Of Given str: ${str7} is: ${result5}`);

console.log(" Q.4 ========== WAP To check str contain 'UI' or 'Not' ==========");

function containUI(string) {
    return string.includes('UI');
};
const string = "React - UI Devloper";
console.log(`Does the str: ${string} contain 'UI'? ${containUI(string)}`);

const string1 = "UI Devloper";
console.log(`Does the str: ${string1} contain 'UI'? ${containUI(string1)}`);

const string2 = "Front end and backend technologies";
console.log(`Does the str: ${string2} contain 'UI'? ${containUI(string2)}`);

console.log(" Q.5 ========== WAP To Split String to Array of SubString ============");

function splitString(string,delimiter) {
    return string.split(delimiter);
};
const string3 = "apple,orange,banana";
const result7 = splitString(string3,',');
console.log(`The Array Of SubStrings from "${string3}" is:`, result7);

const string4 = "Stew,Bill,Jenny,Elon";
const result8 = splitString(string4, ',');
console.log(`The Array Of SubStrings from "${string4}" is:`, result8);

console.log(" Q.6 ========== WAP To Reverse String With Two(2) Existing Method =================");

console.log("======== (1) Using Predefined Method ===========");

function reverseStringUsingMethods(str) {
    return str.split('').reverse().join('');
};
const str8 = "Software";
const str9 = "UI Developer";

console.log(`The Reverse of the string"${str8}" is: ${reverseStringUsingMethods(str8)}`);
console.log(`The Reverse of the string"${str9}" is: ${reverseStringUsingMethods(str9)}`);

console.log("======== (2) Without Using Predefined Method ===========");

function reverseStringManually(str) {
    let reverseStr = '';
    for (let index = str.length-1; index >= 0; index--) {
        reverseStr += str[index];
    }
    return reverseStr;
};

const str10 = "Wed Devloper";
const str11 = "Billion Dollar";
const str12 = "Java";

console.log(`The reverse of the string "${str10}" is ${reverseStringManually(str10)}`);
console.log(`The reverse of the string "${str11}" is ${reverseStringManually(str11)}`);
console.log(`The reverse of the string "${str12}" is ${reverseStringManually(str12)}`);

console.log(" Q.7 ========== WAP To Count 'a' Character =================");

 function charCount(string) {
    let Count = 0;
    for (let index = 0; index < string.length; index++) {
        if (string[index].toLowerCase()=='a') {
            Count++;
        }
    }
    return Count;
 };

 const strings =["JavaScript","Do or Die","Learn With us","Job with us","Empowering Dreams","Guaranteeing Futures","Anny","My Favorite Fruit is Apple"]

 strings.forEach(strings => {
    console.log(`The no of 'a' characters in the string "${strings}" is ${charCount(strings)}`);
 });

 console.log(" Q.8 ========== WAP To Count 'Vowels' Character =================");

 function VowelsCount(strings1) {
    let Count = 0;
    const Vowels = 'aeioueAEIOUE';
    for (let index = 0; index < Vowels.length; index++) {
        if (Vowels.includes(strings1[index])) {
            Count++;
        }
    }
    return Count;
 };

 const strings1 = ["JavaScript","HTML and CSS","Language of Internet","I am UI Devloper","Do or Die"];

 strings1.forEach(strings1=>{
   console.log(`The no of vowels in the string "${strings1}" is : ${VowelsCount(strings1)}`);
 })

 console.log(" Q.9 ========== WAP To Count 'Word' =================");

 function WordCount(strings2) {
    const words = strings2.split(' ').filter(words => words.length > 0 );
    return words.length;
 };

 const strings2 = [
    "JavaScript The Language of Internet",
    "Enhance Your Learning Journey with Exclusive Add-Ons",
    "Beyond frameworks, Beyond Imagination",
    "I am Passionate Software Devloper"
 ];
 
 strings2.forEach(strings2 => {
    console.log(`The No Of words in the string "${strings2}" is: ${WordCount(strings2)}`);
 });

 console.log(" Q.10 ========== WAP To Count 'Duplicate Character' =================");

 function duplicateCharCount(strings3) {
    const charCount = {};
    for (let index = 0; index < strings3.length; index++) {
        const char = strings3[index];
        if (char !== ' ') {
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }
    for ( const char in charCount){
        if (charCount[char] > 1) {
            console.log(`${char} - ${charCount[char]}`);
        }
    }
 }
 const strings3 = ["Banana","Apple","Software Devloper"];

 strings3.forEach(strings3 => {
    console.log(`Duplicate Characters in the string "${strings3}" are:`);
    duplicateCharCount(strings3);
    console.log('');
 })