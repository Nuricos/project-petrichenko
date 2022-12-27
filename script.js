"use strict";



let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
 
     while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
     }
 },
    rememberMyFilms: function() {
    for(let i = 0; i < 2; i++) {
        let a = prompt("один из последних просмотренных фильмов?", "").trim(),
            b = prompt("на сколько вы его оцените?", "");
    
    
        if(a != null && b != null && a != '' && b != '' &&  a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
    },
    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10) {
            console.log('просмотрено довольно мало фильмов');
        } else if(personalMovieDB.count > 10 || personalMovieDB.count < 30) {
            console.log('вы классический зритель');
        } else if(personalMovieDB.count > 30) {
            console.log('вы киноман');
        }else {
            console.log('произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() { 
        for(let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр по порядку ${i}`);

            if(genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные');
            } else {
                personalMovieDB.genres[i-1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};











