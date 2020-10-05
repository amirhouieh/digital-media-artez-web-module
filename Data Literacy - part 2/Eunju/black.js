

console.log(black);


//for loop (it shows all elements that are mentioned)
for(var i = 0; i < black.length; i++){

  var oneRecord = black[i];
  console.log(i, oneRecord);

  var card = document.createElement("div");
  card.className = "black-card";

  // var img = document.createElement("img");
  // img.src = "images/bag.jpeg";
  // var src = document.getElementById("x");
  // src.append(img);


  var names = document.createElement("h1");
  names.innerText = oneRecord.name;
  names.className = "name-name";

  var images = document.createElement("img");
  images.src = oneRecord.image;
  var src = document.getElementById("x");
  src.append(images);

  var time_period = document.createElement("h3");
  time_period.innerText = oneRecord.time_period;
  time_period.className = "time_period-name";

  var materials = document.createElement("h3");
  materials.innerText = oneRecord.material;
  materials.className = "material-name";

  var frequency_of_use = document.createElement("h3");
  frequency_of_use.innerText = oneRecord.frequency_of_use;
  frequency_of_use.className = "frequency_of_use-name";

  var functions = document.createElement("h3");
  functions.innerText = oneRecord.function;
  functions.className = "function-name";

  var colors = document.createElement("h3");
  colors.innerText = oneRecord.color;
  colors.className = "color-name";

  card.append(names);
  card.append(images);
  card.append(time_period);
  card.append(materials);
  card.append(frequency_of_use);
  card.append(functions);
  card.append(colors);

  document.body.append(card);
}




//create a h1 element and store it inside titleElment
// var titleElement = document.createElement("h1");

//insert or add it to the body
// document.body.append(titleElement);

//change the text inside the h1 to hello
// titleElement.innerText = "Hello :)";

//exercise for above things that put my name in the body
// var myname = document.createElement("div");
// document.body.append(myname);
// myname.innerText = "Eunju";






// (1) example -> whenever click the screen, number will increase
// window.onload= ()=> {
//
//   var test = document.createElement("h1");
//
//   var number = 1;
//
//   document.body.append(test);
//
//   test.innerText = number;
//
//   window.onclick = ()=> {
//     number = number +1;
//     test.innerText = number;
//   }
//
//   console.log(number);
// }


// (2) example -> when you open the inspect on the web, it will show the information
// window.onload=() => {
//
//   var coolnumber = 1;
//
//   var whatever = "my name";
//
//   var foo = true;
//
//   var blabla = {
//     content: "fffffff",
//     size: "20cm"
//   }
// console.log(blabla);
// console.log(blabla.size);
//
// }
