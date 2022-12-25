"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');



if(numberOfFilms < 10) {
	console.log('просмотрено довольно мало фильмов');
} else if(numberOfFilms > 10 || numberOfFilms < 30) {
	console.log('вы классический зритель');
} else if(numberOfFilms > 30) {
	console.log('вы киноман');
}else {
	console.log('произошла ошибка');
}

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
	
};




for(let i = 0; i < 2; i++) {
	let a = prompt("один из последних просмотренных фильмов?", ""),
		b = prompt("на сколько вы его оцените?", "");


	if(a != null && b != null && a != '' && b != '' &&  a.length < 50) {
		personalMovieDB.movies[a] = b;
	} else {
		i--;
	}
}

console.log(personalMovieDB);