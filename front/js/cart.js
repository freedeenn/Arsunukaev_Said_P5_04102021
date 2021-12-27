
//========================Recuperer produit de localStorage=======================================

// if (localStorage.getItem('products') !== null) {

//   const products = JSON.parse(localStorage.products);

//   // =====================parcurire les produits dans localStorage================================
//   let html = "";
//   products.forEach((product) => {

//     html += `

//       <article class="cart__item" data - id=${product._id}>
//         <div class="cart__item__img">
//           <img src=${product.imageUrl} alt="Photographie d'un canapé">
//             </div>
//           <div class="cart__item__content">
//             <div class="cart__item__content__titlePrice">
//               <h2>${product.name}</h2>
//               <p>${product.price}</p>
//             </div>
//             <div class="cart__item__content__settings">
//               <div class="cart__item__content__settings__quantity">
//                 <p>Qté : </p>
//                 <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value=${product.nomber}>
//                 </div>
//                 <div class="cart__item__content__settings__delete">
//                   <p class="deleteItem">Supprimer</p>
//                 </div>
//               </div>
//             </div>
//           </article>

//           `;

//   });

//   document.querySelector("#cart__items").innerHTML = html;
// };



//========================Recuperer produit de localStorage=======================================

if (localStorage.getItem('products') !== null) {

  let products = JSON.parse(localStorage.products);

  // =====================parcurire les produits dans localStorage================================

  products.forEach(product => {

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

    let img = document.createElement('img');
    img.src = `${product.image}`;
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
    price.className = 'price';
    price.innerText = `Prix : ${product.price}`;
    cart__item__content__titlePrice.appendChild(price);

    let color = document.createElement('p');
    color.className = 'color';
    color.innerText = `Couleur : ${product.color}`;
    cart__item__content__titlePrice.appendChild(color);

    // ===================================div settings============================================

    let cart__item__content__settings = document.createElement('div');
    cart__item__content__settings.className = 'cart__item__content__settings';
    cart__item__content.appendChild(cart__item__content__settings);

    // ===================================div quantity============================================

    let cart__item__content__settings__quantity = document.createElement('div');
    cart__item__content__settings__quantity.className = 'cart__item__content__settings__quantity';
    cart__item__content__settings.appendChild(cart__item__content__settings__quantity);

    // let color = document.createElement('p');
    // color.className = 'color';
    // color.innerText = `Color : ${product.color}`;
    // cart__item__content__settings.appendChild(color);

    let description = document.createElement('p')
    description.className = 'description';
    description.innerText = `${product.description}`;
    cart__item__content__settings.appendChild(description);

    let qte = document.createElement('p');
    qte.className = 'itemQuantity';
    qte.innerText = 'Qté';
    cart__item__content__settings__quantity.appendChild(qte);

    // input pour la quantité
    let input = document.createElement('input');
    input.type = 'number';
    input.setAttribute('value', product.count);
    input.min = "1";
    input.max = "99"
    qte.appendChild(input);



    // let buttonOne = document.createElement('button');
    // buttonOne.className = 'minus';
    // buttonOne.innerText = '-';
    // let buttonTwo = document.createElement('button');
    // buttonTwo.className = 'plus';
    // buttonTwo.innerText = '+';
    // let input = document.createElement('input');
    // input.className = 'choos-qty';
    // input.setAttribute('id', 'demoInput');
    // // input.setAttribute('value', product.count);
    // input.setAttribute('min', '0');
    // qte.appendChild(buttonOne);
    // qte.appendChild(buttonTwo);
    // qte.appendChild(input);

    // ==================================div delete===============================================

    let cart__item__content__settings__delete = document.createElement('div');
    cart__item__content__settings__delete.className = 'cart__item__content__settings__delete';
    cart__item__content__settings.appendChild(cart__item__content__settings__delete);

    let supprimer = document.createElement('p');
    supprimer.className = 'deleteItem';
    supprimer.innerText = 'supprimer';
    cart__item__content__settings__delete.appendChild(supprimer);
  });

  //=====================================supprimer produit============================================

  let supprimer_article = document.querySelectorAll('.deleteItem');
  for (let i = 0; i < supprimer_article.length; i++) {
    supprimer_article[i].addEventListener('click', (event) => {
      event.preventDefault();
      let supprission = products[i].id = products[i].color;
      products = products.filter(el => el.id !== supprission);
      localStorage.setItem('products', JSON.stringify(products));
      const article = supprimer_article[i].parentElement.parentElement.parentElement.parentElement;
      article.remove();
    });
  }
}

//======================================Calculer prix total et quantité==========================================

if (localStorage.getItem('products') !== null) {

  const products = JSON.parse(localStorage.products);
  console.log(products);
  let totalPriceCalcul = 0;
  let totalCount = "";

  products.forEach(product => {
    totalPriceCalcul += product.price * product.count;
    totalCount += product.count;
    // ====afficher prix total=========
    totalPrice.innerText = `${totalPriceCalcul}`;
    // ====afficher quantité total=====
    totalQuantity.innerText = `${totalCount}`;
  });
}
















// let supprimer_article = document.querySelectorAll('.deleteItem');
// for (let i = 0; i < supprimer_article.length; i++) {
//   supprimer_article[i].addEventListener('click', (event) => {
//     event.preventDefault();
    // Supprimer d'abord l'article du localStorage avant d'executer le code suivant
//     const products = JSON.parse(localStorage.getItem('products'));
//     localStorage.removeItem('products');
//     console.log(products);
//     const article = supprimer_article[i].parentElement.parentElement.parentElement.parentElement;

//     article.remove();
//   });
// }

  // let order = document.querySelector('#order');
  // order.addEventListener('click', function () {

  //   fetch("http://localhost:3000/api/products", {
  //     method: "POST",
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       products: products
  //     })
  //   })
  //     .then(function (response) {
  //       return response.json();
  //     }).then(function (response) {
  //       console.log(response)
  //       window.location.replace(`confirm.html?orderId=${response.orderId}`)
  //     })
  //     .catch(function (error) {
  //       console.log(error)
  //     });

  //   // Enlever les produits du localstorage après validation de la commande
  //   localStorage.clear();
  // })



  // =====================incrémenter le nombre de produit au click sur +==========================
// letbuttonTwo = document.querySelector('.itemQuantity').value;
// buttonTwo.addEventListener(click, function () {
//   let products = JSON.parse(localStorage.getItem('products'));
//   let productIndex = produits.findIndex(element => element.id === product.id);

//   products[productIndex] = {
//     id: product.id,
//     image: product.image,
//     price: product.price,
//     name: product.name,
//     count: products[productIndex].count + 1
//   };

//   document.querySelector(`[id="${product.id}"] .totalQuantity`).value = products[productIndex].count;
//   document.querySelector(`[id="${product.id}"] .totalPrice`).innerText = `${((products[productIndex].price * (products[productIndex].count))).toFixed(2)} €`;
//   localStorage.setItem('produits', JSON.stringify(products));


//   // Calcul du total
//   let totalPriceCalcul = 0;
//   let totalCount = 0;

//   products.forEach(product => {
//     totalPriceCalcul += product.count * product.price;
//     console.log(product.count)
//     let totalPrice = document.querySelector('.totalPrice');
//     totalPrice.innerText = `${totalPriceCalcul}`;
//     totalQuantity.innerText = `${totalCount}`;
//   });

//   // let msgTotal = products.reduce(function (prev, cur) {
//   //   return prev + cur.count;
//   // }, 0);
//   document.querySelector('.totalQuantity').innerHTML = product.count;
//   localStorage.setItem('count', product.count);
// });