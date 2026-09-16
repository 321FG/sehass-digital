import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import type { CrossIndustryRow } from "@/data/industries";
import { getDictionary } from "@/app/[lang]/dictionaries";
import type { Dictionary } from "@/app/[lang]/dictionaries";

export async function CrossIndustrySection({
  rows,
}: {
  rows: CrossIndustryRow[];
}) {
  const dict = await getDictionary();
  const c = dict.industries.cross;
  return (
    <Section tone="default" spacing="lg" aria-labelledby="cross-industry">
      <Container size="lg">
        <div className="mb-12 flex max-w-3xl flex-col gap-5">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {c.eyebrow}
          </span>
          <h2
            id="cross-industry"
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            {c.heading}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {c.body}
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border">
          <div className="hidden grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_minmax(0,1fr)] gap-px bg-border md:grid">
            <div className="bg-surface p-5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {c.capability}
            </div>
            <div className="bg-surface p-5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {c.problem}
            </div>
            <div className="bg-surface p-5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {c.example}
            </div>
          </div>

          <ul className="grid grid-cols-1 gap-px bg-border md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_minmax(0,1fr)]">
            {rows.map((row) => (
              <RowItem key={row.capability} row={row} dict={dict} />
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

function RowItem({ row, dict }: { row: CrossIndustryRow; dict: Dictionary }) {
  const c = dict.industries.cross;
  return (
    <>
      <li className="flex flex-col justify-center bg-background p-5">
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground md:hidden">
          {c.capability}
        </span>
        <span className="font-display text-base font-semibold text-foreground md:text-lg">
          {row.capability}
        </span>
      </li>
      <li className="flex flex-col justify-center bg-background p-5">
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground md:hidden">
          {c.problem}
        </span>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          {row.problem}
        </p>
      </li>
      <li className="flex flex-col justify-center bg-background p-5">
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground md:hidden">
          {c.example}
        </span>
        <span className="text-sm text-foreground/80 md:text-base">
          {row.example}
        </span>
      </li>
    </>
  );
}
