import topData from "../../../data/top";
import {Section, MainText, MainTitle, ContentWrap, ClearBlurWrap, Wrapper} from "./style";
import {TransparentWhiteBtn} from "../../../components/Btns/TransparentWhiteBtn";

const Top = ({arrivalRef, setArrivalsSelected}) => {
    const scrollToArrival = (e) => {
        window.scrollTo(0, arrivalRef.current.offsetTop)
        if (e.target.id === 'arrivalsBtn') {
            setArrivalsSelected(true)
        }
    }

    return (
        <Section id={topData.id}>
            <ClearBlurWrap>
                <Wrapper>
                    <ContentWrap>
                        <MainTitle>{topData.title}</MainTitle>
                        <MainText>{topData.text}</MainText>
                        <TransparentWhiteBtn id='arrivalsBtn'
                                             onClick={scrollToArrival}
                                             text={topData.btnText}
                        />
                    </ContentWrap>
                </Wrapper>
            </ClearBlurWrap>
        </Section>
    )
}

export default Top
