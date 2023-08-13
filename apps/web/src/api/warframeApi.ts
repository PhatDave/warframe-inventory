import type {APIResponse, Item, Part} from "$types";
import {
    API_ITEMS_DEFAULT_FILTER,
    API_ITEMS_URL,
    API_PARTS_DEFAULT_FILTER,
    API_PARTS_URL,
    API_WARFRAMES_FILTER,
    POST_OPTIONS
} from "../env";

export async function getWarframes(): Promise<Item[]> {
    const res = await fetch(`${API_ITEMS_URL}${API_ITEMS_DEFAULT_FILTER}${API_WARFRAMES_FILTER}`);
    const json: APIResponse = await res.json();
    return json.items as Item[];
}

export async function updateItem(warframe: Item): Promise<Item> {
    const res = await fetch(`${API_ITEMS_URL}/${warframe.id}`, {
        ...POST_OPTIONS,
        method: 'PATCH',
        body: JSON.stringify(warframe)
    });
    return await res.json() as Item;
}

export async function getParts(item: Item): Promise<Part[]> {
    const res = await fetch(`${API_PARTS_URL}${API_PARTS_DEFAULT_FILTER.replace('$ITEMID', item.id)}`);
    const json: APIResponse = await res.json();
    return json.items as Part[];
}

export async function updatePart(part: Part) {
    const res = await fetch(`${API_PARTS_URL}/${part.id}`, {
        ...POST_OPTIONS,
        method: 'PATCH',
        body: JSON.stringify(part)
    });
    return await res.json() as Part;
}
