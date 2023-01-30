import styled, { css } from "styled-components";
import Background from "../../../../assets/background.webp"

export const BannerContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    
    background: url(${Background}) no-repeat;

    @media(max-width: 520px) {
        
    }
`
