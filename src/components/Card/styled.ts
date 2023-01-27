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
        top: 160px;
    }

`

export const CardContent = styled.div`
        width: 22.5rem;
        height: 12.5rem;
        padding: 30px; 
        top: 300px;
        
        color: white;

        background: rgba(27, 27, 27, 0.5);
        backdrop-filter: blur(5px);

        
        display: flex;
        position: absolute;
        flex-direction: column;
        justify-content: center;

        gap: 2rem;

        transition: 2s;

        .card {

        }
        

        h2 {
            text-transform: uppercase;
            font-size: 1rem;
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
            height: 22.5rem;
            top: 0;
            background: rgba(27, 27, 27, 0.5);
            backdrop-filter: blur(2px);
        }
`

