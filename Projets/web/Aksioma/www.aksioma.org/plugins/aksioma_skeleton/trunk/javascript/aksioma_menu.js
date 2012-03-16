/**
 * Navigation javascript des menus
 * sur les éléments de la div #navigation ayant les class .menu et .rubriques
 * on applique un effet d'ouverture au survol
 */

(function($){
	$(document).ready(function(){

		/*
		 * Menu depliant de navigation
		 */
		$('#navigation .menu-liste li:not(.on) ul').hide();
		function menu_aksioma() {
			$('#navigation .menu-liste li a').not('.do').addClass('do').hover(function(){
				var me=$(this);
				var time=400;
				// un temps plus long pour refermer !
				if (me.parent().find('>ul').is(':visible')) {
					time=1000;
				}

				me.addClass('hop');
				setTimeout(function(){
					// verifier que la souris n'est pas deja partie !
					if (me.is('.hop')) {
						var parent = me.parent(); // parent = li
						// verifier que ce n'est pas une liste exposee
						if (!parent.is('.on')) {
							// fermer les ul
							var ul = parent.find('>ul');
							if (ul.is(':visible')) {
								ul.find('li:not(.ouverte) ul').hide();
								ul.slideUp('fast');
							// ou ouvrir le premier
							} else {
								// selon la config de documentations
								// il faut peut etre charger en ajax le contenu
								// de la navigation, uniquement pour les ul
								// de premier niveau.
								if (ul.size()) {
									ul.slideDown('fast');
								}
							}
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