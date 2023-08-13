import type {Item} from "$types";
import { writable } from "svelte/store";
import {getItems} from "../../api/warframeApi";

function createItemStore() {
    const items: Item[] = [];
    let isInitialized = false;
    const {set, subscribe, update} = writable<Item[]>(items);

    return {
        subscribe,
        update,
        set,
        init: async () => {
            if (isInitialized) return;
            isInitialized = true;
            const items = await getItems();
            set(items);
        }
    };
};

export const itemsStore = createItemStore();
