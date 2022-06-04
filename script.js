'use strict';

const numbersOfFilms = prompt('Сколько фильмов Вы уже посмотрели?');

const personalMovieDB = {
	count: numbersOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
}

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

for (let i = 0; i < 2; i++) {
	const film = prompt('Один из последних просмотренных фильмов?');
	const filmScore = prompt('На сколько оцените его?');
	if (film !== null && filmScore !== null && film !== '' && filmScore !== '' && film.length < 50) {
		personalMovieDB.movies[film] = filmScore;
	} else {
		i--;
	}
}

console.log(personalMovieDB);