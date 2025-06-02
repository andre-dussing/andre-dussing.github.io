import {
  sql,
  python,
  java,
  r,
  javascript,
  html,
  css,
  tensorflow,
  excel,
  hadoop,
  git,
  letzgpt,
  bsp6,
  payloadmaster,
  docker,
  mhft,
  sketcher,
  plansoft,
  CompileVortex,
  uni,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Python", icon: python },
  { title: "SQL", icon: sql },
  { title: "R", icon: r },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Tensorflow", icon: tensorflow },
  { name: "Excel", icon: excel },
  { name: "Hadoop", icon: hadoop },
  { name: "Docker", icon: docker },
  { name: "Git", icon: git },
];

export const experiences = [
  {
    title: "Bachelor in Computer Science",
    company_name: "University of Luxembourg",
    icon: uni,
    iconBg: "#161329",
    date: "Sep 2018 - Sep 2023",
    points: [
      "Emphasis on acquiring knowledge through semester-based research and development projects.",
      "Multilingual program that covers core areas such as algorithms, data structures, programming, information management, and theoretical informatics.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "4PACE GMBH",
    icon: plansoft,
    iconBg: "#161329",
    date: "May 2022 - Oct 2023",
    points: [
      "Applied expertise in SQL and JavaScript for data processing, backend logic, and performance optimization.",
      "Conducted white-box and black-box testing to identify and reduce bugs, improving product stability and performance.",
      "Customized software configurations to meet diverse customer requirements and specifications.",
      "Collaborated in an agile development team using SCRUM and OKR frameworks to maintain and enhance product quality over time.",
    ], 
  },
  {
    title: "Master in Data Science",
    company_name: "University of Luxembourg",
    icon: uni,
    iconBg: "#161329",
    date: "September 2023 - today",
    points: [
      "Multidisciplinary approach combining mathematics and computer science to solve complex data challenges.",
      "Comprehensive curriculum covering data management, statistical learning, machine learning, and modeling.",
      "Hands-on learning through projects and a final-semester internship in industry or research.",
    ],
  },
];

export const projects = [
{
  name: "LetzGPT - Luxembourg Travel Chatbot",
  description:
    "Conversational AI assistant built with LangChain and GPT-4o Mini to provide contextual, multilingual travel information about Luxembourg, including transport, events, weather, and dining recommendations. This was a team project (4 members) developed during the NLP course at the University of Luxembourg.",
  tags: [
    { name: "LangChain", color: "blue-text-gradient" },
    { name: "OpenAI GPT-4o Mini", color: "green-text-gradient" },
    { name: "Streamlit", color: "pink-text-gradient" },
    { name: "Foursquare API", color: "yellow-text-gradient" },
    { name: "Ticketmaster API", color: "orange-text-gradient" },
    { name: "Mobiliteit API", color: "purple-text-gradient" },
    { name: "OpenWeather API", color: "cyan-text-gradient" },
    { name: "ChromaDB", color: "red-text-gradient" },
  ],
  image: letzgpt, 
  source_code_link: "https://github.com/othmane-mahfoud/travel-agent-luxembourg/tree/main", 
  },

{
  name: "Hate Speech Detection on Social Media",
  description:
    "Deep learning-based NLP project using BERT and HateBERT models to detect hate speech in short social media messages. Fine-tuned multiple transformer models and evaluated performance using metrics like F1-score.",
  tags: [
    { name: "Python", color: "blue-text-gradient" },
    { name: "Transformers", color: "green-text-gradient" },
    { name: "BERT/HateBERT", color: "pink-text-gradient" },
    { name: "HuggingFace", color: "yellow-text-gradient" },
    { name: "NLP", color: "purple-text-gradient" },
  ],
  image: bsp6, 
  source_code_link: "https://github.com/andre-dussing/bsp6-hate-speech-detection", 
},

];
