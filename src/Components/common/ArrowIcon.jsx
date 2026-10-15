// Right arrow used on buttons in the design (24×24, 1.5px rounded stroke).
// Uses currentColor so it follows the button's text colour.
export default function ArrowIcon({ className = "", size = 24 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M17.25 15.75L21 12L17.25 8.25M21 12H3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
