import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export const themes = ['dark', 'light'] as const;
export type Theme = (typeof themes)[number];

export type NavLink = {
  target: {
    href: string;
    newTab?: boolean;
  };
  content: {
    text?: string;
    icon?: IconDefinition;
  };
};

export type APIResponse = {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: Warframe[];
}

export type Warframe = {
  id: string;
  is_built: boolean;
  has_bp: boolean;
  has_chassis: boolean;
  has_neuroptics: boolean;
  has_systems: boolean;
  name: string;
}
