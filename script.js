'use strict';

const numbersOfFilms = prompt('Сколько фильмов Вы уже посмотрели?');

const personalMovieDB = {
	count: numbersOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
}

let film = prompt('Один из последних просмотренных фильмов?');
let filmScore = prompt('На сколько оцените его?');
personalMovieDB.movies[film] = filmScore;
film = prompt('Один из последних просмотренных фильмов?');
filmScore = prompt('На сколько оцените его?');
personalMovieDB.movies[film] = filmScore;

console.log(personalMovieDB);