const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('table');

searchForm.addEventListener('submit', fetchSpace);

function fetchSpace(e) {
    e.preventDefault(); //prevents the page from refreshing when the form is submitted

    fetch(baseURL) //fetch is a method to "fetch" a resource from a resource and returns a promise
    .then(result => {
        return result.json();
    })
    .then(json => {
        //console.log(json);
        displayRockets(json);
    })
    .catch(err => {   //catches anything that is not fulfilled in the promise above
        console.log(err);
    })
}

//when the parameter is another function, it is a callback


function displayRockets(data) {
// console.log(data);
    data.forEach(element => {
        console.log(element); //only uncommenting this out so that I can see the objects so I can grab the images in the objects
        let rocket = document.createElement('tr');
        let rocketName = document.createElement('td');
        let rocketCost = document.createElement('td');
        let rocketImg = document.createElement('img');

        rocketName.innerText = element.name;
        rocketCost.innerText = element.cost_per_launch;
        rocketImg.src = element.flickr_images[0];
        rocketImg.style.height = '50px'; //Styling to make pictures more manageable size on page

        spaceShips.appendChild(rocket);
        rocket.appendChild(rocketName);
        rocket.appendChild(rocketCost);
        rocket.appendChild(rocketImg);
    })
}