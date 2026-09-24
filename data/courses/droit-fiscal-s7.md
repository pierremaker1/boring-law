# Droit fiscal — banque de questions QCM

**188 questions**, en français, 4 propositions, une seule correcte.
Construite à partir de ton dossier `S7/Droit fiscal` : le CM de Sibylle (la référence), les fiches d'examen, le corrigé du partiel de TD et trois prises de notes de recoupement.

Elle n'est pas pensée pour un QCM. **L'examen est un oral : trois questions de cours tirées au sort.** Chaque QCM est donc une brique d'une réponse d'oral — il est rattaché à l'une des 50 questions de cours (champ `oral`), et son explication commence par « À l'oral : » et te donne ce qu'il faut réciter, articles et chiffres inclus.
Le prof tient aux articles et aux chiffres : c'est le fil directeur de toute la banque.


## Principe de vérité

**La banque est à jour du droit en vigueur.** Chaque article, seuil, taux, plafond, délai, date et décision a été confronté à Légifrance, au BOFiP et aux sources officielles, puis contre-vérifié par un agent chargé de le réfuter. Quand ton cours dit autre chose, la question suit le droit, et un champ `flag` te dit ce que le cours affirmait et pourquoi ce n'est plus — ou pas — exact : tu ne seras pas pris au dépourvu si l'examinateur récite l'ancienne version.

Quand le cours est seulement plus court ou plus simple que le texte, sans rien dire de faux, on ne corrige rien : une simplification pédagogique exacte n'est pas une erreur. En cas de divergence entre prises de notes sans enjeu de droit, le CM de Sibylle l'emporte, et le champ `disputed` le signale.

Il y a **110 questions flaggées** et **44 questions avec un champ `disputed`**. Lis le tableau ci-dessous une fois : ce sont exactement les points où ton cours et le droit en vigueur ne disent pas la même chose — et ceux où tu réciterais un chiffre sans savoir de quelle année il est.

| id | Ce que disait ton cours → ce qui est exact aujourd'hui |
|---|---|
| `int-004` | Chiffres : le cours donne 17 millions de ménages imposables sur 40 millions et l'IFI à 2,3 Md€ pour 2023 → la DGFiP compte des foyers fiscaux, 41,5 millions dont 19,6 millions imposables pour les revenus 2024, et l'IFI a rapporté 1,9 Md€ au titre de 2023. |
| `int-007` | Abus de droit : le cours dit que le Conseil constitutionnel a refusé le but « essentiellement » fiscal → le terme censuré (déc. n° 2013-685 DC du 29 décembre 2013) était « principal », admis depuis 2018 à l'art. L. 64 A LPF. |
| `int-008` | Dénonciation obligatoire : le cours ne retient que le seuil de 100 000 € et vise le Parquet national financier → l'art. L. 228 I LPF exige en plus une majoration de 100, 80 ou 40 %, vise le procureur de la République et ne pose aucune présomption pénale. |
| `int-010` | Sources : le cours range les impôts locaux du côté du règlement → l'art. 34 de la Constitution les réserve à la loi, les collectivités ne fixant les taux que sur habilitation législative (art. 72-2, al. 2). |
| `int-017` | Rescrit : le cours parle d'un « rescrit 4P » → les 4 P sont la méthode d'appréciation de la lucrativité, la procédure s'appelant le rescrit « lucrativité » (art. L. 80 B, 1° LPF, réponse en trois mois). |
| `int-018` | Sources internationales : le cours compte environ 196 États et plus de 140 conventions → 193 États membres de l'ONU et 124 conventions en vigueur ; et l'art. 6 § 1 CEDH est écarté du contentieux fiscal depuis Ferrazzini (2001). |
| `irc-001` | Territoire : le cours inclut les COM « sauf celles à régime fiscal autonome » → aucune COM n'en fait partie, le territoire fiscal se limitant à la métropole, aux îles du littoral, à la Corse et aux cinq DOM. |
| `irc-002` | Domicile : le cours dit que le foyer a remplacé le séjour principal et hiérarchise les critères → l'art. 4 B, 1-a vise toujours les deux, Larcher rendant le séjour subsidiaire, et les trois critères sont alternatifs. |
| `irc-004` | Dirigeants : le cours vise « n'importe quelle forme sociale » → l'art. 4 B énumère limitativement les dirigeants exécutifs ; le seuil de 250 M€ est exact, mais la présomption cède devant une convention depuis le 16 février 2025. |
| `irc-005` | Taux minimum des non-résidents : le cours donne 26 070 € et l'art. 164 B → 29 579 € pour les revenus 2025, à l'art. 197 A, et c'est un taux minimum, jamais un taux forfaitaire. |
| `irc-006` | Sociétés de personnes : le corrigé du TD fait de la société le redevable → l'art. 8 CGI soumet personnellement les associés, la société translucide n'étant pas elle-même redevable de l'IR. |
| `irc-009` | Impositions distinctes : le cours en fait une faculté et y ajoute l'absence et la disparition inquiétante → l'art. 6, 4 les impose de plein droit dans trois cas seulement, l'abandon du domicile supposant en outre des revenus distincts. |
| `irc-010` | Naissance en cours d'année : le cours parle d'une « tolérance fiscale » → c'est le second alinéa de l'art. 196 bis CGI, un texte de loi, non une position de l'administration. |
| `pat-001` | Logement dont le propriétaire se réserve la jouissance : la fiche écrit « art. 15-1 » → le I de l'art. 15 est abrogé depuis 1983, la règle est au II de l'art. 15. |
| `pat-002` | Location meublée : le CM la fait remonter à une jurisprudence de 1915 → le fondement est le 5° bis du I de l'art. 35 CGI, créé par la LFR du 29 décembre 2016, qui a basculé la location occasionnelle en BIC. |
| `pat-005` | Micro-foncier : le CM en fait une option irrévocable trois ans → il s'applique de plein droit sous 15 000 €, c'est l'option pour le réel qui engage trois ans (art. 32, 4). |
| `pat-006` | Déficit foncier : la fiche liquidation réserve l'imputation aux intérêts d'emprunt et borne le plafond majoré à 2025 → l'art. 156, I-3° les exclut au contraire, et les 21 400 € courent jusqu'au 31 décembre 2027 (LF 2026, art. 47). |
| `pat-009` | Flat tax : le cours retient 30 % (12,8 + 17,2) → 31,4 % depuis que la LFSS 2026 a porté la CSG du capital à 10,6 %, les 17,2 % ne subsistant que pour la liste limitative du IV de l'art. L. 136-8 CSS. |
| `pat-011` | Livret A et livret jeune : le CM rattache l'exonération à l'art. 125 A → elle figure à l'art. 157 ; et aucun frais n'est déductible sous le PFU, seulement sur option pour le barème. |
| `pat-012` | PFONL : le cours décrit une retenue unique de 30 % par la société distributrice → 12,8 % d'acompte (art. 117 quater) retenus par l'établissement payeur, plus 18,6 % de prélèvements sociaux, soit 31,4 %. |
| `pat-013` | Dividendes du gérant majoritaire : la fiche met le seuil de 10 % sur le compte de l'art. 62 CGI → il est de source sociale, art. L. 136-3, II, 2° du code de la sécurité sociale. |
| `pat-014` | Loyer anormalement bas : le CM exige de prouver l'absence d'intention de tromper et fait substituer le loyer de marché → il faut une justification objective, et l'administration majore le revenu déclaré du montant de la libéralité. |
| `sal-001` | Assimilés salariés : le cours y range les agents d'assurances → leurs commissions sont par nature des BNC, imposées comme des salaires sur demande (art. 93, 1 ter) ; même réserve pour les auteurs (art. 93, 1 quater). |
| `sal-003` | Indemnités de licenciement : le CM annonce une exonération totale → l'art. 80 duodecies pose l'imposition de principe, l'exonération totale étant réservée à deux cas, et les limites calculées sur la rémunération sont bornées à six PASS. |
| `sal-004` | Dirigeants : le CM ouvre le chapitre par « art. 62 CGI » → l'art. 62 ne vise qu'une liste fermée, le président de SAS, le directeur général de SA et le gérant minoritaire relevant des traitements et salaires de droit commun. |
| `sal-005` | Déduction forfaitaire de 10 % : 504 / 14 426 € dans la fiche (revenus 2024), 12 829 € au CM (revenus 2021) → 509 / 14 555 € pour les revenus 2025, limites appréciées par membre du foyer. |
| `sal-008` | Abattement des pensions : la fiche donne 450 / 4 399 €, « 30 % à partir de 69 ans » et l'art. 158 bis → 454 / 4 439 € pour les revenus 2025, 30 % à partir de 70 ans, et le fondement est l'art. 158, 5-a. |
| `sal-010` | Frais réels : la fiche retient 606,36 € de forfait télétravail annuel et 5,35 € le repas au foyer → 626,40 € et 5,45 € pour les revenus 2025 ; avec une cantine, seul le forfait sans justificatif est perdu. |
| `sal-011` | Stages : la fiche range « stage / alternance » sous l'art. 81 bis → le texte ne vise que les apprentis et la gratification de stage, le contrat de professionnalisation n'étant pas exonéré ; les 21 622 / 5 405 € sont exacts pour 2025. |
| `bpr-004` | Actes de commerce en BNC : le CM dit que « ça n'a pas d'impact sur le régime fiscal » → c'est le 2 du I de l'art. 155 CGI, depuis les exercices ouverts en 2012, qui maintient le libéral en BNC. |
| `bpr-006` | Fin de la théorie du bilan : le cours dit 5 % puis 10 % des recettes totales → l'art. 155, II-3 retient 5 % des produits de l'exercice hors plus-values, et 10 % seulement si le seuil de 5 % était respecté l'exercice précédent. |
| `bpr-010` | Annualité : le corrigé du TD cite « les art. 12 et 13 » → l'annualité est à l'art. 12, l'art. 13 définissant le revenu net, la dérogation BIC étant aux art. 36 et 37. |
| `bpr-011` | Art. 38, 1 : le corrigé du TD résume par « opérations directement liées ou accessoires » → le texte vise les résultats d'ensemble « y compris notamment les cessions d'éléments quelconques de l'actif », ce qui y fait entrer les plus-values. |
| `bpr-014` | Actif immobilisé : le corrigé du TD fait renvoyer l'art. 38 quater ann. III à l'art. 212-1 PCG → cet article ne nomme aucun texte, et la définition est à l'art. 211-1, le 212-1 ne posant que les conditions de comptabilisation. |
| `bpr-015` | Les 500 € HT : le cours en fait le critère qui distingue la charge de l'immobilisation → c'est une tolérance administrative limitée au petit matériel, le critère restant la définition comptable de l'actif. |
| `bpr-019` | BNC sans option : le CM dit qu'on ne peut « ni amortir ni provisionner » → les amortissements sont déductibles de plein droit (art. 93, 1, 2°), seules les provisions étant exclues, hors créances douteuses. |
| `bpr-020` | Comptabilité d'engagement : le CM raisonne sur la créance exigible → le critère fiscal est la créance acquise, indépendante de l'exigibilité (art. 38, 2 bis CGI). |
| `bpr-021` | Produits exceptionnels : le cours y met subventions, indemnités, dégrèvements et gains de change → la rubrique a été resserrée par l'art. 513-5 PCG pour les exercices ouverts depuis 2025, sans changer leur caractère imposable. |
| `bpr-022` | Plus-value de sinistre : le CM la range sous l'art. 42 septies → l'étalement est à l'art. 39 quaterdecies, 1 ter, avec un différé de deux ans pour le long terme (art. 39 quindecies, I-1). |
| `bpr-023` | Art. 42 septies : le cours en fait l'étalement des subventions en général → il ne couvre, et sur option seulement, que les subventions d'équipement finançant une immobilisation déterminée. |
| `bch-001` | Exclusions légales : le CM range les sanctions sous l'art. 39, 4 → 39-2 les sanctions, 39-2 bis la corruption d'agents publics étrangers, 39-4 les dépenses somptuaires. |
| `bch-003` | Même erreur d'article, et le corrigé du TD y ajoute l'art. 240 CGI → cet article n'exclut rien, c'est une obligation déclarative. |
| `bch-004` | Pots-de-vin : le cours dit que la jurisprudence d'amoralisme « a duré 35 ans » → retiens trois dates, 1983 l'arrêt, 1997 la loi qui crée l'art. 39, 2 bis, 2000 son application. |
| `bch-005` | Cadeaux : le CM écrit « art. 28-0 annexe IV » → le numéro exact est l'art. 28-00 A ; les 73 € TTC sont bons, et les 500 € HT sont une tolérance, non un plancher. |
| `bch-006` | Même erreur de numérotation → art. 28-00 A de l'annexe IV, 73 € TTC par objet, par an et par bénéficiaire depuis l'arrêté du 9 juin 2021, toujours applicables en 2026. |
| `bch-007` | Les 500 € HT présentés comme une condition tirée de l'art. 39 → la loi ne contient aucun seuil, c'est une tolérance qui autorise sans l'imposer la passation directe en charges. |
| `bch-010` | Amortissement : le cours attribue à l'art. 214-13 PCG la « dépréciation irréversible » → le texte en vigueur dit « répartition systématique du montant amortissable en fonction de son utilisation ». |
| `bch-012` | Fonds de commerce : le cours le dit non amortissable → c'est une présomption (art. 214-3 PCG), et l'art. 39, 1, 2° admet la déduction pour les fonds acquis jusqu'au 31 décembre 2029, borne prorogée par la LF 2026. |
| `bch-013` | Amortissement différé : le corrigé du TD attache un « délai de 3 ans » à l'art. R. 196-1 LPF → cet article donne le 31 décembre de la deuxième année, les trois ans étant le délai de reprise de l'art. L. 169. |
| `bch-014` | Véhicules de tourisme : le cours retient 200 g/km et 10 000 / 20 000 € → quatre tranches de 9 900 à 30 000 € depuis 2021, et le critère légal est la catégorie M1/N1, non le nombre de places. |
| `bch-015` | Provision pour licenciement : le corrigé du TD la refuse parce que l'indemnité ne serait pas déductible → l'indemnité est déductible, seule la provision est exclue par l'art. 39, 1, 5°. |
| `bch-017` | Même écart : l'art. 39, 1, 5°, al. 3 ne vise que la provision, l'indemnité de licenciement économique restant une charge déductible de l'exercice où elle est engagée. |
| `bpv-002` | Donation : le CM l'exclut des plus-values professionnelles → c'est une cession au sens de l'art. 38, 1, l'art. 41 se bornant à reporter l'imposition sur option des bénéficiaires. |
| `bpv-003` | Étalement du sinistre : le cours cite l'art. 42 septies → c'est l'art. 39 quaterdecies, 1 ter ; et l'art. 151 sexies joue dans les deux sens, pas seulement du professionnel vers le privé. |
| `bpv-006` | Plus-value nette à long terme : le cours retient 30 % → 31,4 % depuis l'imposition des revenus 2025, la CSG du patrimoine étant passée à 10,6 % (LFSS 2026). |
| `bpv-009` | Exonération partielle : le corrigé du TD écrit (recettes − 90 000) / 36 000 → la formule légale est (126 000 − recettes) / 36 000, et l'agricole va de 350 000 à 450 000 €, jamais 500 000 €. |
| `bpv-011` | Art. 238 quindecies : le CM apprécie le seuil immeubles compris → le V écarte l'immobilier du seuil comme de l'exonération ; seuils portés à 700 000 / 1 200 000 € pour un jeune agriculteur aidé. |
| `bpv-012` | Contrôle du cessionnaire : le corrigé du TD dit « moins de 50 % » → le texte dit « pas plus de 50 % », donc 50 % pile reste admis, la situation étant vérifiée pendant trois ans. |
| `bpv-014` | Art. 151 septies B : le CM dit que l'abattement ne s'étend pas aux prélèvements sociaux → il ampute la plus-value elle-même, donc les deux ; seul l'art. 151 septies A laisse subsister la CSG. |
| `bpv-016` | Art. 151 septies : une fiche et le CM Lou le limitent à l'impôt sur le revenu → l'exonération vaut aussi pour les prélèvements sociaux ; seul l'art. 151 septies A fait exception. |
| `brg-001` | Micro-BIC : le cours annonce 188 700 / 77 700 € (2023-2025) → 203 100 / 83 600 € depuis le 1er janvier 2026, pour toute la période 2026-2028. |
| `brg-002` | Abattements du micro-BIC : le cours n'en connaît que deux → un troisième, 30 %, existe depuis la loi du 19 novembre 2024 pour les meublés de tourisme non classés, qui ont un seuil propre de 15 000 €. |
| `brg-003` | Réel simplifié : 840 000 / 254 000 € au CM, 818 000 / 247 000 € au TD → 945 000 / 286 000 € pour 2026 ; le TD a raison sur le texte, c'est l'art. L. 162-4 CIBS. |
| `brg-005` | Mêmes seuils périmés → 203 100 / 83 600 € au micro et 945 000 / 286 000 € au réel simplifié ; la différence entre réel simplifié et réel normal reste déclarative, non fiscale. |
| `brg-009` | Le cours parle de « suramortissement » des véhicules de tourisme → c'est au contraire une faveur (art. 39 decies) ; ce qui se réintègre, c'est la fraction excédant 9 900, 18 300, 20 300 ou 30 000 €. |
| `brg-012` | Charges et offices : le cours y range pharmaciens, médecins, notaires et architectes → seuls les officiers publics et ministériels y sont, le pharmacien d'officine étant commerçant. |
| `brg-013` | BNC : le cours dit qu'on ne peut ni amortir ni provisionner sans option → amortissements de plein droit (art. 93, 1, 2°), provisions exclues hors créances douteuses chez l'optant. |
| `brg-014` | Micro-BNC : le cours annonce 177 700 € → coquille pour 77 700 €, devenus 83 600 € depuis le 1er janvier 2026 ; abattement de 34 %, jamais moins de 305 €. |
| `brg-016` | Théorie de l'accessoire : le cours l'illustre par le pharmacien qui vend des prothèses → le pharmacien d'officine est en BIC, le bon exemple est le chirurgien-dentiste vendant des prothèses hors traitement. |
| `liq-002` | Déficit foncier : les fiches se contredisent sur les intérêts d'emprunt → l'art. 156, I-3° les exclut des 10 700 € ; le plafond majoré court jusqu'au 31 décembre 2027, et CSG et épargne retraite ne sont pas à l'art. 156 II. |
| `liq-003` | Charges du revenu global : le cours les range toutes sous l'art. 156 II → CSG à l'art. 154 quinquies II, épargne retraite à l'art. 163 quatervicies, abattement des plus de 65 ans à l'art. 157 bis. |
| `liq-004` | Pensions : le cours retient 6 368 € et 3 786 € → 6 855 € et 4 075 € pour les revenus 2025, le forfait ascendant supposant l'accueil sous son toit ; une décision de justice ne lève pas le plafond pour un enfant majeur. |
| `liq-005` | Quotient familial : le cours parle d'une « carte d'invalidité à plus de 40 % » et d'un veuvage limité à l'année du décès → 40 % vise les pensions d'invalidité, la carte suppose 80 %, et le veuf avec enfants garde 2 parts. |
| `liq-006` | Barème : le cours donne les seuils des revenus 2022 → 11 600 / 29 579 / 84 577 / 181 917 € pour les revenus 2025 (LF 2026), les cinq taux étant inchangés. |
| `liq-012` | Même écart que `liq-005` : la carte mobilité inclusion mention invalidité suppose 80 % d'incapacité, et le veuf ayant des enfants à charge conserve les 2 parts du couple. |
| `liq-014` | Frais de garde : le cours dit « enfants de moins de 6 ans l'année d'imposition » → l'âge s'apprécie au 1er janvier, et c'est le BOFiP qui le dit, non le CGI. |
| `liq-013` | Salarié à domicile : le cours passe à 15 000 € « avec deux enfants ou plus » → majoration de 1 500 € par personne dans la limite de 15 000 € ; et les dons Coluche sont à 2 000 € depuis le 14 octobre 2025. |
| `liq-010` | PFONL : le CM parle de 30 % retenus par la société distributrice → 12,8 % d'acompte et 18,6 % de prélèvements sociaux, soit 31,4 % pour les dividendes versés depuis le 1er janvier 2026. |
| `tvc-002` | Arrêt SAFE : le CM le date du 8 février 1988 → il est du 8 février 1990, ce sont les fiches qui ont raison. |
| `tvc-003` | Corsica Ferries : le CM écrit « c/ France » → c'est le nom de la société (CE, 24 avril 2019, n° 418912), rendu le même jour que les décisions Xerox. |
| `tvc-005` | Assujettis : le cours exclut « les salariés et les sportifs professionnels » → l'art. 256 A ne vise que la subordination et les travailleurs à domicile, le sportif indépendant étant assujetti comme un autre. |
| `tvc-006` | Onérosité : les fiches citent l'art. 1407 du code civil → c'est l'art. 1107, l'art. 1407 relevant des régimes matrimoniaux. |
| `tvc-007` | Pas-de-porte : le corrigé du TD se contredit dans le même paragraphe → l'élément est immobilisé et, en principe, non amortissable (CE Section, 1er octobre 1999, n° 177809). |
| `tvc-008` | Arrêt INZO : 9 février 1996 au CM, 9 février 1994 aux fiches → il est du 29 février 1996 ; et l'arrêt du 4 octobre 1995 ne juge que la vente d'un bien privé, la holding relevant de Polysar et Wellcome Trust. |
| `tvc-009` | Art. 257 : le cours y range acquisitions intracommunautaires, importations et agriculture → ce sont les art. 256 bis, 291 et 298 bis ; et l'art. 257 bis est une dispense, non une exonération. |
| `tvc-011` | Exonération médicale : le cours retient le remboursement par la sécurité sociale → le critère est la finalité thérapeutique de l'acte, le remboursement n'étant qu'un indice. |
| `tvc-012` | Franchise en base : les fiches annoncent le seuil unique de 25 000 € → cette réforme a été définitivement abandonnée (loi du 3 novembre 2025), les seuils restant 85 000 / 37 500 €. |
| `tvc-013` | Option de l'art. 260 : le cours dit « irrévocable 5 ans » → aucune durée dans la loi, la dénonciation étant impossible avant la neuvième année civile (art. 194 ann. II). |
| `tvc-014` | Para-hôtellerie : le cours parle de « location de tourisme » sans découper le 4° → le b vise le secteur hôtelier (trente nuitées au plus ET 3 des 4 prestations), le b bis les meublés résidentiels (3 prestations, sans condition de durée). |
| `tvc-016` | Art. 257 bis : le cours le classe parmi les exonérations → c'est une dispense de taxation, qui fait du bénéficiaire le continuateur du cédant. |
| `tvc-018` | Même écart sur les « 5 ans » de l'option de l'art. 260 → neuvième année civile ; la location à usage d'habitation, elle, reste exonérée sans option possible. |
| `tvt-003` | Ventes à distance : le cours apprécie les 10 000 € sur la seule année N-1 et cite l'art. 258 A → le seuil est à l'art. 259 D et s'apprécie en N et N-1 ; les 35 000 € des fiches sont abrogés depuis 2021. |
| `tvt-010` | Art. 259 C : les fiches retiennent le seul preneur établi en France → le texte vise n'importe quel État membre et exige en outre l'utilisation ou l'exploitation effectives en France. |
| `tvt-012` | Art. 98 C de l'annexe III : les fiches y renvoient pour les trois catégories de l'art. 259 D → il n'illustre que les services électroniques du 12° de l'art. 259 B. |
| `tve-001` | Assiette : le cours cite le seul art. 267 → la base est au a du 1 de l'art. 266, le 267, II n'excluant que les réductions de prix et les débours. |
| `tve-002` | Comité de propagande de la banane : le cours dit la présomption irréfragable → elle est simple et tombe devant une stipulation expresse (CE, 29 juin 2021, n° 442506, SOMUPI). |
| `tve-009` | Facturation électronique : le cours l'annonce au 1er janvier 2023 puis sans cesse reportée → elle est en vigueur depuis le 1er septembre 2026, l'émission des PME suivant au 1er septembre 2027. |
| `tve-011` | TVA sur la marge : le cours y range les terrains à bâtir sans condition → l'art. 268 ne l'admet que si l'acquisition par le cédant n'a pas ouvert droit à déduction. |
| `tve-003` | Art. 269 : le cours numérote en chiffres romains et met les prestations au « a bis » → c'est « art. 269, 1, a » pour le fait générateur et « 2, a » ou « 2, c » pour l'exigibilité. |
| `tve-004` | Option pour les débits : le cours ne cite que l'art. 77 de l'annexe III, ce qui est exact mais partiel → l'option elle-même est ouverte par l'art. 269, 2, c du CGI. |
| `tve-006` | Taux : le cours met abonnements de gaz et d'électricité et travaux à 5,5 % et la culture en bloc à 10 % → 20 % pour les abonnements depuis le 1er août 2025, 10 % pour les travaux, la culture se partageant entre 5,5 et 10 % ; et l'art. 281 quater vise 140 représentations, non 140 places. |
| `tve-007` | Chocolat : le cours pose un seuil de 75 % de cacao → le CGI n'en connaît aucun ; et le rapport Matić a été adopté le 24 juin 2021, les protections hygiéniques étant à 5,5 %, non exonérées. |
| `tvd-003` | Midland Bank : les fiches écrivent « CJUE 8/06/2000 » → un arrêt de 2000 se cite CJCE, la juridiction ne portant son nom actuel que depuis le 1er décembre 2009. |
| `tvd-005` | Cadeaux : le cours écrit « art. 28-0 » et les fiches « 28-00 » → la numérotation exacte est l'art. 28-00 A de l'annexe IV, et les 73 € sont bien TTC. |
| `tvd-006` | Biens détournés : le cours dit « à 90 % au moins » → le texte dit « à plus de 90 % », si bien qu'à exactement 90 % la déduction reste possible. |
| `tvd-007` | Carburants : le cours exclut l'essence et ne déduit que le gazole à 80 % → les deux sont alignés à 80 % depuis le 1er janvier 2022, les hydrocarbures gazeux restant à 50 %. |
| `tvd-011` | Cession soumise à la TVA sur le prix total : le CM y voit une régularisation « qui n'est pas régularisée » → le coefficient est réputé égal à l'unité, d'où une déduction complémentaire si la déduction d'origine n'était que partielle. |
| `tvd-012` | Réel simplifié : le cours annonce une déclaration trimestrielle et des acomptes assis sur N-2 → CA12 annuelle et deux acomptes semestriels de 55 % et 40 % assis sur N-1 (art. 287, 3). |
| `tvd-013` | Remboursement d'un crédit de TVA : le cours dit « à partir de 750 € » → 760 € pour une demande en cours d'année, 150 € pour la demande annuelle de janvier (art. 242-0 C ann. II). |
| `tvd-014` | Régime simplifié : le cours retient 840 000 / 254 000 € → 945 000 / 286 000 € depuis le 1er janvier 2026 ; le seuil de 15 000 € de TVA N-1 n'a pas bougé, et le régime disparaît au 1er janvier 2027. |


## Les modes

| Mode | Questions | Contenu |
|---|---:|---|
| Tout le programme | 188 | tout |
| Oral blanc | 50 | une question par question de cours : le tour complet du programme en 50 QCM |
| Spécial TD | 66 | tout ce qui vient du corrigé du partiel de TD, sur lequel le prof insiste |
| Chiffres & articles | 105 | seuils, taux, plafonds, barème, numéros d'articles et dates d'arrêts |
| Pièges | 94 | distinctions voisines, exceptions, confusions classiques |
| Introduction | 16 | définition de l'impôt, sources, contrôle, fraude et abus de droit |
| IR : champ d'application | 14 | domicile fiscal, foyer fiscal, conventions, territorialité de l'IR |
| Revenus catégoriels | 23 | revenus fonciers et de capitaux mobiliers, traitements et salaires |
| BIC | 73 | principes, charges et amortissements, plus-values professionnelles, régimes |
| Liquidation | 13 | les six étapes, quotient familial, barème, décote, réductions et crédits |
| TVA | 49 | champ, territorialité, exigibilité et taux, droit à déduction |

Et les 13 thèmes séparément, si tu veux bûcher un point précis : `intro`, `ir-champ`, `patrimoine`, `salaires`, `bic-principes`, `bic-charges`, `bic-plus-values`, `bic-regimes`, `liquidation`, `tva-champ`, `tva-territorialite`, `tva-exigible`, `tva-deductible`.


## FICHE ORAL — les 50 questions de cours

C'est la pièce maîtresse. Trois de ces questions tomberont. Pour chacune : le plan de réponse à dérouler à l'oral, puis les QCM de la banque qui te font réviser cette réponse morceau par morceau.

Les étoiles mesurent la probabilité que la question tombe — ★★★ = le prof y a consacré du temps, l'a répétée, ou elle structure une partie entière du plan. La mention **TD** signale les questions adossées au corrigé du partiel de TD.

### or-01 · Définissez l'impôt (Gaston Jèze), distinguez-le de la taxe, de la redevance et des cotisations sociales, et donnez les chiffres du cours.

*Thème : Introduction · probabilité ★★★*

- Le droit fiscal est un droit de superposition : il se greffe sur les qualifications du droit civil, commercial et social ; textes de base : CGI et Livre des procédures fiscales ; système déclaratif fondé sur le consentement à l'impôt.
- Jèze : l'impôt est la prestation pécuniaire requise des particuliers, par voie d'autorité, à titre définitif et sans contrepartie, en vue de la couverture des charges publiques.
- Pécuniaire : en argent, mais dation en paiement possible (art. 1716 bis CGI) ; définitif : à la différence de l'emprunt d'État, jamais remboursé ; par voie d'autorité : acte de puissance publique, compétence exclusive du législateur (art. 34 Constitution), mais impôt consenti (art. 14 DDHC).
- Fonctions : impôt-échange (financer les services publics) et impôt-solidarité (levier d'intervention sur les comportements).
- Redevance : versée par l'usager d'un service public ou d'un ouvrage public, contrepartie directe et immédiate, proportionnée au service ; taxe : prélevée à l'occasion d'un service public sans rapport de proportionnalité ; prélèvements obligatoires = impôts + cotisations sociales (trois piliers : santé, revenus de remplacement, solidarité).
- Chiffres du cours (2023) : IR 112 milliards d'euros ; TVA 285 milliards (plus de la moitié des recettes fiscales de l'État pendant 50 ans, 35 à 40 % aujourd'hui) ; IS 82 milliards ; recettes fiscales totales 779 milliards, État seul 460 milliards.
- ⚠️ ton cours dit « 17 millions de ménages imposables sur 40 millions » et chiffre l'IFI à 2,3 milliards pour 2023 : deux millésimes à rafraîchir. La DGFiP compte des foyers fiscaux, jamais des ménages, et son dernier bulletin donne 41,5 millions de foyers dont 19,6 millions imposables, soit 47 %, pour les revenus de 2024 — l'idée du cours, moins d'un sur deux, reste juste. L'IFI a rapporté 1,9 milliard au titre de 2023 et 2,3 milliards au titre de 2025 : le cours s'est trompé d'année, pas d'ordre de grandeur, et l'IFI rapporte toujours deux à trois fois moins que ne rapportait l'ISF.

QCM d'entraînement : `int-001`, `int-002`, `int-003`, `int-004`, `int-019`

### or-02 · Distinguez fraude fiscale, évasion fiscale, exil fiscal, optimisation fiscale et abus de droit. Qu'était le verrou de Bercy ?

*Thème : Introduction · probabilité ★★★*

- Fraude fiscale : délit de l'art. 1741 CGI, soustraction volontaire à l'impôt ; trois moyens : non-dépôt de déclaration, dissimulation de recettes ou de biens, opération illicite ; coût estimé à environ 100 milliards d'euros par an (syndicats de Bercy), 35 à 50 milliards pour l'évasion.
- Évasion fiscale : variété de fraude, donc infraction pénale : déplacement des avoirs vers des paradis fiscaux, fausse domiciliation ; exil fiscal : la personne s'expatrie elle-même avec ses biens, c'est légal (droit international privé).
- Optimisation fiscale : choix de la voie la moins imposée, légale et protégée par le Conseil constitutionnel tant que la cohérence d'ensemble de l'opération est respectée.
- Abus de droit (art. L. 64 LPF, « péché des surdoués de la fiscalité » selon Cozian) : deux branches, l'abus par simulation (acte fictif ou déguisé, homme de paille, société fictive) et l'abus par fraude à la loi (lettre du texte respectée, esprit détourné, but exclusivement fiscal).
- Art. L. 64 A LPF : abus par fraude à la loi à but principalement fiscal, introduit par la loi du 28 décembre 2018 ; conditions de fond plus larges que l'art. L. 64, mais portée plus étroite — il ne s'applique pas à l'impôt sur les sociétés (art. 205 A CGI) et n'emporte pas la majoration automatique de 80 %.
- Verrou de Bercy : la commission des infractions fiscales filtrait les plaintes de l'administration ; la loi du 23 octobre 2018 y a ajouté une dénonciation obligatoire au procureur de la République (art. L. 228 I LPF) lorsque les droits rappelés dépassent 100 000 euros ET sont assortis d'une majoration de 100 %, de 80 %, ou de 40 % lorsque le contribuable a déjà subi de telles majorations ou une plainte au cours des six années civiles précédentes ; seuil abaissé à 50 000 euros pour les élus et responsables publics soumis à la Haute Autorité pour la transparence de la vie publique.
- ⚠️ ton cours dit que le Conseil constitutionnel a refusé le critère du but « essentiellement » fiscal, et que la plainte au Parquet national financier est obligatoire dès 100 000 euros éludés, avec présomption d'infraction. Trois rectifications. Le terme censuré était « principal » : la décision n° 2013-685 DC du 29 décembre 2013 a censuré l'article 100 de la loi de finances pour 2014, qui voulait viser les actes ayant « pour motif principal » d'éluder l'impôt ; ce critère a été admis cinq ans plus tard dans un texte distinct, l'art. L. 64 A LPF. La dénonciation se fait au procureur de la République, le Parquet national financier n'ayant qu'une compétence concurrente, pour la fraude complexe ou en bande organisée. Et il n'y a aucune présomption pénale : le procureur reste maître de l'opportunité des poursuites, et la commission des infractions fiscales n'a pas disparu, son avis conforme filtrant encore les plaintes hors dénonciation obligatoire.

QCM d'entraînement : `int-005`, `int-006`, `int-007`, `int-008`

### or-03 · Quelles sont les sources internes du droit fiscal et quels principes constitutionnels encadrent la loi fiscale ?

*Thème : Introduction · probabilité ★★★*

- Bloc de constitutionnalité : art. 13 DDHC (nécessité et égalité de l'impôt), art. 14 DDHC (consentement à l'impôt), art. 34 Constitution (compétence du Parlement) ; les QPC sont fondamentales en droit fiscal.
- Légalité de l'impôt : seul le Parlement crée l'impôt et fixe l'assiette, le taux et le recouvrement ; le Conseil constitutionnel censure les cavaliers législatifs ; lois de finances et lois de finances rectificatives, au besoin par le 49 al. 3.
- Rétroactivité : petite rétroactivité admise (la loi applicable est celle en vigueur au jour du fait générateur, soit le 31 décembre pour l'IR ; lois interprétatives rétroactives) ; grande rétroactivité (remise en cause de situations acquises) seulement pour un motif d'intérêt général suffisant.
- Intelligibilité et prévisibilité de la loi : dispositif inintelligible censuré en 2005.
- Égalité devant l'impôt (situation identique, traitement identique) et égalité devant les charges publiques (faculté contributive, absence de caractère confiscatoire).
- La loi fixe le champ d'application, le fait générateur, l'assiette, le taux et le recouvrement ; le pouvoir réglementaire n'a pas de compétence propre en matière d'impositions : il n'intervient qu'en application de la loi, dans les annexes du CGI et la partie réglementaire du LPF, pour l'essentiel des règles de procédure.
- ⚠️ ton cours range « les procédures fiscales et les impôts locaux » du côté des ordonnances et des règlements : la première liste n'a rien de faux, c'est la seconde qu'il faut nuancer. L'art. 34 de la Constitution réserve à la loi « l'assiette, le taux et les modalités de recouvrement des impositions de toutes natures », impôts locaux compris, et l'art. 72-2, al. 2, ajoute que « la loi peut les autoriser [les collectivités territoriales] à en fixer l'assiette et le taux dans les limites qu'elle détermine ». Les collectivités votent donc des taux sur habilitation législative, jamais en vertu d'un pouvoir réglementaire autonome.

QCM d'entraînement : `int-010`, `int-011`, `int-012`, `int-016`

### or-04 · Quelle est la valeur de la doctrine administrative, du rescrit et de la jurisprudence ? Quelles sont les sources internationales du droit fiscal ?

*Thème : Introduction · probabilité ★★☆*

- Doctrine administrative : instructions du ministère à ses agents, « encyclopédie du droit fiscal », intégralement en ligne depuis le 12 septembre 2012 sur le BOFiP ; aucune portée juridique en principe, le juge de l'impôt n'est pas lié.
- Garantie du contribuable : art. L. 80 A et L. 80 B LPF, la doctrine est opposable à l'administration, même contra legem si elle est plus favorable ; protection contre les changements ultérieurs de position ; abus de droit par abus de doctrine possible (affaire Balmain, CE Ass. plén. 28 octobre 2020).
- Rescrit : question posée par le contribuable sur sa propre situation, réponse formelle de l'administration ayant la même force que la doctrine, opposable devant le juge ; rescrit général de l'art. L. 80 B, 1° LPF pour une demande écrite, précise et complète d'un redevable de bonne foi, réponse en trois mois, portée collective s'il est publié au BOFiP. Pour une association, c'est le rescrit « lucrativité », adressé au correspondant « associations » de la direction départementale des finances publiques, l'administration appréciant le caractère lucratif par la méthode des 4 P — Produit, Public, Prix, Publicité, par ordre d'importance décroissante ; à ne pas confondre avec le rescrit « mécénat » de l'art. L. 80 C LPF (organisme relevant des art. 200 et 238 bis CGI), où le délai est de six mois et où le silence vaut acceptation. Revers de la médaille : le risque d'être dans le viseur de l'administration.
- Jurisprudence : le juge de l'impôt (Conseil d'État, CJUE) qualifie, interprète et dégage les principes.
- Droit de l'Union européenne : source majeure, la TVA est un impôt commun régi par règlements et directives ; CEDH : garanties procédurales, mais l'art. 6 § 1 est écarté du contentieux fiscal lui-même (Ferrazzini c. Italie, 12 juillet 2001) et ne joue que sous son volet pénal, pour les majorations et sanctions répressives (Bendenoun, 1994), et sous son volet civil lorsqu'un droit civil distinct est en cause, comme le respect du domicile lors d'une visite domiciliaire (Ravon, 2008).
- Conventions fiscales : toujours bilatérales, 124 conventions fiscales en vigueur pour la France — la liste officielle du BOFiP, arrêtée au 1er janvier 2026, recense 128 États et territoires, certaines conventions étant suspendues ou dénoncées —, pour 193 États membres de l'ONU ; objectifs : éviter la double imposition, assistance administrative mutuelle, lutte contre l'évasion, répartition de la compétence fiscale entre États ; principe de subsidiarité des conventions (le droit interne s'applique d'abord).
- ⚠️ ton cours annonce « environ 196 États reconnus par l'ONU », « plus de 140 conventions », un « rescrit 4P » et l'art. 6 § 1 CEDH sans la moindre réserve. Les bons ordres de grandeur sont 193 États membres de l'ONU — le cours y ajoute sans doute les deux observateurs non membres, le Saint-Siège et la Palestine — et 124 conventions en vigueur ; les 4 P ne sont pas le nom d'une procédure mais la méthode par laquelle l'administration apprécie la lucrativité, la procédure s'appelant le rescrit « lucrativité » ; et l'art. 6 § 1 ne touche le contentieux fiscal que par ses volets pénal et civil.

QCM d'entraînement : `int-014`, `int-017`, `int-018`

### or-05 · Qui est domicilié fiscalement en France (art. 4 A et 4 B CGI) et comment sont imposés les non-résidents ?

*Thème : IR — champ d'application · probabilité ★★★ · TD*

- Art. 4 A CGI : les personnes physiques domiciliées en France sont imposées sur l'ensemble de leurs revenus mondiaux (obligation fiscale illimitée) ; les autres sur leurs seuls revenus de source française (obligation limitée).
- Territoire fiscal : la métropole, les îles du littoral, la Corse et les cinq départements d'outre-mer ; aucune collectivité d'outre-mer n'en fait partie — ni la Polynésie française, ni Wallis-et-Futuna, ni Saint-Pierre-et-Miquelon, ni Saint-Barthélemy, ni Saint-Martin —, pas plus que la Nouvelle-Calédonie ou les Terres australes et antarctiques françaises, parce que toutes disposent d'une compétence fiscale propre (BOI-IR-CHAMP-10) ; seule vraie nuance : à Saint-Martin et Saint-Barthélemy, celui qui n'y réside pas depuis cinq ans au moins reste domicilié fiscalement en France.
- Art. 4 B CGI : trois critères alternatifs, et non hiérarchisés — il suffit que l'un d'eux soit rempli, aucun ne prime les autres, la hiérarchie n'existant qu'à l'intérieur du a : le foyer ou, à défaut, le lieu du séjour principal (critère personnel) ; l'activité professionnelle principale en France (appréciée en temps passé, non en rémunération) ; le centre des intérêts économiques (principaux investissements, administration des biens).
- Critère personnel : l'art. 4 B, 1-a vise toujours « le foyer ou le lieu de leur séjour principal » ; depuis CE Section, 3 novembre 1995, Larcher, le séjour principal est seulement subsidiaire, on n'y vient qu'à défaut de foyer, et la loi ne fixe aucune durée, les six mois n'étant qu'un indice de la doctrine administrative. Présomption simple de domicile pour les dirigeants limitativement énumérés par le texte — président du conseil d'administration lorsqu'il assume la direction générale, directeur général, directeurs généraux délégués, président et membres du directoire, gérants et fonctions analogues, c'est-à-dire des dirigeants exécutifs : un simple administrateur ou un membre du conseil de surveillance n'est pas concerné — des sociétés dont le chiffre d'affaires réalisé en France excède 250 millions d'euros, consolidé avec celui des entreprises contrôlées au sens de l'art. L. 233-16 C. com. Depuis le 16 février 2025 (art. 83 de la loi n° 2025-127 du 14 février 2025 de finances pour 2025), un dernier alinéa ajoute que, même si un critère est rempli, la personne n'est pas domiciliée en France lorsqu'une convention relative aux doubles impositions ne la regarde pas comme résidente de France.
- Non-résidents : revenus de source française de l'art. 164 B CGI (biens ou activités situés en France, débiteur établi en France) ; taux minimum de l'art. 197 A — et non de l'art. 164 B, qui ne fixe aucun taux — de 20 % jusqu'à la limite supérieure de la deuxième tranche du barème, soit 29 579 euros pour les revenus 2025 imposés en 2026, et 30 % au-delà, sauf justification d'un taux moyen mondial inférieur et sous réserve des conventions. Dis « taux minimum », jamais « taux forfaitaire » : l'art. 197 A rend applicables les règles du 1 et du 2 du I de l'art. 197, donc le barème progressif et le quotient familial, et se borne à poser un plancher.
- Personnes imposables : personnes physiques et associés des sociétés de personnes de l'art. 8 CGI (translucidité) ; exonérés : agents diplomatiques et consulaires étrangers.
- ⚠️ ton cours range les COM dans le territoire fiscal français « sauf certaines qui ont un régime fiscal autonome » (c'est l'inverse : aucune n'en fait partie), présente les trois critères de l'art. 4 B comme hiérarchisés par le juge (ils sont alternatifs), dit que le foyer a « remplacé » le séjour principal (Larcher l'a seulement rendu subsidiaire) et chiffre le taux minimum des non-résidents à 26 070 euros, limite de la deuxième tranche du barème des revenus 2021, contre 29 579 euros pour les revenus 2025. Sur ce qui est demandé ici, il a raison : la loi ne fixe aucune durée de séjour, le seuil de 250 millions d'euros est exact, et la présomption pesant sur les dirigeants est bien simple.

QCM d'entraînement : `irc-001`, `irc-002`, `irc-004`, `irc-005`, `irc-006`

### or-06 · Qu'est-ce que le foyer fiscal (art. 6 CGI) et quelles sont les conséquences d'un changement de situation en cours d'année ?

*Thème : IR — champ d'application · probabilité ★★★ · TD*

- L'IR n'est pas personnel : il frappe le foyer fiscal ; art. 6-1 CGI, cumul des revenus du contribuable et des personnes à sa charge (art. 196 et 196 A bis) ; époux, quel que soit le régime matrimonial, et partenaires de Pacs : imposition commune et solidarité fiscale ; le concubinage ne forme pas un foyer.
- Impositions distinctes de plein droit — l'art. 6, 4 CGI dit « les époux font l'objet d'impositions distinctes », et l'administration intitule son commentaire « Dérogations obligatoires à la règle de l'imposition par foyer fiscal » — dans trois cas : époux séparés de biens ET ne vivant pas sous le même toit (cumulatif) ; instance de divorce ou de séparation de corps avec résidence séparée autorisée par le juge ; abandon du domicile conjugal par l'un des époux, à condition que chacun dispose de revenus distincts. La seule vraie option en la matière est celle de l'année du mariage ou du Pacs, et elle est irrévocable.
- Rattachement des enfants : mineurs obligatoirement ; majeurs de moins de 21 ans sur option ; de moins de 25 ans s'ils poursuivent leurs études (art. 6, 3 CGI) ; intérêt : rattacher au foyer aux revenus les plus élevés.
- Mariage ou Pacs : imposition commune pour toute l'année, sauf option pour l'imposition séparée la première année seulement.
- Divorce ou séparation : chacun déclare séparément les revenus de toute l'année, comme si la relation avait cessé au 1er janvier ; remariage la même année : on retient le dernier changement.
- Naissance : charges de famille appréciées au 1er janvier, mais l'article 196 bis, al. 2 du CGI fait état des charges au 31 décembre en cas d'augmentation en cours d'année (ce n'est pas une tolérance) ; décès : deux déclarations, le foyer commun jusqu'au décès puis le survivant seul jusqu'au 31 décembre.
- ⚠️ ton cours présente les trois cas du 4 de l'art. 6 comme des hypothèses où les époux « peuvent demander » une imposition séparée, et ajoute « l'absence, la disparition inquiétante » à l'abandon du domicile conjugal. Le texte dit « font l'objet d'impositions distinctes » : c'est de plein droit dès que la situation est constituée, et cela s'impose au contribuable comme à l'administration ; l'absence et la disparition inquiétante ne sont pas des cas d'imposition distincte, et l'abandon du domicile conjugal suppose en outre que chacun des époux dispose de revenus distincts.

QCM d'entraînement : `irc-007`, `irc-008`, `irc-009`, `irc-010`, `irc-014`

### or-07 · Quels sont les caractères du revenu imposable à l'IR et quelles sont les catégories de revenus ?

*Thème : IR — champ d'application · probabilité ★★☆ · TD*

- Pas de définition légale générale du revenu, seulement des définitions catégorielles ; principe d'annualité posé par l'art. 12 CGI : imposition chaque année des revenus de l'année civile.
- Revenu global net annuel (art. 13, 2) : somme de tous les revenus catégoriels du foyer ; revenu net (art. 13, 1) : diminué des dépenses supportées pour acquérir ou conserver le revenu.
- Revenu annuel : du 1er janvier au 31 décembre (en BIC, l'exercice comptable peut être à cheval sur deux années) ; revenu disponible : le contribuable en a la jouissance (contre-exemple : compte courant d'associé bloqué).
- Champ d'application matériel (TD) : l'ensemble des revenus et charges des personnes physiques, réparti en huit catégories et deux familles.
- Revenus du travail, au barème progressif : traitements et salaires, pensions et rentes viagères ; bénéfices agricoles ; BIC ; BNC ; rémunérations des dirigeants (art. 62).
- Revenus du capital, le plus souvent à taux proportionnel (PFU) plus prélèvements sociaux : revenus fonciers, revenus de capitaux mobiliers, plus-values des particuliers.

QCM d'entraînement : `irc-011`, `irc-012`, `irc-013`, `irc-015`

### or-08 · Comment détermine-t-on le revenu net foncier ? Présentez le micro-foncier, le régime réel et le traitement des déficits fonciers.

*Thème : Revenus du patrimoine · probabilité ★★★*

- Art. 14 à 33 quinquies CGI : revenus des propriétés bâties et non bâties louées nues ; exclus : location meublée et locaux équipés (BIC), sous-location d'immeuble nu (BNC) ; logement dont le propriétaire se réserve la jouissance non imposé (art. 15, II CGI ; charges correspondantes non déductibles).
- Revenu brut (art. 29) : loyers effectivement encaissés (comptabilité de caisse), plus dépenses du propriétaire mises à la charge du locataire, pas-de-porte (supplément de loyer), subventions, droits d'affichage et de chasse ; le dépôt de garantie n'est pas un revenu ; l'administration peut substituer un loyer de marché à un loyer anormalement bas.
- Revenu net = revenu brut − charges de propriété (art. 28) ; charges de l'art. 31 (liste : réparation et entretien, amélioration des locaux d'habitation, primes d'assurance, frais de gestion de 20 euros par local, gardes et concierges, frais de procédure, intérêts d'emprunt, taxe foncière) articulées avec la règle générale de l'art. 13 ; exclus : construction, reconstruction, agrandissement.
- Micro-foncier (art. 32) : de plein droit si le revenu brut foncier n'excède pas 15 000 euros, abattement forfaitaire de 30 % ; régime réel de plein droit au-delà ou sur option irrévocable pendant 3 ans (art. 32-4).
- Déficit foncier (art. 156, I-3°) : imputation sur le revenu global limitée à 10 700 euros par an, et réservée aux dépenses autres que les intérêts d'emprunt ; limite rehaussée d'office, sans excéder 21 400 euros par an, à concurrence des dépenses de rénovation énergétique faisant passer le bien d'une classe E, F ou G à une classe A, B, C ou D (art. L. 173-1-1 CCH), sur devis accepté depuis le 5 novembre 2022 et payées jusqu'au 31 décembre 2027 (loi de finances pour 2026, loi n° 2026-103 du 19 février 2026, art. 47).
- La fraction du déficit provenant des intérêts d'emprunt et le surplus au-delà de 10 700 euros ne s'imputent que sur les revenus fonciers des 10 années suivantes ; exception : monuments historiques, déficit intégralement déductible du revenu global.
- ⚠️ ton CM présente le micro-foncier comme une option fiscale irrévocable pendant trois ans : c'est inexact, il s'applique de plein droit sous 15 000 euros de revenu brut foncier, et c'est l'option pour le réel qui engage trois ans (art. 32, 4) — le raisonnement est juste, l'étiquette est inversée. Ta fiche liquidation écrit par ailleurs que le déficit foncier s'impute sur le revenu global « uniquement pour la part correspondant aux intérêts d'emprunt » : l'art. 156, I-3° dit exactement l'inverse, c'est ta fiche revenus fonciers qui a raison. Et elle cite « l'art. 15-1 » pour l'exonération du logement dont le propriétaire se réserve la jouissance : le I de l'art. 15 est abrogé depuis la loi de finances pour 1984, la règle est au II de l'art. 15.

QCM d'entraînement : `pat-001`, `pat-002`, `pat-003`, `pat-004`, `pat-005`, `pat-006`, `pat-014`

### or-09 · Quels sont les revenus de capitaux mobiliers et comment sont-ils imposés ?

*Thème : Revenus du patrimoine · probabilité ★★☆*

- Art. 108 à 146 quater CGI ; deux catégories : dividendes et revenus assimilés à taux variable (dividendes de sociétés à l'IS, réductions de capital sans rachat de titres, boni de liquidation) et produits de placement à revenu fixe (intérêts de créances, obligations, comptes courants d'associés, dépôts, bons de caisse).
- Revenu brut : sommes ou valeurs encaissées, même en nature ; exonérations limitativement listées à l'art. 157 CGI (livret A 7°, livret jeune 7° quater, LDDS 9° quater ; l'art. 125 A institue le prélèvement de 12,8 % sur les produits à revenu fixe) ; charges déductibles seulement en cas d'option pour le barème (droits de garde, frais d'encaissement des coupons ; jamais les frais de courtage ni les intérêts d'emprunts pour acquérir les titres) : sous le PFU, l'impôt frappe le revenu brut.
- Régime de droit commun : prélèvement forfaitaire unique (flat tax) de 31,4 % = 12,8 % d'impôt sur le revenu (art. 200 A CGI, taux inchangé) + 18,6 % de prélèvements sociaux (10,6 % de CSG, 0,5 % de CRDS, 7,5 % de prélèvement de solidarité), la CSG ayant été portée de 9,2 % à 10,6 % par la loi n° 2025-1403 du 30 décembre 2025 de financement de la sécurité sociale pour 2026 — pour les produits de placement payés depuis le 1er janvier 2026 et, pour les revenus du patrimoine dont les plus-values mobilières, dès l'imposition des revenus 2025. Le IV de l'art. L. 136-8 CSS maintient la CSG à 9,2 %, donc des prélèvements sociaux de 17,2 %, pour une liste limitative : revenus fonciers, plus-values immobilières, assurance-vie, épargne-logement, PEP. N'en conclus jamais à un « 30 % » général, l'impôt sur le revenu y étant différent : barème progressif pour les revenus fonciers, 19 % pour les plus-values immobilières. Le PFU ne se mélange pas aux autres revenus.
- Option annuelle, globale et irrévocable pour le barème progressif : dividendes avec abattement de 40 % (imposés sur 60 %), produits à revenu fixe sans abattement ; CSG déductible à hauteur de 6,8 points (art. 154 quinquies II), fraction que la hausse de 2026 n'a pas modifiée.
- PFONL : acompte d'IR de 12,8 % (art. 117 quater CGI) retenu à la source par l'établissement payeur, auquel s'ajoutent 18,6 % de prélèvements sociaux (31,4 % prélevés au total), non libératoire, imputable et restituable, régularisé lors de la déclaration en mai de l'année suivante ; dispense sous condition de revenu fiscal de référence (art. 242 quater CGI).
- Gérants majoritaires de SARL à l'IS (rémunération imposée selon l'art. 62 CGI) : la fraction des dividendes excédant 10 % du capital social, primes d'émission incluses, et des sommes en compte courant est soumise aux cotisations TNS — seuil de source sociale (art. L. 136-3, II, 2° CSS, ex-art. L. 131-6, III), et non de l'art. 62 CGI ; l'art. R. 131-7 CSS ne retient que les apports en numéraire intégralement libérés et les apports en nature, appréciés au dernier jour de l'exercice précédent.
- ⚠️ ton cours donne une flat tax de 30 %, somme de 12,8 % d'impôt sur le revenu et de 17,2 % de prélèvements sociaux, et présente le PFONL comme une retenue unique de 30 % opérée par la société distributrice. Le 30 % était exact jusqu'aux revenus de 2024 ; le PFU est aujourd'hui de 31,4 %. Sur cette retenue, seuls 12,8 % sont le prélèvement forfaitaire non libératoire de l'art. 117 quater, le reste étant les prélèvements sociaux, qui obéissent à des règles distinctes et ne s'imputent pas sur l'impôt sur le revenu. Ton cours a raison, en revanche, sur l'auteur de la retenue : c'est l'établissement payeur, et la société distributrice l'est quand elle paie elle-même ses dividendes. Dernier point : ton CM rattache les exonérations du livret A et du livret jeune à l'art. 125 A, alors qu'elles figurent à l'art. 157.

QCM d'entraînement : `pat-008`, `pat-009`, `pat-010`, `pat-011`, `pat-012`, `pat-013`

### or-10 · Définissez la catégorie des traitements, salaires, pensions et rentes viagères (art. 79 à 90 CGI) : personnes concernées, revenu brut, éléments exonérés, dirigeants.

*Thème : Traitements et salaires · probabilité ★★☆*

- Art. 79 à 90 CGI : revenus du travail salarié et des fonctionnaires, pensions de retraite et rentes viagères (revenus de remplacement) ; critère de l'état de subordination, calqué sur le droit du travail (droit de superposition). Rattachés de plein droit : journalistes, travailleurs à domicile, assistants maternels, artistes du spectacle, présidents de conseil d'administration. Sur option seulement : les agents généraux d'assurance, dont les commissions sont par nature des bénéfices non commerciaux (art. 93, 1 ter, demande avant le 1er mars de l'année d'imposition), et les auteurs et compositeurs, dont les droits ne suivent les règles des traitements et salaires que s'ils sont intégralement déclarés par des tiers (art. 93, 1 quater).
- Revenu brut (art. 82) : salaire effectivement encaissé, traitements, indemnités, émoluments, primes, avantages en nature (logement, véhicule de fonction) ; prestations de retraite en capital (art. 79) ; art. 81 : liste des allocations exonérées ; art. 80 quinquies : indemnités journalières maladie et maternité.
- Exonérations ciblées : heures supplémentaires jusqu'à 7 500 euros (art. 81 quater) ; salaires des apprentis et gratification de stage de l'art. L. 124-6 du code de l'éducation, dans la limite du SMIC annuel — soit 21 622 euros pour les revenus 2025 (art. 81 bis) ; dis « apprentis et stagiaires », jamais « alternants », le contrat de professionnalisation n'étant exonéré ni par l'art. 81 bis ni par le 36° de l'art. 81 ; jobs étudiants jusqu'à 3 SMIC mensuels, 5 405 euros pour les revenus 2025 (art. 81, 36°), pour qui a vingt-cinq ans au plus au 1er janvier de l'année d'imposition, sur option et globalement pour tous les emplois de l'année.
- Indemnités de rupture (art. 80 duodecies, 1, dans sa version en vigueur depuis le 16 février 2025) : toute indemnité de rupture est imposable en principe. Exonération totale dans deux cas seulement : licenciement irrégulier, nul ou sans cause réelle et sérieuse, et indemnité versée dans le cadre d'un plan de sauvegarde de l'emploi. Pour un licenciement ordinaire, l'exonération est limitée au plus élevé de trois montants : l'indemnité légale ou conventionnelle de branche, le double de la rémunération annuelle brute de l'année civile précédant la rupture, la moitié de l'indemnité perçue — les deux montants calculés sur la rémunération étant eux-mêmes bornés à six fois le plafond annuel de la sécurité sociale, borne qui ne joue pas pour l'indemnité légale ou conventionnelle.
- Pensions et retraites : abattement de 10 % (art. 158, 5-a), plancher de 454 euros par pensionné et plafond de 4 439 euros par foyer pour les revenus 2025 — retiens surtout la structure, plancher par pensionné et plafond par foyer, qui distingue cet abattement de la déduction des salariés, plafonnée personne par personne ; les rentes viagères à titre gratuit sont assimilées à des pensions (art. 79) et relèvent du même art. 158, 5-a, et non de l'art. 158 bis, qui était l'avoir fiscal, abrogé depuis le 1er janvier 2005 ; rentes viagères à titre onéreux : fraction imposable selon l'âge du crédirentier à l'entrée en jouissance (art. 158, 6), 30 % seulement à partir de 70 ans, puisqu'à 69 ans on est encore dans la tranche 60-69 ans inclus, à 40 %.
- Revenus des dirigeants : pas de régime unique, apprécié société par société et mandat par mandat. L'art. 62 CGI ne vise qu'une liste fermée — gérant majoritaire de SARL, gérant commandité de société en commandite par actions, associé en nom, membre d'une société en participation, associé de l'art. 8 lorsque la société a opté pour l'impôt sur les sociétés. Le PDG ou le directeur général de SA, le président de SAS et le gérant minoritaire de SARL sont imposés dans les traitements et salaires de droit commun, l'art. 80 ter ne les désignant que pour soumettre à l'impôt leurs indemnités et allocations forfaitaires pour frais.
- ⚠️ ton CM met les « agents d'assurances » parmi les assimilés salariés et annonce une « exonération totale » pour les indemnités de licenciement : les commissions d'un agent général d'assurance sont par nature des bénéfices non commerciaux, et l'art. 80 duodecies pose au contraire l'imposition de principe de toute indemnité de rupture. Il ouvre aussi le chapitre des dirigeants par « art. 62 CGI » : ne dis pas pour autant que les revenus des dirigeants relèvent de l'art. 62, qui ne vise qu'une liste fermée — garde en revanche sa formule « société par société, mandat par mandat », c'est la bonne clé. Chiffres enfin : ta fiche donne 450 / 4 399 euros pour l'abattement des pensions, montants des revenus 2024, devenus 454 / 4 439 euros pour les revenus 2025, et elle écrit « 30 % à partir de 69 ans » quand l'art. 158, 6 dit « plus de 69 ans ».

QCM d'entraînement : `sal-001`, `sal-002`, `sal-003`, `sal-004`, `sal-008`, `sal-011`

### or-11 · Comment déduit-on les frais professionnels des salariés : déduction forfaitaire de 10 % ou frais réels ?

*Thème : Traitements et salaires · probabilité ★★★*

- Revenu net catégoriel = revenu encaissé (art. 82) − charges de la catégorie (art. 13, règle générale, précisé par l'art. 83) ; conditions : engagées pour acquérir ou conserver le revenu, nécessaires à l'activité salariée, payées dans l'année d'imposition, justifiables.
- Déduction forfaitaire de 10 % (art. 83, 3°) appliquée d'office : plancher de 509 euros et plafond de 14 555 euros pour les rémunérations perçues en 2025 (décret n° 2026-562 du 29 juin 2026), limites revalorisées chaque année comme la première tranche du barème et appréciées séparément pour chaque membre du foyer fiscal, non pour le foyer ; option pour les frais réels individuelle, membre par membre, avec justificatifs.
- Frais de déplacement domicile-travail : barème kilométrique (puissance fiscale et distance), sans justification particulière jusqu'à 40 km aller simple (80 km aller-retour), un aller-retour par jour (deux pour les restaurateurs) ; péages et parking déductibles en plus.
- Frais de repas : seul le surcoût par rapport au repas pris au foyer, évalué à 5,45 euros pour les revenus 2025, est déductible ; forfait de 5,45 euros par jour sans justificatif ; 10,90 euros (deux fois 5,45) n'est que le seuil au-delà duquel le réel devient plus avantageux. Avec une restauration d'entreprise, le forfait journalier sans justificatif est perdu, mais la déduction reste possible sur justificatifs, à hauteur de la différence entre le prix payé à la cantine et la valeur du repas au foyer.
- Télétravail : dépenses au prorata de l'usage professionnel ou forfait de 2,70 euros par jour télétravaillé, 59,40 euros par mois, 626,40 euros par an pour les revenus 2025 — l'annuel ne s'obtient pas en multipliant le mensuel par douze, le mensuel visant un mois de 22 jours télétravaillés et l'annuel 232 jours ; ce forfait journalier est aussi la limite d'exonération de l'allocation de télétravail versée par l'employeur (art. 81 CGI). Matériel : déduction immédiate si la valeur unitaire est inférieure à 500 euros HT, sinon étalement sur la durée d'amortissement (ordinateur sur 3 ans) — tolérance de l'administration, non un seuil légal. Vêtements imposés par l'employeur, documentation, diplôme, déménagement.
- ⚠️ les chiffres de ton cours sont d'anciens millésimes : plancher 504 et plafond 14 426 euros (revenus 2024) dans les fiches, plafond 12 829 euros sans plancher (revenus 2021) dans le CM, contre 509 / 14 555 euros pour les revenus 2025 ; forfait repas de 5,35 euros (2024) contre 5,45 euros ; forfait télétravail annuel de 606,36 euros, chiffre qui ne figure dans aucun document officiel, contre 626,40 euros. Ta fiche affirme enfin qu'avec une restauration d'entreprise « rien n'est déductible » : c'est trop raide, ce que la cantine fait perdre, c'est le forfait journalier sans justificatif. Annonce chaque chiffre en le datant.

QCM d'entraînement : `sal-005`, `sal-006`, `sal-007`, `sal-010`

### or-12 · Définissez les bénéfices industriels et commerciaux : quelles sont les trois sources de la commercialité fiscale ?

*Thème : BIC — principes · probabilité ★★★ · TD*

- Art. 34 CGI : bénéfices des personnes physiques exerçant une profession commerciale, industrielle ou artisanale à titre indépendant ; définition fiscale « à trois têtes » : par nature, par assimilation, par attraction.
- Par nature (art. 34) : renvoi au Code de commerce, art. L. 110-1 (actes de commerce, notamment tout achat de biens meubles pour les revendre) et L. 121-1 (commerçant = celui qui en fait sa profession habituelle) ; obligations comptables de l'art. L. 123-12 (comptabilité régulière et sincère, comptes annuels) ; la qualification vaut même pour une activité non déclarée.
- Par assimilation ou détermination de la loi (art. 35) : activités civiles réputées commerciales par la loi fiscale — location directe ou indirecte de locaux d'habitation meublés (art. 35, I, 5° bis, créé par l'art. 114 de la loi de finances rectificative du 29 décembre 2016, pour l'impôt dû à compter des revenus perçus en 2017), location de locaux équipés à usage industriel ou commercial, loyer indexé sur le chiffre d'affaires du preneur. Garde l'idée de fond : louer meublé, c'est fournir une prestation de service.
- Grille des locations : location nue = revenus fonciers ; location meublée = BIC ; sous-location d'immeuble nu = BNC ; sous-location meublée = BIC.
- Par attraction ou accessoire (art. 155, I, 1) : les revenus BA ou BNC accessoires d'une activité BIC principale relèvent des BIC à deux conditions, un lien étroit (approche qualitative) et la prépondérance de l'activité commerciale (approche quantitative : volume d'affaires, prix de revient) ; le 2 du I prévoit la réciproque expresse depuis les exercices ouverts à compter du 1er janvier 2012, aux mêmes conditions — c'est grâce à elle que le professionnel libéral qui accomplit des actes de commerce accessoires reste en BNC.
- ⚠️ ton CM fait remonter à 1915 la qualification commerciale du bail meublé : cette date n'est rattachable à aucune décision identifiable et n'est plus le fondement de la règle, qui est le 5° bis du I de l'art. 35 CGI, issu de la loi de finances rectificative du 29 décembre 2016. Le partage exact, c'est là qu'on gagne des points : la jurisprudence n'avait rendu commerciale que la location meublée habituelle, et c'est le texte de 2016 qui a basculé la location occasionnelle des revenus fonciers vers les BIC. Ton CM règle par ailleurs le cas inverse d'une phrase — on peut faire des actes de commerce en BNC, « ça n'a pas d'impact sur le régime fiscal » : le résultat est exact, mais si le libéral reste en BNC, c'est grâce à l'attraction du 2 du I de l'art. 155, pas en son absence.

QCM d'entraînement : `bpr-001`, `bpr-002`, `bpr-003`, `bpr-004`

### or-13 · Qu'est-ce que la fin de la théorie du bilan (art. 155 CGI) et que distingue-t-on entre BIC professionnels et BIC non professionnels ?

*Thème : BIC — principes · probabilité ★★★ · TD*

- Théorie du bilan (avant le 1er janvier 2012) : tout bien inscrit à l'actif de l'entreprise individuelle suivait le régime fiscal des BIC, même sans lien avec l'exploitation (résidence, immeuble de rapport).
- Depuis le 1er janvier 2012, art. 155 CGI : l'inscription comptable à l'actif ne suffit plus, il faut démontrer que le bien est utile à l'activité professionnelle ; sinon ses produits et charges sont imposés dans leur propre catégorie (revenus fonciers, RCM) et sa cession relève des plus-values des particuliers.
- Soupape de l'art. 155, II-3 : les produits ne provenant pas de l'activité professionnelle restent rattachés au résultat BIC s'ils n'excèdent ni 5 % de l'ensemble des produits de l'exercice, hors plus-values de cession, ni 10 % de ces mêmes produits lorsque la condition de 5 % était satisfaite au titre de l'exercice précédent — le 10 % n'est donc pas une prime à l'ancienneté, c'est la soupape de l'exercice qui suit un exercice resté sous les 5 %.
- Patrimoine d'affectation : les définitions fiscale (utilité à l'activité) et commerciale ne sont pas harmonisées ; en BNC le critère est plus strict (actif nécessaire à la profession).
- BIC professionnels (art. 156, I, 1° bis) : participation personnelle, directe et continue de l'exploitant, à temps plein ou non ; BIC non professionnels : activité patrimoniale, civile (location meublée).
- Conséquences : le déficit BIC professionnel s'impute sur le revenu global (reliquat reportable 6 ans), le déficit non professionnel seulement sur des BIC non professionnels ; régimes de faveur (exonération pour départ à la retraite) réservés aux BIC professionnels ; l'immeuble affecté à une activité professionnelle est hors IFI.
- ⚠️ ton cours dit 5 % la première année puis 10 % les années suivantes, calculés sur les « recettes totales de l'activité » (CM) ou les « revenus globaux » (corrigé de TD) : c'est inexact deux fois. L'art. 155, II-3 retient 5 % de l'ensemble des produits de l'exercice, hors plus-values de cession, et 10 % seulement si la condition de 5 % était remplie au titre de l'exercice précédent.

QCM d'entraînement : `bpr-005`, `bpr-006`, `bpr-007`, `bpr-024`

### or-14 · Expliquez le principe de soumission du droit fiscal au droit comptable (art. 38 quater ann. III CGI) et les autres grands principes des BIC : période d'imposition, nominalisme, indépendance des exercices, prise en compte de la TVA.

*Thème : BIC — principes · probabilité ★★★ · TD*

- Art. 38 quater annexe III CGI : le droit fiscal suit le droit comptable (Plan comptable général) pour déterminer le résultat imposable, sauf dérogations prévues par la loi fiscale ; fondement : le commerçant tient une comptabilité régulière et sincère (art. L. 123-12 C. com.) ; le bilan est la photographie du patrimoine à un instant T, le compte de résultat retrace produits et charges.
- Le résultat comptable n'est pas forcément le résultat imposable : un produit peut être exonéré, une charge comptabilisée non déductible ; on passe de l'un à l'autre par des retraitements extra-comptables : résultat fiscal = résultat comptable + réintégrations − déductions.
- Période d'imposition = l'exercice comptable, de 12 mois mais non calé sur l'année civile (possiblement à cheval sur deux années), par dérogation à l'annualité : l'art. 12 CGI pose l'annualité de l'impôt et l'art. 13 définit le revenu net, la dérogation propre aux BIC étant aux art. 36 et 37 CGI ; imposition l'année de clôture.
- Nominalisme monétaire : en comptabilité comme en fiscalité, on ne raisonne qu'en euros.
- Indépendance des exercices : impossible de rattraper sur l'exercice suivant une charge de l'exercice précédent ; les effets rétroactifs d'une nullité ne remontent pas au-delà de la clôture de l'exercice précédent.
- Prise en compte de la TVA (art. 38 A annexe III) : opérations, immobilisations, charges et produits enregistrés hors taxes, car la TVA collectée est due au Trésor et la TVA supportée est déductible : neutralité pour l'entreprise.

QCM d'entraînement : `bpr-008`, `bpr-009`, `bpr-010`

### or-15 · Comment définit-on le bénéfice net imposable en BIC (art. 38-1 et 38-2 CGI) ? Quels sont les effets d'un apport, d'une remise de dette ou d'un dégrèvement sur l'actif net ?

*Thème : BIC — principes · probabilité ★★★ · TD*

- Art. 38, 1 CGI, définition analytique : le bénéfice imposable est déterminé d'après « les résultats d'ensemble des opérations de toute nature effectuées par les entreprises, y compris notamment les cessions d'éléments quelconques de l'actif, soit en cours, soit en fin d'exploitation » : produits − charges, après retraitements extra-comptables. Cette incise est précisément ce qui fait entrer les plus-values professionnelles dans le bénéfice imposable, l'art. 39 duodecies s'ouvrant d'ailleurs par « Par dérogation aux dispositions de l'article 38 ».
- Art. 38-2 CGI, définition synthétique : différence entre l'actif net à la clôture et à l'ouverture de l'exercice, diminuée des apports supplémentaires et augmentée des prélèvements de l'exploitant ou des associés.
- Actif net = total de l'actif − dettes envers les tiers ; le compte de l'exploitant et les capitaux propres ne sont pas des dettes ; actif (emplois) = passif (ressources) ; le résultat figure au passif car il est dû aux associés, aux créanciers et à l'État.
- Les deux définitions se complètent : on part de l'analytique, mais seule la synthétique saisit un enrichissement qui n'est ni produit ni charge, comme la disparition d'une dette.
- Remise de dette (art. 1350 C. civ.) ou dégrèvement d'un impôt déductible inscrit au passif : la dette disparaît, l'actif net augmente, produit imposable (art. 38-2), car ce n'est ni un apport ni un prélèvement ; vol ou perte d'un actif : charge exceptionnelle, variation négative de l'actif net.
- Apport ou retrait de l'exploitant (art. 38, 2 CGI) : variation d'actif net neutralisée, non imposable ; ce n'est pas un revenu au sens de l'art. 12.

QCM d'entraînement : `bpr-011`, `bpr-013`

### or-16 · Distinguez l'actif immobilisé, l'actif circulant, la charge et le passif.

*Thème : BIC — principes · probabilité ★★★ · TD*

- Actif immobilisé : l'art. 38 quater de l'annexe III au CGI ne nomme aucun article, il impose seulement de respecter les définitions du plan comptable général, sauf incompatibilité avec les règles d'assiette de l'impôt. La définition est à l'art. 211-1 PCG — élément identifiable du patrimoine, valeur économique positive, ressource contrôlée du fait d'événements passés, avantages économiques futurs attendus —, l'art. 211-6 y ajoutant, pour les immobilisations corporelles, l'utilisation au-delà de l'exercice en cours ; l'art. 212-1 PCG ne pose que les deux conditions d'inscription à l'actif, avantages économiques futurs probables et coût ou valeur évaluable avec une fiabilité suffisante.
- Il n'existe aucun seuil légal : le critère de principe est la définition comptable de l'actif. Les 500 euros HT sont une tolérance de l'administration (BOI-BIC-CHG-20-30-10), limitée aux petits matériels et outillages, aux matériels et mobiliers de bureau et aux logiciels, et rédigée en termes d'autorisation — un bien de moins de 500 euros HT qui répond à la définition d'un actif peut parfaitement être immobilisé et amorti, c'est une décision de gestion. Les travaux qui allongent la durée de vie d'une immobilisation sont immobilisés, non déductibles.
- Charge (art. 511-1 PCG) : dépense qui ne répond pas aux conditions cumulées de définition et de comptabilisation des actifs, déductible immédiatement ; l'immobilisation, elle, ne se déduit que par amortissement et sa sortie relève du régime des plus-values professionnelles.
- Actif circulant : ne reste pas durablement mais reste lié à l'activité : stocks, créances clients, disponibilités (trésorerie).
- Passif (art. 321-1 PCG) : élément du patrimoine à valeur négative entraînant une sortie de ressources sans contrepartie équivalente, dette envers un tiers (emprunts, fournisseurs) ; à côté figurent les capitaux propres (compte de l'exploitant, résultat), classés par exigibilité croissante.
- Pas-de-porte : supplément de loyer (charge déductible pour le preneur, produit pour le bailleur) ou indemnité (élément d'actif immobilisé, non déductible immédiatement).
- ⚠️ ton corrigé de TD fait renvoyer l'art. 38 quater de l'annexe III à l'art. 212-1 PCG pour la définition de l'actif immobilisé : inexact deux fois, l'art. 38 quater ne nomme aucun article et la définition est à l'art. 211-1 — si l'examinateur dit 212-1, il cite le texte sur la comptabilisation, pas sur la définition. Ton cours fait par ailleurs des 500 euros HT le plancher de l'actif immobilisé : dis « tolérance », jamais « seuil » ni « plancher ». Et l'art. 511-1 PCG ne parle pas d'une « dépense qui appauvrit l'entreprise » ; la refonte du plan comptable applicable aux exercices ouverts depuis le 1er janvier 2025 ne l'a pas renuméroté.

QCM d'entraînement : `bpr-014`, `bpr-015`, `bpr-016`, `bpr-017`, `bpr-026`

### or-17 · Qu'est-ce que la comptabilité d'engagement (créances acquises et dettes certaines) et quel est le fait générateur des produits et des charges en BIC ?

*Thème : BIC — principes · probabilité ★★★ · TD*

- Comptabilité de caisse (revenus fonciers, traitements et salaires, BNC par principe, micro-BIC) : on retient l'encaissé et le décaissé du 1er janvier au 31 décembre ; comptabilité d'engagement (BIC au réel) : produits et charges sont comptabilisés même non encaissés ou décaissés.
- Art. 38-2 bis CGI : les produits sont rattachés à l'exercice au cours duquel leur fait générateur est intervenu : la livraison pour une vente, l'exécution ou l'achèvement de la prestation pour une prestation de services ; contrats à exécution successive : période par période.
- En droit comptable, le fait générateur retenu est l'émission ou la réception de la facture ; à défaut, le droit fiscal se réfère à l'exigibilité de l'obligation (conclusion du contrat sans terme, échéance sinon).
- Fondement juridique (question de grand oral selon le CM) : le critère fiscal de rattachement est la créance acquise, certaine dans son principe et déterminée dans son montant, et elle l'est indépendamment de la date de son exigibilité et de l'époque effective du recouvrement ; à l'oral, dis « acquise » et non « exigible », en ajoutant que l'art. 1305-2 du code civil réserve l'exigibilité à l'action en paiement — une créance à terme est imposable sans être exigible.
- Principes liés : image fidèle du patrimoine et prudence comptable : on anticipe les pertes et charges probables (provisions, amortissements), jamais les gains latents.
- Conséquence fiscale : en BNC sous la déclaration contrôlée, les amortissements sont déductibles de plein droit (art. 93, 1, 2° CGI), quelle que soit l'option — d'où le registre des immobilisations ; ce sont les provisions qui sont exclues, seules celles pour créances douteuses ou litigieuses étant admises, et seulement chez l'optant. L'option de l'art. 93 A ne joue que sur le rattachement des recettes et des dépenses.
- ⚠️ ton CM justifie la comptabilité d'engagement par l'exigibilité — « le créancier a un droit personnel sur son débiteur du moment que sa créance est exigible » : le raisonnement est bon, le mot est faux, le critère est la créance acquise (art. 38, 2 bis CGI : livraison pour les ventes, achèvement pour les prestations). Il dit aussi que le titulaire de BNC qui n'a pas opté « ne peut ni amortir ni provisionner » : la moitié est fausse, les amortissements sont déductibles de plein droit sous la déclaration contrôlée ; et l'option n'ouvre pas droit à des « provisions pour risques et charges », l'administration n'admettant que les créances douteuses ou litigieuses.

QCM d'entraînement : `bpr-018`, `bpr-019`, `bpr-020`

### or-18 · Quels sont les produits imposables en BIC ? Quel est le sort des subventions, indemnités, abandons de créances et dégrèvements ?

*Thème : BIC — principes · probabilité ★★☆ · TD*

- Pas de définition légale précise (renvoi à l'art. L. 123-12 C. com. et au CGI) ; trois catégories : produits d'exploitation ou hors exploitation, produits financiers, produits exceptionnels.
- Produits d'exploitation : le chiffre d'affaires rattaché à l'objet réel de l'activité, net des remises et ristournes, rattaché à l'exercice selon la comptabilité d'engagement (art. 38-2 bis).
- Produits financiers : dividendes et intérêts perçus par l'entrepreneur individuel relèvent en principe des RCM, mais tolérance administrative les rattachant aux BIC (optimisation de trésorerie) ; les intérêts de retard sont une indemnisation, non un revenu financier.
- Subventions et aides interentreprises (versement, abandon de créance, remise de dette) : imposables car elles augmentent l'actif net ; l'art. 42 septies CGI n'autorise l'étalement, et seulement sur option, que pour les subventions d'équipement versées par l'Union européenne, l'État, une collectivité publique ou un autre organisme public en vue de créer ou d'acquérir une immobilisation déterminée — rapportées au résultat au rythme de l'amortissement du bien financé ou, s'il n'est pas amortissable, par fractions égales sur la durée d'inaliénabilité et, à défaut de clause, sur les dix années suivant l'attribution ; les subventions de fonctionnement et les aides interentreprises sont imposables tout de suite.
- Indemnités : imposables si elles compensent une charge ou une perte déductible (principe de réciprocité) : assurance perte de stock, assurance homme clé ; l'indemnité compensant la perte d'un actif immobilisé (sinistre, expropriation) relève du régime des plus-values professionnelles, la plus-value nette à court terme afférente à des biens amortissables étant étalée par fractions égales sur la durée moyenne d'amortissement déjà pratiquée, au maximum quinze ans (art. 39 quaterdecies, 1 ter), et la plus-value nette à long terme bénéficiant d'un différé d'imposition de deux ans (art. 39 quindecies, I-1, 4e alinéa).
- Autres produits exceptionnels : dégrèvement d'impôt imposable si l'impôt dégrevé était une charge déductible (CET) ; gains de change et écarts de conversion ; l'apport de l'exploitant n'est pas un produit (art. 38, 2). Les pénalités de retard dues entre professionnels (art. L. 441-9 et L. 441-10 C. com.) sont, par dérogation à la règle des créances acquises, rattachées à l'exercice de leur encaissement (art. 237 sexies CGI).
- ⚠️ ton cours range les produits en trois blocs et met dans le troisième les subventions, les indemnités, les dégrèvements et les gains de change : c'est la grille à réciter, et le compte de résultat comporte toujours ces trois rubriques. Sache seulement que la troisième a été resserrée par l'art. 513-5 du plan comptable général (règlement ANC n° 2022-06, exercices ouverts à compter du 1er janvier 2025), qui n'y laisse que les produits et charges liés à un événement majeur et inhabituel : les subventions sont passées en produits d'exploitation, les indemnités d'assurance et les dégrèvements en autres produits de gestion courante. Rien de cela ne change leur caractère imposable, c'est l'art. 38 CGI qui commande. Ton CM place enfin l'étalement de la plus-value de sinistre sous l'art. 42 septies : c'est une confusion, cet article ne vise que les subventions d'équipement.

QCM d'entraînement : `bpr-021`, `bpr-022`, `bpr-023`, `bpr-025`

### or-19 · Quelles sont les conditions générales de déductibilité d'une charge (art. 39 CGI) et quelles charges sont exclues par la loi ?

*Thème : BIC — charges · probabilité ★★★ · TD*

- Fondement : art. 13 CGI (charge engagée pour acquérir ou conserver un revenu) et art. 39 CGI pour les BIC ; trois types de charges : frais généraux, amortissements, provisions.
- Cinq conditions cumulatives : (1) la charge se traduit par une diminution de l'actif net (distinction charge / immobilisation) ; (2) elle est rattachée à l'exercice au cours duquel elle est engagée (fait générateur = la facture, même payée l'année suivante) ; (3) elle est engagée dans l'intérêt de l'entreprise ; (4) elle est régulièrement comptabilisée et appuyée d'une pièce justificative ; (5) sa déduction n'est pas exclue par un texte légal ou réglementaire.
- Intérêt de l'entreprise : notion plus large que l'objet social, appréciée selon les standards de gestion normale ; sanction : acte anormal de gestion (CE 2018, Société Croë Suisse) ; indices : cause du contrat, captation de chiffre d'affaires, bénéficiaire (dépenses personnelles de l'exploitant ou de ses proches exclues).
- Principe d'amoralisme (CE 11 juillet 1983) : une charge comptabilisée et justifiée est déductible sans considération morale ; une condamnation civile est déductible.
- Exclusions légales, à répartir exactement : art. 39, 2, les sanctions pécuniaires et pénalités de toute nature ; art. 39, 2 bis, les sommes versées à des agents publics étrangers ; art. 39, 4, les dépenses somptuaires — chasse, exercice non professionnel de la pêche, résidences de plaisance ou d'agrément, yachts et bateaux de plaisance, sauf outil professionnel — et la fraction de l'amortissement des véhicules de tourisme excédant les plafonds légaux.
- Typologie : charges d'exploitation et hors exploitation, charges financières (intérêts d'emprunt, compte courant d'associé), charges exceptionnelles ; méthode : vérifier chaque condition, traiter en dernier celle qui pose difficulté, réintégrer extra-comptablement la charge non déductible.
- ⚠️ ton CM range les sanctions pénales et administratives sous l'art. 39, 4 : c'est une erreur d'article, le 4 ne contient que les dépenses somptuaires et l'amortissement excédentaire des véhicules de tourisme. La répartition à réciter : 39-2 les sanctions, 39-2 bis la corruption d'agents publics étrangers, 39-4 les dépenses somptuaires. Ton corrigé de TD ajoute l'art. 240 CGI, qui n'exclut rien — c'est une obligation déclarative. Et ne dis jamais « suramortissement » pour la fraction non déductible de l'amortissement d'un véhicule de tourisme : le suramortissement est au contraire une faveur, la déduction exceptionnelle des art. 39 decies et suivants.

QCM d'entraînement : `bch-001`, `bch-003`, `bch-004`

### or-20 · À quelles conditions les cadeaux d'entreprise sont-ils déductibles ?

*Thème : BIC — charges · probabilité ★★★ · TD*

- Art. 39-5 e CGI : les cadeaux de toute nature sont déductibles, à l'exception des objets de faible valeur spécialement conçus pour la publicité, qui restent déductibles mais sous le régime propre de la publicité.
- Condition 1 : cadeaux effectués dans l'intérêt de l'entreprise (fidélisation, prospection, maintien de bonnes relations commerciales) ; condition 2 : valeur non excessive, proportionnée au chiffre d'affaires réalisé avec le client.
- Condition 3 : relever d'une gestion normale, conforme aux usages professionnels et aux règles comptables.
- Condition 4 : au-delà de 3 000 euros par an, inscription obligatoire des cadeaux sur le relevé des frais généraux (art. 54 quater CGI et art. 4 J de l'annexe IV), sous peine de l'amende fiscale de l'art. 1763 CGI.
- Condition 5 : cadeaux justifiés (factures, contrats) et enregistrés comptablement en charge ; à défaut, réintégration extra-comptable.
- Articulation avec la TVA : la TVA sur les biens cédés sans rémunération n'est pas déductible, sauf biens de très faible valeur n'excédant pas 73 euros TTC par objet, par an et par bénéficiaire (art. 28-00 A de l'annexe IV au CGI — avec la lettre A, ni « 28-0 » ni « 28-00 » n'existant dans cette annexe ; montant porté de 69 à 73 euros par l'arrêté du 9 juin 2021 et toujours applicable en 2026) et objets publicitaires.
- ⚠️ ton CM écrit « art. 28-0 annexe IV CGI » et tes fiches « ann. IV art. 28-00 » : le numéro exact est l'art. 28-00 A de l'annexe IV. Le montant, lui, est bon, 73 euros, et il est bien toutes taxes comprises, jamais hors taxes. Ton cours présente enfin les 500 euros HT comme le plancher de l'actif immobilisé : c'est une tolérance administrative, pas un seuil légal.

QCM d'entraînement : `bch-005`, `bch-006`, `bch-007`

### or-21 · À quelles conditions les rémunérations, primes et séminaires offerts aux salariés sont-ils déductibles ?

*Thème : BIC — charges · probabilité ★★☆ · TD*

- Rémunérations (art. 39, 1, 1° CGI) : deux conditions, correspondre à un travail effectif et ne pas être excessives eu égard à l'importance du service rendu ; on compare la prime à la rémunération annuelle du salarié.
- Séminaires et voyages de stimulation : déductibles s'ils sont engagés dans l'intérêt de l'entreprise et visent effectivement à stimuler son activité (CE 31 juillet 1992).
- Pour les salariés, le voyage de stimulation ou de team building ne constitue ni un avantage en nature ni une gratification imposable (CE 31 juillet 1992 et 21 juin 1995).
- Abus si le montant est manifestement disproportionné par rapport au chiffre d'affaires : dépense non déductible, acte anormal de gestion, réintégration.
- Dépense sociale (art. 39) : déductible si elle profite à l'ensemble du personnel dans le cadre d'une politique sociale ; conditions communes : frais justifiés, directement liés à l'activité et proportionnés.
- Indemnités de licenciement : déductibles quel que soit le motif, économique comme personnel, au titre de l'exercice où elles sont engagées (BOI-BIC-CHG-40-40-20, § 90). Ce que l'art. 39, 1, 5°, al. 3 CGI exclut, c'est la seule provision constituée en vue de faire face aux charges liées à un licenciement pour motif économique, pour les exercices clos depuis le 15 octobre 1997.
- ⚠️ ton cours (CM et corrigé de TD) affirme que les indemnités de licenciement pour motif économique ne sont pas déductibles fiscalement, et en déduit que la provision ne l'est pas non plus : la conclusion est la bonne — une provision pour licenciement économique n'est jamais déductible — mais le motif est faux. L'art. 39, 1, 5° n'exclut que la provision, par une exclusion légale autonome ; l'indemnité réellement versée reste une charge déductible, la reprise de la provision étant alors déduite extra-comptablement.

QCM d'entraînement : `bch-008`, `bch-009`, `bch-018`

### or-22 · Qu'est-ce qu'un amortissement ? Quels biens sont amortissables et à quelles conditions l'amortissement est-il déductible ?

*Thème : BIC — charges · probabilité ★★★ · TD*

- Définition : l'art. 214-13 PCG en vigueur dit que « l'amortissement d'un actif est la répartition systématique de son montant amortissable en fonction de son utilisation » — conception issue de la réforme comptable des actifs, obligatoire pour les exercices ouverts depuis le 1er janvier 2005 ; l'usure et l'obsolescence (physique, technique, juridique — un brevet dure 20 ans —, économique) n'y sont plus qu'un indice de perte de valeur déclenchant un test de dépréciation (art. 214-15 et 214-16 PCG). La formule fiscale, que le BOFiP attribue lui-même au PCG (BOI-BIC-AMT-10-10, § 80), reste « constatation de la dépréciation irréversible d'un actif due à l'usure ou à l'obsolescence » : récite les deux en les étiquetant, et n'accroche jamais « dépréciation irréversible » au numéro 214-13. Ce n'est pas une sortie d'argent mais une charge calculée, fondée sur l'image fidèle.
- Conditions de déductibilité : porter sur un actif immobilisé, être effectivement constaté en comptabilité et ne pas être exclu par la loi ; amortissement par composants (toiture, gros œuvre, façade). L'art. 39 CGI ne contient ni seuil de 500 euros ni durée de 12 mois : ces deux repères viennent, l'un d'une tolérance administrative (BOI-BIC-CHG-20-30-10), l'autre de la définition comptable de l'immobilisation corporelle (art. 211-6 PCG).
- Biens non amortissables : terrains et foncier non bâti (CE 23 mai 1938, n° 58028), titres sociaux. Le fonds commercial n'est pas un absolu mais une présomption : l'art. 214-3 PCG présume sa durée d'utilisation non limitée, mais impose de l'amortir lorsqu'elle est limitée — sur 10 ans si elle ne peut être déterminée de façon fiable — et autorise les petites entreprises au sens de l'art. L. 123-16 C. com. à amortir sur 10 ans l'ensemble de leurs fonds commerciaux ; fiscalement, l'art. 39, 1, 2° CGI admet la déduction de cet amortissement pour les fonds acquis du 1er janvier 2022 au 31 décembre 2029, sauf acquisition auprès d'une entreprise liée, la borne ayant été prorogée de quatre ans par l'art. 13 de la loi n° 2026-103 du 19 février 2026 de finances pour 2026. Prends le brevet comme exemple sûr de bien amortissable.
- Calcul : durée d'usage encadrée par l'administration (ordinateur 3 à 5 ans, matériel 5 à 10 ans, immeuble 20 à 25 ans) ; linéaire : annuité = valeur / durée ; prorata temporis depuis la mise en service : annuité × jours d'utilisation / 360.
- Amortissement minimal (art. 39 B CGI) : à la clôture, le cumul des amortissements ne peut être inférieur au linéaire ; obligation comptable même sans bénéfice (art. L. 123-20 C. com., art. 214-7 et 214-11 PCG) ; l'amortissement irrégulièrement différé est définitivement perdu. Attention aux délais : l'art. R. 196-1 LPF donne au contribuable, en règle générale, jusqu'au 31 décembre de la deuxième année suivant la mise en recouvrement, le versement de l'impôt ou l'événement motivant la réclamation ; les trois ans sont le délai de reprise de l'administration (art. L. 169 LPF), que l'art. R* 196-3 LPF ne rend au contribuable que lorsqu'il fait lui-même l'objet d'une rectification.
- Véhicules de tourisme : amortissables s'ils sont nécessaires et affectés à l'activité, mais base plafonnée par l'art. 39, 4 CGI selon les émissions de CO2, en quatre tranches pour les véhicules relevant du dispositif WLTP — 30 000 euros en dessous de 20 g/km, 20 300 euros de 20 à moins de 50 g, 18 300 euros dans le cas général, 9 900 euros au-delà de 160 g/km pour les véhicules acquis depuis le 1er janvier 2021 (165 g avant) ; montants inchangés depuis 2021, que la loi de finances pour 2026 n'a pas touchés. Base TTC, car la TVA n'est pas récupérable. La qualification ne dépend pas du nombre de places : l'art. L. 421-2 du code des impositions sur les biens et services, réécrit par la loi n° 2025-127 du 14 février 2025, vise les véhicules de catégorie M1, sauf usage professionnel ou d'habitation, et, parmi les N1, ceux que désigne l'art. D. 421-1 CIBS.
- ⚠️ ton cours attribue à l'art. 214-13 PCG la définition fiscale de l'amortissement, fait des 500 euros HT une condition de l'art. 39, retient un seuil de 200 g de CO2/km avec des plafonds de 10 000 et 20 000 euros, dit le fonds de commerce non amortissable et attache un « délai de 3 ans » à l'art. R. 196-1 LPF : cinq points à rectifier, détaillés dans les puces ci-dessus. Le barème de 200 g était celui des véhicules acquis ou loués jusqu'au 31 décembre 2016, avant la refonte opérée par l'art. 70 de la loi de finances pour 2017. La conclusion du cours, en revanche, reste juste et c'est elle qu'on attend : l'amortissement irrégulièrement différé est définitivement perdu (art. 39 B CGI).

QCM d'entraînement : `bch-010`, `bch-012`, `bch-013`, `bch-014`, `bch-019`

### or-23 · Quelles sont les cinq conditions de déductibilité d'une provision ?

*Thème : BIC — charges · probabilité ★★★ · TD*

- Définition : constatation par anticipation d'une charge ou d'une perte future que des événements en cours rendent probable, précisée dans sa nature et son montant ; obligatoire en comptabilité (image fidèle, prudence), révisable à la hausse ou à la baisse ; déductible sous les conditions de l'art. 39 CGI.
- Condition 1 : la provision fait face à une perte ou charge elle-même déductible (pas de provision déductible pour une amende, une sanction pénale, l'IR ou un licenciement économique, art. 39, 1, 5°) ; rédaction du TD : indiquer qu'elle ne figure pas sur la liste des provisions non déductibles.
- Condition 2 : perte ou charge nettement précisée, individualisée dans sa nature et son montant (pour un litige, les prétentions de la partie adverse suffisent).
- Condition 3 : probable et non simplement éventuelle (un impayé de 12 mois rend la perte probable ; l'assignation rend le litige probable ; statistiques internes admises, statistiques nationales interdites).
- Condition 4 : la probabilité résulte d'un événement dont le fait générateur est intervenu au cours de l'exercice (se placer à la réalisation de la prestation, non au paiement ; créance toujours impayée à la clôture).
- Condition 5 : provision effectivement comptabilisée dans l'exercice concerné.
- Licenciement pour motif personnel : la charge devient probable à l'envoi de la convocation à l'entretien préalable pendant l'exercice ; si la convocation est postérieure à la clôture, la charge reste éventuelle et la provision est réintégrée, à rattacher à l'exercice de la convocation.

QCM d'entraînement : `bch-015`, `bch-016`, `bch-017`, `bch-020`

### or-24 · Qu'est-ce qu'une plus-value professionnelle et comment la calcule-t-on (art. 39 duodecies CGI) ? Quels sont les régimes spéciaux ?

*Thème : BIC — plus-values · probabilité ★★★ · TD*

- Art. 39 duodecies et suivants CGI : profit ou perte exceptionnel né de la sortie d'un élément de l'actif immobilisé du patrimoine de l'entreprise (entreprise individuelle ou société à l'IR) ; régime distinct du résultat courant, avec des régimes de faveur pour favoriser le réinvestissement et la transmission ; les actifs circulants relèvent du résultat ordinaire.
- Opérations génératrices : toute cession à titre onéreux au sens fiscal (vente, échange, apport en société, cession du fonds de commerce), la migration du bien vers le patrimoine privé, les sorties involontaires indemnisées (expropriation, sinistre, vente forcée)  ; la transmission à titre gratuit est également génératrice, l'art. 41 CGI se bornant à reporter l'imposition sur option, avec exonération définitive après cinq ans de poursuite de l'activité.
- Calcul : plus-value = prix de cession − valeur nette comptable ; VNC = prix d'acquisition − amortissements pratiqués ; pour un bien non amortissable, VNC = valeur d'origine ; pour une clientèle créée par l'exploitant, VNC nulle, la plus-value égale le prix de cession.
- Pas d'imposition d'une plus-value latente (aucune contrepartie perçue) ; la moins-value latente est provisionnée et la provision est déductible.
- Régimes spéciaux : éléments non utilisés pour l'activité (inscrits au bilan sans y être affectés) : plus-values des particuliers (fin de la théorie du bilan) ; sinistres et expropriations : étalement de la plus-value nette à court terme afférente à des biens amortissables, par fractions égales sur la durée moyenne d'amortissement déjà pratiquée et au plus sur quinze ans (art. 39 quaterdecies, 1 ter — le cours cite par erreur l'art. 42 septies, propre aux subventions d'équipement), et différé d'imposition de deux ans de la plus-value nette à long terme (art. 39 quindecies, I-1, 4e alinéa) ; biens migrants (art. 151 sexies) : le bien qui a figuré une partie du temps dans le patrimoine privé voit cette fraction calculée selon les règles des plus-values des particuliers, dans un sens comme dans l'autre, et non seulement du professionnel vers le privé.

QCM d'entraînement : `bpv-001`, `bpv-002`, `bpv-003`

### or-25 · Comment qualifie-t-on une plus-value ou une moins-value professionnelle à court terme ou à long terme ?

*Thème : BIC — plus-values · probabilité ★★★ · TD*

- Art. 39 duodecies 2 à 5 et 39 quindecies CGI : deux critères combinés, la durée de détention (moins de deux ans, ou deux ans au moins) et le caractère amortissable ou non du bien.
- Biens non amortissables (terrain, fonds de commerce, droit au bail, titres) : détention inférieure à 2 ans = court terme ; d'au moins 2 ans = long terme, pour la plus-value comme pour la moins-value.
- Biens amortissables détenus moins de 2 ans : plus-value intégralement à court terme.
- Biens amortissables détenus au moins 2 ans : plus-value scindée, à court terme à hauteur des amortissements déduits (la revente récupère la déduction fiscale antérieure), à long terme pour l'excédent.
- Moins-values sur biens amortissables : toujours à court terme quelle que soit la durée de détention, car une VNC supérieure à la valeur réelle révèle une insuffisance d'amortissement que la loi permet de compenser.
- Compensation : au sein d'un exercice, les plus et moins-values de même nature se compensent (court terme avec court terme, long terme avec long terme), jamais entre elles ; on obtient une plus ou moins-value nette à court terme et une plus ou moins-value nette à long terme.

QCM d'entraînement : `bpv-004`, `bpv-005`

### or-26 · Quel est le régime d'imposition des plus-values et moins-values nettes à court terme et à long terme ?

*Thème : BIC — plus-values · probabilité ★★★ · TD*

- Plus-value nette à court terme (art. 39 duodecies 2 et 4) : ajoutée au résultat imposable et taxée comme un bénéfice ordinaire au barème progressif, avec les cotisations sociales des indépendants ; option pour l'étalement de l'imposition sur 3 ans (art. 39 quaterdecies), impossible en cas de cessation d'activité ou de départ à la retraite.
- Moins-value nette à court terme : déductible du résultat comme une charge ordinaire ; si le bénéfice est insuffisant, la fraction non imputée devient un déficit reportable de droit commun imputable sur le revenu global.
- Plus-value nette à long terme (art. 39 duodecies 3 et 5, art. 39 quindecies) : taux proportionnel de 12,8 % d'impôt sur le revenu + 18,6 % de prélèvements sociaux, soit 31,4 % depuis l'imposition des revenus 2025 — 30 % jusqu'aux revenus de 2024, la CSG sur les revenus du patrimoine étant passée de 9,2 % à 10,6 % par l'art. 12 de la loi n° 2025-1403 du 30 décembre 2025 de financement de la sécurité sociale pour 2026 ; imposition à côté du résultat, hors barème.
- Moins-value nette à long terme : non déductible du résultat ; tunnelisation : imputable uniquement sur les plus-values nettes à long terme des 10 exercices suivants, perdue au-delà.
- Un déficit professionnel antérieur non encore imputé sur le revenu global peut s'imputer sur une plus-value nette à long terme.
- ⚠️ ton cours retient 30 % pour la plus-value nette à long terme, soit 12,8 % d'impôt sur le revenu et 17,2 % de prélèvements sociaux : c'était exact jusqu'aux revenus de 2024, c'est 31,4 % depuis. Le IV de l'art. L. 136-8 du code de la sécurité sociale ne maintient les 17,2 % que pour les revenus fonciers, les plus-values immobilières des particuliers, l'épargne-logement, l'assurance-vie et certaines rentes, où les plus-values professionnelles ne figurent pas.

QCM d'entraînement : `bpv-006`, `bpv-007`, `bpv-008`

### or-27 · Présentez l'exonération des plus-values des petites entreprises en fonction des recettes (art. 151 septies CGI).

*Thème : BIC — plus-values · probabilité ★★★ · TD*

- Champ : toute opération faisant sortir un élément de l'actif, y compris la cession isolée d'un actif immobilisé ; cédant : exploitant individuel ou société relevant de l'IR.
- Conditions : activité industrielle, commerciale, artisanale, agricole ou libérale (ICAAL) exercée à titre professionnel (participation personnelle, directe et continue, location-gérance exclue) depuis au moins 5 ans, sauf plus-value réalisée à la suite d'un sinistre ou d'une expropriation.
- Seuils de recettes (chiffre d'affaires moyen des deux derniers exercices) : exonération totale jusqu'à 250 000 euros (ventes) ou 90 000 euros (prestations de services) ; partielle et dégressive jusqu'à 350 000 euros (ventes) et 126 000 euros (prestations) ; activité agricole : 350 000 / 450 000 euros, et 450 000 / 550 000 euros pour les cessions au profit d'un jeune agriculteur aidé (loi de finances pour 2025).
- Exonération partielle proportionnelle ; le corrigé du TD écrit pour les prestations : taux = (recettes − 90 000) / 36 000 ; ⚠️ droit positif : la fraction exonérée est (126 000 − recettes) / 36 000 pour les prestations et (350 000 − recettes) / 100 000 pour les ventes (le TD inverse la formule).
- Portée : toutes les plus-values, à court et long terme, mobilières et immobilières (exclus : terrains à bâtir et locaux d'habitation des loueurs en meublé non professionnels), pour l'IR ET les prélèvements sociaux : régime le plus favorable quand l'exonération totale est acquise.
- Non cumulable avec l'art. 238 quindecies pour une même opération ; cumulable avec les art. 151 septies A et 151 septies B.

QCM d'entraînement : `bpv-009`, `bpv-010`, `bpv-016`

### or-28 · Présentez l'exonération de l'art. 238 quindecies CGI (transmission d'une entreprise ou d'une branche complète d'activité).

*Thème : BIC — plus-values · probabilité ★★★ · TD*

- Objet : transmission, à titre onéreux ou gratuit, d'une entreprise individuelle, d'une branche complète et autonome d'activité ou d'éléments assimilés (fonds de commerce) ; objectif : pérenniser l'emploi et l'activité.
- Conditions d'activité : activité ICAAL exercée à titre professionnel depuis au moins 5 ans, y compris en location-gérance.
- Condition de valeur : la valeur des éléments transmis, hors immobilier, doit être inférieure à 1 000 000 euros ; exonération totale en dessous de 500 000 euros, partielle entre 500 000 et 1 000 000 euros selon le taux (1 000 000 − valeur des éléments cédés) / 500 000 ; aucune exonération au-delà d'un million. Le V de l'article écarte les biens immobiliers bâtis ou non bâtis, et les droits ou parts de sociétés à prépondérance immobilière, non seulement de l'exonération mais aussi de l'appréciation du seuil (BOI-BIC-PVMV-40-20-50) : on raisonne hors immobilier des deux côtés. Seuils portés à 700 000 et 1 200 000 euros lorsque la transmission est faite au profit d'un jeune agriculteur bénéficiaire des aides à l'installation.
- Absence de contrôle en cas de cession à titre onéreux à une société : le cédant ne doit ni détenir, directement ou indirectement, plus de 50 % des droits de vote ou des droits dans les bénéfices sociaux du cessionnaire, ni en exercer la direction effective, au moment de la cession et pendant les 3 années qui suivent (art. 238 quindecies, II-3° et IV) ; exactement 50 % reste admis ; condition propre aux transmissions à titre onéreux.
- Portée : plus-values mobilières à court et long terme, IR et prélèvements sociaux ; les immeubles bâtis ou non bâtis sont exclus ; option sur papier libre lors de la déclaration de cessation selon l'administration, assouplie par la jurisprudence.
- Non cumulable avec l'art. 151 septies pour une même opération ; cumulable avec les art. 151 septies A et B.
- ⚠️ ton CM apprécie le seuil sur le prix de cession global de l'entreprise, immeubles compris : c'est ton corrigé de TD qui a raison, le V de l'art. 238 quindecies écarte l'immobilier du seuil comme de l'exonération. Ton corrigé de TD écrit en revanche que le cédant doit détenir « moins de 50 % » du cessionnaire : le texte dit « pas plus de 50 % », donc 50 % pile reste admis.

QCM d'entraînement : `bpv-011`, `bpv-012`

### or-29 · Présentez les exonérations des art. 151 septies A (départ à la retraite) et 151 septies B (immeubles d'exploitation) et le cumul des régimes.

*Thème : BIC — plus-values · probabilité ★★★ · TD*

- Art. 151 septies A, conditions : cession de l'entreprise individuelle, du fonds de commerce ou de l'intégralité des parts d'une société à l'IR par un associé y exerçant son activité ; activité ICAAL professionnelle depuis plus de 5 ans (location-gérance admise) ; PME : moins de 250 salariés, chiffre d'affaires inférieur à 50 millions d'euros ou total de bilan inférieur à 43 millions, capital non détenu à 25 % ou plus par des non-PME.
- Art. 151 septies A, retraite : le cédant cesse toute fonction dans l'entreprise et fait valoir ses droits à la retraite dans les 2 ans avant ou après la cession ; pas de contrôle du cessionnaire.
- Art. 151 septies A, portée : exonération totale d'IR des plus-values à court et long terme, mais les prélèvements sociaux restent dus (18,6 % sur le long terme depuis les revenus 2025) ; immeubles exclus ; l'étalement de l'art. 39 quaterdecies ne joue pas (cessation d'activité).
- Art. 151 septies B, champ : plus-values à long terme sur immeubles bâtis ou non bâtis, droits de crédit-bail immobilier, parts de sociétés à prépondérance immobilière, inscrits à l'actif immobilisé et affectés à l'exploitation (locaux, ateliers, bureaux) ; exclus : immeubles de placement et terrains à bâtir ; 5 ans d'affectation.
- Art. 151 septies B, calcul : aucun abattement pendant les 5 premières années, puis 10 % par année de détention au-delà de la 5e, soit exonération totale après 15 ans ; seules les années complètes comptent ; ne porte que sur la fraction à long terme (la fraction à court terme des amortissements reste imposée) ; l'abattement réduit la plus-value elle-même, il joue donc pour l'IR comme pour les prélèvements sociaux (le CM Sibylle note l'inverse : c'est inexact, sa mise en garde vaut pour le 151 septies A).
- Cumul : 151 septies et 238 quindecies exclusifs l'un de l'autre, tous deux cumulables avec 151 septies A et B ; ordre de traitement du cas pratique : 151 septies B, 151 septies A, 151 septies, 238 quindecies ; 151 septies A est le moins intéressant (pas les prélèvements sociaux, condition de retraite).

QCM d'entraînement : `bpv-013`, `bpv-014`, `bpv-015`

### or-30 · Quels sont les régimes d'imposition des BIC : micro-BIC, réel simplifié, réel normal ?

*Thème : BIC — régimes d'imposition · probabilité ★★★ · TD*

- Deux approches des charges : forfaitaire (micro-BIC, art. 50-0 CGI) ou à l'euro près (régime réel, art. 302 septies A bis CGI) ; le traitement fiscal est identique entre réel simplifié et réel normal, seules les obligations déclaratives diffèrent.
- Micro-BIC de plein droit si le chiffre d'affaires hors taxes de l'année civile précédente ou de la pénultième année n'excède pas 203 100 euros (ventes et assimilées) ou 83 600 euros (prestations de services) — seuils actualisés tous les trois ans, applicables aux années 2026, 2027 et 2028, dans la rédaction de l'art. 50-0 CGI issue du décret n° 2026-562 du 29 juin 2026 ; bénéfice = chiffre d'affaires − abattement forfaitaire de 71 % (ventes) ou 50 % (prestations), jamais inférieur à 305 euros, un troisième taux de 30 % s'appliquant depuis la loi du 19 novembre 2024 aux meublés de tourisme non classés, qui ont un seuil propre de 15 000 euros.
- Micro : comptabilité de caisse (dérogation aux créances acquises et dettes certaines), ni amortissement ni provision, jamais de déficit ; les plus-values professionnelles se calculent comme si le bien avait été amorti.
- Réel simplifié : obligatoire au-delà des seuils du micro, sur option en dessous ; comptabilité d'engagement ; limites supérieures de 945 000 euros (ventes de biens, restauration, logement) et 286 000 euros (autres activités) pour 2026, avec des limites majorées de 1 040 000 et 323 000 euros. Ces limites ne sont pas dans le CGI : le III-b de l'art. 302 septies A bis renvoie à l'art. L. 162-4 du code des impositions sur les biens et services, les montants applicables étant constatés par arrêté (art. A162-7 CIBS, arrêté du 27 janvier 2026).
- Réel normal : au-delà de ces seuils ; mêmes règles fiscales, obligations comptables et déclaratives plus lourdes ; méthode du TD : comparer le chiffre d'affaires aux seuils et conclure sur le régime applicable.
- Au régime réel, un déficit BIC professionnel s'impute sur le revenu global et le reliquat se reporte pendant 6 ans.
- ⚠️ les seuils de ton cours sont ceux de 2023-2025 : 188 700 / 77 700 euros pour le micro-BIC, 840 000 / 254 000 euros pour le réel simplifié (le corrigé de TD citant même 818 000 / 247 000 euros, valeurs des années 2020 à 2022). Depuis le 1er janvier 2026 : 203 100 / 83 600 euros au micro, 945 000 / 286 000 euros au réel simplifié. Le TD a raison, en revanche, sur le texte, et c'est ce qui fait la différence à l'oral : ces limites relèvent de l'art. L. 162-4 CIBS, non du CGI. Le fond de la question ne change pas : entre réel simplifié et réel normal, ce sont les obligations comptables et déclaratives qui diffèrent, pas le traitement fiscal.

QCM d'entraînement : `brg-001`, `brg-002`, `brg-003`, `brg-004`, `brg-005`, `brg-006`

### or-31 · Comment passe-t-on du résultat comptable au résultat fiscal ? Qu'est-ce qu'une réintégration et une déduction extra-comptables ?

*Thème : BIC — régimes d'imposition · probabilité ★★★ · TD*

- Fondement : art. 38 quater annexe III CGI, le droit fiscal suit le droit comptable sauf dérogation ; résultat fiscal = résultat comptable + réintégrations − déductions (tableau 2058-A de la liasse fiscale).
- Réintégrations extra-comptables : charges comptabilisées mais non déductibles fiscalement, qui majorent le résultat fiscal — amendes et pénalités (art. 39, 2), sommes versées à des agents publics étrangers (art. 39, 2 bis), dépenses somptuaires (art. 39, 4), fraction non déductible de l'amortissement des véhicules de tourisme (même art. 39, 4), provisions non déductibles (licenciement économique, convocation postérieure à la clôture, amende), cadeaux excessifs ou non justifiés, rémunérations excessives, amortissement d'un terrain.
- Déductions extra-comptables : produits comptabilisés mais exonérés ou imposés à part, qui minorent le résultat fiscal — subventions d'équipement étalées sur option (art. 42 septies), plus-values nettes à long terme imposées à part à 12,8 % (art. 39 quindecies, I, 1), soit 31,4 % avec les prélèvements sociaux de 18,6 % depuis les revenus 2025, plus-values exonérées (art. 151 septies, 238 quindecies), certains produits financiers.
- Produits non comptabilisés mais imposables à ajouter : remise de dette ou dégrèvement passés directement au compte de l'exploitant (variation d'actif net, art. 38-2).
- Neutralisation des apports et prélèvements de l'exploitant (art. 38, 2 CGI) : un apport n'est pas un produit, un prélèvement n'est pas une charge.
- Méthode du TD : examiner produit par produit s'il est imposable et charge par charge si elle est déductible, puis retraiter ce que le comptable a déduit ou omis.
- ⚠️ ne dis pas « suramortissement des véhicules de tourisme » pour une réintégration : le suramortissement est une faveur, la déduction exceptionnelle des art. 39 decies et suivants du CGI ; ce qui se réintègre, c'est la fraction de l'amortissement qui dépasse le plafond de l'art. 39, 4 — dis « amortissement excédentaire » ou « fraction non déductible de l'amortissement ». Et la plus-value nette à long terme n'est plus taxée à 30 % mais à 31,4 %.

QCM d'entraînement : `brg-007`, `brg-009`, `brg-010`, `brg-017`

### or-32 · Définissez les bénéfices non commerciaux (art. 92 CGI) et présentez leur détermination et leurs régimes d'imposition.

*Thème : BIC — régimes d'imposition · probabilité ★★☆*

- Art. 92 CGI, trois sources : les professions libérales proprement dites (activités civiles où les ressources intellectuelles priment — médecins, architectes) ; les produits des charges et offices, qui ne visent que les offices des officiers publics et ministériels (notaires, huissiers, commissaires-priseurs, greffiers des tribunaux de commerce, avocats aux Conseils) ; les revenus inclassables ne relevant d'aucune autre catégorie.
- Théorie de l'accessoire : les actes de commerce accessoires d'un professionnel libéral restent imposés en BNC, par l'attraction du 2 du I de l'art. 155 CGI ; le bon exemple est le chirurgien-dentiste qui vend des appareils de prothèse à des personnes dont il n'assure pas le traitement — le pharmacien d'officine, lui, est commerçant, et les bénéfices de son officine sont imposés en BIC.
- Détermination (art. 93) : recettes encaissées − dépenses payées, comptabilité de caisse ; option pour les créances acquises et dettes certaines (art. 93 A), qui ne joue que sur le rattachement. Les amortissements sont déductibles de plein droit sous la déclaration contrôlée (art. 93, 1, 2°), avec ou sans option — d'où le registre des immobilisations ; les provisions, elles, sont exclues, seules celles pour créances douteuses ou litigieuses étant admises, et seulement chez l'optant : aucune provision pour risques et charges n'est déductible en BNC.
- Actif professionnel : critère de la nécessité à l'exercice de la profession, plus rigoureux que l'utilité retenue en BIC.
- Micro-BNC (art. 102 ter) : recettes de l'année civile précédente ou de la pénultième année n'excédant pas 83 600 euros depuis le 1er janvier 2026 (77 700 euros de 2023 à 2025), seuil aligné sur celui des prestations de services du micro-BIC ; abattement forfaitaire de 34 % représentatif des charges, jamais inférieur à 305 euros.
- Régime réel : la déclaration contrôlée, de plein droit au-delà du seuil ou sur option ; mêmes règles que les BIC.
- ⚠️ ton cours et tes fiches annoncent 177 700 euros pour le micro-BNC : c'est une coquille, un « 1 » de trop devant 77 700, et ce montant ne correspond à aucun seuil ; le seuil est de 83 600 euros pour un oral en 2026. Ton cours illustre par ailleurs la théorie de l'accessoire par « le pharmacien qui vend des prothèses » et range pharmaciens, médecins, notaires et architectes parmi les produits des charges et offices : seuls les notaires y sont. Enfin il affirme qu'à défaut d'option on ne peut ni amortir ni provisionner en BNC : les amortissements sont déductibles de plein droit, et l'option n'ouvre pas droit à des provisions pour risques et charges.

QCM d'entraînement : `brg-012`, `brg-013`, `brg-014`, `brg-016`

### or-33 · Quelles sont les six étapes de la liquidation de l'impôt sur le revenu ?

*Thème : Liquidation de l'IR · probabilité ★★★*

- Étape 1 (champ d'application) : déterminer les membres du foyer fiscal (art. 6 CGI, personnes à charge art. 195 et suivants) et le domicile fiscal de chacun (art. 4 A et 4 B).
- Étape 2 (assiette) : pour chaque membre et chaque catégorie (TS, RF, RCM, plus-values, BIC, BNC, BA), revenu brut − charges selon le régime micro ou réel = revenu net catégoriel.
- Étape 3 (assiette) : revenu global brut = somme des revenus nets catégoriels (art. 13 et 156) ; les déficits professionnels (BIC, BNC) s'imputent sans limite, les déficits non professionnels ne s'imputent qu'entre eux, sauf le déficit foncier dans la limite de 10 700 euros (art. 156, I-3°).
- Étape 4 (assiette) : revenu global net imposable = revenu global brut − charges déductibles du revenu global (pensions alimentaires, art. 156 II 2° ; fraction déductible de la CSG, art. 154 quinquies II ; épargne retraite, art. 163 quatervicies — trois textes distincts, et non le seul art. 156 II) − abattements (art. 157 bis pour le contribuable de plus de 65 ans ou invalide ; art. 196 B pour le rattachement d'un enfant marié, pacsé ou chargé de famille).
- Étape 5 (liquidation) : IR brut = nombre de parts (art. 194-195), quotient familial = revenu net imposable / parts (art. 193), barème progressif par tranches (art. 197) puis multiplication par le nombre de parts ; plafonnement de l'avantage du quotient familial et décote.
- Étape 6 (liquidation) : IR net = IR brut − réductions d'impôt − crédits d'impôt, dans cet ordre ; puis contribution exceptionnelle sur les hauts revenus (art. 223 sexies) et paiement par prélèvement à la source.

QCM d'entraînement : `liq-001`, `liq-002`, `liq-015`

### or-34 · Quelles charges sont déductibles du revenu global (art. 156 II CGI) et quels abattements s'appliquent (art. 196 B) ?

*Thème : Liquidation de l'IR · probabilité ★★☆*

- Charges non rattachables à une catégorie, déduites du revenu global brut : les pensions alimentaires (art. 156 II 2° CGI), la fraction déductible de la CSG assise sur les revenus du patrimoine, 6,8 points (art. 154 quinquies II), et les versements sur les plans d'épargne retraite (art. 163 quatervicies) — trois rubriques distinctes de la déclaration, que ton cours range à tort sous le seul art. 156 II.
- Pension versée en exécution d'une décision de justice, ou à un enfant mineur hors décision de justice : intégralement déductible.
- Pension aux ascendants dans le besoin : déductible pour son montant réel justifié ; la déduction sans justification — 4 075 euros pour les revenus 2025 — n'est pas un plafond de pension mais un forfait admis lorsqu'on recueille sous son toit un ascendant de plus de 75 ans ; versement possible à l'établissement d'accueil.
- Pension à un enfant majeur non rattaché et dans le besoin : plafond de 6 855 euros par an et par enfant pour les revenus 2025, doublé à 13 710 euros si l'on subvient seul aux besoins d'un enfant marié, pacsé ou chargé de famille ; ce plafond joue même si un juge a fixé la pension, l'absence de plafond ne valant que pour l'enfant mineur et l'ex-époux. Alternative : le rattachement, ouvert aux majeurs de moins de 21 ans sur option et de moins de 25 ans en cas d'études.
- Deux abattements, deux articles : art. 157 bis pour le contribuable de plus de 65 ans au 31 décembre de l'année d'imposition ou invalide — 2 822 euros si le revenu net global n'excède pas 17 670 euros, 1 411 euros entre 17 670 et 28 430 euros, pour les revenus 2025 ; art. 196 B pour celui qui accepte le rattachement d'un enfant marié, pacsé ou chargé de famille — 6 855 euros par personne rattachée, revenus 2025.
- ⚠️ ton cours range les trois charges sous le seul art. 156 II et met l'abattement des plus de 65 ans à l'art. 196 B : la règle de fond est juste, ces charges se déduisent du revenu global et non d'une catégorie, mais aucun de ces deux renvois ne tient. Ses chiffres sont d'un millésime périmé, celui de son barème (revenus 2022) : 3 786 euros pour l'ascendant, qui valent 4 075 euros, et 6 368 euros pour l'enfant majeur comme pour l'abattement de rattachement, qui valent 6 855 euros pour les revenus 2025. Deux idées reçues enfin : une décision de justice ne fait pas tomber le plafond quand la pension va à un enfant majeur, et le forfait ascendant suppose l'accueil sous son toit.

QCM d'entraînement : `liq-003`, `liq-004`

### or-35 · Expliquez le quotient familial (parts, majorations, plafonnement) et le barème progressif de l'IR.

*Thème : Liquidation de l'IR · probabilité ★★★*

- Art. 193 CGI : quotient familial = revenu net global imposable / nombre de parts ; il atténue la progressivité du barème ; situation appréciée au 1er janvier, ou au 31 décembre si plus favorable.
- Parts (art. 194 et 195) : célibataire ou concubin 1 part ; couple marié ou pacsé 2 parts ; les deux premières personnes à charge 0,5 part chacune, 1 part entière à partir de la troisième.
- Majorations de 0,5 part cumulables (art. 195) : parent isolé ayant assumé seul la charge d'un enfant pendant cinq ans ; titulaire d'une pension militaire d'invalidité ou d'une pension d'invalidité pour accident du travail d'au moins 40 % ; titulaire de la carte mobilité inclusion mention invalidité, délivrée à partir de 80 % d'incapacité — la carte d'invalidité n'existe plus sous ce nom depuis le 1er janvier 2017. Le veuf ayant des enfants à charge n'a pas de majoration : l'art. 194 I le range avec les contribuables mariés, donc 2 parts auxquelles s'ajoutent celles des enfants, sans limitation à l'année du décès. Enfants de parents séparés sans décision judiciaire : rattachement au parent aux revenus les plus élevés.
- Barème par tranches (art. 197) : les cinq taux n'ont pas bougé — 0, 11, 30, 41 et 45 % — mais les seuils sont indexés chaque année. Pour les revenus de 2025 (loi n° 2026-103 du 19 février 2026 de finances pour 2026, art. 4, indexation de 0,9 %) : 0 % jusqu'à 11 600 euros ; 11 % de 11 600 à 29 579 euros ; 30 % de 29 579 à 84 577 euros ; 41 % de 84 577 à 181 917 euros ; 45 % au-delà de 181 917 euros. On additionne l'impôt de chaque tranche pour une part, puis on multiplie par le nombre de parts.
- Plafonnement de l'avantage du quotient familial (art. 197 I-2) : l'économie d'impôt procurée par chaque demi-part supplémentaire est limitée à 1 807 euros pour les revenus 2025, et à 4 262 euros pour la part entière attachée au premier enfant du parent vivant seul ; méthode : impôt calculé sans les personnes à charge − impôt avec, l'écart ne pouvant dépasser le plafond par demi-part.
- Décote : atténue les effets de seuil pour les contribuables faiblement imposés, calculée automatiquement par l'administration.
- ⚠️ ton cours donne le barème des revenus 2022 (10 777 / 27 478 / 78 570 / 168 994 euros), parle d'une « carte d'invalidité à plus de 40 % » et classe le veuvage parmi les majorations de 0,5 part « pour l'année du décès ». Le barème en vigueur est celui des revenus 2025 ; le seuil de 40 % vise les pensions militaires d'invalidité et d'accident du travail, la demi-part liée à une carte supposant la carte mobilité inclusion mention invalidité, à partir de 80 % ; et le veuf avec enfants à charge conserve les 2 parts du couple, sans limitation dans le temps — son avantage est donc plus grand qu'une demi-part, et il dure.

QCM d'entraînement : `liq-005`, `liq-006`, `liq-012`

### or-36 · Distinguez réduction d'impôt et crédit d'impôt et citez les dispositifs du cours avec leurs chiffres.

*Thème : Liquidation de l'IR · probabilité ★★★*

- Ordre d'imputation sur l'impôt brut : d'abord les réductions, puis les crédits ; IR net = IR brut − réductions − crédits.
- Réduction d'impôt : diminue l'impôt dû mais ne peut jamais dépasser l'impôt (pas de remboursement) ; crédit d'impôt : créance sur l'État, l'excédent est remboursé au contribuable.
- Réduction pour frais de scolarité (art. 199 quater F) : 61 euros par enfant au collège, 153 euros au lycée, 183 euros dans l'enseignement supérieur (hors apprentis).
- Réduction pour dons (art. 200) : 66 % des sommes versées aux organismes d'intérêt général ou reconnus d'utilité publique, dans la limite de 20 % du revenu imposable ; 75 % pour les premiers 2 000 euros versés aux organismes d'aide aux personnes en difficulté — dons dits Coluche : repas, logement, soins, et accompagnement des victimes de violences domestiques —, plafond porté de 1 000 à 2 000 euros par la loi de finances pour 2026 (loi n° 2026-103 du 19 février 2026) pour les dons effectués depuis le 14 octobre 2025, soit 1 500 euros de réduction au maximum ; 66 % au-delà.
- Crédit pour l'emploi d'un salarié à domicile (art. 199 sexdecies, 3) : 50 % des dépenses, plafonnées à 12 000 euros par an, majorés de 1 500 euros par enfant à charge (750 euros en garde alternée) et par membre du foyer de plus de 65 ans, sans que le total dépasse 15 000 euros — avec un seul enfant la limite est donc de 13 500 euros ; plafond de 15 000 euros porté à 18 000 euros la première année d'emploi direct, et de 20 000 euros en cas d'invalidité ; sous-plafonds : informatique 3 000 euros, petit bricolage 500 euros, jardinage 5 000 euros.
- Crédit pour frais de garde de jeunes enfants (art. 200 quater B) : enfants de moins de 6 ans, l'âge s'appréciant au 1er janvier de l'année d'imposition selon la doctrine administrative (BOI-IR-RICI-300) et non selon le CGI, gardés hors du domicile (crèche, assistant maternel agréé) ; 50 % des sommes versées, plafonnées à 3 500 euros par enfant, soit 1 750 euros de crédit au maximum.
- ⚠️ ton cours dit que le plafond de 12 000 euros du salarié à domicile passe à 15 000 euros « s'il y a deux enfants ou plus » : le texte majore en réalité de 1 500 euros par enfant à charge et par membre du foyer de plus de 65 ans, sans excéder 15 000 euros — avec un seul enfant, la limite est de 13 500 euros. Autre chiffre périmé : les 1 000 euros du taux majoré de 75 % pour les dons dits Coluche ont été portés à 2 000 euros par la loi de finances pour 2026. Le taux de 50 %, les 15 000 / 18 000 euros de la première année d'emploi direct, les 66 % dans la limite de 20 % du revenu imposable et les 61 / 153 / 183 euros de frais de scolarité sont, eux, exacts.

QCM d'entraînement : `liq-007`, `liq-013`, `liq-014`

### or-37 · Qu'est-ce que la contribution exceptionnelle sur les hauts revenus et comment l'IR est-il payé (prélèvement à la source) ?

*Thème : Liquidation de l'IR · probabilité ★★☆*

- CEHR (art. 223 sexies CGI) : due par foyer fiscal lorsque le revenu fiscal de référence excède 250 000 euros pour une personne seule ou 500 000 euros pour un couple marié ou pacsé.
- Barème par tranches : personne seule, 3 % entre 250 000 et 500 000 euros, 4 % au-delà ; couple, 3 % entre 500 000 euros et 1 million, 4 % au-delà d'un million.
- Prélèvement à la source (art. 204 A et suivants CGI) : supprime le décalage d'un an entre perception du revenu et paiement ; taux calculé d'après l'impôt de l'année précédente, ajustable ; déclaration annuelle en mai de l'année suivante et régularisation au 31 décembre.
- Retenue à la source (art. 204 B) : opérée par l'employeur ou l'organisme payeur sur les salaires, pensions de retraite, allocations de chômage et allocations non exonérées.
- Acomptes (art. 204 C) : versés spontanément par le contribuable pour les BIC, BNC, BA et revenus fonciers ; les autres revenus ne sont pas concernés — pour les revenus de capitaux mobiliers, c'est le prélèvement forfaitaire non libératoire, retenu par l'établissement payeur, qui joue ce rôle.

QCM d'entraînement : `liq-010`, `liq-011`

### or-38 · Quelles sont les trois conditions de l'imposition à la TVA par nature (art. 256 CGI) ? Définissez la livraison de biens, la prestation de services et l'opération complexe.

*Thème : TVA — champ d'application · probabilité ★★★*

- Art. 256 I CGI, conditions cumulatives : une opération (livraison de biens ou prestation de services), réalisée à titre onéreux, par un assujetti agissant en tant que tel ; distinguer opération dans le champ (imposée ou exonérée) et hors champ ; l'assujetti réalise des opérations dans le champ, le redevable paie la taxe au Trésor.
- Livraison de biens corporels (meubles ou immeubles ; l'électricité, le gaz, la chaleur et le froid sont « notamment considérés comme des biens meubles corporels », art. 256, II, 2° CGI) : transfert du pouvoir de disposer d'un bien comme un propriétaire (CJCE, 8 février 1990, Shipping and Forwarding Enterprise Safe BV, aff. C-320/88 ; le CM date l'arrêt de 1988, c'est inexact), plus large que le transfert de propriété : c'est la délivrance ; vise vente, échange, prêt de consommation, apport en société, transfert physique intracommunautaire.
- Prestation de services : définition négative, tout ce qui n'est pas une livraison : contrat d'entreprise, cession de biens incorporels, transport, location, travaux immobiliers, obligation de ne pas faire rémunérée (clause de non-concurrence).
- Principe de l'imposition opération par opération : des taux différents peuvent coexister au sein d'une même activité — vente à consommer sur place 10 % (art. 279, m, CGI), vente à emporter ou à livrer d'un produit alimentaire préparé en vue d'une consommation immédiate 10 % également (art. 279, n), denrée alimentaire conservable, à consommation différée, 5,5 % (art. 278-0 bis, A, 1°), boisson alcoolique 20 % dans tous les cas (renvoi à l'art. 278) ; taux en vigueur au 23 septembre 2026.
- Opération complexe : CJCE 25 février 1999, CPP (aff. C-349/96), un régime unique s'applique lorsque la décomposition serait artificielle ; codifiée à l'art. 257 ter CGI ; réaffirmée par CJUE 4 mars 2021, Frenetikexito (aff. C-581/19), où la Cour relève que les services étaient facturés séparément et qu'on pouvait bénéficier des uns sans les autres — mais n'en fait qu'un indice, non une règle automatique.
- Deux méthodes : la règle de l'accessoire (rapport objectif de sujétion : pour le consommateur moyen, approche in abstracto, l'accessoire n'est pas une fin en soi mais le moyen de bénéficier au mieux du principal, dont il suit le régime) et l'économie générale de l'opération (prestations indissociables sans hiérarchie : on retient l'élément déterminant du consentement, indice du prix de revient ; la ventilation du prix n'est pas décisive).
- ⚠️ ton CM date l'arrêt SAFE du 8 février 1988 : ce sont tes fiches qui ont raison, l'arrêt est du 8 février 1990 (Rec. 1990, p. I-285), même si le numéro d'affaire C-320/88 renvoie à l'année de l'enregistrement. Il note aussi « Décision du même jour Corsica Ferry c/ France » : ce n'est pas un recours contre l'État français, c'est le nom de la société — CE, 9e-10e ch. réunies, 24 avril 2019, n° 418912, société Corsica Ferries France, rendu le même jour que les décisions Xerox (n° 411007 et 411013) ; dans les deux cas, le Conseil d'État écarte l'accessoire parce que la prestation était facultative et facturée à part.
- ⚠️ ton cours illustre les taux par la quiche : 10 % si elle se mange dans les 48 heures, 5,5 % si elle se mange tout de suite. C'est exactement l'inverse. Un produit alimentaire préparé en vue d'une consommation immédiate, même vendu à emporter, relève du taux de 10 % (art. 279, n, du CGI) ; le 5,5 % vise les denrées alimentaires conservables, à consommation différée (art. 278-0 bis, A, 1°) ; la boisson alcoolique reste à 20 % (art. 278). Ton CM te donne d'ailleurs lui-même la bonne piste quelques lignes plus haut, quand il note qu'entre la vente à emporter et le service à table de McDonald's « les taux sont alignés ». Retiens : consommation immédiate 10 %, conservable 5,5 %, alcool 20 % (taux en vigueur au 23 septembre 2026).

QCM d'entraînement : `tvc-001`, `tvc-002`, `tvc-003`, `tvc-017`

### or-39 · Qu'est-ce qu'une opération à titre onéreux (lien direct) et qu'est-ce qu'un assujetti (art. 256 A CGI) ?

*Thème : TVA — champ d'application · probabilité ★★★*

- Titre onéreux : existence d'une contrepartie (art. 1107 C. civ.), sous toute forme ; pas de théorie du juste prix (vente à perte possible), mais le prix vil équivaut à une absence de prix.
- Lien direct (CJCE Apple & Pear, 8 mars 1988) : un bénéficiaire individualisé ou individualisable et une relation nécessaire de réciprocité entre l'opération et la contrepartie.
- Hors TVA faute de lien direct : subventions sans bénéficiaire identifié, indemnités et dommages-intérêts réparant un préjudice, intérêts moratoires, arrhes conservées par l'hôtelier (CJCE 18 juillet 2007, Société thermale d'Eugénie-les-Bains), musicien de rue ; dans la TVA : obligation de non-concurrence rémunérée.
- Assujetti (art. 256 A) : personne qui effectue de manière indépendante une activité économique, quel que soit son statut ; activité économique = activité habituelle, professionnelle, quelle qu'en soit la nature ; l'intention suffit dès le début (CJCE 14 février 1985, Rompelman, aff. 268/83) et la qualité reconnue ne peut être retirée rétroactivement sauf situation frauduleuse ou abusive (CJCE 29 février 1996, INZO, aff. C-110/94 : sécurité juridique) ; la gestion du patrimoine privé est exclue.
- Indépendance : agir pour son propre compte et sous sa responsabilité. L'art. 256 A ne répute non indépendantes que deux catégories de personnes : celles qui sont liées par un contrat de travail ou par tout autre rapport juridique créant des liens de subordination, et les travailleurs à domicile dont les gains sont considérés comme des salaires. Le sportif professionnel n'y figure pas : il n'est hors champ que parce qu'il est salarié de son club, celui qui exerce à son compte étant un assujetti comme un autre. L'associé qui loue un bien à sa SCI agit de manière indépendante (CJCE 27 janvier 2000).
- Agir en tant que tel : dans le cadre de l'activité économique et non de la sphère privée — l'entrepreneur qui vend un bien resté privé (CJCE 4 octobre 1995, Armbrecht, aff. C-291/92), la holding qui cède sa filiale (CJCE 20 juin 1991, Polysar, aff. C-60/90, et 20 juin 1996, Wellcome Trust, aff. C-155/94), et non le seul arrêt Armbrecht auquel le cours rattache les deux hypothèses ; groupe TVA : assujetti unique de l'art. 256 C CGI, depuis le 1er janvier 2021 selon le CM (2023 selon les fiches).
- ⚠️ ton cours dit que « les salariés et les sportifs professionnels sont exclus du champ d'application de la TVA » : la formule n'est exacte que pour le sportif salarié, l'art. 256 A ne visant que la subordination et les travailleurs à domicile. Il date par ailleurs l'arrêt INZO du 9 février 1996 (CM) ou du 9 février 1994 (fiches) : les deux sont faux, l'arrêt est du 29 février 1996 ; et il met sur le compte du seul arrêt du 4 octobre 1995 à la fois la vente d'un bien resté privé et la cession d'une filiale par une holding.

QCM d'entraînement : `tvc-005`, `tvc-006`, `tvc-007`, `tvc-008`

### or-40 · Quelles opérations sont imposables par détermination de la loi (art. 257 CGI) et quelles opérations sont exonérées (art. 261 et suivants, art. 293 B) ?

*Thème : TVA — champ d'application · probabilité ★★★*

- Art. 257 CGI : la loi soumet à la TVA des opérations qui ne remplissent pas les conditions de l'art. 256 — mais il ne vise que les opérations concourant à la production ou à la livraison d'immeubles et les livraisons à soi-même. Les acquisitions intracommunautaires sont à l'art. 256 bis, les importations à l'art. 291, l'agriculture à l'art. 298 bis : la catégorie du cours est bonne, le renvoi est faux.
- Livraison à soi-même : l'assujetti est à la fois fournisseur et client ; TVA collectée et déductible simultanément, pour la neutralité concurrentielle.
- Livraisons d'immeubles : terrains à bâtir obligatoirement taxés ; immeubles neufs (achevés depuis 5 ans au plus) obligatoirement taxés ; immeubles de plus de 5 ans et terrains non à bâtir exonérés, avec option possible.
- Exonération : opération remplissant les conditions mais sortie de l'imposition par la loi, d'interprétation stricte ; trois familles : par secteur, en raison de la taille, exonérations spécifiques.
- Par secteur (art. 261 à 263) : soins dispensés aux personnes par les membres des professions médicales et paramédicales réglementées (art. 261, 4, 1°) — le critère de fond est la finalité thérapeutique de l'acte, prévenir, diagnostiquer, soigner, guérir, le remboursement par la sécurité sociale n'étant qu'un indice, si bien qu'un acte de chirurgie esthétique non remboursé peut rester exonéré lorsque son but thérapeutique est reconnu, tandis que la chirurgie purement esthétique est taxable ; enseignement, organismes sans but lucratif, formation professionnelle continue, clubs sportifs, spectacles, opérations bancaires et de crédit (art. 261 C), assurances (taxe spécifique).
- Taille : franchise en base de l'art. 293 B, dispense de TVA sous des seuils de chiffre d'affaires, ni TVA collectée ni TVA déductible, option possible. Dans sa rédaction en vigueur depuis le 1er mars 2025, et sans changement pour 2026 : 85 000 euros de chiffre d'affaires national total (93 500 euros en cours d'année) pour les ventes, la restauration sur place et l'hébergement ; 37 500 euros (41 250) pour les autres prestations de services ; 50 000 euros (55 000) pour l'activité réglementée des avocats et pour les auteurs et artistes-interprètes, leurs autres opérations relevant de 35 000 euros (38 500).
- Spécifiques : immeubles achevés depuis plus de 5 ans, terrains non à bâtir, locations d'immeubles nus et locations à usage d'habitation (droit au logement), exportations (art. 262). À part : la cession d'une universalité de l'art. 257 bis n'est pas une exonération — le texte dit qu'« aucune livraison de biens ou prestation de services n'est réputée intervenir », et l'article figure dans le code sous les opérations obligatoirement imposables : c'est une dispense de taxation, qui fait du bénéficiaire le continuateur du cédant, lequel reprend à son compte les régularisations de TVA antérieurement déduite (art. 207 de l'annexe II au CGI).
- ⚠️ trois rectifications. Ton cours range sous l'art. 257 les acquisitions intracommunautaires, les importations et l'agriculture : ce sont les art. 256 bis, 291 et 298 bis. Il pose le remboursement par la sécurité sociale comme critère de l'exonération médicale : c'est la finalité thérapeutique, le remboursement n'étant qu'un indice. Et il classe la cession d'universalité de l'art. 257 bis parmi les exonérations : c'est une dispense de taxation, la nuance compte à l'oral. Tes fiches annoncent enfin le seuil unique de 25 000 euros voté dans la loi de finances pour 2025 : cette réforme n'est jamais entrée en application, suspendue dès février 2025 puis définitivement abandonnée par la loi n° 2025-1044 du 3 novembre 2025.

QCM d'entraînement : `tvc-009`, `tvc-011`, `tvc-016`

### or-41 · Quelles opérations exonérées sont imposables sur option ? Expliquez le régime des locations d'immeubles (art. 260 et 261 D) et de la para-hôtellerie.

*Thème : TVA — champ d'application · probabilité ★★☆*

- Art. 260 CGI : option pour la TVA sur la location d'immeuble nu à usage professionnel (clause expresse du bail) et sur la livraison d'un immeuble de plus de 5 ans ou d'un terrain non à bâtir ; l'article 260 ne fixe aucune durée et renvoie au décret : l'option ne peut en principe être dénoncée qu'à compter du 1er janvier de la neuvième année civile qui suit celle où elle a été exercée (art. 194 de l'annexe II au CGI) — le « 5 ans » du cours ne vient d'aucun texte ; intérêt : récupérer la TVA d'amont et éviter les régularisations, utile seulement si le preneur récupère lui-même la TVA.
- Franchise en base (art. 293 B) : les petites entreprises dispensées peuvent opter pour la TVA afin de déduire la taxe sur leurs dépenses.
- Art. 261 D : location d'immeuble nu taxée de plein droit dans trois cas alternatifs (commercialité par ambiance) : le bailleur participe aux résultats du locataire ; la location est le moyen de poursuivre l'exploitation d'un actif commercial (fonds apporté à une société contrôlée) ; elle accroît le chiffre d'affaires et les débouchés du bailleur (centres commerciaux).
- Locations à usage d'habitation : exonération définitive, aucune option ; exception : la para-hôtellerie, taxée de plein droit au taux de 10 % pour ne pas concurrencer l'hôtellerie.
- Critères administratifs initiaux : location à usage d'habitation avec au moins 3 des 4 services hôteliers (petit-déjeuner, fourniture du linge, nettoyage régulier des locaux, accueil de la clientèle même non personnalisé) ; doctrine jugée contraire à la directive par le CE après renvoi à la CJUE.
- Art. 261 D, 4°, dans sa version issue de la loi de finances pour 2024, en deux branches qu'il faut distinguer : le b, prestations d'hébergement du secteur hôtelier ou de secteurs ayant une fonction similaire — durée n'excédant pas trente nuitées, sans préjudice des reconductions, ET local meublé avec au moins 3 des 4 prestations, conditions cumulatives ; le b bis, locations de logements meublés à usage résidentiel, où 3 des 4 prestations suffisent, sans condition de durée. Garde les mots du texte, « secteur hôtelier ou secteurs ayant une fonction similaire » : « location de tourisme » est une glose du cours, et les trente nuitées sont un plafond, jamais un minimum.
- ⚠️ ton cours retient une option de l'art. 260 « irrévocable pendant 5 ans » : ce chiffre ne vient d'aucun texte, l'art. 194 de l'annexe II au CGI interdit de dénoncer l'option avant le 1er janvier de la neuvième année civile qui suit celle où elle a été exercée, et le BOFiP confirme qu'elle s'applique aussi longtemps qu'elle n'a pas été dénoncée. Il parle par ailleurs de « location de tourisme » et d'un contrat « n'excédant pas 30 nuits » sans dire comment le 4° est découpé : réponds « neuvième année civile » et « trente nuitées, sans préjudice des reconductions ».

QCM d'entraînement : `tvc-012`, `tvc-013`, `tvc-014`, `tvc-015`, `tvc-018`

### or-42 · Quelles sont les règles de territorialité des livraisons de biens : livraisons et acquisitions intracommunautaires, exportations, importations ?

*Thème : TVA — territorialité · probabilité ★★★*

- Au sein de l'UE, entre assujettis : principe du pays de destination (TVA du pays de consommation, celle de l'acheteur). Client non assujetti : TVA du pays de départ, sauf ventes à distance au-delà du seuil de 10 000 euros hors TVA de l'art. 259 D CGI, auquel l'art. 258 A se borne à renvoyer depuis le 1er juillet 2021 — seuil unique calculé globalement sur l'ensemble de l'Union, englobant aussi les services de télécommunication, de radiodiffusion, de télévision et fournis par voie électronique, et qui ne doit être dépassé ni pendant l'année civile en cours ni pendant l'année civile précédente ; au-delà, retour au pays d'arrivée, avec le guichet unique OSS. Toujours vérifier la liste des États membres.
- Livraison intracommunautaire exonérée de TVA française (art. 258 et 262 ter CGI) sous six conditions : (1) livraison à titre onéreux ; (2) vendeur assujetti agissant en tant que tel ; (3) acquéreur assujetti ; (4) bien expédié ou transporté de France vers un autre État membre ; (5) acquéreur identifié à la TVA dans son État et numéro communiqué au vendeur ; (6) obligations déclaratives du vendeur respectées (état récapitulatif, art. 289 B).
- Acquisition intracommunautaire (art. 256 bis) : TVA française autoliquidée par l'acquéreur (art. 283-2 bis), collectée et déduite sur la même déclaration : opération neutre ; exigibilité le 15 du mois suivant la livraison ou à la facture si antérieure.
- Régime dérogatoire des PBRD (art. 256 bis) : personnes morales non assujetties et assujettis sans droit à déduction (médecin) dont les acquisitions n'excèdent pas 10 000 euros HT en N et N-1 : pas d'acquisition taxée en France, TVA du vendeur ; option possible pour le régime général.
- Exportation (bien expédié hors UE) : exonération de TVA française (art. 262 CGI) à condition de prouver la sortie du territoire de l'UE (art. 74 annexe III : comptabilité et documents douaniers) ; facturation hors taxe ; droit à déduction d'amont conservé (art. 271) ; services directement liés à l'exportation exonérés (art. 262 I 1°) ; à défaut de justificatif, vente requalifiée taxable.
- Importation (bien entrant en France) : TVA française (art. 291), exigible au dédouanement (art. 293 A), autoliquidée par l'importateur assujetti (art. 283) et déductible à la même date ; logique du pays de consommation (le CM note « TVA du pays de départ » pour l'importation : lecture à corriger par les fiches) ; dans les deux sens, il existe toujours un droit à déduction.
- ⚠️ ton cours apprécie le seuil des petits opérateurs sur la seule année N-1 et le rattache à l'art. 258 A : le seuil est celui de l'art. 259 D, et il s'apprécie en N et en N-1, comme pour les PBRD. Tes fiches citent par ailleurs l'ancien seuil de 35 000 euros HT apprécié pays de destination par pays de destination : il figurait à l'art. 258 B, abrogé au 1er juillet 2021 par l'art. 147 de la loi n° 2019-1479 du 28 décembre 2019. Ce qui a changé, c'est le montant, le périmètre et le calcul global — pas la période d'appréciation, car l'ancien seuil se regardait déjà sur deux années.

QCM d'entraînement : `tvt-001`, `tvt-003`, `tvt-004`, `tvt-009`, `tvt-011`

### or-43 · Où se localise une prestation de services (art. 259 CGI) ? Règle B2B, règle B2C et dérogations.

*Thème : TVA — territorialité · probabilité ★★☆*

- Art. 259, 1° (preneur assujetti, B2B) : TVA du pays du preneur ; TVA française autoliquidée si le preneur est établi en France ; pas de TVA française si le prestataire français facture un preneur établi à l'étranger.
- Art. 259, 2° (preneur non assujetti, B2C) : TVA du pays du prestataire ; TVA française si le prestataire est établi en France.
- Dérogations quelle que soit la qualité du preneur (art. 259 A) : location de moyens de transport de courte durée (1°, lieu de mise à disposition), prestations rattachées à un immeuble (2°, lieu de l'immeuble), transport de passagers (4°, distance parcourue en France), ventes à consommer sur place (5°, lieu d'exécution) ; en B2B : accès aux manifestations culturelles, sportives, scientifiques (5° bis, lieu de la manifestation).
- Dérogations propres au B2C : transport intracommunautaire de biens (3°, lieu de départ), prestations culturelles, artistiques, sportives (5° a, lieu d'exécution), travaux et expertises sur biens meubles corporels et prestations accessoires au transport (6°, lieu d'exécution), intermédiaires transparents (7°, lieu de l'opération principale).
- Prestations immatérielles (art. 259 B) : TVA française si le prestataire est en France et le preneur dans l'UE, ou si le prestataire est hors UE et le preneur dans l'UE avec service utilisé en France ; services de télécommunication (10°), de radiodiffusion et de télévision (11°) et fournis par voie électronique (12°) : l'art. 259 D renvoie aux 10° à 12° de l'art. 259 B et localise la prestation au lieu du preneur, l'art. 98 C de l'annexe III ne donnant qu'une liste indicative des seuls services du 12°.
- Art. 259 C, 1°, dans sa rédaction en vigueur depuis le 31 décembre 2023 : la prestation fournie par un assujetti dont le siège, l'établissement stable ou à défaut le domicile se trouve hors de l'Union, à un preneur non assujetti établi, domicilié ou résidant dans n'importe quel État membre, est imposable en France lorsque l'utilisation ou l'exploitation effectives du service y ont lieu — c'est cette dernière condition, et non la seule présence du preneur en France, qui déclenche la TVA française (sauf art. 259 A et 259 D). Régime des petits opérateurs : sous 10 000 euros, TVA du prestataire, avec faculté de renonciation.
- ⚠️ tes fiches résument l'art. 259 C par « si le preneur particulier est établi en France, la prestation est imposable en France même si le prestataire est hors UE » : ce n'est pas un raccourci, c'est un autre critère, qui laisse tomber la condition d'utilisation ou d'exploitation effectives en France. Elles renvoient aussi à l'art. 98 C de l'annexe III pour les trois catégories de l'art. 259 D : cet article n'illustre que le 12° de l'art. 259 B, les télécoms et la radio-télévision étant nommés dans l'art. 259 B lui-même.

QCM d'entraînement : `tvt-006`, `tvt-007`, `tvt-010`, `tvt-012`

### or-44 · Quelle est l'assiette de la TVA (art. 266-267 CGI) et quelles sont les mentions obligatoires de la facture ?

*Thème : TVA — fait générateur, exigibilité, assiette et taux · probabilité ★★☆*

- Assiette : la base d'imposition est définie au a du 1 de l'art. 266 CGI — et non au seul art. 267 que cite le cours : toutes les sommes, valeurs, biens ou services reçus en contrepartie de la livraison ou de la prestation, soit le prix convenu entre les parties, ses compléments, les intérêts et les frais accessoires refacturés (transport, frais fiscaux, commissions d'intermédiaires).
- Exclus par l'art. 267, II : les escomptes, rabais, remises, ristournes et autres réductions de prix, et les débours engagés au nom et pour le compte du client. Les dépôts de garantie et les intérêts moratoires sont eux aussi hors base, mais pour une autre raison — ils ne sont la contrepartie d'aucune opération — et un dépôt de garantie conservé peut redevenir taxable s'il rémunère un service. Dis « art. 266 et 267 CGI ».
- Entre assujettis, les prix sont réputés hors taxe ; mais CE Section, 14 décembre 1979, n° 11798, Comité de propagande de la banane : le prix stipulé sans mention de TVA est réputé toutes taxes comprises. La présomption est simple, non irréfragable : elle tombe devant une stipulation expresse prévoyant d'ajouter la taxe au prix (CE, 29 juin 2021, n° 442506, SOMUPI ; BOI-TVA-BASE-10-20-20). Conséquence : les acomptes sont TTC ; conversion : HT = TTC / (1 + taux).
- Régimes dérogatoires de la marge, à ancrer article par article : agences de voyages, art. 266, 1, e ; terrains à bâtir et immeubles, art. 268 — mais seulement si l'acquisition par le cédant n'a pas ouvert droit à déduction, et, pour un immeuble achevé depuis plus de cinq ans, seulement s'il a opté (art. 260, 5° bis), à défaut le terrain à bâtir est taxé sur le prix total et l'immeuble ancien reste exonéré ; biens d'occasion et objets d'art, art. 297 A. Les livraisons à soi-même ne relèvent pas d'un régime de marge mais d'une base spéciale, le prix de revient (art. 266, 1, c).
- Facture : force probante, elle prouve la charge et conditionne le droit à déduction (art. 271 II), et déclenche l'exigibilité en cas d'option pour les débits ; mentions obligatoires : prix HT, taux de TVA, montant de la TVA ventilé par taux, montant TTC ; fausses factures = droit pénal des affaires.
- Facturation électronique : en vigueur depuis le 1er septembre 2026 — réception obligatoire pour toutes les entreprises assujetties, émission obligatoire pour les grandes entreprises et les entreprises de taille intermédiaire, et pour les PME et micro-entreprises à compter du 1er septembre 2027, le tout via une plateforme agréée (art. 289 bis CGI, calendrier de la loi de finances pour 2024) ; objectif européen de lutte contre la fraude.
- ⚠️ ton cours rattache toute l'assiette à l'art. 267, dit la présomption du Comité de propagande de la banane irréfragable et annonce une facturation électronique « prévue au 1er janvier 2023 » et sans cesse repoussée. La base est à l'art. 266, 1, a ; la présomption est simple depuis CE, 29 juin 2021, SOMUPI ; et la facturation électronique est en vigueur depuis le 1er septembre 2026. Si ton prof dit encore « reportée », c'est l'état du droit d'avant septembre 2026.

QCM d'entraînement : `tve-001`, `tve-002`, `tve-009`, `tve-011`

### or-45 · Distinguez le fait générateur et l'exigibilité de la TVA (art. 269 CGI) pour les livraisons de biens et les prestations de services.

*Thème : TVA — fait générateur, exigibilité, assiette et taux · probabilité ★★★*

- Art. 269 CGI : le fait générateur est l'événement par lequel les conditions légales de l'exigibilité sont réunies, il fixe la loi applicable (taux, régime) ; l'exigibilité est le droit du Trésor d'exiger le paiement de la TVA collectée, et le moment où naît le droit à déduction chez le client.
- Livraisons de biens corporels (art. 269, 1, a et 2, a) : fait générateur et exigibilité coïncident à la livraison, entendue comme le transfert du pouvoir de disposer du bien comme un propriétaire (délivrance, remise matérielle si la date est incertaine), même si le prix n'est pas encaissé ; condition suspensive : à sa réalisation.
- Acomptes sur livraisons de biens : pour les acomptes encaissés à compter du 1er janvier 2023 (art. 30, I-8° de la loi n° 2021-1900 du 30 décembre 2021 de finances pour 2022, sous l'impulsion de CJUE 31 mai 2018, aff. C-660/16), la TVA est exigible dès l'encaissement, à hauteur de la fraction encaissée. Récite la loi avec sa date et l'entrée en vigueur séparément, jamais « depuis la loi de finances pour 2022 » seul.
- Prestations de services : fait générateur à l'exécution de la prestation (art. 269, 1, a — le même texte que pour les livraisons ; le 1, a bis ne vise que les opérations donnant lieu à des décomptes ou à des encaissements successifs, comme le bail) ; exigibilité à l'encaissement du prix, acomptes compris (art. 269, 2, c) ; régime plus favorable en trésorerie. Le CGI n'emploie ici aucun chiffre romain : dis « art. 269, 1, a » et « art. 269, 2, c », non « 269 I a » ni « 269 II c ».
- Option pour les débits : elle est ouverte par l'art. 269, 2, c du CGI, ses modalités étant à l'art. 77 de l'annexe III — déclaration écrite au service des impôts, option globale portant sur l'ensemble des opérations, effet au premier jour du mois suivant, validité jusqu'à demande écrite de retour au paiement d'après les encaissements. Le prestataire rend ainsi la TVA exigible dès la facturation ; intérêt : le client assujetti déduit plus tôt, son droit à déduction naissant à l'exigibilité chez le fournisseur.
- Régimes particuliers : importation exigible au dédouanement (art. 293 A) ; acquisition intracommunautaire le 15 du mois suivant la livraison ; TVA immobilière (vente d'immeuble à construire) exigible selon les versements.

QCM d'entraînement : `tve-003`, `tve-004`, `tve-010`

### or-46 · Quels sont les taux de TVA et leurs domaines respectifs ?

*Thème : TVA — fait générateur, exigibilité, assiette et taux · probabilité ★★★*

- Taux normal 20 % (art. 278 CGI), applicable sauf disposition spéciale ; l'UE impose un plancher de 15 % ; taux réduits aux art. 278 bis et suivants, d'interprétation stricte.
- Taux intermédiaire 10 % : restauration et ventes à consommer sur place, vente à emporter ou à livrer d'un produit alimentaire préparé en vue d'une consommation immédiate (art. 279, n), hôtellerie et para-hôtellerie, transport de voyageurs, logement, travaux sur les logements achevés depuis plus de deux ans (art. 279-0 bis), médicaments non remboursés, agriculture, et, pour la culture, les musées, monuments, foires et salons (art. 279, b bis et b ter).
- Taux réduit 5,5 % (art. 278-0 bis) : dépenses de première nécessité — denrées alimentaires conservables, à consommation différée, eau, livres, appareils médicaux, prestations des EHPAD, protections hygiéniques (art. 278-0 bis, A, 1° bis) ; travaux de rénovation énergétique (art. 278-0 bis A) ; réseaux de chaleur et de froid ; spectacles vivants et cinéma (art. 278-0 bis, F et G). Les abonnements d'électricité et de gaz naturel, eux, sont revenus au taux normal de 20 % depuis le 1er août 2025 (loi de finances pour 2025).
- À ne pas confondre : les alcools restent à 20 % dans tous les cas (art. 278) ; le chocolat est à 5,5 % sans aucune condition de teneur en cacao — l'art. 278-0 bis, A admet le chocolat, le chocolat de ménage, les bonbons de chocolat, les fèves et le beurre de cacao, et écarte la confiserie, le chocolat blanc ou fourré et les produits composés ; et c'est la consommation immédiate qui fait le 10 %, même à emporter, la denrée conservable restant à 5,5 %.
- Taux super-réduit 2,1 % : publications de presse d'intérêt général, 140 premières représentations de théâtre ou de cirque (art. 281 quater — des représentations, non des places, le 5,5 % reprenant à partir de la 141e), médicaments remboursés par la sécurité sociale, animaux de boucherie vendus à des particuliers.
- ⚠️ quatre corrections à ton cours. Les abonnements de gaz et d'électricité sont au taux normal de 20 % depuis le 1er août 2025, seuls les réseaux de chaleur et de froid restant à 5,5 %. Les travaux sur les logements achevés depuis plus de deux ans sont à 10 %, le 5,5 % étant réservé à la rénovation énergétique. La culture ne va pas en bloc à 10 % : 5,5 % pour les spectacles vivants et le cinéma, 10 % pour les musées, monuments, foires et salons. Et le CGI ne connaît aucun seuil de teneur en cacao, ni d'exception pour un chocolat « saturé en gras ». Dernier point : le rapport Matić a été adopté par le Parlement européen le 24 juin 2021, non en 2022, et il demandait une exonération ou un taux de 0 %, alors qu'en France les protections hygiéniques sont à 5,5 %.

QCM d'entraînement : `tve-006`, `tve-007`

### or-47 · Quelles sont les conditions de fond, de forme et de temps du droit à déduction de la TVA (art. 271 CGI) ?

*Thème : TVA — droit à déduction · probabilité ★★★*

- Principe (art. 271 CGI, art. 205 à 210 annexe II) : neutralité de la TVA pour l'entreprise ; TVA à payer = TVA collectée (aval) − TVA déductible (amont) ; l'assujetti récupère la TVA supportée sur ses dépenses professionnelles.
- Condition de fond 1 : avoir la qualité d'assujetti et agir en tant que tel ; l'intention d'exercer une activité taxable suffit, à prouver (bail, statuts) (CJCE 14 février 1985, Rompelman).
- Condition de fond 2 : lien direct et immédiat entre le bien ou le service acquis et l'activité taxée (CJCE 8 juin 2000, Midland Bank plc, aff. C-98/98 — CJCE et non CJUE, la juridiction ne portant ce nom que depuis l'entrée en vigueur du traité de Lisbonne, le 1er décembre 2009) ; pas de déduction pour une activité exonérée (médecin) ; les frais généraux (plantes, machine à café, frais de liquidation) participent indirectement à l'ensemble de l'activité et ouvrent droit à déduction.
- Condition de fond 3 : absence de fraude ou d'abus (art. 272-3 CGI) : l'administration retire le droit à déduction en cas de participation, même seulement consciente, à un carrousel de TVA, fausses factures, société fictive, prix anormalement bas.
- Condition de forme (art. 271 II) : détenir un justificatif : facture régulière, document douanier, acte notarié, contrat, déclaration d'importation ; sans justificatif, pas de déduction.
- Condition de temps (art. 271 I 2° et 3°, renvoi à l'art. 269) : le droit naît lorsque la TVA devient exigible chez le fournisseur (livraison pour un bien, encaissement pour un service sauf option pour les débits) ; pour les immobilisations, la déduction n'est définitivement acquise qu'après 5 ans d'affectation à l'activité taxée pour les meubles et 20 ans pour les immeubles (art. 207 II annexe II).
- Condition légale supplémentaire : la déduction ne doit pas être exclue par la loi (art. 206 IV annexe II, coefficient d'admission).

QCM d'entraînement : `tvd-001`, `tvd-003`, `tvd-004`, `tvd-015`

### or-48 · Quelles dépenses sont exclues du droit à déduction de la TVA (art. 206 IV annexe II CGI) ?

*Thème : TVA — droit à déduction · probabilité ★★★*

- Art. 206 IV annexe II : liste limitative d'exclusions légales, traduites par un coefficient d'admission égal à 0 ; présomption irréfragable de détournement à des fins personnelles.
- Dépenses de logement des dirigeants et salariés (hôtel du dirigeant en déplacement) ; exceptions : logement des clients, logement gratuit sur les chantiers ou du personnel de gardiennage et de surveillance.
- Véhicules de transport de personnes, c'est-à-dire les véhicules de tourisme : acquisition, location, pièces détachées, réparations ; conséquence, la base d'amortissement est le coût de revient TTC. Les véhicules de société à deux places sans habitacle arrière et les véhicules utilitaires ouvrent droit à déduction, mais le critère n'est pas le nombre de places : c'est la catégorie européenne du véhicule et sa carrosserie (art. L. 421-2 CIBS, M1 et certains N1 désignés par l'art. D. 421-1), les deux places sans habitacle arrière n'étant que le signe habituel de l'utilitaire. Le transport de personnes (train, avion, taxi, bateau) est exclu, mais les péages et les frais de parking restent déductibles.
- Biens cédés sans rémunération ou à prix symbolique (cadeaux) : exclus par le 3° du 2 du IV de l'art. 206 de l'annexe II, sauf biens de très faible valeur n'excédant pas 73 euros TTC par objet, par an et par bénéficiaire (art. 28-00 A de l'annexe IV au CGI, avec la lettre A) et objets publicitaires ou spécimens non destinés à la vente.
- Produits pétroliers : l'alignement de l'essence sur le gazole, engagé en 2017, s'est achevé le 1er janvier 2022 — les deux carburants suivent depuis exactement le même régime, 80 % de TVA déductible sur un véhicule de tourisme (la taxe est exclue « dans la limite de 20 % de son montant », art. 298, 4, 1° a et b CGI) et 100 % sur un utilitaire ; les gaz de pétrole et autres hydrocarbures présentés à l'état gazeux, gaz naturel excepté, ne sont déductibles qu'à 50 % sur un véhicule de tourisme. Le siège des carburants n'est pas le 6° du 2 du IV de l'art. 206 de l'annexe II — ce 6°, c'est le véhicule lui-même — mais le 3 du IV, qui renvoie à l'art. 298, 4 CGI.
- Biens utilisés à plus de 90 % — et non « à 90 % au moins » — pour des opérations étrangères à l'entreprise (art. 206, IV, 2, 1° de l'annexe II) : à exactement 90 % d'utilisation étrangère, le coefficient d'admission n'est pas nul et la déduction reste possible ; degré d'affectation mesuré en temps ; services se rattachant à des biens exclus (réparation d'un véhicule de tourisme).
- ⚠️ ton cours dit que l'essence n'ouvre jamais droit à déduction et que seul le gazole est déductible à 80 % : c'est l'état du droit d'avant 2022, les deux carburants sont alignés à 80 % sur un véhicule de tourisme. Il écrit aussi « art. 28-0 annexe IV » (les fiches « 28-00 ») quand le numéro exact est l'art. 28-00 A, et « à 90 % au moins » quand le texte dit « à plus de 90 % » : le chiffre est le même, c'est le sens de l'inégalité qui change.

QCM d'entraînement : `tvd-005`, `tvd-006`, `tvd-007`, `tvd-016`

### or-49 · Comment calcule-t-on le coefficient de déduction de la TVA et quand faut-il régulariser la TVA déduite ?

*Thème : TVA — droit à déduction · probabilité ★★★*

- Art. 205 et 206 annexe II CGI : TVA déductible = TVA supportée × coefficient de déduction ; coefficient de déduction = coefficient d'assujettissement × coefficient de taxation × coefficient d'admission ; il traduit toutes les conditions juridiques du droit à déduction ; si l'un vaut 0, on s'arrête.
- Coefficient d'assujettissement : proportion d'utilisation du bien pour des opérations situées dans le champ de la TVA ; au niveau de l'activité, tout ou rien (1 ou 0) ; bien par bien, mesure physique (surface, temps).
- Coefficient de taxation : part des opérations dans le champ effectivement taxées, mesurée en chiffre d'affaires (activité taxée / activité totale dans le champ) ; bien affecté exclusivement à l'activité taxée = 1, à l'activité exonérée = 0 ; le coefficient de taxation forfaitaire de l'activité (1 = activité non exonérée) n'empêche pas un coefficient plus faible bien par bien.
- Coefficient d'admission : fixé par la loi (art. 206, IV de l'annexe II) — 0 si la dépense est exclue, 0,8 pour le gazole comme pour l'essence depuis le 1er janvier 2022, 0,5 pour les gaz de pétrole et hydrocarbures gazeux sur un véhicule de tourisme, 1 sinon.
- Régularisation (art. 271 CGI et art. 207 annexe II) : la déduction sur une immobilisation n'est acquise que si le bien reste affecté à l'activité taxée 5 ans (meubles) ou 20 ans (immeubles) ; régularisation annuelle (variation d'affectation, écart de coefficient supérieur à 0,1) ou globale sur événement définitif, avec reversement au prorata des années restant à courir.
- Cas de régularisation globale : le III de l'art. 207 de l'annexe II en compte cinq alinéas, et non six — cession ou apport non soumis à la TVA sur le prix total (l'option pour la TVA sur un immeuble ancien l'évite) ; cession ou apport soumis à la TVA sur le prix total, où le coefficient de déduction du bien est réputé égal à l'unité pour les années restant à courir, ce qui donne une déduction complémentaire au cédant quand la déduction d'origine n'était que partielle, et rien du tout quand elle était totale ; transfert entre secteurs d'activité ; modification législative du droit à déduction ; cessation d'affectation à des opérations taxées, ou affectation ultérieure à une activité ouvrant droit à déduction. Le transfert d'une fraction de taxe à l'acquéreur par attestation est réservé à la cession non soumise à la TVA et au transfert entre secteurs.
- Exceptions : événement involontaire de force majeure (incendie, vol, expropriation) : pas de régularisation ; cession d'une universalité (art. 257 bis) : pas de régularisation ; actifs circulants et services : engagement sur l'année en cours seulement (stock invendu à la cessation).
- ⚠️ ton CM présente la cession soumise à la TVA sur le prix total comme « un cas de régularisation qui finalement n'est pas régularisé » : ce n'est vrai que si la déduction initiale avait été totale, cas le plus courant. Le texte en fait bien une régularisation, en faveur du cédant, et sur ce point tes fiches ont raison contre le CM. Le seuil de 0,1 de la régularisation annuelle, lui, vient de tes fiches et du CM Lou, le CM Sibylle ne chiffrant pas l'écart.

QCM d'entraînement : `tvd-008`, `tvd-009`, `tvd-010`, `tvd-011`

### or-50 · Comment la TVA est-elle déclarée et payée (réel normal, réel simplifié, franchise) et que devient un crédit de TVA ?

*Thème : TVA — droit à déduction · probabilité ★★☆*

- La déclaration comporte deux colonnes : TVA collectée auprès des clients (à reverser) et TVA déductible supportée sur les achats ; par compensation, TVA à décaisser ou crédit de TVA (créance sur l'État) ; la périodicité dépend du régime.
- Régime réel normal (art. 287, 2 CGI) : déclaration mensuelle CA3 déposée entre le 15 et le 24 du mois suivant, paiement électronique au moment de la déclaration, avec un dépôt par trimestre civil possible quand la taxe exigible annuellement est inférieure à 4 000 euros ; applicable au-delà de 945 000 euros (ventes de biens, restauration, logement) ou 286 000 euros (autres activités) de chiffre d'affaires en 2026, ou dès que la TVA exigible au titre de N-1 dépasse 15 000 euros (art. 287, 3 bis).
- Régime réel simplifié (art. 287, 3 CGI) : une seule déclaration annuelle, la CA12 (n° 3517-S), et deux acomptes semestriels, en juillet et en décembre, égaux à 55 % et 40 % de la taxe due au titre de l'exercice précédent — N-1, pas N-2 —, avec dispense d'acomptes en dessous de 1 000 euros ; ce régime disparaît au 1er janvier 2027 (art. 38 de la loi de finances pour 2025).
- Franchise en base (art. 293 B) : aucune déclaration, ni TVA collectée ni TVA déductible.
- Crédit de TVA : imputation automatique sur les déclarations suivantes jusqu'à épuisement, ou remboursement sur demande expresse — au moins 760 euros pour une demande mensuelle ou trimestrielle déposée en cours d'année par un redevable au réel normal, au moins 150 euros pour la demande annuelle déposée au cours du mois de janvier au titre de l'année écoulée (art. 271 IV CGI, art. 242-0 A et 242-0 C de l'annexe II) ; protège les exportateurs et les entreprises structurellement créditrices.
- ⚠️ trois chiffres de ton cours sont périmés. Les seuils du réel simplifié sont passés de 840 000 / 254 000 euros à 945 000 / 286 000 euros au 1er janvier 2026, avec des limites majorées de 1 040 000 et 323 000 euros. Le réel simplifié ne donne pas lieu à une déclaration trimestrielle avec des acomptes assis sur la TVA de N-2, mais à une CA12 annuelle et à deux acomptes semestriels assis sur N-1. Et le remboursement d'un crédit de TVA se demande à partir de 760 euros, non de 750 — retiens les deux chiffres, 760 euros en cours d'année et 150 euros pour la demande annuelle de janvier.

QCM d'entraînement : `tvd-012`, `tvd-013`, `tvd-014`


## Format

```json
{
  "id": "tve-006",
  "topic": "tva-exigible",
  "type": "statement",
  "difficulty": 1,
  "question": "Laquelle de ces affirmations sur les taux de TVA est exacte ?",
  "choices": [
    "Le taux intermédiaire de 10 % (art. 278 bis CGI) s'applique aux produits alimentaires destinés à l'alimentation humaine et à l'eau",
    "Le taux normal est de 20 % (art. 278 CGI) et s'applique sauf disposition spéciale, l'UE imposant un plancher de 15 %",
    "Le taux réduit de 5,5 % (art. 278-0 bis CGI) s'applique à la restauration à consommer sur place et à l'hôtellerie (CHR)",
    "Le taux super-réduit de 2,1 % s'applique au transport de voyageurs, à l'agriculture et aux médicaments non remboursés"
  ],
  "answer": 1,
  "explanation": "À l'oral : quatre taux. Le taux normal est de 20 % (art. 278 CGI), applicable sauf disposition spéciale, l'UE imposant un plancher de 15 %. 10 % : restauration sur place et hôtellerie, transport de voyageurs, logement, agriculture, médicaments non remboursés, foires et salons (art. 279, b bis), musées et monuments (art. 279, b ter), travaux d'amélioration des logements achevés depuis plus de deux ans (art. 279-0 bis). 5,5 % : alimentation humaine, eau, livres, appareils médicaux, EHPAD, abonnements aux réseaux de chaleur et de froid (art. 278-0 bis, B et B bis), rénovation énergétique des logements (art. 278-0 bis A), spectacles vivants (art. 278-0 bis, F) et cinéma (art. 278-0 bis, G). 2,1 % : presse d'intérêt général, médicaments remboursés, animaux de boucherie vendus aux particuliers, et recettes des entrées des 140 premières représentations d'œuvres nouvellement créées en France ou d'œuvres classiques remises en scène (art. 281 quater ; 5,5 % à partir de la 141e).",
  "oral": "or-46",
  "tags": [
    "chiffres",
    "oral-blanc"
  ],
  "source": "01-cm-sibylle.txt l. 4376-4453 ; 02-fiches-examen.txt l. 1123-1150 ; 05-fiche-pages.txt l. 758-765 ; 06-cm-lou-pages.txt l. 1098-1103",
  "disputed": "Le CM Sibylle nomme le 10 % « taux réduit » et le 5,5 % « ultra-réduit » ; les fiches 02 parlent de taux intermédiaire (10 %) et de taux réduit (5,5 %), surnoms que les fiches 05 et le CM Lou inversent. Les chiffres, eux, sont constants : à l'oral, annonce « 20 %, 10 %, 5,5 %, 2,1 % » et décris les domaines plutôt que de te fier aux surnoms.",
  "flag": "Ton cours met les abonnements au gaz et à l'électricité et les travaux sur les logements d'habitation à 5,5 %, place « la culture » en bloc à 10 % et parle des « 140 premières places » de théâtre ou de cirque à 2,1 %. Quatre corrections : depuis le 1er août 2025 (loi de finances pour 2025), les abonnements d'électricité et de gaz naturel sont au taux normal de 20 %, seuls les réseaux de chaleur et de froid restant à 5,5 % ; les travaux sur les logements achevés depuis plus de deux ans sont à 10 % (art. 279-0 bis), le 5,5 % étant réservé à la rénovation énergétique (art. 278-0 bis A) ; la culture se partage entre 5,5 % pour les spectacles vivants et le cinéma (art. 278-0 bis, F et G) et 10 % pour les musées, monuments, foires et salons (art. 279, b bis et b ter) ; et l'article 281 quater vise les 140 premières représentations, pas les places, le 5,5 % reprenant à partir de la 141e. Si ton prof récite l'ancienne liste, tu sais d'où ça vient."
}
```

Les champs :

| Champ | |
|---|---|
| `id` | identifiant stable, préfixe de thème + numéro |
| `topic` | l'un des 13 thèmes |
| `type` | `definition` \| `enumeration` \| `distinction` \| `figure` \| `statement` \| `order` |
| `difficulty` | 1 facile, 2 moyen, 3 difficile |
| `question` | l'énoncé |
| `choices` | 4 propositions |
| `answer` | index de la bonne réponse dans `choices` (0 à 3) |
| `explanation` | commence par « À l'oral : » — ce que tu récites, articles et chiffres compris |
| `oral` | la question de cours à laquelle le QCM se rattache (`or-01` à `or-50`) |
| `tags` | `td` \| `chiffres` \| `oral-blanc` \| `piege` |
| `source` | fichier et lignes du corpus |
| `flag` | ce que disait ton cours et pourquoi la banque s'en écarte (optionnel) |
| `disputed` | divergence entre les prises de notes (optionnel) |

Aucune explication ne renvoie à une position (« la proposition b »), donc tu peux re-mélanger les propositions à l'exécution sans rien casser. Pas de mini-cas ni de calculs : l'examen est un oral, pas un exercice.


## Contrôles passés

- génération thème par thème directement depuis le corpus, chaque question adossée à des lignes précises d'un fichier source (champ `source`)

- relecture adversariale par thème : 13 relecteurs indépendants à la recherche de réponses fausses, de questions à double réponse défendable, de distracteurs accidentellement vrais, d'erreurs d'articles ou de chiffres, puis 13 correcteurs qui appliquent les corrections thème par thème

- critique transversale de l'ensemble de la banque : doublons entre thèmes, cohérence des chiffres et des articles d'un thème à l'autre, homogénéité du ton des explications, équilibre des types et des difficultés

- vérification web du droit en vigueur : 906 éléments de la banque — articles, seuils, taux, plafonds, délais, dates et décisions — confrontés à Légifrance, au BOFiP, à impots.gouv.fr, à service-public.fr et aux sites des juridictions, deux sources officielles au minimum par point, d'où 176 constats ; chacun a ensuite été soumis à un contradicteur indépendant chargé de le réfuter, sources à l'appui, qui en a écarté 16 ; les 160 constats confirmés ont été appliqués à la banque, aux plans de réponse et à cette fiche

- contrôles de schéma automatiques : IDs uniques, 4 propositions distinctes par question, index de réponse valide, aucun énoncé dupliqué, champ `oral` renseigné et pointant vers une question de cours existante, aucune question de cours orpheline (les 50 ont au moins un QCM), aucune référence positionnelle résiduelle, aucune faute de ligature héritée de l'extraction des PDF (« scal », « dé nit », « chi re d'a aires », « béné ce »)
