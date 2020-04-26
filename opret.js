const form = document.getElementsByTagName("form")[0];

fetch("http://localhost:3333/farve")
	.then(res => res.json())
	.then(data => buildDropdown(data, "Farve"));

fetch("http://localhost:3333/smag")
	.then(res => res.json())
	.then(data => buildDropdown(data, "Smag"));

fetch("http://localhost:3333/styrke")
	.then(res => res.json())
	.then(data => buildDropdown(data, "Styrke"));

fetch("http://localhost:3333/surhed")
	.then(res => res.json())
	.then(data => buildDropdown(data, "Surhed"));

function buildDropdown(data, labelName) {
	let label = document.createElement("label");
	label.innerText = labelName + " ";
	label.htmlFor = labelName.toLowerCase();

	let select = document.createElement("select");
	select.id = labelName.toLowerCase();

	data.forEach(item => {
		let option = document.createElement("option");
		option.value = item.id;
		option.innerText = item.navn;
		select.appendChild(option);
	});

	label.appendChild(select);
	form.appendChild(label);
}

form.addEventListener("submit", function(event) {
	event.preventDefault();

	fetch("http://localhost:3333/products", {
		method: "POST",
		headers: {
			"content-type": "application/json"
		},
		body: JSON.stringify({
			navn: event.target.navn.value,
			pris: parseInt(event.target.pris.value),
			vaegt: parseInt(event.target.vaegt.value),
			fk_smag: parseInt(event.target.smag.value),
			fk_surhed: parseInt(event.target.surhed.value),
			fk_styrke: parseInt(event.target.styrke.value),
			fk_farve: parseInt(event.target.farve.value),
		})
	})
		.then(res => {
			console.log(res);
		})
});
