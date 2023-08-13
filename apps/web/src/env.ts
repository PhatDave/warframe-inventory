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
export const API_WARFRAMES_URL = `${API_URL}/collections/warframes/records`;
export const API_WARFRAMES_DEFAULT_FIELDS = "?fields=id,name,has_bp,has_chassis,has_neuroptics,has_systems,is_built&sort=+name";
