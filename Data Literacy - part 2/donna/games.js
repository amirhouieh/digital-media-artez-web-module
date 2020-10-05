console.log(gamedata);

var titleElement = document.createElement("h2"); //created h1 element in javascript
document.body.append(titleElement); //appends element to body of html
titleElement.innerText = "(凸( •̀_•́ )凸)(凸( •̀_•́ )凸)(凸( •̀_•́ )凸)(凸( •̀_•́ )凸)  ~ game archive  ~ (凸( •̀_•́ )凸)(凸( •̀_•́ )凸)(凸( •̀_•́ )凸)(凸( •̀_•́ )凸)" //write text in element h1

//
// console.log(gamedata[1].name);
// console.log(gamedata[1].game_console[1]); //console log particular value of gamedata


window.onload= () => {
  for (var i = 0; i < gamedata.length; i++){

  var oneGame = gamedata[i];
 

  var card = document.createElement("div"); //create div and put it inside var 'card', card is parent
  card.className = "game-card";

  var title = document.createElement("h1"); //create h1 element and put it inside var 'name' , this is the child
  title.innerText = oneGame.title;

  // var material = document.createElement("h3"); //creat h3 element and put it inside var 'game_console', game_console is child
  // material.innerText = oneGame.material;
  // material.className = "material";

  var operational = document.createElement("h3"); //creat h3 element and put it inside var 'game_console', game_console is child
  operational.innerText = oneGame.operational;
  operational.className = "operational";

  var image = document.createElement("img");
  image.src = oneGame.image;




  card.append(title); //call element
  // card.append(material);
  card.append(operational);


  oneGame.game_console.forEach(gameConsole => {
    var game_consoleElement = document.createElement("h3"); //creat h3 element and put it inside var 'game_console', game_console is child
    game_consoleElement.innerText = gameConsole;
    game_consoleElement.className = "console-name";

    card.append(game_consoleElement);
  })

  card.append(image);


  if(oneGame.operational === false){
    image.className = "disabled";
    card.classList.add("na");
  }


  document.body.append(card); //append elements (so card) to body
  }


  // var test = document.createElement("h1");
  //
  // var number = 1;
  //
  // document.body.append(test);
  // test.innerText = number;
  //
  // window.onclick = () =>{
  // number = number + 1;
  // test.innerText = number;
  // }

}
