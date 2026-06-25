import { useState, useRef, useEffect } from "react"

import { CREATE_OPTIONS } from "./ui/FileSystem";
import { createPortal } from 'react-dom'

const CreateOptions = ({ onAction, onClose, anchorRef }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (anchorRef?.current) {
      const rect = anchorRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const dropdownHeight = 96;

      const top = spaceBelow < dropdownHeight
        ? rect.top - dropdownHeight - 8
        : rect.bottom + 8;

      setPos({ top, left: rect.right - 176 });
    }
  }, [anchorRef]);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  return createPortal(
    <div
      ref={ref}
      style={{ top: pos.top, left: pos.left }}
      className="fixed z-50 w-44 bg-[#161e2e] border border-white/10 rounded-xl shadow-xl py-1"
    >
      {CREATE_OPTIONS.map((opt) => (
        <button
          key={opt.action}
          onClick={(e) => { e.stopPropagation(); onAction(opt.action); onClose(); }}
          className="flex items-center gap-2.5 w-full px-3.5 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5"
        >
          <i className={`ti ${opt.icon} text-base`} />
          {opt.label}
        </button>
      ))}
    </div>,
    document.body
  );
};
export default CreateOptions
