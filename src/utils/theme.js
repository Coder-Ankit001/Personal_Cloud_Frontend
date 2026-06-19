/**
 * Theme.js
 * Central design-token map for accent colors.
 * Every component that needs color pulls from here — no scattered string literals.
 *
 * Tailwind requires full class strings to be present in source so the JIT
 * compiler includes them. All variants are enumerated explicitly below.
 */

/** Folder / badge accent palette */
export const ACCENT = {
  blue: {
    icon:   "text-blue-400",
    badge:  "bg-blue-900/60 text-blue-300",
    iconBg: "bg-blue-900/50",
    border: "border-blue-500/40",
    activeBg: "bg-blue-900/30",
    activeText: "text-blue-400",
  },
  cyan: {
    icon:   "text-cyan-400",
    badge:  "bg-cyan-900/60 text-cyan-300",
    iconBg: "bg-cyan-900/50",
    border: "border-cyan-500/40",
    activeBg: "bg-cyan-900/30",
    activeText: "text-cyan-400",
  },
  violet: {
    icon:   "text-violet-400",
    badge:  "bg-violet-900/60 text-violet-300",
    iconBg: "bg-violet-900/50",
    border: "border-violet-500/40",
    activeBg: "bg-violet-900/30",
    activeText: "text-violet-400",
  },
  emerald: {
    icon:   "text-emerald-400",
    badge:  "bg-emerald-900/60 text-emerald-300",
    iconBg: "bg-emerald-900/50",
    border: "border-emerald-500/40",
    activeBg: "bg-emerald-900/30",
    activeText: "text-emerald-400",
  },
  amber: {
    icon:   "text-amber-400",
    badge:  "bg-amber-900/60 text-amber-300",
    iconBg: "bg-amber-900/50",
    border: "border-amber-500/40",
    activeBg: "bg-amber-900/30",
    activeText: "text-amber-400",
  },
  rose: {
    icon:   "text-rose-400",
    badge:  "bg-rose-900/60 text-rose-300",
    iconBg: "bg-rose-900/50",
    border: "border-rose-500/40",
    activeBg: "bg-rose-900/30",
    activeText: "text-rose-400",
  },
  slate: {
    icon:   "text-slate-400",
    badge:  "bg-slate-700/60 text-slate-300",
    iconBg: "bg-slate-700/50",
    border: "border-slate-500/40",
    activeBg: "bg-slate-700/30",
    activeText: "text-slate-400",
  },
};

/** Map file extension → accent key */
export const EXT_ACCENT = {
  PDF:  "rose",
  DOCX: "blue",
  XLSX: "emerald",
  PPTX: "amber",
  MP4:  "violet",
  MOV:  "violet",
  JPG:  "cyan",
  PNG:  "cyan",
  SVG:  "cyan",
  FIG:  "violet",
  ZIP:  "slate",
  RAR:  "slate",
  MD:   "slate",
  JSON: "amber",
  TTF:  "emerald",
  OTF:  "emerald",
};

/** Map file extension → Tabler icon class */
export const EXT_ICON = {
  PDF:  "ti-file-type-pdf",
  DOCX: "ti-file-word",
  XLSX: "ti-file-spreadsheet",
  PPTX: "ti-presentation",
  MP4:  "ti-video",
  MOV:  "ti-video",
  JPG:  "ti-photo",
  PNG:  "ti-photo",
  SVG:  "ti-vector",
  FIG:  "ti-vector-bezier",
  ZIP:  "ti-file-zip",
  RAR:  "ti-file-zip",
  MD:   "ti-markdown",
  JSON: "ti-braces",
  TTF:  "ti-typography",
  OTF:  "ti-typography",
};

/** Resolve accent tokens for a file or folder node */
export function accentFor(node) {
  if (node.type === "folder") {
    return ACCENT[node.accent] ?? ACCENT.blue;
  }
  return ACCENT[EXT_ACCENT[node.ext]] ?? ACCENT.slate;
}
