import { ArrowSquareOut, Buildings, GithubLogo, User } from "phosphor-react"
import { z } from "zod"
import { Avatar, HomeContainer, IconInfoContainer, IconInfoItem, UserBio, UserInfoCard, UserInfoHeader, UserInformations } from "./style"
import { defaultTheme } from "../../styles/themes/default"
import { useEffect, useState } from "react"
import { api } from "../../lib/axios"
import Skeleton from "react-loading-skeleton"

const githubUserSchema = z.object({
    login: z.string(),
    avatar_url: z.string(),
    company: z.string(),
    followers: z.number(),
    bio: z.string(),
    html_url: z.string(),
    name: z.string()
})
export function Home() {
    const username = 'diego3g'
    const [user, setUser] = useState({} as z.infer<typeof githubUserSchema>)
    const [loading, setLoading] = useState(true)

    async function getUserProfile() {
        const { data } = await api.get(`users/${username}`)
        setUser(data)
        setLoading(false)
    }
    useEffect(() => {
        getUserProfile()
    }, [])
    return (
        <HomeContainer>
            {loading && <Skeleton width="60vw" height={175} baseColor={defaultTheme.profile} highlightColor={defaultTheme.background} />}
            {!loading && <UserInfoCard>
                <Avatar src={user.avatar_url} />
                <UserInformations>
                    <UserInfoHeader>
                        <span>{user.name}</span>
                        <a target="_blank" href={user.html_url}>GITHUB <ArrowSquareOut size={15} /></a>
                    </UserInfoHeader>
                    <UserBio>{user.bio}</UserBio>
                    <IconInfoContainer>
                        <IconInfoItem>
                            <GithubLogo color={defaultTheme.label} weight="fill" size={20} />
                            <span>{user.login}</span>
                        </IconInfoItem>
                        <IconInfoItem>
                            <Buildings color={defaultTheme.label} weight="fill" size={20} />
                            <span>{user.company}</span>
                        </IconInfoItem>
                        <IconInfoItem>
                            <User color={defaultTheme.label} weight="fill" size={20} />
                            <span>{user.followers} seguidores</span>
                        </IconInfoItem>
                    </IconInfoContainer>
                </UserInformations>
            </UserInfoCard>}
        </HomeContainer>
    )
}