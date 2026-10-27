
const questionsHomme = [
  {
    id: 1,
    theme: 'ENGAGEMENT',
    question: 'Elle te demande où va votre relation. Tu réponds quoi ?',
    reponses: [
      { id: 'a', texte: '« On laisse les choses se faire. »', profil: 'fuyant', roast: 'Tu veux les avantages du couple avec les responsabilités d’un célibataire.' },
      { id: 'b', texte: 'Je lui explique clairement ce que je veux.', profil: 'direct', roast: 'Enfin un homme qui n’a pas besoin d’un GPS pour trouver ses intentions.' },
      { id: 'c', texte: 'Je change de sujet discrètement.', profil: 'indecis', roast: 'Même tes sentiments sont en mode avion.' },
      { id: 'd', texte: 'Je lui demande ce qu’elle attend de moi.', profil: 'communicatif', roast: 'La communication ? Incroyable. On dirait presque un adulte fonctionnel.' },
    ],
  },
  {
    id: 2,
    theme: 'FIDÉLITÉ',
    question: 'Une fille attirante te drague alors que tu es en couple. Tu fais quoi ?',
    reponses: [
      { id: 'a', texte: 'Je précise que je suis en couple.', profil: 'coherent', roast: 'La fidélité sans publicitaire autour : une espèce rare.' },
      { id: 'b', texte: 'Je flirte un peu, c’est innocent.', profil: 'opportuniste', roast: 'Le fameux « c’est juste pour rire », saison 12.' },
      { id: 'c', texte: 'Je garde son contact, on ne sait jamais.', profil: 'contradictoire', roast: 'Tu construis déjà une sortie de secours pendant que tu prétends être chez toi.' },
      { id: 'd', texte: 'Je raconte tout à ma copine.', profil: 'honnête', roast: 'La transparence, c’est bien. Même quand le rapport risque d’être long.' },
    ],
  },
  {
    id: 3,
    theme: 'ARGENT',
    question: 'Ta copine gagne plus d’argent que toi. Tu le vis comment ?',
    reponses: [
      { id: 'a', texte: 'Très bien, on est une équipe.', profil: 'equilibre', roast: 'Son salaire ne menace pas ta masculinité. Félicitations, champion.' },
      { id: 'b', texte: 'Ça me pousse à travailler davantage.', profil: 'competitif', roast: 'Tu viens de transformer son bulletin de paie en compétition olympique.' },
      { id: 'c', texte: 'Je préfère qu’elle gagne moins que moi.', profil: 'defensif', roast: 'Ton ego a besoin d’une fiche de paie pour se sentir vivant.' },
      { id: 'd', texte: 'Je m’en fiche, tant qu’elle participe.', profil: 'prudent', roast: 'L’amour est aveugle, mais ton budget garde les yeux ouverts.' },
    ],
  },
  {
    id: 4,
    theme: 'CONFLIT',
    question: 'Elle te dit que tu l’as blessée. Ta première réaction ?',
    reponses: [
      { id: 'a', texte: 'Je l’écoute avant de répondre.', profil: 'responsable', roast: 'Écouter sans préparer sa défense : le développement personnel a payé.' },
      { id: 'b', texte: 'Je lui rappelle ce qu’elle m’a fait.', profil: 'defensif', roast: 'Le tribunal sentimental est ouvert, et tu es juge, avocat et accusé.' },
      { id: 'c', texte: 'Je me tais jusqu’à ce que ça passe.', profil: 'passif', roast: 'Le silence ne règle rien, mais au moins tu économises les mots.' },
      { id: 'd', texte: 'Je m’énerve parce qu’elle exagère.', profil: 'reactif', roast: 'Elle exprime une douleur, toi tu organises un feu d’artifice.' },
    ],
  },
  {
    id: 5,
    theme: 'JALOUSIE',
    question: 'Ta copine sort avec ses amis sans toi. Tu réagis comment ?',
    reponses: [
      { id: 'a', texte: 'Je lui souhaite une bonne soirée.', profil: 'securise', roast: 'Tu sais qu’une relation n’est pas un bracelet électronique. Magnifique.' },
      { id: 'b', texte: 'Je demande qui sera présent.', profil: 'jaloux', roast: 'Le service de renseignement sentimental vient de prendre son poste.' },
      { id: 'c', texte: 'Je lui demande de rentrer tôt.', profil: 'protecteur', roast: 'La protection, oui. Le couvre-feu, elle n’a pas signé.' },
      { id: 'd', texte: 'Je fais pareil pour lui montrer.', profil: 'competitif', roast: 'Une relation ou les Jeux olympiques de la mauvaise foi ?' },
    ],
  },
  {
    id: 6,
    theme: 'EX',
    question: 'Ton ex revient avec un « tu me manques ». Tu fais quoi ?',
    reponses: [
      { id: 'a', texte: 'Je ne réponds pas.', profil: 'ferme', roast: 'Le passé frappe, mais tu as enfin changé la serrure.' },
      { id: 'b', texte: 'Je réponds juste pour prendre des nouvelles.', profil: 'nostalgique', roast: '« Juste prendre des nouvelles » : le début de 83 % des mauvaises idées.' },
      { id: 'c', texte: 'Je lui demande ce qu’elle veut vraiment.', profil: 'analytique', roast: 'Tu veux un ordre du jour avant de rouvrir le dossier.' },
      { id: 'd', texte: 'Je vois où la conversation mène.', profil: 'opportuniste', roast: 'Tu n’as pas tourné la page, tu gardes juste le livre sous l’oreiller.' },
    ],
  },
  {
    id: 7,
    theme: 'RESPONSABILITÉ AFFECTIVE',
    question: 'Tu sens que tes sentiments diminuent. Tu fais quoi ?',
    reponses: [
      { id: 'a', texte: 'Je lui en parle honnêtement.', profil: 'honnête', roast: 'Tu offres la vérité plutôt qu’une disparition mystérieuse. Respect.' },
      { id: 'b', texte: 'Je deviens distant pour qu’elle comprenne.', profil: 'indirect', roast: 'Tu veux qu’elle lise dans tes pensées avec un réseau 2G.' },
      { id: 'c', texte: 'J’attends de voir si ça revient.', profil: 'indecis', roast: 'Tes sentiments sont en période d’essai, sans date de fin.' },
      { id: 'd', texte: 'Je reste, je ne veux pas lui faire de mal.', profil: 'complaisant', roast: 'Rester par culpabilité, c’est offrir un abonnement à la déception.' },
    ],
  },
  {
    id: 8,
    theme: 'PRIORITÉS',
    question: 'Tu as promis une soirée à deux, mais tes amis t’appellent.',
    reponses: [
      { id: 'a', texte: 'Je respecte mon engagement.', profil: 'coherent', roast: 'Une promesse tenue. Les historiens prennent des notes.' },
      { id: 'b', texte: 'Je demande à ma copine si ça la dérange.', profil: 'communicatif', roast: 'Tu consultes la personne concernée avant de décider. Révolutionnaire.' },
      { id: 'c', texte: 'Je pars avec mes amis, elle comprendra.', profil: 'independant', roast: 'Elle comprendra surtout qu’elle ne sera plus disponible la prochaine fois.' },
      { id: 'd', texte: 'J’invente une excuse.', profil: 'fuyant', roast: 'Tu pouvais dire la vérité, mais tu as choisi une carrière dans la fiction.' },
    ],
  },
  {
    id: 9,
    theme: 'VULNÉRABILITÉ',
    question: 'Tu traverses une période difficile. Tu réagis comment avec elle ?',
    reponses: [
      { id: 'a', texte: 'Je lui explique ce que je ressens.', profil: 'sensible', roast: 'Être vulnérable ne te retire aucun point de masculinité.' },
      { id: 'b', texte: 'Je garde tout pour moi.', profil: 'independant', roast: 'Tu veux tout gérer seul, même les émotions qui débordent.' },
      { id: 'c', texte: 'Je deviens irritable sans expliquer pourquoi.', profil: 'reactif', roast: 'Elle n’a pas reçu le mémo, mais elle subit déjà les conséquences.' },
      { id: 'd', texte: 'Je demande un peu de temps, puis j’en parle.', profil: 'introspectif', roast: 'Tu prends du recul sans transformer ça en disparition nationale.' },
    ],
  },
  {
    id: 10,
    theme: 'AMOUR',
    question: 'Pour toi, aimer quelqu’un, c’est surtout…',
    reponses: [
      { id: 'a', texte: 'Le choisir et le montrer au quotidien.', profil: 'investi', roast: 'Des actes, pas seulement des « tu sais que je t’aime » envoyés à minuit.' },
      { id: 'b', texte: 'Rester libre tout en étant ensemble.', profil: 'autonome', roast: 'L’indépendance, oui. Le célibat avec témoin, beaucoup moins.' },
      { id: 'c', texte: 'Tout donner, même au risque de souffrir.', profil: 'intense', roast: 'Ton cœur est généreux, mais il aurait besoin d’un service après-vente.' },
      { id: 'd', texte: 'Trouver quelqu’un qui me comprend sans parler.', profil: 'idealiste', roast: 'Tu veux une partenaire ou une télépathe diplômée ?' },
    ],
  },
]

const questionsFemme = [
  {
    id: 1,
    theme: 'ATTENTES',
    question: 'Il te plaît, mais il met des heures à répondre. Tu fais quoi ?',
    reponses: [
      { id: 'a', texte: 'Je continue ma journée tranquillement.', profil: 'autonome', roast: 'Tu as une vie en dehors de WhatsApp. Le scénario devient intéressant.' },
      { id: 'b', texte: 'Je vérifie sa dernière connexion.', profil: 'anxieux', roast: 'Le FBI sentimental a recruté une nouvelle agente.' },
      { id: 'c', texte: 'Je réponds aussi trois heures après.', profil: 'competitif', roast: 'La guerre froide a commencé pour un simple message.' },
      { id: 'd', texte: 'Je lui demande s’il est toujours intéressé.', profil: 'direct', roast: 'Tu poses la question au lieu d’écrire une thèse sur son silence.' },
    ],
  },
  {
    id: 2,
    theme: 'SIGNES',
    question: 'Il dit qu’il n’est pas prêt pour une relation, mais agit comme ton copain.',
    reponses: [
      { id: 'a', texte: 'Je prends ses paroles au sérieux.', profil: 'lucide', roast: 'Tu écoutes ce qu’il dit, pas le film que ton cœur réalise.' },
      { id: 'b', texte: 'Je me dis qu’il changera avec le temps.', profil: 'idealiste', roast: 'Tu viens de postuler au poste de responsable de son potentiel.' },
      { id: 'c', texte: 'Je lui demande de clarifier ses intentions.', profil: 'direct', roast: 'Une question claire : voilà qui menace le règne des situationships.' },
      { id: 'd', texte: 'Je continue, on verra bien.', profil: 'indecis', roast: 'Tu as accepté les conditions générales sans les lire.' },
    ],
  },
  {
    id: 3,
    theme: 'AMITIÉ',
    question: 'Ta meilleure amie critique le garçon qui te plaît.',
    reponses: [
      { id: 'a', texte: 'J’écoute, puis je me fais mon avis.', profil: 'equilibre', roast: 'Tu peux aimer quelqu’un sans désinstaller ton cerveau.' },
      { id: 'b', texte: 'Je la défends immédiatement.', profil: 'attache', roast: 'Le cœur a parlé avant que les preuves arrivent.' },
      { id: 'c', texte: 'Je lui demande ce qu’elle a remarqué.', profil: 'analytique', roast: 'Tu ouvres une enquête avant de rendre ton verdict.' },
      { id: 'd', texte: 'Je lui dis de ne pas se mêler de ça.', profil: 'defensif', roast: 'Le garçon est peut-être un problème, mais l’avocate est déjà en service.' },
    ],
  },
  {
    id: 4,
    theme: 'LIMITES',
    question: 'Il annule vos plans à la dernière minute pour la troisième fois.',
    reponses: [
      { id: 'a', texte: 'Je lui explique que ça ne me convient pas.', profil: 'ferme', roast: 'Tes limites existent même quand il est beau. Quelle avancée.' },
      { id: 'b', texte: 'Je lui donne encore une chance.', profil: 'patient', roast: 'Tu distribues les secondes chances comme des échantillons gratuits.' },
      { id: 'c', texte: 'J’annule aussi le prochain rendez-vous.', profil: 'rancunier', roast: 'La vengeance est servie froide, avec réservation annulée.' },
      { id: 'd', texte: 'Je fais comme si ça ne m’avait pas touchée.', profil: 'passif', roast: 'Tu dis « t’inquiète » pendant que ton cœur rédige une plainte.' },
    ],
  },
  {
    id: 5,
    theme: 'JALOUSIE',
    question: 'Il aime toutes les photos d’une même fille. Ta réaction ?',
    reponses: [
      { id: 'a', texte: 'Je n’en tire pas de conclusion sans en parler.', profil: 'lucide', roast: 'Tu refuses de condamner quelqu’un sur la base de trois petits cœurs.' },
      { id: 'b', texte: 'Je vais regarder le profil de cette fille.', profil: 'jaloux', roast: 'Bienvenue dans la visite guidée de sa vie depuis 2018.' },
      { id: 'c', texte: 'Je lui demande pourquoi il fait ça.', profil: 'direct', roast: 'Le dialogue remplace les enquêtes nocturnes. On progresse.' },
      { id: 'd', texte: 'Je publie une photo pour le rendre jaloux.', profil: 'competitif', roast: 'Tu ne voulais pas son attention, tu voulais gagner le championnat.' },
    ],
  },
  {
    id: 6,
    theme: 'EX',
    question: 'Il te raconte qu’il est encore en contact avec son ex.',
    reponses: [
      { id: 'a', texte: 'Je demande quelle place elle occupe encore.', profil: 'communicatif', roast: 'Tu demandes des explications avant de lancer la saison 2 du drame.' },
      { id: 'b', texte: 'Je fais confiance tant que ses actes suivent.', profil: 'securise', roast: 'La confiance, avec des yeux ouverts : concept très solide.' },
      { id: 'c', texte: 'Je me méfie immédiatement.', profil: 'mefiant', roast: 'L’ex n’a même pas parlé que le dossier est déjà classé sensible.' },
      { id: 'd', texte: 'Je lui demande de couper tout contact.', profil: 'protecteur', roast: 'Tu veux sécuriser la relation, mais attention à ne pas devenir douanière.' },
    ],
  },
  {
    id: 7,
    theme: 'EFFORTS',
    question: 'Tu es toujours celle qui propose les sorties et relance les conversations.',
    reponses: [
      { id: 'a', texte: 'Je ralentis et j’observe ses efforts.', profil: 'prudent', roast: 'Tu arrêtes de porter la relation comme un sac de ciment.' },
      { id: 'b', texte: 'Je lui dis clairement ce qui me dérange.', profil: 'direct', roast: 'Tu ne lui demandes pas de lire dans tes pensées. Excellent choix.' },
      { id: 'c', texte: 'Je continue parce que je tiens à lui.', profil: 'investi', roast: 'Ton investissement est admirable. Le retour sur investissement, moins.' },
      { id: 'd', texte: 'Je disparais pour voir s’il me cherche.', profil: 'indirect', roast: 'Une expérience scientifique financée par ton anxiété.' },
    ],
  },
  {
    id: 8,
    theme: 'ARGENT',
    question: 'Au restaurant, il oublie son portefeuille et te demande de payer.',
    reponses: [
      { id: 'a', texte: 'Je paie si je peux, sans en faire une histoire.', profil: 'genereux', roast: 'Un geste gentil, pas un contrat pour financer ses prochains repas.' },
      { id: 'b', texte: 'Je lui demande comment il compte me rembourser.', profil: 'prudent', roast: 'Cupidon a sorti sa calculatrice. Et il a raison.' },
      { id: 'c', texte: 'Je paie, mais je trouve ça suspect.', profil: 'mefiant', roast: 'Le dessert est commandé, l’enquête financière aussi.' },
      { id: 'd', texte: 'Je refuse, ce n’est pas à moi de payer.', profil: 'ferme', roast: 'Tu as tes principes. Reste à voir si vous avez les mêmes.' },
    ],
  },
  {
    id: 9,
    theme: 'RUPTURE',
    question: 'Après une rupture, quelle est ta première réaction ?',
    reponses: [
      { id: 'a', texte: 'Je prends du temps pour me reconstruire.', profil: 'introspectif', roast: 'Tu prends soin de toi au lieu de chercher un remplaçant en urgence.' },
      { id: 'b', texte: 'Je relis nos anciennes conversations.', profil: 'nostalgique', roast: 'Les archives sont ouvertes, et personne n’a demandé leur consultation.' },
      { id: 'c', texte: 'Je bloque tout et je passe à autre chose.', profil: 'ferme', roast: 'La page est tournée, le livre est même parti au recyclage.' },
      { id: 'd', texte: 'Je veux qu’il regrette de m’avoir perdue.', profil: 'vengeur', roast: 'Ta guérison a un public cible et un plan marketing.' },
    ],
  },
  {
    id: 10,
    theme: 'AMOUR-PROPRE',
    question: 'Tu réalises que tu t’attaches à quelqu’un qui te donne peu.',
    reponses: [
      { id: 'a', texte: 'Je prends mes distances.', profil: 'autonome', roast: 'Tu choisis ta paix, même quand ton cœur réclame un rappel.' },
      { id: 'b', texte: 'J’essaie de comprendre pourquoi il agit ainsi.', profil: 'sauveur', roast: 'Tu es sa partenaire potentielle, pas son centre de rééducation.' },
      { id: 'c', texte: 'Je lui donne une dernière chance clairement définie.', profil: 'exigeant', roast: 'Une chance, pas un abonnement renouvelable automatiquement.' },
      { id: 'd', texte: 'J’espère qu’il finira par m’aimer comme je veux.', profil: 'anxieux', roast: 'Tu attends une transformation que même son propre cœur n’a pas promise.' },
    ],
  },
]

export function obtenirQuestions(genre) {
  const valeur = String(genre ?? '').toLowerCase()
  return valeur.includes('hom') || valeur === 'masculin'
    ? questionsHomme
    : questionsFemme
}