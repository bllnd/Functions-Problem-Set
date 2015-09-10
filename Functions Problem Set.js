var sentence = "I am happy you are reading this sentence";

function avgWordLength(str) {
  var wordArray = str.split(" ");
  var charTotal = 0;
  for (var i = 0 ; i < wordArray.length ; i++) {
    charTotal += wordArray[i].length;
  }
  var avgLen = charTotal / wordArray.length;
  console.log("This string has " + wordArray.length + " words. The average length of each word is " + avgLen + " characters");
}

avgWordLength(sentence);
