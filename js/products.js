var currency =document.getElementById('currency');

currency.onchange =function func(){
	var current =document.getElementById('current-currency'),

		text1 =document.getElementById('product1'),

		text2 =document.getElementById('product2'),

		text3 =document.getElementById('product3'),

		text4 =document.getElementById('product4'),

		text5 =document.getElementById('product5'),

		text6 =document.getElementById('product6'),

		text7 =document.getElementById('product7'),

		text8 =document.getElementById('product8'),

		text9 =document.getElementById('product9'),

		text10 =document.getElementById('product10'),

		text11 =document.getElementById('product11'),

		text12 =document.getElementById('product12'),

		text13 =document.getElementById('product13'),

		text14 =document.getElementById('product14'),

		text15 =document.getElementById('product15'),

		text16 =document.getElementById('product16'),

		x =currency.value;

	switch(x){
		case 'Euro':
		current.innerHTML='The prices in Euro currency';
		text1.innerHTML='100 €';
		text2.innerHTML='70 €';
		text3.innerHTML='85 €';
		text4.innerHTML='90 €';
		text5.innerHTML='70 €';
		text6.innerHTML='75 €';
		text7.innerHTML='120 €';
		text8.innerHTML='500 €';
		text9.innerHTML='50 €';
		text10.innerHTML='100 €';
		text11.innerHTML='55 €';
		text12.innerHTML='80 €';
		text13.innerHTML='250 €';
		text14.innerHTML='65 €';
		text15.innerHTML='45 €';
		text16.innerHTML='85 €';
		break;

		case 'Pound':
		current.innerHTML='The prices in Egyptian pound currency';
		text1.innerHTML='2000 L.E';
		text2.innerHTML='1400 L.E';
		text3.innerHTML='1700 L.E';
		text4.innerHTML='1800 L.E';
		text5.innerHTML='1400 L.E';
		text6.innerHTML='1500 L.E';
		text7.innerHTML='2400 L.E';
		text8.innerHTML='10000 L.E';
		text9.innerHTML='1000 L.E';
		text10.innerHTML='2000 L.E';
		text11.innerHTML='1100 L.E';
		text12.innerHTML='1600 L.E';
		text13.innerHTML='5000 L.E';
		text14.innerHTML='1300 L.E';
		text15.innerHTML='900 L.E';
		text16.innerHTML='1700 L.E';
		break;

		case 'Dollar':
		current.innerHTML='The prices in Dollar currency';
		text1.innerHTML='111 $';
		text2.innerHTML='77 $';
		text3.innerHTML='94.4 $';
		text4.innerHTML='100 $';
		text5.innerHTML='77.78 $';
		text6.innerHTML='83.3 $';
		text7.innerHTML='133.3 $';
		text8.innerHTML='555.56 $';
		text9.innerHTML='55.56 $';
		text10.innerHTML='111.11 $';
		text11.innerHTML='61.11 $';
		text12.innerHTML='88.89 $';
		text13.innerHTML='277.78 $';
		text14.innerHTML='72.222 $';
		text15.innerHTML='50 $';
		text16.innerHTML='94.4 $';
		break;

		case 'Riyal':
		current.innerHTML='The prices in Saudi Riyal currency';
		text1.innerHTML='419.28 riyal ';
		text2.innerHTML='293.5 riyal ';
		text3.innerHTML='356.39 riyal';
		text4.innerHTML='377.35 riyal';
		text5.innerHTML='293.5 riyal';
		text6.innerHTML='314.46 riyal';
		text7.innerHTML='503.14 riyal';
		text8.innerHTML='2096.43 riyal';
		text9.innerHTML='209.64 riyal';
		text10.innerHTML='419.28 riyal';
		text11.innerHTML='230.6 riyal';
		text12.innerHTML='335.42 riyal';
		text13.innerHTML='1048.24 riyal';
		text14.innerHTML='272.53 riyal';
		text15.innerHTML='188.67 riyal';
		text16.innerHTML='356.39 riyal';
		break;




	}


};