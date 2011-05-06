<?php
$forcer_lang = true;
$debut_date_publication = 0;
$table_des_traitements['TITRE'][]= 'typo(supprimer_numero(%s))';
$table_des_traitements['SOUSTITRE'][]= 'typo(%s)';
$quota_cache = 100;

function aksioma_mini_html($texte) {
	$texte = preg_replace(array(",[\n\r][\t\ ]*,",",\n+,"), "\n", $texte);
	return $texte;
}
?>