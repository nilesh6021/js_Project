
//arrays are used to store multiple values in a single variable.
//arrays are ordered collections of items.
//arrays can hold items of different data types.
//arrays are zero-indexed, meaning the first element is at index 0.
//You can create an array using square brackets [].
//You can access array elements using their index.
//You can modify array elements by assigning new values to specific indices.
//You can use various array methods to manipulate arrays, such as push(), pop(), shift(), unshift(), splice(), slice(), and more.

//Example of array creation
// const fruits =[]//empty array
// fruits.push("apple");
// fruits.push("banana","orange","peach","grape","mango");
// console.log("Fruites:" ,fruits);
// console.log(fruits.length);

// console.log(fruits[5]);

// console.log(Object.keys(fruits));


 const numberArray =[0,1,2,3,4,5];

 const mixedArray =[0,'chikan',true,2.09,{name:"nilesh"},true];
 console.log(numberArray);
 console.log(mixedArray);

//const musicGenres = ['Rock', 'Pop', 'Country'];

//const musicGenres =new Array('Rock','Pop','Country')

// const musicGenres =[];
// musicGenres.push('Rock','Pop','Counrty');


// const genreOne = 'Rock';
// const genreTwo = 'Pop';
// const genreThree = 'Country';
// const musicGenres = [genreOne, genreTwo, genreThree];

// console.log(musicGenres);

// console.log(musicGenres[0]);
// console.log(musicGenres[0]="Soul");
// console.log(musicGenres);



const musicGenres = [
  ['Rock', 'Pop', 'Country'],
  ['Soul', 'Hip Hop', 'Reggae'],
  ['Folk', 'Classical', 'Electronic'],
];

console.log(musicGenres[1][2]);//reggae
console.log(musicGenres[0][1]);//Pop
console.log(musicGenres[2][1]);//classical
// node arrays.js