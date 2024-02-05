import { RepositoryPostContainer, RepositoryPostDate, RepositoryPostTitle } from "./style"
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Markdown from "react-markdown"

interface RepositoryPostProps {
    title: string
    date: string
    content: string
}
export function RepositoryPost({ title, date, content }: RepositoryPostProps) {
    const limit = 300
    const showingContent = content.slice(0, limit) + (content.length > limit ? '...' : '')
    return (
        <RepositoryPostContainer>
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