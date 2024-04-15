import { createContext, useState } from "react";

export const FiltersContext = createContext()

export function FiltersProvider({children}){
    const [filters, setFilters] = useState({
        categoria: 'all',
        minPrice: 12000
    })
    return(
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}