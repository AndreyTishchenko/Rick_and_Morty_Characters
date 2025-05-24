export const ArrowIcon = ({ rotated }) => (
  <svg
    width="10"
    height="7"
    viewBox="0 0 10 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: rotated ? 'rotate(180deg)' : 'none',
      transition: 'transform 0.2s ease'
    }}
  >
    <path
      d="M1 1.48425L5 5.48425L9 1.48425"
      stroke="#B2B2B2"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
