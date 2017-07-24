let $ = document.querySelector.bind(document);

function addProduct(product) {
    let bestSellers = product["best-sellers"];
    let releases = product.releases;

    bestSellers.forEach(product => distData(product, "bestSellers"));
    releases.forEach(product => distData(product, "releases"));
}

function distData(product, productType) {
    var productItem = buildItem(product);
    var listType = $(`#${productType}List`);
    listType.appendChild(productItem);
}

function buildItem(product) {
    var productItem = document.createElement("li");
    productItem.classList.add("list__item");
    productItem.dataset.category = product.category;
    productItem.dataset.highTop = product["high-top"];

    productItem.appendChild(buildImg(product.image, product.title, "item__image"));



    productItem.appendChild(buildInfo(product.title, "item__title"));

    product["high-top"] ? productItem.insertAdjacentHTML("beforeend", "<p class='item__hightop'>Cano Alto</p>") : productItem.insertAdjacentHTML("beforeend", "<p class='item-hightop'>Cano Baixo</p>");

    let price = convertToBRL(product.price);
    productItem.appendChild(buildInfo(price, "item__price"));

    let parcelValue = convertToBRL(product.installments.value);
    let parcels = `ou ${product.installments.number}x ${parcelValue} sem juros`;
    productItem.insertAdjacentHTML("beforeend", "<p class='item__parcels'>" + parcels + "</p>");

    productItem.insertAdjacentHTML("beforeend", "<button class='bt__buy' onclick='addToCart()'>Comprar</button>");

    return productItem;
}

function buildImg(data, altText, ...classes) {
    let img = document.createElement("img");
    img.classList.add(classes);
    img.src = data;
    img.alt = altText;

    return img;
}

function buildInfo(data, ...classes) {
    let p = document.createElement("p");
    p.classList.add(classes);

    if (data)
        p.textContent = data;

    return p;
}