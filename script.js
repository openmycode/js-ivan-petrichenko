'use strict';

let numbersOfFilms;

function start() {
	numbersOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?');
	while (numbersOfFilms === '' || numbersOfFilms === null || isNaN(numbersOfFilms)) {
		numbersOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?');
	}
}

const personalMovieDB = {
	count: numbersOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
}

function detectPersonalLevel() {
	switch (true) {
		case personalMovieDB.count < 10:
			console.log("Просмотренно слишком мало фильмов!");
			break;
		case personalMovieDB.count >= 10 && personalMovieDB.count < 30:
			console.log("Вы классический зритель");
			break;
		default:
			console.log("Вы настоящий киноман!");
			break;
	}
}

detectPersonalLevel();

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const film = prompt('Один из последних просмотренных фильмов?');
		const filmScore = prompt('На сколько оцените его?');
		if (film !== null && filmScore !== null && film !== '' && filmScore !== '' && film.length < 50) {
			personalMovieDB.movies[film] = filmScore;
		} else {
			i--;
		}
	}
}

rememberMyFilms();

console.log(personalMovieDB);