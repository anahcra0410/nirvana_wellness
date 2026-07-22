export const site = {
  name: "Nirvana Wellness Centre",
  tagline: "Ayurvedic & Spa Therapies",
  phone: "(000) 000-0000",
  email: "hello@nirvanawellnesscentre.com",
  location: "By appointment",
  experienceYears: 15,
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export type ServiceCard = {
  title: string;
  description: string;
};

export const featuredServices: ServiceCard[] = [
  {
    title: "Scalp Massage",
    description:
      "Revives the scalp by cleansing, hydrating and energizing with essential oils. Using marma pressure points, the scalp, neck and shoulders are released of all tension — a wonderful way to relax stress along the neck and shoulder lines.",
  },
  {
    title: "Sports Massage",
    description:
      "A form of bodywork used to prevent injuries, prepare the body for athletic activity and maintain optimal condition. Focuses on soft-tissue aches, pain and injuries to reduce stiffness and improve relaxation.",
  },
  {
    title: "Reflexology",
    description:
      "Energizes and relaxes the body through acupressure points on the feet, stimulating circulation and easing soreness for whole-body calm.",
  },
  {
    title: "Udvartana",
    description:
      "An invigorating full-body massage in rhythmic motion using herbal powder or paste. Recommended for skin care, circulation and the removal of toxins, while reducing excess cellulite under the skin.",
  },
  {
    title: "Deep Tissue",
    description:
      "Relieves chronic joint pain from knots, stress-related muscle pain and overworked connective tissue. Increased blood flow and reduced inflammation help healing happen faster.",
  },
  {
    title: "Hot Stone",
    description:
      "Follows the principles of Swedish massage with basalt heated stones to balance the body's energy. Unbinds knots, improves range of motion — highly recommended for fibromyalgia, arthritis and chronic pain.",
  },
  {
    title: "Aromatherapy",
    description:
      "A gentle massage with highly concentrated plant essential oils diluted in massage oil, used medicinally to improve the health of body, mind and spirit.",
  },
  {
    title: "Marma Therapy",
    description:
      "Marma points are energy points used for healing in Ayurveda, connected to the seven chakras. Stimulating them influences the doshas, relieves stiff muscles and boosts circulation.",
  },
];

export type PricedService = {
  title: string;
  price: string;
  description?: string;
  benefits?: string[];
  includes?: string[];
};

export type ServiceGroup = {
  heading: string;
  blurb: string;
  items: PricedService[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    heading: "Spa Therapies",
    blurb:
      "Restorative bodywork that eases tension, improves circulation and invites deep relaxation.",
    items: [
      {
        title: "Scalp Massage",
        price: "30 mins – $45",
        description:
          "Revives the scalp by cleansing, hydrating and energizing with essential oils. Using marma pressure points the scalp, neck and shoulders are relieved of all tension.",
      },
      {
        title: "Reflexology",
        price: "30 | 60 mins – $30 | $60",
        description:
          "Focuses on energizing and relaxing the body through acupressure points, improving blood circulation and easing soreness on the feet.",
      },
      {
        title: "Swedish Massage",
        price: "30 | 60 | 90 mins – $45 | $80 | $120",
        description:
          "The most-requested therapeutic massage to relieve stress and reduce pain. Combines long sweeping motions, kneading and myofascial release techniques.",
      },
      {
        title: "Deep Tissue",
        price: "30 | 60 | 90 mins – $60 | $90 | $140",
        description:
          "Relieves chronic joint pain from knots, stress-related muscle pain and overworked connective tissue (fascia). Increased blood flow and reduced inflammation help healing happen faster.",
      },
      {
        title: "Hot Stone Massage",
        price: "60 | 90 mins – $110 | $130",
        description:
          "Follows the principles of Swedish massage with basalt heated stones to balance the body's energy. Highly recommended for fibromyalgia, arthritis and chronic pain.",
      },
      {
        title: "Prenatal / Postnatal Massage",
        price: "60 | 90 mins – $90 | $140",
        description:
          "Prenatal: reduces back pain and edema, improves sleep and circulation, and relieves fatigue. Postnatal: eases sore spots and muscle tension, regulates hormones and supports recovery with a soft, gentle touch.",
      },
      {
        title: "Aromatherapy",
        price: "60 | 90 mins – $100 | $150",
        description:
          "Essential oils (highly concentrated plant oils) diluted with massage oil. You inhale these molecules or absorb them through the skin to improve the health of body, mind and spirit.",
      },
    ],
  },
  {
    heading: "Ayurvedic Therapies",
    blurb:
      "Traditional treatments rooted in Ayurveda to detoxify, rebalance the doshas and rejuvenate the whole system.",
    items: [
      {
        title: "Ayurvedic Consultations",
        price: "$100 per session",
        description:
          "A thorough examination of the body and its functioning that reveals balances and imbalances, guiding the most suitable therapies for your constitution.",
      },
      {
        title: "Abhayanga & Swedana",
        price: "60 | 90 mins – $105 | $145",
        description:
          "Abhayanga is a warm-oil massage applied from scalp to soles that relieves muscular aches, detoxifies and rejuvenates. Swedana reduces inflammation, improves circulation and supports healing.",
      },
      {
        title: "Swedana (Ayurvedic Herbal Steam)",
        price: "30 mins – $25",
        description:
          "Herbal steam therapy that releases toxins (ama) through the skin, relieves muscular tension, restores flexibility and clears the energy passages.",
      },
      {
        title: "Shirodhara – Ayurvedic Stress Relief",
        price: "30 | 45 mins – $60 | $100",
        description:
          "Warm medicated oil or herb-infused decoction poured continuously over the third eye to soothe mind and body. Beneficial for insomnia, neurological disorders and stress. (Included with scalp massage.)",
      },
      {
        title: "Nasya – Nasal Therapy",
        price: "30 mins – $60",
        description:
          "A cleansing therapy using herbal-infused oil that supports the sinus, nose, throat and head, improves the voice and reduces sinus headaches. (Provided only after Ayurvedic consultation.)",
      },
      {
        title: "Kizhi (Hot Poultice)",
        price: "30 mins – $65",
        description:
          "Heated herbs and medicinal oils tied in cloth bags and applied with gentle massage over marma points. Most beneficial for musculoskeletal disorders and neuro-vasculopathy.",
      },
      {
        title: "Udvartana",
        price: "60 | 90 mins – $135 | $155",
        description:
          "An invigorating rhythmic full-body massage using herbal powder or paste. Recommended for circulation, skin care and removing toxins while reducing cellulite and accumulated fat.",
      },
      {
        title: "Vasti",
        price: "$25",
        description:
          "A detoxifying Panchakarma laxative therapy that purifies the body and removes accumulated toxins. (Provided only after Ayurvedic consultation.)",
      },
      {
        title: "Marma Massage",
        price: "60 | 75 | 90 mins – $95 | $125 | $145",
        description:
          "Stimulates the body's marma energy points connected to the seven chakras to balance the doshas, relieve stiff muscles and boost circulation.",
      },
    ],
  },
  {
    heading: "Signature Therapies",
    blurb:
      "Tailored, multi-modality sessions crafted around your specific condition and goals.",
    items: [
      {
        title: "Geriatric Massage",
        price: "60 | 75 | 90 mins – $80 | $110 | $130",
        description:
          "A gentle touch for seniors that increases blood circulation and lymphatic flow, relieves joint pain and stress, and speeds healing from injury and illness.",
      },
      {
        title: "Signature Massage",
        price: "60 | 75 | 90 mins – $95 | $120 | $140",
        description:
          "A range of modalities including neuromuscular therapy, trigger-point therapy, myofascial release, sports massage, deep-tissue, stretching and acupressure.",
      },
      {
        title: "Pain Resistance Therapy",
        price: "60 | 75 | 90 mins – $90 | $120 | $140",
        description:
          "Ideal for recurring chronic pain such as neck pain, back pain and sciatica. Targeted to address discomfort and get you on track to recovery. Discounts on 7- or 14-day treatments.",
      },
      {
        title: "Marma Massage",
        price: "60 | 75 | 90 mins – $95 | $125 | $145",
        description:
          "Stimulates the body's marma energy points to manipulate subtle energy (prana), relieve stiff muscles and boost circulation.",
      },
      {
        title: "Sports Massage",
        price: "60 | 75 | 90 mins – $95 | $120 | $140",
        description:
          "Bodywork to prevent injuries, prepare the body for athletic activity and maintain optimal condition while treating soft-tissue aches and pain.",
      },
    ],
  },
  {
    heading: "Wellness Programs",
    blurb:
      "Comprehensive, condition-focused Ayurvedic programs that combine multiple therapies for deeper, lasting results.",
    items: [
      {
        title: "Eye Care Therapy (Nethra Tarpana)",
        price: "60 mins – $145",
        description:
          "A holistic remedy for a range of eye concerns that soothes, lubricates and revitalises tired eyes.",
        benefits: [
          "Holistic remedy for various eye disorders.",
          "Moisturises and lubricates the eyes.",
          "Enhances eyesight with less strain.",
          "Relieves dryness, itching and irritation.",
        ],
        includes: [
          "Nethra Dhara – a continuous stream of herbal decoction poured to cleanse the eyes.",
          "Nethra Tarpana – cooling ghee (clarified butter) therapy, ideal for pitta imbalance and dry, fatigued eyes.",
        ],
      },
      {
        title: "Overall Maintenance & Weakness",
        price: "90 mins – $190",
        description:
          "A restorative program to rebuild strength, ease fatigue and flush toxins for renewed vitality.",
        benefits: [
          "Improves blood circulation with medicated Ayurvedic oil.",
          "Controls fatigue and lethargy while flushing toxins from the system.",
          "Improves range of motion, removes stiffness and supports longevity.",
        ],
        includes: [
          "Full body therapeutic massage with medicated oil",
          "Head massage",
          "Face and foot massage",
          "Kizhi – hot pack with herbs and powder",
          "Steam bath (Swedana)",
          "Panchakarma",
        ],
      },
      {
        title: "Detox Therapy",
        price: "90 mins – $195",
        description:
          "Ayurvedic Panchakarma detox tailored to your body type and health. A full detox ideally takes 21–28 days; a minimum of 14 days allows at least one or two detox therapies. Ideal for constant stress and fatigue, long-term medication, dependence on tobacco/alcohol, chronic ailments (arthritis, rheumatism, digestive issues, migraine), or poor diet and sleep.",
        benefits: [
          "Removes toxins to help restore natural biochemistry.",
          "Improves metabolism to keep the body energetic.",
          "Clears lactic acid from muscles and joints through regular massage.",
          "Helps with hormonal imbalance.",
          "Restores appetite, sleep quality, concentration and memory.",
        ],
        includes: [
          "Full body therapeutic massage with Ayurvedic medicated oil",
          "Face massage with medicated oil / cream",
          "Head massage with herbal oil",
          "Foot massage with Kansa (copper bowl)",
          "Podikizhi (hot pack with herbs)",
          "Steam bath",
          "Panchakarma",
        ],
      },
      {
        title: "Body Balance (Weight Control)",
        price: "90 mins – $190",
        description:
          "Balances the doshas — especially Vata — to support natural, sustainable weight management using Udvartana, an invigorating rhythmic full-body massage with herbal powder or paste that removes toxins through the skin and reduces excess cellulite and fat.",
        includes: [
          "Abhyanga (full body massage) with Udvartana (scrubbing powder or paste)",
          "Steam bath (Swedana)",
        ],
      },
      {
        title: "Functional Movement Disorders",
        price: "90 mins – $190",
        description:
          "For conditions that affect your bones, joints, ligaments, tendons and muscles.",
        benefits: [
          "Heals and strengthens muscles and ligaments.",
          "Relieves pain, stiffness, swelling and loss of function.",
          "Reduces repetitive strain injuries.",
        ],
        includes: [
          "Full body therapeutic massage with medicated oil",
          "Kizhi or hot pack with herbs",
          "Pichu / Kati Vasti / Greeva Vasti / Uro Vasti",
          "Steam bath (Swedana)",
          "Panchakarma",
        ],
      },
      {
        title: "Manasa Treatment",
        price: "90 mins – $190",
        description:
          "Designed to relieve stress and depression and bring peace and clarity to mind and soul through rejuvenation therapy.",
        includes: [
          "Full body therapeutic massage with medicated oil",
          "Shiro Abhyanga (head massage)",
          "Shirodhara (oil or herbal decoction)",
          "Swedana (steam bath)",
          "Panchakarma",
        ],
      },
      {
        title: "Prenatal Therapy",
        price: "90 mins – $190",
        description:
          "A safe, uplifting Ayurvedic program during pregnancy that helps with complications such as high blood pressure, spotting and fluid retention.",
        benefits: [
          "Reduces stress and anxiety.",
          "Improves blood circulation and metabolism.",
          "Supports healthy weight management.",
          "Keeps the reproductive system healthy.",
        ],
        includes: [
          "Full body therapeutic massage with medicated oil",
          "Kizhi (hot pack with herbs)",
          "Shiro Abhyanga (head massage)",
          "Mukh Abhyanga (face massage) with oil / cream",
          "Shirodhara with oil",
          "Swedana (steam bath)",
          "Panchakarma",
        ],
      },
      {
        title: "Post Natal Therapy",
        price: "90 mins – $190",
        description:
          "A nurturing program focused on the abdominal area to restore strength and wellbeing after delivery.",
        benefits: [
          "Focuses on the abdominal area.",
          "Reduces hip and lower-back strain after delivery.",
          "Eases post-delivery mental and physical stress.",
          "Regains strength while healing body and mind.",
          "Rejuvenates and refreshes skin and ligaments.",
        ],
        includes: [
          "Full body therapeutic massage with medicated oil",
          "Kizhi (hot pack with herbs)",
          "Shiro Abhyanga (head massage)",
          "Mukh Abhyanga (face massage) with oil / cream",
          "Shirodhara with oil, or Udvartana (herbal powder scrub) depending on body and mind condition",
          "Swedana (steam bath)",
          "Panchakarma",
        ],
      },
      {
        title: "Sleep Disorder (Insomnia)",
        price: "90 mins – $190",
        description:
          "A calming program that eases the nervous system and restores healthy, restful sleep patterns.",
        benefits: [
          "Reduces disturbed sleep patterns and supports sound sleep.",
          "Relieves mental stress.",
          "Eases stiffness in the cervical area.",
        ],
        includes: [
          "Full body therapeutic massage with medicated oil",
          "Foot reflexology with pressure points or using Kansa",
          "Shiro Abhyanga (head massage)",
          "Mukh Abhyanga (face massage) with oil / cream",
          "Shirodhara with oil",
          "Swedana (steam bath)",
          "Nasyam (nasal steam therapy and nasal drops)",
          "Panchakarma",
        ],
      },
      {
        title: "Common Lifestyle Disorders",
        price: "90 mins – $195",
        description:
          "Designed to reduce problems caused by a stressful or unbalanced lifestyle — such as high blood pressure, diabetes, high cholesterol, excess body weight, visceral fat and fatty liver.",
        includes: [
          "Abhyanga with oil / Udvartana (herbal powder scrub)",
          "Kizhi (hot pack with herb leaves / powder)",
          "Swedana (steam bath)",
          "Panchakarma",
        ],
      },
    ],
  },
];

export const reviews = [
  {
    name: "Priya R.",
    body: "The most grounding massage I've ever had. I came in with chronic shoulder tension and left feeling completely renewed. The personalised approach makes all the difference.",
  },
  {
    name: "Daniel M.",
    body: "Their deep tissue and marma work gave me real relief from years of back pain. Calm space, skilled hands, and genuine care for how my body responds.",
  },
  {
    name: "Anita S.",
    body: "Shirodhara was pure bliss — I finally slept through the night. You can feel the 15 years of experience in every session. Highly recommend.",
  },
];

export const mantras = [
  "May your inner soul shine bright and bloom like a lotus.",
  "Health is the greatest gift, contentment the greatest wealth, a liberated mind the greatest bliss.",
  "Experience authentic Ayurvedic massage with multiple layers of therapy.",
];

export const benefits = [
  {
    title: "Ancient Wisdom",
    body: "Time-honoured Ayurvedic principles refined over 15 years of hands-on practice.",
  },
  {
    title: "Personalised Care",
    body: "Every session is tailored to your body, your doshas and your specific concerns.",
  },
  {
    title: "Natural Healing",
    body: "Herbal oils, marma points and steam therapies that work with your body, not against it.",
  },
  {
    title: "Lasting Relief",
    body: "From chronic pain to deep stress, we focus on results you can feel and keep.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Consult",
    body: "We listen to your concerns and assess your body's balances and imbalances.",
  },
  {
    step: "02",
    title: "Personalise",
    body: "We design a tailored therapy plan using the right blend of modalities for you.",
  },
  {
    step: "03",
    title: "Restore",
    body: "You relax into healing hands while we release tension and rebalance your energy.",
  },
];

export const doshas = [
  {
    name: "Vata",
    element: "Air & Ether",
    body: "Governs movement and the nervous system. When balanced you feel creative and light; when aggravated, anxious and restless. Grounding, warming therapies restore calm.",
  },
  {
    name: "Pitta",
    element: "Fire & Water",
    body: "Governs digestion and transformation. Balanced Pitta is focused and warm; excess brings heat, inflammation and irritability. Cooling, soothing therapies bring ease.",
  },
  {
    name: "Kapha",
    element: "Earth & Water",
    body: "Governs structure and stability. Balanced Kapha is steady and nurturing; excess brings heaviness and sluggishness. Invigorating, stimulating therapies renew vitality.",
  },
];

export const faqs = [
  {
    q: "What should I expect during my first visit?",
    a: "We begin with a short consultation to understand your concerns and constitution, then recommend the therapy best suited to you. Sessions take place in a calm, private space with warm herbal oils.",
  },
  {
    q: "How do I choose the right therapy?",
    a: "You don't have to decide alone. Share your health concerns and goals, and our therapists will suggest the most suitable treatment — customised to your body's needs.",
  },
  {
    q: "Are the therapies suitable during pregnancy?",
    a: "Yes. We offer gentle prenatal and postnatal massage designed to ease back pain, reduce tension and support recovery. Please let us know so we can tailor the pressure and position.",
  },
  {
    q: "How often should I come for treatment?",
    a: "It depends on your goals. For chronic pain we often recommend a short series of sessions, with discounts available on 7- or 14-day treatment plans. Your therapist will advise a rhythm that suits you.",
  },
];
