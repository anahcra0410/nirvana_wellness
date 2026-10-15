export const site = {
  name: "Nirvana Wellness Center",
  tagline: "Ayurvedic & Spa Therapies",
  phone: "+1 (973) 641-7701",
  phoneHref: "+19736417701",
  email: "Pradeep@nirvanawellnesscentre.com",
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
      "A soothing scalp, neck and shoulder massage with marma-inspired pressure points and essential oils — to release everyday tension and invite deep calm.",
  },
  {
    title: "Shirodhara",
    description:
      "A continuous stream of warm oil over the forehead. A meditative Ayurvedic ritual designed for relaxation and inner tranquility.",
  },
  {
    title: "Abhyanga & Swedana",
    description:
      "Warm-oil full-body massage from scalp to soles, followed by herbal steam — a restorative pairing at the heart of Ayurvedic wellness.",
  },
  {
    title: "Udvartana",
    description:
      "An invigorating herbal powder or paste massage that gently exfoliates, refreshes the skin and leaves the body feeling renewed.",
  },
  {
    title: "Deep Tissue",
    description:
      "Slower strokes and targeted pressure, customized to your comfort, to ease muscular tightness and everyday tension.",
  },
  {
    title: "Hot Stone",
    description:
      "Massage complemented by smooth, heated basalt stones. The warmth creates a calming, deeply relaxing experience.",
  },
  {
    title: "Marma Massage",
    description:
      "Ayurvedic-inspired bodywork around traditional marma points to encourage relaxation, body awareness and a sense of balance.",
  },
  {
    title: "Cupping Massage",
    description:
      "Gentle cupping suction, stationary or gliding, incorporated into massage to support muscular comfort and overall well-being.",
  },
];

export type PricedService = {
  title: string;
  price: string;
  description?: string;
  benefits?: string[];
  includes?: string[];
  note?: string;
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
      "Restorative bodywork that eases everyday tension, invites deep relaxation and supports a sense of well-being.",
    items: [
      {
        title: "Scalp Massage",
        price: "30 mins – $55",
        description:
          "Revitalize and relax your scalp with a soothing massage incorporating gentle techniques and essential oils. Marma-inspired pressure-point techniques are applied to the scalp, neck and shoulders to promote relaxation and release everyday tension.",
      },
      {
        title: "Reflexology",
        price: "30 | 60 mins – $45 | $75",
        description:
          "A relaxing foot-focused wellness treatment using gentle pressure and reflexology techniques. Designed to promote relaxation, ease everyday foot tension, and provide a soothing sense of comfort and well-being.",
      },
      {
        title: "Swedish Massage",
        price: "60 | 90 mins – $110 | $155",
        description:
          "A classic and popular massage technique designed to promote relaxation and ease everyday muscular tension. This massage incorporates long, flowing strokes, kneading, and gentle myofascial techniques, tailored to your individual comfort and preferences.",
      },
      {
        title: "Deep Tissue Massage",
        price: "60 | 90 mins – $125 | $175",
        description:
          "A focused massage using slower strokes and deeper, targeted pressure to address areas of muscular tightness and tension. Techniques and pressure are customized to your comfort level and individual needs.",
      },
      {
        title: "Hot Stone Massage",
        price: "60 | 90 mins – $140 | $180",
        description:
          "Experience deep relaxation with a combination of massage techniques and smooth, heated basalt stones. The warmth of the stones creates a soothing and calming experience while complementing the massage.",
      },
      {
        title: "Prenatal / Postnatal Massage",
        price: "60 | 90 mins – $120 | $165",
        description:
          "Prenatal: a gentle, comfort-focused massage adapted to the changing needs of the body during pregnancy. Techniques and positioning are modified to promote comfort and relaxation. Postnatal: a gentle massage designed to promote relaxation and ease everyday muscular tension following childbirth.",
        note: "Clients who are pregnant or recently postpartum should consult their physician or qualified healthcare professional regarding whether massage is appropriate for their individual circumstances.",
      },
      {
        title: "Aromatherapy Massage",
        price: "60 | 90 mins – $125 | $175",
        description:
          "A relaxing massage enhanced with carefully selected essential oils diluted in a suitable massage oil or carrier. Aromatherapy adds a soothing sensory element to the massage experience and is designed to promote relaxation and a sense of overall well-being.",
        note: "Essential oils are highly concentrated plant extracts. Please inform your practitioner of any allergies, sensitivities, pregnancy, or other relevant concerns before receiving an aromatherapy service.",
      },
    ],
  },
  {
    heading: "Ayurvedic Therapies",
    blurb:
      "Traditional treatments rooted in Ayurveda to detoxify, rebalance the doshas and rejuvenate the whole system.",
    items: [
      {
        title: "Ayurvedic Consultation",
        price: "Initial $110 · Follow-up $75",
        description:
          "A personalized Ayurvedic wellness consultation exploring your individual constitution, lifestyle, daily routines, and overall well-being. Recommendations may include Ayurvedic wellness practices, lifestyle guidance, self-care routines, and appropriate wellness services based on your individual needs.",
        note: "Ayurvedic consultations are provided for wellness and educational purposes and are not intended to diagnose, treat, cure, or prevent any medical condition.",
      },
      {
        title: "Abhyanga & Swedana",
        price: "60 | 90 mins – $125 | $175",
        description:
          "Abhyanga is a traditional Ayurvedic full-body oil massage using warm, nourishing oils applied from scalp to soles. The massage incorporates flowing strokes and traditional Ayurvedic techniques to create a deeply relaxing and restorative experience. Swedana is a traditional Ayurvedic herbal steam experience that may be offered following Abhyanga.",
      },
      {
        title: "Swedana — Ayurvedic Herbal Steam",
        price: "30 mins – $45",
        description:
          "A traditional Ayurvedic herbal steam experience using gentle warmth and aromatic herbs. Swedana is designed to provide a soothing and relaxing experience and may be offered as a complement to selected Ayurvedic wellness services.",
      },
      {
        title: "Shirodhara",
        price: "30 | 45 mins – $75 | $110",
        description:
          "A traditional Ayurvedic relaxation ritual in which a gentle, continuous stream of warm oil or an appropriate herbal preparation is poured over the forehead. Shirodhara creates a calming, meditative experience and is designed to promote relaxation and a sense of inner tranquility. May be combined with a scalp or Ayurvedic massage when appropriate.",
      },
      {
        title: "Nasya — Ayurvedic Nasal Wellness",
        price: "30 mins – $65",
        description:
          "A traditional Ayurvedic practice involving the application of a small amount of appropriately selected herbal oil to the nasal passages. This service is offered only following an Ayurvedic consultation and appropriate screening.",
        note: "Nasya is offered as an Ayurvedic wellness practice and is not intended to diagnose or treat sinus, respiratory, neurological, or other medical conditions.",
      },
      {
        title: "Kizhi — Ayurvedic Herbal Poultice",
        price: "60 mins – $125",
        description:
          "A traditional Ayurvedic treatment using warm herbal poultices prepared in cloth bundles and applied with gentle massage techniques. The warmth and rhythmic application create a soothing and restorative bodywork experience.",
      },
      {
        title: "Udvartana — Ayurvedic Herbal Powder Massage",
        price: "60 | 90 mins – $140 | $185",
        description:
          "A traditional Ayurvedic body treatment using herbal powders or herbal pastes applied with rhythmic massage techniques. Udvartana provides an invigorating and refreshing experience while gently exfoliating the skin and leaving the body feeling renewed.",
      },
      {
        title: "Vasti",
        price: "By consultation",
        description:
          "Vasti is a traditional Ayurvedic therapy involving the localized application of an herbal oil or preparation to a selected area of the body. Availability, technique, and suitability are determined following an Ayurvedic consultation.",
      },
    ],
  },
  {
    heading: "Signature Therapies",
    blurb:
      "Tailored, multi-modality sessions thoughtfully designed around your individual needs, preferences, and wellness goals.",
    items: [
      {
        title: "Geriatric Massage",
        price: "60 | 75 | 90 mins – $100 | $125 | $150",
        description:
          "A gentle, soothing massage designed for seniors, with techniques and pressure adapted to individual comfort and mobility. The session focuses on relaxation, comfort, and overall well-being.",
      },
      {
        title: "Signature Massage",
        price: "60 | 75 | 90 mins – $120 | $145 | $170",
        description:
          "A personalized massage incorporating a variety of modalities and techniques, which may include neuromuscular techniques, trigger-point techniques, myofascial techniques, sports massage, deep-tissue techniques, stretching, and acupressure. Techniques are selected according to your individual needs and preferences.",
      },
      {
        title: "Pain Resistance Therapy",
        price: "60 | 75 | 90 mins – $115 | $140 | $165",
        description:
          "A focused, personalized bodywork session designed to address areas of muscular tension and everyday physical discomfort. Techniques and pressure are tailored to your individual needs and comfort level. Multi-session packages are available — please inquire for details.",
      },
      {
        title: "Marma Massage",
        price: "60 | 75 | 90 mins – $120 | $145 | $170",
        description:
          "An Ayurvedic-inspired massage that incorporates gentle pressure and massage techniques around traditional marma points — areas traditionally recognized in Ayurveda as important points of the body. Designed to encourage deep relaxation, enhance body awareness, and support a sense of balance and overall well-being.",
      },
      {
        title: "Sports Massage",
        price: "60 | 75 | 90 mins – $120 | $145 | $170",
        description:
          "A focused massage designed for active individuals. Techniques may include targeted massage, stretching, and other bodywork approaches to support flexibility, relaxation, mobility, and post-activity comfort.",
      },
      {
        title: "Cupping Massage",
        price: "90 | 120 mins – $195 | $260",
        description:
          "Cupping massage uses specially designed cups placed on the skin to create gentle suction. The cups may be stationary or moved across the skin as part of a massage session, promoting relaxation and supporting overall muscular comfort and well-being.",
        benefits: [
          "Relaxation and stress reduction",
          "A sense of muscular relaxation and comfort",
          "Temporary relief from muscle tightness or stiffness",
          "General body awareness and wellness",
          "A soothing complement to a massage session",
        ],
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
          "A holistic Ayurvedic eye therapy that soothes, moisturizes and revitalizes tired eyes.",
        benefits: [
          "Holistic remedy for various eye disorders.",
          "Helps moisturize and lubricate the eyes.",
          "Enhances eyesight with less strain.",
          "Provides relief from dryness, itching and irritation.",
        ],
        includes: [
          "Nethra Dhara — cleansing technique by pouring herbal decoctions in a continuous stream over the eyes.",
          "Nethra Tarpana — cooling ghee (clarified butter) therapy, ideal for pitta imbalance and dry, fatigued eyes.",
        ],
      },
      {
        title: "Overall Maintenance & Weakness",
        price: "90 mins – $190",
        description:
          "A restorative program to rebuild strength, ease fatigue and flush toxins for renewed vitality.",
        benefits: [
          "Improves blood circulation when applied with medicated Ayurvedic oil.",
          "Helps control fatigue and lethargy and flush toxins from the system.",
          "Improves range of motion, removes stiffness and supports longevity.",
        ],
        includes: [
          "Full body therapeutic massage with medicated oil",
          "Head massage",
          "Face and foot massage",
          "Kizhi — hot pack mixed with herbs and powder",
          "Steam bath (Swedana)",
          "Panchakarma",
        ],
      },
      {
        title: "Detox Therapy",
        price: "90 mins – $195",
        description:
          "Ayurveda Panchakarma detox at Nirvana Wellness Center is offered based on body type and current health situation. Treatment ideally takes 21 to 28 days to complete; a minimum of 14 days is required to receive at least one or two detox therapies.",
        benefits: [
          "Removal of toxins helps restore natural biochemistry.",
          "Improved metabolism supports staying energetic.",
          "Regular massage helps remove lactic acid from muscles and joints.",
          "Helps with hormonal imbalance.",
          "Improved circulation supports appetite, sleep quality, concentration and memory.",
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
        note: "Who may consider Panchakarma detox: those under constant stress and feeling tired; taking prescription medicine for a long period; addicted to tobacco, alcohol or drugs; living with ailments such as arthritis, rheumatism, chronic digestive problems, constipation or migraine; or eating an unhealthy diet with lack of sleep. This is a wellness program and is not a substitute for medical care.",
      },
      {
        title: "Body Balance (Weight Control)",
        price: "90 mins – $190",
        description:
          "This therapy emphasizes balancing the doshas, especially Vata, to support natural, sustainable weight management through Udvartana — an invigorating full-body massage in rhythmic motion using herbal powder or paste. Udvartana focuses on removing toxins through the skin and reducing excess cellulite and fat accumulated under the skin.",
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
          "Focuses on healing and strengthening of the muscles and ligaments.",
          "Relieves pain, stiffness, swelling and loss of function.",
          "Reduces repetitive strain injuries.",
        ],
        includes: [
          "Full body therapeutic massage with medicated oil",
          "Kizhi or hot pack with herbs",
          "Pichu / Kadi Vasti / Greeva Vasti / Urovasti",
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
          "Shirodhara (oil decoction or herbal decoction)",
          "Swedana (steam bath)",
          "Panchakarma",
        ],
      },
      {
        title: "Prenatal Therapy",
        price: "90 mins – $190",
        description:
          "Ayurvedic therapy during pregnancy to support comfort, lift the spirits and help with concerns such as high blood pressure, spotting and fluid retention.",
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
        note: "Please consult your physician before receiving prenatal wellness services.",
      },
      {
        title: "Post Natal Therapy",
        price: "90 mins – $190",
        description:
          "A nurturing program focused on the abdominal area to restore strength and well-being after delivery.",
        benefits: [
          "Focuses on the abdominal area.",
          "Reduces hip and low-back strain after delivery.",
          "Eases postnatal mental and physical stress.",
          "Regains strength while healing body and mind.",
          "Rejuvenates and refreshes skin and ligaments.",
        ],
        includes: [
          "Full body therapeutic massage with medicated oil",
          "Kizhi (hot pack with herbs)",
          "Shiro Abhyanga (head massage)",
          "Mukh Abhyanga (face massage) with oil / cream",
          "Shirodhara with oil, or Udvartana (herbal powder scrub), depending on mind and body condition",
          "Swedana (steam bath)",
          "Panchakarma",
        ],
      },
      {
        title: "Sleep Disorder (Insomnia)",
        price: "90 mins – $190",
        description:
          "A calming program that eases discomfort in sleeping patterns and focuses on sound sleep.",
        benefits: [
          "Helps reduce discomfort in sleeping patterns and supports sound sleep.",
          "Relief from mental stress.",
          "Relief from stiffness in the cervical area.",
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
          "Designed to reduce problems caused by a stressful or unbalanced lifestyle — including high blood pressure, diabetes, high cholesterol, excess body weight, visceral fat and fatty liver.",
        includes: [
          "Abhyanga with oil / Udvartana (herbal powder scrub)",
          "Kizhi (hot pack with herb leaves / powder)",
          "Swedana (steam bath)",
          "Panchakarma",
        ],
      },
      {
        title: "Ayurvedic Facial with Abhyanga & Shirodhara",
        price: "90 mins – $195",
        description:
          "Mukha Abhyanga (Ayurvedic facial massage) with gentle yet firm strokes to promote relaxation, improve circulation, tone facial muscles, stimulate the lymphatic system and reduce puffiness — followed by Shirodhara, a steady stream of warm aromatic oil or decoction across the forehead, and a full-body Abhyanga to rejuvenate and strengthen the tissues.",
      },
    ],
  },
];

export const treatmentCount = serviceGroups.reduce(
  (sum, group) => sum + group.items.length,
  0,
);

export type PolicySection = {
  title: string;
  body: string[];
};

export const reservationPolicy: PolicySection[] = [
  {
    title: "Appointments",
    body: [
      "Services are provided primarily by appointment. To reserve an appointment by phone, we may request your full name, email address, telephone number, and a valid credit card to secure your reservation.",
      "Advance booking is required for all services and sessions.",
    ],
  },
  {
    title: "Cancellation & Rescheduling",
    body: [
      "To provide the best possible service to all of our clients, we kindly require at least 24 hours' notice for cancellations or changes to scheduled appointments.",
      "Appointments cancelled or rescheduled with less than 24 hours' notice may be subject to a 50% cancellation fee of the scheduled service price.",
      "Please contact the appropriate center by phone as soon as possible if you need to cancel or reschedule your appointment.",
    ],
  },
  {
    title: "Ayurvedic Services",
    body: [
      "Shirodhara (Sirodhara), Svedana (Swedana), Elakizhi, Navarakizhi (Njavarakizhi), and Sirovasthi (Shirovasti) are generally not offered as standalone services and may be combined with Uzhichil (Abhyanga), as appropriate.",
      "Prior booking and scheduling are required for each session.",
    ],
  },
  {
    title: "Arrival Time",
    body: [
      "Clients are kindly requested to arrive at least 5 minutes before their scheduled appointment.",
      "Arriving late may result in a shortened session so that we can maintain the scheduled appointments of other clients. The full service fee will still apply.",
    ],
  },
  {
    title: "Pricing & Taxes",
    body: [
      "Prices are subject to change without notice.",
      "Applicable local and state taxes will be added where required.",
    ],
  },
];

export const disclaimerParagraphs = [
  "Nirvana Wellness Center LLC is a wellness practice and is not a medical facility, physician's office, or healthcare provider. Our services are intended for general wellness, relaxation, stress management, and supportive self-care and are not intended to diagnose, treat, cure, or prevent any disease, illness, injury, or medical condition.",
  "Our Ayurvedic practitioners are not medical doctors (MDs) and do not provide medical diagnosis or medical treatment. Ayurvedic consultations and wellness therapies provided by Nirvana Wellness Center LLC are offered for general wellness purposes only and should not be considered a substitute for medical care, diagnosis, or treatment from a qualified, licensed healthcare professional.",
  "Nirvana Wellness Center LLC does not claim that its Ayurvedic consultations, recommendations, or wellness therapies will cure, prevent, or diminish any specific disease, illness, or medical condition. We do not diagnose medical conditions or prescribe, modify, or discontinue prescription medications or other medical treatments.",
  "Clients are encouraged to maintain an ongoing relationship with their primary care physician and other licensed healthcare professionals. Clients should not stop, modify, or delay any prescribed medical treatment, medication, or other healthcare recommendation without first consulting the healthcare professional responsible for their care.",
  "Information provided during an Ayurvedic consultation is intended for general educational and wellness purposes and should not be interpreted as medical advice. Clients should inform their healthcare providers of any complementary or wellness services they receive.",
  "By choosing to receive services from Nirvana Wellness Center LLC, clients acknowledge that the services provided are wellness services and are not a replacement for appropriate medical evaluation, diagnosis, or treatment.",
  "If you have a medical condition, are experiencing new or concerning symptoms, are pregnant, or have questions regarding whether a particular wellness service is appropriate for you, please consult your physician or other qualified healthcare professional before receiving services.",
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
    a: "We begin with a short consultation to understand your concerns and constitution, then recommend the therapy best suited to you. Sessions take place in a calm, private space. Please arrive at least 5 minutes before your scheduled appointment.",
  },
  {
    q: "How do I choose the right therapy?",
    a: "You don't have to decide alone. Share your health concerns and goals, and our therapists will suggest the most suitable treatment — customised to your body's needs. An Ayurvedic consultation is available if you would like a more in-depth wellness assessment.",
  },
  {
    q: "Are the therapies suitable during pregnancy?",
    a: "We offer gentle prenatal and postnatal massage designed for comfort and relaxation. Please consult your physician or qualified healthcare professional regarding whether massage is appropriate for your circumstances, and let us know so we can tailor pressure and positioning.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We kindly require at least 24 hours' notice for cancellations or changes. Appointments cancelled or rescheduled with less than 24 hours' notice may be subject to a 50% cancellation fee of the scheduled service price.",
  },
  {
    q: "How often should I come for treatment?",
    a: "It depends on your goals. For ongoing discomfort we often recommend a short series of sessions, with multi-session packages available for some therapies. Your therapist will advise a rhythm that suits you.",
  },
];
