let xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.raphaelfabeni.com.br/rv/data.json");

xhr.addEventListener("load", () => {
    if (xhr.status == 200) {
        let products = JSON.parse(xhr.response);

        addProduct(products);
    } else console.error("Não foi possível criar uma conexão com a lista de produtos.");
})
xhr.send();

slider();