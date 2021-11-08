
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

  let html = "";

  products.forEach((product) => {

    html += `
         
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
  console.log(cart__items);
}
  //=====================================================================

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
//========================================================================

let totalPriceCalcul = [];

for (let l = 0; l < products.length; l++) {
  let prixProduitsPanier = products[l].price;

  totalPriceCalcul.push(prixProduitsPanier)

  console.log(totalPriceCalcul);
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const prixTotal = totalPriceCalcul.reduce(reducer,0);

console.log(prixTotal);




// let produit = document.getElementById("cart_items").value;
// let Quantity = document.getElementById("totalQuantity").value;
// let Price = document.getElementById("totalPrice").value;

// function calculateTax(totalPrice) {
// document.getElementById("totalPrice").value = totalPrice * totalQuantity;
// console.log(calculateTax);
// }