# AI-Powered Government Scheme Recommender for Rural Users

An intuitive, interactive, and village-friendly web application designed to help rural households find and apply for the right welfare schemes. By capturing a user's household profile (state, occupation, income, land ownership, age, category, and specific needs), the system matches them against eligibility rules and provides detailed next-step guidelines.

---

## 🌟 Key Features

- **Personalized Recommender Engine**: Fill out a simple, village-friendly profile form to calculate a matching "fit score" for various central and state government schemes.
- **Scheme Library**: Browse details of major welfare schemes, including benefits, documents required, and official portal links.
- **Multilingual Support**: Supports localization in **English**, **Hindi (हिन्दी)**, and **Telugu (తెలుగు)** for better rural accessibility.
- **Actionable Steps & Checklists**: Each recommendation features a step-by-step application walkthrough and a document preparation guide.
- **Modern Responsive Design**: Premium glassmorphic UI built with CSS grid and flexbox, fully accessible on mobile phones, tablets, and desktops.

---

## 📂 Project Structure

```text
├── index.html     # Webpage structure & user profile forms
├── styles.css     # Modern responsive layout, color palettes, & animations
└── script.js     # Matching algorithm, multi-language translation, & schemes database
```

---

## 🛠️ Supported Schemes (Prototype)

1. **PM-KISAN Samman Nidhi** (Income support for farmers)
2. **Pradhan Mantri Awas Yojana - Gramin (PMAY-G)** (Rural housing support)
3. **Ayushman Bharat PM-JAY** (Cashless health insurance)
4. **MGNREGA Job Card** (Guaranteed rural wage employment)
5. **Swachh Bharat Mission - Gramin** (Sanitation and toilet construction support)
6. **Deendayal Antyodaya Yojana - NRLM** (Self-help group and women livelihood support)
7. **Post-Matric Scholarship Support** (Financial aid for disadvantaged students)
8. **National Social Assistance Pension (NSAP)** (Social pensions for elderly and vulnerable citizens)

---


---

## 📝 Multi-language Interface Translation

The localization dictionaries are located inside `script.js` and map text keys dynamically. Currently supported languages:
- **English** (`en`)
- **Hindi** (`hi`)
- **Telugu** (`te`)

---

## 💡 Future Scope & Enhancements

- **Voice Assistance**: Integration of Voice-to-Text and TTS in local dialects to assist illiterate or semi-literate users.
- **Live Government API Integration**: Directly pulling scheme updates and application status tracking from official government data hubs.
- **SMS/WhatsApp Integration**: Allowing users to send their profile keywords via SMS or WhatsApp to receive recommendations.
- **CSC Agent Dashboard**: A specialized portal for Common Service Centre (CSC) agents to register and track applications on behalf of rural users.
