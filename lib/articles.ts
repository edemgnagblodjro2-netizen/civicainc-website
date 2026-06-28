export type ArticleBlock =
  | { type: "paragraph"; content: string }
  | { type: "heading"; content: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; content: string; author?: string };

export type Article = {
  slug: string;
  category: string;
  categoryColor: string;
  date: string;
  dateISO: string;
  readTime: string;
  title: string;
  excerpt: string;
  gradient: string;
  featured?: boolean;
  body: ArticleBlock[];
  cta: { label: string; href: string };
};

const ARTICLES_FR: Article[] = [
  {
    slug: "lancement-agenthub-platform",
    category: "Lancement",
    categoryColor: "#0a1730",
    date: "24 juin 2026",
    dateISO: "2026-06-24",
    readTime: "4 min",
    featured: true,
    title: "CivicAI dévoile AgentHub Platform — gouvernance IA conçue pour les chambres de commerce et les PME québécoises",
    excerpt: "CivicAI Inc. annonce le lancement officiel d'AgentHub Platform, sa solution phare de gouvernance de l'intelligence artificielle pour les chambres de commerce et PME du Québec.",
    gradient: "linear-gradient(135deg, #0a1730 0%, #1857e8 100%)",
    body: [
      { type: "paragraph", content: "CivicAI Inc. annonce aujourd'hui le lancement officiel d'AgentHub Platform, sa solution phare de gouvernance et d'accélération de l'intelligence artificielle. Conçue spécifiquement pour les chambres de commerce, les associations d'affaires et les PME québécoises, la plateforme offre un parcours structuré de transformation IA en 90 jours." },
      { type: "heading", content: "Un diagnostic de maturité IA en moins de 20 minutes" },
      { type: "paragraph", content: "Au cœur d'AgentHub se trouve un moteur de diagnostic de maturité IA qui évalue la posture de chaque organisation en moins de 20 minutes. Le résultat : un rapport personnalisé avec les priorités d'action, les risques à adresser et les opportunités de gains rapides — spécifiques à chaque PME membre." },
      { type: "paragraph", content: "La plateforme est propulsée par ATLAS, l'agent IA conversationnel de CivicAI, qui accompagne les organisations à chaque étape de leur parcours. ATLAS répond aux questions des membres, génère des recommandations contextuelles et alerte les conseillers sur les situations qui méritent une attention particulière." },
      { type: "heading", content: "Un tableau de bord de gouvernance en temps réel" },
      { type: "paragraph", content: "Pour les chambres de commerce et organismes d'accompagnement, AgentHub offre le tableau de bord Geneviève — une vue consolidée de toute la cohorte de membres. Progression par organisation, alertes prioritaires, indicateurs de performance, rapports d'impact automatisés : tout ce dont un directeur de programme IA a besoin, en un seul endroit." },
      { type: "list", items: [
        "Diagnostics de maturité IA automatisés",
        "11 phases d'accélération personnalisées",
        "Tableau de bord multi-organisations en temps réel",
        "Certificats de parcours pour chaque membre",
        "Conformité Loi 25 et données hébergées au Canada",
      ]},
      { type: "quote", content: "AgentHub a radicalement changé notre façon de piloter la transformation numérique de nos membres. Le diagnostic de maturité IA nous a permis d'identifier en quelques jours ce qui aurait pris des mois à analyser.", author: "Marie-Christine Bolduc, Directrice générale, Chambre de commerce régionale" },
      { type: "paragraph", content: "AgentHub Platform est disponible dès maintenant en accès pilote pour les organisations partenaires. Les premières cohortes démarrent en juillet 2026." },
    ],
    cta: { label: "Découvrir AgentHub Platform", href: "/agenthub" },
  },
  {
    slug: "ia-responsable-loi-25-quebec",
    category: "Éditorial",
    categoryColor: "#7c3aed",
    date: "20 juin 2026",
    dateISO: "2026-06-20",
    readTime: "6 min",
    title: "IA responsable au Québec : 5 principes essentiels pour une gouvernance conforme à la Loi 25",
    excerpt: "La Loi 25 impose des obligations précises sur l'utilisation de l'IA dans les organisations québécoises. Voici les 5 principes que chaque dirigeant doit maîtriser avant de déployer une solution d'intelligence artificielle.",
    gradient: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)",
    body: [
      { type: "paragraph", content: "Depuis septembre 2023, les organisations québécoises sont soumises à des obligations renforcées en matière de protection des renseignements personnels sous la Loi 25. Ces obligations ne s'appliquent pas qu'aux données clients — elles encadrent directement la façon dont vous pouvez déployer des solutions d'intelligence artificielle au sein de votre organisation." },
      { type: "paragraph", content: "Voici les 5 principes que tout dirigeant d'entreprise, chambre de commerce ou institution publique doit maîtriser avant de déployer une solution IA." },
      { type: "heading", content: "1. Transparence et droit à l'explication" },
      { type: "paragraph", content: "Toute décision automatisée ayant un impact significatif sur une personne doit pouvoir être expliquée. Si votre outil IA génère des recommandations d'embauche, d'octroi de crédit ou d'accès à des services, vous devez être en mesure d'expliquer le raisonnement. Cela implique d'utiliser des modèles auditables — pas de boîtes noires." },
      { type: "heading", content: "2. Minimisation des données" },
      { type: "paragraph", content: "Ne collectez que les données strictement nécessaires à la finalité déclarée. Si votre solution IA analyse les habitudes de navigation pour personnaliser une expérience, chaque donnée collectée doit servir cet objectif précis — et rien d'autre. Tout écart constitue une infraction potentielle." },
      { type: "heading", content: "3. Consentement explicite et révocable" },
      { type: "paragraph", content: "Le consentement au traitement des données dans un contexte IA doit être libre, éclairé, donné à des fins spécifiques et facilement révocable. Les cases pré-cochées ou les consentements implicites ne sont plus acceptables. Chaque utilisateur doit comprendre exactement ce à quoi il consent." },
      { type: "heading", content: "4. Hébergement et résidence des données" },
      { type: "paragraph", content: "La Loi 25 impose une évaluation des facteurs relatifs à la vie privée (ÉFVP) pour tout transfert de données personnelles hors du Québec. Concrètement, si votre outil IA envoie des données vers des serveurs américains (AWS, Azure, Google Cloud US), vous devez documenter ce transfert et obtenir l'accord de la Commission d'accès à l'information. La solution la plus simple : exiger l'hébergement au Canada." },
      { type: "heading", content: "5. Responsabilisation et documentation" },
      { type: "paragraph", content: "Désignez un responsable de la protection des renseignements personnels (RPRP), publiez votre politique de confidentialité, tenez un registre des activités de traitement et documentez vos évaluations de risques. En cas d'incident, vous avez 72 heures pour aviser la Commission d'accès à l'information." },
      { type: "quote", content: "La conformité à la Loi 25 n'est pas une contrainte — c'est un avantage concurrentiel. Les organisations qui prennent la gouvernance IA au sérieux construisent la confiance de leurs membres et partenaires.", author: "Équipe CivicAI" },
      { type: "paragraph", content: "AgentHub Platform intègre un cadre de gouvernance IA conforme à la Loi 25 dans chaque déploiement. Nos équipes accompagnent les organisations dans la documentation de leurs pratiques et la mise en place de processus conformes." },
    ],
    cta: { label: "Voir notre approche gouvernance", href: "/agenthub" },
  },
  {
    slug: "agenthub-20-mise-a-jour",
    category: "Mise à jour produit",
    categoryColor: "#1857e8",
    date: "15 juin 2026",
    dateISO: "2026-06-15",
    readTime: "3 min",
    title: "AgentHub Platform 2.0 — Nouveau tableau de bord de gouvernance IA avec gestion multi-tenant et rapports d'impact automatisés",
    excerpt: "CivicAI déploie la version 2.0 d'AgentHub Platform avec des améliorations majeures : un tableau de bord repensé, une architecture multi-tenant renforcée et des rapports d'impact automatisés.",
    gradient: "linear-gradient(135deg, #1857e8 0%, #6366f1 100%)",
    body: [
      { type: "paragraph", content: "CivicAI déploie aujourd'hui la version 2.0 d'AgentHub Platform avec des améliorations significatives demandées par les organisations en accès anticipé. Cette mise à jour majeure renforce les capacités multi-organisations de la plateforme et automatise la production des rapports d'impact." },
      { type: "heading", content: "Tableau de bord de gouvernance entièrement repensé" },
      { type: "paragraph", content: "Le nouveau tableau de bord Geneviève 2.0 offre une vue à 360° de chaque cohorte d'organisations. Les indicateurs de progression, les alertes prioritaires et les recommandations d'action sont maintenant présentés dans une interface unifiée, avec la possibilité de filtrer par segment, niveau de maturité ou type d'organisation." },
      { type: "heading", content: "Architecture multi-tenant renforcée" },
      { type: "paragraph", content: "Pour les réseaux de chambres de commerce et associations multi-régionales, la version 2.0 introduit une architecture multi-tenant renforcée permettant à chaque chambre de gérer sa propre instance tout en bénéficiant d'une vue agrégée au niveau du réseau. L'isolation des données entre organisations membres est garantie." },
      { type: "list", items: [
        "Rapports d'impact générés automatiquement chaque semaine",
        "Connecteurs natifs Microsoft 365 améliorés",
        "Analyse comparative inter-organisations (benchmarks)",
        "API REST pour intégration avec les outils existants",
        "Nouveau module de suivi des certifications membres",
      ]},
      { type: "paragraph", content: "La mise à jour est déployée automatiquement pour tous les clients actifs. Aucune action n'est requise de votre part." },
    ],
    cta: { label: "Voir AgentHub Platform", href: "/agenthub" },
  },
  {
    slug: "reduire-couts-licences-nexhire",
    category: "Guide pratique",
    categoryColor: "#059669",
    date: "10 juin 2026",
    dateISO: "2026-06-10",
    readTime: "5 min",
    title: "Comment réduire vos coûts de licences logicielles de 23% avec NexHire EIP",
    excerpt: "Les organisations québécoises perdent en moyenne 23% de leurs dépenses SaaS en licences inutilisées. NexHire EIP les identifie automatiquement — voici comment le processus fonctionne.",
    gradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
    body: [
      { type: "paragraph", content: "Une étude menée par NexHire EIP sur les premières organisations auditées révèle un constat frappant : en moyenne, 23% des licences SaaS achetées par une organisation ne sont jamais utilisées. Sur un budget logiciel de 100 000 $ par an, ça représente 23 000 $ évaporés chaque année — sans que personne ne s'en aperçoive." },
      { type: "paragraph", content: "Comment est-ce possible? Les licences SaaS s'accumulent silencieusement. Un employé part, sa licence reste. Une équipe adopte un nouvel outil, l'ancien continue d'être facturé. Deux équipes achètent le même logiciel indépendamment. Ce phénomène — le \"SaaS sprawl\" — touche toutes les organisations, des PME de 20 personnes aux institutions de 500 employés." },
      { type: "heading", content: "Étape 1 : La cartographie complète en 48h" },
      { type: "paragraph", content: "NexHire EIP commence par une connexion sécurisée à vos sources de données : Microsoft 365 (via API Admin), vos outils de gestion RH, et optionnellement vos relevés de carte corporative. En 48 heures, la plateforme produit un inventaire complet de tous vos abonnements SaaS — y compris ceux achetés par les équipes sans passer par les TI (le fameux \"shadow IT\")." },
      { type: "heading", content: "Étape 2 : Détection intelligente des anomalies" },
      { type: "paragraph", content: "Le moteur IA analyse ensuite les patterns d'utilisation réels de chaque licence. Une licence Microsoft 365 Business Premium à 22$/mois pour un employé qui n'a pas ouvert Outlook depuis 90 jours? Identifiée. Quatre abonnements Zoom différents achetés par quatre équipes? Identifiés. Un compte Adobe Creative Cloud pour quelqu'un qui a quitté l'entreprise il y a 6 mois? Identifié." },
      { type: "list", items: [
        "Licences actives non utilisées (>60 jours sans activité)",
        "Doublons et chevauchements entre outils similaires",
        "Accès orphelins d'employés partis",
        "Surutilisation de tiers coûteux vs alternatives moins chères",
        "Risques Loi 25 : données personnelles dans des apps non conformes",
      ]},
      { type: "heading", content: "Étape 3 : Le rapport d'action en 36 jours" },
      { type: "paragraph", content: "À l'issue de l'audit, vous recevez un rapport détaillé avec trois éléments : les économies potentielles chiffrées (licence par licence), les risques de conformité priorisés par criticité, et un plan d'action 90 jours avec les actions à prioriser selon l'impact financier et la facilité de mise en oeuvre." },
      { type: "quote", content: "NexHire EIP a révélé 9 732 $ de licences Microsoft 365 redondantes dans notre organisation. En 36 jours, nous avions déjà récupéré la valeur de l'investissement.", author: "Jean-Pierre Desrosiers, Responsable des technologies, PME manufacturière, Mauricie" },
      { type: "paragraph", content: "Le ROI moyen constaté sur les premiers déploiements est de ×9.9 en 36 jours. Ce n'est pas une promesse — c'est une médiane mesurée sur des organisations réelles." },
    ],
    cta: { label: "Demander un audit NexHire", href: "/nexhire" },
  },
  {
    slug: "diagnostic-maturite-ia-pme",
    category: "Guide pratique",
    categoryColor: "#d97706",
    date: "30 mai 2026",
    dateISO: "2026-05-30",
    readTime: "7 min",
    title: "Le diagnostic de maturité IA : pourquoi c'est la première étape indispensable pour les PME québécoises",
    excerpt: "Avant d'investir en IA, toute organisation doit savoir où elle en est. Le diagnostic de maturité IA est l'outil qui change la façon dont les PME abordent leur transformation numérique.",
    gradient: "linear-gradient(135deg, #92400e 0%, #d97706 100%)",
    body: [
      { type: "paragraph", content: "La plupart des PME québécoises abordent l'intelligence artificielle de la même façon qu'elles ont abordé l'informatique dans les années 90 : en réagissant. Un concurrent adopte un outil IA, on en achète un aussi. Un fournisseur propose une \"solution IA\", on l'essaie. Résultat : des outils qui se chevauchent, des équipes qui ne les utilisent pas, et un sentiment diffus que \"l'IA ne fonctionne pas pour nous\"." },
      { type: "paragraph", content: "La vraie première étape n'est pas d'acheter un outil IA. C'est de comprendre où vous en êtes — et où vous devez aller en priorité." },
      { type: "heading", content: "Qu'est-ce que la maturité IA?" },
      { type: "paragraph", content: "La maturité IA d'une organisation se mesure selon cinq dimensions : les données (qualité, accessibilité, gouvernance), les processus (ceux qui peuvent être automatisés vs ceux qui nécessitent le jugement humain), les compétences (capacité interne à utiliser, évaluer et superviser des outils IA), l'infrastructure technique (systèmes existants, connectivité, sécurité) et la culture organisationnelle (ouverture au changement, tolérance à l'expérimentation)." },
      { type: "heading", content: "Pourquoi la plupart des diagnostics échouent" },
      { type: "paragraph", content: "Les diagnostics de maturité IA traditionnels ont un problème majeur : ils sont génériques. Ils posent les mêmes questions à une PME manufacturière de 25 employés qu'à une institution publique de 500 personnes. Résultat : des recommandations inapplicables, des scores sans contexte, et des dirigeants qui ne savent toujours pas quoi faire concrètement le lundi matin." },
      { type: "paragraph", content: "Le diagnostic AgentHub a été conçu différemment. Il adapte ses questions au secteur, à la taille et aux objectifs déclarés de l'organisation. Les recommandations qui en résultent sont spécifiques, priorisées et accompagnées d'un délai de mise en oeuvre réaliste." },
      { type: "heading", content: "Les 4 niveaux de maturité IA" },
      { type: "list", items: [
        "Niveau 1 — Sensibilisation : l'organisation connaît l'IA mais n'a pas commencé à l'intégrer",
        "Niveau 2 — Expérimentation : premiers outils IA adoptés, sans stratégie cohérente",
        "Niveau 3 — Intégration : l'IA est intégrée dans des processus clés, avec une gouvernance naissante",
        "Niveau 4 — Optimisation : l'IA est un levier stratégique, mesuré et gouverné de façon rigoureuse",
      ]},
      { type: "paragraph", content: "La majorité des PME québécoises se situent entre les niveaux 1 et 2. Ce n'est pas un problème — c'est un point de départ. La valeur du diagnostic est de vous dire exactement quelles actions vous feront progresser le plus rapidement vers le niveau suivant, selon votre contexte spécifique." },
      { type: "quote", content: "Le diagnostic nous a permis d'identifier en quelques jours ce qui aurait pris des mois à analyser. On avait 3 outils IA en production — le diagnostic a révélé que deux d'entre eux servaient le même objectif avec des données différentes.", author: "Coordonnatrice IA, Association d'affaires, Québec" },
      { type: "paragraph", content: "Le diagnostic de maturité IA AgentHub est accessible en 20 minutes, disponible en français et génère un rapport personnalisé immédiatement. Il est inclus dans toutes les cohortes pilotes d'AgentHub Platform." },
    ],
    cta: { label: "Faire le diagnostic AgentHub", href: "/agenthub" },
  },
  {
    slug: "civicai-incorporation-quebec",
    category: "Entreprise",
    categoryColor: "#0891b2",
    date: "3 juin 2026",
    dateISO: "2026-06-03",
    readTime: "2 min",
    title: "CivicAI Inc. officiellement constituée au Registre des entreprises du Québec — une firme 100% québécoise dédiée à l'IA responsable",
    excerpt: "CivicAI Inc. est officiellement constituée et enregistrée au REQ. Basée à Trois-Rivières, la firme se positionne comme éditeur de logiciels IA 100% québécois.",
    gradient: "linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)",
    body: [
      { type: "paragraph", content: "CivicAI Inc. est officiellement constituée et enregistrée au Registre des entreprises du Québec (REQ). Basée à Trois-Rivières, la firme se positionne comme un éditeur de logiciels IA 100% québécois, dédié au développement de plateformes d'intelligence artificielle responsables pour les entreprises, les organismes publics et les institutions." },
      { type: "paragraph", content: "CivicAI Inc. s'engage à respecter le cadre réglementaire québécois en matière de protection des données et de gouvernance de l'IA, tout en contribuant à l'écosystème technologique régional de la Mauricie et de l'ensemble du Québec." },
      { type: "heading", content: "Une mission ancrée dans le tissu économique québécois" },
      { type: "paragraph", content: "La mission de CivicAI est de rendre l'intelligence artificielle accessible, responsable et rentable pour chaque organisation au Québec. Nos équipes, nos serveurs et nos partenaires sont au Québec. Vos données ne quittent pas le Canada." },
      { type: "list", items: [
        "Siège social : Trois-Rivières, Québec, Canada",
        "Enregistrement : Registre des entreprises du Québec",
        "Premiers produits : AgentHub Platform, NexHire EIP, AttenteZéro",
        "Engagement : données 100% hébergées au Canada",
      ]},
    ],
    cta: { label: "En savoir plus sur CivicAI", href: "/a-propos" },
  },
];

export const ARTICLES_EN: Article[] = ARTICLES_FR.map((a) => ({ ...a }));

export default ARTICLES_FR;
