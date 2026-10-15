// IQAC Member Photos
import iqacMember1 from "../../assets/images/club-com/members/iic/f1.png";
import iqacMember2 from "../../assets/images/accreditations/members/iqac-2.png";
import iqacMember3 from "../../assets/images/club-com/members/iic/f2.png";
import iqacMember4 from "../../assets/images/club-com/members/anti-drug/f3.png";
import iqacMember5 from "../../assets/images/club-com/members/anti-drug/f2.png";
import noDataImg from "../../assets/images/accreditations/no-data.png";
import heroImg from "../../assets/images/accreditations/accreditation-hero.jpg";

export const accreditationData = {
  iqac: {
    id: "iqac",
    slug: "iqac",
    eyebrow: "NAAC Accreditation & Quality Assurance",
    title: "Internal Quality Assurance Cell (IQAC)",
    subtitle:
      "Committed to fostering a culture of continuous improvement, academic excellence, and institutional quality through strategic planning, innovation, and best practices.",
    heroImage: heroImg,
    hasContent: true,

    // Objective Section
    objective: {
      heading: "Objective",
      intro:
        "The IQAC of Mother Terasa College of Arts and Science, has been consistently and actively involved in quality sustenance and quality enhancement activities. It is a participative cell of the institution that works on involving strategies to remove deficiencies and enhancement quality, thus channelizing the efforts of the university towards achieving holistic academic excellence.",
      objectivesList: [
        "To develop a system for conscious, consistent and catalytic action to improve the academic and administrative performance",
        "To promote measures for the institutional functioning towards quality enhancement through internalization of quality culture and institutionalization of best practices.",
      ],
      benefitsList: [
        "Provide a sound basis for decision making to improve institutional functioning.",
        "Ensure enhancement and integration among the various activities of the institution and institutionalize good practices.",
        "Ensure internalization of the quality culture.",
      ],
      functionsList: [
        "Preparation of quality assurance report based on the quality metrics and assessment criteria developed by NAAC in the prescribed format.",
        "Creating awareness on quality aspects, their implementation through various quality circles and monitoring of quality measures of the institution.",
        "Conduct of various workshops and seminars to improve the quality measures and for the promotion of quality circles in the institution.",
        "Facilitating the creation of favorable ambiance in the institution for quality education and faculty development required for participatory teaching and learning process.",
        "Establishing a proper feedback system for the quality measure stakeholders for continuous improvement.",
      ],
    },

    // Members Section
    members: [
      {
        id: "m1",
        name: "Dr.S. Vasuki",
        designation: "Principal",
        badge: "IQAC - Institution Head",
        badgeType: "gold",
        avatar: iqacMember1,
      },
      {
        id: "m2",
        name: "Dr. J.Samuel Caeser Pickens",
        designation: "Vice Principal",
        badge: "IQAC - Co-ordinator",
        badgeType: "gold",
        avatar: iqacMember2,
      },
      {
        id: "m3",
        name: "Mr.HariPrabu",
        designation: "HOD Department of Mathematics",
        badge: "IQAC - Member head",
        badgeType: "orange",
        avatar: iqacMember3,
      },
      {
        id: "m4",
        name: "Mr.P.Manikandan",
        designation: "Assistant professor / Computer Application's",
        badge: "IQAC - Member",
        badgeType: "blue",
        avatar: iqacMember4,
      },
      {
        id: "m5",
        name: "Mr.G.Adin Bino",
        designation: "Assistant professor department of English",
        badge: "IQAC - Member",
        badgeType: "blue",
        avatar: iqacMember5,
      },
    ],

    // Annual Documents Section
    yearReports: [
      {
        year: "IQAC 2025 - 2026",
        items: [
          { number: "01", title: "MOM 13/10/2025", fileUrl: "#" },
          { number: "02", title: "MOM 05/08/2025", fileUrl: "#" },
        ],
      },
      {
        year: "IQAC 2024 - 2025",
        items: [
          { number: "01", title: "MOM 17/03/2025", fileUrl: "#" },
          { number: "02", title: "MOM 15/03/2024", fileUrl: "#" },
          { number: "03", title: "MOM 10/03/2024", fileUrl: "#" },
        ],
      },
      {
        year: "IQAC 2023 - 2024",
        items: [
          { number: "01", title: "MOM 12/03/2024", fileUrl: "#" },
          { number: "02", title: "MOM 13/10/2023", fileUrl: "#" },
          { number: "03", title: "MOM 23/07/2023", fileUrl: "#" },
        ],
      },
      {
        year: "IQAC 2022 - 2023",
        items: [
          { number: "01", title: "MOM 15/10/2023", fileUrl: "#" },
          { number: "02", title: "MOM 10/10/2022", fileUrl: "#" },
          { number: "03", title: "MOM 06/07/2022", fileUrl: "#" },
        ],
      },
      {
        year: "IQAC 2021 - 2022",
        items: [
          { number: "01", title: "MOM 17/08/2022", fileUrl: "#" },
          { number: "02", title: "MOM 02/11/2021", fileUrl: "#" },
          { number: "03", title: "MOM 04/14/2021", fileUrl: "#" },
        ],
      },
    ],
  },

  iiqa: {
    id: "iiqa",
    slug: "iiqa",
    eyebrow: "NAAC Accreditation & Quality Assurance",
    title: "Institutional Information for Quality Assessment (IIQA)",
    subtitle:
      "Presenting institutional information that reflects our commitment to academic excellence, continuous improvement, transparent governance, and quality assurance in accordance with NAAC guidelines.",
    heroImage: heroImg,
    hasContent: false,
    noDataImage: noDataImg,
    noDataTitle: "No Data Available",
    noDataSubtitle: "There are currently no records to display. Please check back later.",
  },

  ssr: {
    id: "ssr",
    slug: "ssr",
    eyebrow: "NAAC Accreditation & Quality Assurance",
    title: "Self Study Report (SSR)",
    subtitle:
      "Comprehensive self-study report detailing institutional performance, curriculum delivery, teaching-learning processes, research outcomes, and infrastructure.",
    heroImage: heroImg,
    hasContent: false,
    noDataImage: noDataImg,
    noDataTitle: "No Data Available",
    noDataSubtitle: "There are currently no records to display. Please check back later.",
  },
};

export function getAccreditationData(tabId) {
  if (!tabId) return accreditationData.iqac;
  const clean = tabId.toString().toLowerCase().trim().replace(/_/g, "-");
  if (clean.includes("iiqa")) return accreditationData.iiqa;
  if (clean.includes("ssr")) return accreditationData.ssr;
  return accreditationData.iqac;
}
