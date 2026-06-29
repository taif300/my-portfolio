"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaGlobe,
  FaBrain,
  FaShieldAlt,
  FaCloud,
  FaCode,
  FaAward,
  FaGraduationCap,
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
    FaChevronDown,
  FaHeartbeat,
  FaMicrochip,
  FaBullseye,
  FaBolt,
  FaWifi,
  FaMobileAlt,
  FaChevronLeft,
FaChevronRight,
FaSearch,
FaFileAlt,
FaExternalLinkAlt,
FaTimes,
FaPhoneAlt,
FaPaperPlane,
FaWhatsapp,
FaArrowUp,
} from "react-icons/fa";
export default function Home() {
const [mounted, setMounted] = useState(false);
const [openProject, setOpenProject] = useState("tabassar");
const [currentImage, setCurrentImage] = useState(0);
const [activeArchiveProject, setActiveArchiveProject] = useState(0);
const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
const [language, setLanguage] = useState<"ar" | "en">("ar");

const isArabic = language === "ar";
const sendContactMessage = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  const name = formData.get("name") as string;
  const message = formData.get("message") as string;

  const subject = `Portfolio Contact - ${name}`;

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=taif.alahmadi300@gmail.com&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(message)}`;

  window.open(gmailUrl, "_blank");
};

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return null;
  const copyEmail = () => {
    navigator.clipboard.writeText("taif.alahmadi300@gmail.com");
    alert("تم نسخ الإيميل!");
  };

  return (
    <main
  dir={isArabic ? "rtl" : "ltr"}
  className="min-h-screen bg-[#06070d] text-white overflow-hidden relative"
>
     <style jsx global>{`
  html {
    scroll-behavior: smooth;
  }

  .direction-ltr {
    direction: ltr;
  }
`}</style>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,229,255,0.15),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.18),transparent_30%)]" />

      <div className="absolute inset-0 opacity-25 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:90px_90px]" />

      {[...Array(28)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_12px_#22d3ee]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 3 + Math.random() * 4, repeat: Infinity }}
        />
      ))}

<nav className="sticky top-0 z-50 max-w-7xl mx-auto px-8 py-6 flex items-center justify-between bg-[#06070d]/70 backdrop-blur-xl border-b border-white/5">
  <button
    onClick={() => setLanguage(isArabic ? "en" : "ar")}
    className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/20 transition"
  >
    {isArabic ? "EN" : "AR"} <FaGlobe />
  </button>

  <div className="hidden md:flex items-center gap-5 text-gray-300">
    {[
      { label: isArabic ? "الرئيسية" : "Home", href: "#home" },
      { label: isArabic ? "عني" : "About", href: "#about" },
      { label: isArabic ? "المهارات" : "Skills", href: "#skills" },
      { label: isArabic ? "الخبرات" : "Journey", href: "#journey" },
      { label: isArabic ? "المشاريع" : "Projects", href: "#projects" },
      { label: isArabic ? "المعرض" : "Archive", href: "#project-archive" },
      { label: isArabic ? "التطوع" : "Volunteering", href: "#volunteering" },
      { label: isArabic ? "الشهادات" : "Certificates", href: "#certificates" },
      { label: isArabic ? "تواصل" : "Contact", href: "#contact" },
    ].map((item, index) => (
      <a
        key={item.label}
        href={item.href}
        className={`px-4 py-3 rounded-2xl transition ${
          index === 0 ? "bg-white/15 text-white" : "hover:text-cyan-300"
        }`}
      >
        {item.label}
      </a>
    ))}
  </div>

  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 flex items-center justify-center text-3xl font-bold shadow-lg shadow-cyan-500/30">
    T
  </div>
</nav>

<section
  id="home"
  className="relative z-10 min-h-[calc(100vh-90px)] max-w-7xl mx-auto px-8 py-16 grid lg:grid-cols-2 gap-12 items-center direction-ltr"
>
  <motion.div
    initial={{ opacity: 0, x: -80, scale: 0.95 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 1 }}
    className="order-1"
  >
    <div className="relative w-full max-w-[460px] mx-auto aspect-square rounded-3xl border border-cyan-400/40 bg-[#07111f]/80 overflow-hidden shadow-[0_0_45px_rgba(34,211,238,0.2)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(34,211,238,0.25),transparent_35%)]" />

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
        {[...Array(45)].map((_, i) => {
          const x1 = Math.random() * 500;
          const y1 = Math.random() * 500;
          const x2 = Math.random() * 500;
          const y2 = Math.random() * 500;

          return (
            <motion.line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(34,211,238,0.45)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0.2, 0.9, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.05 }}
            />
          );
        })}

        {[...Array(35)].map((_, i) => (
          <motion.circle
            key={`c-${i}`}
            cx={Math.random() * 500}
            cy={Math.random() * 500}
            r={Math.random() > 0.7 ? 5 : 3}
            fill={Math.random() > 0.75 ? "#ec00ff" : "#22d3ee"}
            animate={{ scale: [1, 1.8, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.1 }}
          />
        ))}
      </svg>

      <div className="absolute inset-8 rounded-3xl border border-cyan-400/20" />
    </div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    className={isArabic ? "order-2 text-right" : "order-2 text-left"}
  >
<div
  dir={isArabic ? "rtl" : "ltr"}
  className="inline-flex items-center gap-2 px-4 py-2.5 mb-7 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm"
>
  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
  {isArabic ? "متاحة للعمل" : "Open to Work"}
</div>

    <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
      {isArabic ? "طيف الأحمدي" : "Taif Al-Ahmadi"}
    </h1>

    <h2 className="text-xl md:text-2xl font-bold mb-7 bg-gradient-to-l from-yellow-300 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent leading-relaxed">
      {isArabic
        ? "خريجة علوم حاسب · مهتمة بالحوسبة السحابية والذكاء الاصطناعي"
        : "Computer Science Graduate · Cloud & AI Enthusiast"}
    </h2>

    <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mb-10">
      {isArabic
        ? "أحوّل الأفكار التقنية إلى حلول ذكية وعملية، وأبني تطبيقات حديثة باستخدام الحوسبة السحابية، الذكاء الاصطناعي، وعمليات النشر السحابية."
        : "I turn technical ideas into smart and practical solutions, building modern applications using cloud computing, artificial intelligence, and cloud deployment practices."}
    </p>

<div className={`flex flex-wrap gap-4 ${isArabic ? "justify-end" : "justify-start"}`}>      <a
        href="#contact"
        className="flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-gradient-to-l from-purple-500 to-cyan-400 text-white font-bold hover:scale-105 transition shadow-lg shadow-cyan-500/20"
      >
        {isArabic ? "تواصل معي" : "Contact Me"} <FaEnvelope />
      </a>

      <a
        href="/Taif-Al-Ahmadi-CV.pdf"
        download
        className="flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition"
      >
        {isArabic ? "تحميل السيرة الذاتية" : "Download CV"} <FaDownload />
      </a>
    </div>

<div className={`flex gap-5 mt-9 text-2xl ${isArabic ? "justify-end" : "justify-start"}`}>      <a
        href="https://github.com/taif300"
        target="_blank"
        className="hover:text-cyan-300 transition"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/taif-alahmadi-265448270"
        target="_blank"
        className="hover:text-blue-400 transition"
      >
        <FaLinkedin />
      </a>
    </div>
  </motion.div>
</section>

<section id="about" className="relative z-10 py-24 px-8">
  <div className="max-w-7xl mx-auto text-center mb-16">
    <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-400/40 text-cyan-400 tracking-[0.25em] text-xs mb-7">
      WHO_AM_I
    </div>

    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
      {isArabic ? "من أنا" : "Who I Am"}
    </h2>

    <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
      {isArabic
        ? "خريجة علوم حاسب مهتمة ببناء حلول تقنية تجمع بين الحوسبة السحابية، الذكاء الاصطناعي، وتطوير التطبيقات الحديثة."
        : "A Computer Science graduate passionate about building technical solutions that combine cloud computing, artificial intelligence, and modern application development."}
    </p>
  </div>

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >


      <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-7">
        {isArabic ? "أبني حلولًا تقنية تجمع بين" : "I build technical solutions that combine"}
        <span className="bg-gradient-to-l from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
          {isArabic
            ? " الحوسبة السحابية والذكاء الاصطناعي"
            : " Cloud Computing and Artificial Intelligence"}
        </span>
      </h2>

      <p className="text-gray-300 text-base md:text-lg leading-loose mb-9">
        {isArabic
          ? "أنا طيف الأحمدي، خريجة علوم حاسب بمرتبة الشرف الأولى. أهتم ببناء التطبيقات الحديثة، ونشر الحلول السحابية، وتحويل الأفكار التقنية إلى منتجات عملية وقابلة للتوسع. لدي خبرة في Azure وTerraform وFastAPI والذكاء الاصطناعي وتطوير حلول تعتمد على الـ AI والـ Cloud."
          : "I am Taif Al-Ahmadi, a Computer Science graduate with First Honor. I am passionate about building modern applications, deploying cloud solutions, and turning technical ideas into practical and scalable products. My experience includes Azure, Terraform, FastAPI, artificial intelligence, and building solutions powered by AI and cloud technologies."}
      </p>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <h3 className="text-2xl font-bold text-cyan-400 mb-2">
            +<CountUp end={3} duration={3} />
          </h3>
          <p className="text-gray-400 text-xs md:text-sm">
            {isArabic ? "مشاريع سحابية" : "Cloud Projects"}
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <h3 className="text-2xl font-bold text-fuchsia-400 mb-2">
            <CountUp end={3.99} decimals={2} duration={3} />
          </h3>
          <p className="text-gray-400 text-xs md:text-sm">
            {isArabic ? "المعدل التراكمي" : "GPA"}
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <h3 className="text-2xl font-bold text-yellow-300 mb-2">
            AI
          </h3>
          <p className="text-gray-400 text-xs md:text-sm">
            Cloud & AI
          </p>
        </div>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/20 blur-3xl rounded-full" />

      <div className="relative bg-white/5 border border-white/10 rounded-[1.75rem] p-8 backdrop-blur-xl overflow-hidden">
        <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-400/10 rounded-full blur-3xl" />

        <div className="space-y-5 relative z-10">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-gray-400 text-sm md:text-base">
              {isArabic ? "التخصص" : "Major"}
            </span>
            <span className="font-semibold text-sm md:text-base">
              Computer Science
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-gray-400 text-sm md:text-base">
              {isArabic ? "الجامعة" : "University"}
            </span>
            <span className="font-semibold text-sm md:text-base">
              Umm Al-Qura University
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-gray-400 text-sm md:text-base">
              {isArabic ? "الاهتمامات" : "Interests"}
            </span>
            <span className="font-semibold text-sm md:text-base">
              Cloud • AI • Backend
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm md:text-base">
              {isArabic ? "الخبرة" : "Experience"}
            </span>
            <span className="font-semibold text-sm md:text-base">
              Azure & Deployment
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
    {[
      {
        icon: <FaBrain />,
        title: isArabic ? "الذكاء الاصطناعي" : "Artificial Intelligence",
        desc: isArabic
          ? "بناء حلول ذكية باستخدام تقنيات الـ AI والتعلم الآلي."
          : "Building smart solutions using AI and machine learning technologies.",
        color: "text-cyan-400 bg-cyan-400/10",
      },
      {
        icon: <FaCloud />,
        title: isArabic ? "الحوسبة السحابية" : "Cloud Computing",
        desc: isArabic
          ? "تصميم ونشر تطبيقات سحابية باستخدام Azure و Docker."
          : "Designing and deploying cloud applications using Azure and Docker.",
        color: "text-purple-400 bg-purple-400/10",
      },
      {
        icon: <FaCode />,
        title: isArabic ? "تطوير التطبيقات" : "Application Development",
        desc: isArabic
          ? "بناء تطبيقات حديثة بواجهات وخدمات خلفية متكاملة."
          : "Building modern applications with integrated frontend and backend services.",
        color: "text-pink-400 bg-pink-400/10",
      },
      {
        icon: <FaShieldAlt />,
        title: isArabic ? "حل المشكلات" : "Problem Solving",
        desc: isArabic
          ? "تحليل الأنظمة وتحويل التحديات التقنية إلى حلول عملية."
          : "Analyzing systems and turning technical challenges into practical solutions.",
        color: "text-emerald-400 bg-emerald-400/10",
      },
    ].map((item) => (
      <motion.div
        key={item.title}
        whileHover={{ y: -8 }}
        className="bg-[#0a0d16]/90 border border-white/10 rounded-[1.75rem] p-6 hover:border-cyan-400/40 transition duration-300"
      >
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl mb-6 ${item.color}`}
        >
          {item.icon}
        </div>

        <h3 className="text-xl font-bold mb-4">
          {item.title}
        </h3>

        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
          {item.desc}
        </p>
      </motion.div>
    ))}
  </div>
</section>
    

 <section id="skills" className="relative z-10 py-24 px-8">
  <div className="max-w-7xl mx-auto text-center">
    <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-purple-400 tracking-[0.25em] text-xs mb-7">
      TECHNICAL_ARSENAL
    </div>

    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
      {isArabic ? "المهارات التقنية المتخصصة" : "Specialized Technical Skills"}
    </h2>

    <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-16">
      {isArabic
        ? "مجموعة متكاملة من المهارات التقنية في مجالات الذكاء الاصطناعي، الحوسبة السحابية، تطوير التطبيقات، وقواعد البيانات."
        : "A comprehensive set of technical skills across artificial intelligence, cloud computing, application development, and databases."}
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-right">
      {[
        {
          icon: <FaBrain />,
          title: "AI & Machine Learning",
          subtitle: isArabic ? "الذكاء الاصطناعي" : "Artificial Intelligence",
          color: "text-cyan-400 bg-cyan-400/10",
          skills: ["YOLO", "GPT API", "RAG Systems", "AI Agents"],
        },
        {
          icon: <FaCode />,
          title: "Programming & Web",
          subtitle: isArabic ? "البرمجة وتطوير الويب" : "Programming and Web Development",
          color: "text-purple-400 bg-purple-400/10",
          skills: ["Python", "JavaScript", "Next.js", "React", "FastAPI"],
        },
        {
          icon: <FaCloud />,
          title: "Cloud & DevOps",
          subtitle: isArabic ? "الحوسبة السحابية" : "Cloud Computing",
          color: "text-emerald-400 bg-emerald-400/10",
          skills: ["Azure", "Terraform", "Docker", "GitHub Actions"],
        },
        {
          icon: <FaAward />,
          title: "Databases & Tools",
          subtitle: isArabic ? "قواعد البيانات والأدوات" : "Databases and Tools",
          color: "text-pink-400 bg-pink-400/10",
          skills: ["SQL", "PostgreSQL", "MongoDB", "Linux"],
        },
      ].map((category) => (
        <motion.div
          key={category.title}
          whileHover={{ y: -10, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="min-h-[320px] bg-[#0b0c12]/90 border border-white/10 rounded-[1.75rem] p-7 flex flex-col justify-between hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)] transition"
        >
          <div>
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-8 ${category.color}`}
            >
              {category.icon}
            </div>

            <h3 className="text-xl font-bold mb-2">
              {category.title}
            </h3>

            <p className="text-gray-400 mb-7 text-sm">
              {category.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

<section id="journey" className="relative z-10 py-24 px-8">
  <div className="max-w-7xl mx-auto text-center">
    <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-pink-400 tracking-[0.25em] text-xs mb-7">
      CAREER_PATH
    </div>

    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
      {isArabic ? "الخبرات والتعليم" : "Experience & Education"}
    </h2>

    <p className="text-gray-400 text-base md:text-lg mb-16">
      {isArabic
        ? "مسيرتي الأكاديمية والمهنية في التقنية والحوسبة السحابية"
        : "My academic and professional journey in technology and cloud computing"}
    </p>

    <div className="relative max-w-5xl mx-auto">
      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 hidden md:block" />

      {[
        {
          year: "2025",
          type: isArabic ? "برنامج تدريبي" : "Training Program",
          title: "Cloud Computing Bootcamp",
          org: "Saudi Digital Academy",
          location: "Saudi Arabia",
          icon: <FaCloud />,
          desc: isArabic
            ? "إكمال معسكر مكثف في الحوسبة السحابية ركّز على Azure وTerraform وDocker وGitHub Actions ونشر التطبيقات السحابية."
            : "Completed an intensive cloud computing bootcamp focused on Azure, Terraform, Docker, GitHub Actions, and cloud application deployment.",
          side: "right",
        },
        {
          year: "2024",
          type: isArabic ? "تدريب تعاوني" : "Co-op Training",
          title: isArabic ? "متدربة تقنية معلومات" : "IT Trainee",
          org: isArabic
            ? "الهيئة العامة للعناية بشؤون الحرمين"
            : "General Authority for the Care of the Two Holy Mosques",
          location: "Makkah, Saudi Arabia",
          icon: <FaBriefcase />,
          desc: isArabic
            ? "العمل على مهام الدعم الفني، إعداد الشبكات، تثبيت البرامج، صيانة الأجهزة، ومعالجة المشكلات التقنية."
            : "Worked on technical support tasks, network setup, software installation, device maintenance, and troubleshooting technical issues.",
          side: "left",
        },
        {
          year: "2024",
          type: isArabic ? "تعليم" : "Education",
          title: isArabic
            ? "بكالوريوس علوم الحاسب"
            : "Bachelor’s Degree in Computer Science",
          org: "Umm Al-Qura University",
          location: "Makkah, Saudi Arabia",
          icon: <FaGraduationCap />,
          desc: isArabic
            ? "التخرج بمرتبة الشرف الأولى وبمعدل 3.99 من 4، مع مشاريع في الذكاء الاصطناعي وتطوير التطبيقات."
            : "Graduated with First Honor and a GPA of 3.99 out of 4, with projects in artificial intelligence and application development.",
          side: "right",
        },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.15 }}
          viewport={{ once: true }}
          className={`relative mb-12 md:w-1/2 ${
            item.side === "right" ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
          }`}
        >
          <div className="absolute top-8 hidden md:flex items-center justify-center w-5 h-5 rounded-full bg-[#06070d] border-2 border-cyan-400 shadow-[0_0_20px_#22d3ee] md:-right-2.5" />

          <div className="bg-[#0b0c12]/90 border border-white/10 rounded-[1.75rem] p-7 text-right hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)] transition">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {item.type}
                </p>
              </div>

              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-cyan-400 bg-cyan-400/10">
                {item.icon}
              </div>
            </div>

            <p className="text-cyan-300 mb-5 text-sm md:text-base">
              {item.org}
            </p>

            <div className="flex flex-wrap gap-3 mb-5 text-xs md:text-sm text-gray-400">
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2">
                <FaCalendarAlt /> {item.year}
              </span>

              <span className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2">
                <FaMapMarkerAlt /> {item.location}
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

<section id="projects" className="relative z-10 py-24 px-8">
  <div className="max-w-7xl mx-auto text-center">
    <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 tracking-[0.25em] text-xs mb-7">
      FEATURED_PROJECTS
    </div>

    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
      {isArabic ? "المشاريع البارزة" : "Featured Projects"}
    </h2>

    <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-16">
      {isArabic
        ? "مشاريع عملية تجمع بين الذكاء الاصطناعي، تطوير التطبيقات، والحوسبة السحابية."
        : "Practical projects that combine artificial intelligence, application development, and cloud computing."}
    </p>

    {[
      {
        id: "tabassar",
        title: "Tabassar — AI Pill Identification App",
        arabicTitle: isArabic
          ? "تبصّر — تطبيق التعرف على الحبوب الدوائية"
          : "AI-powered pill recognition application",
        icon: <FaBrain />,
        color: "text-fuchsia-400",
        stats: isArabic
          ? [
              ["YOLO", "كشف الحبوب"],
              ["GPT", "تحليل النص"],
              ["AR/EN", "دعم لغتين"],
            ]
          : [
              ["YOLO", "Pill Detection"],
              ["GPT", "Text Analysis"],
              ["AR/EN", "Bilingual Support"],
            ],
        desc: isArabic
          ? "تطبيق أندرويد يساعد على التعرف على الحبوب الدوائية من خلال الصور باستخدام YOLO ودمج GPT لتقديم معلومات أوضح للمستخدم."
          : "An Android application that identifies pharmaceutical pills from images using YOLO, with GPT integration to provide clearer information to users.",
        media: [
          { type: "video", src: "/Arabic_demo.mp4" },
          { type: "video", src: "/English_demo.mp4" },
          { type: "image", src: "/Tabassar_in _Arabic.png" },
          { type: "image", src: "/Tabassar_in_English.png" },
          { type: "image", src: "/tabassar_model_results.jpeg" },
        ],
        features: isArabic
          ? [
              [
                "الرؤية والفكرة",
                "تسهيل التعرف على الأدوية بصريًا، خصوصًا لكبار السن ومن يحتاجون دعمًا إضافيًا في إدارة أدويتهم.",
              ],
              [
                "الذكاء الاصطناعي",
                "استخدام نموذج YOLO للكشف عن الحبوب، مع الاستفادة من GPT في تحسين عرض المعلومات.",
              ],
              [
                "تجربة المستخدم",
                "واجهة سهلة تدعم العربية والإنجليزية مع خصائص تساعد المستخدم على فهم النتائج بشكل أوضح.",
              ],
              [
                "الأثر",
                "مشروع تخرج يجمع بين الذكاء الاصطناعي وتطبيقات الهاتف لحل مشكلة صحية واقعية.",
              ],
            ]
          : [
              [
                "Vision & Concept",
                "Making pill identification easier through images, especially for older adults and users who need extra support managing medications.",
              ],
              [
                "Artificial Intelligence",
                "Using YOLO for pill detection and GPT to improve how information is presented to the user.",
              ],
              [
                "User Experience",
                "A simple interface supporting Arabic and English, designed to help users understand the results clearly.",
              ],
              [
                "Impact",
                "A graduation project that combines AI and mobile development to address a real healthcare-related challenge.",
              ],
            ],
      },
      {
        id: "rag",
        title: "RAG Chatbot Deployment on Azure",
        arabicTitle: isArabic
          ? "شات بوت ذكي باستخدام RAG على Azure"
          : "Cloud-based RAG chatbot deployed on Azure",
        icon: <FaCloud />,
        color: "text-cyan-400",
        stats: isArabic
          ? [
              ["Azure", "سحابة"],
              ["Terraform", "IaC"],
              ["Docker", "نشر"],
            ]
          : [
              ["Azure", "Cloud"],
              ["Terraform", "IaC"],
              ["Docker", "Deployment"],
            ],
        desc: isArabic
          ? "مشروع معسكر الحوسبة السحابية لبناء ونشر شات بوت يعتمد على RAG باستخدام Azure وFastAPI وTerraform وDocker وGitHub Actions."
          : "A cloud bootcamp project focused on building and deploying a RAG-based chatbot using Azure, FastAPI, Terraform, Docker, and GitHub Actions.",
        media: [
          { type: "video", src: "/chatbot_demo.mp4" },
          { type: "video", src: "/chatbot_demo2.mp4" },
          { type: "image", src: "/chatbot_systemArchitecture.png" },
          { type: "image", src: "/chatbot_technologies.png" },
        ],
        features: isArabic
          ? [
              [
                "البنية السحابية",
                "نشر المشروع على Azure باستخدام VM وVMSS وApplication Gateway وقواعد بيانات وخدمات تخزين.",
              ],
              [
                "Infrastructure as Code",
                "استخدام Terraform لبناء الموارد السحابية وإدارتها بطريقة منظمة وقابلة للتكرار.",
              ],
              [
                "CI/CD",
                "استخدام GitHub Actions لأتمتة خطوات النشر وتقليل الأخطاء اليدوية.",
              ],
              [
                "التجربة التقنية",
                "تطبيق عملي على RAG، FastAPI، Docker، ChromaDB، PostgreSQL، وAzure services.",
              ],
            ]
          : [
              [
                "Cloud Architecture",
                "Deployed on Azure using VM, VMSS, Application Gateway, databases, and storage services.",
              ],
              [
                "Infrastructure as Code",
                "Used Terraform to provision and manage cloud resources in a structured and reusable way.",
              ],
              [
                "CI/CD",
                "Used GitHub Actions to automate deployment workflows and reduce manual errors.",
              ],
              [
                "Technical Experience",
                "A hands-on implementation involving RAG, FastAPI, Docker, ChromaDB, PostgreSQL, and Azure services.",
              ],
            ],
      },
    ].map((project) => {
      const safeIndex =
        currentImage >= project.media.length ? 0 : currentImage;
      const currentMedia = project.media[safeIndex];

      return (
        <motion.div
          key={project.id}
          className="mb-8 bg-[#0b0c12]/90 border border-white/10 rounded-[2rem] overflow-hidden text-right hover:border-cyan-400/40 transition"
          whileHover={{ y: -4 }}
        >
          <div className="p-7 md:p-10">
            <div className="grid lg:grid-cols-[90px_1fr_105px] gap-7 items-center">
              <button
                onClick={() => {
                  setOpenProject(openProject === project.id ? "" : project.id);
                  setCurrentImage(0);
                }}
                className="w-16 h-16 md:w-18 md:h-18 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-xl hover:bg-white/20 transition"
              >
                <motion.span
                  animate={{ rotate: openProject === project.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown />
                </motion.span>
              </button>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className={`${project.color} text-xl md:text-2xl font-bold mb-4`}>
                  {project.arabicTitle}
                </p>

                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl">
                  {project.desc}
                </p>
              </div>

              <div
                className={`w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl md:text-5xl ${project.color}`}
              >
                {project.icon}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {project.stats.map(([num, label]) => (
                <div
                  key={label}
                  className="bg-black/50 border border-white/10 rounded-2xl px-7 py-4 text-center"
                >
                  <p className={`text-xl md:text-2xl font-extrabold ${project.color}`}>
                    {num}
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm mt-2">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={false}
            animate={{
              height: openProject === project.id ? "auto" : 0,
              opacity: openProject === project.id ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/10 p-7 md:p-10">
              <div className="relative rounded-[1.75rem] overflow-hidden border border-white/10 bg-black mb-10">
                {currentMedia.type === "video" ? (
                  <video
                    controls
                    muted
                    loop
                    className="w-full h-[380px] md:h-[420px] object-contain bg-black"
                  >
                    <source src={currentMedia.src} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={currentMedia.src}
                    alt={project.title}
                    className="w-full h-[380px] md:h-[420px] object-contain bg-white transition duration-500"
                  />
                )}

                <button
                  onClick={() =>
                    setCurrentImage(
                      safeIndex === 0 ? project.media.length - 1 : safeIndex - 1
                    )
                  }
                  className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur hover:bg-black/80 transition"
                >
                  <FaChevronLeft />
                </button>

                <button
                  onClick={() =>
                    setCurrentImage(
                      safeIndex === project.media.length - 1 ? 0 : safeIndex + 1
                    )
                  }
                  className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur hover:bg-black/80 transition"
                >
                  <FaChevronRight />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {project.features.map(([title, desc]) => (
                  <motion.div
                    key={title}
                    whileHover={{ y: -8 }}
                    className="bg-black/40 border border-white/10 rounded-3xl p-7 hover:border-fuchsia-400/40 transition"
                  >
                    <h4 className="text-xl md:text-2xl font-bold mb-4">
                      {title}
                    </h4>
                    <p className="text-gray-400 leading-loose text-sm md:text-base">
                      {desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      );
    })}
  </div>
</section>

<section id="project-archive" className="relative z-10 py-24 px-8">
  <div className="max-w-7xl mx-auto text-center">
    <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-purple-500/10 border border-purple-400/40 text-purple-400 tracking-[0.25em] text-xs mb-7">
      TECHNICAL_ARCHIVE
    </div>

    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
      {isArabic ? "معرض المشاريع" : "Project Archive"}
    </h2>

    <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-16">
      {isArabic
        ? "مجموعة من المشاريع التقنية التي تجمع بين الذكاء الاصطناعي، تطوير التطبيقات، الحوسبة السحابية، وتحليل البيانات."
        : "A collection of technical projects combining artificial intelligence, application development, cloud computing, and data analysis."}
    </p>

    {(() => {
      const archiveProjects = [
        {
          title: isArabic
            ? "نشر منصة DataHub على Azure"
            : "DataHub Deployment on Azure",
          subtitle: "DataHub Deployment on Azure",
          image: "/datahub.png",
          badge: isArabic ? "نشر سحابي" : "Cloud Deployment",
          desc: isArabic
            ? "تنفيذ ونشر منصة DataHub مفتوحة المصدر على Azure باستخدام Docker وVirtual Machines، بهدف بناء بيئة لإدارة البيانات والـ Metadata داخل البنية السحابية."
            : "Deployed the open-source DataHub platform on Azure using Docker and Virtual Machines to build an environment for managing data and metadata within a cloud infrastructure.",
          tags: ["Azure", "Docker", "DataHub", "Metadata"],
          points: isArabic
            ? [
                [
                  "النشر السحابي",
                  "إعداد ونشر خدمات DataHub على Azure Virtual Machine مع تهيئة الشبكة والاتصال والخدمات المطلوبة.",
                ],
                [
                  "إدارة البيانات الوصفية",
                  "بناء بيئة تساعد على تتبع البيانات وربط المصادر وتحسين حوكمة البيانات داخل الأنظمة المختلفة.",
                ],
              ]
            : [
                [
                  "Cloud Deployment",
                  "Set up and deployed DataHub services on an Azure Virtual Machine with the required networking, connectivity, and service configuration.",
                ],
                [
                  "Metadata Management",
                  "Built an environment that supports data tracking, source connection, and improved data governance across systems.",
                ],
              ],
        },
        {
          title: isArabic
            ? "نموذج التنبؤ بالسكري باستخدام المعالجة المتوازية"
            : "Diabetes Prediction with Parallel Computing",
          subtitle: "Diabetes Prediction with Parallel Computing",
          image: "/diabities_parallel.png",
          badge: isArabic ? "نموذج تعلم آلة متوازي" : "Parallel ML Model",
          desc: isArabic
            ? "مشروع بحثي يهدف إلى تحسين كفاءة نماذج تعلم الآلة للتنبؤ بمرض السكري باستخدام تقنيات المعالجة المتوازية في Python. اعتمدت الدراسة على مقارنة أداء نموذجي Decision Tree و Linear Regression على مجموعة بيانات Pima Indian Diabetes Dataset، مع استخدام multithreading و multiprocessing و loky لتسريع التدريب وتحسين الأداء دون التأثير على الدقة."
            : "A research project focused on optimizing machine learning models for diabetes prediction using parallel computing techniques in Python. The study compared Decision Tree and Linear Regression models on the Pima Indian Diabetes Dataset using multithreading, multiprocessing, and loky to improve training speed without sacrificing accuracy.",
          tags: [
            "Python",
            "Machine Learning",
            "Parallel Computing",
            "Diabetes Prediction",
          ],
          points: isArabic
            ? [
                [
                  "الفكرة والمنهجية",
                  "تمت دراسة تأثير المعالجة المتوازية على تدريب نماذج تعلم الآلة باستخدام مجموعة بيانات Pima Indian Diabetes Dataset بعد المعالجة المسبقة والتطبيع، مع تقسيم البيانات إلى 70% تدريب و30% اختبار.",
                ],
                [
                  "النتائج والأثر",
                  "أظهرت النتائج أن Linear Regression تفوق في الدقة بنسبة 78% مقارنة بـ 70% لـ Decision Tree، كما حقق أفضل تسارع باستخدام multiprocessing بسرعة وصلت إلى نحو 3.9 مرات، مما يبرز فاعلية المعالجة المتوازية في تسريع تطبيقات الذكاء الاصطناعي في المجال الصحي دون فقدان الدقة.",
                ],
              ]
            : [
                [
                  "Concept & Methodology",
                  "The project studied the effect of parallel processing on ML model training using the Pima Indian Diabetes Dataset after preprocessing, median imputation, normalization, and a 70/30 train-test split.",
                ],
                [
                  "Results & Impact",
                  "Linear Regression achieved 78% accuracy compared to 70% for Decision Tree, with multiprocessing reaching a speedup of about 3.9x, showing the value of parallel computing for faster healthcare AI applications without losing accuracy.",
                ],
              ],
        },
        {
          title: isArabic
            ? "(إيثار) نظام التبرع بالملابس"
            : "Ethar — Clothes Donation System",
          subtitle: "Clothes Donation System",
          mediaType: "video",
          media: "/ethar_project.mp4",
          thumbnail: "/ethh.png",
          badge: isArabic ? "تطبيق مجتمعي" : "Community App",
          desc: isArabic
            ? "منصة تساعد المتبرعين على إرسال الملابس وتسهّل على المستفيدين استعراض العناصر المتاحة بطريقة منظمة."
            : "A platform that helps donors send clothes and allows beneficiaries to browse available items in an organized way.",
          tags: ["Java", "Database", "UI Design", "System Design"],
          points: isArabic
            ? [
                [
                  "ربط المتبرعين بالمستفيدين",
                  "تنظيم عملية التبرع من استقبال الملابس حتى عرضها للمستفيدين.",
                ],
                [
                  "أثر اجتماعي",
                  "فكرة تقنية تخدم المجتمع وتدعم إعادة استخدام الموارد.",
                ],
              ]
            : [
                [
                  "Connecting Donors and Beneficiaries",
                  "Organized the donation process from receiving clothes to displaying them for beneficiaries.",
                ],
                [
                  "Social Impact",
                  "A community-focused technical idea that supports resource reuse and accessibility.",
                ],
              ],
        },
        {
          title: isArabic
            ? "تصنيف الحشرات بالذكاء الاصطناعي"
            : "AI-Based Insect Classification",
          subtitle: "Insect Classification",
          image: "/harmfuland_harmles_insects.png",
          badge: isArabic ? "نموذج ذكاء اصطناعي" : "AI Model",
          desc: isArabic
            ? "مشروع بحثي يستخدم تقنيات التعلم العميق لتصنيف صور الحشرات وتحليل النتائج ضمن تجربة علمية منشورة."
            : "A research project using deep learning techniques to classify insect images and analyze results as part of a published scientific study.",
          tags: ["Deep Learning", "Python", "Computer Vision", "Research"],
          points: isArabic
            ? [
                [
                  "تصنيف الصور",
                  "استخدام نماذج تعلم عميق للتعرف على فئات الحشرات من الصور.",
                ],
                [
                  "تحليل النتائج",
                  "تقييم أداء النموذج باستخدام مقاييس الدقة والتحليل الإحصائي.",
                ],
              ]
            : [
                [
                  "Image Classification",
                  "Used deep learning models to identify insect categories from images.",
                ],
                [
                  "Results Analysis",
                  "Evaluated model performance using accuracy metrics and analytical comparison.",
                ],
              ],
        },
      ];

      const current = archiveProjects[activeArchiveProject];

      const getProjectPreview = (project: any) => {
        if (project.mediaType === "video") {
          return project.thumbnail || project.media;
        }

        return project.image;
      };

      return (
        <>
          <div className="relative mb-20">
            <button
              onClick={() =>
                setActiveArchiveProject(
                  activeArchiveProject === 0
                    ? archiveProjects.length - 1
                    : activeArchiveProject - 1
                )
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition z-20"
            >
              <FaChevronLeft />
            </button>

            <div className="flex justify-center items-center min-h-[400px] md:min-h-[430px]">
              {archiveProjects.map((project, index) => {
                const isActive = index === activeArchiveProject;
                const offset = index - activeArchiveProject;
                const preview = getProjectPreview(project);

                return (
                  <motion.div
                    key={project.title}
                    onClick={() => setActiveArchiveProject(index)}
                    animate={{
                      scale: isActive ? 1 : 0.78,
                      opacity: isActive ? 1 : 0.22,
                      x: offset * 230,
                      filter: isActive ? "blur(0px)" : "blur(3px)",
                    }}
                    transition={{ duration: 0.4 }}
                    className={`absolute cursor-pointer w-[340px] md:w-[380px] rounded-[2rem] overflow-hidden bg-[#0b0c12] border ${
                      isActive ? "border-purple-400/70" : "border-white/10"
                    } shadow-2xl`}
                  >
                    <div className="w-full h-52 md:h-56 bg-black flex items-center justify-center overflow-hidden">
                      {project.mediaType === "video" && !project.thumbnail ? (
                        <video
                          muted
                          loop
                          className="w-full h-full object-contain bg-black"
                        >
                          <source src={preview} type="video/mp4" />
                        </video>
                      ) : (
                        <img
                          src={preview}
                          alt={project.title}
                          className="w-full h-full object-contain bg-black"
                        />
                      )}
                    </div>

                    <div className="p-5 md:p-6 text-right min-h-[120px] md:min-h-[135px] flex flex-col justify-center">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-purple-400 text-xs md:text-sm tracking-wider">
                        {project.subtitle}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <button
              onClick={() =>
                setActiveArchiveProject(
                  activeArchiveProject === archiveProjects.length - 1
                    ? 0
                    : activeArchiveProject + 1
                )
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition z-20"
            >
              <FaChevronRight />
            </button>

            <div className="flex justify-center gap-3 mt-8">
              {archiveProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveArchiveProject(index)}
                  className={`h-2.5 rounded-full transition ${
                    index === activeArchiveProject
                      ? "bg-purple-400 w-9"
                      : "bg-white/20 w-2.5"
                  }`}
                />
              ))}
            </div>
          </div>

          <motion.div
            key={current.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto bg-[#0b0c12]/90 border border-white/10 rounded-[2rem] p-7 md:p-10 text-right min-h-[620px]"
          >
            <div className="grid lg:grid-cols-2 gap-10 items-stretch">
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-5">
                  <h3 className="text-2xl md:text-4xl font-extrabold leading-tight">
                    {current.title}
                  </h3>
                  <FaSearch className="text-purple-400 text-2xl md:text-3xl shrink-0" />
                </div>

                <p className="text-gray-400 leading-loose mb-6 min-h-[110px] text-sm md:text-base">
                  {current.desc}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {current.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-300 text-xs md:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-5">
                  {current.points.map(([title, desc]) => (
                    <div
                      key={title}
                      className="bg-white/5 border border-white/10 rounded-2xl p-5 min-h-[110px]"
                    >
                      <h4 className="font-bold mb-2 text-base md:text-lg">
                        {title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black h-[420px] md:h-[500px] flex items-center justify-center self-center">
                <div className="absolute top-4 right-4 z-10 px-4 py-2 rounded-full bg-purple-500/30 border border-purple-400/40 text-purple-200 text-xs md:text-sm">
                  {current.badge}
                </div>

                {current.mediaType === "video" ? (
                  <video
                    controls
                    muted
                    loop
                    className="w-full h-full object-contain bg-black"
                  >
                    <source src={current.media} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-contain bg-black opacity-90"
                  />
                )}
              </div>
            </div>
          </motion.div>
        </>
      );
    })()}
  </div>
</section>


<section id="volunteering" className="relative z-10 py-24 px-8">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-14">
      <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 tracking-[0.25em] text-xs mb-7">
        VOLUNTEERING_AND_LEADERSHIP
      </div>

      <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
        {isArabic ? "التطوع والأنشطة القيادية" : "Volunteering & Leadership"}
      </h2>

      <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
        {isArabic
          ? "المشاركة في المبادرات المجتمعية والأنشطة التقنية، والمساهمة في بناء مجتمع تقني داعم لنشر المعرفة والوعي بالحوسبة السحابية والتقنيات الحديثة."
          : "Participation in community initiatives and technical activities, contributing to building a supportive tech community that spreads knowledge and awareness of cloud computing and modern technologies."}
      </p>
    </div>

    <motion.div
      whileHover={{ y: -8 }}
      className="bg-[#0b0c12]/90 border border-white/10 rounded-[1.75rem] p-7 md:p-9 hover:border-cyan-400/40 transition"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {isArabic ? "مبادرة سحابة" : "Sahaba Initiative"}
          </h3>

          <p className="text-cyan-300 mb-5 text-sm md:text-base">
            {isArabic ? "مبادرة مجتمعية في الحوسبة السحابية" : "Cloud Community Initiative"}
          </p>

          <p className="text-gray-500 mb-5 text-sm md:text-base">
            May 2025 - Present
          </p>

          <p className="text-gray-300 leading-loose text-base md:text-lg max-w-3xl">
            {isArabic
              ? "إنشاء محتوى تقني عربي حول الحوسبة السحابية، وتنظيم فعاليات ومساحات تقنية، والمساهمة في بناء مجتمع مهتم بالتقنيات السحابية والذكاء الاصطناعي."
              : "Creating Arabic technical content about cloud computing, organizing technical events and spaces, and contributing to building a community interested in cloud technologies and artificial intelligence."}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 min-w-[240px]">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
            <h4 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">
              +1000
            </h4>
            <p className="text-gray-400 text-xs md:text-sm">
              {isArabic ? "وصول المحتوى" : "Content Reach"}
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
            <h4 className="text-2xl md:text-3xl font-bold text-fuchsia-400 mb-2">
              Cloud
            </h4>
            <p className="text-gray-400 text-xs md:text-sm">
              {isArabic ? "وعي سحابي" : "Awareness"}
            </p>
          </div>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileHover={{ y: -8 }}
      className="bg-[#0b0c12]/90 border border-white/10 rounded-[1.75rem] p-7 md:p-9 hover:border-purple-400/40 transition mt-8"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {isArabic
              ? "نادي قوقل للطلبة المطورين"
              : "Google Developer Student Club"}
          </h3>

          <p className="text-purple-300 mb-5 text-sm md:text-base">
            Umm Al-Qura University
          </p>

          <p className="text-gray-500 mb-5 text-sm md:text-base">
            Sep 2023 - Jun 2024
          </p>

          <p className="text-gray-300 leading-loose text-base md:text-lg max-w-3xl">
            {isArabic
              ? "المشاركة في الأنشطة والفعاليات التقنية داخل الجامعة، والمساهمة في تنظيم المبادرات الطلابية ونشر المعرفة التقنية بين الطلاب والمهتمين بمجال الحاسب."
              : "Participated in technical activities and events within the university, contributing to student initiatives and sharing technical knowledge with students and computer science enthusiasts."}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 min-w-[240px]">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
            <h4 className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">
              Team
            </h4>

            <p className="text-gray-400 text-xs md:text-sm">
              {isArabic ? "تعاون جماعي" : "Collaboration"}
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
            <h4 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">
              Events
            </h4>

            <p className="text-gray-400 text-xs md:text-sm">
              {isArabic ? "أنشطة تقنية" : "Technical Activities"}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

<section id="certificates" className="relative z-10 py-24 px-8">
  <div className="max-w-7xl mx-auto text-center">
    <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-400/40 text-cyan-400 tracking-[0.25em] text-xs mb-7">
      ACHIEVEMENTS_ARCHIVE
    </div>

    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
      {isArabic ? "الشهادات والإنجازات" : "Certificates & Achievements"}
    </h2>

    <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-16">
      {isArabic
        ? "أرشيف يضم منشوراتي العلمية، إنجازاتي التدريبية، والشهادات والدورات التي ساهمت في تطوير مساري التقني."
        : "An archive of my scientific publications, training achievements, certificates, and courses that contributed to my technical journey."}
    </p>

    {(() => {
      const achievementGroups = [
        {
          category: isArabic ? "المنشورات العلمية" : "Scientific Publications",
          label: "PUBLICATIONS",
          icon: <FaFileAlt />,
          color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
          items: [
            {
              title:
                "A Computer Vision-Based Pill Recognition Application: Bridging Gaps in Medication Understanding for the Elderly",
              org: "IJACSA",
              date: "Jul 2024",
              file: "/Paper_68-A_Computer_Vision_Based_Pill_Recognition_Application.pdf",
              fileType: "pdf",
              desc: isArabic
                ? "ورقة علمية حول تطبيق تبصّر للتعرف على الحبوب الدوائية باستخدام تقنيات الرؤية الحاسوبية والذكاء الاصطناعي."
                : "A scientific paper about Tabassar, a pill recognition application that uses computer vision and artificial intelligence techniques.",
            },
            {
              title:
                "Machine Learning Model for Diabetes Prediction Using Parallel Computing: A Comparative Study",
              org: "ICoSTEC 2024",
              date: "Aug 2024",
              file: "/ICoSTEC2024_submission_34_paper_v1.pdf",
              fileType: "pdf",
              desc: isArabic
                ? "دراسة مقارنة لتحسين نماذج تعلم الآلة للتنبؤ بالسكري باستخدام تقنيات المعالجة المتوازية في Python."
                : "A comparative study on optimizing machine learning models for diabetes prediction using parallel computing techniques in Python.",
            },
            {
              title:
                "Automated Recognition Model for Identifying Harmful and Harmless Insects in Crop Management",
              org: "ICCIT 2024",
              date: "Aug 2024",
              file: "/insect_paper.pdf",
              fileType: "pdf",
              desc: isArabic
                ? "ورقة بحثية حول نموذج تعرف آلي لتصنيف الحشرات الضارة وغير الضارة باستخدام تقنيات الذكاء الاصطناعي."
                : "A research paper about an automated recognition model for classifying harmful and harmless insects using AI techniques.",
            },
          ],
        },
        {
          category: isArabic ? "إنجازات الأكاديمية" : "Academy Achievements",
          label: "ACADEMY_ACHIEVEMENTS",
          icon: <FaAward />,
          color: "text-purple-400 bg-purple-400/10 border-purple-400/30",
          items: [
            {
              title: "Champion of the Week",
              org: "Saudi Digital Academy",
              date: "2025",
              image: "/champion.png",
              fileType: "image",
              desc: isArabic
                ? "تكريم ضمن معسكر الأكاديمية السعودية الرقمية تقديرًا للتميز والمشاركة الفعالة خلال فترة التدريب."
                : "Recognition during the Saudi Digital Academy bootcamp for excellence and active participation throughout the training period.",
            },
            {
              title: "Cloud Computing Bootcamp Certificate",
              org: "Saudi Digital Academy",
              date: "2025",
              file: "/SDA_certificate.pdf",
              fileType: "pdf",
              desc: isArabic
                ? "شهادة إتمام معسكر الحوسبة السحابية، والذي شمل Azure وDocker وTerraform وGitHub Actions ونشر التطبيقات السحابية."
                : "Certificate of completing the Cloud Computing Bootcamp, covering Azure, Docker, Terraform, GitHub Actions, and cloud application deployment.",
            },
          ],
        },
        {
          category: isArabic ? "الشهادات والدورات" : "Certificates & Courses",
          label: "CERTIFICATIONS_AND_COURSES",
          icon: <FaExternalLinkAlt />,
          color: "text-pink-400 bg-pink-400/10 border-pink-400/30",
          items: [
            {
              title: "AWS Cloud Computing Fundamentals - Part 1",
              org: "Saudi Cloud Computing Association",
              date: "Feb 2026",
              file: "/Certificat-Taif_Mohammad_AlAhmadip1.pdf",
              fileType: "pdf",
              desc: isArabic
                ? "شهادة حضور ورشة AWS Cloud Computing Fundamentals - Part 1 المقدمة من جمعية الحوسبة السحابية السعودية."
                : "Certificate of attendance for the AWS Cloud Computing Fundamentals - Part 1 workshop by the Saudi Cloud Computing Association.",
            },
            {
              title: "AWS Cloud Computing Fundamentals - Part 2",
              org: "Saudi Cloud Computing Association",
              date: "Feb 2026",
              file: "/part2.pdf",
              fileType: "pdf",
              desc: isArabic
                ? "شهادة حضور ورشة AWS Cloud Computing Fundamentals - Part 2 المقدمة من جمعية الحوسبة السحابية السعودية."
                : "Certificate of attendance for the AWS Cloud Computing Fundamentals - Part 2 workshop by the Saudi Cloud Computing Association.",
            },
            {
              title: "Docker 101",
              org: "Satr Coding Platform",
              date: "Apr 2025",
              image: "/Docker_101.jpg",
              fileType: "image",
              desc: isArabic
                ? "شهادة في أساسيات Docker والحاويات وكيفية استخدامها في بناء ونشر التطبيقات."
                : "Certificate covering Docker fundamentals, containers, and how they are used to build and deploy applications.",
            },
            {
              title: "GitHub Actions 101",
              org: "Satr Coding Platform",
              date: "Mar 2025",
              image: "/Github Actions.png",
              fileType: "image",
              desc: isArabic
                ? "شهادة في أساسيات أتمتة سير العمل وCI/CD باستخدام GitHub Actions."
                : "Certificate covering workflow automation and CI/CD fundamentals using GitHub Actions.",
            },
            {
              title: "YOLOv7 YOLOv8 YOLOv9 - Deep Learning Course",
              org: "Udemy",
              date: "Jan 2025",
              file: "/UC-2a6aaebd-4108-49e7-864c-94d9904f0df0.pdf",
              fileType: "pdf",
              desc: isArabic
                ? "دورة في نماذج YOLO وتطبيقاتها في الرؤية الحاسوبية واكتشاف الكائنات."
                : "A course on YOLO models and their applications in computer vision and object detection.",
            },
            {
              title: "Introduction to MongoDB",
              org: "MongoDB University",
              date: "Jan 2025",
              file: "/taif-alahmadi-0ccd448e-a817-4f0a-91ff-4784cbe0eb78-certificate.pdf",
              fileType: "pdf",
              desc: isArabic
                ? "دورة تمهيدية في قواعد بيانات MongoDB والمفاهيم الأساسية لقواعد البيانات غير العلائقية."
                : "An introductory course in MongoDB databases and the fundamentals of non-relational databases.",
            },
            {
              title: "React Native",
              org: "Google Developer Student Club",
              date: "Apr 2024",
              file: "/react_native_course.pdf",
              fileType: "pdf",
              desc: isArabic
                ? "ورشة أو دورة في أساسيات تطوير تطبيقات الهاتف باستخدام React Native."
                : "A workshop/course covering the fundamentals of mobile application development using React Native.",
            },
          ],
        },
      ];

      return (
        <div className="grid lg:grid-cols-3 gap-6 text-right">
          {achievementGroups.map((group) => (
            <motion.div
              key={group.category}
              whileHover={{ y: -8 }}
              className="bg-[#0b0c12]/90 border border-white/10 rounded-[1.75rem] p-7 hover:border-cyan-400/40 transition"
            >
              <div className="flex items-start justify-between gap-5 mb-7">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border ${group.color}`}
                >
                  {group.icon}
                </div>

                <span className="px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[10px] tracking-widest">
                  {group.label}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold mb-7">
                {group.category}
              </h3>

              <div className="space-y-4">
                {group.items.map((item) => (
                  <button
                    key={item.title}
                    onClick={() =>
                      setSelectedCertificate({
                        ...item,
                        type: group.category,
                      })
                    }
                    className="w-full text-right bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-cyan-400/40 hover:bg-white/10 transition group"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h4 className="text-base md:text-lg font-bold leading-snug group-hover:text-cyan-300 transition">
                        {item.title}
                      </h4>

                      <FaExternalLinkAlt className="text-cyan-400 shrink-0 mt-1 text-sm" />
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-300 text-xs">
                        {item.org}
                      </span>

                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs">
                        {item.date}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      );
    })()}
  </div>

  {selectedCertificate && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md flex items-center justify-center px-6"
  >
    <motion.div
      initial={{ scale: 0.9, y: 30 }}
      animate={{ scale: 1, y: 0 }}
      className="relative max-w-6xl w-full bg-[#0b0c12] border border-white/10 rounded-[2rem] p-6 md:p-8"
    >
      <button
        onClick={() => setSelectedCertificate(null)}
        className={`absolute top-5 ${
          isArabic ? "left-5" : "right-5"
        } w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 transition z-10`}
      >
        <FaTimes />
      </button>

      <div
        dir={isArabic ? "rtl" : "ltr"}
        className="grid lg:grid-cols-2 gap-8 items-center"
      >
        <div className={isArabic ? "text-right" : "text-left"}>
          <span className="inline-flex px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-sm mb-5">
            {selectedCertificate.type}
          </span>

          <h3 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            {selectedCertificate.title}
          </h3>

          <p className="text-purple-300 mb-3">
            {selectedCertificate.org}
          </p>

          <p className="text-gray-500 mb-6">
            {selectedCertificate.date}
          </p>

          <p className="text-gray-300 leading-loose mb-8 text-sm md:text-base">
            {selectedCertificate.desc}
          </p>

          {selectedCertificate.file && (
            <a
              href={selectedCertificate.file}
              target="_blank"
              className="inline-flex px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              {isArabic ? "فتح الملف" : "Open File"}
            </a>
          )}
        </div>

        <div className="rounded-3xl overflow-hidden border border-white/10 bg-white h-[480px] md:h-[560px] flex items-center justify-center">
          {selectedCertificate.fileType === "pdf" ? (
            <iframe
              src={selectedCertificate.file}
              className="w-full h-full bg-white"
              title={selectedCertificate.title}
            />
          ) : (
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="w-full h-full object-contain"
            />
          )}
        </div>
      </div>
    </motion.div>
  </motion.div>
)}
</section>


<section
  id="contact"
  dir={isArabic ? "rtl" : "ltr"}
  className="relative z-10 py-24 px-8"
>
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-14">
      <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-400/40 text-cyan-400 text-xs mb-6">
        {isArabic ? "التواصل" : "Contact"}
      </div>

      <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
        {isArabic
          ? "لنحوّل الأفكار إلى حلول تقنية"
          : "Turning Ideas into Technical Solutions"}
      </h2>

      <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
        {isArabic
          ? "سواء كنت تبحث عن تعاون تقني، فرصة مهنية، أو مناقشة مشروع في الحوسبة السحابية والذكاء الاصطناعي، يسعدني تواصلك."
          : "Whether you are looking for technical collaboration, a career opportunity, or a discussion about cloud and AI projects, I would be happy to connect."}
      </p>
    </div>

    <div className="grid lg:grid-cols-[0.9fr_1.3fr] gap-10 items-start">
      <div className="space-y-5">
        <motion.button
          whileHover={{ y: -5 }}
          onClick={() => {
            navigator.clipboard.writeText("taif.alahmadi300@gmail.com");
            alert(isArabic ? "تم نسخ البريد الإلكتروني" : "Email copied!");
          }}
          className={`w-full bg-[#0b0c12]/90 border border-white/10 rounded-2xl p-6 flex items-center justify-between hover:border-cyan-400/50 transition ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          <div>
            <p className="text-gray-400 text-sm mb-1">
              {isArabic ? "البريد الإلكتروني" : "Email"}
            </p>
            <p className="font-bold" dir="ltr">
              taif.alahmadi300@gmail.com
            </p>
          </div>

          <div className="w-12 h-12 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center text-xl">
            <FaEnvelope />
          </div>
        </motion.button>

        <motion.a
          whileHover={{ y: -5 }}
          href="tel:+966560754228"
          className={`w-full bg-[#0b0c12]/90 border border-white/10 rounded-2xl p-6 flex items-center justify-between hover:border-purple-400/50 transition ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          <div>
            <p className="text-gray-400 text-sm mb-1">
              {isArabic ? "الجوال" : "Phone"}
            </p>
            <p className="font-bold" dir="ltr">
              +966 55 525 7509
            </p>
          </div>

          <div className="w-12 h-12 rounded-xl bg-purple-400/10 text-purple-400 flex items-center justify-center text-xl">
            <FaPhoneAlt />
          </div>
        </motion.a>

        <motion.div
          whileHover={{ y: -5 }}
          className={`w-full bg-[#0b0c12]/90 border border-white/10 rounded-2xl p-6 flex items-center justify-between hover:border-pink-400/50 transition ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          <div>
            <p className="text-gray-400 text-sm mb-1">
              {isArabic ? "الموقع" : "Location"}
            </p>
            <p className="font-bold">
              {isArabic
                ? "مكة المكرمة، المملكة العربية السعودية"
                : "Makkah, Saudi Arabia"}
            </p>
          </div>

          <div className="w-12 h-12 rounded-xl bg-pink-400/10 text-pink-400 flex items-center justify-center text-xl">
            <FaMapMarkerAlt />
          </div>
        </motion.div>

        <div
          className={`bg-[#0b0c12]/90 border border-white/10 rounded-2xl p-6 ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          <p className="font-bold mb-5">
            {isArabic ? "تابعني على" : "Follow me on"}
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/taif300"
              target="_blank"
              className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:text-cyan-400 hover:border-cyan-400/50 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/taif-alahmadi-265448270"
              target="_blank"
              className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:text-blue-400 hover:border-blue-400/50 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/966560754228"
              target="_blank"
              className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:text-emerald-400 hover:border-emerald-400/50 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div
          className={`bg-[#0b0c12]/90 border border-white/10 rounded-2xl p-6 ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
            <p className="font-bold text-emerald-400">
              {isArabic ? "متاحة للعمل" : "Open to Work"}
            </p>
          </div>

          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            {isArabic
              ? "أبحث عن الفرص التقنية، التدريبية، والمشاريع التي تجمع بين الحوسبة السحابية، الذكاء الاصطناعي، وتطوير الحلول العملية."
              : "I am open to technical opportunities, training programs, and projects that combine cloud computing, artificial intelligence, and practical solution development."}
          </p>
        </div>
      </div>

      <motion.form
        onSubmit={sendContactMessage}
        whileHover={{ y: -6 }}
        className={`bg-[#0b0c12]/90 border border-cyan-400/40 rounded-[2rem] p-7 md:p-9 shadow-[0_0_40px_rgba(34,211,238,0.12)] ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        <h3 className="text-2xl md:text-3xl font-extrabold mb-8">
          {isArabic ? "أرسل لي رسالة" : "Send me a message"}
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-400 mb-3">
              {isArabic ? "الاسم" : "Name"}
            </label>
            <input
              name="name"
              required
              placeholder={isArabic ? "اسمك" : "Your name"}
              className={`w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition text-white placeholder:text-gray-500 ${
                isArabic ? "text-right" : "text-left"
              }`}
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-3">
              {isArabic ? "البريد الإلكتروني" : "Email"}
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              dir="ltr"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition text-white placeholder:text-gray-500 text-left"
            />
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-gray-400 mb-3">
            {isArabic ? "الرسالة" : "Message"}
          </label>
          <textarea
            name="message"
            required
            rows={7}
            placeholder={
              isArabic ? "اكتب رسالتك هنا..." : "Write your message here..."
            }
            className={`w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition text-white placeholder:text-gray-500 resize-none ${
              isArabic ? "text-right" : "text-left"
            }`}
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-l from-purple-500 to-cyan-400 text-white font-bold py-4 rounded-2xl hover:scale-[1.02] transition shadow-lg shadow-cyan-500/20"
        >
          {isArabic ? "إرسال الرسالة" : "Send Message"}
          <FaPaperPlane />
        </button>
      </motion.form>
    </div>
  </div>
</section>

<footer
  dir="ltr"
  className="relative z-10 border-t border-white/5 py-14 px-8 bg-[#06070d]"
>
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    {isArabic ? (
      <>
        {/* السهم يسار */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>

        {/* الكلام يمين */}
        <p dir="ltr" className="text-gray-500 text-sm text-center">
          © 2026 Taif Al-Ahmadi. All rights reserved.
        </p>
      </>
    ) : (
      <>
        {/* الكلام يسار */}
        <p dir="ltr" className="text-gray-500 text-sm text-center">
          © 2026 Taif Al-Ahmadi. All rights reserved.
        </p>

        {/* السهم يمين */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      </>
    )}
  </div>
</footer>
    </main>
    
  );
}