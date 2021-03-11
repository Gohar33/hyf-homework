// Create your own json file

const myFavoriteMusic = '{"name":"Favorite Music", "genres": [ "electronic", {"rock":["Russian", "Classic"]}, "classical"], "bands": ["DDD", "Pink Floyd", "Metallica"], "performers":["Zemfira", "Nils Frahm", "Christian Löffler", "John Hopkins"]}';
console.log(myFavoriteMusic);

const jsObject = JSON.parse(myFavoriteMusic);
console.log(jsObject)

const favoritePerformer = jsObject.performers[1]
console.log(favoritePerformer)
const favoriteGenre = jsObject.genres[1].rock[0]
console.log(favoriteGenre)

// Find a cool api
fetch('https://api.harvardartmuseums.org/century/37525437?apikey=af433e47-4466-4898-b5ec-28cc0da2ff49')
    .then(response => response.json())
    .then(harvardData => {
        console.log(harvardData);
    })

/* I decided to go with Harvar Museum API and request their API.
They have a broad collection to explore but I wanted
to focus on century collections and each century has its specific key code. So
I chose the code of 18th century and got the JSON data of their collection of
18th century art. The data is structured in strings and objects.Each object has a groupID and name.
*/