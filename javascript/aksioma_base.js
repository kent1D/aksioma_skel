$(function() {
	var cycle = ($('#conteneur .dsjcycle').size > 0),
		agenda = ($('.page_agenda').size() > 0),
		projet = ($('.rubrique_projet_normal').size > 0);
	var cycle_resize = function(){
		$('#conteneur').find('.dsjcycle').each(function(){
			var height = $(this).find('img:visible').eq(0).height();
			$(this).css({'height':height})
			
		});
	}
	var carousel = function(){
		var j = 0;
		$('.documents_portfolio').find('ul.liste').each(function(){
			j++;
			if($(this).parent().is('.caroufredsel_wrapper')){
				$(this).unwrap();
			}
			var text = '<a id="prev'+j+'" class="prev" href="#">&lt;</a>';
			text += '<a id="next'+j+'" class="next" href="#">&gt;</a>';
			$(this).after(text);
			var size = $(this).parent().innerWidth()-($('#prev'+j).outerWidth())-($('#next'+j).outerWidth()),
				li = $(this).find('li').eq(0);
			var paddings = (parseInt(li.css('padding-left'))+parseInt(li.css('padding-right')))*3;
			var borders = (parseInt(li.css('border-left-width'))+parseInt(li.css('border-right-width')))*3;
			$(this).find('li').width((size-paddings-borders)/3);
			var prev = $(this).parent().find('.prev'),
				next = $(this).parent().find('.next');
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
			if(prev.length > 0)
				prev.css('top',(height/2)-(prev.height()/2));
			if(next.length > 0)
				next.css('top',(height/2)-(next.height()/2));
		});
		var i = 0;
		$('.extra-right ul.liste').each(function(){
			i++;
			if($(this).parent().is('.caroufredsel_wrapper')){
				$(this).unwrap();
				$('#prev'+i+',#next'+i).detach();
			}
			$(this).find('li').css({'height':'auto'})
			var text = '<a id="prev'+i+'" class="prev" href="#">&lt;</a>';
			text += '<a id="next'+i+'" class="next" href="#">&gt;</a>';
			$(this).after(text);
			var size = $(this).parent().innerWidth()-($('#prev'+i).outerWidth())-($('#next'+i).outerWidth()),
				li = $(this).find('li').eq(0),
				paddings = (parseInt(li.css('padding-left'))+parseInt(li.css('padding-right')))*3,
				borders = (parseInt(li.css('border-left-width'))+parseInt(li.css('border-right-width')))*3;
			$(this).find('li').width((size-paddings-borders)/3);
			var prev = $(this).parent().find('.prev'),
				next = $(this).parent().find('.next');
			$(this).find('li').equalHeights();
			$(this).find('li img.spip_logos').css({'width':'100%','height':'auto'});
			$(this).carouFredSel({
				auto:false,
				items: 3,
				width:size,
				prev: "#prev"+i,
				next: "#next"+i
			});
			
			var height = li.outerHeight();
			if(prev.length > 0)
				prev.css('top',(height/2)-(prev.height()/2));
			if(next.length > 0)
				next.css('top',(height/2)-(next.height()/2));
		});
		var k = 0;
		$('.rubrique_brochures ul.liste').each(function(){
			k++;
			var nb_items = 5;
			if($(this).parent().is('.caroufredsel_wrapper')){
				$(this).unwrap();
				$('#prev'+k+',#next'+k).detach();
			}
			var text = '<a id="prev'+k+'" class="prev" href="#">&lt;</a>';
			text += '<a id="next'+k+'" class="next" href="#">&gt;</a>';
			$(this).after(text);
			$(this).find('li').height('auto');
			var size = $(this).parent().innerWidth()-($('#prev'+k).outerWidth())-($('#next'+k).outerWidth()),
				paddings = (parseInt($(this).find('li').eq(0).css('padding-left'))+parseInt($(this).find('li').eq(0).css('padding-right')))*nb_items,
				prev = $(this).parent().find('.prev'),
				next = $(this).parent().find('.next');
			if(((size-paddings)/nb_items) < 100){
				nb_items = 3;
				var paddings = (parseInt($(this).find('li').eq(0).css('padding-left'))+parseInt($(this).find('li').eq(0).css('padding-right')))*nb_items;
			}
			$(this).find('li').width((size-paddings)/nb_items).equalHeights();
			var height = $(this).find('li').eq(0).outerHeight(),
				arrow_height = (((height/2)-(prev.height()/2) > 250) ? 250 : ((height/2)-(prev.height()/2)));
			if(prev.length > 0)
				prev.css('top',arrow_height);
			if(next.length > 0)
				next.css('top',arrow_height);
			carousel_port = $(this).carouFredSel({
				auto:false,
				width:size,
				items:nb_items,
				prev: "#prev"+k,
				next: "#next"+k
			});
			$(this).find('li img.spip_logos').css({'width':'100%','height':'auto'});
		});
		var l = 0;
		if($('.page_rubrique  ul.liste_images li').size() > 0){
			$('.page_rubrique ul.liste_images').each(function(){
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
		var input_search = $('#formulaire_recherche').find('input.text');
		if (input_search.val() == ''){
			input_search.val(aksioma_lang.search);
		}
		input_search.focus(function() {
			if ($(this).val() == aksioma_lang.search)
				$(this).val('');
		});
	 
		input_search.blur(function() {
			if($(this).val() == '')
				$(this).val(aksioma_lang.search);
		});
	}
	
	var oembed_size = function(){
		$('.texte iframe,.entry iframe,.introduction iframe,.extra_4 iframe, .ps iframe,.extra-right iframe').each(function(){
			var height = $(this).height(),
				width = $(this).width(),
				parent_width= $(this).parent().width(),
				ratio = parent_width/width;
			$(this).width('100%').height(height*ratio);
		});
	}
	var project_same_height = function(){
		$('.rubrique_projet_normal #navigation,.rubrique_projet_normal #contenu').height('auto').equalHeights();
	}
	var agenda_colonne = function(){
		$('.page_agenda .extra-left ul').not($('.extra-left .on').parents('ul')).each(function(){
			$(this).hide().prev('h3').wrapInner('<a class="agenda_hidden" href="#" />').find('a').on('click',function(){
				var ul = $(this).parent().next('ul');
				if(ul.is(':visible')){
					ul.slideUp('slow');
				}else{
					ul.slideDown('slow');
				}
				return false;
			});
		});
	}
	$(document).ready(function() {
		$('body').on('click.external','a[rel="external"],a.spip_out',function(){
			$(this).attr('target','_blank');
		});
	});
	$(window).load(function(){
		if(projet)
			project_same_height();
		carousel();
		if(cycle)
			cycle_resize();
	})
	carousel();
	if(cycle)
		cycle_resize();
	if(agenda)
		agenda_colonne();
	search_placeholder();
	if($('iframe').size() > 0){
		oembed_size();
		onAjaxLoad(oembed_size);
	}
	onAjaxLoad(carousel);
	if(projet)
		onAjaxLoad(project_same_height);
	$(window).resize(function(){
		if($('iframe').size() > 0){
			oembed_size();
		}
		if(projet)
			project_same_height();
		carousel();
		if(cycle)
			cycle_resize();
	});
});