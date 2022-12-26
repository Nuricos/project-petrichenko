"use strict";

let numberOfFilms;

function start() {
       numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        let a = prompt("один из последних просмотренных фильмов?", ""),
            b = prompt("на сколько вы его оцените?", "");
    
    
        if(a != null && b != null && a != '' && b != '' &&  a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}
// rememberMyFilms();

function detectPersonalLevel() {
    if(numberOfFilms < 10) {
        console.log('просмотрено довольно мало фильмов');
    } else if(numberOfFilms > 10 || numberOfFilms < 30) {
        console.log('вы классический зритель');
    } else if(numberOfFilms > 30) {
        console.log('вы киноман');
    }else {
        console.log('произошла ошибка');
    }
}
// detectPersonalLevel();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
    
};

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
} 
showMyDB(personalMovieDB.privat);

function writeYourGenres() { 
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр по порядку ${i}`);
    }
}
writeYourGenres();
