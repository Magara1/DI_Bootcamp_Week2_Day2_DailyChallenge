/* 1-Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
For example, “The movie is not that bad, I like it”. */

let sentence = "People are doing a sport always, it not bad for the health"


/*2-Create a variable called wordNot where it’s value is the first appearance
 (ie. the position) of the substring “not” (from the sentence variable). */

 let wordNot = sentence.indexOf("not");

 /*3-Create a variable called wordBad where it’s value is the first appearance 
 (ie. the position) of the substring “bad” (from the sentence variable). */

 let wordBad =sentence.indexOf("bad")

 //4

 if(wordBad>wordNot){
    sentence = sentence.replace(sentence.substring(wordNot, wordBad +3), "good")
 }

 //5

 console.log(sentence)




