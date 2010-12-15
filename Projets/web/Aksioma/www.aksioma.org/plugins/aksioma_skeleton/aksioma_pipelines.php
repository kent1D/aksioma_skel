<?php 

/**
 * Insertion dans le pipelin jquery_plugins
 * Sert à insérer des javascripts facilement dans le head
 * 
 * @param array $plugins
 * @return array $plugins
 */
function aksioma_jquery_plugins($plugins){
	if(!test_espace_prive()){
		$plugins[] = "javascript/jquery.equalheight.js";
		$plugins[] = "javascript/aksioma_base.js";
		$plugins[] = "javascript/aksioma_menu.js";
		$plugins[] = "javascript/carouFredSel-2.5.5/jquery.carouFredSel-2.5.5.js";
	}

	return $plugins;
}

/**
 * Pipeline styliser pour definir le fond d'un objet en fonction de sa composition
 *
 * @param array $flux
 * @return array
 */
function aksioma_styliser($flux){
	include_spip('compositions_fonctions');
	if (compositions_styliser_auto()){
		$contexte = isset($flux['args']['contexte'])?$flux['args']['contexte']:$GLOBALS['contexte'];
		if (preg_match(',(^|/)(navigation|extra)/([^/]*)$,i',$flux['args']['fond'],$regs)
		  AND $type = $regs[3]
		  AND in_array($type,compositions_types())){
			$serveur = $flux['args']['connect'];
			spip_log('on compose','test');
			$ext = $flux['args']['ext'];
			$table = table_objet($type);
			$table_sql = table_objet_sql($type);
			$_id_table = id_table_objet($type);

			spip_log($regs,'test');
			$trouver_table = charger_fonction('trouver_table', 'base');
			$desc = $trouver_table($table,$serveur);
			if (
				isset($desc['field']['composition'])
				AND isset($contexte[$_id_table])
				AND $id = $contexte[$_id_table]
				AND $composition = sql_getfetsel('composition',$table_sql,"$_id_table=".intval($id))){

				if ($fond = aksioma_compositions_selectionner($composition, $type, '', $ext, true,'composition-vide', $regs[2])){
					$flux['data'] = substr($fond, 0, - strlen(".$ext"));
				}
			}
		}
	}
	return $flux;
}

function aksioma_compositions_selectionner($composition,$type,$defaut="",$ext="html",$fullpath = false, $vide="composition-vide",$rep=false){
	if ($type=='syndic') $type='site'; //grml
	$fond = ($rep ? $rep.'/' : compositions_chemin()) . $type;
	spip_log($fond,'test');
	// regarder si compositions/article-xxx est disponible
	if (strlen($composition)
		AND $f = find_in_path("$fond-$composition.$ext"))
		return $fullpath ? $f : $fond . "-$composition";
	else
		// sinon regarder si compositions/article-defaut est disponible
		if (strlen($defaut)
			AND $f = find_in_path("$fond-$defaut.$ext"))
			return $fullpath ? $f : $fond . "-$defaut";

	// se rabattre sur compositions/article si disponible
	if ($f = find_in_path("$fond.$ext"))
		return $fullpath ? $f : $fond;

	// sinon une composition vide pour ne pas generer d'erreur
	if ($vide AND $f = find_in_path("$vide.$ext"))
		return $fullpath ? $f : $vide;

	// rien mais ca fera une erreur dans le squelette si appele en filtre
	return '';
}
?>