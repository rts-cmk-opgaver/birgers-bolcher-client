const form = document.getElementsByTagName("form")[0];

fetch("http://localhost:3333/farve")
	.then(response => response.json())
	.then(data => buildDropdown(data, "Farve"))
	.catch(err => console.error(err));

fetch("http://localhost:3333/smag")
	.then(response => response.json())
	.then(data => buildDropdown(data, "Smag"))
	.catch(err => console.error(err));

fetch("http://localhost:3333/styrke")
	.then(response => response.json())
	.then(data => buildDropdown(data, "Styrke"))
	.catch(err => console.error(err));

fetch("http://localhost:3333/surhed")
	.then(response => response.json())
	.then(data => buildDropdown(data, "Surhed"))
	.catch(err => console.error(err));

function buildDropdown(data, labelName) {
	const label = document.createElement("label");
	label.htmlFor = labelName.toLowerCase();
	label.innerText = labelName + " ";

	const select = document.createElement("select");
	select.name = labelName.toLowerCase();
	select.id = labelName.toLowerCase();

	data.forEach(item => {
		const option = document.createElement("option");
		
		option.value = item.id;
		option.innerText = item.navn;
		select.appendChild(option);
	});

	label.appendChild(select)
	form.appendChild(label);
}

form.addEventListener("submit", function(event) {
	event.preventDefault();

	fetch("http://localhost:3333/products", {
		method: "POST",
		body: JSON.stringify({
			feta: "er godt"
		})
	})
});