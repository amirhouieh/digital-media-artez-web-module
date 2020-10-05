
//create a h1 element and sore it inside nameElement
var titleElement = document.createElement("h1");
// insert or add it to the body
document.body.append(titleElement);

// change the text inside the h1 to hello
titleElement.innerText= "Messages from 29 september 00:00 till 13:00 "



var chart1Image = document.createElement("img");
chart1Image.src = "chart.svg";
chart1Image.className = "img1";
document.body.append(chart1Image);


for(var i = 0; i < data.length; i++){

	var oneNoti = data[i];
	var card = document.createElement("div");

	var person = document.createElement("p1");
	person.innerText = oneNoti.name;

	var groupchat = document.createElement("p1");
  if (oneNoti.groupchat===true) {
    groupchat.innerText =" in a group chat "
  } else {
    groupchat.innerText =" in a private chat "
  }

  var app = document.createElement("p1");
  app.innerText = " on "+ oneNoti.app;

  var time = document.createElement("p1");
  time.innerText = " at " + oneNoti.time;

  var message = document.createElement("p1");
  if (oneNoti.message==="image") {
    message.innerText ="sent an " + oneNoti.message
  } else {
    message.innerText ="sent a " + oneNoti.message
  }

  card.append(person);
  card.append(message);
  card.append(groupchat);
  card.append(app);
  card.append(time);

	document.body.append(card);
}

// console.log(charts)
// var element = createElement("div1")
// element.innerHTML= charts.element;
// document.body.append(element);
