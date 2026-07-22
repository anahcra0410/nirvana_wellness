type LotusProps = {
  className?: string;
};

export default function Lotus({ className }: LotusProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M32 54c-9 0-19-5-22-12 4-2 9-2 13 0-3-5-3-11-1-16 4 3 7 7 8 12 1-6 1-13 2-19 1 6 1 13 2 19 1-5 4-9 8-12 2 5 2 11-1 16 4-2 9-2 13 0-3 7-13 12-22 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.12"
      />
    </svg>
  );
}
