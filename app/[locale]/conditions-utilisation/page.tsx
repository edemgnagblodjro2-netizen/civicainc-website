import { Link } from "@/i18n/navigation";
import ContactCTA from "@/components/ContactCTA";

type Props = { params: Promise<{ locale: string }> };

const CONTENT = {
  fr: {
    title: "Conditions d'utilisation",
    updated: "Dernière mise à jour : 27 juin 2026",
    intro: "Les présentes conditions d'utilisation (« Conditions ») régissent l'accès et l'utilisation des plateformes, services et site web de CivicAI Inc. (« CivicAI », « nous »). En accédant à nos services, vous acceptez d'être lié par ces Conditions. Si vous n'acceptez pas ces Conditions, veuillez ne pas utiliser nos services.",
    sections: [
      {
        title: "1. Définitions",
        body: "• « Services » : l'ensemble des plateformes logicielles, outils et fonctionnalités développés par CivicAI Inc., incluant AgentHub Platform, NexHire EIP et AttenteZéro.\n• « Utilisateur » : toute personne physique ou morale accédant aux Services.\n• « Client » : toute organisation ayant conclu un contrat avec CivicAI.\n• « Données » : toute information soumise ou générée dans le cadre de l'utilisation des Services.",
      },
      {
        title: "2. Accès aux services",
        body: "CivicAI accorde à l'Utilisateur une licence limitée, non exclusive, non transférable et révocable pour accéder et utiliser les Services conformément aux présentes Conditions.\n\nL'accès aux Services nécessite :\n• La création d'un compte (pour les plateformes applicatives).\n• L'acceptation des présentes Conditions.\n• Le respect des lois applicables.\n\nCivicAI se réserve le droit de suspendre ou de résilier l'accès à tout moment en cas de violation des présentes Conditions.",
      },
      {
        title: "3. Utilisation acceptable",
        body: "Vous vous engagez à :\n• Utiliser les Services uniquement à des fins légales et conformes à leur destination.\n• Ne pas tenter de contourner les mesures de sécurité.\n• Ne pas reproduire, distribuer ou modifier les Services sans autorisation écrite.\n• Ne pas utiliser les Services pour nuire à des tiers.\n• Fournir des informations exactes et à jour.\n\nToute utilisation abusive, frauduleuse ou non autorisée entraîne la résiliation immédiate de l'accès.",
      },
      {
        title: "4. Propriété intellectuelle",
        body: "L'ensemble des droits de propriété intellectuelle relatifs aux Services — incluant les logiciels, algorithmes, interfaces, marques, logos, textes et contenus — sont la propriété exclusive de CivicAI Inc. ou de ses concédants de licence.\n\nLes présentes Conditions ne vous confèrent aucun droit de propriété sur les Services. Le nom CivicAI, AgentHub, NexHire, AttenteZéro et ATLAS sont des marques de CivicAI Inc. Toute utilisation non autorisée est strictement interdite.",
      },
      {
        title: "5. Données de l'utilisateur",
        body: "Vous conservez la propriété de vos données soumises dans le cadre de l'utilisation des Services. En soumettant des données, vous accordez à CivicAI une licence limitée pour les traiter aux seules fins de la prestation des Services.\n\nCivicAI s'engage à :\n• Ne pas utiliser vos données à des fins autres que la prestation des Services.\n• Appliquer des mesures de sécurité appropriées.\n• Supprimer vos données sur demande, conformément à la Politique de confidentialité.",
      },
      {
        title: "6. Disponibilité et maintenance",
        body: "CivicAI s'efforce de maintenir les Services disponibles en permanence, mais ne garantit pas une disponibilité ininterrompue. Des interruptions planifiées ou imprévues peuvent survenir pour maintenance, mises à jour ou raisons indépendantes de notre volonté.\n\nNous notifierons les interruptions planifiées dans la mesure du possible.",
      },
      {
        title: "7. Limitation de responsabilité",
        body: "Dans les limites permises par la loi applicable :\n\n• CivicAI ne saurait être tenu responsable des dommages indirects, accessoires, spéciaux ou consécutifs découlant de l'utilisation ou de l'impossibilité d'utiliser les Services.\n• La responsabilité totale de CivicAI ne saurait excéder le montant payé par l'Utilisateur au cours des 12 mois précédant l'événement générateur.\n• Les Services sont fournis « tels quels » pour les accès en mode démonstration ou évaluation.",
      },
      {
        title: "8. Confidentialité",
        body: "Chaque partie s'engage à garder confidentiels les renseignements désignés comme confidentiels par l'autre partie, et à ne pas les divulguer à des tiers sans consentement préalable.\n\nCette obligation de confidentialité survit à la résiliation des présentes Conditions pour une durée de cinq (5) ans.",
      },
      {
        title: "9. Résiliation",
        body: "Vous pouvez mettre fin à votre utilisation des Services à tout moment en cessant d'y accéder.\n\nCivicAI peut résilier ou suspendre votre accès :\n• En cas de violation des présentes Conditions.\n• Sur préavis de 30 jours pour toute autre raison.\n• Immédiatement en cas de comportement frauduleux ou malveillant.\n\nÀ la résiliation, toutes les licences accordées prennent fin et vous devez cesser d'utiliser les Services.",
      },
      {
        title: "10. Droit applicable et juridiction",
        body: "Les présentes Conditions sont régies et interprétées conformément aux lois de la province de Québec et aux lois fédérales du Canada qui s'y appliquent.\n\nTout litige découlant des présentes Conditions sera soumis à la compétence exclusive des tribunaux de la province de Québec, district judiciaire de Trois-Rivières.",
      },
      {
        title: "11. Modifications des conditions",
        body: "CivicAI se réserve le droit de modifier les présentes Conditions à tout moment. Les modifications entrent en vigueur à leur publication sur notre site. Votre utilisation continue des Services après publication constitue votre acceptation des Conditions modifiées.\n\nNous vous recommandons de consulter régulièrement cette page.",
      },
      {
        title: "12. Contact",
        body: "Pour toute question relative aux présentes Conditions :\n\nCivicAI Inc.\ncourriel : contact@nexhire.ca\ntél. : 905 809-7798\nTrois-Rivières, Québec, Canada",
      },
    ],
  },
  en: {
    title: "Terms of Use",
    updated: "Last updated: June 27, 2026",
    intro: "These Terms of Use ('Terms') govern access to and use of CivicAI Inc.'s ('CivicAI', 'we') platforms, services and website. By accessing our services, you agree to be bound by these Terms. If you do not accept these Terms, please do not use our services.",
    sections: [
      {
        title: "1. Definitions",
        body: "• 'Services': all software platforms, tools and features developed by CivicAI Inc., including AgentHub Platform, NexHire EIP and AttenteZéro.\n• 'User': any individual or legal entity accessing the Services.\n• 'Client': any organization having entered into a contract with CivicAI.\n• 'Data': any information submitted or generated in connection with use of the Services.",
      },
      {
        title: "2. Access to Services",
        body: "CivicAI grants the User a limited, non-exclusive, non-transferable and revocable license to access and use the Services in accordance with these Terms.\n\nAccess to the Services requires:\n• Creating an account (for application platforms).\n• Acceptance of these Terms.\n• Compliance with applicable laws.\n\nCivicAI reserves the right to suspend or terminate access at any time in the event of a breach of these Terms.",
      },
      {
        title: "3. Acceptable Use",
        body: "You agree to:\n• Use the Services only for lawful purposes consistent with their intended use.\n• Not attempt to circumvent security measures.\n• Not reproduce, distribute or modify the Services without written authorization.\n• Not use the Services to harm third parties.\n• Provide accurate and up-to-date information.\n\nAny abusive, fraudulent or unauthorized use will result in immediate termination of access.",
      },
      {
        title: "4. Intellectual Property",
        body: "All intellectual property rights relating to the Services — including software, algorithms, interfaces, trademarks, logos, texts and content — are the exclusive property of CivicAI Inc. or its licensors.\n\nThese Terms do not grant you any ownership rights in the Services. CivicAI, AgentHub, NexHire, AttenteZéro and ATLAS are trademarks of CivicAI Inc. Any unauthorized use is strictly prohibited.",
      },
      {
        title: "5. User Data",
        body: "You retain ownership of your data submitted in connection with use of the Services. By submitting data, you grant CivicAI a limited license to process it solely for the purpose of providing the Services.\n\nCivicAI commits to:\n• Not using your data for purposes other than service delivery.\n• Applying appropriate security measures.\n• Deleting your data upon request, in accordance with our Privacy Policy.",
      },
      {
        title: "6. Availability and Maintenance",
        body: "CivicAI strives to keep the Services continuously available but does not guarantee uninterrupted availability. Planned or unplanned interruptions may occur for maintenance, updates or reasons beyond our control.\n\nWe will notify planned interruptions where possible.",
      },
      {
        title: "7. Limitation of Liability",
        body: "To the extent permitted by applicable law:\n\n• CivicAI shall not be liable for indirect, incidental, special or consequential damages arising from use of or inability to use the Services.\n• CivicAI's total liability shall not exceed the amount paid by the User in the 12 months preceding the triggering event.\n• Services are provided 'as is' for demonstration or evaluation access.",
      },
      {
        title: "8. Confidentiality",
        body: "Each party agrees to keep confidential information designated as confidential by the other party and not to disclose it to third parties without prior consent.\n\nThis confidentiality obligation survives termination of these Terms for a period of five (5) years.",
      },
      {
        title: "9. Termination",
        body: "You may terminate your use of the Services at any time by ceasing to access them.\n\nCivicAI may terminate or suspend your access:\n• In the event of a breach of these Terms.\n• With 30 days' notice for any other reason.\n• Immediately in the event of fraudulent or malicious conduct.\n\nUpon termination, all licenses granted cease and you must stop using the Services.",
      },
      {
        title: "10. Governing Law and Jurisdiction",
        body: "These Terms are governed and interpreted in accordance with the laws of the Province of Quebec and applicable federal laws of Canada.\n\nAny dispute arising from these Terms shall be subject to the exclusive jurisdiction of the courts of the Province of Quebec, judicial district of Trois-Rivières.",
      },
      {
        title: "11. Amendments",
        body: "CivicAI reserves the right to modify these Terms at any time. Modifications take effect upon publication on our site. Your continued use of the Services after publication constitutes your acceptance of the amended Terms.\n\nWe recommend checking this page regularly.",
      },
      {
        title: "12. Contact",
        body: "For any questions regarding these Terms:\n\nCivicAI Inc.\nemail: contact@nexhire.ca\nphone: 905 809-7798\nTrois-Rivières, Quebec, Canada",
      },
    ],
  },
};

export default async function ConditionsPage({ params }: Props) {
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
              href="/politique-confidentialite"
              className="font-medium hover:underline"
              style={{ color: "#7c3aed" }}
            >
              {locale === "en" ? "Privacy Policy →" : "Politique de confidentialité →"}
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
