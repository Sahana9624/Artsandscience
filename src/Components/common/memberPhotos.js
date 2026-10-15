// Member photos for clubs & committees (from the Figma design), stored per
// group id as <group>/<slot>.png, e.g. "rrc/f1" (faculty 1) or "nss/s2" (student 2).
const memberPhotoModules = import.meta.glob("../../assets/images/club-com/members/*/*.png", {
  eager: true,
  import: "default",
});

// The same person serves on several clubs/committees. Their photo is stored once;
// these slots reuse the photo stored under another group.
const SHARED_PHOTOS = {
  "anti-drug/f1": "alumni/f1",
  "anti-ragging/f1": "alumni/f1",
  "anti-ragging/f3": "anti-drug/f3",
  "anti-ragging/s1": "anti-drug/s1",
  "anti-ragging/s2": "anti-drug/s2",
  "disciplinary/f1": "cultural/f1",
  "disciplinary/s1": "alumni/s1",
  "disciplinary/s2": "alumni/s2",
  "eco/f3": "disciplinary/f2",
  "eco/s1": "career-guidance/s1",
  "eco/s2": "career-guidance/s2",
  "edc/f2": "eco/f1",
  "green-campus/f1": "disciplinary/f3",
  "iic/f4": "career-guidance/f1",
  "iic/s1": "green-campus/s1",
  "iic/s2": "green-campus/s2",
  "nss/f4": "anti-drug/f3",
  "nss/f5": "green-campus/f2",
  "placement/f1": "career-guidance/f1",
  "placement/s1": "nss/s1",
  "placement/s2": "nss/s2",
  "research/f1": "iic/f1",
  "research/f3": "nss/f1",
  "research/s1": "edc/s1",
  "research/s2": "edc/s2",
  "rrc/f2": "grievance/f4",
  "rrc/s1": "grievance/s1",
  "rrc/s2": "grievance/s2",
  "students-grievance/f1": "research/f2",
  "students-grievance/f2": "nss/f3",
  "students-grievance/f3": "nss/f2",
  "students-grievance/s1": "cultural/s1",
  "students-grievance/s2": "cultural/s2",
  "women-harassment/f1": "iic/f1",
  "women-harassment/f2": "iic/f2",
  "women-harassment/f3": "rrc/f1",
  "women-harassment/f4": "cultural/f1",
  "women-harassment/f5": "disciplinary/f2",
  "women-harassment/s1": "nss/s1",
  "women-harassment/s2": "nss/s2",
  "yoga/f2": "placement/f2",
  "yoga/f3": "anti-drug/f3",
  "yoga/s1": "green-campus/s1",
  "yoga/s2": "green-campus/s2",
  "yrc/f1": "disciplinary/f3",
  "yrc/s1": "edc/s1",
  "yrc/s2": "edc/s2",
};

export const memberPhoto = (groupId, slot) => {
  const key = SHARED_PHOTOS[`${groupId}/${slot}`] || `${groupId}/${slot}`;
  return memberPhotoModules[`../../assets/images/club-com/members/${key}.png`];
};
