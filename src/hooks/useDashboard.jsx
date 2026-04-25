import { useEffect, useState } from "react";
import { getDashboardData } from "../services/dashboard.api";


export default function useDashboard(){

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function loadData(){
            try{
                const res = await getDashboardData();
                setData(res);
            } catch(error){
                console.log('Error on loading data' + error);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, [])

    return data ;
}
