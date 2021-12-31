//========================Recuperer produit de localStorage=======================================

if (localStorage.getItem("products") !== null) {
	let products = JSON.parse(localStorage.products);

	// =====================parcurire les produits dans localStorage================================

	products.forEach((product) => {
		//====================Selectionner la div qui va contenir le outerHTML du container===========

		let container = document.querySelector("#cart__items");

		//====================Création de la balise article et ajout d'une classe=====================

		let article = document.createElement("article");
		article.id = `${product.id}`;
		article.className = "cart__item";
		container.appendChild(article);

		let image = document.createElement("div");
		image.className = "cart__item__img";
		article.appendChild(image);

		let img = document.createElement("img");
		img.src = `${product.imageUrl}`;
		img.setAttribute("alt", `image ${product.name}`);
		image.appendChild(img);

		// =================================div content===============================================

		let cart__item__content = document.createElement("div");
		cart__item__content.className = "cart__item__content";
		article.appendChild(cart__item__content);

		// =================================div title and price=======================================

		let cart__item__content__titlePrice = document.createElement("div");
		cart__item__content__titlePrice.className =
			"cart__item__content__titlePrice";
		cart__item__content.appendChild(cart__item__content__titlePrice);

		let title = document.createElement("h2");
		title.className = "product-name";
		title.innerText = `${product.name}`;
		cart__item__content__titlePrice.appendChild(title);

		let price = document.createElement("p");
		price.className = "price";
		price.innerText = `Prix : ${product.price}`;
		cart__item__content__titlePrice.appendChild(price);

		let color = document.createElement("p");
		color.className = "color";
		color.innerText = `Couleur : ${product.color}`;
		cart__item__content__titlePrice.appendChild(color);

		// ===================================div settings============================================

		let cart__item__content__settings = document.createElement("div");
		cart__item__content__settings.className = "cart__item__content__settings";
		cart__item__content.appendChild(cart__item__content__settings);

		// ===================================div quantity============================================

		let cart__item__content__settings__quantity = document.createElement("div");
		cart__item__content__settings__quantity.className =
			"cart__item__content__settings__quantity";
		cart__item__content__settings.appendChild(
			cart__item__content__settings__quantity
		);

		// let color = document.createElement('p');
		// color.className = 'color';
		// color.innerText = `Color : ${product.color}`;
		// cart__item__content__settings.appendChild(color);

		let description = document.createElement("p");
		description.className = "description";
		description.innerText = `${product.description}`;
		cart__item__content__settings.appendChild(description);

		let qte = document.createElement("p");
		qte.className = "itemQuantity";
		qte.innerText = "Qté";
		cart__item__content__settings__quantity.appendChild(qte);

		// input pour la quantité
		let input = document.createElement("input");
		input.type = "number";
		input.setAttribute("value", product.number);
		input.min = "1";
		input.max = "99";
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

		let cart__item__content__settings__delete = document.createElement("div");
		cart__item__content__settings__delete.className =
			"cart__item__content__settings__delete";
		cart__item__content__settings.appendChild(
			cart__item__content__settings__delete
		);

		let supprimer = document.createElement("p");
		supprimer.className = "deleteItem";
		supprimer.innerText = "supprimer";
		cart__item__content__settings__delete.appendChild(supprimer);
	});

	//=====================================supprimer produit============================================

	let btnDelete = document.querySelectorAll(".deleteItem");

	for (let i = 0; i < btnDelete.length; i++) {
		btnDelete[i].addEventListener("click", (event) => {
			event.preventDefault();

			// alert(
			// 	products[i].name +
			// 		" (" +
			// 		products[i].color +
			// 		") a été supprimer du panier !"
			// );

			// let suppression = products[i]._id _id;
			// console.log(suppression);
			// products = products.filter((el) => {
			// 	return !(el._id === products[i]._id && el.color === products[i].color);
			// });
			// localStorage.setItem("products", JSON.stringify(products));
			const products = JSON.parse(localStorage.getItem("products[i].color"));
			// localStorage.setItem("_id", JSON.stringify(_id));
			console.log(products[i].color);
			localStorage.removeItem("products[i].color");
			const article =
				btnDelete[i].parentElement.parentElement.parentElement.parentElement;
			article.remove();
		});
	}
}

//======================================Calculer prix total et quantité==========================================

if (localStorage.getItem("products") !== null) {
	const products = JSON.parse(localStorage.products);
	console.log(products);
	let totalPriceCalcul = 0;
	let totalCount = 0;

	products.forEach((product) => {
		totalPriceCalcul += product.price * product.number;
		totalCount += product.number;
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
// let products;
// let order = document.querySelector('#order');
// order.addEventListener('click', e => {
//   e.preventDefault();

//   const formulair = {
//     firstName: document.querySelector('#firstName').value,
//     lastName: document.querySelector('#lastName').value,
//     address: document.querySelector('#address').value,
//     city: document.querySelector('#city').value,
//     email: document.querySelector('#email').value
//   }
//   localStorage.setItem('formulair', JSON.stringify(formulair));

//   const toSend = {
//     products,
//     formulair
//   }
//   console.log(toSend);
// })

// Récupérer les informations de contact de l'utilisateur à la validation
let submit = document.querySelector("#order");
submit.addEventListener("click", (e) => {
	e.preventDefault();
	// Vérifier si tous les champs sont bien remplis à la validation

	let myForm = document.querySelector(".cart__order__form");

	let empty = document.querySelector(".cart__order");
	let email = document.querySelector("#email").value;
	let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	let formElements = document.querySelectorAll(".cart__order__form input");
	let hasEmptyValue = false;
	formElements.forEach(function (element) {
		console.log(element.getAttribute("required"));
		if (element.getAttribute("required") === "true" && !element.value) {
			hasEmptyValue = true;
		}
	});
	if (
		!myForm ||
		myForm.className == "invalid" ||
		!email.match(pattern) ||
		hasEmptyValue
	) {
		empty.innerText =
			"Veuillez renseigner tous les champs obligatoires au format valide";
		empty.style.color = "#F04824";
		// return false;
	} else {
		let formData = new FormData(myForm);
		console.log(formData);
		let products = JSON.parse(localStorage.getItem("products"));
		let articles = [];
		let totalPrice = 0;

		products.forEach((product) => {
			totalPrice += product.count * product.price;
			for (let i = 0; i < product.count; i++) {
				articles.push(product.id);
			}
		});

		fetch("http://localhost:3000/api/products/order", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				contact: {
					firstName: formData.get("firstName"),
					lastName: formData.get("lastName"),
					address: formData.get("address"),
					city: formData.get("city"),
					email: formData.get("email"),
				},
				articles: articles,
			}),
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (response) {
				console.log(response);
				window.location.replace(
					`confirmation.html?orderId=${response.orderId}&totalprice=${totalPrice}`
				);
			})
			.catch(function (error) {
				console.log(error);
			});

		// Enlever les produits du localstorage après validation de la commande
		// localStorage.clear();
	}
});

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
