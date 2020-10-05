console.log(cds);
  //----------example 280920-------------------------------
  // var test = document.createElement("h1");
  // var number =1;
  //
  // document.body.append(test);
  // test.innerText = number;
  // window.onclick = () =>{
  //   number = number+1;
  //   test.innerText = number;
  // }
  //
  // console.log(number);
  //--------------------------------------------------------

//enter one specific thing
// console.log(cds[15].contents);


for(var i =0; i<cds.length;i++){

  var oneRecord = cds[i];
  
  //displays all

  var card = document.createElement("div");
  card.className = "cd_card";

  var text_container = document.createElement("div");
  text_container.className = "text_container";

  var title = document.createElement("div");
  title.innerText = oneRecord.title;
  title.className = "title";

  var artist = document.createElement("div");
  artist.innerText = oneRecord.artist;
  artist.className = "artist-name";

  var songs_amount = document.createElement ("div");
  songs_amount.innerText = "amount of songs: " + oneRecord.songs_amount;
  songs_amount.className = "songs_number";

  var purchase_location_neighborhood = document.createElement ("div");
  purchase_location_neighborhood.innerText = "neighborhood: " + oneRecord.purchase_location.neighborhood;
  purchase_location_neighborhood.className = "location_neighborhood";

  var purchase_location_city = document.createElement ("div");
  purchase_location_city.innerText = "city: " + oneRecord.purchase_location.city;
  purchase_location_city.className = "location_city"

  var purchase_location_country = document.createElement ("div");
  purchase_location_country.innerText = "country: " + oneRecord.purchase_location.country;
  purchase_location_country.className = "location_country";

  var purchase_location_other = document.createElement ("div");
  purchase_location_other.innerText = "other: " + oneRecord.purchase_location.other;
  purchase_location_other.className = "location_other";

  var company_name = document.createElement ("div");
  company_name.innerText = "company: " + oneRecord.company;
  company_name.className = "company_name";

  var favourite_song = document.createElement ("div");
  favourite_song.innerText = "favourite song: " + oneRecord.favourite_song;
  favourite_song.className = "favourite_song";

  var genre = document.createElement ("div");
  genre.innerText = "genre: " + oneRecord.genre;
  genre.className = "genre";

  var listening_time = document.createElement ("div");
  listening_time.innerText = "how often do I listen to it: " + oneRecord.listening_time;
  listening_time.className = "listening_time";

  var favourite = document.createElement ("div");
  favourite.innerText = "is it my favourite cd?: " + oneRecord.favourite;
  favourite.className = "favourite";

  var language = document.createElement("div");
  language.innerText = "language: " + oneRecord.language;
  language.className = "language";

  var image = document.createElement ("img");
  card.className = "images_scroll";
  image.src = "cds_images/" + oneRecord.photo;


  if(oneRecord.favourite === false){
    card.style.opacity = 0.2;
  }



  var locationContainer = document.createElement("div");

  locationContainer.append(purchase_location_neighborhood);
  locationContainer.append(purchase_location_city);
  locationContainer.append(purchase_location_country);

  if(oneRecord.purchase_location.other !== "unknown"){
    locationContainer.append(purchase_location_other);
  }

 

  locationContainer.className = "location-container"

  card.append(image);
  card.append(title);
  card.append(artist);
  card.append(songs_amount);
  
  card.append(locationContainer);

  card.append(company_name);
  card.append(favourite_song);
  card.append(listening_time);
  card.append(favourite);
  card.append(language);
  card.append(genre);


  document.body.append(card);


}


// //KNOW THE BELOW PART BY HEART!-----------------------
// var titleElement = document.createElement("h1");
// //room called titleElement which is h1
//
// document.body.append(titleElement);
// //calling titleElement and put in body
//
// //now you put the text hi in the h1/titleElement and it's
// //displayed on the screen yay
// titleElement.innerText = "hi";
//
// //--------TILL HERE-----------------------------------
//
// var artistElement = document.createElement("div");
// document.body.append(artistElement);
// artistElement.innerText = "carmen";
