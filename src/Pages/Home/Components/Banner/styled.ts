import { backgrounds } from "polished";
import styled, { css } from "styled-components";

export const BannerContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    
    img {
        object-fit: cover;
    }

    .swiper {
        width: 100%;

    }
`

interface BannerDescriptionProps {
    color: "gray" | "white"
}

export const BannerDescription = styled.div<BannerDescriptionProps>`
    display: flex;
    align-items: flex-start;
    gap: .75rem;
    flex-direction: column;

    width: 30rem;

    h1 {
        font-size: 3.9rem;
    }

    div {
        display: flex;
        flex-direction: column;
        font-size: 2rem;
        line-height: 3rem;
    }

    ${({ theme, color }) => color == "gray" ? css`color: gray` : css`color: white` }
`

interface SwiperContentProps {
    img?: string
}

export const SwiperContent = styled.div<SwiperContentProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30rem;

    ${({ img }) => img ? css`
        background: ${({ theme }) => `url(${img})  no-repeat `};    
        background-size: 100%;  
    ` : ""}
` 