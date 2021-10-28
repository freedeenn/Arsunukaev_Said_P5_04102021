// document.querySelector('.number').innerHTML = localStorage.getItem('number') || 0;

// const addToCart = document.querySelectorAll(".addToCart");
// const cart = document.querySelector("cart");
// const cartQuantity = document.querySelector("cartQuantity");
// const fullPrice = document.querySelector("fullPrice");
// let price = 0;

// const randomId = () => {
//     return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
// };

// const priceWithoutSpaces = (str) => {
//     return str.replace(/\s/g,'');
// };

// const normalPrice = (str) => {
//     return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
// };



// const cart = querySelector('.cart')

// let article = document.createElement('article')
// article.id = product.id;
// article.className = 'cart__item';
// console.log('cart');


// function cartPage (kanap){

// // // Création d'une balise article, et de 8 div 
//     let article = document.createElement('article');
//     article.id = product.id;
//     article.className = 'cart';
//     let imgCart = document.createElement('div')
//     imgCart.className = 'cart__items'
//     let infoCart = document.createElement('div');
//     infoCart.className = 'kanap-info'
// }


if (localStorage.getItem('products')!==null) {

    const products = JSON.parse(localStorage.products);

    let html = "";

    products.forEach((product)=>{

         html+= `
         
             <article class="cart__item" data-id=${product._id}>
                <div class="cart__item__img">
                  <img src=${product.imageUrl} alt="Photographie d'un canapé">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__titlePrice">
                    <h2>${product.name}</h2>
                    <p>${product.price} €</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value=${product.number}>
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>
         
         `;

    });

    document.querySelector("#cart__items").innerHTML = html;

}
// function generateProductHTML(kanap) {

//     //Selectionner la div qui va contenir le outerHTML du container
//     let container = document.querySelector('.cart')

//     //Création de la balise article et ajout d'une classe
//     let article = document.createElement('article')
//     article.className = 'kanap-container'

//     //Child de l'article
//     let image = document.createElement('div');
//     image.className = 'kanap';
//     let info = document.createElement('div');
//     info.className = 'kanap-info';
//     let a = document.createElement('a');
//     a.setAttribute('href', `product.html?id=${kanap._id}`);

//     //Child des autres balises    
//     let img = document.createElement('img');
//     img.className = 'kanap-pic';
//     img.setAttribute('src', kanap.imageUrl);
//     img.setAttribute("alt", `image ${kanap.name}`);
//     let h2 = document.createElement('h2');
//     h2.className = 'kanap-name';
//     h2.innerText = kanap.name;
//     let p = document.createElement('p');
//     p.className = 'description';
//     p.innerText = kanap.description;
//     let span = document.createElement('span');
//     span.className = 'price';
//     span.innerText = `${kanap.price}€`;



//     image.appendChild(img);
//     info.appendChild(h2);
//     info.appendChild(span);
//     article.appendChild(image);
//     article.appendChild(info);
//     article.appendChild(p);
//     a.appendChild(article);

//     container.appendChild(a);
// }

// AddToCart.addEventListener("click", function () {
//     let produits = JSON.parse(localStorage.getItem('article'));
//     let productIndex = produits.findIndex(function (element) {
//         return element.id === product.id;
//     });
//     console.log(AddToCart)
// })