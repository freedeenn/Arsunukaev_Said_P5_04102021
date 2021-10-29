
const fullPrice = document.querySelector("fullPrice");
let price = 0;

const randomId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const priceWithoutSpaces = (str) => {
  return str.replace(/\s/g, '');
};

const normalPrice = (str) => {
  return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

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

  //=====================================================================

  let totalPriceCalcul = [];

  for (let l = 0; l > products.length; l++) {
    console.log(products);
  }

  // document.onclick = event => {
  //   if (event.target.classList.contains('.deleteItem')) {
  //     plusFunction(event.target.dataset.id);
  //   }
  // }
}
// const plusFunction = id => {
//     cart[id]++;
//     renderCart();
// }

// const minusFunction = id => {
//     if (cart[id] - 1 == 0) {
//         deleteFunction(id);
//         return true
//     }
//     cart[id]--;
//     renderCart();
// }

// const deleteFunction = id => {
//     delete cart[id];
//     renderCart();
// }

// const renderCart = () => {
//     console.log(cart);
// }