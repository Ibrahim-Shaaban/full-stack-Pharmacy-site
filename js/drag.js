function func(){
	var productsImages =document.getElementsByClassName('recent-work-wrap'),

		cartDropZone =document.getElementById('shopping-cart'),

		cartDrop =document.querySelectorAll('#shopping-cart ul')[0];

	var cart =function (){
		this.products =new Array();
	};

	var Product =function (id,price){
		this.productId =id;
		this.price =price;
	};

	var currentCart =null;
	currentCart =JSON.parse(localStorage.getItem('cart'));
	if (!currentCart){
		createEmptyCart();
	}

	updateCurrentCart();

	currentCart.addProduct =function (product){
		currentCart.products.push(product);
		localStorage.setItem('cart',JSON.stringify(currentCart));
	};

	


	for (var i =0 ;i <productsImages.length ;i++){
		productsImages[i].addEventListener('dragstart',function(ev){
			ev.dataTransfer.effectAllowed ='copy';
			ev.dataTransfer.setData('Text',this.getAttribute('id'));
		},false);
	}

	cartDropZone.addEventListener('dragover',function(ev){
		if (ev.preventDefault)
			ev.preventDefault();

		ev.dataTransfer.dropEffect ='copy';
		return false;

	},false);


	cartDropZone.addEventListener('drop',function(ev){
		if (ev.stopPraopagation)
			ev.stopPraopagation();

		var productId =ev.dataTransfer.getData('Text');
		var element =document.getElementById(productId);

		done(element,productId);
		ev.stopPraopagation();
		return false;

	},false);


	function done(e,id){
		var price =e.getAttribute('price');
		var product =new Product(id,price);
		currentCart.addProduct(product);

		updateCurrentCart();


	}

	
	function createEmptyCart(){
		localStorage.clear();
		localStorage.setItem('cart',JSON.stringify(new cart()));
		currentCart =JSON.parse(localStorage.getItem('cart'));
	}

	

	function updateCurrentCart(){
		cartDrop.innerHTML ='';
		for (var i =0; i <currentCart.products.length ;i++){
			var inner =currentCart.products[i].productId +" " +currentCart.products[i].price;
			var ele =document.createElement('li');
			ele.innerHTML =inner;
			cartDrop.appendChild(ele);
		}
	}

	
}


/*function func (){
	var productImages =document.getElementsByClassName('recent-work-wrap'),

		cartDropZone =document.getElementById('shopping-cart'),

		cartDrop =document.querySelectorAll('#shopping-cart ul')[0],

		cart =function() {
			this.products =new Array();
		},

		Product =function (id,price){
			this.productId =id;
			this.price =price;
		},

		currentCart =null;
	currentCart =JSON.parse(localStorage.getItem('cart'));

	if (!currentCart){
		createEmptyCart();
	}

	updateCurrentCart();
	currentCart.addProduct =function (product){
		currentCart.products.push(product);
		localStorage.setItem('cart',JSON.stringify(currentCart));
	}


	for (var i =0 ;i <productImages.length ;i++){
		productImages[i].addEventListener('dragstart',function (ev){
			ev.dataTransfer.effectAlowed ='copy';
			ev.dataTransfer.setData('Text',this.getAttribute('id'));
		},false);
	}

	cartDropZone.addEventListener('dragover',function(ev){
		if (ev.preventDefault){
			ev.preventDefault();
		}

		ev.dataTransfer.dropEffect='copy';
		return false;
	},false);

	cartDropZone.addEventListener('drop',function(ev){
		if (ev.stopPropagation)
			ev.stopPropagation();

		var productId =ev.dataTransfer.getData('Text'),

			element =document.getElementById(productId);

		done(element,productId);

		ev.stopPropagation();
		return false;

	},false);

	function done(e,id){
		var price =e.getAttribute('price');
		var product =new Product(id,price);
		currentCart.addProduct(product);

		updateCurrentCart();




	}

	function createEmptyCart(){
		localStorage.clear();
		localStorage.setItem('cart',JSON.stringify(new cart()));
		currentCart =JSON.parse(localStorage.getItem('cart'));
	}

	function updateCurrentCart(){
		cartDrop.innerHTML ="";
		for (var i =0;i <currentCart.products.length ;i++){
			var ele =document.createElement('li');
			var inner =currentCart.products[i].productId +' ' +currentCart.products[i].price;
			
			ele.innerHTML =inner;
			cartDrop.appendChild(ele);
		}
	}
}*/



