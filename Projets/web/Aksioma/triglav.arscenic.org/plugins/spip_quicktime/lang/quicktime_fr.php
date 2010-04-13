<?php

// This is a SPIP language file  --  Ceci est un fichier langue de SPIP

$GLOBALS[$GLOBALS['idx_lang']] = array(
	'description_quicktime' => '<p>Configuration du plugin Quicktime</p><p>Ce plugin permet de g&eacute;rer simplement via un mod&egrave;le sp&eacute;cifique l\'insertion de m&eacute;dias embed pour Quicktime</p> ',
	'general' => 'G&eacute;n&eacute;ral',
	'spatial' => 'Spatial',
    'width' => 'Largeur : ',
	'desc_width' => 'WIDTH=size in pixels (indispensable)
	L\'attribut WIDTH d&eacute;termine la largeur du fichier en pixels. La largeur du film est indiqu&eacute;e en choisissant \'Lire les informations...\' dans le menu \'S&eacute;quence\' de Lecture QuickTime.
	Pas de valeur inf&eacute;rieure &agrave; 2',
    'height' => 'Hauteur : ',
	'desc_height' => '<p>HEIGHT=size in pixels (indispensable)
	L\'attribut HEIGHT indique la hauteur du fichier en pixels. Si la barre de commande est visible vous devrez ajouter 16 pixels &agrave; la hauteur. L\'attribut HEIGHT est indispensable &agrave; moins que l\'attribut HIDDEN soit utilis&eacute; . La hauteur du film est indiqu&eacute;e en choisissant \'Lire les informations...\' dans le menu \'S&eacute;quence\' de Lecture QuickTime. Si vous n\'utilisez pas l\'attribut SCALE et que vous attribuez une hauteur inf&eacute;rieure &agrave; la hauteur du film celui-ci sera cropp&eacute; &agrave; la hauteur indiqu&eacute;e. Si vous indiquez une hauteur sup&eacute;rieure le film sera centr&eacute;
	Note: Ne jamais sp&eacute;cifier une valeur plus petite que 2.
	Pas de valeur inf&eacute;rieure &agrave; 2',
    'fullscreen' => 'Plein &eacute;cran',
	'desc_fullscreen' => 'Plein &eacute;cran',
    'hidden' => 'Hidden',
	'desc_hidden' => 'HIDDEN (option).
	L\'attribut HIDDEN rend votre film invisible. Cette option est d&eacute;conseill&eacute;e pour les films QuickTime VR Objets ou Panoramas. L\'attribut HIDDEN est appropri&eacute; pour les films ne contenant que des pistes audio ou Midi.',
    'cache' => 'Cache',
	'desc_cache' => 'CACHE=value (option... QuickTime 3 ou plus).
	Si CACHE=TRUE, le Navigateur enregistre le film dans son CACHE.
	Si le film est pr&eacute;sent dans le cache du navigateur quand l\'utilisateur revient sur une page d&eacute;j&agrave; visit&eacute;e, le film est jou&eacute; ˆ partir du cache, il n\'est pas ret&eacute;l&eacute;charg&eacute;.
	CACHE peut prendre les valeurs TRUE ou FALSE, ou simplement CACHE.
	CACHE tout seul signifie TRUE.
    La valeur par d&eacute;faut est r&eacute;gl&eacute;e par l\'utilisateur dans \'R&eacute;glages du module externe.\'',
    'scale' => 'Scale',
	'desc_scale' => 'SCALE=value (option... QuickTime 3 ou plus)
	SCALE peut prendre les valeurs TOFIT, ASPECT ou une valeur num&eacute;rique. Par d&eacute;faut la valeur de SCALE est 1. Si la valeur est TOFIT, le film sera mis &agrave; l\'&eacute;chelle des param&egrave;tres sp&eacute;cifi&eacute;s par les attributs HEIGHT et WIDTH . Si la valeur est ASPECT, Le film sera mis &agrave; l\'&eacute;chelle mais conservera ses proportions originales. Si vous utilisez une valeur num&eacute;rique, le film sera mis &agrave; l\'&eacute;chelle en utilisant cette valeur (e.g. 1.5).
	Note: L\'utilisation de valeurs num&eacute;riques pour un fichier QTVR Panorama peut d&eacute;grader fortement les performances de votre film.',
    'scaletype' => 'Type',
    '05' => '0.5',
    '075' => '0.75',
    '095' => '0.95',
    '15' => '1.5',
    '175'=>'1.75',
	'bgcolor' => 'Couleur de fond : ',
	'desc_bgcolor' => 'BGCOLOR=hex value (option... QuickTime 3 ou plus)
	Cet attribut sp&eacute;cifie la couleur de fond pour la zone non utilis&eacute;e par le film.
    Si un film de 160x120 est affich&eacute; dans un espace de 200x120, la couleur de fond des 40 pixels non utilis&eacute;s est celle sp&eacute;cifi&eacute;e par l\'attribut BGCOLOR.',
	'controls' => 'Controles',
	'controller' => 'Affichage des controles (controller) : ',
	'desc_controller' => 'CONTROLLER=value (option... QuickTime 3 ou plus)
	L\'attribut CONTROLLER permet d\'afficher ou de masquer la barre de commande. CONTROLLER peut prendre les valeurs TRUE ou FALSE.
	Par d&eacute;faut, CONTROLLER est TRUE. Si CONTROLLER est FALSE, la barre de commande du film ne s\'affiche pas.
	Note: Pour les films QuickTime VR movies, image, et flash la valeur par d&eacute;faut est FALSE.',
	'autoplay' => 'Lecture automatique (autoplay) : ',
	'desc_autoplay' => 'AUTOPLAY=value (option... QuickTime 3 ou plus)
	AUTOPLAY peut prendre les valeurs TRUE ou FALSE.
	La valeur par d&eacute;faut est rŽgl&eacute;e par l\'utilisateur dans \'R&eacute;glages du module externe\' de \'Lecture QuickTime\'.
	Si la valeur est TRUE, L\'attribut AUTOPLAY force le film &agrave; jouer d&egrave;s que le Plug-In estime qu\'il est capable de jouer le film sans interruption.',
	'playeveryframe' => 'Jouer toutes les frames (playeveryframe) : ',
	'desc_playeveryframe' => 'PLAYEVERYFRAME=value (option... QuickTime 3 ou plus)
	PLAYEVERYFRAME peut &ecirc;tre TRUE ou FALSE. Par d&eacute;faut, PLAYEVERYFRAME est FALSE. Si PLAYEVERYFRAME est TRUE votre film jouera toutes ses frames, sa vitesse initiale ne sera peut &ecirc;tre pas conserv&eacute;e mais toutes vos frames seront jou&eacute;es. Cet attibut est particuli&egrave;rement utile pour de simples animations.
    Note: PLAYEVERYFRAME=TRUE ne joue aucune piste audio.',
	'kioskmode' => 'Ne pas autoriser l\'enregistrement de la vid&eacute;o (kioskmode) : ',
	'desc_kioskmode' => 'KIOSKMODE=value (option... QuickTime 4 ou plus)
	KIOSKMODE peut 	&ecirc;tre TRUE ou FALSE. Par d&eacute;faut, KIOSKMODE est FALSE. Quand KIOSKMODE est TRUE, le plug-in n\'autorise plus l\'enregistrement du film.',
	'dontflattenwhensaving' => 'Forcer l\'enregistrement sous sŽquence source (dontflattenwhensaving) : ',
	'desc_dontflattenwhensaving' => 'DONTFLATTENWHENSAVING (option... QuickTime 4 ou plus)
	DONTFLATTENWHENSAVING force la fonction enregistrer du Plug-ins \'Enregistrer sous s&eacute;quence QuickTime\' &agrave; fonctionner comme \'Enregistrer sous s&eacute;quence source \'.',
	'loop' => 'Lecture en boucle : ',
	'desc_loop' => 'LOOP=value (option... QuickTime 3 ou plus)
	LOOP peut prendre les valeurs TRUE, FALSE ou PALINDROME. Par d&eacute;faut, LOOP est FALSE. Si la valeur est TRUE votre film va boucler ind&eacute;finiment. Si vous utilisez PALINDROME votre film jouera en boucle en jouant alternativement en avant et en arri&egrave;re. D&eacute;conseill&eacute; pour les films QuickTime VR Objets et Panoramas.',
	'showlogo' => '',
	'desc_showlogo' => '',
	'volume' => 'Volume initial du player (volume) : ',
	'desc_volume' => 'VOLUME=value (option... QuickTime 3 ou plus)
	L\'attribut VOLUME d&eacute;termine le volume audio initial d\'un film. Seules des valeurs enti&egrave;res comprises entre 0 et 100 sont autoris&eacute;es.
	Par d&eacute;faut, VOLUME est 100.
	Une valeur de 0 ferme les pistes audio.',
    );
?>
