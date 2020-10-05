let fields = [
	["horse_name", "Name"],
	["color", "Color"],
	["hair_color", "Hair color"],
	["size", "Size"],
	["age", "Age"],
];

let grid = document.querySelector(".grid");

for (var i = 0; i < horses.length; i++)
{

	let horse = horses[i];

	let card = document.createElement("div");
	card.className = "grid-item";

	let image = document.createElement("div");
	image.className = "grid-item-image";
	image.style.setProperty("background-image", "url(" + horse.photo + ")");

	let info = document.createElement("div");
	info.className = "grid-item-info";

	for (let field of fields)
	{
		if (field[0] === "horse_name")
		{
			let name = document.createElement("h2");
			name.innerText = horse[field[0]];

			info.appendChild(name);
		}
		else
		{
			let title = document.createElement("strong");
			title.innerText = field[1];

			let value = document.createElement("span");
			value.innerText = horse[field[0]];

			info.appendChild(title);
			info.appendChild(value);
		}
	}

	card.appendChild(image);
	card.appendChild(info);
	grid.appendChild(card);
}

