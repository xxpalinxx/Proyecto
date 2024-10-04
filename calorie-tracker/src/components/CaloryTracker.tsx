import { useMemo } from "react"
import { Activity } from "../types"
import CalorieDisplay from "./CalorieDisplay"

type CaloryTrackerProps ={
    activities: Activity[]
}

export default function CaloryTracker({activities} : CaloryTrackerProps) {
    //contadores
    const caloriesConsumed = useMemo(()=> activities.reduce((total,act) => act.category === 1 ? total + act.calories : total, 0) ,[activities])
    const caloriesBurned = useMemo(()=> activities.reduce((total,act) => act.category === 2 ? total + act.calories : total, 0) ,[activities])
    const netCalories = useMemo(()=> caloriesConsumed - caloriesBurned, [activities])

    return (
        <>
            <h2 className="text-4xl font-black text-white text-center">Resumen de Calorias</h2>
            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
                <CalorieDisplay 
                    calories={caloriesConsumed}
                    text='Consumidas'
                />

                <CalorieDisplay 
                    calories={caloriesBurned}
                    text='Quemadas'
                />

                <CalorieDisplay 
                    calories={netCalories}
                    text='Total'
                />
            </div>
        </>
    )
}
