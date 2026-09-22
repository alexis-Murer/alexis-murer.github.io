const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const languageToggle = document.getElementById("languageToggle");
const year = document.getElementById("year");
const glow = document.querySelector(".cursor-glow");

year.textContent = new Date().getFullYear();

const savedTheme = localStorage.getItem("theme");
if (savedTheme) root.dataset.theme = savedTheme;

themeToggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

window.addEventListener("pointermove", (event) => {
  if (window.matchMedia("(pointer: fine)").matches) {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
    glow.style.opacity = "1";
  }
});

const translations = {
  fr: {
    nav_about: "À propos", nav_experience: "Expériences", nav_projects: "Projets", nav_skills: "Compétences", nav_education: "Formation", nav_contact: "Contact",
    hero_eyebrow: "INGÉNIERIE · TRANSFORMATION · MANAGEMENT",
    hero_lead: "Un profil hybride entre industrie, analyse de données et gestion de projet.",
    hero_sub: "J'analyse des problématiques techniques complexes pour les transformer en décisions structurées, lisibles et actionnables.",
    hero_cta_work: "Découvrir mon parcours", hero_cta_contact: "Me contacter",
    fact_analyzed: "références analysées", fact_refs: "références accompagnées vers l'arrêt", fact_formulas: "formulations expérimentales", fact_masters: "masters complémentaires",
    floating_transformation: "Transformation", floating_management: "Management",
    about_eyebrow: "01 — PROFIL", about_title: "Du laboratoire à la transformation.",
    about_p1: "Mon parcours associe une formation en chimie industrielle à une spécialisation en management des entreprises.",
    about_p2: "Cette double lecture me permet de comprendre la réalité technique d'un sujet, d'en structurer les données puis d'accompagner la coordination et la décision.",
    about_p3: "En dernière année de Master, je recherche une opportunité VIE mêlant analyse de données, gestion de projet et performance industrielle dans un environnement international.",
    experience_eyebrow: "02 — EXPÉRIENCES", experience_title: "Six entreprises, un même fil conducteur.",
    experience_intro: "Analyser, expérimenter et coordonner pour améliorer la performance industrielle.",
    photo_source: "Source du visuel ↗", official_source: "Source officielle ↗", earlier_experience: "Expérience antérieure", internship: "Stage", two_years: "2 ans",
    somfy_date: "sept. 2025 — sept. 2026", somfy_role: "Coordinateur de projets transformation · Alternance",
    somfy_m1: "Contribution à la transformation des processus et à l'amélioration continue au sein de l'équipe Performance de l'organisation Product & Service.",
    somfy_m2: "Rationalisation d'un portefeuille de plus de 60 000 références et développement d'outils d'analyse sous Excel et Power BI.",
    somfy_m3: "Analyses financières : ROI, optimisation des stocks et aide à la décision.",
    somfy_m4: "Collaboration transverse avec la R&D, les Business Lines et l'IT.", somfy_portfolio: "références analysées", somfy_result: "références accompagnées vers l'arrêt",
    gerflor_date: "août 2023 — sept. 2025", gerflor_role: "Chef de projet R&D recyclage des matériaux · Alternance",
    gerflor_m1: "Formulation et prototypage de matériaux intégrant des matières recyclées.",
    gerflor_m2: "Caractérisation des matières recyclées et développement de nouvelles méthodes.",
    gerflor_m3: "Conception et exploitation d'un plan d'expériences d'environ 100 formulations.",
    gerflor_m4: "Optimisation d'outils logiciels pour améliorer la recyclabilité et l'intégration industrielle.", gerflor_result: "formulations étudiées",
    loreal_date: "sept. 2022 — août 2023", loreal_role: "Coloriste luxe · Alternance",
    loreal_m1: "Veille concurrentielle sur les rouges à lèvres de luxe.",
    loreal_m2: "Accompagnement couleur des équipes Marketing en Asie et aux États-Unis pour préparer un futur lancement.",
    loreal_m3: "Contretypage de teintes et création de cartographies pour décrypter les stratégies des marques concurrentes.",
    weber_date: "Deux expériences", weber_date_2022: "juil. 2022 — août 2022 · 2 mois", weber_date_2019: "avr. 2019 — août 2019 · 5 mois",
    weber_role: "Technicien de laboratoire contrôle qualité",
    weber_m1: "Analyses sur mortiers durcis, joints et enduits de façade.",
    weber_m2: "Mesures d'absorption capillaire et de variation dimensionnelle.",
    weber_m3: "Essais de rupture, compression et flexion.",
    weber_2019_m1: "Analyses sur mortiers durcis, joints et enduits de façade.",
    weber_2019_m2: "Mesures physiques et essais mécaniques : absorption, variation dimensionnelle, rupture, compression et flexion.",
    weber_2019_m3: "Participation à une démarche 5S.",
    total_date: "sept. 2020 — août 2022", total_role: "Technicien en chromatographie · Alternance",
    total_m1: "Contrôle de production sur les essences, les gaz et d'autres produits pétroliers.",
    total_m2: "Analyses par chromatographie en phase gazeuse, HPLC et proche infrarouge.",
    total_m3: "Installation d'un Reformulyzer pour analyser les essences à forte teneur en éthanol.",
    savencia_date: "déc. 2018 — mars 2019", savencia_role: "Technicien qualité",
    savencia_m1: "Contrôle qualité sur une ligne de production fromagère.", savencia_m2: "Réalisation d'analyses microbiologiques.", savencia_m3: "Suivi des audits qualité.",
    projects_eyebrow: "03 — PROJETS SÉLECTIONNÉS", projects_title: "Deux projets, de la donnée à la décision.",
    project_leon_title: "Rationalisation de l'offre",
    project_leon_text: "Contribution à un programme transverse visant à analyser le portefeuille de références et à sécuriser les décisions d'arrêt.",
    flow_data: "Données", flow_analysis: "Analyse", flow_decision: "Décision", flow_governance: "Gouvernance",
    project_leon_b1: "Analyses Excel et Power BI", project_leon_b2: "KPI et reporting de performance", project_leon_b3: "Appui à la coordination BL / BA / BU", project_leon_kpi: "références accompagnées vers l'arrêt",
    project_pvc_title: "Réintégration de matière recyclée",
    project_pvc_text: "Étude expérimentale destinée à mieux caractériser des chutes PVC et à déterminer leurs conditions de réintégration dans le procédé.",
    project_pvc_b1: "Plan d'expériences et formulation", project_pvc_b2: "Analyse statistique des résultats", project_pvc_b3: "Lien laboratoire / industrialisation", project_pvc_kpi: "formulations testées",
    skills_eyebrow: "04 — COMPÉTENCES", skills_title: "Technique, data et coordination.",
    skill_project_title: "Gestion de projet", skill_project_text: "Coordination, gouvernance, suivi d'actions, KPI, reporting et communication transverse.",
    skill_data_title: "Data & décision", skill_data_text: "Excel avancé, tableaux croisés dynamiques, analyses structurées et visualisation Power BI.",
    skill_industry_title: "Industrie", skill_industry_text: "Formulation, industrialisation, expérimentation, amélioration continue et environnement laboratoire.",
    skill_business_title: "Business Analysis", skill_business_text: "Analyse des besoins, performance organisationnelle, stratégie et compréhension transverse des enjeux métier.",
    education_eyebrow: "05 — FORMATION", education_title: "Une double compétence scientifique et managériale.",
    education_mae_date: "sept. 2025 — sept. 2026", education_fci_date: "sept. 2023 — sept. 2025", education_itech_date: "sept. 2022 — sept. 2023",
    education_mae: "Master Management et Administration des Entreprises", education_fci: "Master Formulation et Chimie Industrielle", education_license: "Licence professionnelle · Formulation Coloriste Cosmétique", education_bts: "BTS Métiers de la chimie", education_bac: "Baccalauréat professionnel · Technicien du contrôle qualité",
    contact_eyebrow: "06 — CONTACT", contact_title: "Un projet, une opportunité, une discussion ?", contact_text: "Je suis disponible par e-mail ou sur LinkedIn.", footer_text: "Portfolio personnel"
  },
  en: {
    nav_about: "About", nav_experience: "Experience", nav_projects: "Projects", nav_skills: "Skills", nav_education: "Education", nav_contact: "Contact",
    hero_eyebrow: "ENGINEERING · TRANSFORMATION · MANAGEMENT",
    hero_lead: "A hybrid profile combining industry, data analysis and project management.",
    hero_sub: "I analyse complex technical challenges and turn them into structured, understandable and actionable decisions.",
    hero_cta_work: "Explore my background", hero_cta_contact: "Contact me",
    fact_analyzed: "references analysed", fact_refs: "references supported towards discontinuation", fact_formulas: "experimental formulations", fact_masters: "complementary master's degrees",
    floating_transformation: "Transformation", floating_management: "Management",
    about_eyebrow: "01 — PROFILE", about_title: "From the laboratory to transformation.",
    about_p1: "My background combines industrial chemistry training with a specialization in business management.",
    about_p2: "This dual perspective enables me to understand the technical reality of a topic, structure its data and support coordination and decision-making.",
    about_p3: "As a final-year Master's student, I am seeking a VIE opportunity combining data analysis, project management and industrial performance in an international environment.",
    experience_eyebrow: "02 — EXPERIENCE", experience_title: "Six companies, one common thread.",
    experience_intro: "Analysing, experimenting and coordinating to improve industrial performance.",
    photo_source: "Image source ↗", official_source: "Official source ↗", earlier_experience: "Earlier experience", internship: "Internship", two_years: "2 years",
    somfy_date: "Sep. 2025 — Sep. 2026", somfy_role: "Transformation Project Coordinator · Work-study programme",
    somfy_m1: "Contributed to process transformation and continuous improvement within the Performance team of the Product & Service organisation.",
    somfy_m2: "Rationalised a portfolio of more than 60,000 references and developed analytical tools using Excel and Power BI.",
    somfy_m3: "Performed financial analyses covering ROI, inventory optimisation and decision support.",
    somfy_m4: "Collaborated cross-functionally with R&D, Business Lines and IT.", somfy_portfolio: "references analysed", somfy_result: "references supported towards discontinuation",
    gerflor_date: "Aug. 2023 — Sep. 2025", gerflor_role: "R&D Materials Recycling Project Manager · Work-study programme",
    gerflor_m1: "Formulated and prototyped materials incorporating recycled content.",
    gerflor_m2: "Characterised recycled materials and developed new methods.",
    gerflor_m3: "Designed and analysed a Design of Experiments covering approximately 100 formulations.",
    gerflor_m4: "Optimised software tools to improve recyclability and industrial integration.", gerflor_result: "formulations studied",
    loreal_date: "Sep. 2022 — Aug. 2023", loreal_role: "Luxury Colourist · Apprenticeship",
    loreal_m1: "Conducted competitive monitoring of luxury lipsticks.",
    loreal_m2: "Provided colour expertise to Marketing teams in Asia and the US in preparation for a future launch.",
    loreal_m3: "Colour-matched lipsticks and created mappings to understand competitors' brand strategies.",
    weber_date: "Two positions", weber_date_2022: "Jul. 2022 — Aug. 2022 · 2 months", weber_date_2019: "Apr. 2019 — Aug. 2019 · 5 months",
    weber_role: "Quality Control Laboratory Technician",
    weber_m1: "Analysed hardened mortars, joints and façade coatings.",
    weber_m2: "Measured capillary absorption and dimensional variation.",
    weber_m3: "Performed rupture, compression and bending tests.",
    weber_2019_m1: "Analysed hardened mortars, joints and façade coatings.",
    weber_2019_m2: "Performed physical measurements and mechanical tests: absorption, dimensional variation, rupture, compression and bending.",
    weber_2019_m3: "Contributed to a 5S initiative.",
    total_date: "Sep. 2020 — Aug. 2022", total_role: "Chromatography Technician · Apprenticeship",
    total_m1: "Performed production control analyses on gasoline, gases and other petroleum products.",
    total_m2: "Used gas chromatography, HPLC and near-infrared analysis.",
    total_m3: "Installed a Reformulyzer to analyse high-ethanol gasoline.",
    savencia_date: "Dec. 2018 — Mar. 2019", savencia_role: "Quality Technician",
    savencia_m1: "Performed quality control on cheese production.", savencia_m2: "Conducted microbiological analyses.", savencia_m3: "Monitored quality audits.",
    projects_eyebrow: "03 — SELECTED PROJECTS", projects_title: "Two projects, from data to decisions.",
    project_leon_title: "Product portfolio rationalisation",
    project_leon_text: "Contribution to a cross-functional programme designed to analyse a product portfolio and secure discontinuation decisions.",
    flow_data: "Data", flow_analysis: "Analysis", flow_decision: "Decision", flow_governance: "Governance",
    project_leon_b1: "Excel and Power BI analyses", project_leon_b2: "Performance KPIs and reporting", project_leon_b3: "Support for BL / BA / BU coordination", project_leon_kpi: "references supported towards discontinuation",
    project_pvc_title: "Reintegration of recycled material",
    project_pvc_text: "Experimental study designed to better characterise PVC waste and determine the conditions for reintegrating it into the process.",
    project_pvc_b1: "Design of experiments and formulation", project_pvc_b2: "Statistical analysis of results", project_pvc_b3: "Laboratory-to-industrialisation link", project_pvc_kpi: "formulations tested",
    skills_eyebrow: "04 — SKILLS", skills_title: "Technical expertise, data and coordination.",
    skill_project_title: "Project management", skill_project_text: "Coordination, governance, action tracking, KPIs, reporting and cross-functional communication.",
    skill_data_title: "Data & decisions", skill_data_text: "Advanced Excel, pivot tables, structured analysis and Power BI visualisation.",
    skill_industry_title: "Industry", skill_industry_text: "Formulation, industrialisation, experimentation, continuous improvement and laboratory environments.",
    skill_business_title: "Business Analysis", skill_business_text: "Requirements analysis, organisational performance, strategy and cross-functional business understanding.",
    education_eyebrow: "05 — EDUCATION", education_title: "A dual scientific and managerial background.",
    education_mae_date: "Sep. 2025 — Sep. 2026", education_fci_date: "Sep. 2023 — Sep. 2025", education_itech_date: "Sep. 2022 — Sep. 2023",
    education_mae: "Master's degree in Business Administration and Management", education_fci: "Master's degree in Formulation and Industrial Chemistry", education_license: "Professional Bachelor's degree · Cosmetic Color Formulation", education_bts: "Advanced Technician Diploma in Chemistry", education_bac: "Vocational Baccalaureate · Quality Control Technician",
    contact_eyebrow: "06 — CONTACT", contact_title: "A project, an opportunity, a conversation?", contact_text: "I am available by email or on LinkedIn.", footer_text: "Personal portfolio"
  }
};

let currentLanguage = localStorage.getItem("language") || "fr";

function applyLanguage(language) {
  currentLanguage = language;
  root.lang = language;
  languageToggle.textContent = language === "fr" ? "EN" : "FR";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[language][element.dataset.i18n];
    if (value) element.textContent = value;
  });
  localStorage.setItem("language", language);
}

languageToggle.addEventListener("click", () => applyLanguage(currentLanguage === "fr" ? "en" : "fr"));
applyLanguage(currentLanguage);
