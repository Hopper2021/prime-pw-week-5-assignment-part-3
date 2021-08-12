console.log('***** Music Collection *****')

let collection = [];

function addToCollection( title, artist, yearPublished ) {
    collection.push( title, artist, yearPublished );
    return true;
  }

album0 = {
  title: 'Ultra Blue',
  artist: 'Hikaru Utada',
  yearPublished: 2006
}

console.log( 'Adding album0 to collection (expects true):', addToCollection( album0 ) );
console.log( `My collection now contains: ${collection}` );
