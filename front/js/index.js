//======================================================appel de l'API
const url = "http://localhost:3000/api/products";

/*
 * product = {
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

// function generateProductHTML(product) {
displayProduct = (product) => {
	//=========================================================Selectionner la div qui va contenir le outerHTML du container
	let container = document.querySelector("#items");

	//=========================================================Création de la balise article et ajout d'une classe
	let article = document.createElement("article");
	article.className = "product-container";

	//=========================================================Child de l'article
	let image = document.createElement("div");
	image.className = "item__img";
	article.appendChild(image);

	let info = document.createElement("div");
	info.className = "product-info";
	article.appendChild(info);

	let a = document.createElement("a");
	a.setAttribute("href", `product.html?id=${product._id}`);
	container.appendChild(a);
	a.appendChild(article);

	//=========================================================Child des autres balises
	let img = document.createElement("img");
	img.className = "product-pic";
	img.setAttribute("src", product.imageUrl);
	img.setAttribute("alt", `image ${product.name}`);
	image.appendChild(img);

	let h2 = document.createElement("h2");
	h2.className = "product-name";
	h2.innerText = product.name;
	info.appendChild(h2);

	let p = document.createElement("p");
	p.className = "description";
	p.innerText = product.description;
	article.appendChild(p);

	let span = document.createElement("span");
	span.className = "price";
	span.innerText = `${product.price}€`;
	info.appendChild(span);
};

//gérer les données produit===/===parcourir les produits===/===afficher les produits
handleProductsData = (products) =>
	products.forEach((product) => displayProduct(product));

fetch(url)
	.then((res) => res.json())
	.then(handleProductsData)
	.catch((error) => console.log(error));
