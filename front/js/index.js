// appel de l'API
const url = 'http://localhost:3000/api/products';

function generateProductHTML(kanap){


    let container = document.querySelector('.items')

    let article = document.createElement('article')
    article.className = 'kanap-container'

    let image = document.createElement('div');
    image.className = 'kanap';
    let info = document.createElement('div');
    info.className = 'kanap-info';
    let a = document.createElement('a');
    a.className = 'btnShow';
    a.setAttribute('href', `products.html?id=${kanap._id}`);

    let img = document.createElement('img');
    img.className = 'kanap-pic';
    img.setAttribute('src', kanap.imageUrl);
    let h2 = document.createElement('h2');
    h2.className = 'kanap-name';
    h2.innerText = kanap.name;
    let p = document.createElement('p');
    p.className = 'description';
    p.innerText = kanap.description;
    let span = document.createElement('span');
    span.className = 'price';
    span.innerText = `${(kanap.price/1).toFixed(2)}€`;

        
    image.appendChild(img);
    info.appendChild(h2);
    info.appendChild(span);
    article.appendChild(image);
    article.appendChild(info);
    article.appendChild(a);
    article.appendChild(p);

    container.appendChild(article);
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