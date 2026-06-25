import { useFileSystem } from '../hooks/useFileSystem'

import { extensionMap } from './ui/FileSystem'

import NodeOptions from './NodeOptions'

const FileCard = ({ node }) => {
  const {selectNode, setSelectNode} = useFileSystem()
  return (
    <div 
      className="relative max-w-60 border border-white/7 rounded-xl cursor-pointer hover:border-white/15 transition-colors"
    >
      {/* Preview / Icon area */}
      <div className="flex items-center justify-center h-24 bg-white/3 border-b border-white/7">
        <i className={`ti text-4xl ${extensionMap[node.ext]?.icon} ${extensionMap[node.ext]?.color}`} />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between gap-2 px-4 py-3">
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-200 truncate">{node.name}</p>
          <p className={`text-xs mt-0.5 uppercase ${extensionMap[node.ext]?.color}`}>{node.ext}</p>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); setSelectNode(prev => prev === node.id ? null : node.id) }}
          className={`shrink-0 transition-colors p-1 rounded-md hover:bg-white/5
            ${open ? "text-slate-300 bg-white/5" : "text-slate-500 hover:text-slate-300"}`}
        >
          <i className="ti ti-dots-vertical text-base" />
        </button>
      </div>

      {selectNode === node.id && <NodeOptions type={node.type} />}
    </div>
  )
}

export default FileCard
