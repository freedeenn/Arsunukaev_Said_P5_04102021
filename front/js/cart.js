
// const fullPrice = document.querySelector("fullPrice");
// let price = 0;

// const randomId = () => {
//   return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
// };

// const priceWithoutSpaces = (str) => {
//   return str.replace(/\s/g, '');
// };

// const normalPrice = (str) => {
//   return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
// };

//========================Recuperer produit de localStorage=======================================
const url = 'http://localhost:3000/api/products';
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

if (localStorage.getItem('products') !== null) {

  const products = JSON.parse(localStorage.products);

  // =====================parcurire les produits dans localStorage================================

  products.forEach((product) => {

    //====================Selectionner la div qui va contenir le outerHTML du container===========

    let container = document.querySelector('#cart__items')

    //====================Création de la balise article et ajout d'une classe=====================

    let article = document.createElement('article');
    article.id = `${product.id}`;
    article.className = 'cart__item';
    container.appendChild(article);

    let image = document.createElement('div');
    image.className = 'cart__item__img';
    article.appendChild(image);

    const img = document.createElement("img");
    img.src = `${product.imageUrl}`;
    img.setAttribute("alt", `image ${product.name}`);
    image.appendChild(img);

    // =================================div content===============================================

    let cart__item__content = document.createElement('div');
    cart__item__content.className = 'cart__item__content';
    article.appendChild(cart__item__content);

    // =================================div title and price=======================================

    let cart__item__content__titlePrice = document.createElement('div');
    cart__item__content__titlePrice.className = 'cart__item__content__titlePrice';
    cart__item__content.appendChild(cart__item__content__titlePrice);

    let title = document.createElement('h2');
    title.className = 'product-name';
    title.innerText = `${product.name}`;
    cart__item__content__titlePrice.appendChild(title);

    let price = document.createElement('p')
    price.className = 'description';
    price.innerText = `${product.description}`;
    cart__item__content__titlePrice.appendChild(price);

    // ===================================div settings============================================

    let cart__item__content__settings = document.createElement('div');
    cart__item__content__settings.className = 'cart__item__content__settings';
    cart__item__content.appendChild(cart__item__content__settings);

    // ===================================div quantity============================================

    let cart__item__content__settings__quantity = document.createElement('div');
    cart__item__content__settings__quantity.className = 'cart__item__content__settings__quantity';
    cart__item__content__settings.appendChild(cart__item__content__settings__quantity);

    let qte = document.createElement('p');
    qte.className = 'itemQuantity';
    qte.innerText = 'Qté';
    cart__item__content__settings__quantity.appendChild(qte);

    let input = document.createElement('input');
    input.type = 'number';
    input.min = "1";
    input.max = "99"
    cart__item__content__settings__quantity.appendChild(input);

    // ==================================div delete===============================================

    let cart__item__content__settings__delete = document.createElement('div');
    cart__item__content__settings__delete.className = 'cart__item__content__settings__delete';
    cart__item__content__settings.appendChild(cart__item__content__settings__delete);

    let supprimer = document.createElement('p');
    supprimer.className = 'deleteItem';
    supprimer.innerText = 'supprimer';
    cart__item__content__settings__delete.appendChild(supprimer);
  });
}

//=====================================supprimer produit============================================

let supprimer_article = document.querySelectorAll('.deleteItem');

for (let i = 0; i < supprimer_article.length; i++) {
  supprimer_article[i].addEventListener('click', (event) => {

    // Supprimer d'abord l'article du localStorage avant d'executer le code suivant
    const products = JSON.parse(localStorage.getItem('products'));
    localStorage.removeItem('products');
    console.log(products);
    const artcile = supprimer_article[i].parentElement.parentElement.parentElement.parentElement;

    artcile.remove();

  });
}

//======================================Calculer prix total==========================================

if (localStorage.getItem('products') !== null) {

  const products = JSON.parse(localStorage.products);
  console.log(products);
  let totalPriceCalcul = 0;

  for (let l = 0; l < products.length; l++) {
    totalPriceCalcul += products[l].price * products[l].number;

    console.log(totalPriceCalcul);
  }
}