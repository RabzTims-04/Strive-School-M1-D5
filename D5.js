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

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/

let test = "I am Starting my solo Project for D5"
console.log(test);

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/

let sum = 10 + 20
console.log(`The sum of 10 + 20 is ${sum}`);

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

let random = Math.floor(Math.random() * 20)
console.log(`This is a random number ${random}`);

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

let me = {
    name: 'Sam',
    surname: 'Peter',
    age: 22
}

console.log('You can find my information here:', me)

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/

delete me.age
console.log('My full name:', me);


/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/

me.skills = ['C++', 'Matlab', 'R', 'JavaScript']
console.log('Programming Skills added to user me', me);

/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/

delete me.skills.pop()
console.log('Last skill removed from the user skills me', me);

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

const dice = function(){

    let randomize = Math.ceil(Math.random() * 6)
    return randomize
}

console.log('This is a function to generate a random number between 1 and 6', dice());

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/

const whoIsBigger = function(num1, num2){

    if(num1 > num2){
        return num1 + ' is greater than '+ num2
    }
    else if(num1 < num2){
        return num2 + ' is greater than ' + num1
    }
    else{
        return num1 + ' and ' + num2 + ' are equal numbers'
    }

}

console.log('Which number is greater?', whoIsBigger(100,100));

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

const splitMe = function(wordSplit){

    let arrayWord = []
    arrayWord = wordSplit.split(" ")
    return arrayWord
}

console.log('This will split the string in array', splitMe('I love playing Badminton!!'))

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

const deleteOne = function(Str, bool){

    let statment
    return statement = bool === true? Str.slice(1): Str.slice(0,-1)

    /* if(bool === true){

        return Str.slice(1)

    }
    else{
        return Str.slice(0,-1)
    } */

}

console.log('Is your name Afif or fifa?', deleteOne('Afifa', true));

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/

const onlyLetters = function(letter){

    let letterArray = []     
    letterArray = letter.split(' ')
    console.log(letterArray);

    for(let i=0; i<letterArray.length; i++){

        if(isNaN(letterArray[i])){
            
            letterArray[i] = letterArray[i]            
        }
        else{

            delete letterArray[i]
        }        
    } 

    return letterArray.join(' ')
}
console.log(onlyLetters('I have 2 Laptops'));

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/

const isThisAnEmail = function(email){

       if(email.includes('@') && email.includes('.com') ){

        return 'Email is Valid'
    }

    else{
        return 'Email is invalid'
    }       
}

console.log(isThisAnEmail('sampeter@mail.om'));

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/

const whatDayIsIt = function(){

    let date = new Date()
    return date.getDay()
}

console.log('Friday is week',whatDayIsIt());

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

const rollTheDices = function(num){

    let diceArray = []
    let add = 0
    let object
    
for(let j=0; j<num; j++){

    diceArray[j] = dice() 
    add = add + diceArray[j]
}
   return object = {
        sum: add,
        values: diceArray
} 

}

console.log('Random occurences of dices and its sum', rollTheDices(3))

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/

const howManyDays = function(date){


}

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/

const isTodayMyBirthday = function(){

    
    //ew Date('December 25, 1995 23:15:30');
   let birthDate = new Date ('April 17')
   let todaysDate = new Date()
   let date = birthDate.getDate()
   let month = birthDate.getMonth()

   if(todaysDate.getDate() === date && todaysDate.getMonth() === month){
       return true
   }
   else{
       return false
   }   
   
}
console.log(isTodayMyBirthday());

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/

 const deleteProp = function(obj, str1){

    obj = {
        name: str1,
    }

    console.log(typeof obj);
    
      if(obj.name == str1){
        delete obj.name
        return obj
        }
        else{
            return obj
        }    
}



/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/
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

const olderMovie = function(){

    
    let oldestMovie = movies[0]
    for ( let oldMovie=0; oldMovie<movies.length;oldMovie++) {
        if(oldMovie.Year < oldestMovie.Year){
            oldestMovie = oldMovie
            }
    }

    return oldestMovie
    
}
console.log(olderMovie());

/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/

const countMovies = function(){

    let numberOfMovies = movies.length
    return numberOfMovies
}

console.log(countMovies());

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/

const onlyTheTitles = function(){

    let titleArray = []

    for( titleMovie of movies){

           titleArray.push(titleMovie.Title)
    }

    return titleArray
}

console.log(onlyTheTitles());


/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/

const onlyInThisMillennium = function(){

    let moviesOfThisMill = []

    for(movieMill of movies){
        if(movieMill.Year >= 2000){
            moviesOfThisMill.push(movieMill)
        }
    }
    return moviesOfThisMill
}

console.log(onlyInThisMillennium());

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/

const getMovieById = function(id){

    for(movieId of movies){
        if(id === movieId.imdbID){
            return movieId
        }
    
       }

       return 'no match' 
}

console.log(getMovieById("tt4154756"));

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/

const sumAllTheYears = function(){

    let sumOfYears = 0
    for(sumYears of movies) {
        sumOfYears = sumOfYears + parseInt(sumYears.Year, 10)
    }
    return sumOfYears
  }

   console.log(sumAllTheYears())

/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/

/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

/* This movies array is used throughout the exercises. Please don't change it :)  */
