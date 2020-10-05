console.log(music);

for(var i = 0; i < music.length; i++){

	var oneRecord = music[i];
	console.log(i, oneRecord);

	var card = document.createElement("div");
	card.className = "music-card"

	var title = document.createElement("h1");
	title.innerText = oneRecord.title;

	var length_min = document.createElement("h3");
	length_min.innerText = oneRecord.length_min;

  var genre = document.createElement("h3");
  genre.innerText = oneRecord.genre;

  var artist = document.createElement("h2");
  artist.innerText = oneRecord.artist;

  var year = document.createElement("h3");
  year.innerText = oneRecord.year;

  var image = document.createElement("img");
  image.src = oneRecord.image;

	card.append(title);
	card.append(artist);
	card.append(year);
	card.append(genre);
	// card.append(length_min);
  card.append(image);

	document.body.append(card);
}
