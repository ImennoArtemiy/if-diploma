import {buttons} from "../../../data/instagram";
import {images} from "../../../data/instagram";
import {Wrapper} from "../../../globalStyles";
import {Section, ArrowIcon, Btn, Collage, BtnWrapper, ImgWrapper, MainPhoto} from "./style";
import {svgName} from "../../../data/svg";
import {colors} from "../../../data/siteConfig";

const Arrivals = ({arrivalRef, arrivalsSelected, setArrivalsSelected}) => {

    const handlerClick = (e) => {
        if (e.target.id === 'inst') {
            setArrivalsSelected(true)
        }
        if (e.target.id === 'shop') {
            setArrivalsSelected(false)
        }
    }

    return (
        <Section ref={arrivalRef}>
            <Wrapper>
                <BtnWrapper>
                    <Btn id='inst'
                         onClick={handlerClick}
                         arrivalsSelected={arrivalsSelected ? colors.red : colors.black}
                    >
                        {buttons.arrivalsBtn.text}
                    </Btn>
                    <ArrowIcon arrivalsSelected={arrivalsSelected}>
                        <use href={svgName.arrow}/>
                    </ArrowIcon>
                    <Btn id='shop'
                         onClick={handlerClick}
                         arrivalsSelected={arrivalsSelected ? colors.black : colors.red}
                    >
                        {buttons.collectionBtn.text}
                    </Btn>
                </BtnWrapper>
                <ImgWrapper>
                    <MainPhoto src={arrivalsSelected ? images.photo1 : images.photo6} alt='photo1'/>
                    <Collage>
                        <img src={arrivalsSelected ? images.photo2 : images.photo7} alt='photo2'/>
                        <img src={arrivalsSelected ? images.photo3 : images.photo8} alt='photo3'/>
                        <img src={arrivalsSelected ? images.photo4 : images.photo9} alt='photo4'/>
                        <img src={arrivalsSelected ? images.photo5 : images.photo10} alt='photo5'/>
                    </Collage>
                </ImgWrapper>
            </Wrapper>
        </Section>
    )
}

export default Arrivals
