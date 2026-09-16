"use client";

import Link from "next/link";
import { useId, useRef, useState, useTransition } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { siteConfig } from "@/config/site";
import type { Dictionary } from "@/app/[lang]/dictionaries/en";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import {
  submitProjectInquiry,
  type FieldErrors,
  type InquiryInput,
  type SubmitResult,
} from "./actions";

const MIN_PROBLEM_LENGTH = 20;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormDict = Dictionary["contact"]["form"];
type FormState = InquiryInput;

const emptyForm: FormState = {
  name: "",
  email: "",
  organization: "",
  country: "",
  need: "",
  problem: "",
  stage: "",
  budget: "",
  timeline: "",
  website: "",
};

type Status = "idle" | "submitting" | "success" | "error" | "not-configured";

const selectClass = cn(
  "flex h-11 w-full appearance-none rounded-lg border border-border bg-background px-4 pr-10 text-sm",
  "text-foreground",
  "transition-colors duration-150 hover:border-border-strong",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-elevated",
  "disabled:opacity-50 disabled:cursor-not-allowed",
);

const labelClass = "text-sm font-medium text-foreground";
const groupHeadingClass =
  "text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground";
const errorTextClass = "text-xs text-error";

function ChevronDown() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      fill="none"
      className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
    >
      <path
        d="m5 8 5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function clientValidate(values: FormState, dict: FormDict): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim()) errors.name = dict.errors.name;
  const email = values.email.trim();
  if (!email) errors.email = dict.errors.email;
  else if (!EMAIL_RE.test(email)) errors.email = dict.errors.email;
  if (!values.need) errors.need = dict.errors.need;
  const problem = values.problem.trim();
  if (!problem) errors.problem = dict.errors.problemRequired;
  else if (problem.length < MIN_PROBLEM_LENGTH)
    errors.problem = `${dict.errors.problemMinPrefix}${MIN_PROBLEM_LENGTH}${dict.errors.problemMinSuffix}`;
  return errors;
}

function buildMailtoFallback(values: FormState, dict: FormDict): string {
  const labelFor = (opts: { value: string; label: string }[], v: string) =>
    opts.find((o) => o.value === v)?.label ?? v;

  const lines = [
    `${dict.yourName}: ${values.name}`,
    `${dict.emailAddress}: ${values.email}`,
    values.organization ? `${dict.organization}: ${values.organization}` : null,
    values.country ? `${dict.country} ${values.country}` : null,
    `${dict.whatYouNeed} ${labelFor(dict.options.need, values.need)}`,
    values.stage ? `${dict.projectStage}: ${labelFor(dict.options.stage, values.stage)}` : null,
    values.budget ? `${dict.budget}: ${labelFor(dict.options.budget, values.budget)}` : null,
    values.timeline ? `${dict.timeline}: ${labelFor(dict.options.timeline, values.timeline)}` : null,
    "",
    `${dict.problemLabel}`,
    values.problem,
  ].filter(Boolean);

  const subject = `${dict.title} — ${values.name || "Sehass Digital"}`;
  const body = lines.join("\n");
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

export function ContactForm({ dict, lang }: { dict: FormDict; lang: Locale }) {
  const formId = useId();
  const [values, setValues] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [pending, startTransition] = useTransition();
  const feedbackRef = useRef<HTMLDivElement>(null);

  const submitting = pending || status === "submitting";

  function update<K extends keyof FormState>(key: K, v: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: v }));
    if (errors[key as keyof FieldErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key as keyof FieldErrors];
        return next;
      });
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const clientErrors = clientValidate(values, dict);
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      setStatus("error");
      queueMicrotask(() => feedbackRef.current?.focus());
      return;
    }
    setErrors({});
    setStatus("submitting");
    startTransition(async () => {
      const result: SubmitResult = await submitProjectInquiry(values);
      if (result.ok) {
        setStatus("success");
      } else if (result.code === "validation") {
        setErrors(result.errors);
        setStatus("error");
      } else if (result.code === "not-configured") {
        setStatus("not-configured");
      } else {
        setStatus("error");
      }
      queueMicrotask(() => feedbackRef.current?.focus());
    });
  }

  if (status === "success") {
    return (
      <SuccessState
        formId={formId}
        dict={dict}
        lang={lang}
        onReset={() => resetForm()}
      />
    );
  }

  function resetForm() {
    setValues(emptyForm);
    setErrors({});
    setStatus("idle");
  }

  return (
    <form
      id="project-form"
      aria-labelledby={`${formId}-title`}
      aria-describedby={`${formId}-desc`}
      onSubmit={handleSubmit}
      noValidate
      className="scroll-mt-24 rounded-3xl border border-border bg-surface-elevated p-6 md:p-8"
    >
      <div className="flex flex-col gap-2">
        <h2
          id={`${formId}-title`}
          className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
        >
          {dict.title}
        </h2>
        <p id={`${formId}-desc`} className="text-sm text-muted-foreground">
          {dict.description}
        </p>
      </div>

      <fieldset className="mt-8 flex flex-col gap-4" disabled={submitting}>
        <legend className={groupHeadingClass}>{dict.aboutYou}</legend>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor={`${formId}-name`} className={labelClass}>
              {dict.yourName} <span className="text-muted-foreground">{dict.required}</span>
            </label>
            <Input
              id={`${formId}-name`}
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={(e) => update("name", e.target.value)}
              required
              aria-required
              aria-invalid={Boolean(errors.name) || undefined}
              aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            />
            {errors.name ? (
              <p id={`${formId}-name-error`} className={errorTextClass}>
                {errors.name}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor={`${formId}-email`} className={labelClass}>
              {dict.emailAddress} <span className="text-muted-foreground">{dict.required}</span>
            </label>
            <Input
              id={`${formId}-email`}
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              required
              aria-required
              aria-invalid={Boolean(errors.email) || undefined}
              aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            />
            {errors.email ? (
              <p id={`${formId}-email-error`} className={errorTextClass}>
                {errors.email}
              </p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor={`${formId}-org`} className={labelClass}>
              {dict.organization}
            </label>
            <Input
              id={`${formId}-org`}
              name="organization"
              autoComplete="organization"
              value={values.organization ?? ""}
              onChange={(e) => update("organization", e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor={`${formId}-country`} className={labelClass}>
              {dict.country}
            </label>
            <Input
              id={`${formId}-country`}
              name="country"
              autoComplete="country-name"
              placeholder={dict.countryPlaceholder}
              value={values.country ?? ""}
              onChange={(e) => update("country", e.target.value)}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="mt-8 flex flex-col gap-4" disabled={submitting}>
        <legend className={groupHeadingClass}>{dict.aboutProject}</legend>

        <div className="flex flex-col gap-1.5">
          <label htmlFor={`${formId}-need`} className={labelClass}>
            {dict.whatYouNeed} <span className="text-muted-foreground">{dict.required}</span>
          </label>
          <div className="relative">
            <select
              id={`${formId}-need`}
              name="need"
              value={values.need}
              onChange={(e) => update("need", e.target.value)}
              required
              aria-required
              aria-invalid={Boolean(errors.need) || undefined}
              aria-describedby={errors.need ? `${formId}-need-error` : undefined}
              className={selectClass}
            >
              <option value="">{dict.whatYouNeedPlaceholder}</option>
              {dict.options.need.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            <ChevronDown />
          </div>
          {errors.need ? (
            <p id={`${formId}-need-error`} className={errorTextClass}>
              {errors.need}
            </p>
          ) : null}
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="flex flex-col gap-1.5">
            <label htmlFor={`${formId}-stage`} className={labelClass}>
              {dict.projectStage}
            </label>
            <div className="relative">
              <select
                id={`${formId}-stage`}
                name="stage"
                value={values.stage ?? ""}
                onChange={(e) => update("stage", e.target.value)}
                className={selectClass}
              >
                {dict.options.stage.map((o) => (
                  <option key={o.value || "empty-stage"} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <ChevronDown />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor={`${formId}-budget`} className={labelClass}>
              {dict.budget}
            </label>
            <div className="relative">
              <select
                id={`${formId}-budget`}
                name="budget"
                value={values.budget ?? ""}
                onChange={(e) => update("budget", e.target.value)}
                className={selectClass}
              >
                {dict.options.budget.map((o) => (
                  <option key={o.value || "empty-budget"} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <ChevronDown />
            </div>
            <p className="text-xs text-muted-foreground">{dict.budgetHint}</p>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor={`${formId}-timeline`} className={labelClass}>
              {dict.timeline}
            </label>
            <div className="relative">
              <select
                id={`${formId}-timeline`}
                name="timeline"
                value={values.timeline ?? ""}
                onChange={(e) => update("timeline", e.target.value)}
                className={selectClass}
              >
                {dict.options.timeline.map((o) => (
                  <option key={o.value || "empty-timeline"} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <ChevronDown />
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset className="mt-8 flex flex-col gap-4" disabled={submitting}>
        <legend className={groupHeadingClass}>{dict.theProblem}</legend>

        <div className="flex flex-col gap-1.5">
          <label htmlFor={`${formId}-problem`} className={labelClass}>
            {dict.problemLabel} <span className="text-muted-foreground">{dict.required}</span>
          </label>
          <Textarea
            id={`${formId}-problem`}
            name="problem"
            rows={5}
            placeholder={dict.problemPlaceholder}
            value={values.problem}
            onChange={(e) => update("problem", e.target.value)}
            required
            aria-required
            aria-invalid={Boolean(errors.problem) || undefined}
            aria-describedby={errors.problem ? `${formId}-problem-error` : undefined}
          />
          {errors.problem ? (
            <p id={`${formId}-problem-error`} className={errorTextClass}>
              {errors.problem}
            </p>
          ) : (
            <p className="text-xs text-muted-foreground">{dict.sensitiveNotice}</p>
          )}
        </div>
      </fieldset>

      {/* Honeypot — visually hidden from users, present for bots. */}
      <div aria-hidden className="absolute left-[-10000px] top-auto h-0 w-0 overflow-hidden">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website ?? ""}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <div
        ref={feedbackRef}
        tabIndex={-1}
        aria-live="polite"
        role="status"
        className="mt-6 outline-none"
      >
        {status === "error" && Object.keys(errors).length === 0 ? (
          <ErrorNotice dict={dict} />
        ) : null}
        {status === "not-configured" ? (
          <NotConfiguredNotice values={values} dict={dict} />
        ) : null}
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <Button
          type="submit"
          disabled={submitting}
          className="h-12 w-full text-base sm:w-auto"
        >
          {submitting ? dict.submitting : dict.submit}
        </Button>
        <p className="text-xs leading-relaxed text-muted-foreground">
          {dict.consent}
        </p>
      </div>
    </form>
  );
}

function ErrorNotice({ dict }: { dict: FormDict }) {
  const t = dict.errorNotice;
  return (
    <div className="rounded-2xl border border-border-strong bg-background p-5">
      <h3 className="font-display text-base font-semibold text-foreground">
        {t.title}
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        {t.bodyBefore}
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="underline underline-offset-2"
        >
          {siteConfig.contact.email}
        </a>
        {t.bodyMiddle}
        <a
          href={siteConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          {t.whatsappLink}
        </a>
        {t.bodyAfter}
      </p>
    </div>
  );
}

function NotConfiguredNotice({
  values,
  dict,
}: {
  values: FormState;
  dict: FormDict;
}) {
  const mailto = buildMailtoFallback(values, dict);
  const t = dict.notConfigured;
  return (
    <div className="rounded-2xl border border-border-strong bg-background p-5">
      <h3 className="font-display text-base font-semibold text-foreground">
        {t.title}
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        {t.body}
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <a
          href={mailto}
          className="inline-flex h-11 items-center justify-center rounded-lg bg-brand px-5 text-sm font-medium text-brand-foreground hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {t.openEmail}
        </a>
        <a
          href={siteConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center rounded-lg border border-border-strong px-5 text-sm font-medium text-foreground hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {t.whatsappInstead}
        </a>
      </div>
    </div>
  );
}

function SuccessState({
  formId,
  onReset,
  dict,
  lang,
}: {
  formId: string;
  onReset: () => void;
  dict: FormDict;
  lang: Locale;
}) {
  const t = dict.success;
  return (
    <div
      id="project-form"
      role="status"
      aria-live="polite"
      aria-labelledby={`${formId}-success-title`}
      className="scroll-mt-24 rounded-3xl border border-border bg-surface-elevated p-6 md:p-8"
    >
      <div
        aria-hidden
        className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-on-brand"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
          <path
            d="m5 12 5 5 10-11"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h2
        id={`${formId}-success-title`}
        className="mt-5 font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
      >
        {t.title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
        {t.body}
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href={`/${lang}`}
          className="inline-flex h-11 items-center justify-center rounded-lg bg-brand px-5 text-sm font-medium text-brand-foreground hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {t.backHome}
        </Link>
        <Link
          href={`/${lang}/projects`}
          className="inline-flex h-11 items-center justify-center rounded-lg border border-border-strong px-5 text-sm font-medium text-foreground hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {t.exploreWork}
        </Link>
      </div>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
      >
        {t.sendAnother}
      </button>
    </div>
  );
}
