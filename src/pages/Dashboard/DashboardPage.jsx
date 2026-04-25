import useDashboard from "../../hooks/useDashboard"


export default function DashboardPage(){

    const data = useDashboard();

    return (
        <>
            <h1>
                {data ? JSON.stringify(data) : "Cargando..."}
            </h1>
        </>
    )
} 

