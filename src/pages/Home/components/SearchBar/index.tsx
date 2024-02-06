import { useContext } from "react";
import { SearchBarContainer } from "./style";
import { GithubUserContext } from "../../../../contexts/GithubUserContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
    search: z.string()
})

export function SearchBar() {
    const { posts, loadPosts } = useContext(GithubUserContext)
    const { register, handleSubmit, watch } = useForm<z.infer<typeof searchFormSchema>>({
        resolver: zodResolver(searchFormSchema),
        defaultValues: {
            search: ''
        }
    })
    const search = watch('search')

    function handleSearchForm() {
        loadPosts(search)
    }

    return (
        <SearchBarContainer>
            <header>
                <span>Publicações</span>
                <span>{posts.length} publicações</span>
            </header>
            <form onSubmit={handleSubmit(handleSearchForm)}>
                <input type="text" {...register('search')} placeholder="Buscar conteúdo"/>
            </form>
        </SearchBarContainer>
    )
}