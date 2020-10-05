

console.log(clothing);


for(var i = 0; i < clothing.length; i++){

  var item = clothing[i];
  console.log(i, item);

  var list = document.createElement("div");
  list.className = "clothing_info"

  var title = document.createElement("h1");
  title.innerText = item.title;

  var main_color = document.createElement("p");
  main_color.innerText = item.main_color;

  var length = document.createElement("p");
  length.innerText = item.length;

  var material = document.createElement("p");
  material.innerText = item.material;

  var size = document.createElement("p");
  size.innerText = item.size;

  var price = document.createElement("p");
  price.innerText = item.price_euro;

  var city = document.createElement("p");
  city.innerText = item.city_location_bought;

  var brand = document.createElement("p");
  brand.innerText = item.original_brand;

  var country = document.createElement("p");
  country.innerText = item.origin_country;

  var image = document.createElement("img");
  image.src = clothing[i].image;
  image.className = "clothing-image"


  list.append(title);
  list.append(main_color);
  list.append(length);
  list.append(material);
  list.append(size);
  list.append(price);
  list.append(city);
  list.append(brand);
  list.append(country);
  list.append(image);

  document.body.append(list);


}
