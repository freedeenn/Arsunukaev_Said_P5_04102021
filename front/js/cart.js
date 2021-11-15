
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

//====================================================================Recuperer produit de localStorage========================================

if (localStorage.getItem('products') !== null) {

  const products = JSON.parse(localStorage.products);

  // ================parcurire les produits dans localStorage==============

  products.forEach((product) => {

    //=============================Selectionner la div qui va contenir le outerHTML du container

    let container = document.querySelector('#cart__items')
    console.log(container);

    //=============================Création de la balise article et ajout d'une classe

    let article = document.createElement('article')
    article.id = product._id;
    article.className = 'cart__item';
    container.appendChild(article);

    let image = document.createElement('div');
    image.className = 'cart__item__img';
    let img = document.createElement('img');
    img.className = 'kanap-pic';
    img.src = `${product.imageUrl}`;
    img.setAttribute("alt", `image ${product.name}`);
    article.appendChild(image);
    image.appendChild(img);

    let cart__item__content__titlePrice = document.createElement('div');
    article.appendChild(cart__item__content__titlePrice);

    let title = document.createElement('h2');
    title.className = 'product-name';
    title.innerText = `${product.name}`;
    cart__item__content__titlePrice.appendChild(title);

    let price = document.createElement('p')
    price.className = 'description';
    price.innerText = `${product.description}`;
    cart__item__content__titlePrice.appendChild(price);

    let cart__item__content__settings = document.createElement('div');
    article.appendChild(cart__item__content__settings);

    let cart__item__content__settings__quantity = document.createElement('div');
    cart__item__content__settings.appendChild(cart__item__content__settings__quantity);

    let qte = document.createElement('p');
    qte.className = 'itemQuantity';
    qte.innerText = `${product.number}`;
    cart__item__content__settings__quantity.appendChild(qte);

    let cart__item__content__settings__delete = document.createElement('div');
    cart__item__content__settings.appendChild(cart__item__content__settings__delete);

    let supprimer = document.createElement('p');
    supprimer.className = 'deleteItem';
    supprimer.innerText = `${product.supprimer}`;
    cart__item__content__settings__delete.appendChild(supprimer);
  });

  // document.querySelector("#cart__items").innerHTML;
}
//=====================================================================supprimer produit================================ 

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
//========================================================================Calculer prix total==============================
if (localStorage.getItem('products') !== null) {

  const products = JSON.parse(localStorage.products);
  console.log(products);
  let totalPriceCalcul = 0;

  for (let l = 0; l < products.length; l++) {
    totalPriceCalcul += products[l].price * products[l].number;

    console.log(totalPriceCalcul);
  }
}


// let html = "";

  // html += `

    //          <article class="cart__item" data-id=${product._id}>
    //             <div class="cart__item__img">
    //               <img src=${product.imageUrl} alt="Photographie d'un canapé">
    //             </div>
    //             <div class="cart__item__content">
    //               <div class="cart__item__content__titlePrice">
    //                 <h2>${product.name}</h2>
    //                 <p>${product.price} €</p>
    //               </div>
    //               <div class="cart__item__content__settings">
    //                 <div class="cart__item__content__settings__quantity">
    //                   <p>Qté : </p>
    //                   <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value=${product.number}>
    //                 </div>
    //                 <div class="cart__item__content__settings__delete">
    //                   <p class="deleteItem">Supprimer</p>
    //                 </div>
    //               </div>
    //             </div>
    //           </article>

    //      `;