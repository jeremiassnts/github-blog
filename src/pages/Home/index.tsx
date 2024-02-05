import { z } from "zod"
import { HomeContainer, PostsContainer, PostsSkeletonContainer } from "./style"
import { defaultTheme } from "../../styles/themes/default"
import { useEffect, useState } from "react"
import { api } from "../../lib/axios"
import Skeleton from "react-loading-skeleton"
import { UserInfo } from "./components/UserInfoCard"
import { RepositoryPost } from "./components/RepositoryPost"

export const githubUserSchema = z.object({
    login: z.string(),
    avatar_url: z.string(),
    company: z.string(),
    followers: z.number(),
    bio: z.string(),
    html_url: z.string(),
    name: z.string()
})

// export const repositoryPostSchema = z.object({
//     title: z.string(),
//     body: z.string(),
//     created_at: z.string()
// })
interface repositoryPost {
    id: number;
    title: string;
    body: string;
    created_at: string;
}
export function Home() {
    const username = 'jeremiassnts'
    const repo = 'github-blog'
    const [user, setUser] = useState({} as z.infer<typeof githubUserSchema>)
    const [posts, setPosts] = useState<repositoryPost[]>([])
    const [loadingUserInfo, setLoadingUserInfo] = useState(true)
    const [loadingPosts, setLoadingPosts] = useState(true)

    async function getUserProfile() {
        const { data } = await api.get(`users/${username}`)
        setUser(data)
        setLoadingUserInfo(false)
    }

    async function getRepositoryPosts() {
        let search = ''
        let url = `https://api.github.com/search/issues?q=${search}repo:${username}/${repo}`
        const { data } = await api.get(url)
        setPosts(data.items)
        setLoadingPosts(false)
    }
    useEffect(() => {
        getUserProfile()
        getRepositoryPosts()
    }, [])
    return (
        <HomeContainer>
            {loadingUserInfo && <Skeleton width="60vw" height={175} baseColor={defaultTheme.profile} highlightColor={defaultTheme.background} />}
            {loadingPosts && <PostsSkeletonContainer>
                <Skeleton borderRadius={defaultTheme["border-radius"]} height={200} baseColor={defaultTheme.profile} highlightColor={defaultTheme.background} />
                <Skeleton borderRadius={defaultTheme["border-radius"]} height={200} baseColor={defaultTheme.profile} highlightColor={defaultTheme.background} />
                <Skeleton borderRadius={defaultTheme["border-radius"]} height={200} baseColor={defaultTheme.profile} highlightColor={defaultTheme.background} />
                <Skeleton borderRadius={defaultTheme["border-radius"]} height={200} baseColor={defaultTheme.profile} highlightColor={defaultTheme.background} />
            </PostsSkeletonContainer>}
            {!loadingUserInfo && <UserInfo user={user} />}
            {!loadingPosts && <PostsContainer>
                {posts.map(post => <RepositoryPost key={post.id} title={post.title} content={post.body} date={post.created_at} />)}
            </PostsContainer>}
        </HomeContainer>
    )
}