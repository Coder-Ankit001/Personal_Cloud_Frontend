import { FILE_OPTIONS } from "./ui/FileSystem";

const NodeOptions = ({ type }) => {

  return (
    <div className={`absolute bottom-12 ${type === 'folder'} ?  bg-slate-900/80 right-3 z-50 w-44 border border-white/10 rounded-xl shadow-xl`}>
    {FILE_OPTIONS
        .filter((opt) => opt.nodeType === 'both' || opt.nodeType === type)
        .map((opt) => (
        <div
            key={opt.action}
            className={`flex items-center gap-2.5 w-full px-3.5 py-2 text-sm transition-colors hover:bg-white/5
            ${opt.danger ? 'text-rose-400' : 'text-slate-300'}`}
        >
            <i className={`ti ${opt.icon} text-base`} />
            {opt.label}
        </div>
        ))
    }
    </div>
  );
};

export default NodeOptions;
