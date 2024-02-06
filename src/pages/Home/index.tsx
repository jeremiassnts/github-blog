import { z } from "zod"
import { HomeContainer, PostsContainer, PostsSkeletonContainer } from "./style"
import { defaultTheme } from "../../styles/themes/default"
import { useContext, useEffect, useState } from "react"
import { api } from "../../lib/axios"
import Skeleton from "react-loading-skeleton"
import { UserInfo } from "./components/UserInfoCard"
import { RepositoryPost } from "./components/RepositoryPost"
import { GithubUserContext } from "../../contexts/GithubUserContext"
import { SearchBar } from "./components/SearchBar"

export const githubUserSchema = z.object({
    login: z.string(),
    avatar_url: z.string(),
    company: z.string(),
    followers: z.number(),
    bio: z.string(),
    html_url: z.string(),
    name: z.string()
})
export function Home() {
    const [user, setUser] = useState({} as z.infer<typeof githubUserSchema>)
    const [loadingUserInfo, setLoadingUserInfo] = useState(true)
    const { username, loadPosts, posts, loadingPosts } = useContext(GithubUserContext)

    async function getUserProfile() {
        const { data } = await api.get(`users/${username}`)
        setUser(data)
        setLoadingUserInfo(false)
    }

    function getRepositoryPosts() {
        loadPosts('')
    }
    useEffect(() => {
        getUserProfile()
        getRepositoryPosts()
    }, [])
    return (
        <HomeContainer>
            {loadingUserInfo && <Skeleton width="60vw" height={175} baseColor={defaultTheme.profile} highlightColor={defaultTheme.background} />}
            {!loadingUserInfo && <UserInfo user={user} />}
            {loadingPosts && <Skeleton width="60vw" height={40} baseColor={defaultTheme.profile} highlightColor={defaultTheme.background} />}
            {!loadingPosts && <SearchBar />}
            {loadingPosts && <PostsSkeletonContainer>
                <Skeleton borderRadius={defaultTheme["border-radius"]} height={200} baseColor={defaultTheme.profile} highlightColor={defaultTheme.background} />
                <Skeleton borderRadius={defaultTheme["border-radius"]} height={200} baseColor={defaultTheme.profile} highlightColor={defaultTheme.background} />
                <Skeleton borderRadius={defaultTheme["border-radius"]} height={200} baseColor={defaultTheme.profile} highlightColor={defaultTheme.background} />
                <Skeleton borderRadius={defaultTheme["border-radius"]} height={200} baseColor={defaultTheme.profile} highlightColor={defaultTheme.background} />
            </PostsSkeletonContainer>}
            {!loadingPosts && <PostsContainer>
                {posts.map(post => <RepositoryPost number={post.number} key={post.id} title={post.title} content={post.body} date={post.created_at} />)}
            </PostsContainer>}
        </HomeContainer>
    )
}