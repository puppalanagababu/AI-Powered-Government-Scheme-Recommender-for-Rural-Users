const schemes = [
  {
    id: "pm-kisan",
    name: "PM-KISAN Samman Nidhi",
    type: "Agriculture",
    description: "Income support for eligible farmer families with cultivable land.",
    officialUrl: "https://pmkisan.gov.in/",
    appliesTo: {
      occupations: ["farmer"],
      income: ["low", "lower-middle"],
      land: ["small", "medium"],
      needs: ["livelihood"],
    },
    benefits: "Direct financial assistance in installments.",
    documents: ["Aadhaar", "bank account", "land records"],
    steps: [
      "Open the official PM-KISAN portal or visit a nearby Common Service Centre.",
      "Choose New Farmer Registration and enter Aadhaar, mobile number, state, and basic details.",
      "Fill land record details and bank account information carefully.",
      "Complete eKYC through OTP, biometric CSC support, or the official app where available.",
      "Submit the form and save the registration number.",
      "Use Know Your Status on the official portal to track approval and payment status.",
    ],
  },
  {
    id: "pmay-g",
    name: "Pradhan Mantri Awas Yojana - Gramin",
    type: "Housing",
    description: "Housing assistance for rural households without a pucca house.",
    officialUrl: "https://pmayg.nic.in/",
    appliesTo: {
      occupations: ["labourer", "farmer", "unemployed", "artisan"],
      income: ["low", "lower-middle"],
      land: ["none", "small"],
      needs: ["housing"],
    },
    benefits: "Financial support to construct a safe rural house.",
    documents: ["Aadhaar", "ration card", "income proof", "bank account"],
    steps: [
      "Check whether the household is listed by the Gram Panchayat or rural housing survey records.",
      "Visit the Gram Panchayat, Block Development Office, or PMAY-G portal for beneficiary verification.",
      "Submit Aadhaar, bank account, income, and house condition details.",
      "Wait for field verification and approval by local rural development officials.",
      "After approval, track installments through the PMAY-G portal or local office.",
      "Use the assistance for house construction as per scheme rules and verification stages.",
    ],
  },
  {
    id: "ayushman",
    name: "Ayushman Bharat PM-JAY",
    type: "Health",
    description: "Health insurance support for eligible low-income families.",
    officialUrl: "https://pmjay.gov.in/",
    appliesTo: {
      occupations: ["labourer", "farmer", "unemployed", "artisan", "self-help-group"],
      income: ["low", "lower-middle"],
      land: ["none", "small"],
      needs: ["health"],
    },
    benefits: "Cashless hospital treatment at empanelled hospitals.",
    documents: ["Aadhaar", "ration card", "mobile number"],
    steps: [
      "Open the official PM-JAY website or Ayushman app, or visit an empanelled hospital/helpdesk.",
      "Check eligibility using Aadhaar, ration card, mobile number, or family details.",
      "If eligible, complete identity verification with Aadhaar or approved documents.",
      "Generate or collect the Ayushman card from the portal, hospital kiosk, or CSC.",
      "For treatment, visit an empanelled hospital and show the Ayushman card or verified ID.",
      "Hospital staff process the cashless treatment request through the PM-JAY system.",
    ],
  },
  {
    id: "mgnrega",
    name: "MGNREGA Job Card",
    type: "Employment",
    description: "Guaranteed wage employment for rural households willing to do manual work.",
    officialUrl: "https://nrega.dord.gov.in/",
    appliesTo: {
      occupations: ["labourer", "unemployed", "farmer"],
      income: ["low", "lower-middle"],
      land: ["none", "small"],
      needs: ["livelihood"],
      age: ["youth", "adult"],
    },
    benefits: "Local wage employment and job card-based work demand.",
    documents: ["Aadhaar", "address proof", "bank account", "photograph"],
    steps: [
      "Visit the Gram Panchayat office and ask for MGNREGA job card registration.",
      "Submit household member details, address proof, Aadhaar, bank details, and photographs.",
      "The Gram Panchayat verifies the household and issues a job card if eligible.",
      "After receiving the job card, submit a written or online demand for work.",
      "Work should be allotted as per MGNREGA rules, usually through local public works.",
      "Attendance and wages are recorded, and payment is transferred to the registered account.",
    ],
  },
  {
    id: "swachh",
    name: "Swachh Bharat Mission - Gramin",
    type: "Sanitation",
    description: "Support for rural sanitation and household toilet construction.",
    officialUrl: "https://swachhbharatmission.ddws.gov.in/",
    appliesTo: {
      occupations: ["farmer", "labourer", "artisan", "unemployed"],
      income: ["low", "lower-middle", "middle"],
      land: ["none", "small", "medium"],
      needs: ["toilet"],
    },
    benefits: "Assistance for toilet construction and sanitation awareness.",
    documents: ["Aadhaar", "bank account", "address proof"],
    steps: [
      "Open the SBM-G portal and go to the IHHL application option, or visit the Gram Panchayat.",
      "Enter household details and confirm that the family needs toilet support.",
      "Submit Aadhaar, bank details, address proof, and required household information.",
      "Local officials verify the application and household sanitation status.",
      "After approval, construct the toilet as per local guidance.",
      "Submit completion details if required and track assistance through the portal or Panchayat.",
    ],
  },
  {
    id: "nrlm",
    name: "Deendayal Antyodaya Yojana - NRLM",
    type: "Livelihood",
    description: "Self-help group and livelihood support for rural women and poor households.",
    officialUrl: "https://nrlm.gov.in/",
    appliesTo: {
      occupations: ["self-help-group", "artisan", "unemployed", "labourer"],
      income: ["low", "lower-middle"],
      land: ["none", "small"],
      needs: ["women", "livelihood"],
    },
    benefits: "SHG support, credit linkage, training, and livelihood opportunities.",
    documents: ["Aadhaar", "SHG details", "bank account", "income proof"],
    steps: [
      "Contact the village organization, Cluster Level Federation, Gram Panchayat, or Block Mission Management Unit.",
      "Join an existing self-help group or form a new group with eligible members.",
      "Submit Aadhaar, bank account, income, and SHG member details.",
      "Attend group meetings and complete basic training or grading requirements.",
      "Apply for revolving fund, community investment fund, credit linkage, or livelihood training.",
      "Use the support for approved livelihood activity and maintain SHG records.",
    ],
  },
  {
    id: "scholarship",
    name: "Post-Matric Scholarship Support",
    type: "Education",
    description: "Education support for eligible students from disadvantaged communities.",
    officialUrl: "https://scholarships.gov.in/",
    appliesTo: {
      occupations: ["student"],
      income: ["low", "lower-middle"],
      category: ["sc-st", "obc", "minority"],
      needs: ["education"],
      age: ["child", "youth"],
    },
    benefits: "Fee support, maintenance allowance, and continuation of studies.",
    documents: ["Aadhaar", "caste/category certificate", "income certificate", "marksheet"],
    steps: [
      "Open the National Scholarship Portal or the state scholarship portal mentioned by the school or college.",
      "Create a student account and complete Aadhaar/mobile verification where required.",
      "Fill education, bank, income, category, and institution details.",
      "Upload certificates, marksheet, fee receipt, and bank passbook as required.",
      "Submit the application before the deadline and note the application ID.",
      "Track school/college verification, district/state verification, and payment status online.",
    ],
  },
  {
    id: "pension",
    name: "National Social Assistance Pension",
    type: "Pension",
    description: "Social pension support for eligible elderly, widowed, or vulnerable citizens.",
    officialUrl: "https://nsap.nic.in/",
    appliesTo: {
      occupations: ["unemployed", "labourer", "farmer"],
      income: ["low"],
      land: ["none", "small"],
      age: ["senior"],
    },
    benefits: "Monthly pension support through bank transfer.",
    documents: ["Aadhaar", "age proof", "income proof", "bank account"],
    steps: [
      "Visit the Gram Panchayat, Block Office, social welfare office, or state pension portal.",
      "Collect or open the pension application form for old age, widow, or disability pension as applicable.",
      "Attach Aadhaar, age proof, income/BPL proof, bank details, and other required documents.",
      "Submit the form to the local office or online portal.",
      "Officials verify age, income, residence, and eligibility.",
      "After approval, pension is sent to the registered bank or postal account; track status through NSAP or state portal.",
    ],
  },
];

const form = document.querySelector("#profileForm");
const results = document.querySelector("#results");
const resultSummary = document.querySelector("#resultSummary");
const schemeLibrary = document.querySelector("#schemeLibrary");
const languageSelect = document.querySelector("#language");
let currentLanguage = "en";

const translations = {
  en: {
    appName: "Government Scheme",
    tagline: "Government scheme recommender",
    languageLabel: "Language",
    navFind: "Find schemes",
    navSchemes: "Schemes",
    navAbout: "About",
    heroEyebrow: "AI-Powered Government Scheme Recommender for Rural Users",
    heroTitle: "Find the right welfare schemes with simple village-friendly questions.",
    heroCopy:
      "Government Scheme matches a rural household profile with useful central and state-style government schemes, explains why each scheme fits, and gives the next application steps.",
    startRecommendation: "Start recommendation",
    viewAllSchemes: "View all schemes",
    bestMatch: "Best match",
    fitScore: "fit score",
    documents: "Documents",
    profileEyebrow: "Rural user profile",
    profileTitle: "Tell us about the household",
    stateLabel: "State",
    occupationLabel: "Main occupation",
    incomeLabel: "Annual family income",
    landLabel: "Land ownership",
    ageLabel: "Age group",
    categoryLabel: "Social category",
    needsLegend: "Needs and conditions",
    needHousing: "Needs housing support",
    needHealth: "Needs health insurance",
    needToilet: "Needs toilet / sanitation support",
    needEducation: "Student education support",
    needWomen: "Woman applicant / women-led household",
    needLivelihood: "Wants livelihood or business support",
    recommendButton: "Recommend schemes",
    recommendationEyebrow: "AI recommendation",
    topMatches: "Top matches",
    emptySummary: "Fill the profile and press recommend to see personalized schemes.",
    libraryEyebrow: "Scheme library",
    libraryTitle: "Available schemes in this prototype",
    aboutEyebrow: "How it works",
    aboutTitle: "Simple matching, clear explanation",
    aboutStep1Title: "1. Collect profile",
    aboutStep1Copy: "The app asks practical questions about income, work, land, age, and household needs.",
    aboutStep2Title: "2. Score schemes",
    aboutStep2Copy: "A transparent matching engine compares the user profile with eligibility signals.",
    aboutStep3Title: "3. Explain next steps",
    aboutStep3Copy: "Each result shows why it matched, which documents to prepare, and how to apply.",
    footerNote:
      "Prototype for educational use. Confirm final eligibility and applications on official government portals or at a nearby Common Service Centre.",
    openScheme: "Open official scheme",
    applicationProcess: "Application process",
    documentsNeeded: "Documents",
    noMatch:
      "No strong match found. Try selecting the household's main need, or ask the Gram Panchayat or Common Service Centre for local schemes.",
    bestSummary: "is the best current match with a",
    scoreExplanation:
      "fit score. The score is based on occupation, income, land, age, category, and selected needs.",
  },
  hi: {
    appName: "Government Scheme",
    tagline: "सरकारी योजना सुझाव",
    languageLabel: "भाषा",
    navFind: "योजना खोजें",
    navSchemes: "योजनाएं",
    navAbout: "जानकारी",
    heroEyebrow: "ग्रामीण उपयोगकर्ताओं के लिए AI आधारित सरकारी योजना सुझाव",
    heroTitle: "सरल सवालों से सही सरकारी योजना खोजें।",
    heroCopy:
      "Government Scheme ग्रामीण परिवार की जानकारी से उपयोगी सरकारी योजनाएं सुझाता है, मिलान का कारण बताता है, और आवेदन के अगले कदम दिखाता है।",
    startRecommendation: "सुझाव शुरू करें",
    viewAllSchemes: "सभी योजनाएं देखें",
    bestMatch: "सबसे अच्छा मिलान",
    fitScore: "फिट स्कोर",
    documents: "दस्तावेज",
    profileEyebrow: "ग्रामीण उपयोगकर्ता प्रोफाइल",
    profileTitle: "परिवार की जानकारी दें",
    stateLabel: "राज्य",
    occupationLabel: "मुख्य काम",
    incomeLabel: "वार्षिक पारिवारिक आय",
    landLabel: "भूमि स्वामित्व",
    ageLabel: "आयु समूह",
    categoryLabel: "सामाजिक वर्ग",
    needsLegend: "जरूरतें और स्थिति",
    needHousing: "घर की सहायता चाहिए",
    needHealth: "स्वास्थ्य बीमा चाहिए",
    needToilet: "शौचालय / स्वच्छता सहायता चाहिए",
    needEducation: "छात्र शिक्षा सहायता",
    needWomen: "महिला आवेदक / महिला नेतृत्व वाला परिवार",
    needLivelihood: "रोजगार या व्यवसाय सहायता चाहिए",
    recommendButton: "योजना सुझाएं",
    recommendationEyebrow: "AI सुझाव",
    topMatches: "शीर्ष मिलान",
    emptySummary: "प्रोफाइल भरें और निजी योजना सुझाव देखने के लिए बटन दबाएं।",
    libraryEyebrow: "योजना सूची",
    libraryTitle: "इस प्रोटोटाइप में उपलब्ध योजनाएं",
    aboutEyebrow: "यह कैसे काम करता है",
    aboutTitle: "सरल मिलान, साफ समझ",
    aboutStep1Title: "1. प्रोफाइल लें",
    aboutStep1Copy: "ऐप आय, काम, भूमि, आयु और परिवार की जरूरतों पर सरल सवाल पूछता है।",
    aboutStep2Title: "2. योजना स्कोर करें",
    aboutStep2Copy: "मिलान इंजन उपयोगकर्ता प्रोफाइल को पात्रता संकेतों से मिलाता है।",
    aboutStep3Title: "3. अगले कदम बताएं",
    aboutStep3Copy: "हर परिणाम कारण, दस्तावेज और आवेदन प्रक्रिया दिखाता है।",
    footerNote:
      "यह शैक्षणिक प्रोटोटाइप है। अंतिम पात्रता और आवेदन सरकारी पोर्टल, ग्राम पंचायत या CSC से जांचें।",
    openScheme: "आधिकारिक योजना खोलें",
    applicationProcess: "आवेदन प्रक्रिया",
    documentsNeeded: "दस्तावेज",
    noMatch:
      "मजबूत मिलान नहीं मिला। परिवार की मुख्य जरूरत चुनें या ग्राम पंचायत / CSC से स्थानीय योजना पूछें।",
    bestSummary: "सबसे अच्छा वर्तमान मिलान है, स्कोर",
    scoreExplanation: "है। स्कोर काम, आय, भूमि, आयु, वर्ग और चुनी जरूरतों पर आधारित है।",
  },
  te: {
    appName: "Government Scheme",
    tagline: "ప్రభుత్వ పథకాల సూచన",
    languageLabel: "భాష",
    navFind: "పథకాలు కనుగొనండి",
    navSchemes: "పథకాలు",
    navAbout: "గురించి",
    heroEyebrow: "గ్రామీణ వినియోగదారుల కోసం AI ఆధారిత ప్రభుత్వ పథకాల సూచన",
    heroTitle: "సులభమైన ప్రశ్నలతో సరైన సంక్షేమ పథకాలు కనుగొనండి.",
    heroCopy:
      "Government Scheme గ్రామీణ కుటుంబ వివరాల ఆధారంగా ఉపయోగకరమైన ప్రభుత్వ పథకాలను సూచిస్తుంది, ఎందుకు సరిపోతుందో చెబుతుంది, మరియు దరఖాస్తు దశలను చూపిస్తుంది.",
    startRecommendation: "సూచన ప్రారంభించండి",
    viewAllSchemes: "అన్ని పథకాలు చూడండి",
    bestMatch: "ఉత్తమ సరిపోలిక",
    fitScore: "ఫిట్ స్కోర్",
    documents: "పత్రాలు",
    profileEyebrow: "గ్రామీణ వినియోగదారు ప్రొఫైల్",
    profileTitle: "కుటుంబ వివరాలు ఇవ్వండి",
    stateLabel: "రాష్ట్రం",
    occupationLabel: "ప్రధాన వృత్తి",
    incomeLabel: "వార్షిక కుటుంబ ఆదాయం",
    landLabel: "భూమి యాజమాన్యం",
    ageLabel: "వయస్సు గుంపు",
    categoryLabel: "సామాజిక వర్గం",
    needsLegend: "అవసరాలు మరియు పరిస్థితులు",
    needHousing: "ఇంటి సహాయం అవసరం",
    needHealth: "ఆరోగ్య బీమా అవసరం",
    needToilet: "మరుగుదొడ్డి / పారిశుధ్య సహాయం అవసరం",
    needEducation: "విద్యార్థి విద్యా సహాయం",
    needWomen: "మహిళా దరఖాస్తుదారు / మహిళా నేతృత్వ కుటుంబం",
    needLivelihood: "ఉపాధి లేదా వ్యాపార సహాయం కావాలి",
    recommendButton: "పథకాలు సూచించండి",
    recommendationEyebrow: "AI సూచన",
    topMatches: "ఉత్తమ ఫలితాలు",
    emptySummary: "ప్రొఫైల్ నింపి వ్యక్తిగత పథకాలు చూడటానికి బటన్ నొక్కండి.",
    libraryEyebrow: "పథకాల జాబితా",
    libraryTitle: "ఈ నమూనాలో ఉన్న పథకాలు",
    aboutEyebrow: "ఇది ఎలా పనిచేస్తుంది",
    aboutTitle: "సులభమైన సరిపోలిక, స్పష్టమైన వివరణ",
    aboutStep1Title: "1. ప్రొఫైల్ సేకరణ",
    aboutStep1Copy: "ఆదాయం, పని, భూమి, వయస్సు, కుటుంబ అవసరాలపై ప్రశ్నలు అడుగుతుంది.",
    aboutStep2Title: "2. పథకాలకు స్కోర్",
    aboutStep2Copy: "వినియోగదారు వివరాలను అర్హత సంకేతాలతో పోల్చుతుంది.",
    aboutStep3Title: "3. తదుపరి దశలు",
    aboutStep3Copy: "ప్రతి ఫలితం కారణం, పత్రాలు, దరఖాస్తు విధానం చూపిస్తుంది.",
    footerNote:
      "ఇది విద్యా నమూనా మాత్రమే. తుది అర్హత మరియు దరఖాస్తును అధికారిక పోర్టల్, గ్రామ పంచాయతీ లేదా CSC వద్ద నిర్ధారించండి.",
    openScheme: "అధికారిక పథకం తెరవండి",
    applicationProcess: "దరఖాస్తు ప్రక్రియ",
    documentsNeeded: "పత్రాలు",
    noMatch:
      "బలమైన సరిపోలిక లేదు. కుటుంబ ప్రధాన అవసరాన్ని ఎంచుకోండి లేదా గ్రామ పంచాయతీ / CSC వద్ద స్థానిక పథకాలు అడగండి.",
    bestSummary: "ప్రస్తుతం ఉత్తమ సరిపోలిక, స్కోర్",
    scoreExplanation: "ఉంది. స్కోర్ వృత్తి, ఆదాయం, భూమి, వయస్సు, వర్గం, అవసరాలపై ఆధారపడింది.",
  },
};

function t(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

function getProfile() {
  const selectedNeeds = [...document.querySelectorAll(".checkboxes input:checked")].map(
    (input) => input.value,
  );

  return {
    state: document.querySelector("#state").value,
    occupation: document.querySelector("#occupation").value,
    income: document.querySelector("#income").value,
    land: document.querySelector("#land").value,
    age: document.querySelector("#age").value,
    category: document.querySelector("#category").value,
    needs: selectedNeeds,
  };
}

function scoreScheme(scheme, profile) {
  const reasons = [];
  let score = 0;
  const rules = scheme.appliesTo;

  if (rules.occupations?.includes(profile.occupation)) {
    score += 22;
    reasons.push("Occupation matches this scheme.");
  }

  if (rules.income?.includes(profile.income)) {
    score += 20;
    reasons.push("Income group is likely eligible.");
  }

  if (rules.land?.includes(profile.land)) {
    score += 16;
    reasons.push("Land ownership condition fits.");
  }

  if (rules.age?.includes(profile.age)) {
    score += 14;
    reasons.push("Age group matches the scheme target.");
  } else if (!rules.age) {
    score += 6;
  }

  if (rules.category?.includes(profile.category)) {
    score += 14;
    reasons.push("Social category is included in the target group.");
  } else if (!rules.category) {
    score += 6;
  }

  const matchedNeeds = profile.needs.filter((need) => rules.needs?.includes(need));
  if (matchedNeeds.length > 0) {
    score += Math.min(24, matchedNeeds.length * 12);
    reasons.push(`Need matched: ${matchedNeeds.join(", ")}.`);
  }

  if (score >= 55 && reasons.length < 3) {
    reasons.push("Profile has enough eligibility signals for a strong recommendation.");
  }

  return {
    ...scheme,
    score: Math.min(score, 100),
    reasons,
  };
}

function recommendSchemes(profile) {
  return schemes
    .map((scheme) => scoreScheme(scheme, profile))
    .filter((scheme) => scheme.score >= 30)
    .sort((a, b) => b.score - a.score);
}

function renderSchemeCard(scheme, showScore = false) {
  const reasons = scheme.reasons?.length
    ? `<ul class="reason-list">${scheme.reasons.map((reason) => `<li>${reason}</li>`).join("")}</ul>`
    : "";
  const steps = scheme.steps?.length
    ? `
      <details class="process" ${showScore ? "open" : ""}>
        <summary>${t("applicationProcess")}</summary>
        <ol>${scheme.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
      </details>
    `
    : "";

  return `
    <article class="scheme-card">
      <div class="score-row">
        ${showScore ? `<span class="score">${scheme.score}% match</span>` : ""}
        <span class="tag">${scheme.type}</span>
      </div>
      <h3>${scheme.name}</h3>
      <p>${scheme.description}</p>
      <div class="scheme-meta">
        <span class="tag">${scheme.benefits}</span>
      </div>
      ${reasons}
      ${steps}
      <div class="card-actions">
        <a class="button secondary small" href="${scheme.officialUrl}" target="_blank" rel="noopener">
          ${t("openScheme")}
        </a>
      </div>
      <div class="documents"><strong>${t("documentsNeeded")}:</strong> ${scheme.documents.join(", ")}</div>
    </article>
  `;
}

function renderResults(matches) {
  if (matches.length === 0) {
    resultSummary.textContent = t("noMatch");
    results.innerHTML = "";
    return;
  }

  const top = matches[0];
  resultSummary.innerHTML = `
    <strong>${top.name}</strong> ${t("bestSummary")} ${top.score}% ${t("scoreExplanation")}
  `;
  results.innerHTML = matches.slice(0, 5).map((scheme) => renderSchemeCard(scheme, true)).join("");
}

function renderLibrary() {
  schemeLibrary.innerHTML = schemes.map((scheme) => renderSchemeCard(scheme)).join("");
}

function applyLanguage() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = t(key);
  });
  renderLibrary();
  results.innerHTML = "";
  resultSummary.textContent = t("emptySummary");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const profile = getProfile();
  const matches = recommendSchemes(profile);
  renderResults(matches);
});

languageSelect.addEventListener("change", (event) => {
  currentLanguage = event.target.value;
  applyLanguage();
});

applyLanguage();
