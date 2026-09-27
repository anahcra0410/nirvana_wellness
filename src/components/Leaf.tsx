type LeafProps = {
  className?: string;
};

export default function Leaf({ className }: LeafProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M40 8C20 8 8 20 8 40c20 0 32-12 32-32Z"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 36C20 28 28 20 36 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M20 32c1.5-4 3-6 7-8M28 30c1-3 2.5-4.5 5.5-6M16 28c1.2-3.4 2.6-5 6-6.6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}
