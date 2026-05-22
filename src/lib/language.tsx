import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Hindi translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'header.home': 'Home',
    'header.about': 'About',
    'header.work': 'Our Work',
    'header.impact': 'Impact',
    'header.getInvolved': 'Get Involved',
    'header.contact': 'Contact',
    
    // Hero Section
    'hero.title1': 'Evidence',
    'hero.title2': 'to Real Impact',
    'hero.subtitle': 'NHF works across health, child development, mental health, school health, nutrition, and public systems. Our work includes research, implementation, and partnerships with government institutions, as well as with organisations across sectors.',
    'hero.description': 'We focus on both systems and ground realities-working in schools, anganwadis, government hospitals, and communities to improve how care is delivered and accessed.',
    'hero.bullet1': 'Be aware of and responsive to their environment',
    'hero.bullet2': 'Regulate themselves with increasing independence',
    'hero.bullet3': 'Communicate their needs effectively',
    'hero.bullet4': 'Make informed decisions that support their physical, emotional, and social well-being',
    'hero.tagline': 'Research. Train. Reach.',
    'hero.partner': 'Partner With Us',
    'hero.explore': 'Explore Our Work',
    'hero.badge': 'Research & Advocacy for Child Development',
    'hero.slide1': 'Evidence to Real Impact',
    'hero.slide1Desc': 'NHF works across health, child development, mental health, school health, nutrition, and public health systems.',
    'hero.slide2': 'Systems and Ground Realities',
    'hero.slide2Desc': 'Working in schools, anganwadis, government hospitals, and communities to improve how care is delivered and accessed.',
    'hero.slide3': 'Research. Train. Reach.',
    'hero.slide3Desc': 'From evidence generation to implementation and policy integration, NHF works across systems to create measurable and lasting change.',
    'hero.carouselHint': 'Auto-slides every 6 seconds. Hover to pause.',
    
    // About Section
    'about.badge': 'Our Team',
    'about.title': 'Bridging Science, Service & Policy for Child Development',
    'about.intro': 'We improve outcomes for children with neurodevelopmental concerns through research, implementation, and systemic change.',
    'about.card1Title': 'About Us',
    'about.card1Desc': 'We are a not-for-profit organization committed to improving outcomes for children with neurodevelopmental concerns across India. Our work is grounded in the belief that every child deserves timely, evidence-based support.',
    'about.card2Title': 'Our Role',
    'about.card2Desc': 'We serve as the research and advocacy arm of the New Horizons Child Development Centre (NHCDC), translating clinical experience and field insights into scalable knowledge and action.',
    'about.card3Title': 'Our Approach',
    'about.card3Desc': 'NHF works at the intersection of health, child development, mental health, school health, nutrition, and public systems. Our work spans research, on-ground implementation, and partnerships with government institutions, as well as with organisations and collaborators across sectors-because meaningful change in health does not happen in isolation.',
    'about.gapTitle': 'The Gap We Address',
    'about.gapP1': 'One part of this work begins early.',
    'about.gapP2': 'In India, millions of children with developmental delays, learning disabilities, and neurodevelopmental conditions go unidentified -not because solutions do not exist, but because no one trained to recognise them ever does. NHF addresses this gap directly, working inside schools, anganwadis, government hospitals, and underserved communities to ensure early identification and timely support.',
    'about.gapP3': 'But this is only one dimension of what we do. Our approach connects evidence with systems-strengthening frontline capacity, integrating health and development into everyday settings, and working alongside public programs and partner organisations to improve how care is delivered, accessed, and sustained.',
    'about.researchTrainReach': 'Research. Train. Reach.',
    'about.researchTrainReachDesc': 'We operate across the entire system - generating evidence, training frontline workers, delivering direct programmes, and advancing policy that embeds this knowledge into government infrastructure permanently.',
    'about.research': 'We Research',
    'about.researchDesc': 'We generate evidence through clinical and implementation research to inform effective practices.',
    'about.train': 'We Train',
    'about.trainDesc': 'We build capacity among frontline workers and professionals through structured training programs.',
    'about.reach': 'We Reach',
    'about.reachDesc': 'We deliver direct programmes in schools, anganwadis, hospitals, and underserved communities.',
    'about.advocate': 'We Advocate',
    'about.advocateDesc': 'We integrate evidence-based developmental care into public systems to strengthen system performance.',
    
    // Impact Section
    'impact.badge': 'Our Impact',
    'impact.title': 'Numbers That Tell A Story',
    'impact.description': 'Our work creates measurable change in the lives of children, families, and the systems that serve them.',
    'impact.stat1': 'Peer-Reviewed Publications',
    'impact.stat2': 'Years of Impact',
    'impact.stat3': 'Programme Pillars',
    'impact.familiesTitle': 'Impact on Families',
    'impact.familiesDesc': 'Our evidence-based approach builds hope through observable change. Families report significant improvements in their children\'s functional abilities and quality of life.',
    'impact.districtsTitle': 'Districts & Institutions',
    'impact.districtsDesc': 'Active partnerships with government and institutional stakeholders:',
    'impact.systemsTitle': 'Systems Implemented',
    
    // Programs Section
    'programs.badge': 'Our Work',
    'programs.title': 'Comprehensive Work. Measurable Impact.',
    'programs.subtitle': 'From classroom to clinic, our programmes address the full spectrum of child health and development.',
    'programs.description': 'We work across health, child development, mental health, school health, nutrition, and public systems through research, implementation, and system partnerships.',
    'programs.partner': 'Partner With Us',
    'programs.schoolHealth': 'School Health',
    'programs.earlyChildhood': 'Early Childhood',
    'programs.devDisorders': 'Developmental Disorders',
    'programs.digitalHygiene': 'Digital Hygiene',
    'programs.adolescent': 'Adolescent Health',
    'programs.community': 'Community & Outreach',
    
    // Contact Section
    'contact.badge': 'Contact Us',
    'contact.title': 'New Horizons Health and Research Foundation',
    'contact.description': 'Contact us for partnerships, collaborations, and programme enquiries.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.submit': 'Send Message',
    
    // Get Involved Section
    'getinvolved.badge': 'Get Involved',
    'getinvolved.title': 'Be part of..',
    'getinvolved.subtitle': 'Partner with NHF to build equitable, measurable outcomes for children and families.',
    'getinvolved.partner': 'Partner With Us',
    'getinvolved.work': 'Work With Us',
    'getinvolved.donate': 'Donate',
    'getinvolved.internship': 'Testimonials',
    'getinvolved.experienceTitle': 'Research Intern Experience',
    'getinvolved.experienceDesc': 'Hear from interns who have contributed to NHF\'s research and systems work.',
    'getinvolved.cta': 'Contact Us to Get Started',
  },
  hi: {
    // Header
    'header.home': 'होम',
    'header.about': 'हमारे बारे में',
    'header.work': 'हमारा काम',
    'header.impact': 'प्रभाव',
    'header.getInvolved': 'शामिल हों',
    'header.contact': 'संपर्क',
    
    // Hero Section
    'hero.title1': 'साक्ष्य',
    'hero.title2': 'से वास्तविक प्रभाव',
    'hero.subtitle': 'एनएचएफ स्वास्थ्य, बाल विकास, मानसिक स्वास्थ्य, स्कूल स्वास्थ्य, पोषण और सार्वजनिक स्वास्थ्य प्रणालियों में कार्य करता है।',
    'hero.description': 'हम स्कूलों, आंगनवाड़ियों, सरकारी अस्पतालों और समुदायों में काम करते हैं ताकि बच्चों और परिवारों के लिए सहायता की पहचान, उपलब्धता और निरंतरता बेहतर हो सके।',
    'hero.bullet1': 'अपने वातावरण के प्रति सचेत और संवेदनशील होना',
    'hero.bullet2': 'बढ़ती स्वतंत्रता के साथ अपने आप को नियंत्रित करना',
    'hero.bullet3': 'अपनी जरूरतों को प्रभावी ढंग से संचारित करना',
    'hero.bullet4': 'ऐसे निर्णय लेना जो उनके शारीरिक, भावनात्मक और सामाजिक कल्याण को समर्थन करते हैं',
    'hero.tagline': 'अनुसंधान, कार्यान्वयन और विभिन्न क्षेत्रों में सरकारी संस्थानों तथा संगठनों के साथ साझेदारियाँ, जिनमें यूनिसेफ और DEIC सहयोग शामिल हैं, हमें साक्ष्य को रोजमर्रा की प्रणालियों तक पहुँचाने में सक्षम बनाती हैं।',
    'hero.partner': 'हमारे साथ भागीदार बनें',
    'hero.explore': 'हमारे काम का अन्वेषण करें',
    'hero.badge': 'बाल विकास के लिए अनुसंधान और वकालत',
    'hero.slide1': 'साक्ष्य से वास्तविक प्रभाव',
    'hero.slide1Desc': 'एनएचएफ स्वास्थ्य, बाल विकास, मानसिक स्वास्थ्य, स्कूल स्वास्थ्य, पोषण और सार्वजनिक स्वास्थ्य प्रणालियों में काम करता है।',
    'hero.slide2': 'प्रणालियां और जमीनी वास्तविकताएं',
    'hero.slide2Desc': 'स्कूलों, आंगनवाड़ियों, सरकारी अस्पतालों और समुदायों में काम करना ताकि देखभाल कैसे दी जाती है और तक पहुंची जा सके।',
    'hero.slide3': 'हर बच्चे को समर्थन की जरूरत है',
    'hero.slide3Desc': 'अनुसंधान, कार्यान्वयन और क्षेत्रों में सरकारी संस्थानों और संगठनों के साथ भागीदारी।',
    'hero.carouselHint': 'स्लाइड हर 6 सेकंड में बदलती है। रोकने के लिए होवर करें।',
    
    // About Section
    'about.badge': 'हमारी टीम',
    'about.title': 'बाल विकास के लिए विज्ञान, सेवा और नीति को जोड़ना',
    'about.intro': 'हम अनुसंधान, कार्यान्वयन और प्रणालीगत परिवर्तन के माध्यम से न्यूरोडेवलपमेंटल चिंताओं वाले बच्चों के परिणामों में सुधार करते हैं।',
    'about.card1Title': 'हमारे बारे में',
    'about.card1Desc': 'हम एक गैर-लाभकारी संगठन हैं जो भारत में न्यूरोडेवलपमेंटल चिंताओं वाले बच्चों के परिणामों में सुधार के लिए प्रतिबद्ध हैं। हमारा काम इस विश्वास पर आधारित है कि प्रत्येक बच्चा समय पर, साक्ष्य-आधारित समर्थन के लायक है।',
    'about.card2Title': 'हमारी भूमिका',
    'about.card2Desc': 'हम NHCDC के अनुसंधान और वकालत के रूप में कार्य करते हैं, नैदानिक अनुभव और क्षेत्र के अंतर्दृष्टि को स्केलेबल ज्ञान और कार्यप्रणाली में अनुवाद करते हैं।',
    'about.card3Title': 'हमारा दृष्टिकोण',
    'about.card3Desc': 'हम स्वास्थ्य, बाल विकास, मानसिक स्वास्थ्य, स्कूल स्वास्थ्य, पोषण और सार्वजनिक प्रणालियों में अनुसंधान, कार्यान्वयन और भागीदारी के माध्यम से काम करते हैं।',
    'about.gapTitle': 'हम जो अंतराल को पूरा करते हैं',
    'about.gapP1': 'भारत में, विकासात्मक देरी, सीखने की कठिनाইयों और न्यूरोडेवलपमेंटल स्थितियों वाले लाखों बच्चे अज्ञात रहते हैं-न क्योंकि समाधान मौजूद नहीं हैं, बल्कि क्योंकि कोई भी उन्हें पहचानने के लिए प्रशिक्षित नहीं है।',
    'about.gapP2': 'हम इस अंतराल को सीधे संबोधित करते हैं, स्कूलों, आंगनवाड़ियों, सरकारी अस्पतालों और वंचित समुदायों में काम करते हुए जल्दी पहचान और समय पर समर्थन सुनिश्चित करते हैं।',
    'about.gapP3': 'हमारा दृष्टिकोण साक्ष्य को प्रणालियों के साथ जोड़ता है-अग्रिम क्षमता को मजबूत करता है, स्वास्थ्य और विकास को दैनिक सेटिंग्स में एकीकृत करता है, और सार्वजनिक कार्यक्रमों के साथ काम करता है।',
    'about.researchTrainReach': 'अनुसंधान। प्रशिक्षण। पहुंच।',
    'about.researchTrainReachDesc': 'हम संपूर्ण प्रणाली में काम करते हैं - साक्ष्य उत्पन्न करते हैं, अग्रिम कर्मचारियों को प्रशिक्षित करते हैं, सीधे कार्यक्रम प्रदान करते हैं, और ऐसी नीति को आगे बढ़ाते हैं।',
    'about.research': 'हम अनुसंधान करते हैं',
    'about.researchDesc': 'हम प्रभावी प्रथाओं को सूचित करने के लिए नैदानिक और कार्यान्वयन अनुसंधान के माध्यम से साक्ष्य उत्पन्न करते हैं।',
    'about.train': 'हम प्रशिक्षण देते हैं',
    'about.trainDesc': 'हम संरचित प्रशिक्षण कार्यक्रमों के माध्यम से अग्रिम कर्मचारियों और पेशेवरों की क्षमता बनाते हैं।',
    'about.reach': 'हम पहुंचते हैं',
    'about.reachDesc': 'हम स्कूलों, आंगनवाड़ियों, अस्पतालों और वंचित समुदायों में सीधे कार्यक्रम प्रदान करते हैं।',
    'about.advocate': 'हम वकालत करते हैं',
    'about.advocateDesc': 'हम प्रणाली प्रदर्शन को मजबूत करने के लिए सार्वजनिक प्रणालियों में साक्ष्य-आधारित विकासात्मक देखभाल को एकीकृत करते हैं।',
    
    // Impact Section
    'impact.badge': 'हमारा प्रभाव',
    'impact.title': 'संख्याएं जो कहानी बताती हैं',
    'impact.description': 'हमारा काम बच्चों, परिवारों और उन प्रणालियों के जीवन में मापनीय बदलाव लाता है जो उनकी सेवा करती हैं।',
    'impact.stat1': 'सहकर्मी समीक्षा प्रकाशन',
    'impact.stat2': 'प्रभाव के वर्ष',
    'impact.stat3': 'कार्यक्रम स्तंभ',
    'impact.familiesTitle': 'परिवारों पर प्रभाव',
    'impact.familiesDesc': 'हमारा साक्ष्य-आधारित दृष्टिकोण दृश्यमान परिवर्तन के माध्यम से आशा का निर्माण करता है। परिवार अपने बच्चों की कार्यात्मक क्षमताओं और जीवन की गुणवत्ता में महत्वपूर्ण सुधार की रिपोर्ट करते हैं।',
    'impact.districtsTitle': 'जिले और संस्थान',
    'impact.districtsDesc': 'सरकारी और संस्थागत हितधारकों के साथ सक्रिय भागीदारी:',
    'impact.systemsTitle': 'कार्यान्वित प्रणालियां',
    
    // Programs Section
    'programs.badge': 'हमारा काम',
    'programs.title': 'व्यापक काम। मापनीय प्रभाव।',
    'programs.subtitle': 'कक्षा से क्लिनिक तक, हमारे कार्यक्रम बाल स्वास्थ्य और विकास के पूर्ण स्पेक्ट्रम को संबोधित करते हैं।',
    'programs.description': 'हम स्वास्थ्य, बाल विकास, मानसिक स्वास्थ्य, स्कूल स्वास्थ्य, पोषण और सार्वजनिक प्रणालियों में अनुसंधान, कार्यान्वयन और प्रणाली भागीदारी के माध्यम से काम करते हैं।',
    'programs.partner': 'हमारे साथ भागीदार बनें',
    'programs.schoolHealth': 'स्कूल स्वास्थ्य',
    'programs.earlyChildhood': 'प्रारंभिक बचपन',
    'programs.devDisorders': 'विकासात्मक विकार',
    'programs.digitalHygiene': 'डिजिटल स्वच्छता',
    'programs.adolescent': 'किशोर स्वास्थ्य',
    'programs.community': 'समुदाय और बहिष्करण',
    
    // Contact Section
    'contact.badge': 'हमसे संपर्क करें',
    'contact.title': 'न्यू होराइजन्स हेल्थ एंड रिसर्च फाउंडेशन',
    'contact.description': 'साझेदारी, सहयोग और कार्यक्रम संबंधी पूछताछ के लिए हमसे संपर्क करें।',
    'contact.name': 'नाम',
    'contact.email': 'ईमेल',
    'contact.message': 'संदेश',
    'contact.submit': 'संदेश भेजें',
    
    // Get Involved Section
    'getinvolved.badge': 'शामिल हों',
    'getinvolved.title': 'इस बदलाव का हिस्सा बनें..',
    'getinvolved.subtitle': 'बच्चों और परिवारों के लिए न्यायसंगत, मापनीय परिणाम बनाने के लिए NHF के साथ भागीदार।',
    'getinvolved.partner': 'हमारे साथ भागीदार बनें',
    'getinvolved.work': 'हमारे साथ काम करें',
    'getinvolved.donate': 'दान करें',
    'getinvolved.internship': 'प्रशंसापत्र',
    'getinvolved.experienceTitle': 'अनुसंधान इंटर्न अनुभव',
    'getinvolved.experienceDesc': 'उन इंटर्न से सुनें जिन्होंने NHF की अनुसंधान और प्रणाली कार्य में योगदान दिया है।',
    'getinvolved.cta': 'शुरू करने के लिए हमसे संपर्क करें',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('en');

  // Load language preference from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('nhf-language') as Language | null;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'hi')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('nhf-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
