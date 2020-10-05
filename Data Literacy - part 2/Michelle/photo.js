

  console.log(images)



for(var i = 0; i < images.length; i++){

    var image = images[i];
   

    var card = document.createElement("div");
    card.className = "all-images"

    var photographer = document.createElement("p");
    photographer.innerText = image.photographer;
    photographer.className = "photographer"

    var caption = document.createElement("p");
    caption.innerText = image.caption;
    caption.className = "caption"

    var colors = document.createElement("p");
    colors.innerText = image.colors;
    colors.className = "colors"

    var people = document.createElement("p");
    people.innerText = image.people.amount;
    people.className = "amount"

    var people2 = document.createElement("p");
    people2.innerText = image.people.perspective;
    people2.className = "perspective"


    var imageElement = document.createElement("img");
    imageElement.src = "./photos/" + image.image;


    card.className = "image"
    // var imageElement = document.createElement("img");
	// imageElement.src = "./images/" + image.imageElement;

    card.append(photographer);
    card.append(caption);
    card.append(colors);
    card.append(people);
    card.append(people2);
    card.append(imageElement);

    if(image.people.amount > 2){
	    people.style.color = "yellow";
	}
    else{
        people.style.color = "blue";
    }

    document.body.append(card);
}



//
//
// //create a h1 element and store it inside titleElement
//   var titleElement = document.createElement("h1");
//   var myName = document.createElement("div");
//
// //insert or add it tot the body
//   document.body.append(titleElement);
//   document.body.append(myName);
//
// //chage the text inside the h1 to hello
// titleElement.innerText = "Hello"
// myName.innerText = "Michelle"
