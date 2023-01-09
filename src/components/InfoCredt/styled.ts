import styled from "styled-components";

export const InfoCredtContainer = styled.div`
    margin-top: 4rem;
    margin-bottom: 4rem;
`

export const InfoCredtContent = styled.div`

    display: flex;
    justify-content: space-between;

    img {
        height: 30rem;
        width: 30rem;
        object-fit: cover;
        border-radius: 6px 36px 6px 36px;
    }

    @media(max-width: 520px) {
        align-items: center;
        justify-content: center;
        
        img {
            display: none;
        }
    }
`

export const InfoCredtText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    width: 20rem;
    line-height: 1.6rem;

    button {
        height: 3rem;
        border-radius: 6px;
        font-weight: bold;
        border: 0;
        color: ${({ theme }) => theme.colors["base-white"]};
        background-color: ${({ theme }) => theme.colors["base-blue"]};

        &:hover {
            background-color: ${({ theme }) => theme.colors["base-blue-dark"]};
            transition: .5s;
        }
    }

    @media(max-width: 520px) {

    }
`

