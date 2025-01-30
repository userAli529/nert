let promotion = [
    {
        name: "Ethereum",
        category: "Cryptocurrency",
        price: "1,300 сом",
        image: "img/photo_2025-01-24_21-02-47.jpg",
        link: "https://wa.me/message/LCGVHSKPUUYKD1",
        nome: '#1'
    },
    {
        name: "Bitcoin",
        category: "Cryptocurrency",
        price: "2,000 сом",
        sizes: [37, 38, 39, 40, 41],
        image: "img/free-icon-trouser-5571282.png",
        link: "https://wa.me/message/LCGVHSKPUUYKD1",
        nome: '#2'
    },
    {
        name: "Bitcoin",
        category: "Cryptocurrency",
        price: "2,000 сом",
        sizes: [37, 38, 39, 40, 41],
        image: "img/(WMNS) Asics Court MZ 1203A127-200.jpg",
        link: "https://wa.me/message/LCGVHSKPUUYKD1",
        nome: '#3'
    },
    {
        name: "Bitcoin",
        category: "Cryptocurrency",
        price: "2,000 сом",
        sizes: [37, 38, 39, 40, 41],
        image: "img/Wholesale Winter Blank Cotton Fleece Hoodie Unisex Zipper Oversize Cotton Custom Hoodie High Quality Cotton Hoodies For Women - Buy Women Winter Blank Cotton Fleece Hoodie Men Casual Oversize Cotton Custom Hoodie H.jpg",
        link: "https://wa.me/message/LCGVHSKPUUYKD1",
        nome: '#4'
    },
];

const productList = document.getElementById('product-card__wrapper2');


function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    let nomeText = product.nome ? `<p>${product.nome}</p>` : '';
    let sizesText = product.sizes ? `<p>Размеры: ${product.sizes.join(', ')}</p>` : '';

    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <h2>${product.category}</h2>
        ${nomeText}
        ${sizesText}
        <a href="${product.link}">
            <button class="button">Заказать 🛒</button>
        </a>
    `;

    productList.appendChild(productCard);
}


function searchProduct(query) {
    const filteredProducts = promotion.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
    return filteredProducts;
}


const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    const foundProducts = searchProduct(query);


    productList.innerHTML = '';
 
    foundProducts.forEach(createProductCard);
});


promotion.forEach(createProductCard);
