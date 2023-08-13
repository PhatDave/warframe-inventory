import type { Item } from "$types";

import { writable } from "svelte/store";

export const itemsStore = writable<Item[]>([]);
