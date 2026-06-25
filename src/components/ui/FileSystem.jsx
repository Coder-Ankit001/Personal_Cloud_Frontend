export const colorList = [
    "BLUE",
    "EMERALD",
    "ROSE",
    "GRAY",
    "VIOLET",
    "AMBER",
    "SKY",
    "PINK",
    "TEAL",
    "ORANGE"
]

export const colorMap = {
    BLUE:    { icon: 'text-blue-400',    badge: 'bg-blue-500/20 text-blue-400' },
    EMERALD: { icon: 'text-emerald-400', badge: 'bg-emerald-500/20 text-emerald-400' },
    ROSE:    { icon: 'text-rose-400',    badge: 'bg-rose-500/20 text-rose-400' },
    GRAY:    { icon: 'text-slate-500',   badge: 'bg-white/6 text-slate-500' },
    VIOLET:  { icon: 'text-violet-400',  badge: 'bg-violet-500/20 text-violet-400' },
    AMBER:   { icon: 'text-amber-400',   badge: 'bg-amber-500/20 text-amber-400' },
    SKY:     { icon: 'text-sky-400',     badge: 'bg-sky-500/20 text-sky-400' },
    PINK:    { icon: 'text-pink-400',    badge: 'bg-pink-500/20 text-pink-400' },
    TEAL:    { icon: 'text-teal-400',    badge: 'bg-teal-500/20 text-teal-400' },
    ORANGE:  { icon: 'text-orange-400',  badge: 'bg-orange-500/20 text-orange-400' },
}

export const extensionMap = {
    // Media
    JPG:  { color: 'text-blue-400',    icon: "ti-photo" },
    JPEG: { color: 'text-blue-400',    icon: "ti-photo" },
    PNG:  { color: 'text-sky-400',     icon: "ti-photo" },
    GIF:  { color: 'text-pink-400',    icon: "ti-gif" },
    MP4:  { color: 'text-violet-400',  icon: "ti-video" },
    MP3:  { color: 'text-pink-400',    icon: "ti-music" },

    // Docs
    PDF:  { color: 'text-rose-400',    icon: "ti-file-type-pdf" },
    DOCS: { color: 'text-blue-400',    icon: "ti-file-type-doc" },
    XLSX: { color: 'text-emerald-400', icon: "ti-file-type-xls" },
    TXT:  { color: 'text-slate-500',    icon: "ti-file-type-txt" },

    // Other
    ZIP:  { color: 'text-amber-400',   icon: "ti-file-zip" },
    CSV:  { color: 'text-teal-400',    icon: "ti-file-type-csv" },
}

export const FILE_OPTIONS = [
  { label: 'Download', icon: 'ti-download', action: 'download', nodeType: 'file' },
  { label: 'Share', icon: 'ti-share', action: 'share', nodeType: 'file'},
  { label: 'Copy link', icon: 'ti-link', action: 'copy-link', nodeType: 'file' },
  { label: 'Move', icon: 'ti-folder-share', action: 'move', nodeType: 'both' },
  { label: 'Rename', icon: 'ti-pencil', action: 'rename', nodeType: 'both' },
  { label: 'Delete', icon: 'ti-trash', action: 'delete', danger: true, nodeType: 'both' },
]

export const DEFAULT_NODES_LISTING = [
    { name: 'Design Assets', type: 'folder', count: 3, color: 'blue' },
    { name: 'Projects', type: 'folder', count: 3, color: 'emerald' },
    { name: 'Media', type: 'folder', count: 4, color: 'rose' },
    { name: 'Archives', type: 'folder', count: 2, color: 'gray' },
    { name: 'Machine Learning', type: 'folder', count: 2, color: 'orange' },
    { name: 'Web Development', type: 'folder', count: 2, color: 'pink' },
    { name: 'Photos', type: 'folder', count: 2, color: 'violet' },
    { name: 'Algorithms', type: 'folder', count: 2, color: 'teal' },
    { name: 'Beautiful Scenery', ext: 'img', type: 'file' },
    { name: 'Mountain View', ext: 'img', type: 'file' },
    { name: 'Resume', ext: 'pdf', type: 'file' },
    { name: 'Practical File', ext: 'pdf', type: 'file' },
  ]