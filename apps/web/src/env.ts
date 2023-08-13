export const DEFAULT_HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Accept-Encoding': 'gzip, deflate, br',
}
export const DEFAULT_OPTIONS = {
    method: 'GET',
    headers: DEFAULT_HEADERS,
}
export const POST_OPTIONS = {
    method: 'POST',
    headers: DEFAULT_HEADERS,
}

export const API_URL = "https://pocketbase-warframe-inventory.site.quack-lab.dev/api";
export const API_ITEMS_URL = `${API_URL}/collections/item/records`;
export const API_ITEMS_DEFAULT_FILTER = "?fields=id,name,built,type&sort=+name&perPage=1000";

export const API_WARFRAMES_FILTER = "&filter=(type='Warframe')";
export const API_WEAPONS_FILTER = "&filter=(type='Weapon')";

export const API_PARTS_URL = `${API_URL}/collections/part/records`;
export const API_PARTS_DEFAULT_FILTER = "?fields=id,name,item,owned&sort=+name&perPage=1000&filter=(item='$ITEMID')";
