$(function() {
	var carousel = function(){
		var i = 0;
		$('.extra-right').find('.prev,.next').detach();
		$('.extra-right ul.liste').each(function(){
			i++;
			if($(this).parent().is('.caroufredsel_wrapper')){
				$(this).unwrap();
			}
			var text = '<a id="prev'+i+'" class="prev" href="#">&lt;</a>';
			text += '<a id="next'+i+'" class="next" href="#">&gt;</a>';
			$(this).after(text);
			$(this).carouFredSel({
				auto:false,
				items: 3,
				width: 276,
				prev: "#prev"+i,
				next: "#next"+i
			});
		});
		var j = 0;
		$('.documents_portfolio ul.liste').each(function(){
			j++;
			if($(this).parent().is('.caroufredsel_wrapper')){
				$(this).unwrap();
			}
			var text = '<a id="prev'+j+'" class="prev" href="#">&lt;</a>';
			text += '<a id="next'+j+'" class="next" href="#">&gt;</a>';
			$(this).after(text);
			carousel_port = $(this).carouFredSel({
				auto:false,
				items: 3,
				width: 346,
				prev: "#prev"+j,
				next: "#next"+j
			});
		});
		var k = 0;
		$('.rubrique_brochures #contenu ul.liste').each(function(){
			k++;
			if($(this).parent().is('.caroufredsel_wrapper')){
				$(this).unwrap();
			}
			var text = '<a id="prev'+k+'" class="prev" href="#">&lt;</a>';
			text += '<a id="next'+k+'" class="next" href="#">&gt;</a>';
			$(this).after(text);
			carousel_port = $(this).carouFredSel({
				auto:false,
				items: 5,
				width: 940,
				height:400,
				prev: "#prev"+k,
				next: "#next"+k
			});
		});
	}
	carousel();
	onAjaxLoad(carousel);
	$('a.spip_out').attr('target','_blank');
});