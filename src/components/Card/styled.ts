import styled from "styled-components";

export const CardContainer = styled.div`
    width: 22.5rem;
    height: 22.5rem;
    border-radius: 20px;
    overflow: hidden;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border: 15px;
    }

    &:hover .card{
        right: 0;
    }

`

export const CardContent = styled.div`
        width: 100%;
        height: 100%;
        top: 0;
        right: -100%;
        position: absolute;
        background: rgba(0, 255, 255, 0.5);
        backdrop-filter: blur(5px);
        border-radius: 15px;
        padding: 30px; 
        display: flex;
        flex-direction: column;
        justify-content: center;

        gap: 2rem;

        transition: 2s;

        .card {

        }
        

        h2 {
            text-transform: uppercase;
            font-size: 1.2rem;
            font-weight: 500;
        }

        p {
            text-transform: capitalize;
            font-size: 1rem;
            font-weight: 300;
        }

        button {
            min-height: 48px;
            border-radius: 10px;
            border: 0;
        }

        @media(max-width: 520px) {
            right: 0;
            background: rgba(0, 255, 255, 0.2);
            backdrop-filter: blur(2px);
        }
`

