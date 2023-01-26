// Phosphor icon
import { CheckSquareOffset, WhatsappLogo } from "phosphor-react";

// Imports Swiper
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination, Navigation} from 'swiper';

// Swiper style
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// images for SwiperSlider
import Foto from '../../../../assets/fgts.webp'
import cartImage from '../../../../assets/cartaoconsignadobanner.webp'
import personBanner from '../../../../assets/creditopessoalbanner.webp'
import girl from "../../../../assets/girl1.png";

// Page style
import { SimulationButton } from "../../../../components/SimulationButton";
import { BannerContainer, BannerDescription, SwiperContainer, SwiperContent } from "./styled";

export function Banner() {
    return (
        <BannerContainer >
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="swiper" 
                style={{ width: '100%', flex: '1'}}
            >
                    <SwiperContainer>
                        
                        <SwiperContent>
                            <BannerDescription color="gray">
                                <h1>Dinheiro rápido na sua conta</h1>
                                <div>
                                    <span><CheckSquareOffset/> Dinheiro rapido na conta</span>
                                    <span><CheckSquareOffset/> Taxas de juros mais baixas</span>
                                    <span><CheckSquareOffset/> 100% Digital</span>
                                </div>
                                <SimulationButton icon={<WhatsappLogo size={30}/>} size={100} text="Simular Agora" color="green"/>
                            </BannerDescription>
            
                            <img src={girl} alt="Avatar da pagina"/>
                        </SwiperContent>
                        
                    </SwiperContainer>

                    <SwiperContainer>

                        <SwiperContent img={Foto}>
                            <BannerDescription color="white">
                               <h2>Faça a antecipação do seu FGTS</h2>
                            </BannerDescription>

                        </SwiperContent>

                    </SwiperContainer>

                    <SwiperContainer>
                        <SwiperContent img={cartImage}>
                            <BannerDescription color="white">
                               <h2>dasdadas</h2>
                            </BannerDescription>
            

                        </SwiperContent>

                    </SwiperContainer>

                    <SwiperContainer>
                        <SwiperContent img={personBanner}>
                            <BannerDescription color="white">
                               <h2>dasdadas</h2>
                            </BannerDescription>
            

                        </SwiperContent>

                    </SwiperContainer>
            </Swiper>
        </BannerContainer>
    )
}