import styled, { css } from "styled-components";
import { SwiperSlide } from "swiper/react";

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

    @media(max-width: 520px) {
        img {
            display: none;
        }

        .swiper {
            width: 100%;
            height: 20rem;
        }
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

    ${({ theme, color }) => color == "gray" ? css`color: gray;` : css`color: white;` }

    @media(max-width: 520px) {
        width: 20rem;

        h1 {
            font-size: 2.5rem
        }

        div {
            font-size: 1.5rem;
            line-height: 1.5rem;
        }
    }
`

interface SwiperContentProps {
    img?: string
}

export const SwiperContainer = styled(SwiperSlide)`

`

export const SwiperContent = styled.div<SwiperContentProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30rem;

    ${({ img }) => img ? css`
        background: ${({ theme }) => `url(${img})  no-repeat `};    
        background-size: cover; 
        background-position: 50% 20%; 
    ` : ""}

    @media(max-width: 520px) {
        height: 20rem;
    }
` 