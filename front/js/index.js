// appel de l'API
const url = 'http://localhost:3000/api/products';

/*
 * kanap = {
    id: ObjectID
    name: string
    price: number
    description: string
    imageUrl: string
    altText: string
    colors: [string]
 }
 * 
*/

function generateProductHTML(kanap){

//Selectionner la div qui va contenir le outerHTML du container
    let container = document.querySelector('.items')

//Création de la balise article et ajout d'une classe
    let article = document.createElement('article')
    article.className = 'kanap-container'

//Child de l'article
    let image = document.createElement('div');
    image.className = 'kanap';
    let info = document.createElement('div');
    info.className = 'kanap-info';
    let a = document.createElement('a');
    a.setAttribute('href', `product.html?id=${kanap._id}`);

//Child des autres balises    
    let img = document.createElement('img');
    img.className = 'kanap-pic';
    img.setAttribute('src', kanap.imageUrl);
    img.setAttribute("alt",`image ${kanap.name}`);
    let h2 = document.createElement('h2');
    h2.className = 'kanap-name';
    h2.innerText = kanap.name;
    let p = document.createElement('p');
    p.className = 'description';
    p.innerText = kanap.description;
    let span = document.createElement('span');
    span.className = 'price';
    span.innerText = `${kanap.price}€`;

        
    image.appendChild(img);
    info.appendChild(h2);
    info.appendChild(span);
    article.appendChild(image);
    article.appendChild(info);
    article.appendChild(p);
    a.appendChild(article);

    container.appendChild(a);
}

function handleProductsData(products) {
// parcourir les produits
    products.forEach(kanap => {
// afficher les produits
        generateProductHTML(kanap);
    });
}

fetch(url)
    .then(function (response) {
        return response.json();
    }).then(handleProductsData)
    .catch(function (error) {
        console.log(error);
    });

    document.querySelector('.number').innerHTML = localStorage.getItem('number') || 0;