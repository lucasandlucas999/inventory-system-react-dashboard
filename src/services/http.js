import ENV from "../config/env";

export async function httpGet(path){
    const res = await fetch(`${ENV.API_URL}${path}`);
    if(!res.ok) throw new Error('HTTP Error');
    return res.json();
}