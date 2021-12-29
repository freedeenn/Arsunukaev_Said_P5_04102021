// const url = 'http://localhost:3000/api/products/order';
const urlParams = new URLSearchParams(window.location.search);
const orderId = urlParams.get('orderId');

let orderNumber = document.querySelector('#orderId')
orderNumber.innerText = `${orderId}`;
