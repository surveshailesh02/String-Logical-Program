

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

 console.log(" Q.11 ========== WAP To Count 'Palindrome' =================");

 function isPalindrome(strings4) {
    const cleanStrings4 = strings4.toLowerCase().replace(/\s/g, '');
    const len = cleanStrings4.length;

    for (let index = 0; index < len / 2; index++) {
        if (cleanStrings4[index] !== cleanStrings4[len - 1 - index]) {
            return false;
        }   
    }
    return true;
 };

 const strings4 = [ "madam", "banana", "radar","civil","noon" ];

 strings4.forEach(strings4 => {
     if (isPalindrome(strings4)) {
        console.log(`"${strings4}" is a palindrome.`);
     } else{
        console.log(`"${strings4}" is not a palindrome.`);
     }
 });

 console.log(" Q.12 ========== WAP To Count 'Anagram' =================");

 function isAnagram(strings5,strings6) {
    const cleanStrings5 = strings5.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cleanStrings6 = strings6.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (cleanStrings5.length !== cleanStrings6.length) {
        return false;
    }
    const sortedStrings5 = cleanStrings5.split('').sort().join('');
    const sortedStrings6 = cleanStrings6.split('').sort().join('');
    return sortedStrings5 == sortedStrings6;
 }
 const pairs = [["Listen", "silent"],["heart","earth"],["debit card", "credit card"]];
 pairs.forEach(pair => {
    const strings5 = pair[0];
    const strings6 = pair[1];

    if (isAnagram(strings5,strings6)) {
        console.log(`"${strings5}" and "${strings6}" are anagrams.`);
    }else{
        console.log(`"${strings5}" and "${strings6}" are not anagrams.`);
    }
 });

 console.log(" Q.13 ========== WAP To Remove character from strings  =================");

 function removeChar(strings7,charToRemove) {
    const regex = new RegExp(charToRemove, 'g');
    return strings7.replace(regex, '');
 }

 const pairs1 = [
    ["Java@Script", '@'],
    ["Softyware", 'y'],
    ["Code mind", ' ']
 ];

 pairs1.forEach(pairs1 =>{
    const strings7 = pairs1[0];
    const charToRemove = pairs1[1];
    const result = removeChar(strings7, charToRemove);
    console.log(`Original String: "${strings7}",Removed '${charToRemove}': "${result}"`);
 });

 console.log(" Q.14 ========== WAP To Reverse The Words from strings  =================");

 function reverseWord(strings8) {
    const Words = strings8.split(' ');
    const reverseWords = Words.map(Words =>{
        return Words.split('').reverse().join('');
    });
    return reverseWords.join(' ');
 }
 const strings8 = [ "Arise! Awake! and stop not until the goal is reached",
                    "Learn with us, Job with us" ];

  strings8.forEach(strings8 =>{
    const reversedString =reverseWord(strings8);
    console.log(`Original String: "${strings8}"`);
    console.log(`Reversed Words: "${reversedString}"`);
    console.log('');
  })

  console.log(" Q.15 ========== WAP To Swapping from strings  =================");

  function swapWords() {
    let WordOne = "Angular";
    let wordTwo = "React";

    [WordOne,wordTwo] = [wordTwo,WordOne];

    console.log(`After swapping: `);
    console.log(`wordOne: ${WordOne}`);
    console.log(`wordTwo: ${wordTwo}`);

  }

  swapWords();

  console.log(" Q.16 ========== WAP To Count spaces from strings  =================");

  function spaceCount(strings9) {
    let Count = 0;
    for (let index = 0; index < strings9.length; index++) {
        if (strings9[index] == ' ') {
            Count++;
        }
    }
    return Count;
  }

  const strings9 = [
    "Revision is the mother of success",
    "JavaScript is the language of internet world"
  ];

  strings9.forEach(strings9 => {
    const Count = spaceCount(strings9);
    console.log(`Number of spaces in "${strings9}": ${Count}`);
  });

  console.log(" Q.17 ========== WAP To Find Numeric Digits from strings  =================");

  function DigitCount(strings10) {
    let Count = 0;
    for (let index = 0; index < strings10.length; index++) {
        if (!isNaN(parseInt(strings10[index]))) {
            Count++;
        }
    }
    return Count;
  }

  const strings10 = [ "Codemind2019","Twenty24","Bharat194India" ];

  strings10.forEach(strings10 =>{
    const Count = DigitCount(strings10);
    console.log(`Number of numeric digits in "${strings10}" : ${Count}`);
    
  })

  console.log(" Q.18 ========== WAP To Count Consonants from strings  =================");

  function ConsonantsCount(strings10) {
    const Consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    let Count = 0;  

    for (let index = 0; index < strings10.length; index++) {
        if (Consonants.includes(strings10[index])) {
            Count++;
        }
    }
    return Count;
  }
  const strings11 = [ "JavaScript","HTML and CSS","Language of Internet",
                    "I am UI Developer","Do or Die" ];
                    
  strings11.forEach(strings11 =>{
    console.log(`Number of Consonants in "${strings11}" : ${ConsonantsCount(strings11)}`);
    
  })                  