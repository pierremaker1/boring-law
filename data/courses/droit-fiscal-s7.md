# Droit fiscal — banque de questions QCM

**188 questions**, en français, 4 propositions, une seule correcte.
Construite à partir de ton dossier `S7/Droit fiscal` : le CM de Sibylle (la référence), les fiches d'examen, le corrigé du partiel de TD et trois prises de notes de recoupement.

Elle n'est pas pensée pour un QCM. **L'examen est un oral : trois questions de cours tirées au sort.** Chaque QCM est donc une brique d'une réponse d'oral — il est rattaché à l'une des 50 questions de cours (champ `oral`), et son explication commence par « À l'oral : » et te donne ce qu'il faut réciter, articles et chiffres inclus.
Le prof tient aux articles et aux chiffres : c'est le fil directeur de toute la banque.


## Principe de vérité

**La référence est le cours, pas le droit positif.** C'est le cours qui est évalué. Quand le cours est daté ou inexact, la bonne réponse reste celle du cours, et un champ `flag` explique l'écart. En cas de divergence entre prises de notes, le CM de Sibylle l'emporte, et le champ `disputed` le signale.

Il y a **42 questions flaggées** et **55 questions avec un champ `disputed`**. Lis le tableau ci-dessous une fois : ce sont exactement les points où tu te fais piéger si tu révises sur autre chose que ton cours — ou si tu récites un chiffre sans savoir de quelle année il est.

| id | Écart avec le droit positif |
|---|---|
| `int-008` | Dénonciation obligatoire : le cours ne retient que le seuil de 100 000 € et parle de Parquet national financier ; l'art. L. 228 LPF exige en plus des majorations de 40, 80 ou 100 % et vise le procureur de la République. |
| `int-014` | Arrêt Balmain : le cours dit « Assemblée plénière », c'est la plénière fiscale (CE, 28 oct. 2020, n° 428048). |
| `int-018` | Le cours compte 196 États reconnus par l'ONU ; l'ONU en compte 193. |
| `irc-002` | Domicile fiscal : le cours dit que le foyer a remplacé le lieu de séjour principal ; l'art. 4 B, 1-a CGI mentionne encore les deux. |
| `irc-005` | Taux minimum : le seuil de 26 070 € est celui du cours, il est actualisé chaque année et figure à l'art. 197 A (l'art. 164 B ne définit que les revenus de source française). |
| `pat-001` | Logement dont le propriétaire se réserve la jouissance : le cours écrit art. 15-1, le texte est l'art. 15, II CGI. |
| `pat-011` | Intérêts du livret A et du livret jeune : le cours rattache l'exonération à l'art. 125 A, elle figure à l'art. 157 CGI. |
| `pat-012` | Dividendes : le cours retient un prélèvement non libératoire de 30 % ; l'art. 117 quater CGI fixe 12,8 %, les 17,2 % de prélèvements sociaux faisant le reste. |
| `sal-003` | Indemnités de licenciement : le droit positif plafonne les deux limites à six fois le plafond annuel de la sécurité sociale, le cours ne le mentionne pas. |
| `sal-005` | Déduction forfaitaire de 10 % : plafond de 12 829 € au CM, 14 426 € pour les revenus 2024. |
| `sal-010` | Forfait télétravail : la fiche donne 606,36 € par an, qui ne vaut pas 12 × 59,4 € ; le BOFiP retient 626,40 € pour 2024. |
| `sal-011` | SMIC de la fiche (1 801,80 € par mois, 21 621,60 € par an) : chiffres de fin 2024, revalorisés chaque année. |
| `bpr-006` | Théorie du bilan, seuil de 10 % : en droit positif (art. 155, II, 3 CGI) il ne joue que si le seuil de 5 % a été respecté l'exercice précédent. |
| `bpr-010` | Annualité : le corrigé du TD cite « les art. 12 et 13 » ; dans le CGI l'annualité est à l'art. 12, l'art. 13 définissant le revenu net (art. 36 et 37 pour les BIC). |
| `bpr-011` | Art. 38-1 : le texte vise les opérations « y compris les cessions d'éléments d'actif », que le cours renvoie au régime des plus-values. |
| `bpr-015` | Seuil de 500 € HT : simple tolérance administrative pour le petit matériel en droit positif, présenté comme le critère général de l'immobilisation par le cours. |
| `bpr-023` | Étalement de la plus-value de sinistre ou d'expropriation : le cours cite l'art. 42 septies, le texte applicable est l'art. 39 quaterdecies 1 ter. |
| `bch-012` | Fonds commercial : amortissable comptablement par les petites entreprises et fiscalement pour les fonds acquis entre 2022 et 2025 ; le CM le dit non amortissable. |
| `bch-014` | Amortissement des véhicules : quatre tranches de 9 900 à 30 000 € selon les émissions de CO2 en droit positif, contre 200 g/km et 10 000 / 20 000 € au CM. |
| `bch-017` | Provisions pour licenciement : l'art. 39, 1, 5° CGI n'exclut que celles pour licenciement économique ; le TD et le CM généralisent l'exclusion. |
| `bpv-002` | Transmission à titre gratuit : fait générateur de plus-value professionnelle en droit positif et dans le TD, le CM Sibylle l'exclut au profit des droits de mutation à titre gratuit. |
| `bpv-003` | Même écart que bpr-023 : l'art. 42 septies vise en réalité l'étalement des subventions d'équipement. |
| `bpv-009` | Exonération partielle de l'art. 151 septies : le corrigé du TD écrit (recettes − 90 000) / 36 000, la formule légale est (126 000 − recettes) / 36 000. |
| `brg-014` | Micro-BNC : 177 700 € au cours, 77 700 € à l'art. 102 ter CGI. |
| `liq-002` | Déficit foncier : les fiches se contredisent sur les intérêts d'emprunt ; l'art. 156 I-3° les exclut des 10 700 € imputables sur le revenu global. Le plafond, lui, est exact. |
| `liq-004` | Abattements de 3 786 € et 6 368 € : chiffres du CM, revalorisés chaque année ; l'abattement des personnes âgées ou invalides relève de l'art. 157 bis, pas de l'art. 196 B. |
| `liq-006` | Barème du CM : revenus 2022. Seuils applicables aux revenus 2024 : 11 497 / 29 315 / 83 823 / 180 294 €, mêmes taux. |
| `liq-013` | Salarié à domicile : le CM donne 15 000 € avec deux enfants ; la majoration légale est de 1 500 € par personne à charge, dans la limite de 15 000 €. |
| `tvc-008` | Arrêt INZO : daté du 9 février 1996 par le CM, rendu le 29 février 1996 (aff. C-110/94). |
| `tvc-012` | Franchise en base : le seuil unique de 25 000 € de la loi de finances pour 2025 a été suspendu ; les seuils de droit commun restent 85 000 € et 37 500 €. |
| `tvc-013` | Option pour la TVA sur la location d'immeubles : irrévocable 5 ans selon le cours, dénonçable à partir de la neuvième année en droit positif (art. 194 ann. II). |
| `tvt-003` | Ventes à distance : les fiches citent encore 35 000 € par État de destination, le seuil global est de 10 000 € HT depuis 2021. |
| `tvt-006` | Prestations de services : le corpus ne cite que l'art. 259 1° ; la distinction 259 1° (preneur assujetti) / 259 2° (preneur non assujetti) vient du CGI. |
| `tve-001` | Assiette : le cours cite l'art. 267, la base d'imposition est définie à l'art. 266 — citer « art. 266-267 CGI » à l'oral. |
| `tve-004` | Option pour les débits : ouverte par l'art. 269, 2, c CGI ; le cours ne cite que l'art. 77 de l'annexe III, c'est cette référence à réciter. |
| `tve-006` | Taux de 2,10 % : « les 140 premières places » au cours, « les 140 premières représentations » à l'art. 281 quater. |
| `tve-007` | Rapport Matić : adopté le 24 juin 2021, daté de 2022 par le cours ; le seuil de 75 % de cacao ne figure pas au CGI. |
| `tvd-003` | Lien direct : le corpus ne cite l'arrêt que par sa date et son numéro (8 juin 2000, aff. C-98/98) ; le nom Midland Bank vient du stock de questions de cours. |
| `tvd-007` | Essence : exclusion totale selon le cours, alignée sur le gazole depuis 2022 (80 % pour les véhicules exclus, 100 % sinon). |
| `tvd-010` | Seuil de 0,1 de la régularisation annuelle : vient des fiches ; le CM Sibylle ne chiffre pas l'écart et annonce ne traiter que la régularisation globale. |
| `tvd-014` | Régime simplifié : seuils 840 000 / 254 000 € et 15 000 € de TVA N-1 issus des fiches ; acomptes présentés comme trimestriels sur N-2, ils sont semestriels et assis sur N-1. |
| `tvd-016` | Péages, parkings et distinction véhicule de société / véhicule de tourisme : points des fiches et du CM Lou, le CM Sibylle reste vague. |


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
- Chiffres 2023 : IR 112 milliards d'euros ; TVA 285 milliards (plus de la moitié des recettes fiscales de l'État pendant 50 ans, 35 à 40 % aujourd'hui) ; IS 82 milliards ; IFI 2,3 milliards ; recettes fiscales totales 779 milliards, État seul 460 milliards ; 17 millions de ménages imposables sur 40 millions (moins d'un sur deux).

QCM d'entraînement : `int-001`, `int-002`, `int-003`, `int-004`, `int-019`

### or-02 · Distinguez fraude fiscale, évasion fiscale, exil fiscal, optimisation fiscale et abus de droit. Qu'était le verrou de Bercy ?

*Thème : Introduction · probabilité ★★★*

- Fraude fiscale : délit de l'art. 1741 CGI, soustraction volontaire à l'impôt ; trois moyens : non-dépôt de déclaration, dissimulation de recettes ou de biens, opération illicite ; coût estimé à environ 100 milliards d'euros par an (syndicats de Bercy), 35 à 50 milliards pour l'évasion.
- Évasion fiscale : variété de fraude, donc infraction pénale : déplacement des avoirs vers des paradis fiscaux, fausse domiciliation ; exil fiscal : la personne s'expatrie elle-même avec ses biens, c'est légal (droit international privé).
- Optimisation fiscale : choix de la voie la moins imposée, légale et protégée par le Conseil constitutionnel tant que la cohérence d'ensemble de l'opération est respectée.
- Abus de droit (art. L. 64 LPF, « péché des surdoués de la fiscalité » selon Cozian) : deux branches, l'abus par simulation (acte fictif ou déguisé, homme de paille, société fictive) et l'abus par fraude à la loi (lettre du texte respectée, esprit détourné, but exclusivement fiscal).
- Art. L. 64 A LPF : abus par fraude à la loi à but principalement fiscal, limité à certains impôts ; le Conseil constitutionnel a refusé de généraliser le critère du but « essentiellement » fiscal.
- Verrou de Bercy : la Commission des infractions fiscales filtrait les plaintes déposées au Parquet national financier ; supprimé par la loi du 23 octobre 2018 ; désormais plainte obligatoire dès 100 000 euros de droits éludés.

QCM d'entraînement : `int-005`, `int-006`, `int-007`, `int-008`

### or-03 · Quelles sont les sources internes du droit fiscal et quels principes constitutionnels encadrent la loi fiscale ?

*Thème : Introduction · probabilité ★★★*

- Bloc de constitutionnalité : art. 13 DDHC (nécessité et égalité de l'impôt), art. 14 DDHC (consentement à l'impôt), art. 34 Constitution (compétence du Parlement) ; les QPC sont fondamentales en droit fiscal.
- Légalité de l'impôt : seul le Parlement crée l'impôt et fixe l'assiette, le taux et le recouvrement ; le Conseil constitutionnel censure les cavaliers législatifs ; lois de finances et lois de finances rectificatives, au besoin par le 49 al. 3.
- Rétroactivité : petite rétroactivité admise (la loi applicable est celle en vigueur au jour du fait générateur, soit le 31 décembre pour l'IR ; lois interprétatives rétroactives) ; grande rétroactivité (remise en cause de situations acquises) seulement pour un motif d'intérêt général suffisant.
- Intelligibilité et prévisibilité de la loi : dispositif inintelligible censuré en 2005.
- Égalité devant l'impôt (situation identique, traitement identique) et égalité devant les charges publiques (faculté contributive, absence de caractère confiscatoire).
- La loi fixe le champ d'application, le fait générateur, l'assiette, le taux et le recouvrement ; ordonnances et règlements : certaines procédures fiscales et les impôts locaux.

QCM d'entraînement : `int-010`, `int-011`, `int-012`, `int-016`

### or-04 · Quelle est la valeur de la doctrine administrative, du rescrit et de la jurisprudence ? Quelles sont les sources internationales du droit fiscal ?

*Thème : Introduction · probabilité ★★☆*

- Doctrine administrative : instructions du ministère à ses agents, « encyclopédie du droit fiscal », intégralement en ligne depuis le 12 septembre 2012 sur le BOFiP ; aucune portée juridique en principe, le juge de l'impôt n'est pas lié.
- Garantie du contribuable : art. L. 80 A et L. 80 B LPF, la doctrine est opposable à l'administration, même contra legem si elle est plus favorable ; protection contre les changements ultérieurs de position ; abus de droit par abus de doctrine possible (affaire Balmain, CE Ass. plén. 28 octobre 2020).
- Rescrit : question posée par le contribuable sur sa propre situation, réponse formelle de l'administration ayant la même force que la doctrine, opposable devant le juge ; rescrit « 4P » normalisé (association et impôts commerciaux) ; risque d'être dans le viseur de l'administration.
- Jurisprudence : le juge de l'impôt (Conseil d'État, CJUE) qualifie, interprète et dégage les principes.
- Droit de l'Union européenne : source majeure, la TVA est un impôt commun régi par règlements et directives ; CEDH : garanties procédurales, notamment l'art. 6 § 1 (procès équitable).
- Conventions fiscales : toujours bilatérales, plus de 140 conventions pour environ 196 États ; objectifs : éviter la double imposition, assistance administrative mutuelle, lutte contre l'évasion ; principe de subsidiarité des conventions (le droit interne s'applique d'abord).

QCM d'entraînement : `int-014`, `int-017`, `int-018`

### or-05 · Qui est domicilié fiscalement en France (art. 4 A et 4 B CGI) et comment sont imposés les non-résidents ?

*Thème : IR — champ d'application · probabilité ★★★ · TD*

- Art. 4 A CGI : les personnes physiques domiciliées en France sont imposées sur l'ensemble de leurs revenus mondiaux (obligation fiscale illimitée) ; les autres sur leurs seuls revenus de source française (obligation limitée).
- Territoire : France continentale, DOM et COM, sauf les COM à régime fiscal autonome (Polynésie, Saint-Pierre-et-Miquelon, Wallis-et-Futuna).
- Art. 4 B CGI : trois critères alternatifs, hiérarchisés par le juge : le foyer en France (critère personnel), l'activité professionnelle principale en France (appréciée en temps passé, non en rémunération), le centre des intérêts économiques (principaux investissements, administration des biens).
- Critère personnel : depuis CE 3 novembre 1995 Larcher, le foyer remplace le lieu de séjour principal (la loi ne fixe aucune durée de 6 mois) ; présomption simple de domicile pour les dirigeants de sociétés dont le siège est en France et le chiffre d'affaires supérieur à 250 millions d'euros.
- Non-résidents : revenus de source française de l'art. 164 B CGI (biens ou activités situés en France, débiteur établi en France) ; taux minimum de 20 % jusqu'à 26 070 euros et 30 % au-delà, sauf justification d'un taux moyen mondial inférieur et sous réserve des conventions ; ⚠️ droit positif : seuil actualisé chaque année.
- Personnes imposables : personnes physiques et associés des sociétés de personnes de l'art. 8 CGI (translucidité) ; exonérés : agents diplomatiques et consulaires étrangers.

QCM d'entraînement : `irc-001`, `irc-002`, `irc-004`, `irc-005`, `irc-006`

### or-06 · Qu'est-ce que le foyer fiscal (art. 6 CGI) et quelles sont les conséquences d'un changement de situation en cours d'année ?

*Thème : IR — champ d'application · probabilité ★★★ · TD*

- L'IR n'est pas personnel : il frappe le foyer fiscal ; art. 6-1 CGI, cumul des revenus du contribuable et des personnes à sa charge (art. 196 et 196 A bis) ; époux, quel que soit le régime matrimonial, et partenaires de Pacs : imposition commune et solidarité fiscale ; le concubinage ne forme pas un foyer.
- Impositions séparées : époux séparés de biens ET ne vivant pas sous le même toit (cumulatif) ; instance de divorce ou séparation de corps avec résidence séparée autorisée ; abandon du domicile conjugal, absence, disparition.
- Rattachement des enfants : mineurs obligatoirement ; majeurs de moins de 21 ans sur option ; jusqu'à 25 ans s'ils poursuivent des études (art. 6-3 CGI) ; intérêt : rattacher au foyer aux revenus les plus élevés.
- Mariage ou Pacs : imposition commune pour toute l'année, sauf option pour l'imposition séparée la première année seulement.
- Divorce ou séparation : chacun déclare séparément les revenus de toute l'année, comme si la relation avait cessé au 1er janvier ; remariage la même année : on retient le dernier changement.
- Naissance : situation appréciée au 1er janvier, mais tolérance au 31 décembre si plus favorable ; décès : deux déclarations, le foyer commun jusqu'au décès puis le survivant seul jusqu'au 31 décembre.

QCM d'entraînement : `irc-007`, `irc-008`, `irc-009`, `irc-010`, `irc-014`

### or-07 · Quels sont les caractères du revenu imposable à l'IR et quelles sont les catégories de revenus ?

*Thème : IR — champ d'application · probabilité ★★☆ · TD*

- Pas de définition légale générale du revenu, seulement des définitions catégorielles ; principe d'annualité posé par les art. 12 et 13 CGI : imposition chaque année des revenus de l'année civile.
- Revenu global (art. 12 et 13) : somme de tous les revenus catégoriels du foyer ; revenu net : diminué des dépenses supportées pour acquérir ou conserver le revenu (art. 13).
- Revenu annuel : du 1er janvier au 31 décembre (en BIC, l'exercice comptable peut être à cheval sur deux années) ; revenu disponible : le contribuable en a la jouissance (contre-exemple : compte courant d'associé bloqué).
- Champ d'application matériel (TD) : l'ensemble des revenus et charges des personnes physiques, réparti en huit catégories et deux familles.
- Revenus du travail, au barème progressif : traitements et salaires, pensions et rentes viagères ; bénéfices agricoles ; BIC ; BNC ; rémunérations des dirigeants (art. 62).
- Revenus du capital, le plus souvent à taux proportionnel (PFU) plus prélèvements sociaux : revenus fonciers, revenus de capitaux mobiliers, plus-values des particuliers.

QCM d'entraînement : `irc-011`, `irc-012`, `irc-013`, `irc-015`

### or-08 · Comment détermine-t-on le revenu net foncier ? Présentez le micro-foncier, le régime réel et le traitement des déficits fonciers.

*Thème : Revenus du patrimoine · probabilité ★★★*

- Art. 14 à 33 quinquies CGI : revenus des propriétés bâties et non bâties louées nues ; exclus : location meublée et locaux équipés (BIC), sous-location d'immeuble nu (BNC) ; logement dont le propriétaire se réserve la jouissance non imposé (art. 15-1).
- Revenu brut (art. 29) : loyers effectivement encaissés (comptabilité de caisse), plus dépenses du propriétaire mises à la charge du locataire, pas-de-porte (supplément de loyer), subventions, droits d'affichage et de chasse ; le dépôt de garantie n'est pas un revenu ; l'administration peut substituer un loyer de marché à un loyer anormalement bas.
- Revenu net = revenu brut − charges de propriété (art. 28) ; charges de l'art. 31 (liste : réparation et entretien, amélioration des locaux d'habitation, primes d'assurance, frais de gestion de 20 euros par local, gardes et concierges, frais de procédure, intérêts d'emprunt, taxe foncière) articulées avec la règle générale de l'art. 13 ; exclus : construction, reconstruction, agrandissement.
- Micro-foncier (art. 32) : de plein droit si le revenu brut foncier n'excède pas 15 000 euros, abattement forfaitaire de 30 % ; régime réel de plein droit au-delà ou sur option irrévocable pendant 3 ans (art. 32-4).
- Déficit foncier (art. 156, I-3°) : imputation sur le revenu global limitée à 10 700 euros par an, portée à 21 400 euros pour les travaux de rénovation énergétique réalisés entre le 1er janvier 2023 et le 31 décembre 2025.
- La fraction du déficit provenant des intérêts d'emprunt et le surplus au-delà de 10 700 euros ne s'imputent que sur les revenus fonciers des 10 années suivantes ; exception : monuments historiques, déficit intégralement déductible du revenu global.

QCM d'entraînement : `pat-001`, `pat-002`, `pat-003`, `pat-004`, `pat-005`, `pat-006`, `pat-014`

### or-09 · Quels sont les revenus de capitaux mobiliers et comment sont-ils imposés ?

*Thème : Revenus du patrimoine · probabilité ★★☆*

- Art. 108 à 146 quater CGI ; deux catégories : dividendes et revenus assimilés à taux variable (dividendes de sociétés à l'IS, réductions de capital sans rachat de titres, boni de liquidation) et produits de placement à revenu fixe (intérêts de créances, obligations, comptes courants d'associés, dépôts, bons de caisse).
- Revenu brut : sommes ou valeurs encaissées, même en nature ; exonérations limitativement listées à l'art. 125 A (livret A, livret jeune) ; charges déductibles : droits de garde et frais de gestion, mais pas les frais de courtage.
- Régime de droit commun : prélèvement forfaitaire unique (flat tax) de 30 % = 12,8 % d'IR + 17,2 % de prélèvements sociaux, sans se mélanger aux autres revenus.
- Option annuelle, globale et irrévocable pour le barème progressif : dividendes avec abattement de 40 % (imposés sur 60 %), produits à revenu fixe sans abattement ; CSG déductible à 6,8 %.
- PFONL : prélèvement forfaitaire obligatoire non libératoire de 30 % retenu à la source par la société distributrice, régularisé lors de la déclaration en mai de l'année suivante.
- Gérants majoritaires de SARL à l'IS (art. 62) : la fraction des dividendes excédant 10 % du capital libéré, des primes d'émission et du compte courant est soumise aux cotisations sociales TNS.

QCM d'entraînement : `pat-008`, `pat-009`, `pat-010`, `pat-011`, `pat-012`, `pat-013`

### or-10 · Définissez la catégorie des traitements, salaires, pensions et rentes viagères (art. 79 à 90 CGI) : personnes concernées, revenu brut, éléments exonérés, dirigeants.

*Thème : Traitements et salaires · probabilité ★★☆*

- Art. 79 à 90 CGI : revenus du travail salarié et des fonctionnaires, pensions de retraite et rentes viagères (revenus de remplacement) ; critère de l'état de subordination, calqué sur le droit du travail (droit de superposition) ; assimilés : journalistes, travailleurs à domicile, assistants maternels, artistes du spectacle, auteurs, agents d'assurance, présidents de conseil d'administration.
- Revenu brut (art. 82) : salaire effectivement encaissé, traitements, indemnités, émoluments, primes, avantages en nature (logement, véhicule de fonction) ; prestations de retraite en capital (art. 79) ; art. 81 : liste des allocations exonérées ; art. 80 quinquies : indemnités journalières maladie et maternité.
- Exonérations ciblées : heures supplémentaires jusqu'à 7 500 euros (art. 81 quater) ; stages et alternance dans la limite du SMIC annuel (art. 81 bis) ; jobs étudiants jusqu'à 3 SMIC mensuels (art. 81, 36°).
- Indemnités de rupture (art. 80 duodecies) : exonération limitée au plus élevé de trois montants : indemnité conventionnelle de branche, moitié de l'indemnité perçue, double de la rémunération annuelle brute.
- Pensions et retraites : abattement de 10 % (art. 158-5 a, plancher 450 euros par pensionné, plafond 4 399 euros par foyer) ; rentes viagères à titre onéreux : fraction imposable selon l'âge du crédirentier à l'entrée en jouissance (art. 158-6).
- Revenus des dirigeants : art. 62 CGI, pas de régime unique, apprécié société par société et mandat par mandat, la plupart des rémunérations sont imposées comme des traitements et salaires.

QCM d'entraînement : `sal-001`, `sal-002`, `sal-003`, `sal-004`, `sal-008`, `sal-011`

### or-11 · Comment déduit-on les frais professionnels des salariés : déduction forfaitaire de 10 % ou frais réels ?

*Thème : Traitements et salaires · probabilité ★★★*

- Revenu net catégoriel = revenu encaissé (art. 82) − charges de la catégorie (art. 13, règle générale, précisé par l'art. 83) ; conditions : engagées pour acquérir ou conserver le revenu, nécessaires à l'activité salariée, payées dans l'année d'imposition, justifiables.
- Déduction forfaitaire de 10 % (art. 83, 3°) appliquée d'office : plancher 504 euros et plafond 14 426 euros pour les revenus 2024 (fiches ; le CM note un plafond de 12 829 euros) ; option pour les frais réels individuelle, membre par membre du foyer, avec justificatifs.
- Frais de déplacement domicile-travail : barème kilométrique (puissance fiscale et distance), sans justification particulière jusqu'à 40 km aller simple (80 km aller-retour), un aller-retour par jour (deux pour les restaurateurs) ; péages et parking déductibles en plus.
- Frais de repas : seul le surcoût par rapport au repas à domicile, évalué à 5,35 euros (2024), est déductible ; forfait de 5,35 euros par jour sans justificatif ; rien en cas de restauration d'entreprise.
- Télétravail : dépenses au prorata de l'usage professionnel ou forfait de 2,7 euros par jour (59,4 euros par mois, 606,36 euros par an) ; matériel : déduction immédiate si valeur inférieure à 500 euros HT, sinon étalement (ordinateur sur 3 ans) ; vêtements imposés par l'employeur, documentation, diplôme, déménagement.

QCM d'entraînement : `sal-005`, `sal-006`, `sal-007`, `sal-010`

### or-12 · Définissez les bénéfices industriels et commerciaux : quelles sont les trois sources de la commercialité fiscale ?

*Thème : BIC — principes · probabilité ★★★ · TD*

- Art. 34 CGI : bénéfices des personnes physiques exerçant une profession commerciale, industrielle ou artisanale à titre indépendant ; définition fiscale « à trois têtes » : par nature, par assimilation, par attraction.
- Par nature (art. 34) : renvoi au Code de commerce, art. L. 110-1 (actes de commerce, notamment tout achat de biens meubles pour les revendre) et L. 121-1 (commerçant = celui qui en fait sa profession habituelle) ; obligations comptables de l'art. L. 123-12 (comptabilité régulière et sincère, comptes annuels) ; la qualification vaut même pour une activité non déclarée.
- Par assimilation ou détermination de la loi (art. 35) : activités civiles réputées commerciales par la loi fiscale : location meublée (bail meublé = prestation de service, jurisprudence de 1915), location de locaux équipés à usage industriel ou commercial, loyer indexé sur le chiffre d'affaires du preneur.
- Grille des locations : location nue = revenus fonciers ; location meublée = BIC ; sous-location d'immeuble nu = BNC ; sous-location meublée = BIC.
- Par attraction ou accessoire (art. 155) : les revenus BA ou BNC accessoires d'une activité BIC principale relèvent des BIC à deux conditions : lien étroit (approche qualitative) et prépondérance de l'activité commerciale (approche quantitative : volume d'affaires, prix de revient) ; ne joue qu'entre BIC/BA et BIC/BNC.

QCM d'entraînement : `bpr-001`, `bpr-002`, `bpr-003`, `bpr-004`

### or-13 · Qu'est-ce que la fin de la théorie du bilan (art. 155 CGI) et que distingue-t-on entre BIC professionnels et BIC non professionnels ?

*Thème : BIC — principes · probabilité ★★★ · TD*

- Théorie du bilan (avant le 1er janvier 2012) : tout bien inscrit à l'actif de l'entreprise individuelle suivait le régime fiscal des BIC, même sans lien avec l'exploitation (résidence, immeuble de rapport).
- Depuis le 1er janvier 2012, art. 155 CGI : l'inscription comptable à l'actif ne suffit plus, il faut démontrer que le bien est utile à l'activité professionnelle ; sinon ses produits et charges sont imposés dans leur propre catégorie (revenus fonciers, RCM) et sa cession relève des plus-values des particuliers.
- Tolérance de l'art. 155 : si les recettes tirées du bien n'excèdent pas 5 % des recettes totales de l'activité, elles sont rattachées aux BIC la première année ; seuil porté à 10 % après la première année ; ratio du TD = chiffre d'affaires accessoire / chiffre d'affaires total.
- Patrimoine d'affectation : les définitions fiscale (utilité à l'activité) et commerciale ne sont pas harmonisées ; en BNC le critère est plus strict (actif nécessaire à la profession).
- BIC professionnels (art. 156, I, 1° bis) : participation personnelle, directe et continue de l'exploitant, à temps plein ou non ; BIC non professionnels : activité patrimoniale, civile (location meublée).
- Conséquences : le déficit BIC professionnel s'impute sur le revenu global (reliquat reportable 6 ans), le déficit non professionnel seulement sur des BIC non professionnels ; régimes de faveur (exonération pour départ à la retraite) réservés aux BIC professionnels ; l'immeuble affecté à une activité professionnelle est hors IFI.

QCM d'entraînement : `bpr-005`, `bpr-006`, `bpr-007`, `bpr-024`

### or-14 · Expliquez le principe de soumission du droit fiscal au droit comptable (art. 38 quater ann. III CGI) et les autres grands principes des BIC : période d'imposition, nominalisme, indépendance des exercices, prise en compte de la TVA.

*Thème : BIC — principes · probabilité ★★★ · TD*

- Art. 38 quater annexe III CGI : le droit fiscal suit le droit comptable (Plan comptable général) pour déterminer le résultat imposable, sauf dérogations prévues par la loi fiscale ; fondement : le commerçant tient une comptabilité régulière et sincère (art. L. 123-12 C. com.) ; le bilan est la photographie du patrimoine à un instant T, le compte de résultat retrace produits et charges.
- Le résultat comptable n'est pas forcément le résultat imposable : un produit peut être exonéré, une charge comptabilisée non déductible ; on passe de l'un à l'autre par des retraitements extra-comptables : résultat fiscal = résultat comptable + réintégrations − déductions.
- Période d'imposition = l'exercice comptable, de 12 mois mais non calé sur l'année civile (possiblement à cheval sur deux années), par dérogation à l'annualité des art. 12 et 13 CGI qui régit les autres catégories ; imposition l'année de clôture.
- Nominalisme monétaire : en comptabilité comme en fiscalité, on ne raisonne qu'en euros.
- Indépendance des exercices : impossible de rattraper sur l'exercice suivant une charge de l'exercice précédent ; les effets rétroactifs d'une nullité ne remontent pas au-delà de la clôture de l'exercice précédent.
- Prise en compte de la TVA (art. 38 A annexe III) : opérations, immobilisations, charges et produits enregistrés hors taxes, car la TVA collectée est due au Trésor et la TVA supportée est déductible : neutralité pour l'entreprise.

QCM d'entraînement : `bpr-008`, `bpr-009`, `bpr-010`

### or-15 · Comment définit-on le bénéfice net imposable en BIC (art. 38-1 et 38-2 CGI) ? Quels sont les effets d'un apport, d'une remise de dette ou d'un dégrèvement sur l'actif net ?

*Thème : BIC — principes · probabilité ★★★ · TD*

- Art. 38-1 CGI, définition analytique : le bénéfice net est déterminé d'après le résultat d'ensemble des opérations de toute nature, principales ou accessoires, y compris les cessions d'éléments d'actif : produits − charges, après retraitements extra-comptables.
- Art. 38-2 CGI, définition synthétique : différence entre l'actif net à la clôture et à l'ouverture de l'exercice, diminuée des apports supplémentaires et augmentée des prélèvements de l'exploitant ou des associés.
- Actif net = total de l'actif − dettes envers les tiers ; le compte de l'exploitant et les capitaux propres ne sont pas des dettes ; actif (emplois) = passif (ressources) ; le résultat figure au passif car il est dû aux associés, aux créanciers et à l'État.
- Les deux définitions se complètent : on part de l'analytique, mais seule la synthétique saisit un enrichissement qui n'est ni produit ni charge, comme la disparition d'une dette.
- Remise de dette (art. 1350 C. civ.) ou dégrèvement d'un impôt déductible inscrit au passif : la dette disparaît, l'actif net augmente, produit imposable (art. 38-2), car ce n'est ni un apport ni un prélèvement ; vol ou perte d'un actif : charge exceptionnelle, variation négative de l'actif net.
- Apport ou retrait de l'exploitant (art. 38 II) : variation d'actif net neutralisée, non imposable ; ce n'est pas un revenu au sens de l'art. 12.

QCM d'entraînement : `bpr-011`, `bpr-013`

### or-16 · Distinguez l'actif immobilisé, l'actif circulant, la charge et le passif.

*Thème : BIC — principes · probabilité ★★★ · TD*

- Actif immobilisé (art. 38 quater ann. III renvoyant à l'art. 212-1 PCG ; contrôle défini à l'art. 211-1 PCG) : bien corporel ou incorporel identifiable, à valeur économique positive, contrôlé par l'entreprise, procurant des avantages économiques futurs, destiné à rester durablement dans l'entreprise (au moins 12 mois, ne se consomme pas au premier usage).
- Seuil : valeur unitaire d'au moins 500 euros HT ; en dessous, ou si la durée de vie est inférieure à 12 mois, c'est une charge ; les travaux allongeant la durée de vie d'une immobilisation sont immobilisés, non déductibles.
- Charge (art. 511-1 PCG) : dépense qui appauvrit l'entreprise, déductible immédiatement ; l'immobilisation, elle, ne se déduit que par amortissement et sa sortie relève du régime des plus-values professionnelles.
- Actif circulant : ne reste pas durablement mais reste lié à l'activité : stocks, créances clients, disponibilités (trésorerie).
- Passif (art. 321-1 PCG) : élément du patrimoine à valeur négative entraînant une sortie de ressources sans contrepartie équivalente, dette envers un tiers (emprunts, fournisseurs) ; à côté figurent les capitaux propres (compte de l'exploitant, résultat), classés par exigibilité croissante.
- Pas-de-porte : supplément de loyer (charge déductible pour le preneur, produit pour le bailleur) ou indemnité (élément d'actif immobilisé, non déductible immédiatement).

QCM d'entraînement : `bpr-014`, `bpr-015`, `bpr-016`, `bpr-017`, `bpr-026`

### or-17 · Qu'est-ce que la comptabilité d'engagement (créances acquises et dettes certaines) et quel est le fait générateur des produits et des charges en BIC ?

*Thème : BIC — principes · probabilité ★★★ · TD*

- Comptabilité de caisse (revenus fonciers, traitements et salaires, BNC par principe, micro-BIC) : on retient l'encaissé et le décaissé du 1er janvier au 31 décembre ; comptabilité d'engagement (BIC au réel) : produits et charges sont comptabilisés même non encaissés ou décaissés.
- Art. 38-2 bis CGI : les produits sont rattachés à l'exercice au cours duquel leur fait générateur est intervenu : la livraison pour une vente, l'exécution ou l'achèvement de la prestation pour une prestation de services ; contrats à exécution successive : période par période.
- En droit comptable, le fait générateur retenu est l'émission ou la réception de la facture ; à défaut, le droit fiscal se réfère à l'exigibilité de l'obligation (conclusion du contrat sans terme, échéance sinon).
- Fondement juridique (question de grand oral selon le CM) : dès que sa créance est exigible, le créancier dispose d'un droit personnel contre son débiteur et peut agir en justice, qu'il ait été payé ou non.
- Principes liés : image fidèle du patrimoine et prudence comptable : on anticipe les pertes et charges probables (provisions, amortissements), jamais les gains latents.
- Conséquence fiscale : amortissements et provisions ne sont admis qu'en comptabilité d'engagement ; option possible en BNC (art. 93 A).

QCM d'entraînement : `bpr-018`, `bpr-019`, `bpr-020`

### or-18 · Quels sont les produits imposables en BIC ? Quel est le sort des subventions, indemnités, abandons de créances et dégrèvements ?

*Thème : BIC — principes · probabilité ★★☆ · TD*

- Pas de définition légale précise (renvoi à l'art. L. 123-12 C. com. et au CGI) ; trois catégories : produits d'exploitation ou hors exploitation, produits financiers, produits exceptionnels.
- Produits d'exploitation : le chiffre d'affaires rattaché à l'objet réel de l'activité, net des remises et ristournes, rattaché à l'exercice selon la comptabilité d'engagement (art. 38-2 bis).
- Produits financiers : dividendes et intérêts perçus par l'entrepreneur individuel relèvent en principe des RCM, mais tolérance administrative les rattachant aux BIC (optimisation de trésorerie) ; les intérêts de retard sont une indemnisation, non un revenu financier.
- Subventions et aides interentreprises (versement, abandon de créance, remise de dette) : imposables car elles augmentent l'actif net ; régime d'étalement des subventions d'équipement à l'art. 42 septies CGI.
- Indemnités : imposables si elles compensent une charge ou une perte déductible (principe de réciprocité) : assurance perte de stock, assurance homme clé ; l'indemnité compensant la perte d'un actif immobilisé (sinistre, expropriation) relève du régime des plus-values professionnelles.
- Autres produits exceptionnels : dégrèvement d'impôt imposable si l'impôt dégrevé était une charge déductible (CET) ; gains de change et écarts de conversion ; l'apport de l'exploitant n'est pas un produit (art. 38 II).

QCM d'entraînement : `bpr-021`, `bpr-022`, `bpr-023`, `bpr-025`

### or-19 · Quelles sont les conditions générales de déductibilité d'une charge (art. 39 CGI) et quelles charges sont exclues par la loi ?

*Thème : BIC — charges · probabilité ★★★ · TD*

- Fondement : art. 13 CGI (charge engagée pour acquérir ou conserver un revenu) et art. 39 CGI pour les BIC ; trois types de charges : frais généraux, amortissements, provisions.
- Cinq conditions cumulatives : (1) la charge se traduit par une diminution de l'actif net (distinction charge / immobilisation) ; (2) elle est rattachée à l'exercice au cours duquel elle est engagée (fait générateur = la facture, même payée l'année suivante) ; (3) elle est engagée dans l'intérêt de l'entreprise ; (4) elle est régulièrement comptabilisée et appuyée d'une pièce justificative ; (5) sa déduction n'est pas exclue par un texte légal ou réglementaire.
- Intérêt de l'entreprise : notion plus large que l'objet social, appréciée selon les standards de gestion normale ; sanction : acte anormal de gestion (CE 2018, Société Croë Suisse) ; indices : cause du contrat, captation de chiffre d'affaires, bénéficiaire (dépenses personnelles de l'exploitant ou de ses proches exclues).
- Principe d'amoralisme (CE 11 juillet 1983) : une charge comptabilisée et justifiée est déductible sans considération morale ; une condamnation civile est déductible.
- Exclusions légales : art. 39-2 et 39-2 bis : amendes et sanctions pénales ou administratives, commissions versées à des agents publics étrangers (art. 240) ; art. 39-4 : dépenses somptuaires (yachts, chasse, pêche, résidences de plaisance, sauf outil professionnel), suramortissement des véhicules de tourisme.
- Typologie : charges d'exploitation et hors exploitation, charges financières (intérêts d'emprunt, compte courant d'associé), charges exceptionnelles ; méthode : vérifier chaque condition, traiter en dernier celle qui pose difficulté, réintégrer extra-comptablement la charge non déductible.

QCM d'entraînement : `bch-001`, `bch-003`, `bch-004`

### or-20 · À quelles conditions les cadeaux d'entreprise sont-ils déductibles ?

*Thème : BIC — charges · probabilité ★★★ · TD*

- Art. 39-5 e CGI : les cadeaux de toute nature sont déductibles, à l'exception des objets de faible valeur spécialement conçus pour la publicité, qui restent déductibles mais sous le régime propre de la publicité.
- Condition 1 : cadeaux effectués dans l'intérêt de l'entreprise (fidélisation, prospection, maintien de bonnes relations commerciales) ; condition 2 : valeur non excessive, proportionnée au chiffre d'affaires réalisé avec le client.
- Condition 3 : relever d'une gestion normale, conforme aux usages professionnels et aux règles comptables.
- Condition 4 : au-delà de 3 000 euros par an, inscription obligatoire sur le relevé des frais généraux (art. 4 J annexe IV CGI), sous peine de l'amende fiscale de l'art. 1763 CGI.
- Condition 5 : cadeaux justifiés (factures, contrats) et enregistrés comptablement en charge ; à défaut, réintégration extra-comptable.
- Articulation avec la TVA : la TVA sur les biens cédés sans rémunération n'est pas déductible, sauf biens de très faible valeur n'excédant pas 73 euros TTC par an et par bénéficiaire (art. 28-0 annexe IV) et objets publicitaires.

QCM d'entraînement : `bch-005`, `bch-006`, `bch-007`

### or-21 · À quelles conditions les rémunérations, primes et séminaires offerts aux salariés sont-ils déductibles ?

*Thème : BIC — charges · probabilité ★★☆ · TD*

- Rémunérations (art. 39, 1, 1° CGI) : deux conditions, correspondre à un travail effectif et ne pas être excessives eu égard à l'importance du service rendu ; on compare la prime à la rémunération annuelle du salarié.
- Séminaires et voyages de stimulation : déductibles s'ils sont engagés dans l'intérêt de l'entreprise et visent effectivement à stimuler son activité (CE 31 juillet 1992).
- Pour les salariés, le voyage de stimulation ou de team building ne constitue ni un avantage en nature ni une gratification imposable (CE 31 juillet 1992 et 21 juin 1995).
- Abus si le montant est manifestement disproportionné par rapport au chiffre d'affaires : dépense non déductible, acte anormal de gestion, réintégration.
- Dépense sociale (art. 39) : déductible si elle profite à l'ensemble du personnel dans le cadre d'une politique sociale ; conditions communes : frais justifiés, directement liés à l'activité et proportionnés.
- Indemnités de licenciement économique : non déductibles (art. 39, 1, 5°) ; indemnités de licenciement pour motif personnel : déductibles.

QCM d'entraînement : `bch-008`, `bch-009`, `bch-018`

### or-22 · Qu'est-ce qu'un amortissement ? Quels biens sont amortissables et à quelles conditions l'amortissement est-il déductible ?

*Thème : BIC — charges · probabilité ★★★ · TD*

- Définition (art. 214-13 PCG) : constatation annuelle et irréversible de la dépréciation d'un actif immobilisé due à l'usure ou à l'obsolescence (physique, technique, juridique — un brevet dure 20 ans —, économique) ; ce n'est pas une sortie d'argent mais une charge calculée, fondée sur l'image fidèle.
- Conditions de déductibilité (art. 39 CGI) : porter sur un actif immobilisé, de valeur unitaire d'au moins 500 euros HT (en dessous, charge immédiate), de durée d'utilisation supérieure à 12 mois, et être effectivement constaté en comptabilité ; amortissement par composants (toiture, gros œuvre, façade).
- Biens non amortissables : terrains et foncier non bâti (CE 23 mai 1938, n° 58028), fonds de commerce (universalité de fait dont la valeur fluctue), titres sociaux.
- Calcul : durée d'usage encadrée par l'administration (ordinateur 3 à 5 ans, matériel 5 à 10 ans, immeuble 20 à 25 ans) ; linéaire : annuité = valeur / durée ; prorata temporis depuis la mise en service : annuité × jours d'utilisation / 360.
- Amortissement minimal (art. 39 B CGI) : à la clôture, le cumul des amortissements ne peut être inférieur au linéaire ; obligation comptable même sans bénéfice (art. L. 123-20 C. com., art. 214-7 et 214-11 PCG) ; l'amortissement irrégulièrement différé est définitivement perdu : le délai de réclamation de 3 ans de l'art. R. 196-1 LPF ne permet pas de le récupérer.
- Véhicules de tourisme (5 places, contre 2 pour le véhicule de société) : amortissables si nécessaires et affectés à l'activité, mais base plafonnée selon les émissions de CO2 (seuil de 200 g/km : plafond ramené à 10 000 euros au-dessus, 20 000 euros en dessous selon le CM) ; base TTC car TVA non récupérable ; le suramortissement est une charge somptuaire réintégrée ; ⚠️ droit positif : art. 39-4, plafonds de 9 900 à 30 000 euros selon quatre tranches de CO2.

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
- Opérations génératrices : toute cession à titre onéreux au sens fiscal (vente, échange, apport en société, cession du fonds de commerce), la migration du bien vers le patrimoine privé, les sorties involontaires indemnisées (expropriation, sinistre, vente forcée) ; la donation relève des droits de mutation à titre gratuit.
- Calcul : plus-value = prix de cession − valeur nette comptable ; VNC = prix d'acquisition − amortissements pratiqués ; pour un bien non amortissable, VNC = valeur d'origine ; pour une clientèle créée par l'exploitant, VNC nulle, la plus-value égale le prix de cession.
- Pas d'imposition d'une plus-value latente (aucune contrepartie perçue) ; la moins-value latente est provisionnée et la provision est déductible.
- Régimes spéciaux : éléments non utilisés pour l'activité (inscrits au bilan sans y être affectés) : plus-values des particuliers (fin de la théorie du bilan) ; sinistres et expropriations : étalement de l'imposition (art. 42 septies) ; biens migrants (art. 151 sexies) : plus-value professionnelle jusqu'au changement d'affectation, plus-value des particuliers ensuite.

QCM d'entraînement : `bpv-001`, `bpv-002`, `bpv-003`

### or-25 · Comment qualifie-t-on une plus-value ou une moins-value professionnelle à court terme ou à long terme ?

*Thème : BIC — plus-values · probabilité ★★★ · TD*

- Art. 39 duodecies 2 à 5 et 39 quindecies CGI : deux critères combinés, la durée de détention (moins ou plus de 2 ans) et le caractère amortissable ou non du bien.
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
- Plus-value nette à long terme (art. 39 duodecies 3 et 5, art. 39 quindecies) : taux proportionnel de 12,8 % d'IR + 17,2 % de prélèvements sociaux, soit 30 %, à côté du résultat, hors barème.
- Moins-value nette à long terme : non déductible du résultat ; tunnelisation : imputable uniquement sur les plus-values nettes à long terme des 10 exercices suivants, perdue au-delà.
- Un déficit professionnel antérieur non encore imputé sur le revenu global peut s'imputer sur une plus-value nette à long terme.

QCM d'entraînement : `bpv-006`, `bpv-007`, `bpv-008`

### or-27 · Présentez l'exonération des plus-values des petites entreprises en fonction des recettes (art. 151 septies CGI).

*Thème : BIC — plus-values · probabilité ★★★ · TD*

- Champ : toute opération faisant sortir un élément de l'actif, y compris la cession isolée d'un actif immobilisé ; cédant : exploitant individuel ou société relevant de l'IR.
- Conditions : activité industrielle, commerciale, artisanale, agricole ou libérale (ICAAL) exercée à titre professionnel (participation personnelle, directe et continue, location-gérance exclue) depuis au moins 5 ans, sauf plus-value réalisée à la suite d'un sinistre ou d'une expropriation.
- Seuils de recettes (chiffre d'affaires moyen des deux derniers exercices) : exonération totale jusqu'à 250 000 euros (ventes) ou 90 000 euros (prestations de services) ; partielle et dégressive jusqu'à 350 000 euros (ventes) et 126 000 euros (prestations) ; activité agricole : 450 000 / 500 000 euros.
- Exonération partielle proportionnelle ; le corrigé du TD écrit pour les prestations : taux = (recettes − 90 000) / 36 000 ; ⚠️ droit positif : la fraction exonérée est (126 000 − recettes) / 36 000 pour les prestations et (350 000 − recettes) / 100 000 pour les ventes (le TD inverse la formule).
- Portée : toutes les plus-values, à court et long terme, mobilières et immobilières (exclus : terrains à bâtir et locaux d'habitation des loueurs en meublé non professionnels), pour l'IR ET les prélèvements sociaux : régime le plus favorable quand l'exonération totale est acquise.
- Non cumulable avec l'art. 238 quindecies pour une même opération ; cumulable avec les art. 151 septies A et 151 septies B.

QCM d'entraînement : `bpv-009`, `bpv-010`, `bpv-016`

### or-28 · Présentez l'exonération de l'art. 238 quindecies CGI (transmission d'une entreprise ou d'une branche complète d'activité).

*Thème : BIC — plus-values · probabilité ★★★ · TD*

- Objet : transmission, à titre onéreux ou gratuit, d'une entreprise individuelle, d'une branche complète et autonome d'activité ou d'éléments assimilés (fonds de commerce) ; objectif : pérenniser l'emploi et l'activité.
- Conditions d'activité : activité ICAAL exercée à titre professionnel depuis au moins 5 ans, y compris en location-gérance.
- Condition de valeur : la valeur des éléments transmis (hors immeubles) doit être inférieure à 1 000 000 euros ; exonération totale si elle est inférieure à 500 000 euros ; partielle entre 500 000 et 1 000 000 euros selon le taux (1 000 000 − valeur des éléments cédés) / 500 000 ; aucune exonération au-delà d'un million.
- Absence de contrôle en cas de cession à titre onéreux à une société : le cédant ne doit ni détenir 50 % ou plus du cessionnaire, ni en exercer la direction effective, au moment de la cession et pendant les 3 ans suivants ; condition sans objet pour une cession à une personne physique ou à titre gratuit.
- Portée : plus-values mobilières à court et long terme, IR et prélèvements sociaux ; les immeubles bâtis ou non bâtis sont exclus ; option sur papier libre lors de la déclaration de cessation selon l'administration, assouplie par la jurisprudence.
- Non cumulable avec l'art. 151 septies pour une même opération ; cumulable avec les art. 151 septies A et B.

QCM d'entraînement : `bpv-011`, `bpv-012`

### or-29 · Présentez les exonérations des art. 151 septies A (départ à la retraite) et 151 septies B (immeubles d'exploitation) et le cumul des régimes.

*Thème : BIC — plus-values · probabilité ★★★ · TD*

- Art. 151 septies A, conditions : cession de l'entreprise individuelle, du fonds de commerce ou de l'intégralité des parts d'une société à l'IR par un associé y exerçant son activité ; activité ICAAL professionnelle depuis plus de 5 ans (location-gérance admise) ; PME : moins de 250 salariés, chiffre d'affaires inférieur à 50 millions d'euros ou total de bilan inférieur à 43 millions, capital non détenu à 25 % ou plus par des non-PME.
- Art. 151 septies A, retraite : le cédant cesse toute fonction dans l'entreprise et fait valoir ses droits à la retraite dans les 2 ans avant ou après la cession ; pas de contrôle du cessionnaire.
- Art. 151 septies A, portée : exonération totale d'IR des plus-values à court et long terme, mais les prélèvements sociaux restent dus (17,2 % sur le long terme) ; immeubles exclus ; l'étalement de l'art. 39 quaterdecies ne joue pas (cessation d'activité).
- Art. 151 septies B, champ : plus-values à long terme sur immeubles bâtis ou non bâtis, droits de crédit-bail immobilier, parts de sociétés à prépondérance immobilière, inscrits à l'actif immobilisé et affectés à l'exploitation (locaux, ateliers, bureaux) ; exclus : immeubles de placement et terrains à bâtir ; 5 ans d'affectation.
- Art. 151 septies B, calcul : aucun abattement pendant les 5 premières années, puis 10 % par année de détention au-delà de la 5e, soit exonération totale après 15 ans ; seules les années complètes comptent ; ne porte que sur la fraction à long terme (la fraction à court terme des amortissements reste imposée) ; le TD retient IR et prélèvements sociaux (le CM Sibylle note l'inverse : suivre le TD, conforme au droit positif).
- Cumul : 151 septies et 238 quindecies exclusifs l'un de l'autre, tous deux cumulables avec 151 septies A et B ; ordre de traitement du cas pratique : 151 septies B, 151 septies A, 151 septies, 238 quindecies ; 151 septies A est le moins intéressant (pas les prélèvements sociaux, condition de retraite).

QCM d'entraînement : `bpv-013`, `bpv-014`, `bpv-015`

### or-30 · Quels sont les régimes d'imposition des BIC : micro-BIC, réel simplifié, réel normal ?

*Thème : BIC — régimes d'imposition · probabilité ★★★ · TD*

- Deux approches des charges : forfaitaire (micro-BIC, art. 50-0 CGI) ou à l'euro près (régime réel, art. 302 septies A bis CGI) ; le traitement fiscal est identique entre réel simplifié et réel normal, seules les obligations déclaratives diffèrent.
- Micro-BIC de plein droit si le chiffre d'affaires n'excède pas 188 700 euros (ventes et assimilées) ou 77 700 euros (prestations de services) ; bénéfice = chiffre d'affaires − abattement forfaitaire de 71 % (ventes) ou 50 % (prestations).
- Micro : comptabilité de caisse (dérogation aux créances acquises et dettes certaines), ni amortissement ni provision, jamais de déficit ; les plus-values professionnelles se calculent comme si le bien avait été amorti.
- Réel simplifié : obligatoire au-delà des seuils du micro, sur option en dessous ; comptabilité d'engagement ; seuils supérieurs : 840 000 euros (ventes) et 254 000 euros (services) selon le CM (le TD cite 818 000 et 247 000 euros, art. L. 162-4 du Code des impositions sur les biens et services).
- Réel normal : au-delà de ces seuils ; mêmes règles fiscales, obligations comptables et déclaratives plus lourdes ; méthode du TD : comparer le chiffre d'affaires aux seuils et conclure sur le régime applicable.
- Au régime réel, un déficit BIC professionnel s'impute sur le revenu global et le reliquat se reporte pendant 6 ans.

QCM d'entraînement : `brg-001`, `brg-002`, `brg-003`, `brg-004`, `brg-005`, `brg-006`

### or-31 · Comment passe-t-on du résultat comptable au résultat fiscal ? Qu'est-ce qu'une réintégration et une déduction extra-comptables ?

*Thème : BIC — régimes d'imposition · probabilité ★★★ · TD*

- Fondement : art. 38 quater annexe III CGI, le droit fiscal suit le droit comptable sauf dérogation ; résultat fiscal = résultat comptable + réintégrations − déductions (tableau 2058-A de la liasse fiscale).
- Réintégrations extra-comptables : charges comptabilisées mais non déductibles fiscalement, qui majorent le résultat fiscal : amendes et pénalités (art. 39-2), dépenses somptuaires (art. 39-4), provisions non déductibles (licenciement économique, convocation postérieure à la clôture, amende), suramortissement des véhicules de tourisme, cadeaux excessifs ou non justifiés, rémunérations excessives, amortissement d'un terrain.
- Déductions extra-comptables : produits comptabilisés mais exonérés ou imposés à part, qui minorent le résultat fiscal : subventions exonérées ou étalées (art. 42 septies), plus-values à long terme taxées à 30 %, plus-values exonérées (151 septies, 238 quindecies), certains produits financiers.
- Produits non comptabilisés mais imposables à ajouter : remise de dette ou dégrèvement passés directement au compte de l'exploitant (variation d'actif net, art. 38-2).
- Neutralisation des apports et prélèvements de l'exploitant (art. 38 II) : un apport n'est pas un produit, un prélèvement n'est pas une charge.
- Méthode du TD : examiner produit par produit s'il est imposable et charge par charge si elle est déductible, puis retraiter ce que le comptable a déduit ou omis.

QCM d'entraînement : `brg-007`, `brg-009`, `brg-010`, `brg-017`

### or-32 · Définissez les bénéfices non commerciaux (art. 92 CGI) et présentez leur détermination et leurs régimes d'imposition.

*Thème : BIC — régimes d'imposition · probabilité ★★☆*

- Art. 92 CGI, trois sources : professions libérales proprement dites (activités civiles où les ressources intellectuelles priment), produits des charges et offices (notaires, professions réglementées), revenus inclassables ne relevant d'aucune autre catégorie.
- Théorie de l'accessoire : les actes de commerce accessoires d'un professionnel libéral restent imposés en BNC (pharmacien vendant des prothèses).
- Détermination (art. 93) : recettes encaissées − dépenses payées, comptabilité de caisse ; option pour les créances acquises et dettes certaines (art. 93 A) ; sans option, ni amortissement ni provision ; avec option, provisions limitées aux clients douteux et à certains risques et charges.
- Actif professionnel : critère de la nécessité à l'exercice de la profession, plus rigoureux que l'utilité retenue en BIC.
- Micro-BNC (art. 102 ter) : recettes de l'année précédente ou de l'avant-dernière n'excédant pas 177 700 euros selon le CM, abattement forfaitaire de 34 % pour charges ; ⚠️ droit positif : le seuil légal est 77 700 euros.
- Régime réel : la déclaration contrôlée, de plein droit au-delà du seuil ou sur option ; mêmes règles que les BIC.

QCM d'entraînement : `brg-012`, `brg-013`, `brg-014`, `brg-016`

### or-33 · Quelles sont les six étapes de la liquidation de l'impôt sur le revenu ?

*Thème : Liquidation de l'IR · probabilité ★★★*

- Étape 1 (champ d'application) : déterminer les membres du foyer fiscal (art. 6 CGI, personnes à charge art. 195 et suivants) et le domicile fiscal de chacun (art. 4 A et 4 B).
- Étape 2 (assiette) : pour chaque membre et chaque catégorie (TS, RF, RCM, plus-values, BIC, BNC, BA), revenu brut − charges selon le régime micro ou réel = revenu net catégoriel.
- Étape 3 (assiette) : revenu global brut = somme des revenus nets catégoriels (art. 13 et 156) ; les déficits professionnels (BIC, BNC) s'imputent sans limite, les déficits non professionnels ne s'imputent qu'entre eux, sauf le déficit foncier dans la limite de 10 700 euros (art. 156, I-3°).
- Étape 4 (assiette) : revenu global net imposable = revenu global brut − charges déductibles du revenu global (art. 156 II : pensions alimentaires, CSG déductible, épargne retraite) − abattements (art. 196 B).
- Étape 5 (liquidation) : IR brut = nombre de parts (art. 194-195), quotient familial = revenu net imposable / parts (art. 193), barème progressif par tranches (art. 197) puis multiplication par le nombre de parts ; plafonnement de l'avantage du quotient familial et décote.
- Étape 6 (liquidation) : IR net = IR brut − réductions d'impôt − crédits d'impôt, dans cet ordre ; puis contribution exceptionnelle sur les hauts revenus (art. 223 sexies) et paiement par prélèvement à la source.

QCM d'entraînement : `liq-001`, `liq-002`, `liq-015`

### or-34 · Quelles charges sont déductibles du revenu global (art. 156 II CGI) et quels abattements s'appliquent (art. 196 B) ?

*Thème : Liquidation de l'IR · probabilité ★★☆*

- Charges non rattachables à une catégorie, déduites du revenu global brut : pensions alimentaires, fraction déductible de la CSG, versements sur les plans d'épargne retraite.
- Pension versée en exécution d'une décision de justice, ou à un enfant mineur hors décision de justice : intégralement déductible.
- Pension aux ascendants : déductible sans justificatif dans la limite de 3 786 euros par personne ; au-delà, prouver l'état de besoin ; ascendant de plus de 75 ans, versement possible à l'établissement d'accueil.
- Pension à un enfant majeur non rattaché et dans le besoin : plafond de 6 368 euros par an et par enfant ; alternative : rattachement de 18 à 21 ans sur option, jusqu'à 25 ans en cas d'études.
- Abattements de l'art. 196 B : contribuables de plus de 65 ans au 31 décembre ou invalides ; parents accueillant sous leur toit un enfant chargé de famille : 6 368 euros par personne et par an ; ⚠️ droit positif : plafonds revalorisés chaque année.

QCM d'entraînement : `liq-003`, `liq-004`

### or-35 · Expliquez le quotient familial (parts, majorations, plafonnement) et le barème progressif de l'IR.

*Thème : Liquidation de l'IR · probabilité ★★★*

- Art. 193 CGI : quotient familial = revenu net global imposable / nombre de parts ; il atténue la progressivité du barème ; situation appréciée au 1er janvier, ou au 31 décembre si plus favorable.
- Parts (art. 194 et 195) : célibataire ou concubin 1 part ; couple marié ou pacsé 2 parts ; les deux premières personnes à charge 0,5 part chacune, 1 part entière à partir de la troisième.
- Majorations de 0,5 part cumulables : parent isolé ayant assumé seul la charge d'un enfant pendant 5 ans ; titulaire d'une carte d'invalidité (plus de 40 %) ; veuf ou veuve l'année du décès ; enfants de parents séparés sans décision judiciaire : rattachement au parent aux revenus les plus élevés.
- Barème par tranches (art. 197, chiffres du CM) : 0 % jusqu'à 10 777 euros ; 11 % de 10 777 à 27 478 euros ; 30 % de 27 478 à 78 570 euros ; 41 % de 78 570 à 168 994 euros ; 45 % au-delà ; on additionne l'impôt de chaque tranche pour une part puis on multiplie par le nombre de parts ; ⚠️ droit positif : barème sur les revenus 2024 : 11 497 / 29 315 / 83 823 / 180 294 euros.
- Plafonnement de l'avantage du quotient familial : l'économie d'impôt procurée par chaque demi-part de personne à charge est limitée à environ 1 800 euros ; méthode : impôt calculé sans les personnes à charge − impôt avec, l'écart ne pouvant dépasser 1 800 euros par demi-part.
- Décote : atténue les effets de seuil pour les contribuables faiblement imposés, calculée automatiquement par l'administration.

QCM d'entraînement : `liq-005`, `liq-006`, `liq-012`

### or-36 · Distinguez réduction d'impôt et crédit d'impôt et citez les dispositifs du cours avec leurs chiffres.

*Thème : Liquidation de l'IR · probabilité ★★★*

- Ordre d'imputation sur l'impôt brut : d'abord les réductions, puis les crédits ; IR net = IR brut − réductions − crédits.
- Réduction d'impôt : diminue l'impôt dû mais ne peut jamais dépasser l'impôt (pas de remboursement) ; crédit d'impôt : créance sur l'État, l'excédent est remboursé au contribuable.
- Réduction pour frais de scolarité (art. 199 quater F) : 61 euros par enfant au collège, 153 euros au lycée, 183 euros dans l'enseignement supérieur (hors apprentis).
- Réduction pour dons (art. 200) : 66 % des sommes versées aux organismes d'intérêt général ou reconnus d'utilité publique, dans la limite de 20 % du revenu imposable ; 75 % pour les premiers 1 000 euros versés aux organismes d'aide aux personnes en difficulté (repas, logement, soins ; amendement Schiappa), 66 % au-delà.
- Crédit pour l'emploi d'un salarié à domicile (art. 199 sexdecies) : 50 % des dépenses, plafonnées à 12 000 euros par an (15 000 euros avec deux enfants ou plus ; 15 000 et 18 000 euros la première année) ; sous-plafonds : informatique 3 000 euros, petit bricolage 500 euros, jardinage 5 000 euros.
- Crédit pour frais de garde de jeunes enfants (art. 200 quater B) : enfants de moins de 6 ans gardés hors du domicile (crèche, assistant maternel agréé) ; 50 % des sommes versées, plafonnées à 3 500 euros par enfant, soit 1 750 euros de crédit maximum.

QCM d'entraînement : `liq-007`, `liq-013`, `liq-014`

### or-37 · Qu'est-ce que la contribution exceptionnelle sur les hauts revenus et comment l'IR est-il payé (prélèvement à la source) ?

*Thème : Liquidation de l'IR · probabilité ★★☆*

- CEHR (art. 223 sexies CGI) : due par foyer fiscal lorsque le revenu fiscal de référence excède 250 000 euros pour une personne seule ou 500 000 euros pour un couple marié ou pacsé.
- Barème par tranches : personne seule, 3 % entre 250 000 et 500 000 euros, 4 % au-delà ; couple, 3 % entre 500 000 euros et 1 million, 4 % au-delà d'un million.
- Prélèvement à la source (art. 204 A et suivants CGI) : supprime le décalage d'un an entre perception du revenu et paiement ; taux calculé d'après l'impôt de l'année précédente, ajustable ; déclaration annuelle en mai de l'année suivante et régularisation au 31 décembre.
- Retenue à la source (art. 204 B) : opérée par l'employeur ou l'organisme payeur sur les salaires, pensions de retraite, allocations de chômage et allocations non exonérées.
- Acomptes (art. 204 C) : versés spontanément par le contribuable pour les BIC, BNC, BA et revenus fonciers ; les autres revenus ne sont pas concernés (RCM : PFONL retenu par la société distributrice).

QCM d'entraînement : `liq-010`, `liq-011`

### or-38 · Quelles sont les trois conditions de l'imposition à la TVA par nature (art. 256 CGI) ? Définissez la livraison de biens, la prestation de services et l'opération complexe.

*Thème : TVA — champ d'application · probabilité ★★★*

- Art. 256 I CGI, conditions cumulatives : une opération (livraison de biens ou prestation de services), réalisée à titre onéreux, par un assujetti agissant en tant que tel ; distinguer opération dans le champ (imposée ou exonérée) et hors champ ; l'assujetti réalise des opérations dans le champ, le redevable paie la taxe au Trésor.
- Livraison de biens corporels (meubles ou immeubles ; gaz et électricité assimilés) : transfert du pouvoir de disposer d'un bien comme un propriétaire (CJCE aff. 320/88, 8 février 1988 selon le CM), plus large que le transfert de propriété : c'est la délivrance ; vise vente, échange, prêt de consommation, apport en société, transfert physique intracommunautaire.
- Prestation de services : définition négative, tout ce qui n'est pas une livraison : contrat d'entreprise, cession de biens incorporels, transport, location, travaux immobiliers, obligation de ne pas faire rémunérée (clause de non-concurrence).
- Principe de l'imposition opération par opération : des taux différents peuvent coexister au sein d'une même activité (restauration sur place 10 %, alcool 20 %, vente à emporter 5,5 %).
- Opération complexe : CJCE 25 février 1999, CPP (aff. C-349/96), un régime unique s'applique lorsque la décomposition serait artificielle ; codifiée à l'art. 257 ter CGI ; réaffirmée par CJUE aff. C-581/19.
- Deux méthodes : la règle de l'accessoire (rapport objectif de sujétion : pour le consommateur moyen, approche in abstracto, l'accessoire n'est pas une fin en soi mais le moyen de bénéficier au mieux du principal, dont il suit le régime) et l'économie générale de l'opération (prestations indissociables sans hiérarchie : on retient l'élément déterminant du consentement, indice du prix de revient ; la ventilation du prix n'est pas décisive).

QCM d'entraînement : `tvc-001`, `tvc-002`, `tvc-003`, `tvc-017`

### or-39 · Qu'est-ce qu'une opération à titre onéreux (lien direct) et qu'est-ce qu'un assujetti (art. 256 A CGI) ?

*Thème : TVA — champ d'application · probabilité ★★★*

- Titre onéreux : existence d'une contrepartie (art. 1107 C. civ.), sous toute forme ; pas de théorie du juste prix (vente à perte possible), mais le prix vil équivaut à une absence de prix.
- Lien direct (CJCE Apple & Pear, 8 mars 1988) : un bénéficiaire individualisé ou individualisable et une relation nécessaire de réciprocité entre l'opération et la contrepartie.
- Hors TVA faute de lien direct : subventions sans bénéficiaire identifié, indemnités et dommages-intérêts réparant un préjudice, intérêts moratoires, arrhes conservées par l'hôtelier (CJCE 18 juillet 2007, Société thermale d'Eugénie-les-Bains), musicien de rue ; dans la TVA : obligation de non-concurrence rémunérée.
- Assujetti (art. 256 A) : personne qui effectue de manière indépendante une activité économique, quel que soit son statut ; activité économique = activité habituelle, professionnelle, quelle qu'en soit la nature ; l'intention suffit dès le début (CJCE 14 février 1985, Rompelman) et la qualité reconnue ne peut être remise en cause sauf fraude (CJCE 9 février 1996, INZO : sécurité juridique) ; la gestion du patrimoine privé est exclue.
- Indépendance : agir pour son propre compte et sous sa responsabilité ; salariés et sportifs professionnels exclus ; l'associé qui loue un bien à sa SCI agit de manière indépendante (CJCE 27 janvier 2000).
- Agir en tant que tel : dans le cadre de l'activité économique et non de la sphère privée (CJCE 4 octobre 1995 : la holding cédant sa filiale, l'entrepreneur vendant son ordinateur personnel) ; groupe TVA : assujetti unique de l'art. 256 C CGI, depuis le 1er janvier 2021 selon le CM (⚠️ 2023 selon les fiches).

QCM d'entraînement : `tvc-005`, `tvc-006`, `tvc-007`, `tvc-008`

### or-40 · Quelles opérations sont imposables par détermination de la loi (art. 257 CGI) et quelles opérations sont exonérées (art. 261 et suivants, art. 293 B) ?

*Thème : TVA — champ d'application · probabilité ★★★*

- Art. 257 CGI : la loi soumet à la TVA des opérations qui ne remplissent pas les conditions de l'art. 256 : acquisitions intracommunautaires, importations, certaines activités agricoles, livraisons à soi-même, livraisons d'immeubles.
- Livraison à soi-même : l'assujetti est à la fois fournisseur et client ; TVA collectée et déductible simultanément, pour la neutralité concurrentielle.
- Livraisons d'immeubles : terrains à bâtir obligatoirement taxés ; immeubles neufs (achevés depuis 5 ans au plus) obligatoirement taxés ; immeubles de plus de 5 ans et terrains non à bâtir exonérés, avec option possible.
- Exonération : opération remplissant les conditions mais sortie de l'imposition par la loi, d'interprétation stricte ; trois familles : par secteur, en raison de la taille, exonérations spécifiques.
- Par secteur (art. 261 à 263) : activités médicales et paramédicales à finalité thérapeutique (art. 261-4, critère du remboursement par la Sécurité sociale ; chirurgie esthétique taxable), enseignement, organismes sans but lucratif, formation professionnelle continue, clubs sportifs, spectacles, opérations bancaires et de crédit (art. 261 C), assurances (taxe spécifique).
- Taille : franchise en base de l'art. 293 B, dispense de TVA sous des seuils de chiffre d'affaires, ni TVA collectée ni TVA déductible, option possible ; les fiches citent la réforme 2025 (seuil unique de 25 000 euros ; ⚠️ application suspendue, seuils de droit commun 85 000 / 37 500 euros).
- Spécifiques : immeubles achevés depuis plus de 5 ans, terrains non à bâtir, cession d'une universalité comme un fonds de commerce (art. 257 bis), locations d'immeubles nus et locations à usage d'habitation (droit au logement), exportations (art. 262).

QCM d'entraînement : `tvc-009`, `tvc-011`, `tvc-016`

### or-41 · Quelles opérations exonérées sont imposables sur option ? Expliquez le régime des locations d'immeubles (art. 260 et 261 D) et de la para-hôtellerie.

*Thème : TVA — champ d'application · probabilité ★★☆*

- Art. 260 CGI : option pour la TVA sur la location d'immeuble nu à usage professionnel (clause expresse du bail) et sur la livraison d'un immeuble de plus de 5 ans ou d'un terrain non à bâtir ; option irrévocable pendant 5 ans ; intérêt : récupérer la TVA d'amont et éviter les régularisations, utile seulement si le preneur récupère lui-même la TVA.
- Franchise en base (art. 293 B) : les petites entreprises dispensées peuvent opter pour la TVA afin de déduire la taxe sur leurs dépenses.
- Art. 261 D : location d'immeuble nu taxée de plein droit dans trois cas alternatifs (commercialité par ambiance) : le bailleur participe aux résultats du locataire ; la location est le moyen de poursuivre l'exploitation d'un actif commercial (fonds apporté à une société contrôlée) ; elle accroît le chiffre d'affaires et les débouchés du bailleur (centres commerciaux).
- Locations à usage d'habitation : exonération définitive, aucune option ; exception : la para-hôtellerie, taxée de plein droit au taux de 10 % pour ne pas concurrencer l'hôtellerie.
- Critères administratifs initiaux : location à usage d'habitation avec au moins 3 des 4 services hôteliers (petit-déjeuner, fourniture du linge, nettoyage régulier des locaux, accueil de la clientèle même non personnalisé) ; doctrine jugée contraire à la directive par le CE après renvoi à la CJUE.
- Loi de finances pour 2024, art. 261 D 4° : location de tourisme (lieu où l'on n'élit pas domicile) d'un contrat initial n'excédant pas 30 nuits avec 3 des 4 prestations = TVA ; location meublée résidentielle : 3 des 4 prestations suffisent quel que soit le nombre de nuits.

QCM d'entraînement : `tvc-012`, `tvc-013`, `tvc-014`, `tvc-015`, `tvc-018`

### or-42 · Quelles sont les règles de territorialité des livraisons de biens : livraisons et acquisitions intracommunautaires, exportations, importations ?

*Thème : TVA — territorialité · probabilité ★★★*

- Au sein de l'UE, entre assujettis : principe du pays de destination (TVA du pays de consommation, celle de l'acheteur) ; client non assujetti : TVA du pays de départ, sauf ventes à distance au-delà de 10 000 euros de chiffre d'affaires (art. 258 A : retour au pays d'arrivée, guichet unique OSS) ; toujours vérifier la liste des États membres.
- Livraison intracommunautaire exonérée de TVA française (art. 258 et 262 ter CGI) sous six conditions : (1) livraison à titre onéreux ; (2) vendeur assujetti agissant en tant que tel ; (3) acquéreur assujetti ; (4) bien expédié ou transporté de France vers un autre État membre ; (5) acquéreur identifié à la TVA dans son État et numéro communiqué au vendeur ; (6) obligations déclaratives du vendeur respectées (état récapitulatif, art. 289 B).
- Acquisition intracommunautaire (art. 256 bis) : TVA française autoliquidée par l'acquéreur (art. 283-2 bis), collectée et déduite sur la même déclaration : opération neutre ; exigibilité le 15 du mois suivant la livraison ou à la facture si antérieure.
- Régime dérogatoire des PBRD (art. 256 bis) : personnes morales non assujetties et assujettis sans droit à déduction (médecin) dont les acquisitions n'excèdent pas 10 000 euros HT en N et N-1 : pas d'acquisition taxée en France, TVA du vendeur ; option possible pour le régime général.
- Exportation (bien expédié hors UE) : exonération de TVA française (art. 262 CGI) à condition de prouver la sortie du territoire de l'UE (art. 74 annexe III : comptabilité et documents douaniers) ; facturation hors taxe ; droit à déduction d'amont conservé (art. 271) ; services directement liés à l'exportation exonérés (art. 262 I 1°) ; à défaut de justificatif, vente requalifiée taxable.
- Importation (bien entrant en France) : TVA française (art. 291), exigible au dédouanement (art. 293 A), autoliquidée par l'importateur assujetti (art. 283) et déductible à la même date ; logique du pays de consommation (le CM note « TVA du pays de départ » pour l'importation : lecture à corriger par les fiches) ; dans les deux sens, il existe toujours un droit à déduction.

QCM d'entraînement : `tvt-001`, `tvt-003`, `tvt-004`, `tvt-009`, `tvt-011`

### or-43 · Où se localise une prestation de services (art. 259 CGI) ? Règle B2B, règle B2C et dérogations.

*Thème : TVA — territorialité · probabilité ★★☆*

- Art. 259, 1° (preneur assujetti, B2B) : TVA du pays du preneur ; TVA française autoliquidée si le preneur est établi en France ; pas de TVA française si le prestataire français facture un preneur établi à l'étranger.
- Art. 259, 2° (preneur non assujetti, B2C) : TVA du pays du prestataire ; TVA française si le prestataire est établi en France.
- Dérogations quelle que soit la qualité du preneur (art. 259 A) : location de moyens de transport de courte durée (1°, lieu de mise à disposition), prestations rattachées à un immeuble (2°, lieu de l'immeuble), transport de passagers (4°, distance parcourue en France), ventes à consommer sur place (5°, lieu d'exécution) ; en B2B : accès aux manifestations culturelles, sportives, scientifiques (5° bis, lieu de la manifestation).
- Dérogations propres au B2C : transport intracommunautaire de biens (3°, lieu de départ), prestations culturelles, artistiques, sportives (5° a, lieu d'exécution), travaux et expertises sur biens meubles corporels et prestations accessoires au transport (6°, lieu d'exécution), intermédiaires transparents (7°, lieu de l'opération principale).
- Prestations immatérielles (art. 259 B) : TVA française si prestataire en France et preneur dans l'UE, ou prestataire hors UE et preneur dans l'UE avec service utilisé en France ; services électroniques, télécoms, radio-TV (art. 259 D, liste à l'art. 98 C ann. III) : TVA du pays du preneur.
- Art. 259 C : prestataire hors UE pour un particulier établi en France : TVA française (sauf 259 A et 259 D) ; régime des petits opérateurs : sous 10 000 euros de prestations, TVA du prestataire, avec faculté de renonciation.

QCM d'entraînement : `tvt-006`, `tvt-007`, `tvt-010`, `tvt-012`

### or-44 · Quelle est l'assiette de la TVA (art. 266-267 CGI) et quelles sont les mentions obligatoires de la facture ?

*Thème : TVA — fait générateur, exigibilité, assiette et taux · probabilité ★★☆*

- Assiette (art. 267 CGI cité par le cours ; art. 266 et 267 dans le CGI) : le prix convenu entre les parties, soit toutes les sommes, valeurs, biens ou services reçus en contrepartie de la livraison ou de la prestation : prix, compléments de prix, intérêts, frais accessoires refacturés (transport, frais fiscaux, commissions d'intermédiaires).
- Exclus (art. 267 II) : rabais, remises et ristournes ; débours (frais avancés au nom et pour le compte du client) ; intérêts moratoires ; dépôts de garantie.
- Entre assujettis, les prix sont réputés hors taxe ; mais CE 1979, Comité de propagande de la banane : présomption irréfragable qu'en cas d'oubli de la TVA sur la facture, les sommes facturées sont TTC ; conséquence : les acomptes sont TTC ; conversion : HT = TTC / (1 + taux).
- Régime dérogatoire de la TVA sur la marge : base = prix de vente − prix d'acquisition ; agences de voyages, terrains à bâtir et promotion immobilière, biens d'occasion ; livraisons à soi-même : prix de revient.
- Facture : force probante, elle prouve la charge et conditionne le droit à déduction (art. 271 II), et déclenche l'exigibilité en cas d'option pour les débits ; mentions obligatoires : prix HT, taux de TVA, montant de la TVA ventilé par taux, montant TTC ; fausses factures = droit pénal des affaires.
- Facturation électronique obligatoire : prévue au 1er janvier 2023, reportée à plusieurs reprises (horizon 2026), objectif européen de lutte contre la fraude.

QCM d'entraînement : `tve-001`, `tve-002`, `tve-009`, `tve-011`

### or-45 · Distinguez le fait générateur et l'exigibilité de la TVA (art. 269 CGI) pour les livraisons de biens et les prestations de services.

*Thème : TVA — fait générateur, exigibilité, assiette et taux · probabilité ★★★*

- Art. 269 CGI : le fait générateur est l'événement par lequel les conditions légales de l'exigibilité sont réunies, il fixe la loi applicable (taux, régime) ; l'exigibilité est le droit du Trésor d'exiger le paiement de la TVA collectée, et le moment où naît le droit à déduction chez le client.
- Livraisons de biens corporels (art. 269 I a) : fait générateur et exigibilité coïncident à la livraison, entendue comme le transfert du pouvoir de disposer du bien comme un propriétaire (délivrance, remise matérielle si la date est incertaine), même si le prix n'est pas encaissé ; condition suspensive : à sa réalisation.
- Acomptes sur livraisons de biens : depuis le 1er janvier 2023 (loi de finances pour 2022, sous l'impulsion de CJUE 31 mai 2018, aff. C-660/16), la TVA est exigible à l'encaissement de l'acompte pour la fraction correspondante.
- Prestations de services (art. 269 I a bis et II c) : fait générateur = exécution de la prestation (ou chaque période pour les prestations continues comme le bail) ; exigibilité = encaissement du prix, acomptes compris ; régime plus favorable en trésorerie.
- Option pour les débits (art. 77 annexe III CGI) : le prestataire rend la TVA exigible dès la facturation ; intérêt : le client assujetti déduit plus tôt, son droit à déduction naissant à l'exigibilité chez le fournisseur.
- Régimes particuliers : importation exigible au dédouanement (art. 293 A) ; acquisition intracommunautaire le 15 du mois suivant la livraison ; TVA immobilière (vente d'immeuble à construire) exigible selon les versements.

QCM d'entraînement : `tve-003`, `tve-004`, `tve-010`

### or-46 · Quels sont les taux de TVA et leurs domaines respectifs ?

*Thème : TVA — fait générateur, exigibilité, assiette et taux · probabilité ★★★*

- Taux normal 20 % (art. 278 CGI), applicable sauf disposition spéciale ; l'UE impose un plancher de 15 % ; taux réduits aux art. 278 bis et suivants, d'interprétation stricte.
- Taux intermédiaire 10 % : restauration et ventes à consommer sur place, hôtellerie (cafés-hôtels-restaurants), transport de voyageurs, logement, culture, agriculture, médicaments non remboursés par la Sécurité sociale, para-hôtellerie.
- Taux réduit 5,5 % (art. 278-0 bis) : dépenses de première nécessité : produits alimentaires destinés à l'alimentation humaine, eau, livres, appareils médicaux, prestations des EHPAD, abonnements gaz et électricité, travaux sur les logements d'habitation ; protections hygiéniques (20 % jusqu'en 2015, rapport Matic 2021 adopté le 24 juin 2022).
- Exceptions au 5,5 % : alcools à 20 % ; chocolat selon sa teneur en cacao (noir à partir de 75 % : 5,5 % ; saturé en gras : 20 %) ; vente à emporter 5,5 % contre 10 % sur place.
- Taux super-réduit 2,1 % : publications de presse d'intérêt général, 140 premières représentations de théâtre ou de cirque, médicaments remboursés par la Sécurité sociale, animaux de boucherie vendus à des particuliers.

QCM d'entraînement : `tve-006`, `tve-007`

### or-47 · Quelles sont les conditions de fond, de forme et de temps du droit à déduction de la TVA (art. 271 CGI) ?

*Thème : TVA — droit à déduction · probabilité ★★★*

- Principe (art. 271 CGI, art. 205 à 210 annexe II) : neutralité de la TVA pour l'entreprise ; TVA à payer = TVA collectée (aval) − TVA déductible (amont) ; l'assujetti récupère la TVA supportée sur ses dépenses professionnelles.
- Condition de fond 1 : avoir la qualité d'assujetti et agir en tant que tel ; l'intention d'exercer une activité taxable suffit, à prouver (bail, statuts) (CJCE 14 février 1985, Rompelman).
- Condition de fond 2 : lien direct et immédiat entre le bien ou service acquis et l'activité taxée (CJUE 8 juin 2000, Midland Bank, aff. C-98/98) ; pas de déduction pour une activité exonérée (médecin) ; les frais généraux (plantes, machine à café, frais de liquidation) participent indirectement à l'ensemble de l'activité et ouvrent droit à déduction.
- Condition de fond 3 : absence de fraude ou d'abus (art. 272-3 CGI) : l'administration retire le droit à déduction en cas de participation, même seulement consciente, à un carrousel de TVA, fausses factures, société fictive, prix anormalement bas.
- Condition de forme (art. 271 II) : détenir un justificatif : facture régulière, document douanier, acte notarié, contrat, déclaration d'importation ; sans justificatif, pas de déduction.
- Condition de temps (art. 271 I 2° et 3°, renvoi à l'art. 269) : le droit naît lorsque la TVA devient exigible chez le fournisseur (livraison pour un bien, encaissement pour un service sauf option pour les débits) ; pour les immobilisations, la déduction n'est définitivement acquise qu'après 5 ans d'affectation à l'activité taxée pour les meubles et 20 ans pour les immeubles (art. 207 II annexe II).
- Condition légale supplémentaire : la déduction ne doit pas être exclue par la loi (art. 206 IV annexe II, coefficient d'admission).

QCM d'entraînement : `tvd-001`, `tvd-003`, `tvd-004`, `tvd-015`

### or-48 · Quelles dépenses sont exclues du droit à déduction de la TVA (art. 206 IV annexe II CGI) ?

*Thème : TVA — droit à déduction · probabilité ★★★*

- Art. 206 IV annexe II : liste limitative d'exclusions légales, traduites par un coefficient d'admission égal à 0 ; présomption irréfragable de détournement à des fins personnelles.
- Dépenses de logement des dirigeants et salariés (hôtel du dirigeant en déplacement) ; exceptions : logement des clients, logement gratuit sur les chantiers ou du personnel de gardiennage et de surveillance.
- Véhicules de transport de personnes (véhicules de tourisme, 5 places) : acquisition, location, pièces détachées, réparations ; conséquence : base d'amortissement TTC ; véhicules de société (2 places) et utilitaires déductibles ; transport de personnes (train, avion, taxi, bateau) exclu, péages et parkings déductibles.
- Biens cédés sans rémunération ou à prix symbolique (cadeaux) : exclus, sauf biens de très faible valeur n'excédant pas 73 euros TTC par an et par bénéficiaire (art. 28-0 annexe IV) et objets publicitaires ou spécimens non destinés à la vente.
- Produits pétroliers : l'essence n'ouvre jamais droit à déduction, le gazole ouvre droit à déduction à hauteur de 80 %.
- Biens utilisés à 90 % au moins pour des opérations étrangères à l'entreprise (degré d'affectation mesuré en temps) ; services se rattachant à des biens exclus (réparation d'un véhicule de tourisme).

QCM d'entraînement : `tvd-005`, `tvd-006`, `tvd-007`, `tvd-016`

### or-49 · Comment calcule-t-on le coefficient de déduction de la TVA et quand faut-il régulariser la TVA déduite ?

*Thème : TVA — droit à déduction · probabilité ★★★*

- Art. 205 et 206 annexe II CGI : TVA déductible = TVA supportée × coefficient de déduction ; coefficient de déduction = coefficient d'assujettissement × coefficient de taxation × coefficient d'admission ; il traduit toutes les conditions juridiques du droit à déduction ; si l'un vaut 0, on s'arrête.
- Coefficient d'assujettissement : proportion d'utilisation du bien pour des opérations situées dans le champ de la TVA ; au niveau de l'activité, tout ou rien (1 ou 0) ; bien par bien, mesure physique (surface, temps).
- Coefficient de taxation : part des opérations dans le champ effectivement taxées, mesurée en chiffre d'affaires (activité taxée / activité totale dans le champ) ; bien affecté exclusivement à l'activité taxée = 1, à l'activité exonérée = 0 ; le coefficient de taxation forfaitaire de l'activité (1 = activité non exonérée) n'empêche pas un coefficient plus faible bien par bien.
- Coefficient d'admission : fixé par la loi (art. 206 IV annexe II) : 0 si la dépense est exclue, 0,8 pour le gazole, 1 sinon.
- Régularisation (art. 271 CGI et art. 207 annexe II) : la déduction sur une immobilisation n'est acquise que si le bien reste affecté à l'activité taxée 5 ans (meubles) ou 20 ans (immeubles) ; régularisation annuelle (variation d'affectation, écart de coefficient supérieur à 0,1) ou globale sur événement définitif, avec reversement au prorata des années restant à courir.
- Six cas de régularisation globale : cession ou apport non soumis à la TVA sur le prix total (l'option pour la TVA sur un immeuble ancien l'évite) ; transfert entre secteurs d'activité ; cession ou apport soumis à la TVA sur le prix total (aucun reversement) ; modification législative du droit à déduction ; affectation ultérieure à une activité ouvrant droit à déduction (complément) ; cessation d'affectation à des opérations taxées.
- Exceptions : événement involontaire de force majeure (incendie, vol, expropriation) : pas de régularisation ; cession d'une universalité (art. 257 bis) : pas de régularisation ; actifs circulants et services : engagement sur l'année en cours seulement (stock invendu à la cessation).

QCM d'entraînement : `tvd-008`, `tvd-009`, `tvd-010`, `tvd-011`

### or-50 · Comment la TVA est-elle déclarée et payée (réel normal, réel simplifié, franchise) et que devient un crédit de TVA ?

*Thème : TVA — droit à déduction · probabilité ★★☆*

- La déclaration comporte deux colonnes : TVA collectée auprès des clients (à reverser) et TVA déductible supportée sur les achats ; par compensation, TVA à décaisser ou crédit de TVA (créance sur l'État) ; la périodicité dépend du régime.
- Régime réel normal (art. 287 CGI) : déclaration mensuelle CA3 déposée entre le 15 et le 24 du mois suivant, paiement électronique au moment de la déclaration ; applicable au-delà de 840 000 euros (ventes) ou 254 000 euros (services) de chiffre d'affaires, ou si la TVA due en N-1 dépasse 15 000 euros.
- Régime réel simplifié : déclaration trimestrielle, voire annuelle (CA12) avec acomptes trimestriels calculés sur la TVA de N-2 et régularisation annuelle.
- Franchise en base (art. 293 B) : aucune déclaration, ni TVA collectée ni TVA déductible.
- Crédit de TVA : imputation automatique sur les déclarations suivantes (compensation de créances connexes) ou remboursement effectif sur demande à partir de 750 euros (art. 271 IV CGI, art. 208 II et 242-0 A annexe II) ; protège les exportateurs et les entreprises structurellement créditrices.

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
  "explanation": "À l'oral : le cours distingue quatre taux. Le taux normal est de 20 % (art. 278 CGI) ; il s'applique sauf disposition spéciale, l'UE fixant des fourchettes avec un plancher de 15 %. Les taux réduits figurent aux art. 278 bis et suivants (278-0 bis pour le 5,5 %) : 10 % pour la restauration sur place et l'hôtellerie (CHR), le transport de voyageurs, le logement, la culture, l'agriculture et les médicaments non remboursés ; 5,5 % pour les dépenses de première nécessité (alimentation humaine, eau, livres, appareils médicaux, EHPAD, abonnements gaz et électricité, travaux sur les logements d'habitation) ; 2,1 % pour la presse d'intérêt général, les 140 premières places (représentations) de théâtre ou de cirque, les médicaments remboursés et les animaux de boucherie vendus aux particuliers.",
  "oral": "or-46",
  "tags": [
    "chiffres",
    "oral-blanc"
  ],
  "source": "01-cm-sibylle.txt l. 4376-4453 ; 02-fiches-examen.txt l. 1123-1150 ; 05-fiche-pages.txt l. 758-765 ; 06-cm-lou-pages.txt l. 1098-1103",
  "disputed": "Le CM Sibylle nomme le 10 % « taux réduit » et le 5,5 % « ultra-réduit » ; les fiches 02 parlent de taux intermédiaire (10 %) et réduit (5,5 %) ; les fiches 05 et le CM Lou inversent les surnoms et placent la culture à 5,5 % alors que le CM Sibylle la met à 10 %. Les chiffres sont constants : à l'oral, citer les taux et leurs domaines selon le CM Sibylle.",
  "flag": "Le cours dit « les 140 premières places de théâtre ou de cirque » ; le CGI (art. 281 quater) vise les 140 premières représentations : réciter la version du cours."
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
| `flag` | écart entre le cours et le droit positif (optionnel) |
| `disputed` | divergence entre les prises de notes (optionnel) |

Aucune explication ne renvoie à une position (« la proposition b »), donc tu peux re-mélanger les propositions à l'exécution sans rien casser. Pas de mini-cas ni de calculs : l'examen est un oral, pas un exercice.


## Contrôles passés

- génération thème par thème directement depuis le corpus, chaque question adossée à des lignes précises d'un fichier source (champ `source`)

- relecture adversariale par thème : 13 relecteurs indépendants à la recherche de réponses fausses, de questions à double réponse défendable, de distracteurs accidentellement vrais, d'erreurs d'articles ou de chiffres, puis 13 correcteurs qui appliquent les corrections thème par thème

- critique transversale de l'ensemble de la banque : doublons entre thèmes, cohérence des chiffres et des articles d'un thème à l'autre, homogénéité du ton des explications, équilibre des types et des difficultés

- contrôles de schéma automatiques : IDs uniques, 4 propositions distinctes par question, index de réponse valide, aucun énoncé dupliqué, champ `oral` renseigné et pointant vers une question de cours existante, aucune question de cours orpheline (les 50 ont au moins un QCM), aucune référence positionnelle résiduelle, aucune faute de ligature héritée de l'extraction des PDF (« scal », « dé nit », « chi re d'a aires », « béné ce »)
