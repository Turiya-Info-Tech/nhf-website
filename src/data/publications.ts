export interface Publication {
  id: number;
  year: number | null;
  authors: string;
  title: string;
  journal: string;
  link: string;
  doi: string;
  type: string;
}

export const publications: Publication[] = [
  {
    id: 1,
    year: 2025,
    authors: "Dalwai S, Unni JC, Meenai Z, Multani KS, Boopathy N, Srivastava L,",
    title: "Impact of Developmental Pediatrics-Based Training for Primary School Teachers in Early Identification of Learning Disability",
    journal: "Clinical Pediatrics",
    link: "https://journals.sagepub.com/doi/10.1177/00099228251381577",
    doi: "10.1177/00099228251381577",
    type: "Research Paper"
  },
  {
    id: 2,
    year: 2025,
    authors: "Khan S, Sookhadwala H, Mullaji S, Ghag I, Dalwai S.",
    title: "A Nurturing Care-Based Intervention for Autism Spectrum Disorder: A Case Report",
    journal: "Indian Journal of Developmental Behavioral Pediatrics",
    link: "https://zenodo.org/records/17271365",
    doi: "10.5281/zenodo.17271365",
    type: "Case Report"
  },
  {
    id: 3,
    year: 2025,
    authors: "Samir H. Dalwai, K.S. Multani, Hilla Sookhadwala",
    title: "Autism spectrum disorder: An Indian perspective",
    journal: "Medical Journal Armed Forces India",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0377123725002291",
    doi: "10.1016/j.mjafi.2025.08.003",
    type: "Research Paper"
  },
  {
    id: 4,
    year: 2025,
    authors: "Meenai, Zafar Mahmood; Nair, M. K. C.; Dalwai, Samir; et al.",
    title: "Consensus Guidelines of the IAP—Neurodevelopmental Pediatrics Chapter on Developmentally Supportive Follow-Up for High-Risk Infants",
    journal: "Indian Pediatrics",
    link: "https://link.springer.com/10.1007/s13312-025-00110-9",
    doi: "10.1007/s13312-025-00110-9",
    type: "Consensus Guidelines"
  },
  {
    id: 5,
    year: 2025,
    authors: "Hishobkar, Tejasvi Sunil; Sookhadwala, Hilla; Lekha Tiwari; Khan, Shagufta; Dalwai, Samir H",
    title: "Multidisciplinary Approach and Neurocognitive Outcomes in a Child with Becker Muscular Dystrophy",
    journal: "The Indian Practitioner",
    link: "https://www.articles.theindianpractitioner.com/index.php/tip/article/view/1919",
    doi: "",
    type: "Case Report"
  },
  {
    id: 6,
    year: 2025,
    authors: "Dalwai, Samir H; Sookhadwala, Hilla; Khan, Misbah; Joshi, Madhura; Rebello, Kern; Panchal, Rucha",
    title: "Management of Echolalia in Children with ASD: Effectiveness of a Novel Behavioural Approach",
    journal: "Asia Pacific Journal of Pediatrics and Child Health",
    link: "https://www.apjpch.com/?page=article&number=308",
    doi: "",
    type: "Research Paper"
  },
  {
    id: 7,
    year: 2025,
    authors: "Shaju Marina; Sookhadwala Hilla; Rebello Kern; Joshi Madhura; Panchal Rucha; Dalwai Samir H",
    title: "Successful Online Early Intervention in a Child with Features Suggestive of Autism Spectrum Disorder",
    journal: "The Indian Practitioner",
    link: "https://theindianpractitioner.com/the-indian-practitioner-april-2025-issue/",
    doi: "",
    type: "Case Report"
  },
  {
    id: 8,
    year: 2025,
    authors: "Dalwai, Samir H; Sookhadwala, Hilla",
    title: "Phenotypic and Behavioral Variability in Fragile X Syndrome: A Case Series",
    journal: "Sankalp MahaIAP Bulletin",
    link: "",
    doi: "",
    type: "Case Series"
  },
  {
    id: 9,
    year: 2025,
    authors: "Dr Samir H Dalwai",
    title: "Practice Pearls: Autism Spectrum Disorder - what a practicing pediatrician should know",
    journal: "IAP Publication",
    link: "",
    doi: "",
    type: "Practice Guide"
  },
  {
    id: 10,
    year: 2024,
    authors: "Dalwai, Samir H, Amdekar, Y.K.",
    title: "Evolving A Children's Manifesto",
    journal: "Indian Pediatrics",
    link: "https://link.springer.com/10.1007/s13312-024-3299-5",
    doi: "10.1007/s13312-024-3299-5",
    type: "Research Paper"
  },
  {
    id: 11,
    year: 2024,
    authors: "Surana, Indu; Dalwai, Samir H.",
    title: "Parent-powered Autism Intervention",
    journal: "Indian Pediatrics Case Reports",
    link: "https://journals.lww.com/10.4103/ipcares.ipcares_154_24",
    doi: "10.4103/ipcares.ipcares_154_24",
    type: "Case Report"
  },
  {
    id: 12,
    year: 2024,
    authors: "Dalwai, Samir H; Sookhadwala, Hilla; Khan, Misbah; Kulkarni, Sandhya",
    title: "Autism Spectrum Disorder",
    journal: "Indian Journal of Practical Pediatrics",
    link: "https://www.ijpp.in/admin/uploadimage/Vol.26_No.2.pdf",
    doi: "",
    type: "Review Article"
  },
  {
    id: 13,
    year: 2024,
    authors: "Nair, M. K. C.; Ahmed, Shabina; Multani, Kawaljit Singh; et al.",
    title: "Consensus Statement of the IAP - Neurodevelopmental Chapter On Neurodevelopmental Disorders Habilitation Process",
    journal: "Indian Pediatrics",
    link: "https://link.springer.com/10.1007/s13312-024-3081-8",
    doi: "10.1007/s13312-024-3081-8",
    type: "Consensus Guidelines"
  },
  {
    id: 14,
    year: 2024,
    authors: "Dalwai, Samir H.; Rebello, Kern; Joshi, Madhura",
    title: "A Novel Comprehensive Approach Transforming Haircut Experiences in Autism",
    journal: "Indian Journal of Pediatrics",
    link: "https://link.springer.com/10.1007/s12098-023-04996-w",
    doi: "10.1007/s12098-023-04996-w",
    type: "Research Paper"
  },
  {
    id: 15,
    year: 2023,
    authors: "Dalwai, Samir; Sookhadwala, Hilla; Chawla, Barkha",
    title: "Gains from Covid Lockdown: Moving to Online Platforms for Better Service and Outcome in Autism",
    journal: "The Indian Practitioner",
    link: "https://i-scholar.in/index.php/IP/article/view/223157",
    doi: "",
    type: "Research Paper"
  },
  {
    id: 16,
    year: 2023,
    authors: "Dalwai, Samir; Sookhadwalla, Hilla",
    title: "Stem Cell Therapy for Autism Spectrum Disorder and Other Developmental Disorders: What is the Recommendation?",
    journal: "The Indian Practitioner",
    link: "https://theindianpractitioner.com/stem-cell-therapy-for-autism-spectrum-disorder-and-other-developmental-disorders-what-is-the-recommendation/",
    doi: "",
    type: "Review Article"
  },
  {
    id: 17,
    year: 2023,
    authors: "Dalwai, Samir",
    title: "From Cradle to Classroom - The hazardous leap of early childhood",
    journal: "Indian Journal of Developmental Behavioural Pediatrics",
    link: "https://journals.indexcopernicus.com/api/file/viewByFileId/2013351",
    doi: "",
    type: "Commentary"
  },
  {
    id: 18,
    year: 2023,
    authors: "Dalwai, Samir",
    title: "A Simple Hug Matters",
    journal: "Outlook India",
    link: "https://www.outlookindia.com/culture-society/a-simple-hug-matters-news-317072",
    doi: "",
    type: "Opinion"
  },
  {
    id: 19,
    year: 2022,
    authors: "Juneja, Monica; Gupta, Arpita; Sairam, Smitha; et al.",
    title: "Diagnosis and Management of Global Development Delay: Consensus Guidelines",
    journal: "Indian Pediatrics",
    link: "https://link.springer.com/10.1007/s13312-022-2522-5",
    doi: "10.1007/s13312-022-2522-5",
    type: "Consensus Guidelines"
  },
  {
    id: 20,
    year: 2022,
    authors: "Gupta, Piyush; Shah, Dheeraj; Bedi, Nidhi; Galagali, Preeti; Dalwai, Samir; et al.",
    title: "Indian Academy of Pediatrics Guidelines on Screen Time and Digital Wellness in Infants, Children and Adolescents",
    journal: "Indian Pediatrics",
    link: "https://link.springer.com/10.1007/s13312-022-2477-6",
    doi: "10.1007/s13312-022-2477-6",
    type: "Guidelines"
  },
  {
    id: 21,
    year: 2022,
    authors: "Kalawadia, Dhruv; Ramkrishna, Suradharadhika; Verma, Bela; Dalwai, Samir; Garg, Manish R",
    title: "A study of the impact of the ARCH model of parenting on the psychosocial well-being of children and their parents during the COVID-19 pandemic",
    journal: "Indian Journal of Child Health",
    link: "https://mansapublishers.com/index.php/ijch/article/view/3400",
    doi: "",
    type: "Research Paper"
  },
  {
    id: 22,
    year: 2022,
    authors: "Dalwai, SH; Rohil, A; Chawla, B; Garg, MR; Merchant, R",
    title: "Phelan McDermid Syndrome: A Case Report",
    journal: "Asia Pacific Journal of Pediatrics and Child Health",
    link: "https://www.apjpch.com/?page=article&number=148",
    doi: "",
    type: "Case Report"
  },
  {
    id: 23,
    year: 2022,
    authors: "Dalwai, Samir; Rohil, Aradhana; Garg, Manish; Chawla, Barkha; Joshi, Madhura; Mathur, Supriya",
    title: "Neurodevelopmental Outcome in A Child With West Syndrome On Multidisciplinary Intervention – A Case Report",
    journal: "Bangladesh Journal of Child Health",
    link: "https://www.banglajol.info/index.php/BJCH/article/view/62900",
    doi: "10.3329/bjch.v45i3.62900",
    type: "Case Report"
  },
  {
    id: 24,
    year: 2022,
    authors: "Samir H Dalwai, Jeeson C Unni, Shabina Ahmed, Kawaljit Singh Multani, Leena Deshpande, Leena Srivastava",
    title: "Autism Spectrum Disorder",
    journal: "IAP Handbook of Developmental and Behavioral Pediatrics",
    link: "https://jaypeebrothers.com/pgDetails.aspx?cat=s&book_id=9789389776485",
    doi: "",
    type: "Book Chapter"
  },
  {
    id: 25,
    year: 2021,
    authors: "Rajagopalan, Murlidhar; Chitkara, Amar Jeet; Dalwai, Samir; et al.",
    title: "Burden of Disease, Unmet Needs in the Diagnosis and Management of Atopic Dermatitis: An Indian Expert Consensus",
    journal: "Clinical, Cosmetic and Investigational Dermatology",
    link: "https://www.dovepress.com/burden-of-disease-unmet-needs-in-the-diagnosis-and-management-of-atopi-peer-reviewed-fulltext-article-CCID",
    doi: "10.2147/CCID.S327593",
    type: "Consensus Statement"
  },
  {
    id: 26,
    year: 2021,
    authors: "Mukherjee, Sharmila Banerjee; Agrawal, Deepti; Mishra, Devendra; et al.",
    title: "Indian Academy of Pediatrics Position Paper on Nurturing Care for Early Childhood Development",
    journal: "Indian Pediatrics",
    link: "https://link.springer.com/10.1007/s13312-021-2332-1",
    doi: "10.1007/s13312-021-2332-1",
    type: "Position Paper"
  },
  {
    id: 27,
    year: 2021,
    authors: "Dalwai, Samir H; Parakh, Anushka; Garg, Manish; Chawla, Barkha; Joshi, Madhura Rohit; Kumari, Shruti",
    title: "Multidisciplinary early intervention in a child with autism and childhood apraxia of speech",
    journal: "Indian Pediatrics Case Reports",
    link: "https://journals.lww.com/10.4103/ipcares.ipcares_136_21",
    doi: "10.4103/ipcares.ipcares_136_21",
    type: "Case Report"
  },
  {
    id: 28,
    year: 2021,
    authors: "Dalwai, Samir Hasan",
    title: "The curious incident of the dog in the nighttime",
    journal: "Indian Pediatrics Case Reports",
    link: "https://journals.lww.com/10.4103/ipcares.ipcares_251_21",
    doi: "10.4103/ipcares.ipcares_251_21",
    type: "Book Review"
  },
  {
    id: 29,
    year: 2020,
    authors: "Hyman SL, Levy SE, Myers SM, AAP Council on Children With Disabilities",
    title: "Identification, Evaluation, and Management of Children With Autism Spectrum Disorder",
    journal: "Pediatrics",
    link: "",
    doi: "10.1542/peds.2019-3447",
    type: "Clinical Report"
  },
  {
    id: 30,
    year: 2020,
    authors: "Parekh, Bakul J.; Dalwai, Samir H.",
    title: "Psychosocial Impact of COVID-19 Pandemic on Children in India",
    journal: "Indian Pediatrics",
    link: "http://link.springer.com/10.1007/s13312-020-2060-y",
    doi: "10.1007/s13312-020-2060-y",
    type: "Commentary"
  },
  {
    id: 31,
    year: 2020,
    authors: "Bharadva, Ketan; Shastri, Digant; Gaonkar, Narayan; et al.",
    title: "Consensus Statement of Indian Academy of Pediatrics on Early Childhood Development",
    journal: "Indian Pediatrics",
    link: "https://link.springer.com/10.1007/s13312-020-1963-y",
    doi: "10.1007/s13312-020-1963-y",
    type: "Consensus Statement"
  },
  {
    id: 32,
    year: 2020,
    authors: "Federation of Obstetric and Gynaecological Societies of India (FOGSI); NNF; IAP; Dalwai, Samir; et al.",
    title: "Perinatal-Neonatal Management of COVID-19 Infection — Guidelines of FOGSI, NNF, and IAP",
    journal: "Indian Pediatrics",
    link: "http://link.springer.com/10.1007/s13312-020-1852-4",
    doi: "10.1007/s13312-020-1852-4",
    type: "Guidelines"
  },
  {
    id: 33,
    year: 2020,
    authors: "Rege, Kamini Prakash; Dalwai, Samir H.",
    title: "Psychosocial wellness among children – suggestions and recommendation to parents during COVID-19 pandemic",
    journal: "Scholarly Research Journal for Interdisciplinary Studies",
    link: "https://oaji.net/articles/2021/1174-1612859240.pdf",
    doi: "",
    type: "Review Paper"
  },
  {
    id: 34,
    year: 2019,
    authors: "Sachdeva, Anupam; Jain, Prachi; Gunasekaran, Vinod; et al.",
    title: "Consensus Statement of the Indian Academy of Pediatrics on Diagnosis and Management of Fragile X Syndrome in India",
    journal: "Indian Pediatrics",
    link: "http://link.springer.com/10.1007/s13312-019-1504-8",
    doi: "10.1007/s13312-019-1504-8",
    type: "Consensus Guidelines"
  },
  {
    id: 35,
    year: 2018,
    authors: "Dalwai, Samir H.; Soans, Santosh T.",
    title: "Defining the Best Interest of a Child: Who Comes First–The Child or the Fetus?",
    journal: "Indian Pediatrics",
    link: "http://link.springer.com/10.1007/s13312-018-1393-2",
    doi: "10.1007/s13312-018-1393-2",
    type: "Perspective"
  },
  {
    id: 36,
    year: 2018,
    authors: "Vidyadharan, V., Tharayil, H.M., Dalwai, S.H.",
    title: "Terminological Confusion in Learning Disorders",
    journal: "Indian Pediatrics",
    link: "https://link.springer.com/article/10.1007/s13312-018-1431-0",
    doi: "10.1007/s13312-018-1431-0",
    type: "Commentary"
  },
  {
    id: 37,
    year: 2017,
    authors: "Dalwai, Samir; Ahmed, Shabina; Udani, Vrajesh; Mundkur, Nandini; Kamath, S. S.; Nair, M. K. C.",
    title: "Consensus statement of the Indian academy of pediatrics on evaluation and management of autism spectrum disorder",
    journal: "Indian Pediatrics",
    link: "http://link.springer.com/10.1007/s13312-017-1112-4",
    doi: "10.1007/s13312-017-1112-4",
    type: "Consensus Guidelines"
  },
  {
    id: 38,
    year: 2017,
    authors: "Paul, Abraham; Prasad, Chhaya; Kamath, S. S.; Dalwai, Samir; Nair, M. K. C.; Pagarkar, Waheeda",
    title: "Consensus statement of the Indian Academy of Pediatrics on newborn hearing screening",
    journal: "Indian Pediatrics",
    link: "http://link.springer.com/10.1007/s13312-017-1128-9",
    doi: "10.1007/s13312-017-1128-9",
    type: "Consensus Guidelines"
  },
  {
    id: 39,
    year: 2017,
    authors: "Dalwai, Samir H; Modak, Deepti Kanade; Bondre, Ameya P; Ansari, Sajeda; Siddiqui, Dania; Gajria, Diksha",
    title: "Effect of Multidisciplinary Intervention on Clinical Outcomes of Children with Autism Spectrum Disorder in Mumbai, India",
    journal: "Disability, CBR & Inclusive Development",
    link: "https://dcidj.org/article/10.5463/dcid.v28i2.508/",
    doi: "10.5463/dcid.v28i2.508",
    type: "Research Paper"
  },
  {
    id: 40,
    year: 2017,
    authors: "Dalwai, Samir; Unni, Jeeson; Kalra, Veena; Singhi, Pratibha; Shrivastava, Leena; Nair, Mkc",
    title: "Consensus statement of the Indian Academy of Pediatrics on evaluation and management of Attention Deficit Hyperactivity Disorder",
    journal: "Indian Pediatrics",
    link: "http://link.springer.com/10.1007/s13312-017-1052-z",
    doi: "10.1007/s13312-017-1052-z",
    type: "Consensus Guidelines"
  },
  {
    id: 41,
    year: 2017,
    authors: "Nair, M. K. C.; Prasad, Chhaya; Unni, Jeeson; Bhattacharya, Anjan; Kamath, S. S.; Dalwai, Samir",
    title: "Consensus statement of the Indian Academy of Pediatrics on evaluation and management of learning disability",
    journal: "Indian Pediatrics",
    link: "http://link.springer.com/10.1007/s13312-017-1071-9",
    doi: "10.1007/s13312-017-1071-9",
    type: "Consensus Guidelines"
  },
  {
    id: 42,
    year: 2017,
    authors: "Dalwai, Samir; Pillai, Gitanjali; Shah, Zeenal",
    title: "Intervention to Develop Social Skills in a Child with Autism with Lower Degrees of Impairment",
    journal: "Journal of Pediatrics, Perinatology and Child Health",
    link: "http://www.fortunejournals.com/articles/intervention-to-develop-social-skills-in-a-child-with-autism-with-lower-degrees-of-impairment.html",
    doi: "10.26502/jppch.7405003",
    type: "Case Study"
  },
  {
    id: 43,
    year: 2016,
    authors: "Bondre, Ameya P",
    title: "Analysis of Tools for Diagnosing Autism Spectrum Disorder in the Indian Context",
    journal: "Academic Journal of Pediatrics & Neonatology",
    link: "http://juniperpublishers.com/ajpn/AJPN.MS.ID.555562.php",
    doi: "10.19080/AJPN.2016.01.555562",
    type: "Research Paper"
  },
  {
    id: 44,
    year: 2016,
    authors: "Pagarkar, Waheeda; Duggal, Chetna; Chatterjee, Sohini; et al.",
    title: "Cognitive, Behavioural and Emotional Co-morbidities in Children with Hearing Impairment, in India",
    journal: "Asian Journal of Research in Social Sciences and Humanities",
    link: "http://www.indianjournals.com/ijor.aspx?target=ijor:ajrssh&volume=6&issue=3&article=006",
    doi: "10.5958/2249-7315.2016.00028.9",
    type: "Research Paper"
  },
  {
    id: 45,
    year: 2016,
    authors: "Dalwai, Samir; Desa, Elyska; Modak, Deepti Kanade; Bondre, Ameya",
    title: "Improvement in neurocognitive manifestations with short-term multidisciplinary intervention in DiGeorge syndrome",
    journal: "Indian Pediatrics",
    link: "http://link.springer.com/10.1007/s13312-016-0942-9",
    doi: "10.1007/s13312-016-0942-9",
    type: "Case Report"
  },
  {
    id: 46,
    year: 2014,
    authors: "Duggal, Chetna; Dalwai, Samir; Bopanna, Krutika; Datta, Vrinda; Chatterjee, Sohini; Mehta, Nita",
    title: "Childhood Developmental and Psychological Disorders",
    journal: "The Indian Journal Of Social Work",
    link: "",
    doi: "",
    type: "Research Paper"
  },
  {
    id: 47,
    year: 2013,
    authors: "Indian Academy of Pediatrics; Dalwai, Samir; Choudhury, Panna; et al.",
    title: "Consensus statement of the Indian academy of pediatrics on integrated management of severe acute malnutrition",
    journal: "Indian Pediatrics",
    link: "http://link.springer.com/10.1007/s13312-013-0111-3",
    doi: "10.1007/s13312-013-0111-3",
    type: "Consensus Statement"
  },
  {
    id: 48,
    year: 2012,
    authors: "Prasad, Chhaya Sambharya; Dalwai, Samir; Keshwal, Hemant Singh",
    title: "Chapter-20 Learning Disabilities: Community Based Approaches and Initiatives",
    journal: "Community Mental Health in India",
    link: "",
    doi: "",
    type: "Book Chapter"
  },
  {
    id: 49,
    year: 2011,
    authors: "Dias, Edwin; Dias, Meena; Nandi, Madhumita; et al.",
    title: "Correspondence",
    journal: "Indian Pediatrics",
    link: "http://link.springer.com/10.1007/s13312-011-0131-9",
    doi: "10.1007/s13312-011-0131-9",
    type: "Correspondence"
  },
  {
    id: 50,
    year: 2011,
    authors: "Dalwai, Samir H; Gajre, Mona P",
    title: "Correspondence: Essential Tremors Mimicking as Dysgraphia",
    journal: "Indian Pediatrics",
    link: "https://doi.org/10.1007/s13312-011-0131-9",
    doi: "10.1007/s13312-011-0131-9",
    type: "Correspondence"
  },
  {
    id: 51,
    year: 2010,
    authors: "For the Child Rights and Protection Program (CRPP) of IAP; Aggarwal, Kiran; Dalwai, Samir; et al.",
    title: "Recommendations on recognition and response to child abuse and neglect in the Indian setting",
    journal: "Indian Pediatrics",
    link: "http://link.springer.com/10.1007/s13312-010-0088-0",
    doi: "10.1007/s13312-010-0088-0",
    type: "Recommendations"
  }
];

// Get publications sorted by year (latest first)
export const getPublicationsSortedByYear = () => {
  return [...publications].sort((a, b) => {
    const yearA = a.year || 0;
    const yearB = b.year || 0;
    return yearB - yearA;
  });
};
