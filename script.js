const APILINK = "https://api.themoviedb.org/3/movie/550?api_key=c446c717e08f28e130b7014181197b2b";
const IMG_PATH = "https://image-tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=c446c717e08f28e130b7014181197b2b";

const main = document.getElementById("movies");
const form = document.getElementById("searchbar");
const search = document.getElementById("query");

returnMovies(https://api.themoviedb.org/3/movie/550?api_key=c446c717e08f28e130b7014181197b2b)
function returnMovies(url) {
    fetch(url).then(res => res.json())
    .then(function(data)) {
        console.log(data.results)
        data.results.forEach(element => {

        }

        )
    }
}

