//meu jQuery
$(document).ready(function(){
	//faz as divs do meio aparecerem na tela dos produtos home
	//product1=========================================
	$('#product1').mouseover(function(){
		$('#divProduct1').css('display', 'inline');
		$('#divProduct1').mouseover(function(){
			$('#product1').css('background-color', 'rgba(107, 117, 123, 0.8)');
		});
		$('#divProduct1').mouseleave(function(){
			$('#product1').css('background-color', 'white');
		});
	});
	$('#product1').mouseleave(function(){
		$('#divProduct1').css('display', 'none');
	});
	//product2=========================================
	$('#product2').mouseover(function(){
		$('#divProduct2').css('display', 'inline');
		$('#divProduct2').mouseover(function(){
			$('#product2').css('background-color', 'rgba(107, 117, 123, 0.8)');
		});
		$('#divProduct2').mouseleave(function(){
			$('#product2').css('background-color', 'white');
		});
	});
	$('#product2').mouseleave(function(){
		$('#divProduct2').css('display', 'none');
	});
	//product3=========================================
	$('#product3').mouseover(function(){
		$('#divProduct3').css('display', 'inline');
		$('#divProduct3').mouseover(function(){
			$('#product3').css('background-color', 'rgba(107, 117, 123, 0.8)');
		});
		$('#divProduct3').mouseleave(function(){
			$('#product3').css('background-color', 'white');
		});
	});
	$('#product3').mouseleave(function(){
		$('#divProduct3').css('display', 'none');
	});
	//product4=========================================
	$('#product4').mouseover(function(){
		$('#divProduct4').css('display', 'inline');
		$('#divProduct4').mouseover(function(){
			$('#product4').css('background-color', 'rgba(107, 117, 123, 0.8)');
		});
		$('#divProduct4').mouseleave(function(){
			$('#product4').css('background-color', 'white');
		});
	});
	$('#product4').mouseleave(function(){
		$('#divProduct4').css('display', 'none');
	});
	//product1=========================================
	$('#product5').mouseover(function(){
		$('#divProduct5').css('display', 'inline');
		$('#divProduct5').mouseover(function(){
			$('#product5').css('background-color', 'rgba(107, 117, 123, 0.8)');
		});
		$('#divProduct5').mouseleave(function(){
			$('#product5').css('background-color', 'white');
		});
	});
	$('#product5').mouseleave(function(){
		$('#divProduct5').css('display', 'none');
	});
});