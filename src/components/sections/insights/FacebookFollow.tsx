"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/app/[lang]/dictionaries/en";

const FACEBOOK_PAGE_URL =
  "https://www.facebook.com/p/Sehass-Digital-61565405784724/";
const FACEBOOK_PLUGIN_HREF = "https://www.facebook.com/61565405784724";
const SDK_SCRIPT_ID = "facebook-jssdk";
const SDK_SRC =
  "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0";
const EMBED_TIMEOUT_MS = 5000;

type EmbedStatus = "loading" | "ready" | "failed";
type FacebookDict = Dictionary["insights"]["facebook"];

declare global {
  interface Window {
    FB?: { XFBML?: { parse: (element?: HTMLElement) => void } };
  }
}

const primaryCta = cn(
  "inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-brand px-5 text-sm font-medium text-brand-foreground",
  "shadow-(--shadow-sm) transition-colors duration-150",
  "hover:bg-brand-hover active:translate-y-px",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
);

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("h-5 w-5", className)}
    >
      <path d="M13.5 21.5v-8h2.7l.4-3.1h-3.1V8.4c0-.9.3-1.5 1.6-1.5h1.6V4.1c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.5H8v3.1h2.6v8h2.9Z" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M6 14 14 6m0 0H7.5M14 6v6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FollowCard({ dict }: { dict: FacebookDict }) {
  const t = dict.followCard;
  return (
    <div className="flex h-full flex-col gap-6 rounded-3xl border border-border bg-surface-elevated p-6 md:p-8">
      <div className="flex items-center gap-4">
        <span
          aria-hidden
          className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-brand ring-1 ring-black/5"
        >
          <Image
            src="/brand/Sehass Digital.jpeg"
            alt=""
            fill
            sizes="48px"
            className="object-cover"
          />
        </span>
        <span
          aria-hidden
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface text-foreground"
        >
          <FacebookIcon />
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          {t.officialPage}
        </span>
        <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {t.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          {t.body}
        </p>
      </div>

      <div className="mt-auto">
        <a
          href={FACEBOOK_PAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={primaryCta}
        >
          {t.cta}
          <ArrowUpRight />
        </a>
      </div>
    </div>
  );
}

function EmbedSkeleton({ dict }: { dict: FacebookDict }) {
  return (
    <div
      role="status"
      aria-label={dict.loadingAriaLabel}
      className="flex h-full min-h-105 flex-col gap-4 rounded-3xl border border-border bg-surface-elevated p-6 md:p-8"
    >
      <div className="flex items-center gap-3">
        <span className="h-10 w-10 animate-pulse rounded-full bg-border" />
        <div className="flex flex-1 flex-col gap-2">
          <span className="h-3 w-40 animate-pulse rounded bg-border" />
          <span className="h-2.5 w-24 animate-pulse rounded bg-border" />
        </div>
      </div>
      <span className="h-3 w-full animate-pulse rounded bg-border" />
      <span className="h-3 w-5/6 animate-pulse rounded bg-border" />
      <span className="h-3 w-2/3 animate-pulse rounded bg-border" />
      <span className="mt-auto text-xs text-muted-foreground">
        {dict.loadingText}
      </span>
    </div>
  );
}

function EmbedFailedNotice({ dict }: { dict: FacebookDict }) {
  return (
    <div className="flex h-full min-h-105 flex-col justify-center gap-4 rounded-3xl border border-dashed border-border bg-surface p-6 text-center md:p-8">
      <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
        {dict.unavailableBadge}
      </span>
      <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
        {dict.unavailableBody}
      </p>
      <a
        href={FACEBOOK_PAGE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
      >
        {dict.unavailableCta}
        <ArrowUpRight />
      </a>
    </div>
  );
}

function FacebookEmbed({ dict }: { dict: FacebookDict }) {
  const [status, setStatus] = useState<EmbedStatus>("loading");
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cancelled = false;

    const parseWhenReady = () => {
      if (cancelled) return;
      try {
        window.FB?.XFBML?.parse(containerRef.current ?? undefined);
      } catch {
        /* fall through to timeout-based failure detection */
      }
    };

    const existing = document.getElementById(SDK_SCRIPT_ID) as
      | HTMLScriptElement
      | null;
    if (!existing) {
      const script = document.createElement("script");
      script.id = SDK_SCRIPT_ID;
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.src = SDK_SRC;
      script.onload = parseWhenReady;
      script.onerror = () => {
        if (!cancelled) setStatus("failed");
      };
      document.body.appendChild(script);
    } else if (window.FB) {
      parseWhenReady();
    } else {
      existing.addEventListener("load", parseWhenReady, { once: true });
    }

    const timeoutId = window.setTimeout(() => {
      if (cancelled) return;
      const el = containerRef.current;
      const iframe = el?.querySelector("iframe");
      const hasContent = iframe && iframe.clientHeight > 40;
      setStatus(hasContent ? "ready" : "failed");
    }, EMBED_TIMEOUT_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className={cn(
        "relative h-full min-h-105 w-full",
        status === "failed" ? "hidden" : "block",
      )}
      aria-label={dict.embedAriaLabel}
    >
      {status === "loading" ? (
        <div className="absolute inset-0">
          <EmbedSkeleton dict={dict} />
        </div>
      ) : null}

      <div
        ref={containerRef}
        className={cn(
          "relative h-full w-full overflow-hidden rounded-3xl border border-border bg-surface-elevated",
          status === "ready" ? "opacity-100" : "opacity-0",
          "transition-opacity duration-300",
        )}
      >
        <div
          className="fb-page"
          data-href={FACEBOOK_PLUGIN_HREF}
          data-tabs="timeline"
          data-width="500"
          data-height="600"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite={FACEBOOK_PAGE_URL}
            className="fb-xfbml-parse-ignore"
          >
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Sehass Digital
            </a>
          </blockquote>
        </div>
      </div>

      {status === "failed" ? <EmbedFailedNotice dict={dict} /> : null}
    </div>
  );
}

export function FacebookFollow({ dict }: { dict: FacebookDict }) {
  return (
    <Section
      tone="surface"
      spacing="lg"
      aria-labelledby="facebook-follow"
      id="facebook"
    >
      <Container size="lg">
        <div className="mb-12 flex max-w-3xl flex-col gap-5">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {dict.eyebrow}
          </span>
          <h2
            id="facebook-follow"
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            {dict.heading}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {dict.subheading}
          </p>
        </div>

        <div
          id="fb-root"
          aria-hidden
          className="pointer-events-none absolute -z-10 h-0 w-0 overflow-hidden"
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-8">
          <FollowCard dict={dict} />
          <FacebookEmbed dict={dict} />
        </div>
      </Container>
    </Section>
  );
}
