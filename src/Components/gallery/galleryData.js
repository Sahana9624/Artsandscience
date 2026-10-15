// Album covers & photos (from Figma design)
const coverModules = import.meta.glob("../../assets/images/gallery/cover-*.png", {
  eager: true,
  import: "default",
});
const photoModules = import.meta.glob("../../assets/images/gallery/*/*.png", {
  eager: true,
  import: "default",
});

// Covers that are one of the album photos reuse that photo instead of a copy
const COVER_FROM_ALBUM = {
  3: "placement-drive/01",
  5: "generative-ai/05",
  9: "founders-day/15",
  10: "mou/02",
  11: "workshop/02",
  12: "sports/04",
  13: "cm-trophy/01",
};

const cover = (n) =>
  COVER_FROM_ALBUM[n]
    ? photoModules[`../../assets/images/gallery/${COVER_FROM_ALBUM[n]}.png`]
    : coverModules[`../../assets/images/gallery/cover-${String(n).padStart(2, "0")}.png`];

const albumPhotos = (folder, label) =>
  Object.keys(photoModules)
    .filter((path) => path.includes(`/gallery/${folder}/`))
    .sort()
    .map((path, idx) => ({
      id: idx + 1,
      src: photoModules[path],
      alt: `${label} - Photo ${idx + 1}`,
    }));

const rawAlbums = [
  {
    id: "cm-trophy-2026",
    title: "CM Trophy 2026",
    titlePrefix: "CM Trophy ",
    titleHighlight: "2026",
    coverImage: cover(13),
    photos: albumPhotos("cm-trophy", "CM Trophy 2026"),
  },
  {
    id: "gb-shaw-kalaimagal",
    title: "G.B SHAW & கலை மகள்",
    titlePrefix: "G.B SHAW & கலை ",
    titleHighlight: "மகள்",
    coverImage: cover(1),
    photos: albumPhotos("gb-shaw", "G.B SHAW & கலை மகள்"),
  },
  {
    id: "soft-skills-development",
    title: "Soft Skills Development",
    titlePrefix: "Soft Skills ",
    titleHighlight: "Development",
    coverImage: cover(2),
    photos: albumPhotos("soft-skills", "Soft Skills Development"),
  },
  {
    id: "campus-placement-drive",
    title: "Campus Placement Drive",
    titlePrefix: "Campus Placement ",
    titleHighlight: "Drive",
    coverImage: cover(3),
    photos: albumPhotos("placement-drive", "Campus Placement Drive"),
  },
  {
    id: "nannerik-kazhaga-vizha",
    title: "நன்னெறிக் கழக விழா",
    titlePrefix: "நன்னெறிக் கழக ",
    titleHighlight: "விழா",
    coverImage: cover(4),
    photos: albumPhotos("nanneri", "நன்னெறிக் கழக விழா"),
  },
  {
    id: "power-magic-generative-ai",
    title: "Power To Power Magic of Generative",
    titlePrefix: "Power To Power Magic of ",
    titleHighlight: "Generative",
    coverImage: cover(5),
    photos: albumPhotos("generative-ai", "Power To Power Magic of Generative"),
  },
  {
    id: "pongal-celebration-2025",
    title: "Arts college Pongal celebration 2026",
    titlePrefix: "Arts college Pongal celebration ",
    titleHighlight: "2026",
    coverImage: cover(6),
    photos: albumPhotos("pongal-2026", "Arts college Pongal celebration 2026"),
  },
  {
    id: "orientation-gala-2k25",
    title: "Orientation Gala – 2k25",
    titlePrefix: "Orientation Gala – ",
    titleHighlight: "2k25",
    coverImage: cover(7),
    photos: albumPhotos("orientation", "Orientation Gala – 2k25"),
  },
  {
    id: "conference",
    title: "Conference",
    titlePrefix: "Academic ",
    titleHighlight: "Conference",
    coverImage: cover(8),
    photos: albumPhotos("conference", "Conference"),
  },
  {
    id: "founders-day-celebration",
    title: "Founder's Day Celebration",
    titlePrefix: "Founder's Day ",
    titleHighlight: "Celebration",
    coverImage: cover(9),
    photos: albumPhotos("founders-day", "Founder's Day Celebration"),
  },
  {
    id: "mtgi-nitttr-mou-signing",
    title: "MTGI - NITTTR MoU Signing Ceremony",
    titlePrefix: "MTGI - NITTTR MoU Signing ",
    titleHighlight: "Ceremony",
    coverImage: cover(10),
    photos: albumPhotos("mou", "MTGI - NITTTR MoU Signing Ceremony"),
  },
  {
    id: "workshop-30-5-2025",
    title: "Workshop 30.5.2025",
    titlePrefix: "Special Workshop ",
    titleHighlight: "30.5.2025",
    coverImage: cover(11),
    photos: albumPhotos("workshop", "Workshop 30.5.2025"),
  },
  {
    id: "sports",
    title: "Sports",
    titlePrefix: "Annual ",
    titleHighlight: "Sports",
    coverImage: cover(12),
    photos: albumPhotos("sports", "Sports"),
  },
];

export const galleryAlbums = rawAlbums.map((album) => ({
  ...album,
  count: Array.isArray(album.photos) ? album.photos.length : 0,
}));
