/**
 * IconButton.jsx
 * Accessible icon-only button with hover state.
 *
 * Props:
 *   icon      {string}    Tabler icon name (without "ti-")
 *   label     {string}    aria-label for screen readers
 *   onClick   {function=}
 *   className {string=}   Extra Tailwind classes
 *   title     {string=}   Tooltip text (defaults to label)
 */

import Icon from "./Icon.jsx";

export default function IconButton({ icon, label, onClick, className = "", title }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title ?? label}
      aria-label={label}
      className={`
        flex items-center justify-center
        rounded-md p-1.5 text-slate-400
        hover:bg-slate-700 hover:text-slate-200
        transition-colors duration-100
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
        ${className}
      `}
    >
      <Icon name={icon} className="text-base leading-none" />
    </button>
  );
}
