import { RepositoryPostContainer, RepositoryPostDate, RepositoryPostTitle } from "./style"
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Markdown from "react-markdown"
import { useNavigate } from "react-router-dom"

interface RepositoryPostProps {
    number: number
    title: string
    date: string
    content: string
}
export function RepositoryPost({ number, title, date, content }: RepositoryPostProps) {
    const limit = 300
    content = content ?? ''
    const showingContent = `${(content.length > limit ? content.slice(0, limit) : content)}${(content.length > limit ? '...' : '')}`
    const navigate = useNavigate()

    function handleAccessPostDetails() {
        navigate(`post/${number}`)
    }

    return (
        <RepositoryPostContainer onClick={handleAccessPostDetails}>
            <header>
                <RepositoryPostTitle>{title}</RepositoryPostTitle>
                <RepositoryPostDate>{formatDistanceToNow(new Date(date), {
                    addSuffix: true,
                    locale: ptBR
                })}</RepositoryPostDate>
            </header>
            <article>
                <Markdown>{showingContent}</Markdown>
            </article>
        </RepositoryPostContainer>
    )
}