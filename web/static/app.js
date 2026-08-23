// QOFA WEBSITE – FRONTEND DEMO
// Main flow:
// Language → Home → Register → Package → Payment → Launch → Merchant Dashboard
// Dashboard → Brand / Analytics / Nader / Support

const state = {
    language: "en",
    user: {},
    selectedPackage: null,
    business: {
        name: "Test Shop",
        type: "grocery",
        domain: "testshop.qofa.com",
        storefrontTheme: "ocean",
        storefrontCustomized: false,
        storefront: null
    },
    tickets: [],
    chat: [],
    cart: [],
    checkout: {
        buyer: null,
        verificationCode: null,
        verified: false
    }
};


/* =========================
   LANGUAGE
========================= */

const countryCodes = [
    { name: "Morocco", code: "+212" },
    { name: "Saudi Arabia", code: "+966" },
    { name: "United Arab Emirates", code: "+971" },
    { name: "United States", code: "+1" },
    { name: "Canada", code: "+1" },
    { name: "United Kingdom", code: "+44" },
    { name: "France", code: "+33" },
    { name: "Germany", code: "+49" },
    { name: "Spain", code: "+34" },
    { name: "Italy", code: "+39" },
    { name: "Turkey", code: "+90" },
    { name: "Egypt", code: "+20" },
    { name: "Qatar", code: "+974" },
    { name: "Kuwait", code: "+965" },
    { name: "Bahrain", code: "+973" },
    { name: "Oman", code: "+968" },
    { name: "Jordan", code: "+962" },
    { name: "Lebanon", code: "+961" },
    { name: "Algeria", code: "+213" },
    { name: "Tunisia", code: "+216" }
];

const translations = {
    en: {
        languageTitle: "Choose your language",
        languageText: "Choose how you want to experience Qofa.",
        english: "English",
        french: "Français",
        arabic: "العربية",
        home: "Home",
        platformNav: "Platform",
        how: "How it works",
        login: "Merchant Login",
        register: "Get Started",
        heroEyebrow: "BUSINESS INTELLIGENCE FOR SMALL BUSINESSES",
        heroTitle: "Your business.",
        heroTitle2: "Understood.",
        heroText: "Qofa gives small businesses the tools, dashboards and intelligent guidance they need to understand what is happening and decide what to do next.",
        learn: "How Qofa works",
        dashboard: "Explore Dashboard",
        demoEyebrow: "LIVE QOFA DASHBOARD",
        demoTitle: "A clearer view of your next move.",
        demoRevenue: "Revenue",
        demoOrders: "Orders",
        demoCustomers: "New customers",
        demoInsight: "Sales are trending up this week.",
        demoLive: "Live",
        proofText: "See the signals that move your business forward.",
        proofRevenue: "Revenue in one view",
        proofDecisions: "Faster decisions",
        proofSupport: "Guidance when it matters",
        platformEyebrow: "ONE PLATFORM, CLEARER ACTION",
        platformTitle: "Everything you need to understand, improve, and grow.",
        platformText: "Qofa brings your essential business signals together, then turns them into the next best action.",
        featureAnalyticsTitle: "Business analytics",
        featureAnalyticsText: "See revenue, orders, traffic, and conversion in one focused view.",
        featureOperationsTitle: "Daily operations",
        featureOperationsText: "Keep an eye on the activity that needs your attention today.",
        featureGuidanceTitle: "Guidance from Nader",
        featureGuidanceText: "Ask a question in plain language and get practical next steps.",
        insightEyebrow: "MEET NADER",
        insightTitle: "Turn business signals into confident decisions.",
        insightText: "Nader reads the context behind your numbers and helps you decide what to do next.",
        insightPoint1: "Spot changes before they become problems",
        insightPoint2: "Ask about your business in everyday language",
        insightPoint3: "Get suggestions you can act on today",
        insightQuestion: "Why did orders rise this week?",
        insightAnswer: "Your returning customers increased by 18%. Consider a loyalty offer to keep the momentum.",
        processEyebrow: "THE PROCESS",
        footerText: "Business intelligence that helps small businesses move with confidence.",
        what: "What is Qofa?",
        whatText: "Qofa is a business platform built for small merchants. It connects your business data, gives you detailed dashboards and lets Nader help you understand your business.",
        stepsTitle: "From your business to better decisions.",
        step1: "Create your account",
        step1Text: "Tell Qofa who you are and what you do.",
        step2: "Choose your plan",
        step2Text: "Choose the package that fits your business.",
        step3: "Connect your business",
        step3Text: "Connect your business data to Qofa.",
        step4: "Understand your data",
        step4Text: "Explore detailed business dashboards.",
        step5: "Take action",
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
        preferNotToSay: "Prefer not to say",
        accountType: "Account type",
        individual: "Personal business",
        business: "Company",
        businessType: "Business type",
        businessName: "Business name",
        businessNamePlaceholder: "Your business",
        continue: "Continue",
        countryCode: "Country code",
        packagesTitle: "Choose your Qofa plan",
        packagesText: "Start with the tools your business needs.",
        packagesEyebrow: "QOFA PLANS",
        packageStarter: "Starter",
        packageGrowth: "Growth",
        packagePro: "Pro",
        priceMonth: "/ month",
        choose: "Choose plan",
        starterDashboard: "Business dashboard",
        starterAnalytics: "Basic analytics",
        starterNader: "Nader AI assistant",
        starterProfile: "Business profile",
        growthEverything: "Everything in Starter",
        growthDashboards: "Advanced dashboards",
        growthTraffic: "Traffic analysis",
        growthConversion: "Conversion analysis",
        growthSupport: "Support tickets",
        proEverything: "Everything in Growth",
        proIntelligence: "Advanced business intelligence",
        proDashboards: "Custom dashboards",
        proSupport: "Priority support",
        proNader: "Advanced Nader capabilities",
        paymentTitle: "Complete your payment",
        paymentText: "This is a prototype payment screen.",
        cardName: "Name on card",
        cardNumber: "Card number",
        expiry: "Expiry",
        cvv: "CVV",
        pay: "Pay and launch",
        chooseAddress: "Choose your Qofa address",
        launchTitle: "Your Qofa business is ready.",
        launchText: "Your business will live on its own Qofa-linked address.",
        launch: "Launch my business",
        dashboardTitle: "Business overview",
        businessOverview: "BUSINESS OVERVIEW",
        businessOverviewShort: "Overview",
        analytics: "Analytics",
        brand: "My brand",
        nader: "Nader",
        support: "Support",
        traffic: "Traffic",
        revenue: "Revenue",
        orders: "Orders",
        conversion: "Conversion",
        askNader: "Ask Nader",
        revenuePerformance: "Revenue performance",
        revenueChart: "Revenue chart",
        naderInsight: "Nader's insight",
        dashboardInsight: "Revenue and orders decreased by 20%. Traffic decreased by 9.09%. This suggests the business may have both a traffic problem and a conversion problem.",
        askNaderAbout: "Ask Nader about this",
        analyticsEyebrow: "DATA",
        trafficPerformance: "Traffic performance",
        conversionPerformance: "Conversion performance",
        businessInterpretation: "Business interpretation",
        businessInterpretationText: "Your dashboards are designed to show the numbers first and then give Nader the context needed to interpret them.",
        intelligenceEyebrow: "QOFA INTELLIGENCE",
        naderPlaceholder: "Ask Nader about your business...",
        send: "Send",
        you: "You",
        naderDescription: "Your business agent. Nader works with your business information rather than giving generic advice.",
        naderGreeting: "Hi {name}. I'm Nader, your Qofa business agent. I can help you understand sales, traffic, orders, conversion, and inventory.",
        naderResponseSales: "Based on the dashboard data, revenue is $12,000 compared with $15,000 previously, a decrease of 20%. Orders also decreased by 20%, while traffic decreased by 9.09%. This points to both a traffic and conversion opportunity. I would next review product availability, pricing, promotions, and checkout behavior.",
        naderResponseTraffic: "Your traffic is 2,000 visitors compared with 2,200 in the previous period, a decrease of 9.09%. Review your marketing channels, customer acquisition, and any changes in demand.",
        naderResponseConversion: "Your conversion rate is 5%, based on 100 orders from 2,000 visitors. To explain why visitors are not buying, review product availability, pricing, customer behavior, and checkout data.",
        naderResponseUnavailable: "Understood. I'll treat that information as unavailable and continue using the data we do have.",
        naderResponseStock: "I can help investigate excess inventory. Tell me the product, current stock, and recent sales volume. If the information is unavailable, reply with NA.",
        naderResponseGeneric: "I want to give you an answer based on your business data rather than guessing. Please share the relevant information, or reply with NA if it is unavailable.",
        suggestionSalesDrop: "Why did my sales drop?",
        suggestionTraffic: "How is my traffic performing?",
        suggestionConversion: "Why do people visit but not buy?",
        suggestionStock: "I have too much stock",
        contactSupport: "Contact support",
        supportTitle: "Contact Qofa support",
        supportText: "If Nader cannot answer your question, or you need help from our team, submit a ticket.",
        subject: "Subject",
        message: "Describe your issue",
        submitTicket: "Submit ticket",
        ticketSuccess: "Your ticket has been submitted.",
        ticketNumber: "Ticket number",
        anotherTicket: "Create another ticket",
        yourTickets: "Your tickets",
        noTickets: "No tickets yet.",
        back: "Back",
        websitePreview: "Consumer website preview",
        editBrand: "Edit brand",
        viewBrand: "View consumer page",
        consumerPage: "Consumer page",
        storeEditorEyebrow: "STOREFRONT EDITOR",
        storeEditorTitle: "Make your shop yours.",
        storeEditorText: "Update your shop identity, colors, story, and featured products. Your storefront preview updates as you save.",
        storeName: "Shop name",
        storeTagline: "Hero headline",
        storeDescription: "Shop story",
        storeTheme: "Visual theme",
        themeOcean: "Ocean blue",
        themeSunset: "Sunset coral",
        themeForest: "Forest green",
        themeViolet: "Amethyst violet",
        themeBerry: "Berry pink",
        themeGold: "Desert gold",
        themeMidnight: "Midnight black",
        products: "Products",
        productName: "Product name",
        productOne: "Featured product 1",
        productTwo: "Featured product 2",
        productThree: "Featured product 3",
        productPrice: "Price (MAD)",
        productImage: "Product image",
        addProduct: "Add product",
        removeProduct: "Remove",
        imageTooLarge: "Choose an image smaller than 1.5 MB.",
        saveStore: "Save storefront",
        storeSaved: "Your storefront has been updated.",
        shopCollection: "Featured collection",
        addToCart: "Add to cart",
        cart: "Cart",
        cartEmpty: "Your cart is empty.",
        cartTotal: "Total",
        checkout: "Checkout",
        checkoutTitle: "Secure checkout",
        checkoutText: "Confirm your details to receive an SMS verification code before placing your order.",
        nationalId: "National ID",
        sendVerification: "Send verification code",
        verifyTitle: "Verify your number",
        verifyText: "Enter the code sent to your phone.",
        verificationCode: "Verification code",
        verifyAndContinue: "Verify and continue",
        demoSms: "Demo SMS: use code 123456 to confirm your registration.",
        verificationError: "That code is not correct. Please try again.",
        checkoutReady: "Your registration is confirmed. You can now place your order.",
        placeOrder: "Place order",
        close: "Close",
        shopAbout: "About us",
        shopStory: "Built with care for our customers.",
        poweredBy: "Powered by Qofa",
        backToDashboard: "Merchant dashboard",
        defaultStoreTagline: "Everyday essentials, made simple.",
        defaultStoreDescription: "Thoughtfully selected products for your everyday moments.",
        defaultProductOne: "Daily selection",
        defaultProductTwo: "Customer favorite",
        defaultProductThree: "Limited discovery",
        orderSuccess: "Your order request has been received.",
        merchant: "Merchant",
        grocery: "Grocery",
        fashion: "Fashion",
        restaurant: "Restaurant",
        beauty: "Beauty",
        services: "Services",
        other: "Other",
        otherBusiness: "Other"
    },
    fr: {
        languageTitle: "Choisissez votre langue",
        languageText: "Choisissez comment vous souhaitez utiliser Qofa.",
        english: "Anglais",
        french: "Français",
        arabic: "Arabe",
        home: "Accueil",
        platformNav: "Plateforme",
        how: "Comment ça marche",
        login: "Connexion marchand",
        register: "Commencer",
        heroEyebrow: "INTELLIGENCE COMMERCIALE POUR PETITES ENTREPRISES",
        heroTitle: "Votre entreprise.",
        heroTitle2: "Comprise.",
        heroText: "Qofa donne aux petites entreprises les outils, tableaux de bord et conseils intelligents nécessaires pour comprendre leur activité et décider de la suite.",
        learn: "Comment fonctionne Qofa",
        dashboard: "Voir le tableau de bord",
        demoEyebrow: "TABLEAU DE BORD QOFA EN DIRECT",
        demoTitle: "Une vue plus claire de votre prochaine décision.",
        demoRevenue: "Chiffre d'affaires",
        demoOrders: "Commandes",
        demoCustomers: "Nouveaux clients",
        demoInsight: "Les ventes progressent cette semaine.",
        demoLive: "En direct",
        proofText: "Repérez les signaux qui font avancer votre entreprise.",
        proofRevenue: "Chiffre d'affaires en un coup d'œil",
        proofDecisions: "Décisions plus rapides",
        proofSupport: "Conseils au bon moment",
        platformEyebrow: "UNE PLATEFORME, DES ACTIONS PLUS CLAIRES",
        platformTitle: "Tout ce qu'il vous faut pour comprendre, améliorer et développer votre activité.",
        platformText: "Qofa rassemble vos signaux essentiels et les transforme en prochaines actions utiles.",
        featureAnalyticsTitle: "Analyses commerciales",
        featureAnalyticsText: "Suivez chiffre d'affaires, commandes, trafic et conversion dans une vue claire.",
        featureOperationsTitle: "Activité quotidienne",
        featureOperationsText: "Gardez un œil sur ce qui demande votre attention aujourd'hui.",
        featureGuidanceTitle: "Conseils de Nader",
        featureGuidanceText: "Posez votre question simplement et obtenez des prochaines étapes pratiques.",
        insightEyebrow: "DÉCOUVREZ NADER",
        insightTitle: "Transformez vos signaux commerciaux en décisions sûres.",
        insightText: "Nader lit le contexte derrière vos chiffres et vous aide à décider de la suite.",
        insightPoint1: "Repérez les changements avant qu'ils ne deviennent des problèmes",
        insightPoint2: "Parlez de votre activité avec des mots simples",
        insightPoint3: "Obtenez des suggestions applicables dès aujourd'hui",
        insightQuestion: "Pourquoi les commandes ont-elles augmenté cette semaine ?",
        insightAnswer: "Vos clients fidèles ont augmenté de 18 %. Pensez à une offre de fidélité pour maintenir cette dynamique.",
        processEyebrow: "LE PROCESSUS",
        footerText: "L'intelligence commerciale qui aide les petites entreprises à avancer avec confiance.",
        what: "Qu'est-ce que Qofa ?",
        whatText: "Qofa est une plateforme conçue pour les petits commerçants. Elle connecte vos données, fournit des tableaux de bord détaillés et Nader vous aide à comprendre votre activité.",
        stepsTitle: "De vos données à de meilleures décisions.",
        step1: "Créer votre compte",
        step1Text: "Dites à Qofa qui vous êtes et ce que vous faites.",
        step2: "Choisir votre offre",
        step2Text: "Choisissez l'offre qui correspond à votre entreprise.",
        step3: "Connecter votre entreprise",
        step3Text: "Connectez les données de votre entreprise à Qofa.",
        step4: "Comprendre vos données",
        step4Text: "Explorez les tableaux de bord détaillés de votre entreprise.",
        step5: "Agir",
        step5Text: "Utilisez Nader et vos données pour prendre de meilleures décisions.",
        cta: "Donnez une vision plus claire à votre entreprise.",
        ctaButton: "Commencer avec Qofa",
        registerTitle: "Créer votre compte Qofa",
        registerText: "Parlez-nous un peu de vous et de votre entreprise.",
        firstName: "Prénom",
        lastName: "Nom",
        phone: "Téléphone",
        email: "Adresse e-mail",
        gender: "Genre",
        genderSelect: "Sélectionner",
        male: "Homme",
        female: "Femme",
        preferNotToSay: "Je préfère ne pas dire",
        accountType: "Type de compte",
        individual: "Entreprise personnelle",
        business: "Entreprise",
        businessType: "Type d'entreprise",
        businessName: "Nom de l'entreprise",
        businessNamePlaceholder: "Votre entreprise",
        continue: "Continuer",
        countryCode: "Indicatif pays",
        packagesTitle: "Choisissez votre offre Qofa",
        packagesText: "Commencez avec les outils dont votre entreprise a besoin.",
        packagesEyebrow: "OFFRES QOFA",
        packageStarter: "Démarrage",
        packageGrowth: "Croissance",
        packagePro: "Pro",
        priceMonth: "/ mois",
        choose: "Choisir",
        starterDashboard: "Tableau de bord commercial",
        starterAnalytics: "Analyses essentielles",
        starterNader: "Assistant IA Nader",
        starterProfile: "Profil d'entreprise",
        growthEverything: "Tout ce qui est inclus dans Démarrage",
        growthDashboards: "Tableaux de bord avancés",
        growthTraffic: "Analyse du trafic",
        growthConversion: "Analyse de la conversion",
        growthSupport: "Tickets de support",
        proEverything: "Tout ce qui est inclus dans Croissance",
        proIntelligence: "Intelligence commerciale avancée",
        proDashboards: "Tableaux de bord personnalisés",
        proSupport: "Support prioritaire",
        proNader: "Fonctionnalités Nader avancées",
        paymentTitle: "Finalisez votre paiement",
        paymentText: "Ceci est un écran de paiement prototype.",
        cardName: "Nom sur la carte",
        cardNumber: "Numéro de carte",
        expiry: "Expiration",
        cvv: "CVV",
        pay: "Payer et lancer",
        chooseAddress: "Choisissez votre adresse Qofa",
        launchTitle: "Votre entreprise Qofa est prête.",
        launchText: "Votre entreprise aura sa propre adresse liée à Qofa.",
        launch: "Lancer mon entreprise",
        dashboardTitle: "Vue d'ensemble",
        businessOverview: "APERÇU COMMERCIAL",
        businessOverviewShort: "Aperçu",
        analytics: "Analyses",
        brand: "Ma marque",
        nader: "Nader",
        support: "Support",
        traffic: "Trafic",
        revenue: "Chiffre d'affaires",
        orders: "Commandes",
        conversion: "Conversion",
        askNader: "Demander à Nader",
        revenuePerformance: "Performance du chiffre d'affaires",
        revenueChart: "Graphique du chiffre d'affaires",
        naderInsight: "L'analyse de Nader",
        dashboardInsight: "Le chiffre d'affaires et les commandes ont diminué de 20 %. Le trafic a diminué de 9,09 %. Cela suggère un problème de trafic et de conversion.",
        askNaderAbout: "Demander à Nader",
        analyticsEyebrow: "DONNÉES",
        trafficPerformance: "Performance du trafic",
        conversionPerformance: "Performance de la conversion",
        businessInterpretation: "Interprétation commerciale",
        businessInterpretationText: "Vos tableaux de bord montrent d'abord les chiffres, puis donnent à Nader le contexte nécessaire pour les interpréter.",
        intelligenceEyebrow: "INTELLIGENCE QOFA",
        naderPlaceholder: "Demandez à Nader au sujet de votre activité...",
        send: "Envoyer",
        you: "Vous",
        naderDescription: "Votre agent commercial. Nader travaille avec les informations de votre activité au lieu de donner des conseils génériques.",
        naderGreeting: "Bonjour {name}. Je suis Nader, votre agent commercial Qofa. Je peux vous aider à comprendre vos ventes, votre trafic, vos commandes, votre conversion et votre stock.",
        naderResponseSales: "D'après les données du tableau de bord, le chiffre d'affaires est de 12 000 $ contre 15 000 $ auparavant, soit une baisse de 20 %. Les commandes ont également diminué de 20 %, alors que le trafic a baissé de 9,09 %. Cela indique une opportunité à la fois sur le trafic et la conversion. Je vous conseille ensuite d'examiner la disponibilité des produits, les prix, les promotions et le parcours de paiement.",
        naderResponseTraffic: "Votre trafic est de 2 000 visiteurs contre 2 200 sur la période précédente, soit une baisse de 9,09 %. Examinez vos canaux marketing, l'acquisition de clients et les évolutions de la demande.",
        naderResponseConversion: "Votre taux de conversion est de 5 %, sur la base de 100 commandes pour 2 000 visiteurs. Pour comprendre pourquoi les visiteurs n'achètent pas, examinez la disponibilité, les prix, le comportement des clients et les données de paiement.",
        naderResponseUnavailable: "Compris. Je considérerai cette information comme indisponible et continuerai avec les données dont nous disposons.",
        naderResponseStock: "Je peux vous aider à analyser un stock excessif. Indiquez-moi le produit, le stock actuel et le volume de ventes récent. Si l'information n'est pas disponible, répondez NA.",
        naderResponseGeneric: "Je veux vous donner une réponse basée sur les données de votre activité plutôt que de deviner. Partagez les informations utiles, ou répondez NA si elles ne sont pas disponibles.",
        suggestionSalesDrop: "Pourquoi mes ventes ont-elles baissé ?",
        suggestionTraffic: "Comment se porte mon trafic ?",
        suggestionConversion: "Pourquoi les visiteurs n'achètent-ils pas ?",
        suggestionStock: "J'ai trop de stock",
        contactSupport: "Contacter le support",
        supportTitle: "Contacter le support Qofa",
        supportText: "Si Nader ne peut pas répondre à votre question, ou vous avez besoin de l'aide de notre équipe, envoyez un ticket.",
        subject: "Sujet",
        message: "Décrivez votre problème",
        submitTicket: "Envoyer le ticket",
        ticketSuccess: "Votre ticket a été envoyé.",
        ticketNumber: "Numéro du ticket",
        anotherTicket: "Créer un autre ticket",
        yourTickets: "Vos tickets",
        noTickets: "Aucun ticket pour le moment.",
        back: "Retour",
        websitePreview: "Aperçu du site consommateur",
        editBrand: "Modifier la marque",
        viewBrand: "Voir la page consommateur",
        consumerPage: "Page consommateur",
        storeEditorEyebrow: "ÉDITEUR DE BOUTIQUE",
        storeEditorTitle: "Personnalisez votre boutique.",
        storeEditorText: "Modifiez l'identité, les couleurs, l'histoire et les produits mis en avant. L'aperçu se met à jour à chaque enregistrement.",
        storeName: "Nom de la boutique",
        storeTagline: "Titre d'accueil",
        storeDescription: "Histoire de la boutique",
        storeTheme: "Thème visuel",
        themeOcean: "Bleu océan",
        themeSunset: "Corail coucher de soleil",
        themeForest: "Vert forêt",
        themeViolet: "Violet améthyste",
        themeBerry: "Rose baie",
        themeGold: "Or du désert",
        themeMidnight: "Noir minuit",
        products: "Produits",
        productName: "Nom du produit",
        productOne: "Produit mis en avant 1",
        productTwo: "Produit mis en avant 2",
        productThree: "Produit mis en avant 3",
        productPrice: "Prix (MAD)",
        productImage: "Image du produit",
        addProduct: "Ajouter un produit",
        removeProduct: "Supprimer",
        imageTooLarge: "Choisissez une image de moins de 1,5 Mo.",
        saveStore: "Enregistrer la boutique",
        storeSaved: "Votre boutique a été mise à jour.",
        shopCollection: "Collection à la une",
        addToCart: "Ajouter au panier",
        cart: "Panier",
        cartEmpty: "Votre panier est vide.",
        cartTotal: "Total",
        checkout: "Commander",
        checkoutTitle: "Paiement sécurisé",
        checkoutText: "Confirmez vos informations pour recevoir un code de vérification par SMS avant de passer votre commande.",
        nationalId: "Identifiant national",
        sendVerification: "Envoyer le code de vérification",
        verifyTitle: "Vérifiez votre numéro",
        verifyText: "Saisissez le code envoyé sur votre téléphone.",
        verificationCode: "Code de vérification",
        verifyAndContinue: "Vérifier et continuer",
        demoSms: "SMS de démonstration : utilisez le code 123456 pour confirmer votre inscription.",
        verificationError: "Ce code n'est pas correct. Réessayez.",
        checkoutReady: "Votre inscription est confirmée. Vous pouvez maintenant passer votre commande.",
        placeOrder: "Passer la commande",
        close: "Fermer",
        shopAbout: "À propos",
        shopStory: "Conçu avec soin pour nos clients.",
        poweredBy: "Propulsé par Qofa",
        backToDashboard: "Tableau de bord marchand",
        defaultStoreTagline: "Les essentiels du quotidien, tout simplement.",
        defaultStoreDescription: "Des produits choisis avec soin pour vos moments de tous les jours.",
        defaultProductOne: "Sélection du jour",
        defaultProductTwo: "Coup de cœur client",
        defaultProductThree: "Découverte en édition limitée",
        orderSuccess: "Votre demande de commande a été reçue.",
        merchant: "Commerçant",
        grocery: "Épicerie",
        fashion: "Mode",
        restaurant: "Restaurant",
        beauty: "Beauté",
        services: "Services",
        other: "Autre",
        otherBusiness: "Autre"
    },
    ar: {
        languageTitle: "اختر لغتك",
        languageText: "اختر كيف تريد استخدام قُفَّة.",
        english: "الإنجليزية",
        french: "الفرنسية",
        arabic: "العربية",
        home: "الرئيسية",
        platformNav: "المنصة",
        how: "كيف تعمل",
        login: "تسجيل التاجر",
        register: "ابدأ الآن",
        heroEyebrow: "ذكاء الأعمال للمشاريع الصغيرة",
        heroTitle: "مشروعك.",
        heroTitle2: "بوضوح.",
        heroText: "قُفَّة تمنح المشاريع الصغيرة الأدوات ولوحات المعلومات والإرشادات الذكية التي تحتاجها لفهم ما يحدث واتخاذ القرار التالي.",
        learn: "كيف تعمل قُفَّة",
        dashboard: "استكشف لوحة المعلومات",
        demoEyebrow: "لوحة معلومات قُفَّة المباشرة",
        demoTitle: "رؤية أوضح لقرارك القادم.",
        demoRevenue: "الإيرادات",
        demoOrders: "الطلبات",
        demoCustomers: "عملاء جدد",
        demoInsight: "المبيعات تتجه إلى الارتفاع هذا الأسبوع.",
        demoLive: "مباشر",
        proofText: "اكتشف الإشارات التي تدفع مشروعك إلى الأمام.",
        proofRevenue: "الإيرادات في عرض واحد",
        proofDecisions: "قرارات أسرع",
        proofSupport: "إرشاد عندما تحتاجه",
        platformEyebrow: "منصة واحدة، خطوات أوضح",
        platformTitle: "كل ما تحتاجه لفهم مشروعك وتحسينه وتنميته.",
        platformText: "تجمع قُفَّة إشارات مشروعك الأساسية ثم تحولها إلى أفضل خطوة تالية.",
        featureAnalyticsTitle: "تحليلات الأعمال",
        featureAnalyticsText: "اطلع على الإيرادات والطلبات والزيارات والتحويل في عرض مركز واحد.",
        featureOperationsTitle: "العمليات اليومية",
        featureOperationsText: "تابع النشاط الذي يحتاج إلى انتباهك اليوم.",
        featureGuidanceTitle: "إرشاد من نادر",
        featureGuidanceText: "اطرح سؤالك بلغة بسيطة واحصل على خطوات عملية تالية.",
        insightEyebrow: "تعرّف على نادر",
        insightTitle: "حوّل إشارات العمل إلى قرارات واثقة.",
        insightText: "يقرأ نادر السياق وراء أرقامك ويساعدك في تحديد الخطوة التالية.",
        insightPoint1: "اكتشف التغيّرات قبل أن تصبح مشكلات",
        insightPoint2: "اسأل عن مشروعك بلغتك اليومية",
        insightPoint3: "احصل على اقتراحات يمكنك تنفيذها اليوم",
        insightQuestion: "لماذا زادت الطلبات هذا الأسبوع؟",
        insightAnswer: "زاد عدد عملائك العائدين بنسبة 18%. فكّر في عرض ولاء للحفاظ على هذا الزخم.",
        processEyebrow: "الخطوات",
        footerText: "ذكاء أعمال يساعد المشاريع الصغيرة على التحرك بثقة.",
        what: "ما هي قُفَّة؟",
        whatText: "قُفَّة منصة مصممة لأصحاب المشاريع الصغيرة. تربط بيانات مشروعك وتوفر لوحات معلومات مفصلة، بينما يساعدك نادر على فهم نشاطك التجاري.",
        stepsTitle: "من بيانات مشروعك إلى قرارات أفضل.",
        step1: "أنشئ حسابك",
        step1Text: "أخبر قُفَّة من أنت وماذا تفعل.",
        step2: "اختر الباقة",
        step2Text: "اختر الباقة التي تناسب مشروعك.",
        step3: "اربط مشروعك",
        step3Text: "اربط بيانات مشروعك بمنصة قُفَّة.",
        step4: "افهم بياناتك",
        step4Text: "استكشف لوحات المعلومات التفصيلية لمشروعك.",
        step5: "اتخذ القرار",
        step5Text: "استخدم نادر وبياناتك لاتخاذ قرارات أفضل.",
        cta: "امنح مشروعك رؤية أوضح.",
        ctaButton: "ابدأ مع قُفَّة",
        registerTitle: "أنشئ حساب قُفَّة الخاص بك",
        registerText: "أخبرنا قليلاً عنك وعن مشروعك.",
        firstName: "الاسم الأول",
        lastName: "اسم العائلة",
        phone: "رقم الهاتف",
        email: "البريد الإلكتروني",
        gender: "الجنس",
        genderSelect: "اختر الجنس",
        male: "ذكر",
        female: "أنثى",
        preferNotToSay: "أفضل عدم الإجابة",
        accountType: "نوع الحساب",
        individual: "مشروع شخصي",
        business: "شركة",
        businessType: "نوع النشاط",
        businessName: "اسم المشروع",
        businessNamePlaceholder: "مشروعك",
        continue: "متابعة",
        countryCode: "رمز الدولة",
        packagesTitle: "اختر باقة قُفَّة",
        packagesText: "ابدأ بالأدوات التي يحتاجها مشروعك.",
        packagesEyebrow: "باقات قُفَّة",
        packageStarter: "البداية",
        packageGrowth: "النمو",
        packagePro: "احترافي",
        priceMonth: "/ شهر",
        choose: "اختر الباقة",
        starterDashboard: "لوحة معلومات الأعمال",
        starterAnalytics: "تحليلات أساسية",
        starterNader: "مساعد نادر الذكي",
        starterProfile: "ملف المشروع",
        growthEverything: "كل ما في باقة البداية",
        growthDashboards: "لوحات معلومات متقدمة",
        growthTraffic: "تحليل الزيارات",
        growthConversion: "تحليل التحويل",
        growthSupport: "تذاكر الدعم",
        proEverything: "كل ما في باقة النمو",
        proIntelligence: "ذكاء أعمال متقدم",
        proDashboards: "لوحات معلومات مخصصة",
        proSupport: "دعم بأولوية",
        proNader: "قدرات نادر المتقدمة",
        paymentTitle: "أكمل عملية الدفع",
        paymentText: "هذه شاشة دفع تجريبية.",
        cardName: "الاسم على البطاقة",
        cardNumber: "رقم البطاقة",
        expiry: "تاريخ الانتهاء",
        cvv: "CVV",
        pay: "ادفع وابدأ",
        chooseAddress: "اختر عنوان قُفَّة الخاص بك",
        launchTitle: "مشروعك على قُفَّة جاهز.",
        launchText: "سيكون لمشروعك عنوان خاص مرتبط بقُفَّة.",
        launch: "أطلق مشروعي",
        dashboardTitle: "نظرة عامة على المشروع",
        businessOverview: "نظرة عامة على الأعمال",
        businessOverviewShort: "نظرة عامة",
        analytics: "التحليلات",
        brand: "علامتي التجارية",
        nader: "نادر",
        support: "الدعم",
        traffic: "الزيارات",
        revenue: "الإيرادات",
        orders: "الطلبات",
        conversion: "معدل التحويل",
        askNader: "اسأل نادر",
        revenuePerformance: "أداء الإيرادات",
        revenueChart: "مخطط الإيرادات",
        naderInsight: "رؤية نادر",
        dashboardInsight: "انخفضت الإيرادات والطلبات بنسبة 20%. وانخفضت الزيارات بنسبة 9.09%. يشير ذلك إلى وجود مشكلة في الزيارات والتحويل.",
        askNaderAbout: "اسأل نادر عن ذلك",
        analyticsEyebrow: "البيانات",
        trafficPerformance: "أداء الزيارات",
        conversionPerformance: "أداء التحويل",
        businessInterpretation: "تفسير الأعمال",
        businessInterpretationText: "تعرض لوحاتك الأرقام أولاً ثم تمنح نادر السياق اللازم لتفسيرها.",
        intelligenceEyebrow: "ذكاء قُفَّة",
        naderPlaceholder: "اسأل نادر عن مشروعك...",
        send: "إرسال",
        you: "أنت",
        naderDescription: "وكيل أعمالك. يعمل نادر مع معلومات مشروعك بدلاً من تقديم نصائح عامة.",
        naderGreeting: "مرحباً {name}. أنا نادر، وكيل أعمالك في قُفَّة. يمكنني مساعدتك على فهم المبيعات والزيارات والطلبات والتحويل والمخزون.",
        naderResponseSales: "وفقاً لبيانات لوحة المعلومات، تبلغ الإيرادات 12,000 دولار مقابل 15,000 دولار سابقاً، أي انخفاض بنسبة 20%. وانخفضت الطلبات أيضاً بنسبة 20%، بينما انخفضت الزيارات بنسبة 9.09%. يشير ذلك إلى فرصة لتحسين الزيارات والتحويل معاً. أنصح بمراجعة توفر المنتجات والأسعار والعروض وسلوك إتمام الطلب.",
        naderResponseTraffic: "تبلغ الزيارات 2,000 زائر مقابل 2,200 في الفترة السابقة، أي انخفاض بنسبة 9.09%. راجع قنوات التسويق واكتساب العملاء وأي تغيّرات في الطلب.",
        naderResponseConversion: "معدل التحويل لديك هو 5%، بناءً على 100 طلب من 2,000 زائر. لفهم سبب عدم الشراء، راجع توفر المنتجات والأسعار وسلوك العملاء وبيانات إتمام الطلب.",
        naderResponseUnavailable: "تم الفهم. سأعتبر هذه المعلومات غير متاحة وسأتابع باستخدام البيانات المتوفرة لدينا.",
        naderResponseStock: "يمكنني مساعدتك في تحليل المخزون الزائد. أخبرني بالمنتج والمخزون الحالي وحجم المبيعات الأخيرة. إذا لم تتوفر المعلومة، أجب بـ NA.",
        naderResponseGeneric: "أريد أن أقدم لك إجابة مبنية على بيانات مشروعك بدلاً من التخمين. شارك المعلومات ذات الصلة، أو أجب بـ NA إذا لم تكن متاحة.",
        suggestionSalesDrop: "لماذا انخفضت مبيعاتي؟",
        suggestionTraffic: "كيف أداء الزيارات لدي؟",
        suggestionConversion: "لماذا يزور الناس المتجر ولا يشترون؟",
        suggestionStock: "لدي مخزون زائد",
        contactSupport: "تواصل مع الدعم",
        supportTitle: "تواصل مع دعم قُفَّة",
        supportText: "إذا لم يتمكن نادر من الإجابة عن سؤالك، أو كنت بحاجة إلى مساعدة من فريقنا، أرسل تذكرة.",
        subject: "الموضوع",
        message: "صف مشكلتك",
        submitTicket: "إرسال التذكرة",
        ticketSuccess: "تم إرسال تذكرتك.",
        ticketNumber: "رقم التذكرة",
        anotherTicket: "أنشئ تذكرة أخرى",
        yourTickets: "تذاكرك",
        noTickets: "لا توجد تذاكر بعد.",
        back: "رجوع",
        websitePreview: "معاينة موقع المستهلك",
        editBrand: "تعديل العلامة التجارية",
        viewBrand: "عرض صفحة المستهلك",
        consumerPage: "صفحة المستهلك",
        storeEditorEyebrow: "محرر المتجر",
        storeEditorTitle: "اجعل متجرك يعكس هويتك.",
        storeEditorText: "حدّث هوية متجرك وألوانه وقصته ومنتجاته المميزة. تتحدث المعاينة مع كل حفظ.",
        storeName: "اسم المتجر",
        storeTagline: "عنوان الواجهة",
        storeDescription: "قصة المتجر",
        storeTheme: "المظهر البصري",
        themeOcean: "أزرق المحيط",
        themeSunset: "مرجاني الغروب",
        themeForest: "أخضر الغابة",
        themeViolet: "بنفسجي الجمشت",
        themeBerry: "وردي التوت",
        themeGold: "ذهبي الصحراء",
        themeMidnight: "أسود منتصف الليل",
        products: "المنتجات",
        productName: "اسم المنتج",
        productOne: "المنتج المميز 1",
        productTwo: "المنتج المميز 2",
        productThree: "المنتج المميز 3",
        productPrice: "السعر (درهم مغربي)",
        productImage: "صورة المنتج",
        addProduct: "أضف منتجاً",
        removeProduct: "إزالة",
        imageTooLarge: "اختر صورة أصغر من 1.5 ميغابايت.",
        saveStore: "حفظ المتجر",
        storeSaved: "تم تحديث واجهة متجرك.",
        shopCollection: "مجموعة مميزة",
        addToCart: "أضف إلى السلة",
        cart: "السلة",
        cartEmpty: "سلتك فارغة.",
        cartTotal: "الإجمالي",
        checkout: "إتمام الطلب",
        checkoutTitle: "إتمام طلب آمن",
        checkoutText: "أكد بياناتك لتلقي رمز تحقق عبر رسالة نصية قبل إتمام طلبك.",
        nationalId: "رقم الهوية الوطنية",
        sendVerification: "إرسال رمز التحقق",
        verifyTitle: "تحقق من رقمك",
        verifyText: "أدخل الرمز المرسل إلى هاتفك.",
        verificationCode: "رمز التحقق",
        verifyAndContinue: "تحقق وتابع",
        demoSms: "رسالة نصية تجريبية: استخدم الرمز 123456 لتأكيد تسجيلك.",
        verificationError: "الرمز غير صحيح. حاول مرة أخرى.",
        checkoutReady: "تم تأكيد تسجيلك. يمكنك الآن إتمام طلبك.",
        placeOrder: "تأكيد الطلب",
        close: "إغلاق",
        shopAbout: "من نحن",
        shopStory: "صُمم بعناية لعملائنا.",
        poweredBy: "مدعوم من قُفَّة",
        backToDashboard: "لوحة التاجر",
        defaultStoreTagline: "أساسياتك اليومية، ببساطة.",
        defaultStoreDescription: "منتجات مختارة بعناية للحظاتك اليومية.",
        defaultProductOne: "اختيار اليوم",
        defaultProductTwo: "المفضل لدى العملاء",
        defaultProductThree: "اكتشاف محدود",
        orderSuccess: "تم استلام طلبك.",
        merchant: "تاجر",
        grocery: "محل بقالة",
        fashion: "الموضة",
        restaurant: "مطعم",
        beauty: "الجمال",
        services: "الخدمات",
        other: "أخرى",
        otherBusiness: "أخرى"
    }
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
        .replace(/[^a-z]/g, "")
        .slice(0, 30) || "business";
}

function applyLanguage() {
    // Set document language and direction
    document.documentElement.lang = state.language;
    document.documentElement.dir = state.language === "ar" ? "rtl" : "ltr";

    // Apply text translations
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        const translation = translations[state.language]?.[key];

        if (translation) {
            element.textContent = translation;
        }
    });

    const welcomeLogo = document.getElementById("welcome-qofa-logo");

if (welcomeLogo) {
    welcomeLogo.src =
        state.language === "ar"
            ? "/static/images/qofa-logo-ar.png"
            : "/static/images/qofa-logo-en.png";
}

    // Apply placeholder translations
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.getAttribute("data-i18n-placeholder");
        if (translations[state.language][key]) {
            element.placeholder = translations[state.language][key];
        }
    });

    // Apply select option translations
    document.querySelectorAll("select").forEach(select => {
        select.querySelectorAll("option").forEach(option => {
            const key = option.getAttribute("data-i18n");
            if (key && translations[state.language][key]) {
                option.textContent = translations[state.language][key];
            }
        });
    });

    // Update country code dropdown if it exists
    const countrySelect = document.getElementById("country-code-select");
    if (countrySelect) {
        populateCountryCodes();
    }

    updatePaymentSummary();
    renderStorefront();
    hydrateStoreEditor();
}

function populateCountryCodes() {
    const select = document.getElementById("country-code-select");
    if (!select) return;

    // Clear existing options (keep first placeholder)
    while (select.options.length > 1) {
        select.remove(1);
    }

    // Add country options
    countryCodes.forEach(country => {
        const option = document.createElement("option");
        option.value = country.code;
        option.textContent = `${country.name} (${country.code})`;
        select.appendChild(option);
    });
}


/* =========================
   LANGUAGE SCREEN
========================= */

function selectLanguage(language) {
    state.language = language;

    applyLanguage();

    // Switch Qofa logo based on language
    const logos = document.querySelectorAll(
        "#welcome-qofa-logo, #navbar-qofa-logo"
    );

    logos.forEach(logo => {
        logo.src = language === "ar"
            ? "/static/images/qofa-logo-ar.png"
            : "/static/images/qofa-logo-en.png";
    });

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
        nameKey: "packageStarter",
        price: 19
    },
    growth: {
        nameKey: "packageGrowth",
        price: 49
    },
    pro: {
        nameKey: "packagePro",
        price: 99
    }
};

function selectPackage(packageId) {
    if (!packages[packageId]) {
        return;
    }

    state.selectedPackage = packageId;

    updatePaymentSummary();
    showScreen("payment-screen");
}

function updatePaymentSummary() {
    const packageId = state.selectedPackage || "growth";
    if (!packages[packageId]) return;

    const packageName = document.getElementById("payment-package-name");
    const packagePrice = document.getElementById("payment-package-price");

    if (packageName) {
        packageName.textContent = t(packages[packageId].nameKey);
    }

    if (packagePrice) {
        packagePrice.textContent = `$${packages[packageId].price} ${t("priceMonth")}`;
    }
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

    renderStorefront();
    hydrateStoreEditor();
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
        t("naderGreeting").replace("{name}", state.user.firstName || t("you"))
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
            <strong>${message.sender === "user" ? t("you") : "Nader"}</strong>
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

function askNader(questionKey) {
    const input = document.getElementById("nader-input");

    if (!input) {
        return;
    }

    input.value = t(questionKey);
    input.focus();
}

function generateNaderResponse(question) {
    const q = question.toLowerCase();

    if (
        q.includes("sales") ||
        q.includes("revenue") ||
        q.includes("ventes") ||
        q.includes("chiffre") ||
        q.includes("مبيعات") ||
        q.includes("إيرادات")
    ) {
        addNaderMessage(t("naderResponseSales"));

        return;
    }

    if (
        q.includes("traffic") ||
        q.includes("visitors") ||
        q.includes("trafic") ||
        q.includes("visiteurs") ||
        q.includes("زيارات")
    ) {
        addNaderMessage(t("naderResponseTraffic"));

        return;
    }

    if (
        q.includes("conversion") ||
        q.includes("visit but") ||
        q.includes("buy") ||
        q.includes("acheter") ||
        q.includes("يشترون")
    ) {
        addNaderMessage(t("naderResponseConversion"));

        return;
    }

    if (
        q === "na" ||
        q.includes("not available") ||
        q.includes("don't have") ||
        q.includes("pas disponible") ||
        q.includes("غير متاح")
    ) {
        addNaderMessage(t("naderResponseUnavailable"));

        return;
    }

    if (
        q.includes("stock") ||
        q.includes("inventory") ||
        q.includes("inventaire") ||
        q.includes("مخزون")
    ) {
        addNaderMessage(t("naderResponseStock"));

        return;
    }

    addNaderMessage(t("naderResponseGeneric"));
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
   STOREFRONT EDITOR
========================= */

const storefrontThemes = {
    ocean: {
        accent: "#087BCE",
        background: "#EAF8FF",
        ink: "#064B78"
    },
    sunset: {
        accent: "#D95E4B",
        background: "#FFF1E9",
        ink: "#74322A"
    },
    forest: {
        accent: "#16785D",
        background: "#ECFBF4",
        ink: "#174C3D"
    },
    violet: {
        accent: "#7646C9",
        background: "#F3EDFF",
        ink: "#392064"
    },
    berry: {
        accent: "#C73578",
        background: "#FFF0F6",
        ink: "#69163D"
    },
    gold: {
        accent: "#B77C12",
        background: "#FFF8E5",
        ink: "#65420B"
    },
    midnight: {
        accent: "#2B3444",
        background: "#EFF2F6",
        ink: "#121923"
    }
};

const storefrontIcons = ["✦", "◉", "✿"];

function getDefaultStorefront() {
    return {
        tagline: t("defaultStoreTagline"),
        description: t("defaultStoreDescription"),
        products: [
            { name: t("defaultProductOne"), price: 89, icon: storefrontIcons[0] },
            { name: t("defaultProductTwo"), price: 129, icon: storefrontIcons[1] },
            { name: t("defaultProductThree"), price: 159, icon: storefrontIcons[2] }
        ]
    };
}

function ensureStorefront() {
    if (!state.business.storefrontTheme) {
        state.business.storefrontTheme = "ocean";
    }

    if (typeof state.business.storefrontCustomized !== "boolean") {
        state.business.storefrontCustomized = false;
    }

    if (!Array.isArray(state.cart)) {
        state.cart = [];
    }
}

function getStorefront() {
    ensureStorefront();

    const defaults = getDefaultStorefront();
    const custom = state.business.storefront;

    if (!state.business.storefrontCustomized || !custom) {
        return defaults;
    }

    return {
        tagline: custom.tagline || defaults.tagline,
        description: custom.description || defaults.description,
        products: Array.isArray(custom.products) && custom.products.length > 0
            ? custom.products.map((product, index) => ({
                name: product.name || defaults.products[index % defaults.products.length].name,
                price: Number.isFinite(Number(product.price))
                    ? Number(product.price)
                    : defaults.products[index % defaults.products.length].price,
                icon: storefrontIcons[index % storefrontIcons.length],
                image: typeof product.image === "string" && product.image.startsWith("data:image/")
                    ? product.image
                    : ""
            }))
            : defaults.products
    };
}

function applyStorefrontTheme() {
    ensureStorefront();

    const theme = storefrontThemes[state.business.storefrontTheme] || storefrontThemes.ocean;

    document.querySelectorAll("#consumer-screen, .editor-store-preview").forEach(element => {
        element.style.setProperty("--store-accent", theme.accent);
        element.style.setProperty("--store-background", theme.background);
        element.style.setProperty("--store-ink", theme.ink);
    });
}

function hydrateStoreEditor() {
    const form = document.getElementById("store-editor-form");

    if (!form) {
        return;
    }

    const storefront = getStorefront();

    document.getElementById("store-name").value = state.business.name;
    document.getElementById("store-tagline").value = storefront.tagline;
    document.getElementById("store-description").value = storefront.description;
    document.getElementById("store-theme").value = state.business.storefrontTheme;

    renderStoreProductEditor(storefront.products);

    applyStorefrontTheme();
}

function renderStoreProductEditor(products) {
    const editor = document.getElementById("store-products-editor");
    if (!editor) return;

    editor.innerHTML = products.map((product, index) => {
        const image = product.image
            ? `<img src="${escapeStoreHtml(product.image)}" alt="${escapeStoreHtml(product.name)}">`
            : `<span>${storefrontIcons[index % storefrontIcons.length]}</span>`;
        const removeButton = products.length > 1
            ? `<button class="store-remove-product" type="button" onclick="removeStoreProduct(${index})">${escapeStoreHtml(t("removeProduct"))}</button>`
            : "";

        return `
            <article class="store-product-editor" data-product-image="${escapeStoreHtml(product.image || "")}">
                <div class="store-product-image-preview">${image}</div>
                <div class="store-product-inputs">
                    <label><span>${escapeStoreHtml(t("productName"))}</span><input class="store-product-name" value="${escapeStoreHtml(product.name || "")}" required></label>
                    <label><span>${escapeStoreHtml(t("productPrice"))}</span><input class="store-product-price" type="number" min="0" step="1" value="${Number(product.price) || 0}" required></label>
                    <label class="store-image-upload"><span>${escapeStoreHtml(t("productImage"))}</span><input type="file" accept="image/*" onchange="handleProductImage(event, ${index})"></label>
                </div>
                ${removeButton}
            </article>`;
    }).join("");
}

function readStoreProductDraft() {
    return Array.from(document.querySelectorAll("#store-products-editor .store-product-editor")).map((row, index) => ({
        name: String(row.querySelector(".store-product-name")?.value || "").trim(),
        price: Math.max(0, Number(row.querySelector(".store-product-price")?.value) || 0),
        image: row.dataset.productImage || "",
        icon: storefrontIcons[index % storefrontIcons.length]
    }));
}

function addStoreProduct() {
    const products = readStoreProductDraft();
    products.push({
        name: t("defaultProductOne"),
        price: 0,
        icon: storefrontIcons[products.length % storefrontIcons.length],
        image: ""
    });
    renderStoreProductEditor(products);
}

function removeStoreProduct(index) {
    const products = readStoreProductDraft();
    if (products.length <= 1) return;
    products.splice(index, 1);
    renderStoreProductEditor(products);
}

function handleProductImage(event, index) {
    const file = event.currentTarget.files?.[0];
    if (!file) return;

    if (file.size > 1.5 * 1024 * 1024) {
        window.alert(t("imageTooLarge"));
        event.currentTarget.value = "";
        return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const row = document.querySelectorAll("#store-products-editor .store-product-editor")[index];
        const imageUrl = typeof reader.result === "string" ? reader.result : "";
        if (!row || !imageUrl.startsWith("data:image/")) return;

        row.dataset.productImage = imageUrl;
        const preview = row.querySelector(".store-product-image-preview");
        if (preview) {
            preview.innerHTML = `<img src="${escapeStoreHtml(imageUrl)}" alt="${escapeStoreHtml(row.querySelector(".store-product-name")?.value || "")}">`;
        }
    });
    reader.readAsDataURL(file);
}

function saveStorefront(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("storeName") || "").trim();

    if (!name) {
        return;
    }

    state.business.name = name;
    state.business.domain = `${slugify(name)}.qofa.com`;
    state.business.storefrontTheme = String(data.get("storeTheme") || "ocean");
    state.business.storefrontCustomized = true;
    const products = readStoreProductDraft();
    if (!products.length || products.some(product => !product.name)) {
        return;
    }

    state.business.storefront = {
        tagline: String(data.get("storeTagline") || "").trim(),
        description: String(data.get("storeDescription") || "").trim(),
        products
    };
    state.cart = [];

    persistStorefront();
    updateBusinessUI();
    hydrateStoreEditor();

    const status = document.getElementById("store-save-status");
    if (status) {
        status.classList.remove("hidden");
    }
}

function persistStorefront() {
    try {
        localStorage.setItem("qofa-storefront", JSON.stringify(state.business));
    } catch (error) {
        // The demo remains fully usable when browser storage is unavailable.
    }
}

function loadStorefront() {
    try {
        const savedStorefront = localStorage.getItem("qofa-storefront");
        if (!savedStorefront) return;

        const savedBusiness = JSON.parse(savedStorefront);
        if (savedBusiness && typeof savedBusiness.name === "string") {
            state.business = {
                ...state.business,
                ...savedBusiness
            };
        }
    } catch (error) {
        // Ignore unavailable or malformed local demo data.
    }
}

function escapeStoreHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function formatMad(value) {
    return `MAD ${Number(value || 0).toLocaleString()}`;
}

function renderStorefront() {
    ensureStorefront();

    const storefront = getStorefront();
    applyStorefrontTheme();

    const previewName = document.getElementById("store-preview-name");
    const previewTagline = document.getElementById("store-preview-tagline");
    const consumerName = document.getElementById("consumer-business-name");
    const consumerDescription = document.getElementById("storefront-description");
    const consumerStory = document.getElementById("storefront-story");

    if (previewName) previewName.textContent = state.business.name;
    if (previewTagline) previewTagline.textContent = storefront.tagline;
    if (consumerName) consumerName.textContent = state.business.name;
    if (consumerDescription) consumerDescription.textContent = storefront.tagline;
    if (consumerStory) consumerStory.textContent = storefront.description;

    const productGrid = document.getElementById("store-product-grid");
    if (productGrid) {
        productGrid.innerHTML = storefront.products.map((product, index) => `
            <article class="store-product-card">
                <div class="store-product-art">${product.image ? `<img src="${escapeStoreHtml(product.image)}" alt="${escapeStoreHtml(product.name)}">` : product.icon}</div>
                <div class="store-product-details">
                    <h3>${escapeStoreHtml(product.name)}</h3>
                    <div class="store-product-row">
                        <strong>${formatMad(product.price)}</strong>
                        <button type="button" onclick="addToCart(${index})">${escapeStoreHtml(t("addToCart"))}</button>
                    </div>
                </div>
            </article>
        `).join("");
    }

    const cartItems = document.getElementById("store-cart-items");
    const cartEmpty = document.getElementById("store-cart-empty");
    const cartCount = document.getElementById("store-cart-count");
    const cartTotal = document.getElementById("store-cart-total");

    if (cartItems) {
        cartItems.innerHTML = state.cart.map(item => `
            <div class="store-cart-item">
                <span>${escapeStoreHtml(item.name)}</span>
                <strong>${formatMad(item.price)}</strong>
            </div>
        `).join("");
    }

    if (cartEmpty) {
        cartEmpty.classList.toggle("hidden", state.cart.length > 0);
    }

    if (cartCount) cartCount.textContent = state.cart.length;
    if (cartTotal) {
        cartTotal.textContent = formatMad(state.cart.reduce((total, item) => total + item.price, 0));
    }
}

function addToCart(productIndex) {
    const product = getStorefront().products[productIndex];
    if (!product) return;

    state.cart.push({
        name: product.name,
        price: product.price
    });

    renderStorefront();
    hydrateStoreEditor();
}

function checkoutStorefront() {
    if (!state.cart.length) {
        window.alert(t("cartEmpty"));
        return;
    }

    const alreadyVerified = Boolean(state.checkout?.verified && state.checkout?.buyer);
    if (!alreadyVerified) {
        state.checkout = { buyer: null, verificationCode: null, verified: false };
        document.getElementById("checkout-registration-form")?.reset();
        document.getElementById("checkout-verification-code").value = "";
    }

    document.getElementById("checkout-verification-error")?.classList.add("hidden");
    document.getElementById("checkout-registration-step")?.classList.toggle("hidden", alreadyVerified);
    document.getElementById("checkout-verification-step")?.classList.add("hidden");
    document.getElementById("checkout-confirmation-step")?.classList.toggle("hidden", !alreadyVerified);
    document.getElementById("checkout-modal")?.classList.remove("hidden");
}

function closeCheckout() {
    document.getElementById("checkout-modal")?.classList.add("hidden");
}

function sendCheckoutVerification(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    state.checkout.buyer = {
        firstName: String(data.get("firstName") || "").trim(),
        lastName: String(data.get("lastName") || "").trim(),
        nationalId: String(data.get("nationalId") || "").trim(),
        phone: String(data.get("phone") || "").trim()
    };
    state.checkout.verificationCode = "123456";
    state.checkout.verified = false;
    document.getElementById("checkout-registration-step")?.classList.add("hidden");
    document.getElementById("checkout-verification-step")?.classList.remove("hidden");
    document.getElementById("checkout-verification-code")?.focus();
}

function verifyCheckoutRegistration(event) {
    event.preventDefault();
    const code = String(document.getElementById("checkout-verification-code")?.value || "").trim();
    const error = document.getElementById("checkout-verification-error");

    if (code !== state.checkout.verificationCode) {
        error?.classList.remove("hidden");
        return;
    }

    state.checkout.verified = true;
    error?.classList.add("hidden");
    document.getElementById("checkout-verification-step")?.classList.add("hidden");
    document.getElementById("checkout-confirmation-step")?.classList.remove("hidden");
}

function completeStoreOrder() {
    if (!state.checkout.verified) return;
    state.cart = [];
    state.checkout.verificationCode = null;
    renderStorefront();
    closeCheckout();
    window.alert(t("orderSuccess"));
}

function editBrand() {
    openMerchantView("brand-view");
    hydrateStoreEditor();
    document.getElementById("store-name")?.focus();
}


/* =========================
   CONSUMER WEBSITE
========================= */

function openConsumerWebsite() {
    updateBusinessUI();
    renderStorefront();
    showScreen("consumer-screen");
}


/* =========================
   LOGIN / DEMO
========================= */

function merchantLogin() {
    state.user = {
        firstName: state.user.firstName || "Demo",
        lastName: state.user.lastName || "Merchant",
        businessName: state.business.name
    };

    ensureStorefront();

    updateBusinessUI();
    showScreen("merchant-screen");
    openMerchantView("dashboard-view");
}


/* =========================
   STARTUP
========================= */

document.addEventListener("DOMContentLoaded", () => {
    loadStorefront();
    applyLanguage();
    updateBusinessUI();

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

    initializeNader();
});



