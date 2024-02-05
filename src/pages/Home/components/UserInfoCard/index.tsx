import { ArrowSquareOut, Buildings, GithubLogo, User } from "phosphor-react";
import { Avatar, IconInfoContainer, IconInfoItem, UserBio, UserInfoCard, UserInfoHeader, UserInformations } from "./style";
import { z } from "zod";
import { githubUserSchema } from "../..";
import { defaultTheme } from "../../../../styles/themes/default";

interface userInfoProps {
    user: z.infer<typeof githubUserSchema>
}
export function UserInfo({ user }: userInfoProps) {
    return (
        <UserInfoCard>
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
        </UserInfoCard>
    )
}