import { Buildings, GithubLogo, User } from "phosphor-react"
import { z } from "zod"
import { Avatar, HomeContainer, IconInfoContainer, IconInfoItem, UserBio, UserInfoCard, UserInfoHeader, UserInformations } from "./style"

const githubUserSchema = z.object({
    login: z.string(),
    avatar_url: z.string(),
    company: z.string(),
    followers: z.number(),
    bio: z.string(),
    html_url: z.string(),
    name: z.string()
})
const githubUser = githubUserSchema.parse({
    "login": "jeremiassnts",
    "id": 16737889,
    "node_id": "MDQ6VXNlcjE2NzM3ODg5",
    "avatar_url": "https://avatars.githubusercontent.com/u/16737889?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jeremiassnts",
    "html_url": "https://github.com/jeremiassnts",
    "followers_url": "https://api.github.com/users/jeremiassnts/followers",
    "following_url": "https://api.github.com/users/jeremiassnts/following{/other_user}",
    "gists_url": "https://api.github.com/users/jeremiassnts/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jeremiassnts/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jeremiassnts/subscriptions",
    "organizations_url": "https://api.github.com/users/jeremiassnts/orgs",
    "repos_url": "https://api.github.com/users/jeremiassnts/repos",
    "events_url": "https://api.github.com/users/jeremiassnts/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jeremiassnts/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Jeremias Santos",
    "company": "Rocketseat",
    "blog": "",
    "location": "Aracaju, SE, Brasil",
    "email": null,
    "hireable": null,
    "bio": "Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.",
    "twitter_username": null,
    "public_repos": 40,
    "public_gists": 0,
    "followers": 4,
    "following": 4,
    "created_at": "2016-01-16T21:51:12Z",
    "updated_at": "2024-02-04T02:56:31Z"
})

export function Home() {
    const { avatar_url, login, company, followers, bio, html_url, name } = githubUser
    return (
        <HomeContainer>
            <UserInfoCard>
                <Avatar src={avatar_url} />
                <UserInformations>
                    <UserInfoHeader>
                        <span>{name}</span>
                        <a href={html_url}></a>
                    </UserInfoHeader>
                    <UserBio>{bio}</UserBio>
                    <IconInfoContainer>
                        <IconInfoItem>
                            <GithubLogo weight="fill" size={20} />
                            <span>{login}</span>
                        </IconInfoItem>
                        <IconInfoItem>
                            <Buildings weight="fill" size={20} />
                            <span>{company}</span>
                        </IconInfoItem>
                        <IconInfoItem>
                            <User weight="fill" size={20} />
                            <span>{followers} seguidores</span>
                        </IconInfoItem>
                    </IconInfoContainer>
                </UserInformations>
            </UserInfoCard>
        </HomeContainer>
    )
}