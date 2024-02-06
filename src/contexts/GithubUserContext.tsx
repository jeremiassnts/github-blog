import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";
interface repositoryPost {
    id: number;
    title: string;
    body: string;
    created_at: string;
    number: number;
}
interface GithubUserContextData {
    username: string
    repository: string
    posts: repositoryPost[]
    loadPosts: (search: string) => Promise<void>
    loadingPosts: boolean
}
export const GithubUserContext = createContext({} as GithubUserContextData)
interface GithubUserProviderProps {
    children: ReactNode
}
export function GithubUserProvider({ children }: GithubUserProviderProps) {
    const username = 'rocketseat-education'
    const repository = 'reactjs-github-blog-challenge'
    const [posts, setPosts] = useState<repositoryPost[]>([])
    const [loadingPosts, setLoadingPosts] = useState(false)

    async function loadPosts(search: string) {
        search = search.replace(/ /g, '%20') + '%20'
        setLoadingPosts(true)
        let url = `https://api.github.com/search/issues?q=${search}repo:${username}/${repository}`
        const { data } = await api.get(url)
        setPosts(data.items)
        setLoadingPosts(false)
    }

    return (
        <GithubUserContext.Provider value={{
            username,
            repository,
            posts,
            loadPosts,
            loadingPosts
        }}>
            {children}
        </GithubUserContext.Provider>
    )
}