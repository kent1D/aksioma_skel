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
 * Insertion dans le pipeline insert_head
 * On insère les expression linguistiques en js
 *
 * @param $flux
 */
function aksioma_insert_head($flux){
	$flux .= '<script type="text/javascript" src="'.generer_url_public("aksioma_lang.js","lang=".$GLOBALS["spip_lang"]).'"></script>';
	return $flux;
}
/**
 * Pipeline styliser pour definir le fond d'un objet en fonction de sa composition
 *
 * @param array $flux
 * @return array
 */
function aksioma_styliser($flux){
	include_spip('compositions_fonctions');
	if ($flux['args']['fond'] == 'rubrique' AND $id_rubrique = $flux['args']['id_rubrique']) {
		$infos_rubriques = sql_fetsel('*','spip_rubriques','id_rubrique='.intval($id_rubrique));
		if(($infos_rubriques['id_parent'] == '27') && ($infos_rubriques['texte'] == '')){
			$rubrique_enfant = sql_getfetsel('id_rubrique','spip_rubriques','id_parent='.intval($id_rubrique),'titre','',1);
			if($rubrique_enfant){
				$url_redirect = generer_url_entite($rubrique_enfant,'rubrique');
				include_spip('inc/headers');
				redirige_par_entete(url_absolue($url_redirect),'','301');
			}
		}
	}
	if (compositions_styliser_auto()){
		$contexte = isset($flux['args']['contexte'])?$flux['args']['contexte']:$GLOBALS['contexte'];
		if (preg_match(',(^|/)(navigation|extra)/([^/]*)$,i',$flux['args']['fond'],$regs)
			AND $type = $regs[3]
			AND in_array($type,compositions_types())){
				$serveur = $flux['args']['connect'];
				$ext = $flux['args']['ext'];
				$table = table_objet($type);
				$table_sql = table_objet_sql($type);
				$_id_table = id_table_objet($type);
	
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

/**
 * Insertion dans le pipeline post_insertion (SPIP)
 * Si on est dans la rubrique des projets :
 * -* On assimile directement la bonne composition
 * -* On ajoute automatiquement un article
 * -* On met cet article comme article d'accueil
 * -* On met la redirection vers la rubrique sur l'article
 */
function aksioma_post_insertion($flux){
	$config = lire_config('aksioma',array());
	if(($flux['args']['table'] == 'spip_rubriques') && ($flux['data']['id_parent'] == $config['rubrique_projets'])){
		if($config['composition_projet']){
			include_spip('action/editer_article');
			include_spip('action/editer_rubrique');
			$id_article = article_inserer($flux['args']['id_objet']);
			$err = article_modifier($id_article,array('titre' => _request('titre',_T('item_nouvel_article')),'chapo'=>'=rub'.$flux['args']['id_objet']));
			if(trim(_request('texte')) == ''){
				$texte_rubrique = $config['texte_defaut_projet'];
			}else{
				$texte_rubrique = _request('texte');
			}
			revisions_rubriques($flux['args']['id_objet'], array('id_article_accueil' => $id_article,'composition' => $config['composition_projet'],'texte' => $texte_rubrique));
		}
	}
	return $flux;
}

/**
 * Insertion dans le pipeline formulaire_charger (SPIP)
 * Si on est dans la rubrique des projets :
 * On prérempli le texte avec celui de la configuration du squelette
 */
function aksioma_formulaire_charger($flux){
	$config = lire_config('aksioma',array());
	if(($flux['args']['form'] == 'editer_rubrique') 
		&& ($flux['args']['args'][0] == 'oui') 
		&& ($flux['args']['args'][1] == $config['rubrique_projets'])
		&& ($flux['data']['texte'] == '')){
			$flux['data']['texte'] = $config['texte_defaut_projet'];
	}
	return $flux;	
}