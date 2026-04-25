import { httpGet } from "./http";

export async function getDashboardData(){
    return httpGet('/dashboard')
}