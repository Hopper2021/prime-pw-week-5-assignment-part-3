console.log('***** Music Collection *****')

let collection = [];

// I'll try to leave as many of my mistakes commented out to show the steps I took
// and how I got to my answer. Please let me know if you would like me to change this.

// 1st attempt: The below function was adding the three parameters as their own values
// function addToCollection( title, artist, yearPublished ) {
//     collection.push( title, artist, yearPublished );
//     return true;
//   }

// This function actually creates an object and assigns the input parameters as properties.
// There is a discussion on this in Slack that helped me understand
function addToCollection( title, artist, yearPublished ) {
    let album = { title, artist, yearPublished };
    collection.push( album ) ;
    return album;
  }

  // Below, I tried to capture the output in a different value, but I realized that
  // pulling it out from the array its already being pushed to sounds like
  // the better answer.
  // let album = addToCollection();

// Misread instructions and created an album in the wrong place
// const album0 = {
//   title: 'Ultra Blue',
//   artist: 'Hikaru Utada',
//   yearPublished: 2006
// };

// testing addToCollection function, added album incorrectly
// console.log( 'Adding album to collection (expects album properties):', addToCollection( 'Ultra Blue', 'Hikaru Utada', 2006 ) );
// console.log( `My collection now contains: ${collection}` );

// Adding 6 albums to get the 6 to test addToCollection
console.log( 'Added the following albums to collection array:' );
console.log( 'Added:', addToCollection( 'New Eyes', 'Clean Bandit', 2014 ) );
console.log( 'Added:', addToCollection( 'Riot!', 'Paramore', 2007 ) );
console.log( 'Added:', addToCollection( 'After Hours', 'The Weeknd', 2020 ) );
console.log( 'Added:', addToCollection( 'Professional Rapper', 'Lil Dicky', 2015 ) );
console.log( 'Added:', addToCollection( 'Because the Internet', 'Childish Gambino', 2013 ) );
console.log( 'Added:', addToCollection( 'Ultra Blue', 'Hikaru Utada', 2006 ) );
console.log( collection );

// showCollection function, meant to be reusable to show any Collection
// 1st attempt at showCollection properties
function showCollection( collection ) {
  console.log( 'Number of albums in the collection:', collection.length );
  for ( i=0; i<collection.length; i++ ){
    console.log( `${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}` );
  } // end for loop
} // end showCollection

showCollection( collection ); // test showCollection

function findByArtist ( artist ) {
  let result = [];
  for ( i=0; i<collection.length; i++ ) {
    if ( artist === i ) {
      result.push( artist );
      return result;
    } // end if statement, push to result array and return result array
  } return result; // return empty array
} // end findByArtist

findByArtist ( 'The Weeknd' );
