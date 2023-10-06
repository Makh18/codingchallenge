//function to get all longest word in the input sentence
function longestwords (str) {
    let words = str.split(' ')
    let max = 0
    words.forEach(word => {
      if (word.length > max) max = word.length
    })
    return words.filter(word => word.length === max)
  }
  //input sentence
  let stringinput="smart people learn from everything and everyone average people from their experience stupid people already, have all the answers"
  //call the function to find the longest words and put them in an array
  let longwords=longestwords(stringinput);
  //print the array of the longest words on console
  //console.log(longwords);
  //function to count the number of vowels in a string
  function countVowels(s) {
    //regex to get vowels
    var c = s.match(/[aeiou]/gi);
    return c === null ? 0 : c.length;
  }
  //function to find the word that has the most number
  // of vowels within the array longwords
  function countmaxvowels(longwords){
  var maxv=0;
  let word=null;
  longwords.forEach(function(st) {
    var v=countVowels(st)
    if(v>maxv){
      maxv=v
      word=st
    }
  })
  return word;
  }
  //print the final result on console
  console.log("the longest word with the most number of vowels is:",countmaxvowels(longwords))
  
  