import { useMemo } from 'react'
import {
  Heart,
  RotateCcw,
  Share2,
  Sparkles,
  Trophy,
} from 'lucide-react'

import '../styles/Resultat.css'

const LIEN_SITE = 'https://benicia264.github.io/Love.exe/'

const profils = {
  independant: {
    nom: 'Le cœur indépendant',
    titre: 'Tu aimes, mais tu ne te perds pas.',
    description:
      'Tu veux une relation, pas une nouvelle autorité parentale. Tu sais aimer sans abandonner ton identité et tu ne confonds pas le couple avec une prison à ciel ouvert.',
    roast:
      'Ton partenaire demande un peu de réassurance et toi, tu lui proposes un lien vers ton espace personnel.',
  },

  prudent: {
    nom: 'Le cœur sous surveillance',
    titre: 'Tu préfères vérifier avant de tomber.',
    description:
      'Tu observes, tu analyses et tu avances avec précaution. Tu veux éviter les mauvaises surprises, quitte à transformer une histoire d’amour en enquête préliminaire.',
    roast:
      'Même Cupidon doit présenter ses pièces justificatives avant de toucher ton cœur.',
  },

  romantique: {
    nom: 'Le romantique incurable',
    titre: 'Tu crois encore aux grandes histoires.',
    description:
      'Tu accordes beaucoup de valeur aux sentiments, aux gestes et aux promesses. Ton cœur a de grandes ambitions, même si la réalité ne lit pas toujours le même scénario que toi.',
    roast:
      'Tu cherches une âme sœur alors que certaines personnes ne savent même pas être une personne entière.',
  },

  vengeur: {
    nom: 'Le comité de vengeance',
    titre: 'Tu ne pardonnes pas, tu prépares un dossier.',
    description:
      'Quand on te blesse, tu as du mal à laisser les choses derrière toi. Tu veux que les actes aient des conséquences, mais attention à ne pas laisser une ancienne blessure gérer tes prochaines relations.',
    roast:
      'Tu dis avoir tourné la page, mais tu as gardé le livre, l’auteur et son adresse.',
  },

  lucide: {
    nom: 'Le détecteur de problèmes',
    titre: 'Tu vois les signaux avant le générique.',
    description:
      'Tu sembles capable de regarder une relation sans tout idéaliser. Tu accordes de l’importance aux actes et tu préfères la réalité aux belles paroles.',
    roast:
      'Tu ne tombes pas amoureux, tu réalises un audit avec recommandations et plan de remédiation.',
  },

  responsable: {
    nom: 'Le partenaire responsable',
    titre: 'Tu sais que l’amour ne fait pas tout.',
    description:
      'Tu accordes de l’importance à la communication, à la cohérence et aux responsabilités. Tu comprends qu’une relation se construit aussi dans les moments où les papillons ont pris un congé.',
    roast:
      'Tu veux construire quelque chose de sérieux dans un monde où certains ne savent même pas répondre à un message.',
  },

  fuyant: {
    nom: 'Le champion de l’évitement',
    titre: 'Les discussions sérieuses te donnent des envies de déménagement.',
    description:
      'Quand une situation devient inconfortable, tu pourrais préférer prendre tes distances plutôt que d’affronter directement le problème. Cela peut te protéger sur le moment, mais laisser beaucoup de questions derrière toi.',
    roast:
      'On te demande ce que tu ressens et soudainement, tu es en zone blanche.',
  },

  defensif: {
    nom: 'L’avocat de sa propre cause',
    titre: 'Tu as toujours une défense prête.',
    description:
      'Tu sembles accorder beaucoup d’importance à ta position dans les conflits. Le défi sera de savoir écouter sans considérer chaque remarque comme une attaque personnelle.',
    roast:
      'Le tribunal n’a même pas ouvert la séance que tu as déjà demandé la parole.',
  },

  communicatif: {
    nom: 'Le diplomate du couple',
    titre: 'Tu préfères parler plutôt que jouer aux devinettes.',
    description:
      'Tu sembles privilégier les échanges directs. Tu sais qu’un désaccord n’est pas forcément une rupture et qu’une conversation honnête peut éviter bien des dégâts.',
    roast:
      'Tu veux régler le problème ce soir. En face, quelqu’un a besoin de trois à cinq jours ouvrables.',
  },

  analytique: {
    nom: 'Le cerveau en réunion permanente',
    titre: 'Ton cœur ressent, ton cerveau ouvre un dossier.',
    description:
      'Tu réfléchis beaucoup aux comportements et aux conséquences. C’est utile pour prendre du recul, mais parfois, tout analyser peut t’empêcher de simplement vivre ce que tu ressens.',
    roast:
      'Tu as probablement déjà fait un tableau comparatif des avantages et inconvénients de tomber amoureux.',
  },

  passif: {
    nom: 'Le spectateur de sa propre histoire',
    titre: 'Tu attends parfois que les choses se règlent toutes seules.',
    description:
      'Tu peux préférer éviter les confrontations et laisser le temps faire son travail. Le problème, c’est que certaines situations ont besoin d’une vraie décision, pas seulement de patience.',
    roast:
      'Ta stratégie de résolution de conflit : attendre que le problème se fatigue avant toi.',
  },

  jaloux: {
    nom: 'Le détective sentimental',
    titre: 'Tu remarques des détails que personne ne t’a demandé de chercher.',
    description:
      'La peur de perdre une personne peut prendre beaucoup de place dans ta manière d’aimer. La confiance et les limites claires seront essentielles pour ne pas transformer les soupçons en mode de vie.',
    roast:
      'Tu ne surveilles pas ton partenaire. Tu effectues une veille stratégique sur le marché sentimental.',
  },

  attache: {
    nom: 'Le cœur qui s’accroche',
    titre: 'Quand tu aimes, tu investis vraiment.',
    description:
      'Tu peux donner beaucoup de place à une relation et avoir du mal à prendre tes distances quand les choses se compliquent. N’oublie pas que l’attachement ne doit pas t’obliger à accepter n’importe quoi.',
    roast:
      'Tu as déjà préparé les souvenirs de couple alors que vous êtes encore en train de choisir le restaurant du premier rendez-vous.',
  },

  fusionnel: {
    nom: 'Le couple en mode Bluetooth',
    titre: 'Tu aimes la proximité maximale.',
    description:
      'Tu apprécies les liens forts et les moments partagés. Ton équilibre dépendra aussi de ta capacité à laisser à chacun son espace, ses amis et sa vie personnelle.',
    roast:
      'Vous êtes deux personnes différentes, mais ton idéal de couple ressemble à un abonnement familial avec localisation activée.',
  },

  competitif: {
    nom: 'Le champion du dernier mot',
    titre: 'Aimer, oui. Perdre un débat, jamais.',
    description:
      'Tu peux avoir tendance à vouloir défendre ton point de vue jusqu’au bout. Dans une relation, gagner une discussion n’est pas toujours la même chose que résoudre le problème.',
    roast:
      'Tu ne veux pas seulement régler le conflit. Tu veux aussi la médaille, le trophée et les excuses en trois exemplaires.',
  },

  investi: {
    nom: 'Le bâtisseur sentimental',
    titre: 'Quand tu t’engages, tu veux du concret.',
    description:
      'Tu sembles valoriser l’investissement réciproque. Tu veux une relation qui avance, avec des efforts visibles et des projets qui ne restent pas éternellement au stade des promesses.',
    roast:
      'Tu demandes un projet de vie commun pendant que l’autre essaie encore de comprendre ce que vous êtes.',
  },

  coherent: {
    nom: 'Le détecteur de contradictions',
    titre: 'Tu écoutes les paroles, mais tu regardes les actes.',
    description:
      'La cohérence semble compter beaucoup pour toi. Tu accordes de l’importance à ce que les personnes font réellement, et pas seulement à ce qu’elles promettent.',
    roast:
      'Tu ne demandes pas la lune. Juste que la personne soit la même le lundi et le samedi.',
  },

  equilibre: {
    nom: 'Le cœur relativement bien réglé',
    titre: 'Tu essaies de trouver le juste milieu.',
    description:
      'Tu sembles rechercher un équilibre entre tes besoins et ceux de l’autre. Cela ne signifie pas que tout sera simple, mais tu as une bonne base pour prendre du recul et t’adapter.',
    roast:
      'Tu es probablement la personne qui tente de calmer tout le monde dans un groupe WhatsApp qui a déjà dépassé le point de non-retour.',
  },

  mefiant: {
    nom: 'Le cœur avec contrôle de sécurité',
    titre: 'La confiance se mérite, et tu as un protocole.',
    description:
      'Tu ne donnes pas facilement ta confiance. C’est compréhensible, mais fais attention à ne pas faire payer à une nouvelle personne les erreurs de quelqu’un qui n’est plus dans ta vie.',
    roast:
      'Pour accéder à ton cœur, il faut un mot de passe, une authentification à deux facteurs et une enquête de moralité.',
  },

  contradictoire: {
    nom: 'Le paradoxe amoureux',
    titre: 'Tu veux une chose, mais parfois son contraire.',
    description:
      'Tes attentes peuvent entrer en conflit selon les situations. Le vrai travail consiste à comprendre ce que tu veux réellement et à appliquer les mêmes principes à toi-même et à l’autre.',
    roast:
      'Ton cœur a une politique officielle. Ton comportement, lui, n’a visiblement pas reçu la dernière mise à jour.',
  },

  honnête: {
    nom: 'Le franc-parler sentimental',
    titre: 'Tu préfères une vérité difficile à un joli mensonge.',
    description:
      'Tu sembles valoriser la franchise. C’est une qualité précieuse, à condition de garder en tête que la manière de dire les choses compte aussi.',
    roast:
      'Tu ne tournes pas autour du pot. Parfois, tu renverses carrément le pot sur la table.',
  },

  indecis: {
    nom: 'Le comité qui n’arrive pas à trancher',
    titre: 'Ton cœur veut décider, mais demande une réunion supplémentaire.',
    description:
      'Tu peux avoir besoin de temps avant de choisir une direction. Prendre du recul est utile, mais rester indéfiniment dans l’entre-deux peut aussi blesser les personnes concernées.',
    roast:
      'Même ton cœur a besoin d’un sondage avant de répondre oui ou non.',
  },

  opportuniste: {
    nom: 'Le stratège sentimental',
    titre: 'Tu regardes aussi ce que la relation t’apporte.',
    description:
      'Tu peux accorder beaucoup d’importance aux bénéfices concrets d’une relation. Le défi est de vérifier que l’intérêt mutuel ne prend pas toute la place au détriment de l’affection et du respect.',
    roast:
      'Tu ne cherches pas seulement l’amour, tu compares les offres et les conditions générales.',
  },

  complaisant: {
    nom: 'Le spécialiste des excuses',
    titre: 'Tu peux parfois laisser passer trop de choses.',
    description:
      'Tu peux chercher à préserver la relation même quand certains comportements te dérangent. Apprendre à poser des limites ne signifie pas que tu aimes moins.',
    roast:
      'Tu distribues les secondes chances comme si ton cœur bénéficiait d’un programme de fidélité.',
  },

  autonome: {
    nom: 'Le cœur autonome',
    titre: 'Tu veux partager ta vie, pas déléguer ton existence.',
    description:
      'Tu sembles tenir à ton indépendance et à ta capacité à décider pour toi-même. L’enjeu sera de laisser une vraie place à l’autre sans avoir l’impression de perdre le contrôle.',
    roast:
      'Tu veux une relation sérieuse, mais ton indépendance a déjà réservé ses vacances sans prévenir.',
  },

  genereux: {
    nom: 'Le distributeur d’amour',
    titre: 'Tu donnes beaucoup quand tu tiens à quelqu’un.',
    description:
      'Tu peux exprimer ton affection par des efforts, de l’attention ou une aide concrète. Pense aussi à vérifier que la réciprocité existe, au lieu de porter la relation à bout de bras.',
    roast:
      'Tu donnes tellement que même ton compte bancaire aimerait avoir une conversation avec toi.',
  },

  rancunier: {
    nom: 'Les archives nationales du couple',
    titre: 'Tu n’oublies pas les épisodes précédents.',
    description:
      'Les blessures peuvent rester longtemps présentes dans ta mémoire. Le défi est de savoir si tu veux réparer une relation ou simplement conserver les preuves de ce qui n’a pas fonctionné.',
    roast:
      'Tu as pardonné, certes. Mais la capture d’écran est sauvegardée dans trois dossiers différents.',
  },

  patient: {
    nom: 'Le champion de la patience',
    titre: 'Tu sais laisser du temps aux choses.',
    description:
      'Tu sembles capable de ne pas réagir immédiatement. Cette patience peut aider une relation, tant qu’elle ne devient pas une raison d’attendre indéfiniment que quelqu’un change.',
    roast:
      'Tu peux attendre tellement longtemps que même le problème finit par se demander pourquoi tu es encore là.',
  },

  intense: {
    nom: 'Le grand huit sentimental',
    titre: 'Chez toi, les émotions ne font pas les choses à moitié.',
    description:
      'Tu peux vivre les sentiments avec beaucoup d’intensité. C’est une force quand elle nourrit la complicité, mais il faut aussi apprendre à faire une pause avant que l’émotion ne prenne toutes les décisions.',
    roast:
      'Tu voulais une histoire d’amour. Ton système nerveux a compris qu’il était engagé dans une série de huit saisons.',
  },

  nostalgique: {
    nom: 'Le musée des anciennes relations',
    titre: 'Le passé a encore une place dans ton présent.',
    description:
      'Les souvenirs peuvent avoir beaucoup d’importance pour toi. Ils ne sont pas forcément un problème, à condition qu’ils ne deviennent pas une comparaison permanente avec les personnes que tu rencontres aujourd’hui.',
    roast:
      'Ton ex a peut-être changé de vie, mais il possède encore une exposition permanente dans ton esprit.',
  },

  direct: {
    nom: 'Le service client de la vérité',
    titre: 'Tu préfères que les choses soient dites clairement.',
    description:
      'Tu sembles préférer la clarté aux sous-entendus. C’est utile pour éviter les malentendus, à condition de ne pas confondre franchise et absence de tact.',
    roast:
      'Avec toi, les non-dits ne survivent pas à la première réunion.',
  },

  sensible: {
    nom: 'Le cœur à fleur de peau',
    titre: 'Tu ressens peut-être plus de choses que tu ne le montres.',
    description:
      'Tu peux être particulièrement attentif aux paroles, aux gestes et aux changements d’attitude. Cette sensibilité peut nourrir une belle compréhension de l’autre, mais elle mérite aussi d’être protégée.',
    roast:
      'Un message avec un point final et tu as déjà convoqué le conseil de crise.',
  },

  indirect: {
    nom: 'Le maître des messages codés',
    titre: 'Tu espères parfois que l’autre comprendra sans qu’on lui explique.',
    description:
      'Tu peux préférer faire passer tes émotions par des indices ou des attitudes. Pourtant, même les personnes qui t’aiment ne peuvent pas toujours deviner ce que tu as en tête.',
    roast:
      'Tu envoies des signaux tellement subtils que même une antenne 5G ne capterait rien.',
  },

  reactif: {
    nom: 'Le bouton rouge sentimental',
    titre: 'Tu peux réagir avant d’avoir eu le temps de respirer.',
    description:
      'Les situations tendues peuvent provoquer chez toi des réactions rapides. Apprendre à faire une pause avant de répondre peut éviter que quelques minutes de colère ne compliquent une relation entière.',
    roast:
      'Tu réponds sous le coup de l’émotion, puis tu relis ton message comme si quelqu’un d’autre l’avait écrit.',
  },

  ferme: {
    nom: 'Le gardien des limites',
    titre: 'Tu sais qu’on ne peut pas tout accepter par amour.',
    description:
      'Tu sembles accorder de l’importance à tes limites et à tes principes. L’essentiel est de rester ferme sans fermer automatiquement la porte à toute discussion.',
    roast:
      'Tes limites sont claires. Il manque juste parfois un petit service après-vente pour expliquer les conditions.',
  },

  sauveur: {
    nom: 'Le centre de réhabilitation sentimentale',
    titre: 'Tu veux parfois réparer les gens que tu aimes.',
    description:
      'Tu peux avoir envie d’aider l’autre à surmonter ses difficultés. Mais soutenir quelqu’un n’est pas la même chose que prendre en charge sa vie ou ses responsabilités.',
    roast:
      'Tu cherches un partenaire, mais tu te retrouves régulièrement avec un chantier de rénovation émotionnelle.',
  },

  douteux: {
    nom: 'Le détecteur de zones floues',
    titre: 'Tu as du mal à te sentir tranquille quand tout n’est pas clair.',
    description:
      'Tu peux avoir besoin de signes concrets pour te sentir en sécurité dans une relation. Essaie de distinguer les inquiétudes fondées des scénarios que ton esprit construit tout seul.',
    roast:
      'Tu ne tires pas de conclusions hâtives. Tu en tires douze, puis tu compares les versions.',
  },

  protecteur: {
    nom: 'Le garde du corps sentimental',
    titre: 'Tu veux protéger les personnes qui comptent pour toi.',
    description:
      'Tu peux exprimer ton affection en veillant sur l’autre. Le point d’équilibre consiste à soutenir la personne sans décider systématiquement à sa place.',
    roast:
      'Tu veux protéger ton partenaire du monde entier, y compris de ses propres décisions.',
  },

  securise: {
    nom: 'Le cœur qui aime avec stabilité',
    titre: 'Tu recherches une relation où l’on peut respirer.',
    description:
      'Tu sembles valoriser la confiance, la régularité et une communication rassurante. Ce sont des bases solides pour construire une relation sans devoir interpréter chaque silence.',
    roast:
      'Tu veux une relation saine. C’est tellement rare que certains vont croire que tu racontes de la science-fiction.',
  },

  anxieux: {
    nom: 'Le service météo des sentiments',
    titre: 'Ton esprit prévoit parfois l’orage avant le premier nuage.',
    description:
      'L’incertitude peut prendre beaucoup de place dans tes relations. Apprendre à exprimer tes besoins et à demander des clarifications peut t’éviter de rester seul avec mille hypothèses.',
    roast:
      'Un « on doit parler » et tu as déjà imaginé les douze épisodes de la rupture.',
  },

  exigeant: {
    nom: 'Le recruteur sentimental',
    titre: 'Tu sais ce que tu veux. Reste à vérifier ce que tu offres.',
    description:
      'Tu as des attentes et tu souhaites une relation à la hauteur de tes valeurs. Assure-toi simplement que tes exigences laissent aussi de la place à l’imperfection humaine.',
    roast:
      'Ton partenaire doit avoir de la personnalité, de l’ambition, de la maturité et probablement une lettre de recommandation.',
  },

  idealiste: {
    nom: 'Le scénariste de l’amour parfait',
    titre: 'Tu as une idée assez précise de la belle histoire.',
    description:
      'Tu peux être attaché à un idéal amoureux. Garde tes standards, mais laisse aussi une place aux relations réelles, qui ne ressemblent pas toujours à une scène parfaitement écrite.',
    roast:
      'Tu as écrit le scénario, choisi la bande-son et prévu la fin heureuse. Il ne manque plus que l’accord de la personne en face.',
  },

  introspectif: {
    nom: 'L’analyste de son propre cœur',
    titre: 'Tu cherches à comprendre pourquoi tu aimes comme tu aimes.',
    description:
      'Tu sembles capable de prendre du recul sur tes réactions et tes habitudes. Cette curiosité peut t’aider à progresser, tant que tu ne transformes pas chaque émotion en sujet de dissertation.',
    roast:
      'Tu peux ressentir quelque chose pendant cinq minutes et passer les trois heures suivantes à analyser pourquoi.',
  },
}

const profilsParDefaut = {
  nom: 'Le mystère sentimental',
  titre: 'Ton cœur n’a pas encore livré tous ses secrets.',
  description:
    'Tes réponses dessinent plusieurs tendances, sans qu’un seul profil domine clairement. Tu es peut-être plus nuancé que les catégories de ce test ne peuvent le montrer.',
  roast:
    'Même ton cœur refuse de rentrer dans une case. Il a visiblement lu les conditions d’utilisation.',
}

// Score humoristique associé à chaque profil.
// Plus le score est élevé, plus les réponses indiquent des comportements
// potentiellement compliqués dans une relation.
const scoresToxicite = {
  independant: 5,
  prudent: 5,
  romantique: 5,
  vengeur: 75,
  lucide: 0,
  responsable: 0,
  fuyant: 45,
  defensif: 35,
  communicatif: 0,
  analytique: 5,
  passif: 30,
  jaloux: 60,
  attache: 20,
  fusionnel: 35,
  competitif: 30,
  investi: 0,
  coherent: 0,
  equilibre: 0,
  mefiant: 30,
  contradictoire: 40,
  'honnête': 0,
  indecis: 20,
  opportuniste: 65,
  complaisant: 20,
  autonome: 0,
  genereux: 5,
  rancunier: 60,
  patient: 5,
  intense: 25,
  nostalgique: 20,
  direct: 0,
  sensible: 0,
  indirect: 30,
  reactif: 55,
  ferme: 0,
  sauveur: 25,
  douteux: 40,
  protecteur: 25,
  securise: 0,
  anxieux: 25,
  exigeant: 20,
  idealiste: 10,
  introspectif: 0,
}

function obtenirVerdict(taux) {
  if (taux === 0) {
    return {
      titre: 'La princesse amoureuse 👑',
      message:
        '0 % de toxicité ! Tu veux aimer correctement, communiquer et respecter l’autre. Franchement, c’est suspect : tu as lu le manuel du couple ou tu es juste venu humilier les autres ? Ne prends quand même pas la grosse tête, personne n’est parfait.',
      roast:
        'Tu es tellement sain que même tes red flags sont en rupture de stock. Bon, madame ou monsieur l’ange, on va éviter de distribuer des leçons à tout le monde.',
    }
  }

  if (taux <= 20) {
    return {
      titre: 'Le green flag avec quelques mises à jour 🌱',
      message:
        'Tu as plutôt de bonnes bases. Quelques petites habitudes peuvent te jouer des tours, mais rien ne dit que tu es le problème principal de chaque histoire.',
      roast:
        'Tu veux une relation saine, mais ne va pas commencer à faire passer des entretiens d’embauche aux gens juste parce que tu as obtenu un bon score.',
    }
  }

  if (taux <= 40) {
    return {
      titre: 'Le jaune clignotant 🚧',
      message:
        'Tu as quelques comportements à surveiller. Tu peux aimer sincèrement et quand même compliquer les choses quand l’ego, la peur ou les non-dits prennent le volant.',
      roast:
        'Tu n’es pas forcément toxique, mais ton partenaire mérite parfois un casque et une notice d’utilisation.',
    }
  }

  if (taux <= 60) {
    return {
      titre: 'Le red flag en période d’essai 🚩',
      message:
        'Certaines de tes réactions risquent de créer des tensions. La bonne nouvelle : reconnaître ses habitudes, c’est déjà pouvoir commencer à les changer.',
      roast:
        'Ton cœur veut une belle histoire, mais ton comportement semble écrire une série dramatique avec un budget illimité.',
    }
  }

  if (taux <= 80) {
    return {
      titre: 'Le comité des problèmes sentimentaux 🔥',
      message:
        'Tes choix font ressortir plusieurs comportements qui peuvent abîmer la confiance. Si tu veux une relation apaisée, il va falloir arrêter de prendre chaque blessure pour une autorisation de rendre les coups.',
      roast:
        'Tu ne cherches pas une relation, tu prépares une saison complète de téléréalité. Même les producteurs demanderaient une pause.',
    }
  }

  return {
    titre: 'Le red flag en chef 🚨',
    message:
      'Ton score humoristique est élevé. Il est temps de regarder honnêtement les comportements qui peuvent blesser l’autre et de faire des choix différents. Ce résultat ne te définit pas, mais tes actes ont des conséquences.',
    roast:
      'Cupidon a vu tes réponses, il a rangé ses flèches et il est parti travailler dans la livraison de fleurs.',
  }
}

function analyserReponses(reponses = []) {
  const reponsesValides = reponses.filter(
    (reponse) => reponse?.profil,
  )

  const compteurs = {}

  reponsesValides.forEach((reponse) => {
    const profil = reponse.profil
    compteurs[profil] = (compteurs[profil] || 0) + 1
  })

  const classement = Object.entries(compteurs).sort(
    (a, b) => b[1] - a[1],
  )

  const profilDominant = classement[0]?.[0]
  const profilSecondaire = classement[1]?.[0]

  const principal =
    profils[profilDominant] || profilsParDefaut

  const secondaire =
    profils[profilSecondaire] || null

  const roasts = reponsesValides
    .filter((reponse) => reponse.roast)
    .map((reponse) => reponse.roast)

  const themes = reponsesValides
    .filter((reponse) => reponse.theme)
    .map((reponse) => reponse.theme)

  const themesFrequents = Object.entries(
    themes.reduce((compteursThemes, theme) => {
      compteursThemes[theme] =
        (compteursThemes[theme] || 0) + 1
      return compteursThemes
    }, {}),
  ).sort((a, b) => b[1] - a[1])

  const nombreReponses = reponsesValides.length

  // Calcul du score moyen des réponses sélectionnées.
  // Une réponse inconnue reçoit un score neutre de 20.
  const totalToxicite = reponsesValides.reduce(
    (total, reponse) => {
      return total + (scoresToxicite[reponse.profil] ?? 20)
    },
    0,
  )

  const toxicite =
    nombreReponses > 0
      ? Math.round(totalToxicite / nombreReponses)
      : 0

  const verdict = obtenirVerdict(toxicite)

  const intro =
    nombreReponses >= 10
      ? 'Tu as répondu aux questions sans te défiler. Maintenant, assumons ensemble les conséquences.'
      : 'Voici ce que tes réponses laissent entrevoir. Considère ce portrait comme un miroir humoristique, pas comme un diagnostic.'

  return {
    principal,
    secondaire,
    roasts,
    themesFrequents,
    nombreReponses,
    intro,
    profilDominant,
    toxicite,
    verdict,
  }
}

function Resultat({ resultat, onRecommencer }) {
  const analyse = useMemo(
    () => analyserReponses(resultat?.reponses || []),
    [resultat],
  )

  const {
    principal,
    secondaire,
    toxicite,
    verdict,
  } = analyse

  const couleurToxicite =
    toxicite === 0
      ? '#16a34a'
      : toxicite <= 20
        ? '#84cc16'
        : toxicite <= 40
          ? '#f59e0b'
          : toxicite <= 60
            ? '#f97316'
            : '#e11d48'

  async function partagerResultat() {
    const lien = LIEN_SITE

    const texte = [
      'J’ai découvert mon profil amoureux sur Love.exe.',
      '',
      `Mon profil : ${principal.nom}`,
      principal.titre,
      '',
      `Mon taux de toxicité : ${toxicite} %`,
      verdict.titre,
      '',
      'Et toi, tu oserais découvrir le tien ?',
      '',
      `Fais le test ici : ${lien}`,
    ].join('\n')

    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Mon profil amoureux — Love.exe',
          text: texte,
          url: lien,
        })
        return
      }

      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(texte)
        window.alert(
          'Le message et le lien ont été copiés. À toi de les partager !',
        )
        return
      }

      window.prompt('Copie ton résultat pour le partager :', texte)
    } catch (erreur) {
      if (erreur?.name !== 'AbortError') {
        window.alert(
          'Impossible de partager le résultat pour le moment.',
        )
      }
    }
  }

  return (
    <main className="resultat-page">
      <div className="resultat-shell">
        <header className="resultat-entete">
          <span className="resultat-marque">
            LOVE.EXE
            <Heart size={17} aria-hidden="true" />
          </span>

          <span className="resultat-statut">
            ANALYSE TERMINÉE
          </span>
        </header>

        <section className="resultat-hero">
          <div className="resultat-icone">
            <Trophy size={28} aria-hidden="true" />
          </div>

          <span className="resultat-surtitre">
            LE VERDICT EST TOMBÉ
          </span>

          <h1>Alors, on aime comment ?</h1>

          <p className="resultat-intro">
            {analyse.intro}
          </p>
        </section>

        <section
          className="resultat-profil resultat-toxicite"
          aria-label="Taux de toxicité"
        >
          <div className="resultat-profil-entete">
            <span className="resultat-etiquette">
              TON TAUX DE TOXICITÉ
            </span>

            <Sparkles size={20} aria-hidden="true" />
          </div>

          <div
            className="resultat-toxicite-score"
            style={{ color: couleurToxicite }}
          >
            {toxicite} %
          </div>

          <div
            className="resultat-toxicite-barre"
            role="progressbar"
            aria-label="Taux de toxicité humoristique"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={toxicite}
          >
            <div
              className="resultat-toxicite-progression"
              style={{
                width: `${toxicite}%`,
                backgroundColor: couleurToxicite,
              }}
            />
          </div>

          <h2 className="resultat-verdict-titre">
            {verdict.titre}
          </h2>

          <p>{verdict.message}</p>

          <div className="resultat-roast-final">
            <div className="resultat-roast-icone">
              <MessageIcon />
            </div>

            <div>
              <span>LE ROAST DU VERDICT</span>
              <p>{verdict.roast}</p>
            </div>
          </div>

          <p className="resultat-toxicite-note">
            Score humoristique calculé à partir de tes réponses.
            Ce n’est ni un diagnostic ni une étiquette définitive.
          </p>
        </section>

        <section className="resultat-profil">
          <div className="resultat-profil-entete">
            <span className="resultat-etiquette">
              TON PROFIL DOMINANT
            </span>

            <Sparkles size={20} aria-hidden="true" />
          </div>

          <h2>{principal.nom}</h2>

          <h3>{principal.titre}</h3>

          <p>{principal.description}</p>

          <div className="resultat-roast-final">
            <div className="resultat-roast-icone">
              <MessageIcon />
            </div>

            <div>
              <span>ON DEVAIT TE LE DIRE</span>
              <p>{principal.roast}</p>
            </div>
          </div>
        </section>

        {secondaire && (
          <section className="resultat-secondaire">
            <span className="resultat-etiquette">
              ET IL Y A AUSSI UN PEU DE...
            </span>

            <h2>{secondaire.nom}</h2>

            <p>{secondaire.description}</p>
          </section>
        )}

        {analyse.roasts.length > 0 && (
          <section className="resultat-dossier">
            <div className="resultat-section-titre">
              <span className="resultat-etiquette">
                EXTRAIT DE TON DOSSIER
              </span>

              <h2>Les moments où tu t’es exposé.</h2>

              <p>
                Quelques-unes des vérités qui accompagnaient tes choix.
              </p>
            </div>

            <div className="resultat-roasts-liste">
              {analyse.roasts
                .filter((roast, index, liste) => {
                  return liste.indexOf(roast) === index
                })
                .slice(0, 3)
                .map((roast, index) => (
                  <blockquote key={`${roast}-${index}`}>
                    <span className="resultat-roast-numero">
                      0{index + 1}
                    </span>

                    <p>{roast}</p>
                  </blockquote>
                ))}
            </div>
          </section>
        )}

        <section className="resultat-conclusion">
          <Heart size={21} aria-hidden="true" />

          <p>
            Ce test est là pour te faire rire et réfléchir.
            Ton profil n’est pas une étiquette définitive :
            ce sont tes choix, tes limites et ta façon de traiter
            les autres qui comptent réellement.
          </p>
        </section>

        <footer className="resultat-actions">
          <button
            type="button"
            className="resultat-bouton secondaire"
            onClick={onRecommencer}
          >
            <RotateCcw size={17} aria-hidden="true" />
            Refaire le test
          </button>

          <button
            type="button"
            className="resultat-bouton principal"
            onClick={partagerResultat}
          >
            <Share2 size={17} aria-hidden="true" />
            Partager mon résultat
          </button>
        </footer>

        <p className="resultat-pied">
          AH, L’AMOUR ! — LE CŒUR A PARLÉ.
        </p>
      </div>
    </main>
  )
}

function MessageIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
    </svg>
  )
}

export default Resultat