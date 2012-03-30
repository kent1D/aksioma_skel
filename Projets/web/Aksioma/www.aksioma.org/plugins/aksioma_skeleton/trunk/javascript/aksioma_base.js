$(function() {
	var carousel = function(){
		var j = 0;
		$('.documents_portfolio ul.liste').each(function(){
			j++;
			if($(this).parent().is('.caroufredsel_wrapper')){
				$(this).unwrap();
				//$('#prev'+j+',#next'+j).detach();
			}
			var text = '<a id="prev'+j+'" class="prev" href="#">&lt;</a>';
			text += '<a id="next'+j+'" class="next" href="#">&gt;</a>';
			$(this).after(text);
			var size = $(this).parent().innerWidth()-($('#prev'+j).outerWidth())-($('#next'+j).outerWidth());
			var paddings = (parseInt($(this).find('li').eq(0).css('padding-left'))+parseInt($(this).find('li').eq(0).css('padding-right')))*3;
			var borders = (parseInt($(this).find('li').eq(0).css('border-left-width'))+parseInt($(this).find('li').eq(0).css('border-right-width')))*3;
			$(this).find('li').width((size-paddings-borders)/3);
			var prev = $(this).parent().find('.prev');
			var next = $(this).parent().find('.next');
			$(this).find('li img.spip_logos').css({'width':'100%','height':'auto'});
			$(this).find('li').equalHeights();
			carousel_port = $(this).carouFredSel({
				auto:false,
				items: 3,
				width: size,
				prev: "#prev"+j,
				next: "#next"+j
			});
			var height = ($(this).find('li').eq(0).outerHeight());
			prev.css('top',(height/2)-(prev.height()/2));
			next.css('top',(height/2)-(next.height()/2));
		});
		var i = 0;
		$('.extra-right ul.liste').each(function(){
			i++;
			if($(this).parent().is('.caroufredsel_wrapper')){
				$(this).unwrap();
				$('#prev'+i+',#next'+i).detach();
			}
			var text = '<a id="prev'+i+'" class="prev" href="#">&lt;</a>';
			text += '<a id="next'+i+'" class="next" href="#">&gt;</a>';
			$(this).after(text);
			var size = $(this).parent().innerWidth()-($('#prev'+i).outerWidth())-($('#next'+i).outerWidth());
			var paddings = (parseInt($(this).find('li').eq(0).css('padding-left'))+parseInt($(this).find('li').eq(0).css('padding-right')))*3;
			var borders = (parseInt($(this).find('li').eq(0).css('border-left-width'))+parseInt($(this).find('li').eq(0).css('border-right-width')))*3;
			$(this).find('li').width((size-paddings-borders)/3);
			var prev = $(this).parent().find('.prev');
			var next = $(this).parent().find('.next');
			$(this).find('li img.spip_logos').css({'width':'100%','height':'auto'});
			$(this).find('li').equalHeights();
			$(this).carouFredSel({
				auto:false,
				items: 3,
				width:size,
				prev: "#prev"+i,
				next: "#next"+i
			});
			
			var height = ($(this).find('li').eq(0).outerHeight());
			prev.css('top',(height/2)-(prev.height()/2));
			next.css('top',(height/2)-(next.height()/2));
		});
		var k = 0;
		$('.rubrique_brochures #contenu ul.liste').each(function(){
			k++;
			if($(this).parent().is('.caroufredsel_wrapper')){
				$(this).unwrap();
				$('#prev'+k+',#next'+k).detach();
			}
			var text = '<a id="prev'+k+'" class="prev" href="#">&lt;</a>';
			text += '<a id="next'+k+'" class="next" href="#">&gt;</a>';
			$(this).after(text);
			$(this).find('li').height('auto');
			var size = $(this).parent().innerWidth()-($('#prev'+k).outerWidth())-($('#next'+k).outerWidth());
			var paddings = (parseInt($(this).find('li').eq(0).css('padding-left'))+parseInt($(this).find('li').eq(0).css('padding-right')))*5;
			var prev = $(this).parent().find('.prev');
			var next = $(this).parent().find('.next');
			$(this).find('li').width((size-paddings)/5);
			$(this).find('li').equalHeights();
			var height = ($(this).find('li').eq(0).outerHeight());
			prev.css('top',(height/2)-(prev.height()/2));
			next.css('top',(height/2)-(next.height()/2));
			carousel_port = $(this).carouFredSel({
				auto:false,
				width:size,
				prev: "#prev"+k,
				next: "#next"+k
			});
			$(this).find('li img.spip_logos').css({'width':'100%','height':'auto'});
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
	
	var search_placeholder = function(){
		if ($('#formulaire_recherche input.text').val() == ''){
			$('#formulaire_recherche input.text').val(aksioma_lang.search);
		}
		$('#formulaire_recherche input.text').focus(function() {
			if ($(this).val() == aksioma_lang.search)
				$(this).val('');
		});
	 
		$('#formulaire_recherche input.text').blur(function() {
			if($(this).val() == '')
				$(this).val(aksioma_lang.search);
	    });
	}
	
	var project_same_height = function(){
		$('.rubrique_projet_normal #navigation,.rubrique_projet_normal #contenu').height('auto').equalHeights();
	}
	$(document).ready(function() {
		$('a[rel="external"],a.spip_out').click(function(){
			$(this).attr('target','_blank');
		});
	});
	carousel();
	project_same_height();
	search_placeholder();
	onAjaxLoad(carousel);
	onAjaxLoad(project_same_height);
	$(window).resize(function(){
		project_same_height();
		carousel();
	});
});