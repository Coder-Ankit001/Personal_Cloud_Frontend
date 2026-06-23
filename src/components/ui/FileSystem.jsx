export const colorMap = {
    blue: { icon: 'text-blue-400', badge: 'bg-blue-500/20 text-blue-400' },
    emerald: { icon: 'text-emerald-400', badge: 'bg-emerald-500/20 text-emerald-400' },
    rose: { icon: 'text-rose-400', badge: 'bg-rose-500/20 text-rose-400' },
    gray: { icon: 'text-slate-500', badge: 'bg-white/6 text-slate-500' },
    violet:  { icon: 'text-violet-400',  badge: 'bg-violet-500/20 text-violet-400' },
    amber:   { icon: 'text-amber-400',   badge: 'bg-amber-500/20 text-amber-400' },
    sky:     { icon: 'text-sky-400',     badge: 'bg-sky-500/20 text-sky-400' },
    pink:    { icon: 'text-pink-400',    badge: 'bg-pink-500/20 text-pink-400' },
    teal:    { icon: 'text-teal-400',    badge: 'bg-teal-500/20 text-teal-400' },
    orange:  { icon: 'text-orange-400',  badge: 'bg-orange-500/20 text-orange-400' },
}

export const extensionColorMap = {
        
    // Media
    jpg:  colorMap["blue"],
    jpeg: colorMap["blue"],
    png:  colorMap["sky"],
    gif:  colorMap["pink"],
    mp4:  colorMap["violet"],
    mp3:  colorMap["pink"],

    // Docs
    pdf:  colorMap["rose"],
    docx: colorMap["blue"],
    xlsx: colorMap["emerald"],
    txt:  colorMap["gray"],

    // Other
    zip:  colorMap["amber"],
    csv:  colorMap["teal"],
}

export const FILE_OPTIONS = [
  { label: 'Download', icon: 'ti-download', action: 'download', nodeType: 'both' },
  { label: 'Share', icon: 'ti-share', action: 'share', nodeType: 'file'},
  { label: 'Copy link', icon: 'ti-link', action: 'copy-link', nodeType: 'file' },
  { label: 'Move', icon: 'ti-folder-share', action: 'move', nodeType: 'both' },
  { label: 'Rename', icon: 'ti-pencil', action: 'rename', nodeType: 'both' },
  { label: 'Delete', icon: 'ti-trash', action: 'delete', danger: true, nodeType: 'both' },
]