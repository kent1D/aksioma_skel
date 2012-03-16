<?php
if (!defined("_ECRIRE_INC_VERSION")) return;

$GLOBALS['forcer_lang'] = true;

$debut_date_publication = 0;

$table_des_traitements['TITRE'][]= 'typo(supprimer_numero(%s))';
$table_des_traitements['SOUSTITRE'][]= 'typo(%s)';

$quota_cache = 100;

?>