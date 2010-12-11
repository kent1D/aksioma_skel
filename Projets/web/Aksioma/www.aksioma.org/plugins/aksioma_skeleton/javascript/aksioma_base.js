/**
 * Function javascript pour Aksioma
 */

var aksioma_hauteur_blocs = function(){
	$('#navigation, #extra, #contenu').equalHeights();
}

/**
 * Lancement au chargement de la page des fonctions
 */
jQuery(document).ready(function(){
	aksioma_hauteur_blocs();
	onAjaxLoad(aksioma_hauteur_blocs);
});