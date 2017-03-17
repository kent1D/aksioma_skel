/**
 * Navigation javascript des menus
 * sur les éléments de la div #navigation ayant les class .menu et .rubriques
 * on applique un effet d'ouverture au survol
 */

(function($){
	$(document).ready(function(){
		$('#navigation').find('.menu-liste li:not(.on) ul').addClass('nav-hidden');
		function menu_aksioma() {
			$('#navigation').find('.menu-liste li a').not('.do').addClass('do').hover(function(){
				var me=$(this),
				time=400;
				// un temps plus long pour refermer !
				if (me.parent().find('>ul').is(':visible') && me.parent().find('>ul').height() > 0)
					time=1000;

				me.addClass('hop');
				setTimeout(function(){
					// verifier que la souris n'est pas deja partie !
					if (me.is('.hop')) {
						var parent = me.parent(); // parent = li
						// verifier que ce n'est pas une liste exposee
						if (!parent.is('.on')) {
							// fermer les ul
							var ul = parent.find('>ul');
							if (ul.is(':visible') && ul.height() > 0) {
								ul.find('li:not(.ouverte) ul').addClass('nav-hidden');
								ul.addClass('nav-hidden');
							// ou ouvrir le premier
							} else if (ul.size())
									ul.removeClass('nav-hidden');
							else
								console.log('pas de size?'+ul.size());
						}
					}
				}, time);
			},function(){
				$(this).removeClass('hop');
			});
		}
		menu_aksioma();
		onAjaxLoad(menu_aksioma);
	});
})(jQuery);