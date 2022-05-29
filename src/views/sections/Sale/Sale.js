import {Wrapper} from "../../../globalStyles";
import styled from "styled-components";
import {sale} from "../../../data/sale";
import {saleData} from "../../../data/sale";
import SaleCard from "./SaleCard";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickArrowBtn from "../../../components/SlickArrowBtn";
import './slickSettings.css'

const Section = styled.section`
  background-color: rgba(208, 196, 185, 0.2)
`

const Sale = ({salesRef}) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SlickArrowBtn/>,
        prevArrow: <SlickArrowBtn/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <Section ref={salesRef}>
            <Wrapper>
                <h2>{sale.title}</h2>
                <Slider {...settings}>
                    {
                        saleData.map((item, i) => <SaleCard key={i} item={item}/>)
                    }
                </Slider>
            </Wrapper>
        </Section>
    )
}

export default Sale
