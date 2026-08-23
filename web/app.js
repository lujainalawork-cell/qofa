// QOFA WEBSITE â€” FRONTEND DEMO
// Main flow:
// Language â†’ Home â†’ Register â†’ Package â†’ Payment â†’ Launch â†’ Merchant Dashboard
// Dashboard â†’ Brand / Analytics / Nader / Support

const state = {
    language: "en",
    user: {},
    selectedPackage: null,
    business: {
        name: "Test Shop",
        type: "grocery",
        domain: "testshop.qofa.com"
    },
    tickets: [],
    chat: []
};


/* =========================
   LANGUAGE
========================= */

const translations = {
    en: {
        languageTitle: "Choose your language",
        languageText: "Select your preferred language to continue.",
        english: "English",
        french: "Français",
        arabic: "العربية",        home: "Home",
        how: "How it works",
        login: "Merchant Login",
        register: "Get Started",
        heroEyebrow: "BUSINESS INTELLIGENCE FOR SMALL BUSINESSES",
        heroTitle: "Your business.",
        heroTitle2: "Understood.",
        heroText: "Qofa gives small businesses the tools, dashboards and intelligent guidance they need to understand what is happening and decide what to do next.",
        learn: "How Qofa works",
        dashboard: "Explore Dashboard",
        what: "What is Qofa?",
        whatText: "Qofa is a business platform built for small merchants. It connects your business data, gives you detailed dashboards and lets Nader help you understand your business.",
        stepsTitle: "From your business to better decisions.",
        step1: "Create your account",
        step2: "Choose your plan",
        step3: "Connect your business",
        step4: "Understand your data",
        step5: "Take action",
        step1Text: "Tell Qofa who you are and what you do.",
        step2Text: "Choose the package that fits your business.",
        step3Text: "Connect your business data to Qofa.",
        step4Text: "Explore detailed business dashboards.",
        step5Text: "Use Nader and your data to make better decisions.",
        cta: "Give your business a clearer picture.",
        ctaButton: "Start with Qofa",
        registerTitle: "Create your Qofa account",
        registerText: "Tell us a little about yourself and your business.",
        firstName: "First name",
        lastName: "Last name",
        phone: "Phone number",
        email: "Email address",
        gender: "Gender",
        genderSelect: "Select gender",
        male: "Male",
        female: "Female",
        other: "Prefer not to say",
        accountType: "Account type",
        individual: "Individual",
        business: "Business",
        businessType: "Business type",
        businessName: "Business name",
        continue: "Continue",
        packagesTitle: "Choose your Qofa plan",
        packagesText: "Start with the tools your business needs.",
        choose: "Choose plan",
        paymentTitle: "Complete your payment",
        paymentText: "This is a prototype payment screen.",
        cardName: "Name on card",
        cardNumber: "Card number",
        expiry: "Expiry",
        cvv: "CVV",
        pay: "Pay and launch",
        launchTitle: "Your Qofa business is ready.",
        launchText: "Your business will live on its own Qofa-linked address.",
        launch: "Launch my business",
        dashboardTitle: "Business overview",
        analytics: "Analytics",
        brand: "My brand",
        nader: "Nader",
        support: "Support",
        traffic: "Traffic",
        revenue: "Revenue",
        orders: "Orders",
        conversion: "Conversion",
        askNader: "Ask Nader",
        supportTitle: "Contact Qofa support",
        supportText: "If Nader cannot answer your question, or you need help from our team, submit a ticket.",
        subject: "Subject",
        message: "Describe your issue",
        submitTicket: "Submit ticket",
        ticketSuccess: "Your ticket has been submitted.",
        ticketNumber: "Ticket number",
        back: "Back",
        websitePreview: "Consumer website preview",
        editBrand: "Edit brand",
        viewBrand: "View consumer page"
    },
    fr: {
        languageTitle: "Choisissez votre langue",
        languageText: "Sélectionnez votre langue préférée pour continuer.",
        english: "Anglais",
        french: "Français",
        arabic: "Arabe",
        home: "Accueil",
        how: "Comment ça marche",
        login: "Connexion",
        register: "Commencer",
        heroEyebrow: "INTELLIGENCE COMMERCIALE POUR PETITES ENTREPRISES",
        heroTitle: "Votre entreprise.",
        heroTitle2: "Compris.",
        heroText: "Qofa donne aux petites entreprises les outils, tableaux de bord et conseils intelligents nécessaires pour comprendre leur activité.",
        learn: "Comment fonctionne Qofa",
        dashboard: "Voir le tableau de bord",
        what: "Qu'est-ce que Qofa ?",
        whatText: "Qofa est une plateforme conçue pour les petits commerçants. Elle connecte vos données, fournit des tableaux de bord détaillés et Nader vous aide à comprendre votre activité.",
        stepsTitle: "De vos données à de meilleures décisions.",
        step1: "Créer votre compte",
        step2: "Choisir votre offre",
        step3: "Connecter votre entreprise",
        step4: "Comprendre vos données",
        step5: "Agir",
        step1Text: "Dites à Qofa qui vous êtes et ce que vous faites.",
        step2Text: "Choisissez l'offre qui correspond à votre entreprise.",
        step3Text: "Connectez les données de votre entreprise à Qofa.",
        step4Text: "Explorez les tableaux de bord détaillés de votre entreprise.",
        step5Text: "Utilisez Nader et vos données pour prendre de meilleures décisions.",
        cta: "Donnez une vision plus claire à votre entreprise.",
        ctaButton: "Commencer avec Qofa",
        registerTitle: "Créer votre compte Qofa",
        registerText: "Parlez-nous un peu de vous et de votre entreprise.",
        firstName: "Prénom",
        lastName: "Nom",
        phone: "Téléphone",
        email: "Adresse email",
        gender: "Genre",
        genderSelect: "Sélectionner",
        male: "Homme",
        female: "Femme",
        other: "Je préfère ne pas dire",
        accountType: "Type de compte",
        individual: "Individuel",
        business: "Entreprise",
        businessType: "Type d'entreprise",
        businessName: "Nom de l'entreprise",
        continue: "Continuer",
        packagesTitle: "Choisissez votre offre Qofa",
        packagesText: "Commencez avec les outils dont votre entreprise a besoin.",
        choose: "Choisir",
        paymentTitle: "Finalisez votre paiement",
        paymentText: "Ceci est un écran de paiement prototype.",
        cardName: "Nom sur la carte",
        cardNumber: "Numéro de carte",
        expiry: "Expiration",
        cvv: "CVV",
        pay: "Payer et lancer",
        launchTitle: "Votre entreprise Qofa est prête.",
        launchText: "Votre entreprise aura sa propre adresse liée à Qofa.",
        launch: "Lancer mon entreprise",
        dashboardTitle: "Vue d'ensemble",
        analytics: "Analyses",
        brand: "Ma marque",
        nader: "Nader",
        support: "Support",
        traffic: "Trafic",
        revenue: "Chiffre d'affaires",
        orders: "Commandes",
        conversion: "Conversion",
        askNader: "Demander à Nader",
        supportTitle: "Contacter le support Qofa",
        supportText: "Si Nader ne peut pas répondre à votre question, envoyez un ticket à notre équipe.",
        subject: "Sujet",
        message: "Décrivez votre problème",
        submitTicket: "Envoyer le ticket",
        ticketSuccess: "Votre ticket a été envoyé.",
        ticketNumber: "Numéro du ticket",
        back: "Retour",
        websitePreview: "Aperçu du site consommateur",
        editBrand: "Modifier la marque",
        viewBrand: "Voir la page consommateur"
    },    ar: {
        languageTitle: "اختر لغتك",
        languageText: "اختر لغتك المفضلة للمتابعة.",
        english: "الإنجليزية",
        french: "الفرنسية",
        arabic: "العربية",
        home: "الرئيسية",
        how: "كيف يعمل",
        login: "دخول التاجر",
        register: "ابدأ الآن",
        heroEyebrow: "ذكاء الأعمال للمشاريع الصغيرة",
        heroTitle: "مشروعك.",
        heroTitle2: "بكل وضوح.",
        heroText: "قوفا تمنح المشاريع الصغيرة الأدوات ولوحات المعلومات والإرشادات الذكية لفهم ما يحدث واتخاذ القرار التالي.",
        learn: "كيف تعمل قوفا",
        dashboard: "استكشف لوحة المعلومات",
        what: "ما هي قوفا؟",
        whatText: "قوفا منصة مصممة لأصحاب المشاريع الصغيرة. تربط بيانات مشروعك وتوفر لوحات معلومات مفصلة، بينما يساعدك نادر على فهم نشاطك التجاري.",
        stepsTitle: "من بيانات مشروعك إلى قرارات أفضل.",
        step1: "أنشئ حسابك",
        step2: "اختر باقتك",
        step3: "اربط مشروعك",
        step4: "افهم بياناتك",
        step5: "اتخذ القرار",
        step1Text: "أخبر قُفَّة من أنت وماذا تفعل.",
        step2Text: "اختر الباقة التي تناسب مشروعك.",
        step3Text: "اربط بيانات مشروعك بمنصة قُفَّة.",
        step4Text: "استكشف لوحات المعلومات التفصيلية لمشروعك.",
        step5Text: "استخدم نادر وبياناتك لاتخاذ قرارات أفضل.",
        cta: "امنح مشروعك رؤية أوضح.",
        ctaButton: "ابدأ مع قوفا",
        registerTitle: "أنشئ حساب قوفا الخاص بك",
        registerText: "أخبرنا قليلاً عنك وعن مشروعك.",
        firstName: "الاسم الأول",
        lastName: "اسم العائلة",
        phone: "رقم الهاتف",
        email: "البريد الإلكتروني",
        gender: "الجنس",
        genderSelect: "اختر",
        male: "ذكر",
        female: "أنثى",
        other: "أفضل عدم الإجابة",
        accountType: "نوع الحساب",
        individual: "فرد",
        business: "شركة",
        businessType: "نوع النشاط",
        businessName: "اسم المشروع",
        continue: "متابعة",
        packagesTitle: "اختر باقة قوفا",
        packagesText: "ابدأ بالأدوات التي يحتاجها مشروعك.",
        choose: "اختر الباقة",
        paymentTitle: "أكمل عملية الدفع",
        paymentText: "هذه شاشة دفع تجريبية.",
        cardName: "الاسم على البطاقة",
        cardNumber: "رقم البطاقة",
        expiry: "تاريخ الانتهاء",
        cvv: "CVV",
        pay: "ادفع وابدأ",
        launchTitle: "مشروعك على قوفا جاهز.",
        launchText: "سيكون لمشروعك عنوان خاص مرتبط بقوفا.",
        launch: "أطلق مشروعي",
        dashboardTitle: "نظرة عامة على المشروع",
        analytics: "التحليلات",
        brand: "علامتي التجارية",
        nader: "نادر",
        support: "الدعم",
        traffic: "الزيارات",
        revenue: "الإيرادات",
        orders: "الطلبات",
        conversion: "معدل التحويل",
        askNader: "اسأل نادر",
        supportTitle: "تواصل مع دعم قوفا",
        supportText: "إذا لم يتمكن نادر من الإجابة عن سؤالك، أو كنت بحاجة إلى مساعدة من فريقنا، أرسل تذكرة.",
        subject: "الموضوع",
        message: "صف مشكلتك",
        submitTicket: "إرسال التذكرة",
        ticketSuccess: "تم إرسال تذكرتك.",
        ticketNumber: "رقم التذكرة",
        back: "رجوع",
        websitePreview: "معاينة موقع المستهلك",
        editBrand: "تعديل العلامة التجارية",
        viewBrand: "عرض صفحة المستهلك"
    },
};


/* =========================
   HELPERS
========================= */

function t(key) {
    return translations[state.language][key] || translations.en[key] || key;
}

function showScreen(id) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const screen = document.getElementById(id);

    if (screen) {
        screen.classList.add("active");
        window.scrollTo(0, 0);
    }
}

function slugify(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "")
        .slice(0, 30) || "business";
}

function applyLanguage() {
    document.documentElement.lang = state.language;
    document.documentElement.dir = state.language === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");

        if (translations[state.language][key]) {
            element.textContent = translations[state.language][key];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.getAttribute("data-i18n-placeholder");

        if (translations[state.language][key]) {
            element.placeholder = translations[state.language][key];
        }
    });
}


/* =========================
   LANGUAGE SCREEN
========================= */

function selectLanguage(language) {
    state.language = language;

    applyLanguage();

    showScreen("home-screen");
}


/* =========================
   REGISTRATION
========================= */

function openRegistration() {
    showScreen("register-screen");
}

function handleRegistration(event) {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    state.user = {
        firstName: data.get("firstName") || "",
        lastName: data.get("lastName") || "",
        phone: data.get("phone") || "",
        email: data.get("email") || "",
        gender: data.get("gender") || "",
        accountType: data.get("accountType") || "business",
        businessType: data.get("businessType") || "other",
        businessName: data.get("businessName") || "My Business"
    };

    state.business.name = state.user.businessName;
    state.business.type = state.user.businessType;
    state.business.domain = `${slugify(state.user.businessName)}.qofa.com`;

    showScreen("packages-screen");
}


/* =========================
   PACKAGES
========================= */

const packages = {
    starter: {
        name: "Starter",
        price: 19
    },
    growth: {
        name: "Growth",
        price: 49
    },
    pro: {
        name: "Pro",
        price: 99
    }
};

function selectPackage(packageId) {
    if (!packages[packageId]) {
        return;
    }

    state.selectedPackage = packageId;

    const packageName = document.getElementById("payment-package-name");
    const packagePrice = document.getElementById("payment-package-price");

    if (packageName) {
        packageName.textContent = packages[packageId].name;
    }

    if (packagePrice) {
        packagePrice.textContent = `$${packages[packageId].price}/month`;
    }

    showScreen("payment-screen");
}


/* =========================
   PAYMENT
========================= */

function handlePayment(event) {
    event.preventDefault();

    showScreen("launch-screen");
}


/* =========================
   LAUNCH
========================= */

function launchBusiness() {
    updateBusinessUI();
    showScreen("merchant-screen");
    openMerchantView("dashboard-view");
}

function updateBusinessUI() {
    const nameElements = document.querySelectorAll("[data-business-name]");

    nameElements.forEach(element => {
        element.textContent = state.business.name;
    });

    const domainElements = document.querySelectorAll("[data-business-domain]");

    domainElements.forEach(element => {
        element.textContent = state.business.domain;
    });

    const avatarElements = document.querySelectorAll("[data-business-avatar]");

    avatarElements.forEach(element => {
        element.textContent = state.business.name.charAt(0).toUpperCase();
    });

    const consumerName = document.getElementById("consumer-business-name");

    if (consumerName) {
        consumerName.textContent = state.business.name;
    }
}


/* =========================
   MERCHANT NAVIGATION
========================= */

function openMerchantView(viewId) {
    document.querySelectorAll(".merchant-view").forEach(view => {
        view.classList.remove("active-view");
    });

    const target = document.getElementById(viewId);

    if (target) {
        target.classList.add("active-view");
    }

    document.querySelectorAll(".merchant-nav button").forEach(button => {
        button.classList.remove("active");
    });

    const matchingButton = document.querySelector(
        `.merchant-nav button[data-view="${viewId}"]`
    );

    if (matchingButton) {
        matchingButton.classList.add("active");
    }

    window.scrollTo(0, 0);
}


/* =========================
   NADER
========================= */

function initializeNader() {
    const messages = document.getElementById("nader-messages");

    if (!messages || state.chat.length > 0) {
        return;
    }

    addNaderMessage(
        `Hi ${state.user.firstName || "there"}. I'm Nader, your Qofa business agent.\n\nI can help you understand your sales, traffic, orders, conversion and inventory. If I don't have enough information, I'll ask you for it. If the information isn't available, reply with NA and I'll continue with what we know.`
    );
}

function addNaderMessage(text) {
    state.chat.push({
        sender: "nader",
        text
    });

    renderChat();
}

function addUserMessage(text) {
    state.chat.push({
        sender: "user",
        text
    });

    renderChat();
}

function renderChat() {
    const container = document.getElementById("nader-messages");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    state.chat.forEach(message => {
        const div = document.createElement("div");

        div.className =
            message.sender === "user"
                ? "chat-message user-message"
                : "chat-message nader-message";

        div.innerHTML = `
            <strong>${message.sender === "user" ? "You" : "Nader"}</strong>
            <p>${escapeHtml(message.text)}</p>
        `;

        container.appendChild(div);
    });

    container.scrollTop = container.scrollHeight;
}

function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

function sendNaderMessage(event) {
    event.preventDefault();

    const input = document.getElementById("nader-input");

    if (!input) {
        return;
    }

    const text = input.value.trim();

    if (!text) {
        return;
    }

    addUserMessage(text);

    input.value = "";

    setTimeout(() => {
        generateNaderResponse(text);
    }, 400);
}

function askNader(question) {
    const input = document.getElementById("nader-input");

    if (!input) {
        return;
    }

    input.value = question;
    input.focus();
}

function generateNaderResponse(question) {
    const q = question.toLowerCase();

    if (
        q.includes("sales") ||
        q.includes("revenue") ||
        q.includes("sales drop") ||
        q.includes("sales decline")
    ) {
        addNaderMessage(
            `Based on the dashboard data currently available:\n\nRevenue is currently $12,000 compared with $15,000 in the previous period, a decrease of 20%.\n\nOrders are 100 compared with 125 previously, also a 20% decrease.\n\nTraffic is currently 2,000 compared with 2,200 previously, a decrease of 9.09%.\n\nBecause orders declined more than traffic, the data suggests that the sales decline may involve both lower traffic and weaker conversion.\n\nI would next investigate product availability, pricing, promotions and checkout behavior.`
        );

        return;
    }

    if (
        q.includes("traffic") ||
        q.includes("visitors") ||
        q.includes("customers")
    ) {
        addNaderMessage(
            `Your current traffic is 2,000 visitors compared with 2,200 in the previous period.\n\nThat means traffic decreased by approximately 9.09%.\n\nThis suggests fewer people are reaching the business, so I would review your marketing channels, customer acquisition and changes in demand.`
        );

        return;
    }

    if (
        q.includes("conversion") ||
        q.includes("visit but") ||
        q.includes("buy")
    ) {
        addNaderMessage(
            `Your current conversion rate is 5% based on 100 orders from 2,000 visitors.\n\nTo understand why visitors are not buying, I would need more information such as product availability, pricing, customer behavior or checkout data.\n\nIf you have that information, give it to me. If you don't have it, reply with NA and I'll continue using the available data.`
        );

        return;
    }

    if (
        q === "na" ||
        q.includes("not available") ||
        q.includes("don't have")
    ) {
        addNaderMessage(
            `Understood. I'll treat that information as unavailable.\n\nI'll continue using the business information currently available and clearly separate what we know from what we cannot determine.`
        );

        return;
    }

    if (
        q.includes("stock") ||
        q.includes("inventory")
    ) {
        addNaderMessage(
            `I can help you investigate excess inventory, but I need the product information first.\n\nWhat product has too much stock, how many units do you currently have, and how many units have sold recently?\n\nIf you don't have those numbers, reply with NA.`
        );

        return;
    }

    addNaderMessage(
        `I want to give you an answer based on your actual business data rather than guessing.\n\nI don't currently have enough information to answer that confidently.\n\nPlease provide any relevant business information you have. If the information is not available, reply with NA and I'll continue with the data available to me.\n\nIf you still don't find the answer useful, you can submit a support ticket and our Qofa team can help.`
    );
}


/* =========================
   SUPPORT TICKETS
========================= */

function submitSupportTicket(event) {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    const ticket = {
        id: `QF-${Date.now().toString().slice(-6)}`,
        subject: data.get("subject") || "General support",
        message: data.get("message") || "",
        status: "Open"
    };

    state.tickets.push(ticket);

    const number = document.getElementById("ticket-number");

    if (number) {
        number.textContent = ticket.id;
    }

    form.reset();

    document.getElementById("support-form-container").classList.add("hidden");
    document.getElementById("ticket-success").classList.remove("hidden");
}

function createAnotherTicket() {
    document.getElementById("support-form-container").classList.remove("hidden");
    document.getElementById("ticket-success").classList.add("hidden");
}


/* =========================
   BRAND EDITOR
========================= */

function editBrand() {
    const newName = prompt(
        "What should your consumer-facing business name be?",
        state.business.name
    );

    if (!newName || !newName.trim()) {
        return;
    }

    state.business.name = newName.trim();
    state.business.domain = `${slugify(state.business.name)}.qofa.com`;

    updateBusinessUI();
}


/* =========================
   CONSUMER WEBSITE
========================= */

function openConsumerWebsite() {
    updateBusinessUI();
    showScreen("consumer-screen");
}


/* =========================
   LOGIN / DEMO
========================= */

function merchantLogin() {
    state.user = {
        firstName: "Demo",
        lastName: "Merchant",
        businessName: "Test Shop"
    };

    state.business = {
        name: "Test Shop",
        type: "grocery",
        domain: "testshop.qofa.com"
    };

    updateBusinessUI();
    showScreen("merchant-screen");
    openMerchantView("dashboard-view");
}


/* =========================
   STARTUP
========================= */

document.addEventListener("DOMContentLoaded", () => {
    applyLanguage();

    const registrationForm = document.getElementById("registration-form");

    if (registrationForm) {
        registrationForm.addEventListener(
            "submit",
            handleRegistration
        );
    }

    const paymentForm = document.getElementById("payment-form");

    if (paymentForm) {
        paymentForm.addEventListener(
            "submit",
            handlePayment
        );
    }

    const naderForm = document.getElementById("nader-form");

    if (naderForm) {
        naderForm.addEventListener(
            "submit",
            sendNaderMessage
        );
    }

    const supportForm = document.getElementById("support-form");

    if (supportForm) {
        supportForm.addEventListener(
            "submit",
            submitSupportTicket
        );
    }

    const accountType = document.getElementById("account-type");

    if (accountType) {
        accountType.addEventListener("change", () => {
            const businessFields =
                document.getElementById("business-fields");

            if (!businessFields) {
                return;
            }

            if (accountType.value === "business") {
                businessFields.classList.remove("hidden");
            } else {
                businessFields.classList.add("hidden");
            }
        });
    }

    initializeNader();
});



