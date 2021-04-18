console.log('My First Project************DAY5************MODULE 1');

/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics
console.log('');

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/

console.log('*************EXERCISE A***************');
console.log('');

let test = "I am Starting my solo Project for D5"
console.log(test);
console.log('');

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/
console.log('*************EXERCISE B***************');
console.log('');

let sum = 10 + 20
console.log(`The sum of 10 + 20 is ${sum}`);
console.log('');

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
console.log('*************EXERCISE C***************');
console.log('');

let random = Math.floor(Math.random() * 20)
console.log(`This is a random number ${random}`);
console.log('');

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
console.log('*************EXERCISE D***************');
console.log('');

let me = {
    name: 'Rabia',
    surname: 'Ilyas',
    age: 22
}

console.log('You can find my information here:', me)
console.log('');

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
console.log('*************EXERCISE E***************');
console.log('');

delete me.age
console.log('My full name:', me);
console.log('');

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/
console.log('*************EXERCISE F***************');
console.log('');

me.skills = ['C++', 'Matlab', 'R', 'JavaScript']
console.log('Programming Skills added to user me', me);
console.log('');

/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/
console.log('*************EXERCISE G***************');
console.log('');

delete me.skills.pop()
console.log('Last skill removed from the user skills me', me);
console.log('');

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/
console.log('*************EXERCISE 1***************');
console.log('');

const dice = function(){

    let randomize = Math.ceil(Math.random() * 6)
    return randomize
}

console.log('This is a function to generate a random number between 1 and 6', dice());
console.log('');

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/
console.log('*************EXERCISE 2***************');
console.log('');

const whoIsBigger = function(num1, num2){

     return bigger = num1 > num2 ? `${num1} is greater than ${num2}` : num1 < num2 ? `${num2} is greater than ${num1}`: `${num1} and ${num2}  are equal numbers`

     /* if(num1 > num2){
        return num1 + ' is greater than '+ num2
    }
    else if(num1 < num2){
        return num2 + ' is greater than ' + num1
    }
    else{
        return num1 + ' and ' + num2 + ' are equal numbers'
    } */ 
}
console.log('Which number is greater?', whoIsBigger(5,2));
console.log('');

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
console.log('*************EXERCISE 3***************');
console.log('');

const splitMe = function(wordSplit){

    let arrayWord = []
    arrayWord = wordSplit.split(" ")
    return arrayWord
}

console.log('This will split the string in array', splitMe('I love playing Badminton!!'))
console.log('');

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
console.log('*************EXERCISE 4***************');
console.log('');

const deleteOne = function(Str, bool){

    return statement = bool === true? Str.slice(1): Str.slice(0,-1)
    /* if(bool === true){
        return Str.slice(1)
    }
    else{
        return Str.slice(0,-1)
    } */
}
console.log('Is your name Afif or fifa?', deleteOne('Afifa', true));
console.log('');

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/
console.log('*************EXERCISE 5***************');
console.log('');

function onlyLetters(str) {
    let result = ""
    let condition
    for(let i = 0; i < str.length; i ++){
        let currentLetter = str[i]
        // if (isNaN(currentLetter) || currentLetter===' ')
        //     result += currentLetter
           condition = isNaN(currentLetter) || currentLetter===' ' ? result += currentLetter : delete currentLetter
    }
    return condition
}

// const onlyLetters = function(letter){

//     let stringArray =[]      
//     let letterArray = letter.split('')
//     for(let i=0; i<letterArray.length; i++){

//         /* stringArray = isNaN(letterArray[i]) === true || letterArray[i] === ' '? stringArray.push(letterArray[i]) : delete letterArray[i] */
//          if(isNaN(letterArray[i]) === true || letterArray[i] === ' '){
            
//             stringArray.push(letterArray[i])            
//         }
//         else{
//             delete letterArray[i]
//         }      
//     } 

//     return stringArray.join('')
// }
console.log('Words without numbers for I have 2 L3aptops: ',onlyLetters('I have 2 L3aptops'));
console.log('');

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/
console.log('*************EXERCISE 6***************');
console.log('');

const isThisAnEmail = function(email){

       if(email.includes('@') && email.includes('.com') ){

        return 'Email is Valid'
    }
    else{
        return 'Email is invalid'
    }       
}
console.log(isThisAnEmail('sampeter@mail.om'));
console.log('');
/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/
console.log('*************EXERCISE 7***************');
console.log('');

const whatDayIsIt = function(){

    let weekArray = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]

    let currentDay = new Date().getDay()
    return weekArray[currentDay]
}

console.log('Today is',whatDayIsIt());
console.log('');
/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/
console.log('*************EXERCISE 8***************');
console.log('');

const rollTheDices = function(num){

    let diceArray = []
    let add = 0  
    for(let i=0; i<num; i++){

    diceArray[i] = dice() 
    add += diceArray[i]
}
   return object = {
        sum: add,
        values: diceArray
    }
}

console.log('Random occurences of dices and its sum', rollTheDices(3))
console.log('');

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/
console.log('*************EXERCISE 9***************');
console.log('');

const howManyDays = function(oldYear, oldMonth, oldDate){

    let todaysDate = new Date().getDate()
    let todaysMonth = new Date().getMonth()
    let todaysYear = new Date().getFullYear()
    let todaysDay = [todaysYear, todaysMonth, todaysDate]
    let oldDay = [oldYear, oldMonth-1, oldDate]
    return dateDiff = (new Date (todaysDay) - new Date(oldDay))/(1000 * 60 * 60 * 24)
    // console.log(todaysDay);
    // console.log(oldDay);
    // console.log(new Date(todaysDay), new Date(oldDay));
    // console.log(dateDiff)
    //  return dateDiff/(1000 * 60 * 60 * 24)

    /* let today = new Date()
    console.log(today);
    let difference = today - date
    console.log(difference);
    return difference/(1000 * 60 * 60 * 24) */
    
}
/* ------------------------THANKS FOR TIAGO'S HELP----------------------------------- */

 /* let prompt = require("prompt-sync")()
 let oldYear = prompt("Insert year (YYYY): ") 
 let oldMonth = prompt("Insert month (1-12): ") 
 let oldDate = prompt("Insert date (1-31): ") 
 
 console.log('It was', howManyDays(oldYear, oldMonth, oldDate), 'days before') 
 */
 /* ----------------------------------------------------------------------------------- */
 console.log('');

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/
console.log('*************EXERCISE 10***************');
console.log('');

const isTodayMyBirthday = function(day, month, year){

    let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let todaysDate = new Date().getDate()
    let todaysMonth = monthArray[new Date().getMonth()]
    let todaysYear = new Date().getFullYear()
    let myBirthdate = 04
    let myBirthMonth = monthArray[11]   

    console.log(`Today is ${todaysDate}th, ${todaysMonth}, ${todaysYear}`);
    console.log(`My Birthday is on ${myBirthdate}th, ${myBirthMonth}`);

   if(todaysDate === myBirthdate && todaysMonth === myBirthMonth){
       return `${true}, Today is my Birthday`
   }
   else{
       return`${false}, Today is not my Birthday`
   }      
}
console.log(isTodayMyBirthday());

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!
console.log('');
/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/
 console.log('*************EXERCISE 11***************');
 console.log('');

 const deleteProp = function(obj, str1){

    delete obj[str1]
    return obj
}

console.log(deleteProp({name:'rabz', color:'green', favNumber: 8}, 'color'));
console.log('');

const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
  ]

/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/
console.log('*************EXERCISE 12***************');
console.log('');

const olderMovie = function(){

    let oldestMovie = movies[0]
    for(let i=1; i<movies.length; i++){
        if(movies[i].Year < oldestMovie.Year){
            oldestMovie = movies[i]
        }
    } 
    
/*     let oldestMovie = movies[0]
    for ( let oldMovie=0; oldMovie<movies.length;oldMovie++) {
        if(oldMovie.Year < oldestMovie.Year){
            oldestMovie = oldMovie
            }
    } */

    return oldestMovie    
}
console.log('The oldest movie in the collection is: ',olderMovie());
console.log('');
/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/
console.log('*************EXERCISE 13***************');
console.log('');

const countMovies = function(){

    let numberOfMovies = movies.length
    return numberOfMovies
}

console.log('The total number of Movies are: ',countMovies());
console.log('');
/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/
console.log('*************EXERCISE 14***************');
console.log('');

const onlyTheTitles = function(){

    let titleArray = []
    for(let i=0; i<movies.length; i++){
        titleArray.push(movies[i].Title)
    }
   /*  for( titleMovie of movies){

           titleArray.push(titleMovie.Title)
    } */
    return titleArray
}

console.log('Title of the movies are: ',onlyTheTitles());
console.log('');

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/
console.log('*************EXERCISE 15***************');
console.log('');

const onlyInThisMillennium = function(){

    let moviesOfThisMill = []
    for(let i=0; i<movies.length; i++){
        if(movies[i].Year >= 2000){
            moviesOfThisMill.push(movies[i])
        }
    }
    /* for(movieMill of movies){
        if(movieMill.Year >= 2000){
            moviesOfThisMill.push(movieMill)
        }
    } */
    return moviesOfThisMill
}

console.log('Movies of this Millenium are: ',onlyInThisMillennium());
console.log('');
/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/
console.log('*************EXERCISE 16***************');
console.log('');

const getMovieById = function(id){
let movieID = []
    for(let i=0; i<movies.length; i++){
        if(id === movies[i].imdbID){
            return movies[i]
        }
    }
    /* for(movieId of movies){
        if(id === movieId.imdbID){
            return movieId
        }    
    }
 */
    }

console.log('Movie with the given ID is: ',getMovieById("tt4154756"));
console.log('');

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/
console.log('*************EXERCISE 17***************');
console.log('');

const sumAllTheYears = function(){

    let sumOfYear = 0
    for(let i=0; i<movies.length; i++){
        sumOfYear += parseInt(movies[i].Year)
    }
    return sumOfYear

    /* let sumOfYears = 0
    for(sumYears of movies) {
        sumOfYears = sumOfYears + parseInt(sumYears.Year, 10)
    }
    return sumOfYears
   */
}
console.log('The total sum of all the years are: ',sumAllTheYears())
console.log('');

/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/
console.log('*************EXERCISE 18***************');
console.log('');

const searchByTitle = function(search){
    let stringReturn = []
    for(let i=0; i<movies.length; i++){
        if(movies[i].Title.toLowerCase().includes(search.toLowerCase())){
            stringReturn.push(movies[i])
        }
}
/* for(titleSearch of movies){
    if(titleSearch.Title.includes(search)){
        stringReturn.push(titleSearch)
    }
} */
return stringReturn
}
console.log('Search result for the movie titles: ',searchByTitle('ring'));
console.log('');

/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/
console.log('*************EXERCISE 19***************');
console.log('');

const searchAndDivide = function(str2){
    let objectMU = {
        match:[],
        unmatch:[]
    }

    objectMU.match = searchByTitle(str2)
    objectMU.unmatch = movies.filter(movie => !movie.Title.toLowerCase().includes(str2.toLowerCase())) 
    
    return objectMU
}

console.log('Matched and Unmatched Array of Object: ',searchAndDivide('rings'));
console.log('');

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/
console.log('*************EXERCISE 20***************');
console.log('');

const removeIndex = function(num3){

    let length = num3 - 1
   return movies.splice(length, 1)
}

console.log('Removed Movie at given index is: ',removeIndex(13));
console.log('Movies array without the movie removed at given index: ',movies);
console.log('');

// [EXTRAS] JS Advanced
/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/
console.log('*************EXERCISE 21***************');
console.log('');
const halfTree = function(number1){
    for(let i=0; i<= number1; i++){
        let starHalfTree = '*'. repeat(i)
        console.log('My Half Star Tree: ', starHalfTree);
    }
}
halfTree(10)
console.log('');

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/
console.log('*************EXERCISE 22***************');
console.log('');
function tree(number2){
    for(let i=0; i< number2; i++){
        let starTree = '*'.repeat(2*i + 1)
        let spaces = " ".repeat(number2 - i - 1)
        let fullTree =  spaces + starTree
        console.log('My full Star Tree: ',fullTree);
    }
}
tree(10)
console.log('');

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/
console.log('*************EXERCISE 23***************');
console.log('');

function isItPrime(primeNum){
    for(let i=2; i<primeNum; i++){
        if(primeNum % i !== 0)
        return `${true}, ${primeNum} is a prime number`
    }
    return `${false}, ${primeNum} is not a prime number`  
}

console.log(isItPrime(31))

/* This movies array is used throughout the exercises. Please don't change it :)  */
