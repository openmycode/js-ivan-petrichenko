'use strict';

const personalMovieDB = {
	count: '',
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	numbersOfFilms: '',
	start: function() {
		this.count = +prompt('Сколько фильмов Вы уже посмотрели?');
		while (this.count === '' || this.count === null || isNaN(this.count)) {
			this.count = +prompt('Сколько фильмов Вы уже посмотрели?');
		}
	},
	detectPersonalLevel: function() {
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
	},
	rememberMyFilms: function() {
		for (let i = 0; i < 2; i++) {
			const film = prompt('Один из последних просмотренных фильмов?');
			const filmScore = prompt('На сколько оцените его?');
			if (film !== null && filmScore !== null && film !== '' && filmScore !== '' && film.length < 50) {
				personalMovieDB.movies[film] = filmScore;
			} else {
				i--;
			}
		}
	},
	showMyDB: function() {
		if (personalMovieDB.privat === false) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function() {
		if (this.toggleVisibleMyDB === true) {
			this.toggleVisibleMyDB = false;
		} else {
			this.toggleVisibleMyDB = true;
		}
	},
	writeYourGenres: function() {
		for (let i = 0; i < 3; i++) {
			let genreData = prompt(`Ваш любимый жанр под номером ${i + 1}?`);
			if (genreData !== null && genreData !== '') {
				personalMovieDB.genres[i] = genreData;
			} else {
				i--;
			}
		}
		this.genres.forEach(function(elem, index) {
			console.log(`Любимый жанр #${index + 1} - это ${elem}`);
		})
	},
}

personalMovieDB.start();

personalMovieDB.detectPersonalLevel();

personalMovieDB.rememberMyFilms();

personalMovieDB.showMyDB();

personalMovieDB.writeYourGenres();