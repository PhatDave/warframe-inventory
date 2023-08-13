import {writable} from "svelte/store";

// Sadly I don't know how to do this better
export const initializedStoresState = writable<Map<string, boolean>>(new Map<string, boolean>());
