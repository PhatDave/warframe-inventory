import type {APIResponse, Warframe} from "$types";
import {API_WARFRAMES_DEFAULT_FIELDS, API_WARFRAMES_URL, POST_OPTIONS} from "../env";

export async function getWarframes(): Promise<Warframe[]> {
    const res = await fetch(`${API_WARFRAMES_URL}${API_WARFRAMES_DEFAULT_FIELDS}`);
    const json: APIResponse = await res.json();
    return json.items;
}

export async function updateWarframe(warframe: Warframe): Promise<Warframe> {
    const res = await fetch(`${API_WARFRAMES_URL}/${warframe.id}`, {
        ...POST_OPTIONS,
        method: 'PATCH',
        body: JSON.stringify(warframe)
    });
    return await res.json();
}
