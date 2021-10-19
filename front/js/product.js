const url = 'http://localhost:3000/api/products';

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');


let product;
// //Afficher le produit sélectionné
function generateProductHTML(kanap) {
  const img = document.createElement("img");
  img.src = `${kanap.imageUrl}`;
  img.setAttribute("alt", `image ${kanap.name}`);
  document.querySelector('.item__img').appendChild(img);
  document.getElementById('title').innerText = `${kanap.name}`;
  document.getElementById('price').innerText = `${kanap.price}`;
  document.getElementById('description').innerText = `${kanap.description}`;

  kanap.colors.forEach(color => {
    const option = document.createElement('option');
    option.value = color;
    option.innerText = `${color}`;
    document.getElementById('colors').appendChild(option);
  });
};

fetch(`${url}/${id}`)
  .then(function (response) {
    return response.json();
  }).then(function (data){
    generateProductHTML(data);
    product = data;
  })
  // .then(cartHTML)
  .catch(function (error) {
    console.log(error)
  });

  const elt = document.getElementById('addToCart');    // On récupère l'élément sur lequel on veut détecter le clic
  elt.addEventListener('click', function(event) {      // On écoute l'événement click, notre callback prend un paramètre que nous avons appelé event ici
      event.preventDefault();                          // On utilise la fonction preventDefault de notre objet event pour empêcher le comportement par défaut de cet élément lors du clic de la souris
      console.log(product);
      const nb = parseInt(document.getElementById('quantity').value); 
      const addproduct = {...product, number: nb};
      const products = JSON.parse(localStorage.getItem('products')) || [];
      const index = products.map(function(one){
        return one.id;
      }).indexOf(product.id);
      if (index === -1){
        products.push(addproduct); 
      } else {
        products[index] = {...products[index], number: products[index].number + nb}
      }
      
      localStorage.setItem('products', JSON.stringify(products));                           
  });

  // let cart = {
  //   'id': 1
  // };

  // document.onclick = event => {
  //   if (event.target.classList.contains('plus')) {
  //     console.log(event.target.dataset.id);
  //     // plusFunction(event.target.dataset.id);
  //   }
  // }

// let span = document.querySelectorById('addToCart');
// addToCart.addEventListener("click", function () {
//   console.log(test0)
//   // console.log(this.closest('.scnd-teddy-container').getAttribute('data-id'));
//   const img = document.querySelector("img");
//   img.src = `${kanap.imageUrl}`;
//   img.setAttribute("alt", `image ${kanap.name}`);
//   document.querySelector('.item__img').appendChild(img);
//   document.getElementById('title').innerText = `${kanap.name}`;
//   let color = document.querySelector('#select').value
//   document.getElementById('price').innerText = `${kanap.price}`;
//   document.getElementById('description').innerText = `${kanap.description}`;
//   let produits = JSON.parse(localStorage.getItem('produits')) || [];
//   let productIndex = produits.findIndex(function (element) {
//     console.log(element.price);
//     return element.id === id;
//   })
  // console.log(productIndex)
  // console.log(produits);
  // console.log(produits[productIndex]);
  // if (productIndex === -1) {
  //   produits.push({
  //     id: id,
  //     image: image,
  //     price: price,
  //     name: name,
  //     color: color,
  //     count: 1
  //   })
  // } else {
  //   produits[productIndex] = {
  //     id: id,
  //     image: image,
  //     price: price,
  //     name: title,
  //     color: color,
  //     count: produits[productIndex].count + 1
  //   }
  // }
//   localStorage.setItem('produits', JSON.stringify(produits))

//   let msgTotal = produits.reduce(function (prev, cur) {
//     console.log(prev);
//     console.log(cur);
//     return prev + cur.count;
//   }, 0)
//   console.log(msgTotal);
//   document.querySelector('.number').innerHTML = msgTotal;
//   localStorage.setItem('number', msgTotal)

//   alert(name + " (" + color + ") a été ajouté au panier !");

// });



document.querySelector('.number').innerHTML = localStorage.getItem('number') || 0;