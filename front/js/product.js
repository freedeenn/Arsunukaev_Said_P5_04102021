const url = 'http://localhost:3000/api/products';

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');


// //Afficher le produit sélectionné
function generateProductHTML(kanap) {
  const img = document.createElement("img");
  img.src = `${kanap.imageUrl}`;
  img.setAttribute("alt",`image ${kanap.name}`);
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
  }).then(generateProductHTML)
  // .then(cartHTML)
  .catch(function (error) {
    console.log(error)
  });