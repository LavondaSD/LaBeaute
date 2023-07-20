const product = [
	{
	id: 1,
	image: 'C:\Users\USER\OneDrive\Desktop\DeBe\DeBe\img\FBLip.png',
	title: 'Fenty Lip Gloss',
	price: '$27.99',
},
{
	id: 2,
	image: 'img\SeLi.png',
	title: 'Sephora Liquid Lipstick',
	price: '$18.99',
},
{
	id: 3,
	image: 'img\brush.jpg',
	title: 'Elf Precision Brush',
	price: '$18.99',
},
]

Const categories = [...new Set(product.map((item)=> {return item}))]

let cart = document.getElementById('root')
cart.innerHTML = categories.map((item)=>
{
	var {image, title, price} = item;
	return(
		`<div class='box'>
		<div class='img-box'>
			<img src=${image}></img>
		</div>
		<div class='left'>
			<p>${title}</p>
			<p>${price}</p>
			<button>Add to Cart</button>
		</div>
		</div>`
)
}).join("")