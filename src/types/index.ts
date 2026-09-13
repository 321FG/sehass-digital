import type { ReactNode } from "react";

export type WithChildren<T = unknown> = T & { children?: ReactNode };

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  image?: string;
  href?: string;
};

export type Solution = {
  slug: string;
  title: string;
  summary: string;
  icon?: ReactNode;
  href?: string;
};

export type Industry = {
  slug: string;
  title: string;
  summary: string;
  icon?: ReactNode;
  href?: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type CartItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};
