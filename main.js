
// console.log(“running”); //
let carts = document.querySelectorAll(‘.add-cart’);
let product = [
{
	name: ‘Fenty LipGloss’,
	tag: ‘Fenty LipGLoss’,
	price: 26.99
	inCart: 0
}
];

for (let i=0; I < carts.length; i++) {
	carts[i].addEventListener(‘click’, () = > {
		cartNum(product[i]);
		totalCost()
})
}

Function onLoadCartNum() {
	Let productNum = localStorage.getItem(‘cartNum’);
	
If(productNum) {
	Document.querySelector(‘.cart span’).textContent = productNum;
} 

}

function cartNum(product) {
	// console.log(“The product clicked is “, product); //
	let productNum = localStorage.getItem(‘cartNum’);
	/* console.log(productNum);
	console.log(typeof productNum); */

	productNum = parseInt(productNum);

	if ( productNums ) {
	localStorage.setItem(‘cartNum’, productNum + 1);
document.querySelector(‘.cart span’).textContent = productNum + 1;	
}	else {
	localStorage.setItem(‘cartNum’, 1); 

	document.querySelector(‘.cart span’).textContent = 1;
}
setItems(product);
}
function setItems(product) {
	let cartItem = localStorage.getItems(‘productInCart’);
	cartItem = JSON.parse(cartItems);
	 // console.log(“Inside of setItems function”); //
	# console.log(“My product is”, product); #
	
	let cartItem =  {
		[product.tag: product
	}
	if (cartItem != null) {
		if(cartItem[product.tag]  == undefined) {
			cartItem = {
				…cartItem,
				[product.tag]: product
}
}
		cartItem[procduct.tag].inCart += 1;
}	else {
	product.inCart = 1;
	cartItem = {
		[product.tag]: product
}
}
product.inCart = 1;
localStorage.setItems(“productInCart”, JSON.stringify(cartItem));

}

function totalCost(product) {
// console.log(“The product price is”, product.price); 

	Let cartCost = localStorage.getItem(‘totalCost’);
	cartCost = parseInt(cartCost);
	// console.log(“My cart cost”, cartCost); 

 if(cartCost != null) {
	cartCost = parseInt(cartCost);
	localStorage.setItems(“totalCost”, cartCost + product.price);
} else {
	localStorage.setItems(“totalCost”, product.price);
	

}
}

function displayCart() {
	let cartItem = localStorage.getItem(“productInCart”);
	cartItem = JSON.parse(cartItem);
	let productContainer = document.querySelector(“.product-container”);
let cartCost = localStorage.getItem(‘totalCost’);
// console.log(cartItem);

	if(cartItem && productContainer) {
		productContainer.innerHTML – ‘ ‘;
		Object.values(cartItem).map(item => {
			productContainer.innerHTML += `
			<div class=”product”>
			<ion-icon name=”close-circle”></ion-icon>
			<img src=”./images/${item.tag}.jpg”>
			<span>${item.name}</span>
			</div>
			<div class=”price>${item.price}</div>
			<div class=”quantity”>
			<ion-icon class=”” ></ion-icon>
			<span>${item.inCart}</span>
			<ion-icon class=”” ></ion-icon>
			</div>
			<div class=”total”>
				$${item.inCart * item.price}
			</div>
`
});
productContainer.innerHTML += `
	<div class=”cartTotalContainer”>
		<h4 class= “cartTotalTitle”>
			Cart Total
		</h4>
		<h4 class=”cartTotal”>
			$${cartCost}
		</h4>
}
}
onLoadCartNum();