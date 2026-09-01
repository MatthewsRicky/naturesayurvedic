interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  copy?: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  copy,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <div className="text-xs font-bold uppercase tracking-[0.16em] text-leaf">
        {eyebrow}
      </div>

      <h2 className="mt-3 font-display text-4xl leading-none tracking-tight sm:text-5xl">
        {title}
      </h2>

      {copy && (
        <p className="mt-5 text-base leading-7 text-muted sm:text-lg">{copy}</p>
      )}
    </div>
  );
}
