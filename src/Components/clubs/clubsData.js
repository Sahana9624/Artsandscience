// Club & Committee Illustrations
import redClubIllustration from "../../assets/images/club-com/red-club-1.png";
import nssIllustration from "../../assets/images/club-com/nss.png";
import yrcIllustration from "../../assets/images/club-com/yrc.png";
import culturalIllustration from "../../assets/images/club-com/cultural.png";
import yogaIllustration from "../../assets/images/club-com/yoga.png";
import ecoIllustration from "../../assets/images/club-com/eco.png";
import alumniIllustration from "../../assets/images/club-com/alumni.png";
import proIllustration from "../../assets/images/club-com/pro.png";

// Committee Illustrations
import antiRagIllustration from "../../assets/images/committee/anti-rag.png";
import grievanceIllustration from "../../assets/images/committee/grievance.png";
import placementIllustration from "../../assets/images/committee/placement.png";
import entrepreneurIllustration from "../../assets/images/committee/entrepreneur.png";
import disciplineIllustration from "../../assets/images/committee/discipline.png";
import studentGrieveIllustration from "../../assets/images/committee/student-grieve.png";
import greenCampusIllustration from "../../assets/images/committee/green-campus.png";
import careerGuideIllustration from "../../assets/images/committee/career-guide.png";
import antiDrugIllustration from "../../assets/images/committee/anti-drug.png";
import iicIllustration from "../../assets/images/committee/IIC.png";
import researchIllustration from "../../assets/images/committee/research.png";
import womenIllustration from "../../assets/images/committee/women.png";

// Club Logos (SVG icons from icon folders)
import rrcLogo from "../../assets/icons/club-logos/rrc.svg";
import nssLogo from "../../assets/icons/club-logos/nss.svg";
import yrcLogo from "../../assets/icons/club-logos/yrc.svg";
import proLogo from "../../assets/icons/club-logos/pro.svg";
import alumniLogo from "../../assets/icons/club-logos/alumni.svg";
import culturalLogo from "../../assets/icons/club-logos/cultural.svg";
import yogaLogo from "../../assets/icons/club-logos/yoga.svg";
import ecoLogo from "../../assets/icons/club-logos/eco.svg";

// Join Icons
import redClubJoinIcon from "../../assets/icons/cc-cta/red-club-2.svg";
import nssJoinIcon from "../../assets/icons/cc-cta/nss-join.svg";
import yrcJoinIcon from "../../assets/icons/cc-cta/yrc-join.svg";
import culturalJoinIcon from "../../assets/icons/cc-cta/cultural & entreupreneur-join.svg";
import yogaJoinIcon from "../../assets/icons/cc-cta/yoga-join.svg";
import ecoJoinIcon from "../../assets/icons/cc-cta/eco-join.svg";
import alumniJoinIcon from "../../assets/icons/cc-cta/alumni-join.svg";
import antiRagJoinIcon from "../../assets/icons/cc-cta/anti-rag-join.svg";
import antiDrugJoinIcon from "../../assets/icons/cc-cta/anti-drug.svg";
import careerGuideJoinIcon from "../../assets/icons/cc-cta/career-guide.svg";
import disciplineJoinIcon from "../../assets/icons/cc-cta/discipline-join.svg";
import greenCampusJoinIcon from "../../assets/icons/cc-cta/green-campus.svg";
import grievanceJoinIcon from "../../assets/icons/cc-cta/grievance.svg";
import iicJoinIcon from "../../assets/icons/cc-cta/IIC-join.svg";
import placementJoinIcon from "../../assets/icons/cc-cta/placement-join.svg";
import researchJoinIcon from "../../assets/icons/cc-cta/research-join.svg";
import studentGrieveJoinIcon from "../../assets/icons/cc-cta/student-grieve.svg";
import womenJoinIcon from "../../assets/icons/cc-cta/women-join.svg";


// Member photos (shared lookup; one stored copy per person)
import { memberPhoto } from "../common/memberPhotos";

export const clubsData = {
  // 1. Red Ribbon Club (Exact match to referral screenshot)
  rrc: {
    id: "rrc",
    slug: "red-ribbon-club",
    type: "club",
    name: "Red Ribbon Club",
    heroTitle: "Clubs & Activities",
    heroSubtitle: "Experience our student clubs and be a part of activities that inspire, connect and create impact.",
    description:
      "The Red Ribbon Club works towards creating awareness about health, HIV prevention and social responsibility among students and the community.",
    logo: rrcLogo,
    illustration: redClubIllustration,
    joinIcon: redClubJoinIcon,
    themeColor: "#E02327",
    ctaTitle: "Be a part of a club and make a difference!",
    ctaSubtitle: "Join hands with like minded people and contribute to a better tomorrow.",
    ctaButtonText: "Join This Club",
    faculty: [
      {
        id: "f1",
        name: "Prof. P. Senthilvadivu",
        designation: "HOD / COMMERCE CA",
        role: "HEAD",
        avatar: memberPhoto("rrc", "f1"),
      },
      {
        id: "f2",
        name: "PROF.R.RADHA",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("rrc", "f2"),
      },
      {
        id: "f3",
        name: "PROF.V.BELSITA",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("rrc", "f3"),
      },
    ],
    studentCoordinators: [
      {
        id: "s1",
        name: "Nirmal S",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("rrc", "s1"),
      },
      {
        id: "s2",
        name: "Siva Sri G",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("rrc", "s2"),
      },
    ],
  },

  // 2. National Service Scheme (NSS)
  nss: {
    id: "nss",
    slug: "national-service-scheme",
    type: "club",
    name: "National Service Scheme (NSS)",
    heroTitle: "Clubs & Activities",
    heroSubtitle: "Experience our student clubs and be a part of activities that inspire, connect and create impact.",
    description:
      "Promoting social responsibility, community service, and leadership through volunteer activities, rural development, and awareness programs.",
    logo: nssLogo,
    illustration: nssIllustration,
    joinIcon: nssJoinIcon,
    themeColor: "#FE8422",
    ctaTitle: "Be a part of a club and make a difference!",
    ctaSubtitle: "Join hands with like minded people and contribute to a better tomorrow.",
    ctaButtonText: "Join This Club",
    faculty: [
      {
        id: "f1",
        name: "Dr. R. Rengasamy",
        designation: "ASSISTANT PROFESSOR",
        role: "HEAD",
        avatar: memberPhoto("nss", "f1"),
      },
      {
        id: "f2",
        name: "PROF.S.SELVAKKUMAR",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("nss", "f2"),
      },
      {
        id: "f3",
        name: "PROF.N.JOTHIKA",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("nss", "f3"),
      },
      {
        id: "f4",
        name: "PROF.P.MANIKANDAN",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("nss", "f4"),
      },
      {
        id: "f5",
        name: "PROF.C.SANKARI",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("nss", "f5"),
      },
    ],
    studentCoordinators: [
      {
        id: "s1",
        name: "Rithika R",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("nss", "s1"),
      },
      {
        id: "s2",
        name: "Keerthana P",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("nss", "s2"),
      },
    ],
  },

  // 3. Youth Red Cross (YRC)
  yrc: {
    id: "yrc",
    slug: "youth-red-cross",
    type: "club",
    name: "Youth Red Cross (YRC)",
    heroTitle: "Clubs & Activities",
    heroSubtitle: "Experience our student clubs and be a part of activities that inspire, connect and create impact.",
    description:
      "Fostering humanitarian values, health awareness, and emergency response skills among students.",
    logo: yrcLogo,
    illustration: yrcIllustration,
    joinIcon: yrcJoinIcon,
    themeColor: "#2470D3",
    ctaTitle: "Be a part of a club and make a difference!",
    ctaSubtitle: "Join hands with like minded people and contribute to a better tomorrow.",
    ctaButtonText: "Join This Club",
    faculty: [
      {
        id: "f1",
        name: "PROF.V.HEMALATHA",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("yrc", "f1"),
      },
      {
        id: "f2",
        name: "PROF.A.MOHANA",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("yrc", "f2"),
      },
    ],
    studentCoordinators: [
      {
        id: "s1",
        name: "Preethi S",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("yrc", "s1"),
      },
      {
        id: "s2",
        name: "Ramya M",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("yrc", "s2"),
      },
    ],
  },

  // 4. Public Relationship Officer (PRO)
  pro: {
    id: "pro",
    slug: "public-relationship-officer",
    type: "club",
    name: "Public Relationship Officer (PRO)",
    heroTitle: "Clubs & Activities",
    heroSubtitle: "Experience our student clubs and be a part of activities that inspire, connect and create impact.",
    description:
      "The Public Relationship Officer (PRO) unit focuses on building strong communication between the institution and the public. It manages media relations, event promotion, and ensures a positive image of the institution through effective outreach and engagement.",
    logo: proLogo,
    illustration: proIllustration,
    joinIcon: culturalJoinIcon,
    themeColor: "#7352BB",
    ctaTitle: "Be a part of a club and make a difference!",
    ctaSubtitle: "Join hands with like minded people and contribute to a better tomorrow.",
    ctaButtonText: "Join This Club",
    faculty: [],
    studentCoordinators: [],
  },

  // 5. Alumni Association
  alumni: {
    id: "alumni",
    slug: "alumni-association",
    type: "club",
    name: "Alumni Association",
    heroTitle: "Clubs & Activities",
    heroSubtitle: "Experience our student clubs and be a part of activities that inspire, connect and create impact.",
    description:
      "Connecting graduates with the institution to build a strong professional network and support student growth.",
    logo: alumniLogo,
    illustration: alumniIllustration,
    joinIcon: alumniJoinIcon,
    themeColor: "#183F6C",
    ctaTitle: "Be a part of a club and make a difference!",
    ctaSubtitle: "Join hands with like minded people and contribute to a better tomorrow.",
    ctaButtonText: "Join This Club",
    faculty: [
      {
        id: "f1",
        name: "Prof. V. Chandrasekar",
        designation: "HoD in English",
        role: "HEAD",
        avatar: memberPhoto("alumni", "f1"),
      },
    ],
    studentCoordinators: [
      {
        id: "s1",
        name: "Gokul P",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("alumni", "s1"),
      },
      {
        id: "s2",
        name: "Breegina Sakthi S",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("alumni", "s2"),
      },
    ],
  },

  // 6. Cultural Club
  cultural: {
    id: "cultural",
    slug: "cultural-club",
    type: "club",
    name: "Cultural Club",
    heroTitle: "Clubs & Activities",
    heroSubtitle: "Experience our student clubs and be a part of activities that inspire, connect and create impact.",
    description:
      "Encouraging creativity through music, dance, drama, and cultural events that celebrate diversity and talent.",
    logo: culturalLogo,
    illustration: culturalIllustration,
    joinIcon: culturalJoinIcon,
    themeColor: "#7352BB",
    ctaTitle: "Be a part of a club and make a difference!",
    ctaSubtitle: "Join hands with like minded people and contribute to a better tomorrow.",
    ctaButtonText: "Join This Club",
    faculty: [
      {
        id: "f1",
        name: "Prof. S. Uthayalakshmi",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("cultural", "f1"),
      },
    ],
    studentCoordinators: [
      {
        id: "s1",
        name: "Suba Sri S",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("cultural", "s1"),
      },
      {
        id: "s2",
        name: "Manimegalai R",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("cultural", "s2"),
      },
    ],
  },

  // 7. Yoga Club
  yoga: {
    id: "yoga",
    slug: "yoga-club",
    type: "club",
    name: "Yoga Club",
    heroTitle: "Clubs & Activities",
    heroSubtitle: "Experience our student clubs and be a part of activities that inspire, connect and create impact.",
    description:
      "Promoting physical and mental well-being through yoga, meditation, and healthy lifestyle practices.",
    logo: yogaLogo,
    illustration: yogaIllustration,
    joinIcon: yogaJoinIcon,
    themeColor: "#D97706",
    ctaTitle: "Be a part of a club and make a difference!",
    ctaSubtitle: "Join hands with like minded people and contribute to a better tomorrow.",
    ctaButtonText: "Join This Club",
    faculty: [
      {
        id: "f1",
        name: "Prof. C. Chittu",
        designation: "HoD in Tamil",
        role: "HEAD",
        avatar: memberPhoto("yoga", "f1"),
      },
      {
        id: "f2",
        name: "Prof. S. Balamani",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("yoga", "f2"),
      },
      {
        id: "f3",
        name: "Prof. P. Manikandan",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("yoga", "f3"),
      },
    ],
    studentCoordinators: [
      {
        id: "s1",
        name: "Anandarubini M",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("yoga", "s1"),
      },
      {
        id: "s2",
        name: "Harini S",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("yoga", "s2"),
      },
    ],
  },

  // 8. Eco Club
  eco: {
    id: "eco",
    slug: "eco-club",
    type: "club",
    name: "Eco Club",
    heroTitle: "Clubs & Activities",
    heroSubtitle: "Experience our student clubs and be a part of activities that inspire, connect and create impact.",
    description:
      "Creating environmental awareness and sustainability through tree plantation, clean drives, and eco initiatives.",
    logo: ecoLogo,
    illustration: ecoIllustration,
    joinIcon: ecoJoinIcon,
    themeColor: "#509742",
    ctaTitle: "Be a part of a club and make a difference!",
    ctaSubtitle: "Join hands with like minded people and contribute to a better tomorrow.",
    ctaButtonText: "Join This Club",
    faculty: [
      {
        id: "f1",
        name: "Prof. P. Sarathamani",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("eco", "f1"),
      },
      {
        id: "f2",
        name: "PROF. K. MURUGESAN",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("eco", "f2"),
      },
      {
        id: "f3",
        name: "PROF. K. MALATHI",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("eco", "f3"),
      },
    ],
    studentCoordinators: [
      {
        id: "s1",
        name: "Sethurajan V",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("eco", "s1"),
      },
      {
        id: "s2",
        name: "Maniraj A",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("eco", "s2"),
      },
    ],
  },

  // ── Committees & Cells ──
  "anti-ragging": {
    id: "anti-ragging",
    slug: "anti-ragging-committee",
    type: "committee",
    name: "Anti Ragging Committee",
    heroTitle: "Institutional Cells & Committees",
    heroSubtitle: "Explore the various committees and cells that ensure student welfare, innovation, discipline, and development within the institution.",
    description:
      "Ensuring a safe and respectful campus environment by preventing ragging and promoting student well-being through strict monitoring and awareness initiatives.",
    logo: rrcLogo,
    illustration: antiRagIllustration,
    joinIcon: antiRagJoinIcon,
    themeColor: "#D73432",
    ctaTitle: "Be a part of a cell and make a difference!",
    ctaSubtitle: "Join hands with like minded people and contribute to a better tomorrow.",
    ctaButtonText: "Join This Cell",
    faculty: [
      {
        id: "f1",
        name: "PROF.V.CHANDRASEKAR",
        designation: "HoD in ENGLISH",
        role: "HEAD",
        avatar: memberPhoto("anti-ragging", "f1"),
      },
      {
        id: "f2",
        name: "PROF.A.SHEEBA",
        designation: "ASSISTANT PROFESSOR",
        role: "CO ORDINATOR",
        avatar: memberPhoto("anti-ragging", "f2"),
      },
      {
        id: "f3",
        name: "PROF.P.MANIKANDAN",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("anti-ragging", "f3"),
      },
    ],
    studentCoordinators: [
      {
        id: "s1",
        name: "Infanraj S",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("anti-ragging", "s1"),
      },
      {
        id: "s2",
        name: "Bharathi S",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("anti-ragging", "s2"),
      },
    ],
  },

  grievance: {
    id: "grievance",
    slug: "grievance-redressal-cell",
    type: "committee",
    name: "Grievance & Redressal Cell",
    heroTitle: "Institutional Cells & Committees",
    heroSubtitle: "Explore the various committees and cells that ensure student welfare, innovation, discipline, and development within the institution.",
    description:
      "Addressing student and staff concerns by providing a transparent and effective platform to resolve grievances and ensure fair practices within the institution.",
    logo: rrcLogo,
    illustration: grievanceIllustration,
    joinIcon: grievanceJoinIcon,
    themeColor: "#EE7A12",
    ctaTitle: "Be a part of a cell and make a difference!",
    ctaSubtitle: "Join hands with like minded people and contribute to a better tomorrow.",
    ctaButtonText: "Join This Cell",
    faculty: [
      {
        id: "f1",
        name: "PROF.A.MOHANA",
        designation: "ASSISTANT PROFESSOR",
        role: "HEAD",
        avatar: memberPhoto("grievance", "f1"),
      },
      {
        id: "f2",
        name: "PROF.G.RANJANI",
        designation: "ASSISTANT PROFESSOR",
        role: "CO ORDINATOR",
        avatar: memberPhoto("grievance", "f2"),
      },
      {
        id: "f3",
        name: "PROF.R.RADHIKA",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("grievance", "f3"),
      },
      {
        id: "f4",
        name: "PROF.R. RADHA",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("grievance", "f4"),
      },
      {
        id: "f5",
        name: "PROF.S.MAHESWARI",
        designation: "HoD in PHYSICS",
        role: "MEMBER",
        avatar: memberPhoto("grievance", "f5"),
      },
    ],
    studentCoordinators: [
      {
        id: "s1",
        name: "Nirmal S",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("grievance", "s1"),
      },
      {
        id: "s2",
        name: "Siva Sri G",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("grievance", "s2"),
      },
    ],
  },

  placement: {
    id: "placement",
    slug: "placement-cell",
    type: "committee",
    name: "Placement Cell",
    heroTitle: "Institutional Cells & Committees",
    heroSubtitle: "Explore the various committees and cells that ensure student welfare, innovation, discipline, and development within the institution.",
    description:
      "Facilitating career opportunities by organising training, internships, and campus placements to help students transition successfully into the professional world.",
    logo: rrcLogo,
    illustration: placementIllustration,
    joinIcon: placementJoinIcon,
    themeColor: "#0D58A3",
    ctaTitle: "Be a part of a cell and make a difference!",
    ctaSubtitle: "Join hands with like minded people and contribute to a better tomorrow.",
    ctaButtonText: "Join This Cell",
    faculty: [
      {
        id: "f1",
        name: "PROF.S.DINESH KUMAR",
        designation: "ASSISTANT PROFESSOR",
        role: "CO ORDINATOR",
        avatar: memberPhoto("placement", "f1"),
      },
      {
        id: "f2",
        name: "PROF.S.BALAMANI",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("placement", "f2"),
      },
      {
        id: "f3",
        name: "PROF. J. AZULU BANU",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("placement", "f3"),
      },
    ],
    studentCoordinators: [
      {
        id: "s1",
        name: "Rithika R",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("placement", "s1"),
      },
      {
        id: "s2",
        name: "Keerthana P",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("placement", "s2"),
      },
    ],
  },

  edc: {
    id: "edc",
    slug: "entrepreneurship-development-cell",
    type: "committee",
    name: "Entrepreneurship Development Cell",
    heroTitle: "Institutional Cells & Committees",
    heroSubtitle: "Explore the various committees and cells that ensure student welfare, innovation, discipline, and development within the institution.",
    description:
      "Encouraging innovation and entrepreneurial thinking by supporting students in developing business ideas, startups, and leadership skills.",
    logo: culturalLogo,
    illustration: entrepreneurIllustration,
    joinIcon: culturalJoinIcon,
    themeColor: "#7352BB",
    ctaTitle: "Be a part of a cell and make a difference!",
    ctaSubtitle: "Join hands with like minded people and contribute to a better tomorrow.",
    ctaButtonText: "Join This Cell",
    faculty: [
      {
        id: "f1",
        name: "PROF. G. ALEXANDER",
        designation: "ASSISTANT PROFESSOR",
        role: "HEAD",
        avatar: memberPhoto("edc", "f1"),
      },
      {
        id: "f2",
        name: "PROF.P.SARATHAMANI",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("edc", "f2"),
      },
    ],
    studentCoordinators: [
      {
        id: "s1",
        name: "Preethi S",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("edc", "s1"),
      },
      {
        id: "s2",
        name: "Ramya M",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("edc", "s2"),
      },
    ],
  },

  disciplinary: {
    id: "disciplinary",
    slug: "disciplinary-action-committee",
    type: "committee",
    name: "Disciplinary Action Committee",
    heroTitle: "Institutional Cells & Committees",
    heroSubtitle: "Explore the various committees and cells that ensure student welfare, innovation, discipline, and development within the institution.",
    description:
      "Maintaining discipline and institutional values by ensuring adherence to rules and taking appropriate action on misconduct.",
    logo: rrcLogo,
    illustration: disciplineIllustration,
    joinIcon: disciplineJoinIcon,
    themeColor: "#1A3580",
    ctaTitle: "Be a part of a cell and make a difference!",
    ctaSubtitle: "Join hands with like minded people and contribute to a better tomorrow.",
    ctaButtonText: "Join This Cell",
    faculty: [
      {
        id: "f1",
        name: "PROF.S.UTHAYALAKSHMI",
        designation: "ASSISTANT PROFESSOR",
        role: "HEAD",
        avatar: memberPhoto("disciplinary", "f1"),
      },
      {
        id: "f2",
        name: "PROF. K. MALATHI",
        designation: "ASSISTANT PROFESSOR",
        role: "CO ORDINATOR",
        avatar: memberPhoto("disciplinary", "f2"),
      },
      {
        id: "f3",
        name: "PROF. V. HEMALATHA",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("disciplinary", "f3"),
      },
      {
        id: "f4",
        name: "PROF. R. PERIYAMMAL",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("disciplinary", "f4"),
      },
    ],
    studentCoordinators: [
      {
        id: "s1",
        name: "Gokul P",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("disciplinary", "s1"),
      },
      {
        id: "s2",
        name: "Breegina Sakthi S",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("disciplinary", "s2"),
      },
    ],
  },

  "students-grievance": {
    id: "students-grievance",
    slug: "students-grievance-redressal-cell",
    type: "committee",
    name: "Students Grievance Redressal Cell",
    heroTitle: "Institutional Cells & Committees",
    heroSubtitle: "Explore the various committees and cells that ensure student welfare, innovation, discipline, and development within the institution.",
    description:
      "Providing a dedicated support system for students to raise academic and non-academic concerns and ensuring timely resolution.",
    logo: rrcLogo,
    illustration: studentGrieveIllustration,
    joinIcon: studentGrieveJoinIcon,
    themeColor: "#5A3998",
    ctaTitle: "Be a part of a cell and make a difference!",
    ctaSubtitle: "Join hands with like minded people and contribute to a better tomorrow.",
    ctaButtonText: "Join This Cell",
    faculty: [
      {
        id: "f1",
        name: "DR. D. ANGULAKSHMI",
        designation: "ASSISTANT PROFESSOR",
        role: "HEAD",
        avatar: memberPhoto("students-grievance", "f1"),
      },
      {
        id: "f2",
        name: "PROF. N. JOTHIKA",
        designation: "ASSISTANT PROFESSOR",
        role: "CO ORDINATOR",
        avatar: memberPhoto("students-grievance", "f2"),
      },
      {
        id: "f3",
        name: "PROF. S. SELVAKKUMAR",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("students-grievance", "f3"),
      },
    ],
    studentCoordinators: [
      {
        id: "s1",
        name: "Suba Sri S",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("students-grievance", "s1"),
      },
      {
        id: "s2",
        name: "Manimegalai R",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("students-grievance", "s2"),
      },
    ],
  },

  "green-campus": {
    id: "green-campus",
    slug: "green-campus-initiative-cell",
    type: "committee",
    name: "Green Campus Initiative Cell",
    heroTitle: "Institutional Cells & Committees",
    heroSubtitle: "Explore the various committees and cells that ensure student welfare, innovation, discipline, and development within the institution.",
    description:
      "Promoting environmental sustainability through eco-friendly practices, awareness programs, and campus green initiatives.",
    logo: ecoLogo,
    illustration: greenCampusIllustration,
    joinIcon: greenCampusJoinIcon,
    themeColor: "#367A28",
    ctaTitle: "Be a part of a cell and make a difference!",
    ctaSubtitle: "Join hands with like minded people and contribute to a better tomorrow.",
    ctaButtonText: "Join This Cell",
    faculty: [
      {
        id: "f1",
        name: "PROF. V. HEMALATHA",
        designation: "ASSISTANT PROFESSOR",
        role: "CO ORDINATOR",
        avatar: memberPhoto("green-campus", "f1"),
      },
      {
        id: "f2",
        name: "PROF. C. SANKARI",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("green-campus", "f2"),
      },
      {
        id: "f3",
        name: "PROF. R.REVATHI",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("green-campus", "f3"),
      },
    ],
    studentCoordinators: [
      {
        id: "s1",
        name: "Anandarubini M",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("green-campus", "s1"),
      },
      {
        id: "s2",
        name: "Harini S",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("green-campus", "s2"),
      },
    ],
  },

  "career-guidance": {
    id: "career-guidance",
    slug: "career-guidance-cell",
    type: "committee",
    name: "Career Guidance Cell",
    heroTitle: "Institutional Cells & Committees",
    heroSubtitle: "Explore the various committees and cells that ensure student welfare, innovation, discipline, and development within the institution.",
    description:
      "Guiding students in making informed career decisions through counselling, skill development programs, and industry exposure.",
    logo: rrcLogo,
    illustration: careerGuideIllustration,
    joinIcon: careerGuideJoinIcon,
    themeColor: "#024C9C",
    ctaTitle: "Be a part of a cell and make a difference!",
    ctaSubtitle: "Join hands with like minded people and contribute to a better tomorrow.",
    ctaButtonText: "Join This Cell",
    faculty: [
      {
        id: "f1",
        name: "PROF.S.DINESH KUMAR",
        designation: "ASSISTANT PROFESSOR",
        role: "CO ORDINATOR",
        avatar: memberPhoto("career-guidance", "f1"),
      },
      {
        id: "f2",
        name: "PROF. M.A. SURYAMOORTHY",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("career-guidance", "f2"),
      },
    ],
    studentCoordinators: [
      {
        id: "s1",
        name: "Sethurajan V",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("career-guidance", "s1"),
      },
      {
        id: "s2",
        name: "Maniraj A",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("career-guidance", "s2"),
      },
    ],
  },

  "anti-drug": {
    id: "anti-drug",
    slug: "anti-drug-awareness-committee",
    type: "committee",
    name: "Anti Drug Awareness Committee",
    heroTitle: "Institutional Cells & Committees",
    heroSubtitle: "Explore the various committees and cells that ensure student welfare, innovation, discipline, and development within the institution.",
    description:
      "Creating awareness about the harmful effects of substance abuse and promoting a healthy, drug-free campus environment.",
    logo: rrcLogo,
    illustration: antiDrugIllustration,
    joinIcon: antiDrugJoinIcon,
    themeColor: "#57269C",
    ctaTitle: "Be a part of a cell and make a difference!",
    ctaSubtitle: "Join hands with like minded people and contribute to a better tomorrow.",
    ctaButtonText: "Join This Cell",
    faculty: [
      {
        id: "f1",
        name: "PROF.V.CHANDRASEKAR",
        designation: "HoD in ENGLISH",
        role: "HEAD",
        avatar: memberPhoto("anti-drug", "f1"),
      },
      {
        id: "f2",
        name: "PROF.G.ADIN BINO",
        designation: "ASSISTANT PROFESSOR",
        role: "CO ORDINATOR",
        avatar: memberPhoto("anti-drug", "f2"),
      },
      {
        id: "f3",
        name: "PROF.P.MANIKANDAN",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("anti-drug", "f3"),
      },
    ],
    studentCoordinators: [
      {
        id: "s1",
        name: "Infanraj S",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("anti-drug", "s1"),
      },
      {
        id: "s2",
        name: "Bharathi S",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("anti-drug", "s2"),
      },
    ],
  },

  iic: {
    id: "iic",
    slug: "institutions-innovation-cell",
    type: "committee",
    name: "Institution’s Innovation Cell (IIC)",
    heroTitle: "Institutional Cells & Committees",
    heroSubtitle: "Explore the various committees and cells that ensure student welfare, innovation, discipline, and development within the institution.",
    description:
      "Fostering a culture of innovation, research, and creativity by encouraging students to develop ideas, projects, and entrepreneurial solutions.",
    logo: culturalLogo,
    illustration: iicIllustration,
    joinIcon: iicJoinIcon,
    themeColor: "#0650BD",
    ctaTitle: "Be a part of a cell and make a difference!",
    ctaSubtitle: "Join hands with like minded people and contribute to a better tomorrow.",
    ctaButtonText: "Join This Cell",
    faculty: [
      {
        id: "f1",
        name: "Dr.S. Vasuki",
        designation: "PRINCIPAL",
        role: "HEAD",
        avatar: memberPhoto("iic", "f1"),
      },
      {
        id: "f2",
        name: "PROF.M.HARIPRABHU",
        designation: "HoD in MATHS",
        role: "CO ORDINATOR",
        avatar: memberPhoto("iic", "f2"),
      },
      {
        id: "f3",
        name: "PROF.S.SIVAKUMAR",
        designation: "HoD in COMMERCE",
        role: "MEMBER",
        avatar: memberPhoto("iic", "f3"),
      },
      {
        id: "f4",
        name: "PROF.S.DINESH KUMAR",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("iic", "f4"),
      },
    ],
    studentCoordinators: [
      {
        id: "s1",
        name: "Anandarubini M",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("iic", "s1"),
      },
      {
        id: "s2",
        name: "Harini S",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("iic", "s2"),
      },
    ],
  },

  "women-harassment": {
    id: "women-harassment",
    slug: "women-harassment-cell",
    type: "committee",
    name: "Women Harassment Cell",
    heroTitle: "Institutional Cells & Committees",
    heroSubtitle: "Explore the various committees and cells that ensure student welfare, innovation, discipline, and development within the institution.",
    description:
      "Ensuring a safe and respectful environment for women by addressing complaints, promoting awareness, and upholding dignity and equality.",
    logo: rrcLogo,
    illustration: womenIllustration,
    joinIcon: womenJoinIcon,
    themeColor: "#C53567",
    ctaTitle: "Be a part of a cell and make a difference!",
    ctaSubtitle: "Join hands with like minded people and contribute to a better tomorrow.",
    ctaButtonText: "Join This Cell",
    faculty: [
      {
        id: "f1",
        name: "Dr.S. Vasuki",
        designation: "PRINCIPAL",
        role: "HEAD",
        avatar: memberPhoto("women-harassment", "f1"),
      },
      {
        id: "f2",
        name: "PROF.M.HARIPRABHU",
        designation: "HoD in MATHS",
        role: "CO ORDINATOR",
        avatar: memberPhoto("women-harassment", "f2"),
      },
      {
        id: "f3",
        name: "Prof. P. Senthilvadivu",
        designation: "HOD in COMMERCE",
        role: "MEMBER",
        avatar: memberPhoto("women-harassment", "f3"),
      },
      {
        id: "f4",
        name: "Prof.S.UTHAYALAKSHMI",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("women-harassment", "f4"),
      },
      {
        id: "f5",
        name: "PROF.K.MALATHI",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("women-harassment", "f5"),
      },
    ],
    studentCoordinators: [
      {
        id: "s1",
        name: "Rithika R",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("women-harassment", "s1"),
      },
      {
        id: "s2",
        name: "Keerthana P",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("women-harassment", "s2"),
      },
    ],
  },
};

// Helper resolver that handles aliases and case-insensitivity
export function getClubData(idOrSlug) {
  if (!idOrSlug) return clubsData.rrc;
  const clean = idOrSlug.toString().toLowerCase().trim().replace(/_/g, "-");

  // Direct match by key
  if (clubsData[clean]) return clubsData[clean];

  // Match by slug or id
  const found = Object.values(clubsData).find(
    (c) => c.id === clean || c.slug === clean || clean.includes(c.id) || (c.slug && clean.includes(c.slug))
  );

  if (found) return found;

  // Keyword-based fallback
  if (clean.includes("red") || clean.includes("ribbon") || clean.includes("rrc")) return clubsData.rrc;
  if (clean.includes("nss") || clean.includes("service")) return clubsData.nss;
  if (clean.includes("yrc") || clean.includes("cross")) return clubsData.yrc;
  if (clean.includes("cultur")) return clubsData.cultural;
  if (clean.includes("yoga")) return clubsData.yoga;
  if (clean.includes("eco") || clean.includes("green")) return clubsData.eco;
  if (clean.includes("alumni")) return clubsData.alumni;
  if (clean.includes("pro") || clean.includes("public")) return clubsData.pro;
  if (clean.includes("rag")) return clubsData["anti-ragging"];
  if (clean.includes("drug")) return clubsData["anti-drug"];
  if (clean.includes("place")) return clubsData.placement;
  if (clean.includes("grie")) return clubsData.grievance;
  if (clean.includes("edc") || clean.includes("entre")) return clubsData.edc;
  if (clean.includes("disc")) return clubsData.disciplinary;
  if (clean.includes("iic") || clean.includes("innov")) return clubsData.iic;
  if (clean.includes("women")) return clubsData["women-harassment"];
  if (clean.includes("career")) return clubsData["career-guidance"];

  // Default to Red Ribbon Club
  return clubsData.rrc;
}
