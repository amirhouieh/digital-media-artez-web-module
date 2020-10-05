console.log(places);

for(var i = 0; i < places.length; i++){
  var onePlace = places[i];
	console.log(i, onePlace);

  var place = document.createElement("div");
  place.className = "place"

  var image = document.createElement("img");
  place.className = "image";
  image.src = "images/" + onePlace.image;

  var time = document.createElement("h1");
  time.innerText = onePlace.time;
  time.className = "time";

  var location_house = document.createElement("h2");
  location_house.innerText = onePlace.location_info.location_house;
  location_house.className = "location_house";

  var object = document.createElement("h3");
  object.innerText = onePlace.location_info.object;
  object.className = "object";

  var color_object = document.createElement("h4");
  color_object.innerText = onePlace.location_info.color_object;
  color_object.className = "color_object";

  var in_my_way = document.createElement("h5");
  in_my_way.innerText = onePlace.location_info.in_my_way;
  in_my_way.className = "in_my_way";

  var location_on_object = document.createElement("h6");
  location_on_object.innerText = onePlace.location_info.location_on_object;
  location_on_object.className = "location_on_object";


  var position = document.createElement("h8");
  position.innerText = onePlace.position_info.position;
  position.className = "position";

  var facing_camera = document.createElement("h9");
  facing_camera.innerText = onePlace.position_info.facing_camera;
  facing_camera.className = "facing_camera";

// LYING
if (onePlace.position_info.position == "lying"){
   // image.style.transform = "skewY(10deg)";
  image.style.transform = "skewX(20deg)";
}

// IN MY WAY
  if(onePlace.location_info.in_my_way == true) {
     image.style.width = "100%";
     image.style.height = "auto";
     place.style.margin.top= "-40px";
   }

  else if(onePlace.location_info.in_my_way == false) {
      // image.style.width = "%";
      // image.style.height = "auto";
      place.style.margin.top = "100px"
    }

//  POSITION IMAGES
   if(onePlace.location_info.location_on_object == "center") {
   		place.style.textAlign = "center";
   	}

    else if (onePlace.location_info.location_on_object == "right") {
      place.style.textAlign = "right";
    }

// FACING CAMERA
    if(onePlace.position_info.facing_camera == true) {
       image.style.filter = "grayscale(100%)";
     }

// COLOR OBJECT
if(onePlace.location_info.color_object == "white") {
   object.style.color = "white";
 }
 else if(onePlace.location_info.color_object == "brown") {
   object.style.color = "sienna";
 }
 else if (onePlace.location_info.color_object == "grey") {
   object.style.color = "grey";
 }
 else if (onePlace.location_info.color_object == "blue") {
   object.style.color = "blue";
 }

  place.append(image);
  place.append(time);
  place.append(location_house);
  place.append(object);
  place.append(color_object);
  place.append(in_my_way);
  place.append(location_on_object);
  place.append(position);
  place.append(facing_camera);



  document.body.append(place);

}
