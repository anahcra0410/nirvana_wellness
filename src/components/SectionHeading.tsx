type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div
      className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? (
        <span className={`eyebrow ${centered ? "justify-center" : ""}`}>
          <span className="rule" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-forest-900 sm:text-5xl text-balance">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 text-base leading-relaxed text-muted">{subtitle}</p>
      ) : null}
    </div>
  );
}
