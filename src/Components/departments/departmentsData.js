// Hero Images for Department Categories
import scienceHeroImg from "../../assets/images/departments/science-hero.jpg";
import artsHeroImg from "../../assets/images/departments/arts-hero.jpg";
import manageHeroImg from "../../assets/images/departments/manage-hero.jpg";

// Chalkboard Card Images - Arts
import tamilImg from "../../assets/images/departments/tamil.png";
import englishImg from "../../assets/images/departments/english.png";

// Chalkboard Card Images - Management
import commerceImg from "../../assets/images/departments/commerce.png";
import commerceCAImg from "../../assets/images/departments/commerce-CA.png";
import commercePAImg from "../../assets/images/departments/commerce-PA.png";
import baImg from "../../assets/images/departments/BA.png";

// Chalkboard Card Images - Science
import csImg from "../../assets/images/departments/CS.png";
import caImg from "../../assets/images/departments/CA.png";
import physicsImg from "../../assets/images/departments/physics.png";
import chemistryImg from "../../assets/images/departments/chemistry.png";
import mathsImg from "../../assets/images/departments/maths.png";
import dsImg from "../../assets/images/departments/DS.png";
import hotelImg from "../../assets/images/departments/hotel.png";

export const departmentsData = {
  science: {
    id: "science",
    category: "Science",
    heroTitle: "Explore Our Academic Departments",
    heroDesc:
      "Discover diverse departments that foster academic excellence, innovation, and holistic learning across Arts, Science, and Management.",
    heroImage: scienceHeroImg,
    sectionTitlePrefix: "Science",
    sectionTitleHighlight: "Department",
    sectionDesc:
      "Explore our Science Departments, where innovation, research, and analytical thinking empower students with strong scientific knowledge, technical expertise, and practical skills for academic and professional success.",
    items: [
      {
        id: "computer-science",
        name: "Department of Computer Science",
        image: csImg,
        alt: "Department of Computer Science",
        paragraphs: [
          "The Department of Computer Science at Mother Terasa College of Arts and Science equips students with the knowledge and skills needed for careers in software development, IT, cybersecurity, data science, and emerging technologies. The curriculum covers programming, algorithms, database management, computer architecture, artificial intelligence, and software development, supported by hands-on learning, modern labs, projects, and workshops.",
          "With guidance from experienced faculty, students participate in hackathons, industry visits, and research activities to strengthen their technical expertise. Graduates are prepared for careers in software development, IT consulting, cybersecurity, data science, and system analysis, as well as higher studies. Our mission is to develop innovative, skilled, and industry-ready professionals who contribute to the digital world."
        ]
      },
      {
        id: "computer-applications",
        name: "Department of Computer Applications",
        image: caImg,
        alt: "Department of Computer Applications",
        paragraphs: [
          "The Department of Computer Applications at Mother Terasa College of Arts and Science provides quality education in information technology and software development, preparing students for careers in the IT industry. The curriculum includes programming, web development, database management, computer networks, mobile app development, cloud computing, and cybersecurity, supported by hands-on learning through labs, projects, and internships.",
          "With guidance from experienced faculty, students participate in seminars, workshops, coding competitions, and industrial visits. Graduates are prepared for careers in software development, IT support, systems administration, and application design, as well as higher studies. Our mission is to develop skilled, ethical, and industry-ready IT professionals for the digital world."
        ]
      },
      {
        id: "physics",
        name: "Department of Physics",
        image: physicsImg,
        alt: "Department of Physics",
        paragraphs: [
          "The Department of Physics at Mother Terasa College of Arts and Science provides quality education in classical and modern physics, preparing students for careers in research, education, engineering, data science, renewable energy, and space technology. The curriculum covers mechanics, electromagnetism, thermodynamics, quantum physics, and interdisciplinary sciences, with practical learning through laboratories, computational facilities, and projects.",
          "With guidance from experienced faculty, students participate in research, seminars, guest lectures, and physics clubs. Graduates are prepared for higher studies and careers in science and technology. Our mission is to develop scientific curiosity, analytical thinking, and innovation to serve science and society."
        ]
      },
      {
        id: "chemistry",
        name: "Department of Chemistry",
        image: chemistryImg,
        alt: "Department of Chemistry",
        paragraphs: [
          "The Department of Chemistry at Mother Terasa College of Arts and Science provides quality education in chemical sciences, fostering scientific thinking, innovation, and research. The curriculum covers organic, inorganic, physical, and analytical chemistry, with practical learning through well-equipped laboratories, experiments, and research projects.",
          "Guided by experienced faculty, students participate in seminars, workshops, industrial visits, and academic mentoring. Graduates are prepared for careers in education, research, pharmaceuticals, environmental science, and chemical industries, as well as higher studies in Chemistry and related fields. Our mission is to develop scientific knowledge, research skills, and a lifelong passion for chemistry to benefit science and society."
        ]
      },
      {
        id: "mathematics",
        name: "Department of Mathematics",
        image: mathsImg,
        alt: "Department of Mathematics",
        paragraphs: [
          "The Department of Mathematics at Mother Terasa College of Arts and Science develops analytical thinking, logical reasoning, and problem-solving skills through a strong foundation in mathematics.",
          "Guided by experienced faculty, the department promotes critical inquiry, collaborative learning, and the use of modern mathematical tools through seminars, workshops, and student initiatives. Graduates are well-prepared for careers in teaching, research, finance, data analysis, and other quantitative fields, as well as higher studies. Our mission is to empower students with mathematical knowledge, confidence, and analytical skills to contribute to an evolving world."
        ]
      },
      {
        id: "data-science",
        name: "Department of Data Science",
        image: dsImg,
        alt: "Department of Data Science",
        paragraphs: [
          "The Department of Data Science at Mother Terasa College of Arts and Science equips students with the skills needed for careers in data science, AI, machine learning, and business intelligence. The curriculum covers data analysis, machine learning, AI, programming, cloud computing, and data visualization, supported by labs, projects, internships, and industry interactions.",
          "With guidance from experienced faculty, students participate in workshops, guest lectures, and hackathons. Graduates are prepared for careers as Data Analysts, Data Scientists, AI/ML Engineers, and Business Intelligence Professionals, as well as higher studies. Our mission is to develop analytical, ethical, and industry-ready data professionals for the digital future."
        ]
      },
      {
        id: "hotel-management",
        name: "Department of Hotel Management and Catering Science",
        image: hotelImg,
        alt: "Department of Hotel Management and Catering Science",
        isCentered: true,
        paragraphs: [
          "The Department of Hotel Management and Catering Science at Mother Terasa College of Arts and Science provides industry-focused education for careers in hospitality, tourism, catering, and culinary arts. The curriculum includes food production, front office, housekeeping, food & beverage service, hospitality marketing, event management, and entrepreneurship, supported by practical training, internships, industrial visits, and live events.",
          "With guidance from experienced faculty and industry experts, students develop professional, managerial, and customer service skills. Graduates are prepared for careers in hotels, resorts, airlines, cruise lines, event management, food service, and hospitality entrepreneurship. Our mission is to develop skilled, ethical, and industry-ready hospitality professionals with a global perspective."
        ]
      }
    ]
  },

  arts: {
    id: "arts",
    category: "Arts",
    heroTitle: "Explore Our Academic Departments",
    heroDesc:
      "Discover diverse departments that foster academic excellence, innovation, and holistic learning across Arts, Science, and Management.",
    heroImage: artsHeroImg,
    sectionTitlePrefix: "Arts",
    sectionTitleHighlight: "Department",
    sectionDesc:
      "Explore our Arts Departments, where language, literature, culture, and communication come together to inspire critical thinking, creativity, and academic excellence.",
    items: [
      {
        id: "tamil",
        name: "Department of Tamil",
        image: tamilImg,
        alt: "Department of Tamil",
        paragraphs: [
          "The Department of Tamil at Mother Terasa College of Arts and Science is dedicated to preserving and promoting Tamil language, literature, and culture while fostering academic excellence. The curriculum covers classical and modern literature, grammar, linguistics, folklore, literary criticism, and contemporary writings, providing students with a strong academic foundation.",
          "Guided by experienced faculty, students actively participate in seminars, literary forums, poetry competitions, cultural events, and publication activities to enhance their language and literary skills. Graduates are prepared for careers in teaching, media, translation, content writing, public service, and higher studies, while developing critical thinking, cultural values, and a lifelong appreciation for Tamil language and literature."
        ]
      },
      {
        id: "english",
        name: "Department of English",
        image: englishImg,
        alt: "Department of English",
        paragraphs: [
          "The Department of English at Mother Terasa College of Arts and Science promotes excellence in language, literature, and communication while developing critical thinking, creativity, and communication skills. The curriculum covers English literature, language studies, linguistics, cultural studies, and communication, including classical and contemporary works, while strengthening students' writing, speaking, and analytical reading abilities.",
          "With guidance from experienced faculty, students engage in literary events, theatre, creative writing, discussions, workshops, and research. Graduates are prepared for careers in education, media, publishing, content writing, translation, public relations, and higher studies in literature, linguistics, and cultural studies. The department aims to inspire a lifelong love for English while promoting effective communication, critical thinking, and cultural understanding."
        ]
      }
    ]
  },

  management: {
    id: "management",
    category: "Management",
    heroTitle: "Explore Our Academic Departments",
    heroDesc:
      "Discover diverse departments that foster academic excellence, innovation, and holistic learning across Arts, Science, and Management.",
    heroImage: manageHeroImg,
    sectionTitlePrefix: "Management",
    sectionTitleHighlight: "Department",
    sectionDesc:
      "Discover our Management Departments, offering industry-focused programmes that develop business knowledge, leadership, analytical thinking, and entrepreneurial skills for successful careers in commerce and management.",
    items: [
      {
        id: "commerce",
        name: "Department of Commerce",
        image: commerceImg,
        alt: "Department of Commerce",
        paragraphs: [
          "The Department of Commerce at Mother Terasa College of Arts and Science provides quality education in commerce and business studies, preparing students for careers in accounting, finance, management, entrepreneurship, and related fields. The curriculum covers financial accounting, business law, economics, marketing, taxation, entrepreneurship, corporate governance, and financial management, giving students a strong foundation in modern business practices. With guidance from experienced faculty, students gain practical experience through case studies, internships, workshops, group discussions, and guest lectures.",
          "Graduates are equipped for careers in accounting, banking, finance, business analysis, taxation, and management, as well as professional courses like CA, CMA, and CS, and higher studies. Our mission is to develop analytical thinking, ethical values, and entrepreneurial skills, enabling students to contribute confidently to the business world and society."
        ]
      },
      {
        id: "bcom-ca",
        name: "Department of Commerce with Computer Applications",
        image: commerceCAImg,
        alt: "Department of Commerce with Computer Applications",
        paragraphs: [
          "The Department of Commerce with Computer Applications at Mother Terasa College of Arts and Science combines commerce and technology, preparing students for careers in business, finance, accounting, IT, and e-commerce. The curriculum covers financial accounting, business law, economics, marketing, entrepreneurship, programming, database management, information systems, and e-commerce, providing a strong foundation in business and technology.",
          "With guidance from experienced faculty, students gain practical exposure through computer labs, internships, projects, workshops, seminars, and industry interactions. Graduates are prepared for careers in financial services, business analysis, e-commerce, data management, IT consulting, and software development. Our mission is to develop business expertise, technical skills, and innovative thinking for success in the digital economy."
        ]
      },
      {
        id: "bcom-pa",
        name: "Department of Commerce with Professional Accounting",
        image: commercePAImg,
        alt: "Department of Commerce with Professional Accounting",
        paragraphs: [
          "The Department of Commerce with Professional Accounting at Mother Terasa College of Arts and Science combines commerce and professional accounting, preparing students for careers in accounting, finance, auditing, taxation, and corporate sectors. The curriculum includes financial accounting, business law, economics, marketing, auditing, taxation, cost accounting, financial reporting, and professional ethics, providing a strong academic and practical foundation.",
          "With guidance from experienced faculty, students gain practical exposure through workshops, internships, case studies, and industry interactions. Graduates are prepared for careers in accounting, banking, finance, auditing, taxation, and financial consulting, while also pursuing professional qualifications such as CA, CMA, and CPA. Our mission is to develop ethical, skilled, and industry-ready accounting professionals for the global business environment."
        ]
      },
      {
        id: "bba",
        name: "Department of Business Administration",
        image: baImg,
        alt: "Department of Business Administration",
        paragraphs: [
          "The Department of Business Administration at Mother Terasa College of Arts and Science prepares students for careers in management, finance, marketing, entrepreneurship, and leadership. The curriculum covers marketing, finance, human resource management, operations, entrepreneurship, business ethics, and strategic planning, supported by case studies, projects, internships, and interactive learning.",
          "With guidance from experienced faculty, students develop leadership, teamwork, communication, and problem-solving skills through workshops, seminars, guest lectures, and business competitions. Graduates are well-prepared for careers in management, finance, marketing, operations, consulting, and entrepreneurship, and can pursue MBA and other professional qualifications. Our mission is to develop innovative, ethical, and socially responsible business leaders for the global business environment."
        ]
      }
    ]
  }
};

// Export convenience shortcut for Science (7 departments)
export const scienceDepartmentsData = departmentsData.science.items;
