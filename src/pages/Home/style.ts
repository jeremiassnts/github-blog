import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    margin-top: -80px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const UserInfoCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${e => e.theme["border-radius"]};
    background-color: ${e => e.theme.profile};
    padding: 1.5rem;
    gap: 1.5rem;
    width: 60%;
    box-shadow: 0px 16px 20px 5px rgba(0,0,0,0.1);
`
export const Avatar = styled.img`
    width: 8rem;
    border-radius: ${e => e.theme["border-radius"]};
`
export const UserInformations = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
`
export const UserInfoHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        color: ${e => e.theme.title};
        font-size: 1.25rem;
    }

    a {
        text-decoration: none;
        color: ${e => e.theme.blue};
        font-size: 0.7rem;
        display: flex;
        align-items: center;
        gap: 0.3rem;
    }
`
export const UserBio = styled.span`
    color: ${e => e.theme.text};
    padding: 0.75rem 0 1.5rem;
    text-align: left;
`
export const IconInfoContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    align-items: center;
`
export const IconInfoItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.35rem;
    color: ${e => e.theme.subtitle};
`