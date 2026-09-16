import { siteConfig } from "@/config/site";
import { getDictionary } from "@/app/[lang]/dictionaries";

const cardClass =
  "rounded-3xl border border-border bg-surface-elevated p-6 md:p-8";
const labelClass = "text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground";

function MailIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 text-muted-foreground"
    >
      <path
        d="M4 6h16v12H4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 text-muted-foreground"
    >
      <path
        d="M12 3a9 9 0 0 0-7.7 13.7L3 21l4.5-1.2A9 9 0 1 0 12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.5c.2 1.2.7 2.4 1.6 3.4.9 1 2 1.7 3.2 2 .5.1 1 0 1.3-.3l.6-.6c.2-.2.2-.5 0-.7l-1.1-1.1a.5.5 0 0 0-.7 0l-.4.4a5 5 0 0 1-2.5-2.5l.4-.4a.5.5 0 0 0 0-.7L10.3 6.9a.5.5 0 0 0-.7 0l-.6.6c-.3.3-.4.8-.3 1.3Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group -mx-2 flex items-start gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-elevated"
    >
      <span
        aria-hidden
        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background"
      >
        {icon}
      </span>
      <span className="flex flex-col">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="text-sm font-medium text-foreground group-hover:underline underline-offset-2">
          {value}
        </span>
      </span>
    </a>
  );
}

export async function ContactInfo() {
  const dict = await getDictionary();
  const t = dict.contact.info;
  const whatsappHref = `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(
    siteConfig.contact.whatsappPrefill,
  )}`;

  return (
    <div className="flex flex-col gap-6">
      <div className={cardClass}>
        <h2 className={labelClass}>{t.talkToUs}</h2>
        <div className="mt-4 flex flex-col gap-2">
          <ContactRow
            icon={<MailIcon />}
            label={t.generalInquiries}
            value={siteConfig.contact.email}
            href={`mailto:${siteConfig.contact.email}`}
          />
          <ContactRow
            icon={<MailIcon />}
            label={t.directContact}
            value={siteConfig.contact.directEmail}
            href={`mailto:${siteConfig.contact.directEmail}`}
          />
          <ContactRow
            icon={<WhatsAppIcon />}
            label={t.whatsAppLabel}
            value={siteConfig.contact.whatsapp}
            href={whatsappHref}
            external
          />
        </div>
      </div>

      <div className={cardClass}>
        <h2 className={labelClass}>{t.whatHappensNext}</h2>
        <ol className="mt-4 flex flex-col gap-5">
          {t.steps.map((step) => (
            <li key={step.number} className="flex items-start gap-4">
              <span
                aria-hidden
                className="font-display text-sm font-semibold text-muted-foreground"
              >
                {step.number}
              </span>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-foreground">
                  {step.title}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.summary}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
