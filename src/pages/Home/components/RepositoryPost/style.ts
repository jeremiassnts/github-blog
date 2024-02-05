import styled from "styled-components";

export const RepositoryPostContainer = styled.div`
    background-color: ${e => e.theme.post};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    border-radius: ${e => e.theme["border-radius"]};
    padding: 1.5rem;
    cursor: pointer;
    transition: all 0.1s;

    &:hover {
        filter: brightness(0.8);
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
    }

    article {
        color: ${e => e.theme.text};
        font-size: 0.85rem;
        text-align: left;
    }
`
export const RepositoryPostTitle = styled.span`
    color: ${e => e.theme.title};
    font-size: 1rem;
    font-weight: bold;
    flex: 1;
`
export const RepositoryPostDate = styled.span`
    color: ${e => e.theme.span};
    font-size: 0.75rem;
    width: 30%;
    text-align: right;
`