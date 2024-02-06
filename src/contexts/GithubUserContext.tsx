import { ReactNode, createContext, useEffect, useState } from "react";

interface GithubUserContextData {
    username: string
    repository: string
}
export const GithubUserContext = createContext({} as GithubUserContextData)
interface GithubUserProviderProps {
    children: ReactNode
}
export function GithubUserProvider({ children }: GithubUserProviderProps) {
    const username = 'jeremiassnts'
    const repository = 'github-blog'

    return (
        <GithubUserContext.Provider value={{
            username,
            repository
        }}>
            {children}
        </GithubUserContext.Provider>
    )
}