var sentence = "I am happy you are reading this sentence";

function stringTool(str) {
    var check = str.split(" ");
    var wordCount = check.length;
    var wordAvg =0;
    var wordArray = [check];
    for (var i = 0 ; i < wordCount.length ; i++) {
        wordAvg += wordArray[i].length;
      }
      var avgLen = wordAvg / wordCount;
    console.log("This string has "+check.length+" words. The average length of each word is "+ avgLen +" characters");
}

stringTool(sentence);
