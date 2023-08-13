import type {Item, Part} from "$types";
import {writable} from "svelte/store";

export const partsStore = writable<Map<Item, Part[]>>(new Map<Item, Part[]>());
