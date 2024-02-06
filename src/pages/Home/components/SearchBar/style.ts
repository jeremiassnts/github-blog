import styled from "styled-components";

export const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 60vw;

    header {
        display: flex;
        justify-content: space-between;
        width: 100%;

        span {
            &:first-of-type {
                color: ${e => e.theme.title};
                font-size: 1rem;
            }

            &:last-of-type {
                color: ${e => e.theme.span};
                font-size: 0.75rem;
            }
        }
    }

    form {
        width: 100%;

        input {
            width: 100%;
            border-radius: 4px;
            border: 1px solid ${e => e.theme.label};
            background-color: ${e => e.theme.input};
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
            outline: none;
            color: ${e => e.theme.text};

            &:hover {
                filter: brightness(1.2);
            }

            &::placeholder {
                color: ${e => e.theme.label};
            }
        }
    }
`