type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  featured?: boolean;
  children: React.ReactNode;
};

export function Section({ id, eyebrow, title, intro, featured = false, children }: SectionProps) {
  return (
    <section
      className={featured ? "section-shell section-featured" : "section-shell"}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <div className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={`${id}-title`}>{title}</h2>
        {intro ? <p>{intro}</p> : null}
      </div>
      {children}
    </section>
  );
}
