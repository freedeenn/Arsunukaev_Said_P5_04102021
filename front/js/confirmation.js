const urlParams = new URLSearchParams(window.location.search);
const orderId = urlParams.get('orderId');

let orderNumber = document.querySelector('#orderId')

orderNumber.innerText += `${orderId}`;
