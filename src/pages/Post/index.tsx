import { ArrowSquareOut, Calendar, CaretLeft, ChatCircle, GithubLogo } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import { PostBody, PostContainer, PostHeader, PostIcon, PostTitle } from "./style";
import { GithubUserContext } from "../../contexts/GithubUserContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { api } from "../../lib/axios";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from 'date-fns/locale'
import Markdown from "react-markdown";
import gfm from 'remark-gfm'

interface PostUser {
    login: string
}
interface PostDetails {
    title: string
    user: PostUser
    created_at: string
    comments: number
    body: string
    html_url: string
}
export function Post() {
    const { username, repository } = useContext(GithubUserContext)
    const [post, setPost] = useState<PostDetails>({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const navigate = useNavigate()

    async function getAccessDetails() {
        const { data } = await api.get(`repos/${username}/${repository}/issues/${id}`)
        setPost(data)
        setLoading(false)
    }

    function handleGoBack() {
        navigate('/')
    }

    function handleGoToGithub() {
        window.open(post.html_url)
    }

    useEffect(() => {
        getAccessDetails()
    }, [])

    return (<PostContainer>
        {loading && <Skeleton width={"60vw"} style={{ marginBottom: '2rem' }} height={175} baseColor={defaultTheme.profile} highlightColor={defaultTheme.background} />}
        {loading && <Skeleton count={10} width={"60vw"} height={20} baseColor={defaultTheme.profile} highlightColor={defaultTheme.background} />}
        {!loading &&
            <PostHeader>
                <header>
                    <div onClick={handleGoBack}>
                        <CaretLeft size={15} weight="fill" color={defaultTheme.blue} />
                        <span>VOLTAR</span>
                    </div>
                    <div onClick={handleGoToGithub}>
                        <span>VER NO GITHUB</span>
                        <ArrowSquareOut size={15} weight="fill" color={defaultTheme.blue} />
                    </div>
                </header>
                <PostTitle>{post.title}</PostTitle>
                <footer>
                    <PostIcon>
                        <GithubLogo size={15} color={defaultTheme.span} weight="fill" />
                        <span>{post.user.login}</span>
                    </PostIcon>
                    <PostIcon>
                        <Calendar size={15} color={defaultTheme.span} weight="fill" />
                        <span>{formatDistanceToNow(new Date(post.created_at), {
                            addSuffix: true,
                            locale: ptBR
                        })}</span>
                    </PostIcon>
                    <PostIcon>
                        <ChatCircle size={15} color={defaultTheme.span} weight="fill" />
                        <span>{post.comments} comentários</span>
                    </PostIcon>
                </footer>
            </PostHeader>}
        {!loading &&
            <PostBody>
                <Markdown remarkPlugins={[gfm]}>{post.body}</Markdown>
            </PostBody>}
    </PostContainer>
    )
}