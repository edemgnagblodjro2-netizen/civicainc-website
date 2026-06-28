import { Link } from "@/i18n/navigation";
import ContactCTA from "@/components/ContactCTA";

type Props = { params: Promise<{ locale: string }> };

const CONTENT = {
  fr: {
    title: "Politique de confidentialité",
    updated: "Dernière mise à jour : 27 juin 2026",
    intro: "CivicAI Inc. (« CivicAI », « nous ») s'engage à protéger la vie privée des personnes qui utilisent nos plateformes et visitent notre site web. La présente politique explique comment nous collectons, utilisons, conservons et protégeons vos renseignements personnels, conformément à la Loi 25 du Québec (Loi modernisant des dispositions législatives en matière de protection des renseignements personnels) et à la Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE).",
    sections: [
      {
        title: "1. Qui sommes-nous",
        body: "CivicAI Inc. est une société par actions constituée au Québec, dont le siège social est situé à Trois-Rivières, Québec, Canada. Nous développons des plateformes d'intelligence artificielle (AgentHub Platform, NexHire EIP, AttenteZéro) destinées aux entreprises, chambres de commerce, institutions publiques et organisations québécoises.\n\nResponsable de la protection des renseignements personnels :\nContact : contact@nexhire.ca\nTéléphone : 905 809-7798\nAdresse : Trois-Rivières, Québec, Canada",
      },
      {
        title: "2. Renseignements collectés",
        body: "Nous collectons les catégories de renseignements suivantes :\n\n• Informations d'identification : nom complet, nom de l'organisation, adresse courriel.\n• Informations de contact : numéro de téléphone (si fourni volontairement).\n• Données de navigation : adresse IP, type de navigateur, pages consultées, durée de visite (via journaux de serveur).\n• Contenu des communications : messages envoyés via notre formulaire de contact.\n\nNous ne collectons pas de renseignements sensibles (données médicales, données financières personnelles, numéros d'assurance sociale).",
      },
      {
        title: "3. Finalités du traitement",
        body: "Vos renseignements sont utilisés exclusivement aux fins suivantes :\n\n• Répondre à vos demandes de démonstration ou d'information.\n• Vous contacter dans le cadre d'un projet pilote ou d'un déploiement.\n• Améliorer nos plateformes et services.\n• Respecter nos obligations légales et réglementaires.\n• Envoyer des communications commerciales pertinentes (avec votre consentement).\n\nNous ne vendons, ne louons ni ne partageons vos renseignements personnels à des tiers à des fins commerciales.",
      },
      {
        title: "4. Base juridique du traitement",
        body: "Nous traitons vos renseignements personnels sur la base de :\n\n• Votre consentement explicite (formulaire de contact, inscription).\n• L'exécution d'un contrat ou de démarches précontractuelles.\n• Nos intérêts légitimes (amélioration des services, sécurité).\n• Le respect d'une obligation légale.",
      },
      {
        title: "5. Conservation des données",
        body: "Nous conservons vos renseignements personnels aussi longtemps que nécessaire pour les finalités décrites, et au maximum :\n\n• Données de formulaire de contact : 24 mois.\n• Données de clients actifs : durée de la relation contractuelle + 5 ans.\n• Journaux de navigation : 12 mois.\n\nÀ l'expiration de ces délais, les données sont supprimées ou anonymisées de manière sécurisée.",
      },
      {
        title: "6. Partage des renseignements",
        body: "Vos renseignements peuvent être communiqués à :\n\n• Nos prestataires de services techniques (hébergement : Cloudflare, Render ; formulaires : FormSubmit.co) dans le cadre de leurs fonctions, sous contrat de confidentialité.\n• Des autorités compétentes si la loi l'exige.\n\nTous nos prestataires sont sélectionnés pour leur conformité aux normes de protection des données applicables.",
      },
      {
        title: "7. Hébergement et transferts internationaux",
        body: "Notre site est hébergé sur Cloudflare Pages (infrastructure mondiale). Nos services applicatifs sont déployés sur Render (États-Unis). Ces prestataires appliquent des clauses contractuelles types conformes aux standards de protection des données.\n\nNos données opérationnelles sont prioritairement stockées au Canada.",
      },
      {
        title: "8. Cookies et technologies similaires",
        body: "Notre site utilise des cookies essentiels au bon fonctionnement des pages. Nous n'utilisons pas de cookies de suivi publicitaire ou de profilage tiers.\n\nVous pouvez configurer votre navigateur pour refuser les cookies, ce qui pourrait affecter certaines fonctionnalités du site.",
      },
      {
        title: "9. Vos droits",
        body: "Conformément à la Loi 25, vous disposez des droits suivants :\n\n• Droit d'accès : connaître les renseignements que nous détenons sur vous.\n• Droit de rectification : corriger des renseignements inexacts.\n• Droit à la suppression : demander l'effacement de vos données.\n• Droit à la portabilité : recevoir vos données dans un format structuré.\n• Droit d'opposition : vous opposer à certains traitements.\n• Droit de retrait du consentement : à tout moment, sans préjudice des traitements antérieurs.\n\nPour exercer vos droits, écrivez à : contact@nexhire.ca\nNous répondrons dans un délai de 30 jours.",
      },
      {
        title: "10. Sécurité",
        body: "CivicAI met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos renseignements contre tout accès non autorisé, perte, destruction ou divulgation :\n\n• Chiffrement HTTPS sur toutes les communications.\n• Architecture multi-tenant avec isolation des données par client.\n• Accès restreint aux renseignements personnels selon le principe du moindre privilège.\n• Revue périodique des accès et des politiques de sécurité.",
      },
      {
        title: "11. Modifications",
        body: "Nous nous réservons le droit de modifier la présente politique à tout moment. Toute modification significative sera notifiée par courriel aux personnes concernées ou affichée bien en vue sur notre site avec la date de mise à jour.",
      },
      {
        title: "12. Contact et plaintes",
        body: "Pour toute question relative à cette politique ou à vos renseignements personnels :\n\nCivicAI Inc. — Responsable de la protection des renseignements personnels\ncourriel : contact@nexhire.ca\ntél. : 905 809-7798\nTrois-Rivières, Québec, Canada\n\nSi vous estimez que vos droits n'ont pas été respectés, vous pouvez déposer une plainte auprès de la Commission d'accès à l'information du Québec (CAI) : www.cai.gouv.qc.ca",
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: June 27, 2026",
    intro: "CivicAI Inc. ('CivicAI', 'we') is committed to protecting the privacy of individuals who use our platforms and visit our website. This policy explains how we collect, use, retain and protect your personal information, in accordance with Quebec's Law 25 (Act to modernize legislative provisions respecting the protection of personal information) and the Personal Information Protection and Electronic Documents Act (PIPEDA).",
    sections: [
      {
        title: "1. Who We Are",
        body: "CivicAI Inc. is a corporation incorporated in Quebec, headquartered in Trois-Rivières, Quebec, Canada. We develop artificial intelligence platforms (AgentHub Platform, NexHire EIP, AttenteZéro) for businesses, chambers of commerce, public institutions and Quebec organizations.\n\nPrivacy Officer:\nEmail: contact@nexhire.ca\nPhone: 905 809-7798\nAddress: Trois-Rivières, Quebec, Canada",
      },
      {
        title: "2. Information We Collect",
        body: "We collect the following categories of information:\n\n• Identification: full name, organization name, email address.\n• Contact details: phone number (if voluntarily provided).\n• Browsing data: IP address, browser type, pages visited, visit duration (via server logs).\n• Communication content: messages sent via our contact form.\n\nWe do not collect sensitive information (medical data, personal financial data, social insurance numbers).",
      },
      {
        title: "3. Purposes of Processing",
        body: "Your information is used exclusively for:\n\n• Responding to demo or information requests.\n• Contacting you in relation to a pilot project or deployment.\n• Improving our platforms and services.\n• Complying with legal and regulatory obligations.\n• Sending relevant commercial communications (with your consent).\n\nWe do not sell, rent or share your personal information to third parties for commercial purposes.",
      },
      {
        title: "4. Legal Basis",
        body: "We process your personal information based on:\n\n• Your explicit consent (contact form, registration).\n• Performance of a contract or pre-contractual steps.\n• Our legitimate interests (service improvement, security).\n• Compliance with a legal obligation.",
      },
      {
        title: "5. Data Retention",
        body: "We retain your personal information for as long as necessary for the described purposes, and at most:\n\n• Contact form data: 24 months.\n• Active client data: duration of contractual relationship + 5 years.\n• Navigation logs: 12 months.\n\nUpon expiry of these periods, data is securely deleted or anonymized.",
      },
      {
        title: "6. Information Sharing",
        body: "Your information may be shared with:\n\n• Our technical service providers (hosting: Cloudflare, Render; forms: FormSubmit.co) under confidentiality agreements.\n• Competent authorities where required by law.\n\nAll providers are selected for compliance with applicable data protection standards.",
      },
      {
        title: "7. Hosting and International Transfers",
        body: "Our site is hosted on Cloudflare Pages (global infrastructure). Application services are deployed on Render (United States). These providers apply standard contractual clauses compliant with data protection standards.\n\nOperational data is primarily stored in Canada.",
      },
      {
        title: "8. Cookies",
        body: "Our site uses cookies essential for page functionality. We do not use advertising tracking or third-party profiling cookies.\n\nYou may configure your browser to refuse cookies, which may affect some site functionality.",
      },
      {
        title: "9. Your Rights",
        body: "Under Law 25, you have the following rights:\n\n• Right of access: know what information we hold about you.\n• Right of rectification: correct inaccurate information.\n• Right to deletion: request erasure of your data.\n• Right to portability: receive your data in a structured format.\n• Right to object: object to certain processing.\n• Right to withdraw consent: at any time, without prejudice to prior processing.\n\nTo exercise your rights, write to: contact@nexhire.ca\nWe will respond within 30 days.",
      },
      {
        title: "10. Security",
        body: "CivicAI implements appropriate technical and organizational measures to protect your information against unauthorized access, loss, destruction or disclosure:\n\n• HTTPS encryption on all communications.\n• Multi-tenant architecture with per-client data isolation.\n• Restricted access to personal information based on least-privilege principle.\n• Periodic review of access and security policies.",
      },
      {
        title: "11. Changes",
        body: "We reserve the right to modify this policy at any time. Any significant change will be notified by email to affected persons or prominently displayed on our site with the update date.",
      },
      {
        title: "12. Contact and Complaints",
        body: "For any questions regarding this policy or your personal information:\n\nCivicAI Inc. — Privacy Officer\nemail: contact@nexhire.ca\nphone: 905 809-7798\nTrois-Rivières, Quebec, Canada\n\nIf you believe your rights have not been respected, you may file a complaint with the Commission d'accès à l'information du Québec (CAI): www.cai.gouv.qc.ca",
      },
    ],
  },
};

export default async function PolitiquePage({ params }: Props) {
  const { locale } = await params;
  const c = locale === "en" ? CONTENT.en : CONTENT.fr;

  return (
    <>
      <section className="bg-white" style={{ paddingTop: "144px" }}>
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-slate-600 mb-6 transition-colors"
            >
              ← {locale === "en" ? "Back to home" : "Retour à l'accueil"}
            </Link>
            <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#7c3aed" }}>
              {locale === "en" ? "Legal" : "Juridique"}
            </div>
            <h1
              className="text-4xl font-bold text-slate-900 mb-3"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              {c.title}
            </h1>
            <p className="text-sm text-slate-400">{c.updated}</p>
            <div className="mt-6 p-5 rounded-2xl border border-slate-100 bg-slate-50">
              <p className="text-sm text-slate-600 leading-relaxed">{c.intro}</p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {c.sections.map((s) => (
              <div key={s.title}>
                <h2
                  className="text-lg font-bold text-slate-900 mb-3"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {s.title}
                </h2>
                <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                  {s.body}
                </div>
                <div className="mt-6 border-b border-slate-100" />
              </div>
            ))}
          </div>

          {/* Footer link */}
          <div className="mt-12 pt-8 flex flex-wrap gap-4 text-sm">
            <Link
              href="/conditions-utilisation"
              className="font-medium hover:underline"
              style={{ color: "#7c3aed" }}
            >
              {locale === "en" ? "Terms of Use →" : "Conditions d'utilisation →"}
            </Link>
            <Link
              href="/contact"
              className="font-medium text-slate-500 hover:text-slate-800 hover:underline"
            >
              {locale === "en" ? "Contact us" : "Nous contacter"}
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
