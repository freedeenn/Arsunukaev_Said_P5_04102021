//========================Recuperer produit de localStorage=======================================

if (localStorage.getItem("products") !== null) {
	let products = JSON.parse(localStorage.products);

	// =====================parcurire les produits dans localStorage================================

	products.forEach((product) => {
		//====================Selectionner la div qui va contenir le outerHTML du container===========

		let container = document.querySelector("#cart__items");

		//====================Création de la balise article et ajout d'une classe=====================

		let article = document.createElement("article");
		article.id = `${product._id}`;
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

	// je supprime un produit dans le panier
	let btnDelete = document.querySelectorAll(".deleteItem");
	for (let i = 0; i < btnDelete.length; i++) {
		btnDelete[i].addEventListener("click", (e) => {
			e.preventDefault();

			store.removeProduct(
				e.target.parentElement.parentElement.parentElement.parentElement.id
			);
			const article =
				btnDelete[i].parentElement.parentElement.parentElement.parentElement;
			article.remove();

			console.log(
				e.target.parentElement.parentElement.parentElement.parentElement.id
			);

			alert(
				products[i].name +
					" (" +
					products[i].color +
					") a été supprimer du panier !"
			);

			// const products = JSON.parse(localStorage.getItem("products"));
			// localStorage.removeItem(e.target.parentElement);
			// 	console.log(e.target);
		});
	}

	class store {
		static getProducts() {
			let products;
			if (localStorage.getItem("products") === null) {
				products = [];
			} else {
				products = JSON.parse(localStorage.getItem("products"));
			}
			return products;
		}

		static addProduct(product) {
			const products = store.getProducts();
			products.push(product);
			localStorage.setItem("products", JSON.stringify(products));
		}

		static removeProduct(_id) {
			const products = store.getProducts();

			products.forEach((product, index) => {
				if (product._id === _id) {
					products.splice(index, 1);
				}
			});
			localStorage.setItem("products", JSON.stringify(products));
		}
	}
}

// let suppression = products[i]._id _id;
// console.log(suppression);
// products = products.filter((el) => {
// 	return !(el._id === products[i]._id && el.color === products[i].color);
// });
// localStorage.setItem("products", JSON.stringify(products));
// 			const products = JSON.parse(localStorage.getItem("products[i].color"));
// 			// localStorage.setItem("_id", JSON.stringify(_id));
// 			console.log(products[i].color);
// 			localStorage.removeItem("products[i].color");
// 			const article =
// 				btnDelete[i].parentElement.parentElement.parentElement.parentElement;
// 			article.remove();
// 		});
// 	}
// }// window.location.href = "cart.html";

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

/***********************************/
//DEMANDER LES INFOS DE L'UTILISATEUR//
/**********************************/

// j'envoie le formulaire dans le serveur
function postForm() {
	const order = document.getElementById("order");
	order.addEventListener("click", (event) => {
		event.preventDefault();

		// je récupère les données du formulaire dans un objet
		const contact = {
			firstName: document.getElementById("firstName").value,
			lastName: document.getElementById("lastName").value,
			address: document.getElementById("address").value,
			city: document.getElementById("city").value,
			email: document.getElementById("email").value,
		};

		////
		// --- vérifier la validation des entrées --- //
		////

		//contrôle prénom, test : Martin-Luther Jr. ou 陳大文 ou ñÑâê ou ации ou John D'Largy
		function controlFirstName() {
			const validFirstName = contact.firstName;
			if (
				/^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{3,20}$/.test(validFirstName)
			) {
				return true;
			} else {
				let firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
				firstNameErrorMsg.innerText =
					"Merci de vérifier le prénom, 3 caractères minimum";
			}
		}

		// contrôle nom
		function controlName() {
			const validName = contact.lastName;
			if (/^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{3,20}$/.test(validName)) {
				return true;
			} else {
				let lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
				lastNameErrorMsg.innerText =
					"Merci de vérifier le nom, 3 caractères minimum, avec des lettres uniquement";
			}
		}

		// contrôle adresse
		function controlAddress() {
			const validAddress = contact.address;
			if (/$/.test(validAddress)) {
				return true;
			} else {
				let addressErrorMsg = document.getElementById("addressErrorMsg");
				addressErrorMsg.innerText =
					"Merci de vérifier l'adresse, alphanumérique et sans caractères spéciaux";
			}
		}

		// contrôle ville
		function controlCity() {
			const validAddress = contact.city;
			if (/^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{3,10}$/.test(validAddress)) {
				return true;
			} else {
				let cityErrorMsg = document.getElementById("cityErrorMsg");
				cityErrorMsg.innerText =
					"Merci de vérifier le nom de la ville, 3 caractères minimum, avec des lettres uniquement";
			}
		}

		// contrôle email
		function controlEmail() {
			const validEmail = contact.email;
			if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(validEmail)) {
				return true;
			} else {
				let emailErrorMsg = document.getElementById("emailErrorMsg");
				emailErrorMsg.innerText = "Erreur ! Email non valide";
			}
		}
		////
		// --- FIN vérifier la validation des entrées --- //
		////

		// Après vérification des entrées, j'envoie l'objet contact dans le localStorage
		function validControl() {
			if (
				controlFirstName() &&
				controlName() &&
				controlAddress() &&
				controlCity() &&
				controlEmail()
			) {
				localStorage.setItem("contact", JSON.stringify(contact));
				return true;
			} else {
				alert("Merci de revérifier les données du formulaire");
			}
		}
		validControl();

		// je mets les valeurs du formulaire et les produits sélectionnés
		// dans un objet...
		let products = localStorage.getItem("products");
		const sendFormData = {
			contact,
			products,
		};

		// j'envoie le formulaire + localStorage (sendFormData)
		// ... que j'envoie au serveur

		const options = {
			method: "POST",
			body: JSON.stringify(sendFormData),
			headers: {
				"Content-Type": "application/json",
			},
		};

		fetch("http://localhost:3000/api/products/order", options)
			.then((response) => response.json())
			.then((data) => {
				localStorage.setItem("orderId", data.orderId);
				if (validControl()) {
					document.location.href = "confirmation.html?id=" + data.orderId;
				}
			});
	}); // fin eventListener postForm
} // fin envoi du formulaire postForm
postForm();

// fin cart.js

// // /////////////////////////////////////////////////////////
// //     // je garde les saisies dans les champs du formulaire
// //     // même après avoir changé de page
//     const dataLocalStorage = localStorage.getItem('contact');
//     const dataLocalStorageObjet = JSON.parse(dataLocalStorage);
//     document.getElementById('firstName').value = dataLocalStorageObjet.firstName;
//     document.getElementById('lastName').value = dataLocalStorageObjet.lastName;
//     document.getElementById('address').value = dataLocalStorageObjet.address;
//     document.getElementById('city').value = dataLocalStorageObjet.city;
//     document.getElementById('email').value = dataLocalStorageObjet.email;

// // ////////////////////////////////////////////////////////

// Récupérer les informations de contact de l'utilisateur à la validation
// let submit = document.querySelector("#order");
// submit.addEventListener("click", (e) => {
// 	e.preventDefault();
// 	// Vérifier si tous les champs sont bien remplis à la validation

// 	let myForm = document.querySelector(".cart__order__form");

// 	let empty = document.querySelector(".cart__order");
// 	let email = document.querySelector("#email").value;
// 	let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
// 	let formElements = document.querySelectorAll(".cart__order__form input");
// 	let hasEmptyValue = false;
// 	formElements.forEach(function (element) {
// 		console.log(element.getAttribute("required"));
// 		if (element.getAttribute("required") === "true" && !element.value) {
// 			hasEmptyValue = true;
// 		}
// 	});
// 	if (
// 		!myForm ||
// 		myForm.className == "invalid" ||
// 		!email.match(pattern) ||
// 		hasEmptyValue
// 	) {
// 		empty.innerText =
// 			"Veuillez renseigner tous les champs obligatoires au format valide";
// 		empty.style.color = "#F04824";
// 		// return false;
// 	} else {
// 		let formData = new FormData(myForm);
// 		console.log(formData);
// 		let products = JSON.parse(localStorage.getItem("products"));
// 		let articles = [];
// 		let totalPrice = 0;

// 		products.forEach((product) => {
// 			totalPrice += product.count * product.price;
// 			for (let i = 0; i < product.count; i++) {
// 				articles.push(product.id);
// 			}
// 		});

// 		fetch("http://localhost:3000/api/products/order", {
// 			method: "POST",
// 			headers: {
// 				Accept: "application/json",
// 				"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify({
// 				contact: {
// 					firstName: formData.get("firstName"),
// 					lastName: formData.get("lastName"),
// 					address: formData.get("address"),
// 					city: formData.get("city"),
// 					email: formData.get("email"),
// 				},
// 				articles: articles,
// 			}),
// 		})
// 			.then(function (response) {
// 				return response.json();
// 			})
// 			.then(function (response) {
// 				console.log(response);
// 				window.location.replace(
// 					`confirmation.html?orderId=${response.orderId}&totalprice=${totalPrice}`
// 				);
// 			})
// 			.catch(function (error) {
// 				console.log(error);
// 			});

// 		// Enlever les produits du localstorage après validation de la commande
// 		// localStorage.clear();
// 	}
// });

// // =====================incrémenter le nombre de produit au click sur +==========================
// // letbuttonTwo = document.querySelector('.itemQuantity').value;
// // buttonTwo.addEventListener(click, function () {
// //   let products = JSON.parse(localStorage.getItem('products'));
// //   let productIndex = produits.findIndex(element => element.id === product.id);

// //   products[productIndex] = {
// //     id: product.id,
// //     image: product.image,
// //     price: product.price,
// //     name: product.name,
// //     count: products[productIndex].count + 1
// //   };

// //   document.querySelector(`[id="${product.id}"] .totalQuantity`).value = products[productIndex].count;
// //   document.querySelector(`[id="${product.id}"] .totalPrice`).innerText = `${((products[productIndex].price * (products[productIndex].count))).toFixed(2)} €`;
// //   localStorage.setItem('produits', JSON.stringify(products));
