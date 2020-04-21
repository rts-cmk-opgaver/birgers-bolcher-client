document.addEventListener("DOMContentLoaded", function () {

    let table = document.querySelector("#table");
    hentAlleBolcher(table);
    hentEtBolche();
});

function hentAlleBolcher(output) {
    fetch('http://localhost:3333/products')
        .then(function (result) {
            return result.json();
        })
        .then(function (data) {
            //output.innerHTML += data[0].navn;
            console.log(data)
            data.forEach((bolche) => {
                let row = document.createElement('tr');

                row.innerHTML = `  
                    <td>${bolche.navn}</td>
                    <td>${bolche.farve}</td>
                    <td>${bolche.smag}</td>
                    <td>${bolche.vaegt} g.</td>
                    <td>${bolche.styrke}</td>
                    <td>${bolche.surhed}</td>
                    <td>${bolche.pris} kr.</td>
                `;

                output.appendChild(row);

            });
        });
}

function hentEtBolche(output) {
    fetch('http://localhost:3333/products/38')
        .then(function (result) {
            console.log(result)
            //return result.json();
        })

}


