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
			$(this).find('li').equalHeights();
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
			$(this).find('li').equalHeights();
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
			$(this).find('li').equalHeights();
			carousel_port = $(this).carouFredSel({
				auto:false,
				items: 5,
				width: 940,
				prev: "#prev"+k,
				next: "#next"+k
			});
		});
		var l = 0;
		if($('.page_rubrique #contenu ul.liste_images li').size() > 0){
			$('.page_rubrique #contenu ul.liste_images').each(function(){
				l++;
				if($(this).parent().is('.caroufredsel_wrapper')){
					$(this).unwrap();
				}
				var text = '<a id="prev'+l+'" class="prev" href="#">&lt;</a>';
				text += '<a id="next'+l+'" class="next" href="#">&gt;</a>';
				$(this).after(text);
				$(this).find('li').equalHeights();
				carousel_port = $(this).carouFredSel({
					auto:false,
					items: 1,
					width: 468,
					prev: "#prev"+l,
					next: "#next"+l
				});
			});
		}
	}
	var project_same_height = function(){
		$('.rubrique_projet_normal #navigation,.rubrique_projet_normal #contenu').equalHeights();
	}
	$(document).ready(function() {
		$('a[rel="external"],a.spip_out').click(function(){
			$(this).attr('target','_blank');
		});
	});
	carousel();
	project_same_height();
	onAjaxLoad(carousel);
	onAjaxLoad(project_same_height);
});