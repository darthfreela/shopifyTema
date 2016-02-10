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

	//SCROLL MENU
	//Elemento que vai receber os eventos.
    var nav = $('.site-header');
 	var hide = false;
    //Ao rolar a página, a função será executada.
    $(window).scroll(function () {
        //Se o tamanho da parte rolada for maior que 136px (pixels) ->
        if ($(this).scrollTop() > 750) {
            nav.addClass("scrolled_menu"); //Aplica a classe scrolled_menu no elemento .menu
            if(hide == false){
            	$('.scrolled_menu').hide();
            	hide = true;
        	}
            $('.scrolled_menu').slideDown(500);
            //////////////////////////////////////////////////////////////////////////////////
            //=========================MUDANÇA DA COR DOS LINKS E IMAGENS================// //
            //////////////////////////////////////////////////////////////////////////////////
            //link do cart
            $('.linkscart ul>li>a').css('color', 'black');
            $('#cart>a>span>svg>path').css('fill', 'black' );
           	$('#AccessibleNav>li>a').css('color', 'black');
           	$('#svgsearch>svg').css('fill', 'black' );
           	$('#divSearch ul>li>a').css('color', 'black');

        } else {
        	$('.linkscart ul>li>a').css('color', 'white');
            $('#cart>a>span>svg>path').css('fill', 'white' );
           	$('#AccessibleNav>li>a').css('color', 'white');
           	$('#svgsearch>svg').css('fill', 'white' );
           	$('#divSearch ul>li>a').css('color', 'white');
            nav.removeClass("scrolled_menu"); //Remove a classe scrolled_menu no elemento .menu
            hide = false;
        }
    });

	//VERIFICAR QUAL PÁGINA É E ADICIONAR O HEADER
	// PEGANDO O NOME DO DOCUMENTO OU PÁGINA ATUAL
	documento = window.location.pathname;
 
	if(documento=="/") {
		$('.site-header').addClass('bgmenu');
		//adicionar o popup aqui
	}else{
		$('.site-header').removeClass('bgmenu');
		$('.linkscart ul>li>a').css('color', 'black');
        $('#cart>a>span>svg>path').css('fill', 'black' );
        $('#AccessibleNav>li>a').css('color', 'black');
        $('#svgsearch>svg').css('fill', 'black' );
        $('#divSearch ul>li>a').css('color', 'black');
	}
	
	//ESCUREÇER LINKS COM MOUSE MENU
	$('.bgmenu').mouseover(function(){
		$(this).css('background-color', 'white');
		$('.linkscart ul>li>a').css('color', 'black');
        $('#cart>a>span>svg>path').css('fill', 'black' );
        $('#AccessibleNav>li>a').css('color', 'black');
        $('#svgsearch>svg').css('fill', 'black' );
        $('#divSearch ul>li>a').css('color', 'black');

	});
	$('.bgmenu').mouseleave(function(){
		$(this).css('background-color', 'transparent');
		$('.linkscart ul>li>a').css('color', 'white');
        $('#cart>a>span>svg>path').css('fill', 'white' );
        $('#AccessibleNav>li>a').css('color', 'white');
        $('#svgsearch>svg').css('fill', 'white' );
        $('#divSearch ul>li>a').css('color', 'white');
		
	});
	
	
});