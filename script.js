const CONTACT = {
  phone: "+917996213245",
  instagram: "https://instagram.com/yogagee_",
  email: "cyafitness02@gmail.com",
  upi: "yourupiid@bank"
};

let currentLang = "en";
let activeYogaCategory = "hatha";
let activeWellness = "women";
let selectedPlan = null;
let selectedPayment = "UPI";
let subscribed = false;
let waterCount = 0;
let timerSeconds = 300;
let timerHandle = null;

const dict = {
  en: {
    brandSub: "See Your Agility", navHome: "Home", navYoga: "Yoga", navZumba: "Zumba", navDance: "Dance", navWellbeing: "Wellbeing", navPlans: "Plans", navBook: "Book", navGallery: "Gallery", navContact: "Contact",
    heroEyebrow: "Luxury movement, Indian soul", heroTitle: "CYA", heroVision: "See Your Agility", heroSubtitle: "A premium digital wellness journey for fatigue, stiffness, mobility, stress and lifestyle transformation.", bookTrial: "Book Trial Class", whatsappJoin: "WhatsApp to Join", heroStat1: "Core journeys", heroStat2: "Languages", heroStat3: "Trial class",
    yogaEyebrow: "Yoga Journey", yogaTitle: "Choose a guided yoga journey", yogaIntro: "Open Hatha, Power, Meditation, Flexibility, Weight Loss, Hormonal Balance or Stress Relief Yoga as a structured flow.", materialsEyebrow: "Premium Notes & Materials", materialsTitle: "Downloadable guides are reserved for subscribed candidates.", materialsLocked: "Subscribe to access premium yoga materials and wellness notes.", materialsUnlocked: "Premium access unlocked. You can now download notes.", previewMaterials: "Preview Materials", unlockMaterials: "Subscribe to Unlock", downloadNotes: "Download Notes",
    zumbaEyebrow: "Zumba Energy", zumbaTitle: "Vibrant cardio programs with premium movement flow", danceEyebrow: "Dance Choreography", danceTitle: "Stage-ready choreography for weddings, schools and events", wellbeingEyebrow: "Health & Wellbeing", wellbeingTitle: "Wellness dashboards for women, men, children and elders", medicalNote: "Educational fitness guidance only. For medical conditions, consult a qualified doctor.",
    scheduleEyebrow: "Class Timings", scheduleTitle: "Professional weekly schedule", toolsEyebrow: "Wellness Tools", toolsTitle: "Small daily trackers for better consistency", bmiTitle: "BMI Calculator", waterTitle: "Water Intake", timerTitle: "Meditation Timer", progressTitle: "Progress Tracker", progressText: "Weekly movement goal: 65%", calculate: "Calculate", addGlass: "Add Glass", startTimer: "Start",
    trainerEyebrow: "Meet Your Trainer", trainerTitle: "Friendly guidance with a graceful Indian fitness style", trainerText: "Yoga, zumba, choreography and wellness coaching with clear routines, beginner-friendly pacing and warm accountability.", cert1: "Yoga instruction", cert2: "Dance choreography", cert3: "Wellness guidance",
    plansEyebrow: "Subscription Plans", plansTitle: "Premium plans with WhatsApp payment flow", selectedPlan: "Selected Plan", upiTitle: "UPI Payment Placeholder", upiId: "UPI ID: yourupiid@bank", paymentVerify: "Payment confirmation will be shared after verification.", payNow: "Pay Now", whatsappPayment: "WhatsApp Payment Confirmation",
    bookingEyebrow: "Book Class", bookingTitle: "Send your booking request instantly", fieldName: "Name", fieldMobile: "Phone number", fieldAge: "Age", fieldGender: "Gender", fieldProgram: "Program", fieldTime: "Preferred timing", fieldLanguage: "Language", fieldMessage: "Message", bookClass: "Book Class", whatsappBooking: "WhatsApp Booking", bookingConfirmation: "Booking request ready. We will contact you soon.",
    galleryEyebrow: "Gallery", galleryTitle: "Class moments, transformations and event memories", faqEyebrow: "FAQ", faqTitle: "Before you begin", contactEyebrow: "Contact", contactTitle: "Start your CYA journey", contactText: "Message for online/offline classes, personal training, group batches and choreography.", emailNow: "Email", callNow: "Call Now", footerText: "Yoga | Zumba | Dance | Wellness",
    benefit: "Benefit", level: "Level", duration: "Duration", tips: "Tip", includes: "Includes", goals: "Goals", support: "Practice Support", guidance: "Daily Guidance"
  },
  hi: {
    brandSub: "प्रीमियम वेलनेस स्टूडियो", navHome: "होम", navYoga: "योग", navZumba: "ज़ुम्बा", navDance: "डांस", navWellbeing: "वेलनेस", navPlans: "प्लान", navBook: "बुक", navGallery: "गैलरी", navContact: "संपर्क",
    heroEyebrow: "लक्जरी मूवमेंट, भारतीय आत्मा", heroTitle: "CYA", heroVision: "See Your Agility", heroSubtitle: "इंस्टाग्राम बुकिंग के लिए प्रीमियम योग, ज़ुम्बा, डांस कोरियोग्राफी और वेलनेस गाइडेंस।", bookTrial: "ट्रायल क्लास बुक करें", whatsappJoin: "WhatsApp से जुड़ें", heroStat1: "मुख्य प्रोग्राम", heroStat2: "भाषाएं", heroStat3: "ट्रायल क्लास",
    yogaEyebrow: "योग डैशबोर्ड", yogaTitle: "एनिमेटेड आसन, प्राणायाम, मुद्रा और नोट्स स्टूडियो", yogaIntro: "कैटेगरी टैप करें और प्रैक्टिस कार्ड, टिप्स, कठिनाई, समय और प्रीमियम नोट्स देखें।", materialsEyebrow: "प्रीमियम नोट्स", materialsTitle: "डाउनलोड गाइड केवल सब्सक्राइब्ड कैंडिडेट्स के लिए हैं।", materialsLocked: "प्रीमियम योग मटेरियल और वेलनेस नोट्स के लिए सब्सक्राइब करें।", materialsUnlocked: "प्रीमियम एक्सेस अनलॉक। अब नोट्स डाउनलोड कर सकते हैं।", previewMaterials: "मटेरियल प्रीव्यू", unlockMaterials: "अनलॉक करें", downloadNotes: "नोट्स डाउनलोड करें",
    zumbaEyebrow: "ज़ुम्बा एनर्जी", zumbaTitle: "प्रीमियम मूवमेंट फ्लो के साथ वाइब्रेंट कार्डियो", danceEyebrow: "डांस कोरियोग्राफी", danceTitle: "वेडिंग, स्कूल और इवेंट के लिए स्टेज-रेडी कोरियोग्राफी", wellbeingEyebrow: "हेल्थ और वेलनेस", wellbeingTitle: "महिला, पुरुष, बच्चे और बुजुर्गों के लिए वेलनेस डैशबोर्ड", medicalNote: "यह शैक्षिक फिटनेस गाइडेंस है। मेडिकल कंडीशन में डॉक्टर से सलाह लें।",
    scheduleEyebrow: "क्लास टाइमिंग", scheduleTitle: "प्रोफेशनल वीकली शेड्यूल", toolsEyebrow: "वेलनेस टूल्स", toolsTitle: "कंसिस्टेंसी के लिए छोटे डेली ट्रैकर्स", bmiTitle: "BMI कैलकुलेटर", waterTitle: "वॉटर इंटेक", timerTitle: "मेडिटेशन टाइमर", progressTitle: "प्रोग्रेस ट्रैकर", progressText: "वीकली मूवमेंट गोल: 65%", calculate: "कैलकुलेट", addGlass: "ग्लास जोड़ें", startTimer: "स्टार्ट",
    trainerEyebrow: "अपनी ट्रेनर से मिलें", trainerTitle: "ग्रेसफुल भारतीय फिटनेस स्टाइल में फ्रेंडली गाइडेंस", trainerText: "क्लियर रूटीन, बिगिनर-फ्रेंडली पेसिंग और वार्म अकाउंटेबिलिटी के साथ योग, ज़ुम्बा, कोरियोग्राफी और वेलनेस कोचिंग।", cert1: "योग इंस्ट्रक्शन", cert2: "डांस कोरियोग्राफी", cert3: "वेलनेस गाइडेंस",
    plansEyebrow: "सब्सक्रिप्शन प्लान", plansTitle: "WhatsApp पेमेंट फ्लो के साथ प्रीमियम प्लान", selectedPlan: "चुना हुआ प्लान", upiTitle: "UPI पेमेंट प्लेसहोल्डर", upiId: "UPI ID: yourupiid@bank", paymentVerify: "पेमेंट कन्फर्मेशन वेरिफिकेशन के बाद शेयर होगा।", payNow: "पे करें", whatsappPayment: "WhatsApp पेमेंट कन्फर्मेशन",
    bookingEyebrow: "क्लास बुक", bookingTitle: "अपनी बुकिंग रिक्वेस्ट तुरंत भेजें", fieldName: "नाम", fieldMobile: "फोन नंबर", fieldAge: "उम्र", fieldGender: "जेंडर", fieldProgram: "प्रोग्राम", fieldTime: "पसंदीदा समय", fieldLanguage: "भाषा", fieldMessage: "मैसेज", bookClass: "क्लास बुक करें", whatsappBooking: "WhatsApp बुकिंग", bookingConfirmation: "बुकिंग रिक्वेस्ट तैयार है। हम जल्द संपर्क करेंगे।",
    galleryEyebrow: "गैलरी", galleryTitle: "क्लास मोमेंट्स, ट्रांसफॉर्मेशन और इवेंट यादें", faqEyebrow: "FAQ", faqTitle: "शुरू करने से पहले", contactEyebrow: "संपर्क", contactTitle: "CYA यात्रा शुरू करें", contactText: "ऑनलाइन/ऑफलाइन क्लास, पर्सनल ट्रेनिंग, ग्रुप बैच और कोरियोग्राफी के लिए मैसेज करें।", emailNow: "ईमेल", callNow: "कॉल करें", footerText: "Yoga | Zumba | Dance | Wellness",
    benefit: "लाभ", level: "लेवल", duration: "समय", tips: "टिप", includes: "शामिल", goals: "लक्ष्य", support: "प्रैक्टिस सपोर्ट", guidance: "डेली गाइडेंस"
  },
  kn: {
    brandSub: "ಪ್ರೀಮಿಯಂ ವೆಲ್‌ನೆಸ್ ಸ್ಟುಡಿಯೋ", navHome: "ಹೋಮ್", navYoga: "ಯೋಗ", navZumba: "ಜುಂಬಾ", navDance: "ನೃತ್ಯ", navWellbeing: "ಕ್ಷೇಮ", navPlans: "ಪ್ಲಾನ್", navBook: "ಬುಕ್", navGallery: "ಗ್ಯಾಲರಿ", navContact: "ಸಂಪರ್ಕ",
    heroEyebrow: "ಲಕ್ಸುರಿ ಮೂವ್ಮೆಂಟ್, ಭಾರತೀಯ ಆತ್ಮ", heroTitle: "CYA", heroVision: "See Your Agility", heroSubtitle: "ಇನ್‌ಸ್ಟಾಗ್ರಾಂ ಬುಕಿಂಗ್‌ಗಾಗಿ ಪ್ರೀಮಿಯಂ ಯೋಗ, ಜುಂಬಾ, ನೃತ್ಯ ಕೊರಿಯೋಗ್ರಫಿ ಮತ್ತು ಕ್ಷೇಮ ಮಾರ್ಗದರ್ಶನ.", bookTrial: "ಟ್ರಯಲ್ ಕ್ಲಾಸ್ ಬುಕ್ ಮಾಡಿ", whatsappJoin: "WhatsApp ಮೂಲಕ ಸೇರಿ", heroStat1: "ಮುಖ್ಯ ಪ್ರೋಗ್ರಾಂಗಳು", heroStat2: "ಭಾಷೆಗಳು", heroStat3: "ಟ್ರಯಲ್ ಕ್ಲಾಸ್",
    yogaEyebrow: "ಯೋಗ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್", yogaTitle: "ಆನಿಮೇಟೆಡ್ ಆಸನ, ಪ್ರಾಣಾಯಾಮ, ಮುದ್ರೆ ಮತ್ತು ಟಿಪ್ಪಣಿಗಳು", yogaIntro: "ಪ್ರಾಕ್ಟಿಸ್ ಕಾರ್ಡ್, ಟಿಪ್ಸ್, ಮಟ್ಟ, ಸಮಯ ಮತ್ತು ಪ್ರೀಮಿಯಂ ಟಿಪ್ಪಣಿಗಳಿಗಾಗಿ ಕ್ಯಾಟಗರಿ ಟ್ಯಾಪ್ ಮಾಡಿ.", materialsEyebrow: "ಪ್ರೀಮಿಯಂ ಟಿಪ್ಪಣಿಗಳು", materialsTitle: "ಡೌನ್‌ಲೋಡ್ ಗೈಡ್‌ಗಳು ಸಬ್ಸ್ಕ್ರೈಬ್ ಮಾಡಿದವರಿಗೆ ಮಾತ್ರ.", materialsLocked: "ಪ್ರೀಮಿಯಂ ಯೋಗ ಮಟೀರಿಯಲ್ ಮತ್ತು ವೆಲ್‌ನೆಸ್ ಟಿಪ್ಪಣಿಗಳಿಗೆ ಸಬ್ಸ್ಕ್ರೈಬ್ ಮಾಡಿ.", materialsUnlocked: "ಪ್ರೀಮಿಯಂ ಆಕ್ಸೆಸ್ ಅನ್ಲಾಕ್. ಈಗ ಟಿಪ್ಪಣಿಗಳನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಬಹುದು.", previewMaterials: "ಮಟೀರಿಯಲ್ ಪ್ರಿವ್ಯೂ", unlockMaterials: "ಅನ್ಲಾಕ್ ಮಾಡಿ", downloadNotes: "ಟಿಪ್ಪಣಿಗಳು ಡೌನ್‌ಲೋಡ್",
    zumbaEyebrow: "ಜುಂಬಾ ಎನರ್ಜಿ", zumbaTitle: "ಪ್ರೀಮಿಯಂ ಮೂವ್ಮೆಂಟ್ ಫ್ಲೋ ಇರುವ ಕಾರ್ಡಿಯೋ", danceEyebrow: "ನೃತ್ಯ ಕೊರಿಯೋಗ್ರಫಿ", danceTitle: "ಮದುವೆ, ಶಾಲೆ ಮತ್ತು ಈವೆಂಟ್‌ಗಳಿಗೆ ಸ್ಟೇಜ್-ರೆಡಿ ಕೊರಿಯೋಗ್ರಫಿ", wellbeingEyebrow: "ಆರೋಗ್ಯ ಮತ್ತು ಕ್ಷೇಮ", wellbeingTitle: "ಮಹಿಳೆ, ಪುರುಷ, ಮಕ್ಕಳು ಮತ್ತು ಹಿರಿಯರ ಕ್ಷೇಮ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್", medicalNote: "ಇದು ಶೈಕ್ಷಣಿಕ ಫಿಟ್ನೆಸ್ ಮಾರ್ಗದರ್ಶನ ಮಾತ್ರ. ವೈದ್ಯಕೀಯ ಸ್ಥಿತಿಯಲ್ಲಿ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
    scheduleEyebrow: "ಕ್ಲಾಸ್ ಸಮಯ", scheduleTitle: "ಪ್ರೊಫೆಷನಲ್ ವಾರದ ಶೆಡ್ಯೂಲ್", toolsEyebrow: "ವೆಲ್‌ನೆಸ್ ಟೂಲ್ಸ್", toolsTitle: "ಕಾನ್ಸಿಸ್ಟೆನ್ಸಿಗೆ ಸಣ್ಣ ದಿನನಿತ್ಯದ ಟ್ರ್ಯಾಕರ್ಸ್", bmiTitle: "BMI ಕ್ಯಾಲ್ಕುಲೇಟರ್", waterTitle: "ನೀರು ಸೇವನೆ", timerTitle: "ಧ್ಯಾನ ಟೈಮರ್", progressTitle: "ಪ್ರಗತಿ ಟ್ರ್ಯಾಕರ್", progressText: "ವಾರದ ಮೂವ್ಮೆಂಟ್ ಗುರಿ: 65%", calculate: "ಕ್ಯಾಲ್ಕುಲೇಟ್", addGlass: "ಗ್ಲಾಸ್ ಸೇರಿಸಿ", startTimer: "ಸ್ಟಾರ್ಟ್",
    trainerEyebrow: "ನಿಮ್ಮ ಟ್ರೈನರ್", trainerTitle: "ಗ್ರೇಸ್‌ಫುಲ್ ಭಾರತೀಯ ಫಿಟ್ನೆಸ್ ಶೈಲಿಯ ಸ್ನೇಹಪೂರ್ಣ ಮಾರ್ಗದರ್ಶನ", trainerText: "ಕ್ಲಿಯರ್ ರೂಟಿನ್, ಆರಂಭಿಕರಿಗೆ ಸರಿಯಾದ ವೇಗ ಮತ್ತು ಹೊಣೆಗಾರಿಕೆಯೊಂದಿಗೆ ಯೋಗ, ಜುಂಬಾ, ಕೊರಿಯೋಗ್ರಫಿ ಮತ್ತು ವೆಲ್‌ನೆಸ್ ಕೋಚಿಂಗ್.", cert1: "ಯೋಗ ಇನ್ಸ್ಟ್ರಕ್ಷನ್", cert2: "ನೃತ್ಯ ಕೊರಿಯೋಗ್ರಫಿ", cert3: "ಕ್ಷೇಮ ಮಾರ್ಗದರ್ಶನ",
    plansEyebrow: "ಸಬ್ಸ್ಕ್ರಿಪ್ಶನ್ ಪ್ಲಾನ್", plansTitle: "WhatsApp ಪೇಮೆಂಟ್ ಫ್ಲೋ ಇರುವ ಪ್ರೀಮಿಯಂ ಪ್ಲಾನ್‌ಗಳು", selectedPlan: "ಆಯ್ದ ಪ್ಲಾನ್", upiTitle: "UPI ಪೇಮೆಂಟ್ ಪ್ಲೇಸ್‌ಹೋಲ್ಡರ್", upiId: "UPI ID: yourupiid@bank", paymentVerify: "ಪರಿಶೀಲನೆಯ ನಂತರ ಪೇಮೆಂಟ್ ದೃಢೀಕರಣ ಹಂಚಲಾಗುತ್ತದೆ.", payNow: "ಪೇ ಮಾಡಿ", whatsappPayment: "WhatsApp ಪೇಮೆಂಟ್ ದೃಢೀಕರಣ",
    bookingEyebrow: "ಕ್ಲಾಸ್ ಬುಕ್", bookingTitle: "ನಿಮ್ಮ ಬುಕಿಂಗ್ ವಿನಂತಿಯನ್ನು ತಕ್ಷಣ ಕಳುಹಿಸಿ", fieldName: "ಹೆಸರು", fieldMobile: "ಫೋನ್ ಸಂಖ್ಯೆ", fieldAge: "ವಯಸ್ಸು", fieldGender: "ಲಿಂಗ", fieldProgram: "ಪ್ರೋಗ್ರಾಂ", fieldTime: "ಇಷ್ಟದ ಸಮಯ", fieldLanguage: "ಭಾಷೆ", fieldMessage: "ಸಂದೇಶ", bookClass: "ಕ್ಲಾಸ್ ಬುಕ್ ಮಾಡಿ", whatsappBooking: "WhatsApp ಬುಕಿಂಗ್", bookingConfirmation: "ಬುಕಿಂಗ್ ವಿನಂತಿ ಸಿದ್ಧವಾಗಿದೆ. ನಾವು ಶೀಘ್ರದಲ್ಲೇ ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.",
    galleryEyebrow: "ಗ್ಯಾಲರಿ", galleryTitle: "ಕ್ಲಾಸ್ ಕ್ಷಣಗಳು, ಟ್ರಾನ್ಸ್‌ಫಾರ್ಮೇಶನ್ ಮತ್ತು ಈವೆಂಟ್ ನೆನಪುಗಳು", faqEyebrow: "FAQ", faqTitle: "ಪ್ರಾರಂಭಿಸುವ ಮೊದಲು", contactEyebrow: "ಸಂಪರ್ಕ", contactTitle: "CYA ಪ್ರಯಾಣ ಪ್ರಾರಂಭಿಸಿ", contactText: "ಆನ್‌ಲೈನ್/ಆಫ್‌ಲೈನ್ ಕ್ಲಾಸ್, ಪರ್ಸನಲ್ ಟ್ರೈನಿಂಗ್, ಗುಂಪು ಬ್ಯಾಚ್ ಮತ್ತು ಕೊರಿಯೋಗ್ರಫಿಗೆ ಮೆಸೇಜ್ ಮಾಡಿ.", emailNow: "ಇಮೇಲ್", callNow: "ಕಾಲ್ ಮಾಡಿ", footerText: "Yoga | Zumba | Dance | Wellness",
    benefit: "ಪ್ರಯೋಜನ", level: "ಮಟ್ಟ", duration: "ಸಮಯ", tips: "ಟಿಪ್", includes: "ಒಳಗೊಂಡಿದೆ", goals: "ಗುರಿಗಳು", support: "ಅಭ್ಯಾಸ ಸಹಾಯ", guidance: "ದೈನಂದಿನ ಮಾರ್ಗದರ್ಶನ"
  }
};

const data = {
  services: [
    ["Yoga", "Animated asanas, pranayama, mudras and premium notes.", "assets/yoga-tree.svg", "#yoga"],
    ["Zumba", "Energetic beats, strength, calm and fat burn classes.", "assets/zumba.svg", "#zumba"],
    ["Dance", "Bride, groom, school, Bollywood and event choreography.", "assets/dance.svg", "#dance"],
    ["Wellbeing", "Women, men, children and elder wellness dashboards.", "assets/wellness-women.svg", "#wellbeing"]
  ],
  yogaCats: [
    ["hatha", "Hatha Yoga"], ["power", "Power Yoga"], ["meditation", "Meditation Yoga"], ["flexibility", "Flexibility Yoga"], ["weightloss", "Weight Loss Yoga"], ["hormonal", "Hormonal Balance Yoga"], ["stress", "Stress Relief Yoga"]
  ],
  yoga: [
    ["hatha", "About Hatha Yoga", "Slow alignment practice", "Stiffness, posture and calm mobility", "All ages", "50 min", "assets/yoga-tree.svg", "Best for beginners and lifestyle reset."],
    ["hatha", "Tadasana", "Mountain Pose", "Posture and balance", "Beginner", "2 min", "assets/yoga-tree.svg", "Stand tall and ground feet."],
    ["hatha", "Vrikshasana", "Tree Pose", "Focus and stability", "Beginner", "1 min each side", "assets/yoga-tree.svg", "Use wall support if needed."],
    ["hatha", "Vajrasana", "Thunderbolt Pose", "Digestion and breathing posture", "Beginner", "3 min", "assets/pranayama.svg", "Use cushion under knees."],
    ["power", "Power Flow", "Strength sequence", "Energy, stamina and metabolic support", "Intermediate", "50 min", "assets/yoga-warrior.svg", "Move with breath, not speed."],
    ["power", "Surya Namaskar", "Sun Salutation", "Full body warm-up", "Beginner", "5 rounds", "assets/yoga-warrior.svg", "Move with breath."],
    ["power", "Navasana", "Boat Pose", "Core strength", "Intermediate", "30 sec", "assets/yoga-boat.svg", "Keep spine lifted."],
    ["meditation", "Meditation Yoga", "Breath + stillness", "Stress relief and nervous system calm", "All levels", "30 min", "assets/pranayama.svg", "Soft eyes and slow exhale."],
    ["meditation", "Padmasana", "Lotus Pose", "Meditation stability", "Advanced", "3 min", "assets/pranayama.svg", "Skip if knees hurt."],
    ["flexibility", "Flexibility Flow", "Mobility practice", "Low flexibility, stiffness and joint range", "All levels", "50 min", "assets/yoga-warrior.svg", "Never force a stretch."],
    ["flexibility", "Trikonasana", "Triangle Pose", "Side stretch and spine mobility", "Intermediate", "45 sec", "assets/yoga-warrior.svg", "Open chest gently."],
    ["flexibility", "Bhujangasana", "Cobra Pose", "Spine strength", "Intermediate", "30 sec", "assets/yoga-cobra.svg", "Lift without strain."],
    ["weightloss", "Weight Loss Yoga", "Flow + core + breath", "Belly fat, stamina and habit consistency", "All levels", "50 min", "assets/zumba.svg", "Pair with food discipline."],
    ["weightloss", "Setubandhasana", "Bridge Pose", "Back support and glute activation", "Intermediate", "45 sec", "assets/yoga-cobra.svg", "Press feet evenly."],
    ["hormonal", "Hormonal Balance Yoga", "Gentle endocrine support", "Women wellness, stress and cycle awareness", "Women", "50 min", "assets/wellness-women.svg", "Use with medical guidance."],
    ["hormonal", "Pawanmuktasana", "Wind-Relieving Pose", "Digestion support", "Intermediate", "1 min", "assets/yoga-tree.svg", "Hug knees softly."],
    ["stress", "Stress Relief Yoga", "Breathing + restorative poses", "Fatigue, tiredness and sleep support", "All levels", "45 min", "assets/pranayama.svg", "Exhale longer than inhale."],
    ["stress", "Bhramari", "Humming Breath", "Stress relaxation", "All levels", "3 min", "assets/pranayama.svg", "Hum softly."],
    ["stress", "Nadi Shodhana", "Channel Cleansing", "Mental clarity", "All levels", "5 min", "assets/pranayama.svg", "Sit tall."],
    ["meditation", "Sukhasana Meditation", "Easy Seat", "Stillness", "All levels", "5 min", "assets/pranayama.svg", "Relax the face."],
    ["meditation", "Yoga Nidra", "Guided Rest", "Recovery", "All levels", "15 min", "assets/pranayama.svg", "Lie comfortably."],
    ["eating", "Balanced Plate", "Indian Meals", "Protein, fiber and hydration", "Daily", "Every meal", "assets/eating.svg", "Add dal, curd or sprouts."],
    ["eating", "Light Dinner", "Sleep Support", "Digestion and energy", "Daily", "Night", "assets/eating.svg", "Eat simple and early."],
    ["notes", "Premium Yoga Notes", "Materials", "Asanas, pranayama and wellness guides", "Subscribed", "Anytime", "assets/eating.svg", "Unlock with subscription."]
  ],
  zumba: [
    ["Beginner Zumba", "Easy steps, coordination and confidence counts.", "assets/zumba.svg"],
    ["Fat Burn Zumba", "Cardio movement, sweat and belly-fat support.", "assets/zumba.svg"],
    ["Strength Zumba", "Legs, core and stamina training.", "assets/zumba.svg"],
    ["Calm Zumba", "Low impact recovery day flow with gentle rhythm.", "assets/pranayama.svg"]
  ],
  dance: [
    ["Wedding Choreography", ["Bride Solo", "Groom Solo", "Couple Dance", "Bridesmaid Dance", "Family Dance"], "assets/dance.svg"],
    ["Group/Event Dance", ["Welcome Dance", "School Group Dance", "Holi Dance", "Event Dance"], "assets/yoga-warrior.svg"],
    ["Bollywood Dance", ["Reels", "Stage routine", "Family performance", "Party choreography"], "assets/zumba.svg"],
    ["Competition Dance", ["Expressions", "Formations", "Clean counts", "Practice schedule"], "assets/dance.svg"]
  ],
  wellness: {
    women: ["Women Wellness", "assets/wellness-women.svg", ["PCOD", "PCOS", "PMS", "Fertility wellness", "Slimming", "Belly fat reduction", "Hair growth", "Hair fall reduction", "Hormonal balance"], ["Yoga asanas", "Pranayama", "Mudras", "Eating habits", "Hydration", "Sleep guidance"]],
    men: ["Men Wellness", "assets/wellness-men.svg", ["Hair fall", "Fatigue", "Tiredness", "Diabetes support", "Low energy", "Low sperm count", "Fertility wellness", "Liver fat reduction support", "Belly fat reduction", "Flexibility", "Mobility", "Posture correction", "Stress management"], ["Hatha Yoga", "Power Yoga", "Pranayama", "Mudras", "Diet habits", "Walking routine", "Wellness guidance"]],
    children: ["Children Wellness", "assets/wellness-child.svg", ["Height support", "Focus support", "Eye wellness", "Immunity", "Posture correction"], ["Simple yoga", "Fun yoga cards", "Pranayama", "Mudras"]],
    elders: ["Elder Wellness", "assets/wellness-elder.svg", ["Bending exercises", "Chair yoga", "Breathing exercises", "Walking exercises", "Joint flexibility"], ["Pranayama", "Mudras", "Gentle yoga poses"]]
  },
  schedule: [
    ["Morning Classes", "6:00 AM - 6:50 AM", "7:00 AM - 7:50 AM", "assets/pranayama.svg", "Only 5 seats left"],
    ["Evening Classes", "5:00 PM - 5:50 PM", "6:00 PM - 6:50 PM", "assets/yoga-tree.svg", "Only 4 seats left"],
    ["Weekend Special", "Saturday & Sunday", "90 Minutes Premium Sessions", "assets/wellness-women.svg", "Limited seats"]
  ],
  plans: [
    ["Trial Class", "₹199", ["1 trial session", "Yoga / Zumba / Dance choice"], "Book Trial Class"],
    ["Monthly Fitness Plan", "₹1,999/person/month", ["Yoga sessions", "Zumba sessions", "Dance fitness", "Wellbeing guidance", "Basic diet tips", "Monthly progress support"], "Subscribe Monthly"],
    ["Personal Training", "₹4,999/month", ["Personal guidance", "Customized wellness plan", "Flexible timing", "Progress tracking"], "Join Personal Training"],
    ["Wedding Choreography", "Starting ₹4,999", ["Bride / groom / group choreography", "Song support", "Practice schedule"], "Book Choreography"]
  ],
  gallery: [
    ["Yoga Classes", "Premium calm practice space.", "assets/yoga-tree.svg"],
    ["Zumba Sessions", "Energetic fitness memories.", "assets/zumba.svg"],
    ["Dance Events", "Stage-ready routines.", "assets/dance.svg"],
    ["Transformations", "Small progress, big confidence.", "assets/wellness-women.svg"],
    ["Children Fitness", "Fun posture and focus support.", "assets/wellness-child.svg"]
  ],
  faq: [
    ["Can beginners join?", "Yes. Classes can be paced for beginners with safe modifications."],
    ["Is payment online?", "For now, payment details are shared through WhatsApp after plan selection."],
    ["Are health concerns cured here?", "No. This is wellness guidance only and should be paired with medical advice."],
    ["Can I book dance choreography?", "Yes. Bride, groom, school, Bollywood and event choreography can be booked."]
  ]
};

const mega = {
  yoga: ["Hatha Yoga", "Power Yoga", "Meditation Yoga", "Premium Notes"],
  zumba: ["Beginner Zumba", "Fat Burn Zumba", "Strength Zumba", "Calm Zumba"],
  dance: ["Wedding Choreography", "Group/Event Dance", "Bollywood Dance", "Competition Dance"],
  wellbeing: ["Women Wellness", "Men Wellness", "Children Wellness", "Elder Wellness"],
  plans: ["Trial Class", "Monthly Plan", "Personal Training"]
};

function t(key) { return dict[currentLang]?.[key] || dict.en[key] || key; }
function wa(text) { return `https://wa.me/${CONTACT.phone.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`; }
function pulseLogo() { const mark = document.getElementById("brandMark"); mark.classList.add("pulse"); setTimeout(() => mark.classList.remove("pulse"), 520); }

function renderStatic() {
  document.querySelectorAll("[data-i18n]").forEach(node => node.textContent = t(node.dataset.i18n));
}

function renderFlow(targetId, items) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = items.map((item, index) => `<div class="flow-step"><strong>${String(index + 1).padStart(2, "0")}</strong>${item}</div>`).join("");
}

function card(title, text, img, cls = "program-card") {
  return `<article class="${cls}"><img src="${img}" alt="${title}"><h3>${title}</h3><p>${text}</p></article>`;
}

function renderServices() {
  document.getElementById("serviceGrid").innerHTML = data.services.map(s => `
    <article class="service-card"><img src="${s[2]}" alt="${s[0]}"><h3>${s[0]}</h3><p>${s[1]}</p><a class="card-link" href="${s[3]}" data-section-link="${s[3].slice(1)}"></a></article>
  `).join("");
}

function renderYoga() {
  document.getElementById("yogaCategoryStrip").innerHTML = data.yogaCats.map(c => `<button class="chip ${c[0] === activeYogaCategory ? "active" : ""}" data-yoga-cat="${c[0]}">${c[1]}</button>`).join("");
  const current = data.yogaCats.find(c => c[0] === activeYogaCategory)?.[1] || "Yoga";
  renderFlow("yogaFlow", [current, "Introduction", "Benefits", "Asanas", "Breathing", "Timings", "Book Session"]);
  document.getElementById("asanaGrid").innerHTML = data.yoga.filter(y => y[0] === activeYogaCategory).map(y => `
    <article class="asana-card" data-open-booking><img src="${y[6]}" alt="${y[1]}"><h3>${y[1]}</h3><p><strong>${y[2]}</strong></p><p>${t("benefit")}: ${y[3]}</p><p>${t("tips")}: ${y[7]}</p><div class="meta-row"><span>${t("level")}: ${y[4]}</span><span>${t("duration")}: ${y[5]}</span></div></article>
  `).join("");
}

function renderZumba() {
  renderFlow("zumbaFlow", ["Choose Level", "Warm-up", "Movement", "Calories", "Schedule", "Book"]);
  document.getElementById("zumbaGrid").innerHTML = data.zumba.map(z => `<article class="program-card" data-open-booking><img src="${z[2]}" alt="${z[0]}"><h3>${z[0]}</h3><p>${z[1]}</p><div class="meta-row"><span>35-50 min</span><span>Trainer notes</span></div></article>`).join("");
}
function renderDance() {
  renderFlow("danceFlow", ["Select Style", "Music Style", "Session Plan", "Practice", "Stage Ready", "Book"]);
  document.getElementById("danceGrid").innerHTML = data.dance.map(d => `<article class="dance-card" data-open-booking><img src="${d[2]}" alt="${d[0]}"><h3>${d[0]}</h3><p>Premium choreography with counts, expressions and practice support.</p><ul>${d[1].map(x => `<li>${x}</li>`).join("")}</ul></article>`).join("");
}

function renderWellness() {
  const keys = Object.keys(data.wellness);
  document.getElementById("wellnessTabs").innerHTML = keys.map(k => `<button class="tab-button ${k === activeWellness ? "active" : ""}" data-wellness="${k}">${data.wellness[k][0]}</button>`).join("");
  const w = data.wellness[activeWellness];
  renderFlow("wellnessFlow", [w[0], "Concerns", "Yoga", "Breathing", "Diet", "Progress"]);
  document.getElementById("wellnessPanel").innerHTML = `<div class="wellness-hero"><img src="${w[1]}" alt="${w[0]}"><h3>${w[0]}</h3><p>${t("wellbeingTitle")}</p></div><div class="wellness-content"><article class="wellness-card"><h3>${t("goals")}</h3><ul>${w[2].map(x => `<li>${x}</li>`).join("")}</ul></article><article class="wellness-card"><h3>${t("support")}</h3><ul>${w[3].map(x => `<li>${x}</li>`).join("")}</ul></article><article class="wellness-card"><h3>${t("guidance")}</h3><ul><li>Hydration</li><li>Sleep guidance</li><li>Healthy eating</li><li>Progress support</li></ul></article></div>`;
}

function renderSchedule() { document.getElementById("scheduleGrid").innerHTML = data.schedule.map(s => `<article class="schedule-card"><img src="${s[3]}" alt="${s[0]}"><h3>${s[0]}</h3><p>${s[1]}</p><p>${s[2]}</p><div class="meta-row"><span>${s[4]}</span><span>Starts soon</span></div></article>`).join(""); }
function renderPlans() { document.getElementById("pricingGrid").innerHTML = data.plans.map((p, i) => `<article class="pricing-card ${i === 1 ? "featured" : ""}"><h3>${p[0]}</h3><span class="price">${p[1]}</span><strong>${t("includes")}</strong><ul>${p[2].map(x => `<li>${x}</li>`).join("")}</ul><button class="button primary" data-plan="${p[0]}">${p[3]}</button></article>`).join(""); }
function renderGallery() { document.getElementById("galleryTrack").innerHTML = data.gallery.map(g => `<article class="gallery-card"><img src="${g[2]}" alt="${g[0]}"><div><h3>${g[0]}</h3><p>${g[1]}</p></div></article>`).join(""); }
function renderFaq() { document.getElementById("faqList").innerHTML = data.faq.map((f, i) => `<article class="faq-item"><button data-faq="${i}"><span>${f[0]}</span><span>+</span></button><p>${f[1]}</p></article>`).join(""); }

function openPayment(planName) {
  const plan = data.plans.find(p => p[0] === planName) || data.plans[1];
  selectedPlan = plan;
  document.getElementById("selectedPlanTitle").textContent = plan[0];
  document.getElementById("selectedPlanPrice").textContent = plan[1];
  document.getElementById("paymentMethods").innerHTML = ["UPI", "Razorpay", "Stripe", "PayPal", "Google Pay", "PhonePe"].map(m => `<button class="payment-method ${m === selectedPayment ? "active" : ""}" data-payment="${m}">${m}</button>`).join("");
  const msg = `Hi, I want to book the ${plan[0]} for ${plan[1]}. Please share payment details. Preferred payment: ${selectedPayment}.`;
  document.getElementById("payNowBtn").href = wa(msg);
  document.getElementById("paymentWhatsappBtn").href = wa(`Hi, I selected ${plan[0]} (${plan[1]}) and want to confirm payment details.`);
  const existingNote = document.querySelector(".checkout-note");
  if (existingNote) existingNote.remove();
  document.querySelector(".upi-box").insertAdjacentHTML("beforeend", `<div class="checkout-note">Invoice preview: ${plan[0]} - ${plan[1]} - Payment status: Pending verification</div>`);
  document.getElementById("paymentModal").classList.add("open");
  document.getElementById("paymentModal").setAttribute("aria-hidden", "false");
}

function closeModals() {
  document.querySelectorAll(".modal").forEach(m => { m.classList.remove("open"); m.setAttribute("aria-hidden", "true"); });
}

function updateMaterials() {
  document.getElementById("materialsStatus").textContent = subscribed ? t("materialsUnlocked") : t("materialsLocked");
  document.querySelectorAll(".locked-download").forEach(a => a.classList.toggle("locked", !subscribed));
}

function setupLinks() {
  document.querySelectorAll(".whatsapp-link").forEach(a => a.href = "https://wa.me/917996213245");
  document.getElementById("instagramLink").href = CONTACT.instagram;
  document.getElementById("phoneLink").href = `tel:${CONTACT.phone}`;
  document.getElementById("emailLink").href = `mailto:${CONTACT.email}`;
}

function setupBooking() {
  const form = document.getElementById("bookingForm");
  const waBtn = document.getElementById("bookingWhatsappBtn");
  const message = () => {
    const d = new FormData(form);
    return `Hi CYA, I want to book a class.\nName: ${d.get("name") || ""}\nMobile: ${d.get("mobile") || ""}\nAge: ${d.get("age") || ""}\nGender: ${d.get("gender") || ""}\nProgram: ${d.get("program") || ""}\nPreferred Time: ${d.get("time") || ""}\nLanguage: ${d.get("language") || ""}\nMessage: ${d.get("message") || ""}`;
  };
  form.addEventListener("input", () => waBtn.href = wa(message()));
  form.addEventListener("submit", e => {
    e.preventDefault();
    saveLead(new FormData(form));
    document.getElementById("bookingConfirmation").hidden = false;
    waBtn.href = wa(message());
    pulseLogo();
  });
  waBtn.href = wa("Hi CYA, I want to book a class.");
}

function saveLead(formData) {
  const lead = {
    name: formData.get("name") || "",
    program: formData.get("program") || "",
    time: formData.get("time") || "",
    payment: "Pending",
    mobile: formData.get("mobile") || ""
  };
  const leads = JSON.parse(localStorage.getItem("cyaLeads") || "[]");
  leads.unshift(lead);
  localStorage.setItem("cyaLeads", JSON.stringify(leads.slice(0, 25)));
  renderLeads();
}

function renderLeads() {
  const leads = JSON.parse(localStorage.getItem("cyaLeads") || "[]");
  document.getElementById("leadCount").textContent = `${leads.length} enquiries`;
  document.getElementById("leadTableBody").innerHTML = leads.length ? leads.map(l => `<tr><td>${l.name}</td><td>${l.program}</td><td>${l.time}</td><td>${l.payment}</td><td>${l.mobile}</td></tr>`).join("") : `<tr><td colspan="5">No enquiries yet. Submit the booking form to preview CRM records.</td></tr>`;
}

function setupTools() {
  document.getElementById("bmiBtn").addEventListener("click", () => {
    const h = Number(document.getElementById("heightInput").value) / 100;
    const w = Number(document.getElementById("weightInput").value);
    document.getElementById("bmiResult").textContent = h && w ? `BMI: ${(w / (h * h)).toFixed(1)}` : "BMI: --";
  });
  document.getElementById("waterBtn").addEventListener("click", () => {
    waterCount = Math.min(8, waterCount + 1);
    document.getElementById("waterFill").style.width = `${(waterCount / 8) * 100}%`;
    document.getElementById("waterText").textContent = `${waterCount} / 8 glasses`;
  });
  document.getElementById("timerBtn").addEventListener("click", () => {
    if (timerHandle) return;
    timerHandle = setInterval(() => {
      timerSeconds = Math.max(0, timerSeconds - 1);
      const m = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
      const s = String(timerSeconds % 60).padStart(2, "0");
      document.getElementById("timerOrb").textContent = `${m}:${s}`;
      if (!timerSeconds) clearInterval(timerHandle);
    }, 1000);
  });
}

function showMega(section) {
  if (!mega[section]) return;
  document.getElementById("megaMenu").innerHTML = `<div><p class="eyebrow">${section}</p><h3>${section === "yoga" ? "Open curated practice dashboards" : "Explore premium programs"}</h3><ul>${mega[section].map(x => `<li>${x}</li>`).join("")}</ul></div><img src="${section === "dance" ? "assets/dance.svg" : section === "zumba" ? "assets/zumba.svg" : section === "wellbeing" ? "assets/wellness-women.svg" : "assets/yoga-tree.svg"}" alt="">`;
  document.getElementById("megaMenu").classList.add("open");
}

function setupEvents() {
  document.addEventListener("click", e => {
    const yoga = e.target.closest("[data-yoga-cat]");
    if (yoga) { activeYogaCategory = yoga.dataset.yogaCat; renderYoga(); pulseLogo(); }
    const well = e.target.closest("[data-wellness]");
    if (well) { activeWellness = well.dataset.wellness; renderWellness(); pulseLogo(); }
    const plan = e.target.closest("[data-plan], [data-plan-trigger]");
    if (plan) { openPayment(plan.dataset.plan || plan.dataset.planTrigger); }
    const payment = e.target.closest("[data-payment]");
    if (payment) { selectedPayment = payment.dataset.payment; openPayment(selectedPlan?.[0]); }
    const close = e.target.closest("[data-close-modal]");
    if (close || e.target.classList.contains("modal")) closeModals();
    const preview = e.target.closest("#previewMaterialsBtn");
    if (preview) document.getElementById("materialsModal").classList.add("open");
    const faq = e.target.closest("[data-faq]");
    if (faq) faq.closest(".faq-item").classList.toggle("open");
    const sectionLink = e.target.closest("[data-section-link]");
    if (sectionLink) { pulseLogo(); document.body.dataset.theme = sectionLink.dataset.sectionLink; document.getElementById("navLinks").classList.remove("open"); }
    const openBooking = e.target.closest("[data-open-booking]");
    if (openBooking) document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
  });
  document.querySelectorAll(".nav-links a").forEach(a => {
    a.addEventListener("mouseenter", () => showMega(a.dataset.sectionLink));
  });
  document.getElementById("site-header");
  document.querySelector(".site-header").addEventListener("mouseleave", () => document.getElementById("megaMenu").classList.remove("open"));
  document.querySelectorAll(".lang-button").forEach(b => b.addEventListener("click", () => { currentLang = b.dataset.lang; document.querySelectorAll(".lang-button").forEach(x => x.classList.toggle("active", x === b)); renderAll(); }));
  document.getElementById("menuToggle").addEventListener("click", () => document.getElementById("navLinks").classList.toggle("open"));
  document.getElementById("galleryPrev").addEventListener("click", () => document.getElementById("galleryTrack").scrollBy({ left: -330, behavior: "smooth" }));
  document.getElementById("galleryNext").addEventListener("click", () => document.getElementById("galleryTrack").scrollBy({ left: 330, behavior: "smooth" }));
  document.getElementById("backToTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", () => { document.getElementById("backToTop").classList.toggle("show", window.scrollY > 500); updateActiveNav(); }, { passive: true });
  document.getElementById("paymentWhatsappBtn").addEventListener("click", () => { subscribed = true; updateMaterials(); });
  document.getElementById("exportLeadsBtn").addEventListener("click", () => {
    const leads = JSON.parse(localStorage.getItem("cyaLeads") || "[]");
    const csv = ["Name,Class,Timing,Payment,Contact", ...leads.map(l => [l.name, l.program, l.time, l.payment, l.mobile].map(v => `"${String(v).replaceAll('"', '""')}"`).join(","))].join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "cya-enquiries.csv";
    a.click();
    URL.revokeObjectURL(url);
  });
}

function updateActiveNav() {
  const ids = ["home", "yoga", "zumba", "dance", "wellbeing", "plans", "booking", "gallery", "contact"];
  let active = "home";
  ids.forEach(id => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top < 135) active = id; });
  document.querySelectorAll("[data-nav]").forEach(a => a.classList.toggle("active", a.dataset.nav === active));
}

function reveal() {
  const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }), { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(x => obs.observe(x));
}

function renderAll() {
  renderStatic(); renderServices(); renderYoga(); renderZumba(); renderDance(); renderWellness(); renderSchedule(); renderPlans(); renderGallery(); renderFaq(); setupLinks(); updateMaterials(); renderLeads(); updateActiveNav();
}

renderAll();
setupEvents();
setupBooking();
setupTools();
reveal();
