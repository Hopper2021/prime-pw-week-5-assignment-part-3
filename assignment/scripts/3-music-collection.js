console.log('***** Music Collection *****')

let collection = [];

// This function actually creates an object and assigns the input parameters as properties.
// There is a discussion on this in Slack that helped me understand
function addToCollection( title, artist, yearPublished ) {
    let album = { title, artist, yearPublished };
    collection.push( album ) ;
    return album;
  }

// Adding 6 albums to get the 6 to test addToCollection
console.log( 'Added the following albums to collection array:' );
console.log( 'Added:', addToCollection( 'New Eyes', 'Clean Bandit', 2014 ) );
console.log( 'Added:', addToCollection( 'What is love?', 'Clean Bandit', 2007 ) );
console.log( 'Added:', addToCollection( 'After Hours', 'The Weeknd', 2020 ) );
console.log( 'Added:', addToCollection( 'Professional Rapper', 'Lil Dicky', 2015 ) );
console.log( 'Added:', addToCollection( 'Because the Internet', 'Childish Gambino', 2013 ) );
console.log( 'Added:', addToCollection( 'Ultra Blue', 'Hikaru Utada', 2006 ) );
console.log( collection );

// showCollection function, meant to be reusable to show any Collection
// 1st attempt at showCollection properties
function showCollection( collection ) {
  console.log( 'Number of albums in the collection:', collection.length );
  for (let i=0; i<collection.length; i++ ){
    console.log( `${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}` );
  } // end for loop
} // end showCollection

showCollection( collection ); // test showCollection

function findByArtist ( artist ) {
  let result = [];
  for (let i=0; i<collection.length; i++ ) {
    if ( artist === collection[i].artist ) {
      result.push( artist ); // push input parameter into array
    } // end if statement
  } return result; // return array here to get all iterations of Clean Bandit(2)
} // end findByArtist

console.log( 'Find artist (expects Clean Bandit twice):', findByArtist ( 'Clean Bandit' ) ); // testing findByArtist
console.log( 'Find artist (expects empty array):',findByArtist ( 'UVERworld' ) ); // testing findByArtist

function search( object ) {
  let result = [];
  for (let i=0; i<collection.length; i++ ) {
    if ( object.artist === collection[i].artist && object.year === collection[i].yearPublished ) {
      result.push( object );
      return result; // jumps out of loop if OBJECT is found
    } // end if statement
  } return collection; // if OBJECT is not found, returns collection
} // end search function

console.log( 'Find Ray Charles (expects collection):', search({ artist: 'Ray Charles', year: 1957 }) );
console.log( 'Added:', addToCollection ( 'Some song', 'Ray Charles', 1957 ) ); // adding to test search
console.log( 'Find Ray Charles (expects Ray Charles, 1957):', search({ artist: 'Ray Charles', year: 1957 }) );
