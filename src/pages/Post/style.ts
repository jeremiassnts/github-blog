import styled from "styled-components";

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -80px;
`
export const PostHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: ${e => e.theme["border-radius"]};
    background-color: ${e => e.theme.profile};
    padding: 1.5rem;
    gap: 1rem;
    width: 60vw;
    box-shadow: 0px 16px 20px 5px rgba(0,0,0,0.1);

    header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        font-size: 0.75rem;
        color: ${e => e.theme.blue};

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.4rem;
            transition: all 0.1s;
            cursor: pointer;

            a {
                text-decoration: none;
                color: ${e => e.theme.blue};
            }

            &:hover {
                filter: brightness(0.8);
            }
        }
    }

    footer {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        gap: 1.5rem;
    }
`
export const PostTitle = styled.div`
    color: ${e => e.theme.title};
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;
    width: 100%;
`
export const PostIcon = styled.div`
    font-size: 0.75rem;
    color: ${e => e.theme.span};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.3rem;
`
export const PostBody = styled.div`
    color: ${e => e.theme.text};
    font-size: 0.85rem;
    width: 60vw;
    padding: 2.5rem 1rem;
    line-height: 1.25rem;

    img {
        width: 100%;
    }
`