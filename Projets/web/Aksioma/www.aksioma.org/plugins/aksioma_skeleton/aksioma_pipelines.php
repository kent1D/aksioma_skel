<?php 

/**
 * Insertion dans le pipelin jquery_plugins
 * Sert à insérer des javascripts facilement dans le head
 * 
 * @param array $plugins
 * @return array $plugins
 */
function aksioma_jquery_plugins($plugins){
	$plugins[] = "javascript/jquery.equalheight.js";
	$plugins[] = "javascript/aksioma_base.js";
	$plugins[] = "javascript/aksioma_menu.js";

	return $plugins;
}

?>