$(function() {
	//$('ul#basic_config').carouFredSel();
	var i = 0;
	$('.extra-right ul.liste').each(function(){
		i++;
		var text = '<a id="prev'+i+'" class="prev" href="#">&lt;</a>';
		text += '<a id="next'+i+'" class="next" href="#">&gt;</a>';
		$(this).after(text)
		$(this).carouFredSel({
			items: 1,
			width: 276,
			prev: "#prev"+i,
			next: "#next"+i
		});
	});
	$('a.spip_out').attr('target','_blank');
});