const url = "http://localhost:3000/api/products";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

let product;
//=====================================================Afficher le produit sélectionné
const displayProduct = (product) => {
	const img = document.createElement("img");
	img.src = `${product.imageUrl}`;
	img.setAttribute("alt", `image ${product.name}`);
	document.querySelector(".item__img").appendChild(img);
	document.getElementById("title").innerText = `${product.name}`;
	document.getElementById("price").innerText = `${product.price}`;
	document.getElementById("description").innerText = `${product.description}`;

	// ====crée et afficher une option choix de couleur=========
	product.colors.forEach((color) => {
		const option = document.createElement("option");
		option.value = color;
		option.innerText = color;
		document.getElementById("colors").appendChild(option);
	});
};

const addProduct = (product) => {
	// On récupère l'élément sur lequel on veut détecter le clic
	const btnAdd = document.querySelector("#addToCart");
	// On écoute l'événement click, notre callback prend un paramètre que nous avons appelé event ici
	btnAdd.addEventListener("click", (e) => {
		// On utilise la fonction preventDefault de notre objet event pour empêcher le comportement par défaut
		e.preventDefault();

		const color = document.querySelector("#colors").value;
		const nb = parseInt(document.getElementById("quantity").value);
		const productToAdd = { ...product, number: nb, color: color };
		const products = JSON.parse(localStorage.getItem("products")) || [];
		let index = products.findIndex(
			(elt) => elt._id === product._id && elt.color === color
		);
		if (index === -1) {
			products.push(productToAdd);
		} else {
			products[index].number += nb;
		}
		localStorage.setItem("products", JSON.stringify(products));
		alert(product.name + " (" + color + ") a été ajouté au panier !");
	});
};

fetch(`${url}/${id}`)
	.then((res) => res.json())
	.then((product) => {
		displayProduct(product);
		addProduct(product);
	})
	.catch((error) => console.log(error));
