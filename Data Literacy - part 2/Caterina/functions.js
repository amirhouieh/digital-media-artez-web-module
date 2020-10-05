var menu = document.createElement("div");
document.body.append(menu);
menu.classList.add("rectangle");

var container = document.createElement("div");
document.body.append(container);
container.classList.add("box");

function C(number){
  var x = document.getElementById("modal" + number)
  x.style.display = "none";};
function O(number2){
  var y = document.getElementById("modal"+ number2)
  y.style.display = "block";};

  for (var i = 0; i < data.length; i++) {
    var list = document.createElement("p");
    document.body.append(list);
    list.classList.add("TList");
    list.innerText=data[i].title;
    list.setAttribute("onclick","O("+i+");");
    menu.appendChild(list);
  }

for (var i = 0; i < data.length; i++) {
  var album = document.createElement("div");
  document.body.append(album);
  album.classList.add("square");
  container.appendChild(album);
  album.id= "album"+i;


  var cover = document.createElement("img");
  cover.src = data[i].photo;
  var src = document.getElementById("album"+i);
  cover.id="cover"+i;
  cover.style.width = "130px";
  cover.style.height = "130px";
  cover.setAttribute("onclick","O("+i+");");
  src.appendChild(cover);

  var modal = document.createElement("div");
  document.body.append(modal);
  modal.classList.add("modal");
  modal.id= "modal"+i;

  var cont = document.createElement("div");
  document.body.append(cont);
  cont.classList.add("content");

  var close = document.createElement("span");
  document.body.append(close);
  close.classList.add("close");
  close.innerText= "Close";
  close.setAttribute("onclick","C("+i+");");
  cont.appendChild(close);

  var ti = document.createElement("p");
  document.body.append(ti);
  ti.innerText= "TITLE: "+data[i].title;
  cont.appendChild(ti);
  var coversmal = document.createElement("img");
  coversmal.src = data[i].photo;
  coversmal.style.width = "300px";
  coversmal.style.height = "300px";
  coversmal.style.cssFloat = "right";
  cont.appendChild(coversmal);
  var ar = document.createElement("p");
  document.body.append(ar);
  ar.innerText= "ARTIST: "+data[i].artist;
  cont.appendChild(ar);
  var sa = document.createElement("p");
  document.body.append(sa);
  sa.innerText= "SONGS AMOUNT: "+data[i].songs_amount;
  cont.appendChild(sa);
  var ploc = document.createElement("p");
  document.body.append(ploc);
  ploc.innerText= "PURCHASE LOCATION:";
  cont.appendChild(ploc);
  var ne = document.createElement("p");
  document.body.append(ne);
  ne.innerText= "NEIGHBORHOOD: "+data[i].purchase_location.neighborhood;
  cont.appendChild(ne);
  var ci = document.createElement("p");
  document.body.append(ci);
  ci.innerText= "CITY: "+data[i].purchase_location.city;
  cont.appendChild(ci);
  var co = document.createElement("p");
  document.body.append(co);
  co.innerText= "COUNTRY: "+data[i].purchase_location.country;
  cont.appendChild(co);
  var otc = document.createElement("p");
  document.body.append(otc);
  otc.innerText= "OTHER: "+data[i].purchase_location.other;
  cont.appendChild(otc);
  var comp = document.createElement("p");
  document.body.append(comp);
  comp.innerText= "CITY: "+data[i].company;
  cont.appendChild(comp);
  var favs = document.createElement("p");
  document.body.append(favs);
  favs.innerText= "FAVOURITE SONG: "+data[i].favourite_song;
  cont.appendChild(favs);
  var par = document.createElement("p");
  document.body.append(par);
  par.innerText= "CONTENTS:";
  cont.appendChild(par);
  var cd = document.createElement("p");
  document.body.append(cd);
  cd.innerText= "CD: "+data[i].contents.cd;
  cont.appendChild(cd);
  var photoc = document.createElement("p");
  document.body.append(photoc);
  photoc.innerText= "PHOTOCARDS: "+data[i].contents.photo_cards;
  cont.appendChild(photoc);
  var lyri = document.createElement("p");
  document.body.append(lyri);
  lyri.innerText= "LYRICSBOOK: "+data[i].contents.lyrics_book;
  cont.appendChild(lyri);
  var phob = document.createElement("p");
  document.body.append(phob);
  phob.innerText= "PHOTOBOOK: "+data[i].contents.photo_book;
  cont.appendChild(phob);
  var post = document.createElement("p");
  document.body.append(post);
  post.innerText= "POSTER: "+data[i].contents.poster;
  cont.appendChild(post);
  var contoth = document.createElement("p");
  document.body.append(contoth);
  contoth.innerText= "OTHER: "+data[i].contents.other;
  cont.appendChild(contoth);
  var genre = document.createElement("p");
  document.body.append(genre);
  genre.innerText= "GENRE: "+data[i].genre;
  cont.appendChild(genre);
  var listening_time = document.createElement("p");
  document.body.append(listening_time);
  listening_time.innerText= "LISTENING TIME: "+data[i].listening_time;
  cont.appendChild(listening_time);
  var favourite = document.createElement("p");
  document.body.append(favourite);
  favourite.innerText= "FAVOURITE: "+data[i].favourite;
  cont.appendChild(favourite);
  var language = document.createElement("p");
  document.body.append(language);
  language.innerText= "LANGUAGE: "+data[i].language;
  cont.appendChild(language);

  modal.appendChild(cont);
}

window.onclick = function(event) {
  for (var i = 0; i < data.length; i++) {
          var t = document.getElementById("modal"+i);
    if (event.target == t) {
      t.style.display = "none";
  }

  }
}
