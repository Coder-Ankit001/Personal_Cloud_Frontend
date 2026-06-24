/**
 * Icon.jsx
 * Thin wrapper around Tabler icon webfont classes.
 * Handles aria-hidden automatically; pass aria-label only for icon-only buttons.
 *
 * Props:
 *   name        {string}  Tabler icon name without "ti-" prefix, e.g. "folder"
 *   className   {string}  Extra Tailwind classes (color, size, etc.)
 *   label       {string=} Accessible label for icon-only interactive use
 */

export default function Icon({ name, className = "", label }) {
  return (
    <i
      className={`ti ti-${name} ${className}`}
      aria-hidden={!label}
      aria-label={label}
      role={label ? "img" : undefined}
    />
  );
}
