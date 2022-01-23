//========================Recuperer les produits de localStorage=======================================
const products = JSON.parse(localStorage.getItem("products"));

//========================si 0 produits dans le panier afficher le message========================
if (products === null || products == 0) {
	function getMessage() {
		let container = document.getElementById("cart__items");
		let empty = document.createElement("div");
		empty.className = "cart__empty";
		empty.innerText =
			"Votre panier est vide !\n Merci de sélectionner les produits depuis la page d'accueil";
		empty.style.textAlign = "center";
		container.appendChild(empty);
	}
	getMessage();
} else {
	// =====================parcourir les produits dans localStorage================================
	function getProducts() {
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
			let cart__item__content__settings__quantity =
				document.createElement("div");
			cart__item__content__settings__quantity.className =
				"cart__item__content__settings__quantity";
			cart__item__content__settings.appendChild(
				cart__item__content__settings__quantity
			);

			let description = document.createElement("p");
			description.className = "description";
			description.innerText = `${product.description}`;
			cart__item__content__settings.appendChild(description);

			let p__quantity = document.createElement("p");
			p__quantity.className = "itemQuantity";
			p__quantity.innerText = "Qté";
			cart__item__content__settings__quantity.appendChild(p__quantity);

			// input pour la quantité
			let quantity = document.createElement("input");
			quantity.id = "inputId";
			quantity.type = "number";
			quantity.min = "1";
			quantity.max = "99";
			quantity.setAttribute("value", product.number);
			p__quantity.appendChild(quantity);
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
	}
	getProducts();
}

//=====================================supprimer produit=============================================================
// je supprime un produit dans le panier
const btnDelete = document.querySelectorAll(".deleteItem");
for (let i = 0; i < btnDelete.length; i++) {
	btnDelete[i].addEventListener("click", (e) => {
		// e.preventDefault();
		removeProduct(
			e.target.parentElement.parentElement.parentElement.parentElement.id
		);
		const article =
			btnDelete[i].parentElement.parentElement.parentElement.parentElement;
		article.remove();

		alert(
			products[i].name +
				" (" +
				products[i].color +
				") a été supprimer du panier !"
		);
		window.location.href = "cart.html";
	});
}
function removeProduct(_id) {
	const products = JSON.parse(localStorage.getItem("products"));
	products.forEach((product, index) => {
		if (product._id === _id) {
			products.splice(index, 1);
		}
	});
	localStorage.setItem("products", JSON.stringify(products));
}
removeProduct();

//======================================Calculer le prix total et la quantité========================================
function totalPrice() {
	let totalPriceCalcul = 0;
	let totalCount = 0;
	let products = JSON.parse(localStorage.getItem("products"));

	products.forEach((product) => {
		totalPriceCalcul += product.price * product.number;
		totalCount += product.number;

		// ====afficher prix total=========
		document.getElementById("totalPrice").innerText = `${totalPriceCalcul}`;
		// ====afficher quantité total=====
		document.getElementById("totalQuantity").innerText = `${totalCount}`;
	});
}
totalPrice();

//===========================choix de quantité======================================================================
products.forEach((product) => {
	const quantity = document.querySelectorAll("#inputId");
	for (let i = 0; i < quantity.length; i++) {
		quantity[i].addEventListener("change", (e) => {
			const number = Number(e.target.value);
			products[i].number = number;
			localStorage.setItem("products", JSON.stringify(products));
			totalPrice();
		});
	}
});

/***********************************/
//DEMANDER LES INFOS DE L'UTILISATEUR//==============================================================================
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

		//contrôle prénom
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
		let products = JSON.parse(localStorage.getItem("products"));
		let productsId = [];
		products.forEach((product) => {
			productsId.push(product._id);
		});

		const sendFormData = {
			contact,
			products: productsId,
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
			.then((res) => res.json())
			.then((data) => {
				localStorage.setItem("orderId", data.orderId);
				if (validControl()) {
					document.location.href = "confirmation.html?id=" + data.orderId;
				}
				console.log(data);
			});
	}); // fin eventListener postForm
} // fin envoi du formulaire postForm
postForm();

// fin cart.js

// // /////////////////////////////////////////////////////////
//     // je garde les saisies dans les champs du formulaire
//     // même après avoir changé de page
// const dataLocalStorage = localStorage.getItem("contact");
// const dataLocalStorageObjet = JSON.parse(dataLocalStorage);
// document.getElementById("firstName").value = dataLocalStorageObjet.firstName;
// document.getElementById("lastName").value = dataLocalStorageObjet.lastName;
// document.getElementById("address").value = dataLocalStorageObjet.address;
// document.getElementById("city").value = dataLocalStorageObjet.city;
// document.getElementById("email").value = dataLocalStorageObjet.email;

// // ////////////////////////////////////////////////////////
