import { useEffect, useState } from "react";
import {
  Quote,
  Sparkles,
  Award,
  Scale,
  ShieldPlus,
  Megaphone,
  Building2,
  Users,
  X,
  Newspaper,
  Radio,
  Tv,
  Youtube,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/lib/language";
import founderImg from "@/assets/dr-samir-dalwai-founder.png";

const FounderMessageSection = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const content = language === "hi"
    ? {
        badge: "संस्थापक की ओर से",
        titlePrefix: "मिलिए",
        name: "डॉ. समीर हसन दलवाई",
        credentials: "MD · DNB · DCH · FCPS · FIAP · LLB",
        roles: [
          "विकासात्मक एवं व्यवहार बाल रोग विशेषज्ञ",
          "संस्थापक, न्यू होराइजन्स ग्रुप",
          "राष्ट्रीय नीति समर्थक",
        ],
        pullQuote:
          "बच्चों के भविष्य के लिए सबसे बड़ा खतरा भाषा नहीं है - यह स्क्रीन की लत, सिकुड़ता खेल का समय, और प्रेशर-कुकर जैसी पढ़ाई है। अब समय है कि हम एक बाल-प्रथम दृष्टिकोण अपनाएँ, राजनीति-प्रथम नहीं।",
        pullQuoteAttribution: "- डॉ. समीर दलवाई, फ्री प्रेस जर्नल, जून 2025",
        bio:
          "दो दशकों से अधिक समय से, डॉ. समीर दलवाई चिकित्सा, कानून और सार्वजनिक नीति के संगम पर खड़े हैं - यह बदलते हुए कि भारत अपने सबसे संवेदनशील बच्चों को कैसे समझता, उपचारित करता और शामिल करता है। 2003 में मुंबई में एक छोटे क्लिनिक से शुरुआत करते हुए, उन्होंने न्यू होराइजन्स ग्रुप को 110 सदस्यीय अंतर-विषयक संस्थान में विकसित किया, साथ ही राष्ट्रीय नैदानिक दिशानिर्देशों, ऐतिहासिक कानूनी मिसालों और संसदीय सुधारों को आगे बढ़ाया।",
        bioBeliefLabel: "उनका मार्गदर्शक विश्वास:",
        bioBeliefHighlight: "हर बच्चा बेहतर कर सकता है।",
        bioQuote:
          "यह एक गलत धारणा है कि ऑटिज़्म वाला बच्चा बेहतर नहीं हो सकता। हमें एक अलग दृष्टिकोण की ज़रूरत है - जो माता-पिता और समाज को लक्ष्य बनाकर बदलाव लाए।",
        bioQuoteAttribution: "- डॉ. समीर दलवाई, फ्री प्रेस जर्नल",
        pressHeading: "जैसा देखा गया",
        pressBadges: [
          { id: "fpj", label: "फ्री प्रेस जर्नल", icon: Newspaper },
          { id: "air", label: "ऑल इंडिया रेडियो", icon: Radio },
          { id: "ndtv", label: "NDTV", icon: Tv },
          { id: "toi", label: "टाइम्स ऑफ़ इंडिया", icon: Newspaper },
          { id: "mm", label: "मुंबई मिरर", icon: Newspaper },
          { id: "rs", label: "राज शमानी (यूट्यूब)", icon: Youtube },
        ],
        socialsHeading: "डॉ. दलवाई से जुड़ें",
        socialsCTA: "नवीनतम विचारों, बाल विकास अंतर्दृष्टि और सार्वजनिक टिप्पणी के लिए फ़ॉलो करें।",
        socials: [
          { id: "instagram", label: "इंस्टाग्राम", icon: Instagram, href: "#" },
          { id: "linkedin", label: "लिंक्डइन", icon: Linkedin, href: "#" },
          { id: "youtube", label: "यूट्यूब", icon: Youtube, href: "#" },
        ],
        tagsHeading: "मान्यता एवं उपलब्धियाँ",
        tags: [
          {
            id: "award",
            label: "राष्ट्रीय पुरस्कार",
            icon: Award,
            details: {
              sideLabel: "राजीव गांधी मानव सेवा पुरस्कार · 2012",
              tag: "भारत सरकार की मान्यता",
              heading: "राजीव गांधी मानव सेवा पुरस्कार - बाल कल्याण के लिए राष्ट्रीय पुरस्कार",
              year: "19 नवंबर 2013 · नई दिल्ली",
              body: "तत्कालीन केंद्रीय महिला एवं बाल विकास मंत्री श्रीमती कृष्णा तीरथ द्वारा प्रदान किया गया, यह बच्चों की सेवा के लिए भारत के सर्वोच्च सम्मानों में से एक है। डॉ. दलवाई को न्यू होराइजन्स चाइल्ड डेवलपमेंट सेंटर में एक दशक के नेतृत्व के लिए यह पुरस्कार मिला - जहाँ बहु-विषयक देखभाल 10,000 से अधिक विशेष आवश्यकता वाले बच्चों तक पहुँची।",
            },
          },
          {
            id: "legal",
            label: "कानूनी मील का पत्थर",
            icon: Scale,
            details: {
              sideLabel: "मास्टर शिव शेट्टी केस · 2013",
              tag: "भारत में अपनी तरह की पहली कानूनी मिसाल",
              heading: "मास्टर शिव शेट्टी केस - हर न्यूरोडायवर्जेंट बच्चे के लिए एक अदालती जीत",
              year: "राज्य बाल अधिकार संरक्षण आयोग · मुंबई · 2013",
              body: "डॉ. दलवाई ने एक ऐसे मामले में केंद्रीय चिकित्सा अधिवक्ता के रूप में कार्य किया जिसने भारत में समावेशी शिक्षा की दिशा बदल दी। SCPCR ने एक मुंबई स्कूल को एक ऑटिस्टिक बच्चे को फिर से प्रवेश देने और शैडो टीचर प्रदान करने का आदेश दिया - पहली बार किसी भारतीय कानूनी निकाय ने मुख्यधारा की कक्षा में किसी न्यूरोडायवर्जेंट बच्चे को यह अधिकार दिया।",
            },
          },
          {
            id: "covid",
            label: "कोविड नेतृत्व",
            icon: ShieldPlus,
            details: {
              sideLabel: "ARCH मॉडल और IAP दिशानिर्देश · 2020–21",
              tag: "राष्ट्रीय महामारी प्रतिक्रिया",
              heading: "जब महामारी ने बच्चों को धमकाया, डॉ. दलवाई ने राष्ट्रीय स्तर पर प्रतिक्रिया दी",
              year: "2020–2021",
              body: "जैसे ही COVID-19 ने पूरे भारत में विकासात्मक देखभाल को बाधित किया, डॉ. दलवाई ने ARCH मॉडल डिज़ाइन किया - लॉकडाउन के दौरान बच्चों और परिवारों की रक्षा के लिए एक घर-आधारित मनोसामाजिक हस्तक्षेप। उन्होंने IAP के राष्ट्रीय आम सहमति दिशानिर्देशों का सह-लेखन किया और महाराष्ट्र सरकार के पीडियाट्रिक COVID टास्क फोर्स में शामिल हुए।",
            },
          },
          {
            id: "policy",
            label: "नीति समर्थन",
            icon: Megaphone,
            details: {
              sideLabel: "संसदीय और नीति समर्थन · 2007 – वर्तमान",
              tag: "संसदीय एवं राष्ट्रीय शासन",
              heading: "चिकित्सा संसद से मिलती है - एक डॉक्टर जो राष्ट्रीय नीति को आकार देता है",
              year: "2007 – वर्तमान",
              body: "डॉ. दलवाई भारतीय सार्वजनिक नीति के उच्चतम स्तरों पर एक सतत आवाज़ रहे हैं। कुपोषण के खिलाफ नागरिक गठबंधन के संस्थापक सदस्य के रूप में, उन्होंने सांसद सुप्रिया सुले और सचिन पायलट के साथ काम किया। उन्होंने NCPCR की किशोर न्याय समीक्षा उप-समिति में सेवा की और 2024 में IAP-UNICEF राष्ट्रीय शिखर सम्मेलन में मुख्य वक्ता थे।",
            },
          },
          {
            id: "institute",
            label: "संस्थान",
            icon: Building2,
            details: {
              sideLabel: "न्यू होराइजन्स ग्रुप · स्थापना फरवरी 2003",
              tag: "शून्य से निर्मित",
              heading: "न्यू होराइजन्स - एक क्लिनिक से राष्ट्रीय मॉडल तक",
              year: "फरवरी 2003 में स्थापित · मुंबई",
              body: "जो एक क्लिनिक से शुरू हुआ वह अब भारत का सबसे व्यापक अंतर-विषयक बाल विकास पारिस्थितिकी तंत्र है: मुंबई भर में छह केंद्र, 110 सदस्यीय विशेषज्ञ टीम, और IAP फेलोशिप और TISS-संबद्ध स्नातकोत्तर डिप्लोमा प्रदान करने वाला एक अनुसंधान और शिक्षा प्रभाग। 20,000 से अधिक बच्चों को व्यक्तिगत, परिणाम-आधारित कार्यक्रम दिए गए हैं।",
            },
          },
          {
            id: "oration",
            label: "सहकर्मी मान्यता",
            icon: Users,
            details: {
              sideLabel: "डॉ. KK घोष ओरेशन IAP 2024 और डॉ. BA भरूचा 2025",
              tag: "सहकर्मी मान्यता",
              heading: "साथियों द्वारा सम्मानित - पेशेवर मान्यता का उच्चतम रूप",
              year: "2024 और 2025",
              body: "2024 में, डॉ. दलवाई को बांकुरा में चौथे वार्षिक IAP राष्ट्रीय सम्मेलन में डॉ. KK घोष ओरेशन प्राप्त हुआ। 2025 में उन्हें डॉ. BA भरूचा ओरेशन अवार्ड से सम्मानित किया गया। इसके अलावा डॉ. लिखोती ओरेशन (दुबई, 2022), डॉ. एम. आर. शेनॉय ओरेशन (मंगलोर, 2018), और IMA मुंबई से एमर्जिंग स्टार ऑफ मेडिसिन (2010) भी प्राप्त किए।",
            },
          },
        ],
      }
    : {
        badge: "From the Founder's Desk",
        titlePrefix: "Meet",
        name: "Dr. Samir Hasan Dalwai",
        credentials: "MD · DNB · DCH · FCPS · FIAP · LLB",
        roles: [
          "Developmental & Behavioural Pediatrician",
          "Founder, New Horizons Group",
          "National Policy Advocate",
        ],
        pullQuote:
          "The biggest threat to children's future isn't language - it's screen addiction, shrinking playtime, and pressure-cooker schooling. It's time we had a child-first lens, not a politics-first lens.",
        pullQuoteAttribution: "- Dr. Samir Dalwai, Free Press Journal, June 2025",
        bio:
          "For over two decades, Dr. Samir Dalwai has stood at the intersection of medicine, law, and public policy - reshaping how India understands, treats, and includes its most vulnerable children. Starting with a single clinic in Mumbai in 2003, he built the New Horizons Group into a 110-member interdisciplinary powerhouse, while driving national clinical guidelines, landmark legal precedents, and parliamentary reform.",
        bioBeliefLabel: "His guiding belief:",
        bioBeliefHighlight: "Every child can do better.",
        bioQuote:
          "It's a misconception that a child with autism does not get better. We need a different perspective - one that targets parents and society to make a difference.",
        bioQuoteAttribution: "- Dr. Samir Dalwai, Free Press Journal",
        pressHeading: "As seen in",
        pressBadges: [
          { id: "fpj", label: "Free Press Journal", icon: Newspaper },
          { id: "air", label: "All India Radio", icon: Radio },
          { id: "ndtv", label: "NDTV", icon: Tv },
          { id: "toi", label: "Times of India", icon: Newspaper },
          { id: "mm", label: "Mumbai Mirror", icon: Newspaper },
          { id: "rs", label: "Raj Shamani (YouTube)", icon: Youtube },
        ],
        socialsHeading: "Connect with Dr. Dalwai",
        socialsCTA: "Follow for the latest thinking, child-development insights, and public commentary.",
        socials: [
          { id: "instagram", label: "Instagram", icon: Instagram, href: "#" },
          { id: "linkedin", label: "LinkedIn", icon: Linkedin, href: "#" },
          { id: "youtube", label: "YouTube", icon: Youtube, href: "#" },
        ],
        tagsHeading: "Recognition & Achievements",
        tags: [
          {
            id: "award",
            label: "National award",
            icon: Award,
            details: {
              sideLabel: "Rajiv Gandhi Manav Seva Award · 2012",
              tag: "Government of India recognition",
              heading: "Rajiv Gandhi Manav Seva Award - National Awards for Child Welfare",
              year: "Conferred 19 November 2013 · New Delhi",
              body: "Awarded by Smt. Krishna Tirath, then Union Minister for Women and Child Development, this is one of India's highest honours for service to children. Dr. Dalwai received it for a decade of leadership at New Horizons Child Development Centre - where multidisciplinary care reached over 10,000 children with special needs, opening doors to dignity, language, learning, and inclusion that many families had been told were permanently closed.",
            },
          },
          {
            id: "legal",
            label: "Legal landmark",
            icon: Scale,
            details: {
              sideLabel: "Master Shiv Shetty Case · 2013 · First of its kind in India",
              tag: "First legal precedent of its kind in India",
              heading: "The Master Shiv Shetty Case - a courtroom win for every neurodivergent child",
              year: "State Commission for Protection of Child Rights · Mumbai · 2013",
              body: "Dr. Dalwai served as the central medical advocate in a case that changed the course of inclusive education in India. The SCPCR ordered a Mumbai school to re-admit an autistic child and provide a shadow teacher - the first time any Indian legal body granted a neurodivergent child this right in a mainstream classroom. Covered by the Times of India and Mumbai Mirror, the ruling set a national standard and embodied Dr. Dalwai's conviction that \"inclusion is about attitude, not just infrastructure.\"",
            },
          },
          {
            id: "covid",
            label: "COVID leadership",
            icon: ShieldPlus,
            details: {
              sideLabel: "ARCH Model & IAP Guidelines · 2020–21",
              tag: "National pandemic response",
              heading: "When the pandemic threatened children, Dr. Dalwai responded nationally",
              year: "2020–2021",
              body: "As COVID-19 disrupted developmental care across India, Dr. Dalwai designed the ARCH Model - a home-based psychosocial intervention to protect children and families through lockdown. He co-authored the Indian Academy of Pediatrics' national consensus guidelines for paediatric COVID management (Indian Pediatrics, May 2021), joined the Government of Maharashtra's Task Force for Paediatric COVID, and represented developmental paediatrics on national platforms including NDTV, ensuring the voice of children with special needs was heard.",
            },
          },
          {
            id: "policy",
            label: "Policy advocacy",
            icon: Megaphone,
            details: {
              sideLabel: "Parliamentary & Policy Advocacy · 2007 – present",
              tag: "Parliamentary & national governance",
              heading: "Medicine meets parliament - a doctor who shapes national policy",
              year: "2007 – present",
              body: "Dr. Dalwai has been a consistent voice at the highest levels of Indian public policy. As a founding member of the Citizens Alliance Against Malnutrition, he worked alongside MPs Supriya Sule and Sachin Pilot to audit child nutrition data on the ground. He served on the NCPCR Sub-committee for Juvenile Justice Review, co-developed the Charter of Entitlements for Inclusive Education with BMC and Pratham, and was keynote speaker at the IAP-UNICEF national summit on Inclusive Early Childhood Development in 2024.",
            },
          },
          {
            id: "institute",
            label: "The institution",
            icon: Building2,
            details: {
              sideLabel: "New Horizons Group · est. February 2003 · Mumbai",
              tag: "Built from the ground up",
              heading: "New Horizons - from a single clinic to a national model",
              year: "Founded February 2003 · Mumbai",
              body: "What began as one clinic is now India's most comprehensive interdisciplinary child development ecosystem: six centres across Mumbai, a 110-member specialist team, and a research and education arm offering IAP Fellowships and a TISS-affiliated Post Graduate Diploma in Special Education. The New Horizons Health & Research Foundation collaborates with the University of New Mexico (ECHO Model) for monthly international training since 2010. Over 20,000 children have been given individualised, outcomes-based programs - many told they had no path forward.",
            },
          },
          {
            id: "oration",
            label: "Peer recognition",
            icon: Users,
            details: {
              sideLabel: "Dr. KK Ghosh Oration IAP 2024 & Dr. BA Bharucha 2025",
              tag: "Peer recognition",
              heading: "Honoured by peers - the highest form of professional recognition",
              year: "2024 & 2025",
              body: "In 2024, Dr. Dalwai received the Dr. KK Ghosh Oration at the 4th Annual IAP National Conference in Bankura - awarded for his commitment to training paediatricians across India, travelling every weekend to share knowledge and raise clinical standards nationwide. In 2025 he was honoured with the Dr. BA Bharucha Oration Award. These follow a long trail of peer honours: the Dr. Likhouti Oration (Dubai, 2022), Dr. M. R. Shenoy Oration (Mangalore, 2018), Emerging Star of Medicine (IMA Mumbai, 2010), and Samaj-Shri Gold Medal for Health Care (2005).",
            },
          },
        ],
      };

  const activeTagData = content.tags.find((t) => t.id === activeTag);
  const rotatingQuotes = [
    { text: content.pullQuote, attribution: content.pullQuoteAttribution },
    { text: content.bioQuote, attribution: content.bioQuoteAttribution },
  ];

  useEffect(() => {
    const id = window.setInterval(() => {
      setQuoteIndex((i) => (i + 1) % rotatingQuotes.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [rotatingQuotes.length]);

  const currentQuote = rotatingQuotes[quoteIndex];

  return (
    <section
      id="founders-message"
      ref={ref}
      className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-white to-pink-50 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-br from-pink-100/30 to-transparent rounded-full blur-3xl" />

      <div className="container relative">
        <div
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            {content.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold mt-4 mb-4 leading-tight">
            {content.titlePrefix}{" "}
            <span className="text-gradient whitespace-nowrap">{content.name}</span>
          </h2>
          <p className="text-xs sm:text-sm font-medium tracking-[0.2em] text-slate-500 uppercase">
            {content.credentials}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Photo and Title */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="sticky top-28">
              <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl p-6 sm:p-8 text-center overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,146,60,0.15),transparent_50%)]" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-pink-500 to-rose-500" />
                <div className="relative w-full max-w-[320px] mx-auto mb-5 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={founderImg}
                    alt="Dr. Samir Hasan Dalwai - Founder, New Horizons Group"
                    className="absolute inset-0 w-full h-full object-cover object-top scale-[1.35] origin-top group-hover:scale-[1.4] transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold mb-1 text-white">
                  {content.name}
                </h3>
                <p className="text-xs sm:text-sm text-blue-300/90 font-medium tracking-wider mb-4">
                  {content.credentials}
                </p>
                <div className="space-y-1.5">
                  {content.roles.map((role, i) => (
                    <p key={i} className="text-sm text-white/70 leading-snug">
                      {role}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-100 shadow-xl relative overflow-hidden">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-blue-500/10" />

              <div className="space-y-6 text-gray-600 relative z-10">
                {/* Rotating pull quotes */}
                <div className="relative bg-gradient-to-br from-blue-50 to-pink-50 border-l-4 border-blue-500 rounded-r-2xl p-5 sm:p-6 overflow-hidden">
                  <div
                    key={quoteIndex}
                    className="animate-in fade-in slide-in-from-bottom-2 duration-700"
                  >
                    <p className="text-base sm:text-lg font-serif italic text-slate-800 leading-relaxed min-h-[6rem]">
                      &ldquo;{currentQuote.text}&rdquo;
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium mt-3">
                      {currentQuote.attribution}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    {rotatingQuotes.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setQuoteIndex(i)}
                        aria-label={`Show quote ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === quoteIndex
                            ? "w-8 bg-blue-500"
                            : "w-4 bg-blue-200 hover:bg-blue-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  {content.bio}
                </p>

                {/* Guiding belief */}
                <p className="text-lg sm:text-xl lg:text-2xl font-serif leading-snug text-slate-800">
                  {content.bioBeliefLabel}{" "}
                  <span className="text-gradient font-bold">
                    {content.bioBeliefHighlight}
                  </span>
                </p>
              </div>
            </div>

            {/* Recognition & Achievements - placed beside founder photo, under bio */}
            <div className="mt-6 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-100 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                {content.tagsHeading}
              </p>
              <div className="h-px flex-1 hidden sm:block bg-gradient-to-r from-blue-200 to-transparent ml-4" />
            </div>

            <div className="flex flex-wrap gap-2">
              {content.tags.map(({ id, label, icon: Icon }) => {
                const isActive = activeTag === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setActiveTag(isActive ? null : id)}
                    aria-expanded={isActive}
                    aria-controls={`founder-panel-${id}`}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500 to-pink-500 text-white border-transparent shadow-md"
                        : "bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 border-transparent"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
          </div>

        {/* Expanding panel - positioned at grid level to span full width */}
        {activeTagData && (
          <div
            className={`lg:col-span-5 transition-all duration-500 ease-in-out ${
              activeTagData ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              id={`founder-panel-${activeTagData.id}`}
              className="w-full rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/60 to-pink-50/40 overflow-hidden mt-6 grid grid-cols-1 lg:grid-cols-5 gap-0"
            >
              {/* Image placeholder - aligned with founder photo column */}
              <div className="lg:col-span-2 relative w-full h-56 lg:h-80 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-blue-100">
                <div className="flex flex-col items-center gap-2 text-slate-400">
                  <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center shadow-sm border border-blue-200">
                    <activeTagData.icon className="w-7 h-7 text-blue-500" />
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wider">
                    Image placeholder
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-3">
                  <p className="text-xs sm:text-sm text-white font-medium leading-snug">
                    {activeTagData.details.sideLabel}
                  </p>
                </div>
              </div>

              {/* Text - aligned with content column */}
              <div className="lg:col-span-3 p-6 sm:p-8 relative">
                <button
                  type="button"
                  onClick={() => setActiveTag(null)}
                  aria-label="Close"
                  className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-white/70 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#A9C63B] bg-[#A9C63B]/10 border border-[#A9C63B]/20 px-2.5 py-1 rounded-full mb-3">
                  {activeTagData.details.tag}
                </span>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-serif font-semibold text-slate-900 leading-snug mb-2 pr-8">
                  {activeTagData.details.heading}
                </h4>
                <p className="text-xs sm:text-sm font-medium text-blue-600 mb-3">
                  {activeTagData.details.year}
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                  {activeTagData.details.body}
                </p>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </section>
  );
};

export default FounderMessageSection;
