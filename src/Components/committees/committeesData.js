// Committee & Cell Illustrations
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

// Join & Action Icons
import antiRagJoinIcon from "../../assets/icons/cc-cta/anti-rag-join.svg";
import grievanceJoinIcon from "../../assets/icons/cc-cta/grievance.svg";
import placementJoinIcon from "../../assets/icons/cc-cta/placement-join.svg";
import entrepreneurJoinIcon from "../../assets/icons/cc-cta/cultural & entreupreneur-join.svg";
import disciplineJoinIcon from "../../assets/icons/cc-cta/discipline-join.svg";
import studentGrieveJoinIcon from "../../assets/icons/cc-cta/student-grieve.svg";
import greenCampusJoinIcon from "../../assets/icons/cc-cta/green-campus.svg";
import careerGuideJoinIcon from "../../assets/icons/cc-cta/career-guide.svg";
import antiDrugJoinIcon from "../../assets/icons/cc-cta/anti-drug.svg";
import iicJoinIcon from "../../assets/icons/cc-cta/IIC-join.svg";
import researchJoinIcon from "../../assets/icons/cc-cta/research-join.svg";
import womenJoinIcon from "../../assets/icons/cc-cta/women-join.svg";

// Dedicated Committee & Cell Emblems (SVG icons from icon folders)
import antiRaggingLogo from "../../assets/icons/committee-logos/anti-ragging.svg";
import grievanceLogo from "../../assets/icons/committee-logos/grievance.svg";
import placementLogo from "../../assets/icons/committee-logos/placement.svg";
import edcLogo from "../../assets/icons/committee-logos/edc.svg";
import disciplinaryLogo from "../../assets/icons/committee-logos/disciplinary.svg";
import studentsGrievanceLogo from "../../assets/icons/committee-logos/students-grievance.svg";
import greenCampusLogo from "../../assets/icons/committee-logos/green-campus.svg";
import careerGuidanceLogo from "../../assets/icons/committee-logos/career-guidance.svg";
import antiDrugLogo from "../../assets/icons/committee-logos/anti-drug.svg";
import iicLogo from "../../assets/icons/committee-logos/iic.svg";
import researchLogo from "../../assets/icons/committee-logos/research.svg";
import womenLogo from "../../assets/icons/committee-logos/women.svg";


// Member photos (shared lookup; one stored copy per person)
import { memberPhoto } from "../common/memberPhotos";

export const committeesData = {
  // 1. Anti Ragging Committee
  "anti-ragging": {
    id: "anti-ragging",
    slug: "anti-ragging-committee",
    type: "committee",
    name: "Anti Ragging Committee",
    heroTitle: "Institutional Cells & Committees",
    heroSubtitle: "Explore the various committees and cells that ensure student welfare, innovation, discipline, and development within the institution.",
    description:
      "Ensuring a safe and respectful campus environment by preventing ragging and promoting student well-being through strict monitoring and awareness initiatives.",
    logo: antiRaggingLogo,
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

  // 2. Grievance & Redressal Cell
  grievance: {
    id: "grievance",
    slug: "grievance-redressal-cell",
    type: "committee",
    name: "Grievance & Redressal Cell",
    heroTitle: "Institutional Cells & Committees",
    heroSubtitle: "Explore the various committees and cells that ensure student welfare, innovation, discipline, and development within the institution.",
    description:
      "Addressing student and staff concerns by providing a transparent and effective platform to resolve grievances and ensure fair practices within the institution.",
    logo: grievanceLogo,
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

  // 3. Placement Cell
  placement: {
    id: "placement",
    slug: "placement-cell",
    type: "committee",
    name: "Placement Cell",
    heroTitle: "Institutional Cells & Committees",
    heroSubtitle: "Explore the various committees and cells that ensure student welfare, innovation, discipline, and development within the institution.",
    description:
      "Facilitating career opportunities by organising training, internships, and campus placements to help students transition successfully into the professional world.",
    logo: placementLogo,
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

  // 4. Entrepreneurship Development Cell (EDC)
  edc: {
    id: "edc",
    slug: "entrepreneurship-development-cell",
    type: "committee",
    name: "Entrepreneurship Development Cell",
    heroTitle: "Institutional Cells & Committees",
    heroSubtitle: "Explore the various committees and cells that ensure student welfare, innovation, discipline, and development within the institution.",
    description:
      "Encouraging innovation and entrepreneurial thinking by supporting students in developing business ideas, startups, and leadership skills.",
    logo: edcLogo,
    illustration: entrepreneurIllustration,
    joinIcon: entrepreneurJoinIcon,
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

  // 5. Disciplinary Action Committee
  disciplinary: {
    id: "disciplinary",
    slug: "disciplinary-action-committee",
    type: "committee",
    name: "Disciplinary Action Committee",
    heroTitle: "Institutional Cells & Committees",
    heroSubtitle: "Explore the various committees and cells that ensure student welfare, innovation, discipline, and development within the institution.",
    description:
      "Maintaining discipline and institutional values by ensuring adherence to rules and taking appropriate action on misconduct.",
    logo: disciplinaryLogo,
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

  // 6. Students Grievance Redressal Cell
  "students-grievance": {
    id: "students-grievance",
    slug: "students-grievance-redressal-cell",
    type: "committee",
    name: "Students Grievance Redressal Cell",
    heroTitle: "Institutional Cells & Committees",
    heroSubtitle: "Explore the various committees and cells that ensure student welfare, innovation, discipline, and development within the institution.",
    description:
      "Providing a dedicated support system for students to raise academic and non-academic concerns and ensuring timely resolution.",
    logo: studentsGrievanceLogo,
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

  // 7. Green Campus Initiative Cell
  "green-campus": {
    id: "green-campus",
    slug: "green-campus-initiative-cell",
    type: "committee",
    name: "Green Campus Initiative Cell",
    heroTitle: "Institutional Cells & Committees",
    heroSubtitle: "Explore the various committees and cells that ensure student welfare, innovation, discipline, and development within the institution.",
    description:
      "Promoting environmental sustainability through eco-friendly practices, awareness programs, and campus green initiatives.",
    logo: greenCampusLogo,
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

  // 8. Career Guidance Cell
  "career-guidance": {
    id: "career-guidance",
    slug: "career-guidance-cell",
    type: "committee",
    name: "Career Guidance Cell",
    heroTitle: "Institutional Cells & Committees",
    heroSubtitle: "Explore the various committees and cells that ensure student welfare, innovation, discipline, and development within the institution.",
    description:
      "Guiding students in making informed career decisions through counselling, skill development programs, and industry exposure.",
    logo: careerGuidanceLogo,
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

  // 9. Anti Drug Awareness Committee
  "anti-drug": {
    id: "anti-drug",
    slug: "anti-drug-awareness-committee",
    type: "committee",
    name: "Anti Drug Awareness Committee",
    heroTitle: "Institutional Cells & Committees",
    heroSubtitle: "Explore the various committees and cells that ensure student welfare, innovation, discipline, and development within the institution.",
    description:
      "Creating awareness about the harmful effects of substance abuse and promoting a healthy, drug-free campus environment.",
    logo: antiDrugLogo,
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

  // 10. Institution’s Innovation Cell (IIC)
  iic: {
    id: "iic",
    slug: "institutions-innovation-cell",
    type: "committee",
    name: "Institution’s Innovation Cell (IIC)",
    heroTitle: "Institutional Cells & Committees",
    heroSubtitle: "Explore the various committees and cells that ensure student welfare, innovation, discipline, and development within the institution.",
    description:
      "Fostering a culture of innovation, research, and creativity by encouraging students to develop ideas, projects, and entrepreneurial solutions.",
    logo: iicLogo,
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

  // 11. Research & Development Cell
  research: {
    id: "research",
    slug: "research-development-cell",
    type: "committee",
    name: "Research & Development Cell",
    heroTitle: "Institutional Cells & Committees",
    heroSubtitle: "Explore the various committees and cells that ensure student welfare, innovation, discipline, and development within the institution.",
    description:
      "Promoting research culture by supporting faculty and students in research activities, publications, and funded projects.",
    logo: researchLogo,
    illustration: researchIllustration,
    joinIcon: researchJoinIcon,
    themeColor: "#4C3196",
    ctaTitle: "Be a part of a cell and make a difference!",
    ctaSubtitle: "Join hands with like minded people and contribute to a better tomorrow.",
    ctaButtonText: "Join This Cell",
    faculty: [
      {
        id: "f1",
        name: "Dr.S. Vasuki",
        designation: "PRINCIPAL",
        role: "HEAD",
        avatar: memberPhoto("research", "f1"),
      },
      {
        id: "f2",
        name: "DR.D.ANGULAKSHMI",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("research", "f2"),
      },
      {
        id: "f3",
        name: "DR.R.RENGASAMY",
        designation: "ASSISTANT PROFESSOR",
        role: "MEMBER",
        avatar: memberPhoto("research", "f3"),
      },
    ],
    studentCoordinators: [
      {
        id: "s1",
        name: "Preethi S",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("research", "s1"),
      },
      {
        id: "s2",
        name: "Ramya M",
        designation: "Student",
        badge: "Student Coordinators",
        avatar: memberPhoto("research", "s2"),
      },
    ],
  },

  // 12. Women Harassment Cell
  "women-harassment": {
    id: "women-harassment",
    slug: "women-harassment-cell",
    type: "committee",
    name: "Women Harassment Cell",
    heroTitle: "Institutional Cells & Committees",
    heroSubtitle: "Explore the various committees and cells that ensure student welfare, innovation, discipline, and development within the institution.",
    description:
      "Ensuring a safe and respectful environment for women by addressing complaints, promoting awareness, and upholding dignity and equality.",
    logo: womenLogo,
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

// Helper resolver that handles aliases, slugs, and case-insensitivity
export function getCommitteeData(idOrSlug) {
  if (!idOrSlug) return committeesData["anti-ragging"];
  const clean = idOrSlug.toString().toLowerCase().trim().replace(/_/g, "-");

  // Direct match by key
  if (committeesData[clean]) return committeesData[clean];

  // Match by slug or id
  const found = Object.values(committeesData).find(
    (c) =>
      c.id === clean ||
      c.slug === clean ||
      clean.includes(c.id) ||
      (c.slug && clean.includes(c.slug))
  );

  if (found) return found;

  // Keyword-based fallback
  if (clean.includes("rag")) return committeesData["anti-ragging"];
  if (clean.includes("drug")) return committeesData["anti-drug"];
  if (clean.includes("place")) return committeesData.placement;
  if (clean.includes("student") && clean.includes("grie"))
    return committeesData["students-grievance"];
  if (clean.includes("grie") || clean.includes("redress"))
    return committeesData.grievance;
  if (clean.includes("edc") || clean.includes("entre")) return committeesData.edc;
  if (clean.includes("disc")) return committeesData.disciplinary;
  if (clean.includes("green") || clean.includes("campus"))
    return committeesData["green-campus"];
  if (clean.includes("career") || clean.includes("guidance"))
    return committeesData["career-guidance"];
  if (clean.includes("iic") || clean.includes("innov")) return committeesData.iic;
  if (clean.includes("research") || clean.includes("rnd") || clean.includes("r&d"))
    return committeesData.research;
  if (clean.includes("women") || clean.includes("harass"))
    return committeesData["women-harassment"];

  // Default to Anti Ragging Committee
  return committeesData["anti-ragging"];
}
