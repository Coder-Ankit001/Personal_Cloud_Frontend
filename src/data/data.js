/**
 * Data.js
 * All static seed data in one place.
 * Components never hard-code content — they receive data as props or import from here.
 */

export const FILE_SYSTEM = {
  id: "root",
  name: "My Files",
  type: "folder",
  children: [
    {
      id: "f1",
      name: "Design Assets",
      type: "folder",
      accent: "blue",
      children: [
        {
          id: "f1a",
          name: "Brand Kit",
          type: "folder",
          accent: "violet",
          children: [
            {
              id: "f1a1",
              name: "Logos",
              type: "folder",
              accent: "cyan",
              children: [
                { id: "l1", name: "logo-primary.svg", type: "file", ext: "SVG",  size: "48 KB",  date: "Jun 14" },
                { id: "l2", name: "logo-dark.svg",    type: "file", ext: "SVG",  size: "52 KB",  date: "Jun 14" },
                { id: "l3", name: "logo-mark.svg",    type: "file", ext: "SVG",  size: "18 KB",  date: "Jun 10" },
              ],
            },
            {
              id: "f1a2",
              name: "Fonts",
              type: "folder",
              accent: "violet",
              children: [
                { id: "fn1", name: "Inter-Regular.ttf", type: "file", ext: "TTF", size: "300 KB", date: "May 2" },
                { id: "fn2", name: "Inter-Bold.ttf",    type: "file", ext: "TTF", size: "295 KB", date: "May 2" },
              ],
            },
            { id: "f1a3", name: "palette.json", type: "file", ext: "JSON", size: "4 KB",  date: "Jun 8" },
          ],
        },
        {
          id: "f1b",
          name: "UI Mockups",
          type: "folder",
          accent: "cyan",
          children: [
            { id: "m1", name: "dashboard-v3.fig", type: "file", ext: "FIG", size: "18.2 MB", date: "Jun 17" },
            { id: "m2", name: "mobile-flows.fig", type: "file", ext: "FIG", size: "9.4 MB",  date: "Jun 15" },
            { id: "m3", name: "components.fig",   type: "file", ext: "FIG", size: "22 MB",   date: "Jun 11" },
          ],
        },
        { id: "f1c", name: "README.md", type: "file", ext: "MD", size: "3 KB", date: "Jun 1" },
      ],
    },
    {
      id: "f2",
      name: "Projects",
      type: "folder",
      accent: "emerald",
      children: [
        {
          id: "f2a",
          name: "Alpha",
          type: "folder",
          accent: "cyan",
          children: [
            { id: "a1", name: "spec.pdf",     type: "file", ext: "PDF",  size: "1.2 MB", date: "May 20" },
            { id: "a2", name: "roadmap.xlsx", type: "file", ext: "XLSX", size: "800 KB", date: "Jun 2"  },
          ],
        },
        {
          id: "f2b",
          name: "Beta",
          type: "folder",
          accent: "amber",
          children: [
            { id: "b1", name: "PRD.docx", type: "file", ext: "DOCX", size: "240 KB", date: "Jun 12" },
          ],
        },
        { id: "f2c", name: "meeting-notes.docx", type: "file", ext: "DOCX", size: "120 KB", date: "Jun 18" },
      ],
    },
    {
      id: "f3",
      name: "Media",
      type: "folder",
      accent: "rose",
      children: [
        { id: "v1", name: "promo-reel.mp4", type: "file", ext: "MP4", size: "420 MB", date: "Jun 10" },
        { id: "v2", name: "tutorial.mp4",   type: "file", ext: "MP4", size: "220 MB", date: "Jun 5"  },
        { id: "p1", name: "hero-shot.jpg",  type: "file", ext: "JPG", size: "4.8 MB", date: "Jun 9"  },
        { id: "p2", name: "team-photo.jpg", type: "file", ext: "JPG", size: "6.1 MB", date: "May 28" },
      ],
    },
    {
      id: "f4",
      name: "Archives",
      type: "folder",
      accent: "slate",
      children: [
        { id: "ar1", name: "2023-backup.zip", type: "file", ext: "ZIP", size: "2.1 GB", date: "Jan 3"       },
        { id: "ar2", name: "2022-backup.zip", type: "file", ext: "ZIP", size: "1.8 GB", date: "Jan 5 2023"  },
      ],
    },
    { id: "r1", name: "Q2-report.pdf",      type: "file", ext: "PDF",  size: "2.3 MB", date: "Jun 16" },
    { id: "r2", name: "budget-2024.xlsx",   type: "file", ext: "XLSX", size: "560 KB", date: "Jun 14" },
    { id: "r3", name: "investor-deck.pptx", type: "file", ext: "PPTX", size: "11 MB",  date: "Jun 10" },
  ],
};

export const STATS = [
  { id: "folders", icon: "ti-folder", label: "Folders",  value: "24",     accent: "blue"    },
  { id: "files",   icon: "ti-files",  label: "Files",    value: "4,218",  accent: "cyan"    },
  { id: "used",    icon: "ti-upload", label: "Used",     value: "12.4 GB",accent: "violet"  },
  { id: "shared",  icon: "ti-share",  label: "Shared",   value: "38",     accent: "emerald" },
];

export const NAV_ITEMS = [
  { id: "dashboard", icon: "ti-layout-dashboard", label: "Dashboard"      },
  { id: "files",     icon: "ti-files",            label: "My Files",  badge: "4.2k" },
  { id: "shared",    icon: "ti-share-3",          label: "Shared with me" },
  { id: "starred",   icon: "ti-star",             label: "Starred"        },
  { id: "recent",    icon: "ti-clock",            label: "Recent"         },
  { id: "trash",     icon: "ti-trash",            label: "Trash"          },
];

export const SMART_FOLDERS = [
  { id: "images", icon: "ti-photo",     label: "Images", accent: "cyan"    },
  { id: "videos", icon: "ti-video",     label: "Videos", accent: "violet"  },
  { id: "code",   icon: "ti-file-code", label: "Code",   accent: "emerald" },
];

export const CONTEXT_ACTIONS = [
  { id: "rename",    icon: "ti-pencil",   label: "Rename"        },
  { id: "download",  icon: "ti-download", label: "Download"      },
  { id: "share",     icon: "ti-share",    label: "Share"         },
  { id: "duplicate", icon: "ti-copy",     label: "Duplicate"     },
  { id: "star",      icon: "ti-star",     label: "Star"          },
  { id: "divider" },
  { id: "trash",     icon: "ti-trash",    label: "Move to trash", danger: true },
];

export const STORAGE_USED_GB  = 12.4;
export const STORAGE_TOTAL_GB = 20;
