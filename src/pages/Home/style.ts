import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    margin-top: -80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
`

export const PostsSkeletonContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    width: 60vw;
`

export const PostsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    gap: 2rem;
    width: 60vw;
    padding-bottom: 2rem;
`