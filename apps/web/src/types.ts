import type {IconDefinition} from '@fortawesome/fontawesome-svg-core';

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
    items: Item[] | Part[];
}

export type Item = {
    id: string;
    name: string;
    built: boolean;
}

export type Part = {
    id: string;
    name: string;
    item: string;
    owned: boolean;
}
