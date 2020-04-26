let form = document.querySelector(".opretFarveForm");

form.addEventListener("submit", function(event) {
	event.preventDefault();

	fetch("http://localhost:3333/farve", {
		method: "POST",
		headers: {
			"content-type": "application/json"
		},
		body: JSON.stringify({
			navn: event.target.farve.value
		})
	})
		.then(res => {
			let status = document.querySelector(".status");
			status.innerText = "";

			if (res.status === 201) {
				event.target.farve.value = "";
				status.innerText = "Farven er oprettet";

			}

			if (res.status === 500) {
				status.innerText = "Noget gik galt. Prøv igen om lidt.";
			}
		});
});
