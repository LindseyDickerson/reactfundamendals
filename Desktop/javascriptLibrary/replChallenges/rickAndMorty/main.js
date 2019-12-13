//fetch('https://rickandmortyapi.com/api/character')

const baseURL = 'https://rickandmortyapi.com/api/character';

    fetch(baseURL)
    .then(result => {
        return result.json();
    })
    .then(json => {
        //console.log(json);
        rickMortyPics(json);
    })
    .catch(err => {
        console.log(err);
    });


function rickMortyPics(pics) {
    console.log(pics);
    pics.forEach(element => {
        console.log(element);

         let rickImage = document.body.imageOne('img');
         let mortyImage = document.body.imageTwo('img');
         
         rickImage.src = element.results[0].image;
         mortyImage.src = element.results[1].image;

         
    })
}
