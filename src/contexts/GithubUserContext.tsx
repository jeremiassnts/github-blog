import { ReactNode, createContext, useEffect, useState } from "react";

interface GithubUserContextData {

}
export const GithubUserContext = createContext({} as GithubUserContextData)
interface GithubUserProviderProps {
    children: ReactNode
}
export function GithubUserProvider({ children }: GithubUserProviderProps) {
    
    return (
        <GithubUserContext.Provider value={{}}>
            {children}
        </GithubUserContext.Provider>
    )
}