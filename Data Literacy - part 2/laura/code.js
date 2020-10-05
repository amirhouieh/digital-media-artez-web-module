console.log(data);

var whoContainer = document.createElement("div");
whoContainer.className = "who container"
document.body.append(whoContainer);

function createWho(oneRecord){
	var card = document.createElement("div");
  	card.className = "who";

  	var who = document.createElement("p1");
	who.innerText = oneRecord.who;

  	card.append(who);
	whoContainer.append(card);
}

var whereContainer = document.createElement("div");
whereContainer.className = "where container";
document.body.append(whereContainer);

function createWhere(oneRecord){
	var card = document.createElement("div");
	card.className = "where";

	var where = document.createElement("p2");
	where.innerText = oneRecord.where;

	card.append(where);
	whereContainer.append(card);
}


for(var i = 0; i < data.length; i++){
	var oneRecord = data[i];
	createWho(oneRecord);
	createWhere(oneRecord);
}



for(var i = 0; i < data.length; i++){

	var oneRecord = data[i];
	console.log(i, oneRecord);

	var card = document.createElement("div");
  card.className = "what";

  var what = document.createElement("p3");
	what.innerText = oneRecord.what;

  card.append(what);
	document.body.append(card);
}

for(var i = 0; i < data.length; i++){

	var oneRecord = data[i];
	console.log(i, oneRecord);

	var card = document.createElement("div");
  card.className = "color";

  var color = document.createElement("p4");
	color.innerText = oneRecord.color;

  card.append(color);
	document.body.append(card);
}

for(var i = 0; i < data.length; i++){

	var oneRecord = data[i];
	console.log(i, oneRecord);

	var card = document.createElement("div");
  card.className = "technique";

  var technique = document.createElement("p5");
	technique.innerText = oneRecord.technique;

  card.append(technique);
	document.body.append(card);
}

for(var i = 0; i < data.length; i++){

	var oneRecord = data[i];
	console.log(i, oneRecord);

	var card = document.createElement("div");
  card.className = "price_eu";

  var price_eu = document.createElement("p6");
  price_eu.innerText = oneRecord.price_eu;

  card.append(price_eu);
	document.body.append(card);
}

for(var i = 0; i < data.length; i++){

	var oneRecord = data[i];
	console.log(i, oneRecord);

	var card = document.createElement("div");
  card.className = "shipping_costs";

  var shipping_costs = document.createElement("p7");
  shipping_costs.innerText = oneRecord.shipping_costs;

  card.append(shipping_costs);
	document.body.append(card);
}

for(var i = 0; i < data.length; i++){

	var oneRecord = data[i];
	console.log(i, oneRecord);

	var card = document.createElement("div");
  card.className = "app";

  var app = document.createElement("p8");
  app.innerText = oneRecord.app;

  card.append(app);
	document.body.append(card);
}

for(var i = 0; i < data.length; i++){

	var oneRecord = data[i];
	console.log(i, oneRecord);

	var card = document.createElement("div");
  card.className = "photo";

  var photo = document.createElement("p9");
  photo.innerText = oneRecord.photo;

  card.append(photo);
	document.body.append(card);
}
