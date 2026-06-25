import { useAuth } from '../hooks/useAuth'
import { useFileSystem } from '../hooks/useFileSystem'

import { colorMap } from './ui/FileSystem'

import NodeOptions from './NodeOptions'

const FolderCard = ({ node }) => {
  const { setDirectory } = useAuth()
  const { selectNode, setSelectNode } = useFileSystem()
  return (
    <div
      onClick={() => setDirectory(node.id)}
      className="relative max-w-60 min-h-39 bg-[#0f1623] border border-white/7 rounded-xl p-4 cursor-pointer hover:border-white/15 transition-colors flex flex-col justify-between"
    >
      {/* Options button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setSelectNode((prev) => (prev === node.id ? null : node.id))
        }}
        className={`absolute top-2.5 right-2.5 transition-colors p-1 rounded-md hover:bg-white/5
            ${open ? 'text-slate-300 bg-white/5' : 'text-slate-500 hover:text-slate-300'}`}
      >
        <i className="ti ti-dots-vertical text-sm" />
      </button>

      <i
        className={`ti ti-folder text-5xl ${colorMap[node.color].icon} block`}
      />

      <div>
        <p className="text-sm font-medium text-slate-200 truncate">
          {node.name}
        </p>
        <div className="flex items-center justify-between mt-1">
          <p className="text-xs text-slate-500">{node.count} items</p>
          <span
            className={`text-xs font-medium px-1.5 py-0.5 rounded-md ${colorMap[node.color].badge}`}
          >
            {node.color}
          </span>
        </div>
      </div>
      { selectNode === node.id && (
        <NodeOptions type={node.type} />
      )}
    </div>
  );
};

export default FolderCard;
