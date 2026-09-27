import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export default function BrandLogo({
  className = "h-16 w-auto",
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src="/nirvana-logo.png"
      alt="Nirvana Wellness Center"
      width={220}
      height={220}
      priority={priority}
      sizes="220px"
      className={`w-auto object-contain ${className}`}
    />
  );
}
