window.onload = () =>
{
    var data = [
    {
    "brand" : "LA Girl",
    "colorname" : "obsess",
    "color" : "neon pink",
    "usable" : "do not",
    "image" : "1.jpg"
    },

    {
      "brand" : "NYX",
      "colorname" : 12,
      "color" : "purple",
      "usable" : "do not",
      "image" : "2.jpg"
    },

    {
      "brand" : "NYX",
      "colorname" : "sierra",
      "color" : "pink",
      "usable" : "do",
      "image" : "3.jpg"
    },

    {
      "brand" : "PS",
      "colorname" : "none",
      "color" : "old rose pink",
      "usable" : "do",
      "image" : "4.jpg"
    },

    {
      "brand" : "catrice",
      "colorname" : "exotic nude",
      "color" : "dark pink",
      "usable" : "do",
      "image" : "5.jpg"
    },

    {
      "brand" : "HEMA",
      "colorname" : 30,
      "color" : "brown",
      "usable" : "do",
      "image" : "6.jpg"
    },

    {
      "brand" : "ps",
      "colorname" : "none",
      "color" : "dark coral",
      "usable" : "do not",
      "image" : "7.jpg"
    },

    {
      "brand" : "unity_cosmetics",
      "colorname" : "PINK",
      "color" : "light pink",
      "usable" : "do not",
      "image" : "8.jpg"
    },

    {
      "brand" : "Loreal_Paris",
      "colorname" : "Lead",
      "color" : "Red pink",
      "usable" : "do",
      "image" : "9.jpg"
    },

    {
      "brand" : "PS",
      "colorname" : "none",
      "color" : "brown",
      "usable" : "do",
      "image" : "10.jpg"
    },

    {
      "brand" : "PS",
      "colorname" : "obsession",
      "color" : "purple red",
      "usable" : "do not",
      "image" : "11.jpg"
    },

    {
      "brand" : "BeYu",
      "colorname" : "currant jelly",
      "color" : "pink",
      "usable" : "do not",
      "image" : "12.jpg"
    },

    {
      "brand" : "clinique",
      "colorname" : "soft bloom",
      "color" : "grey pink",
      "usable" : "do not",
      "image" : "13.jpg"
    },

    {
      "brand" : "maybeline new york",
      "colorname" : "pink hurricane",
      "color" : "pink",
      "usable" : "do not",
      "image" : "14.jpg"
    },

    {
      "brand" : "max factor",
      "colorname" : "vanilla",
      "color" : "gold nude",
      "usable" : "do not",
      "image" : "15.jpg"
    },

    {
      "brand" : "catrice",
      "colorname" : "Hazel Rose Royce",
      "color" : "dark pink",
      "usable" : "do",
      "image" : "16.jpg"
    },

    {
      "brand" : "PS",
      "colorname" : "none",
      "color" : "light pink",
      "usable" : "do not",
      "image" : "17.jpg"
    },

    {
      "brand" : "essence",
      "colorname" : "on the_catwalk",
      "color" : "dark pink",
      "usable" : "do",
      "image" : "18.jpg"
    },

    {
      "brand" : "bellapierre",
      "colorname" : "envy",
      "color" : "light pink",
      "usable" : "do",
      "image" : "19.jpg"
    },

    {
      "brand" : "essence",
      "colorname" : 14,
      "color" : "red",
      "usable" : "do",
      "image" : "20.jpg"
    },

    {
      "brand" : "HEMA",
      "colorname" : 13,
      "color" : "old rose pink",
      "usable" : "do",
    }
  ];
    var i = 0;



    function updateInfoAndSrc(){
      // 1. increase the i
      i = i + 1;

      // 2. update the image src
      facePicture.src = i + ".jpg";

      // 3. set the brand
      brandName.innerText = data[i].brand;

      // 4. set the color
      colorName.innerText = "In the color " + data[i].color;

      // 5. set the likeability
      likeability.innerText = "I " + data[i].usable + " " +"wear this color";
    }


    function clicking(){
      updateInfoAndSrc();
    };


    // create an element
    var facePictureDiv = document.createElement("div");
    // assigning a classname to it
    facePictureDiv.className = "facePicture";

    // assigning an listener or click event to this 
    // so when we click on facePictureDiv then trigger/execute the function clicking
    facePictureDiv.onclick = function() {clicking()};

    var information = document.createElement("div");
    information.className = "informationBlock";

    var facePicture = document.createElement("img");
    facePicture.className = "pictureOfMyFace";

    var brandName = document.createElement("p");
    brandName.className = "brandName";
    

    var colorName = document.createElement("p");
    colorName.className = "colorName";


    var likeability = document.createElement("p");
    likeability.className = "doILike";

 
    updateInfoAndSrc();

    var smallImages = document.createElement("div");
    smallImages.className = "smallImages";

    for (s = 0; s < 21; s++){
      var aSmallImage = document.createElement("img");
      aSmallImage.src = s + "s" + ".jpg";
      aSmallImage.className = "aSmallImage";

      smallImages.append(aSmallImage);
    };

    information.append(brandName);
    information.append(colorName);
    information.append(likeability);
    facePictureDiv.append(facePicture)
    document.body.append(smallImages)
    document.body.append(facePictureDiv);
    document.body.append(information);

};
