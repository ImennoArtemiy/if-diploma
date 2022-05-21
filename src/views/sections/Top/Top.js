import topData from "../../../data/top";
import {SquareTransparentBtn} from "../../../components/SquareBtn/squareBtns";
import {Wrapper} from "../../../globalStyles";
import {Section, MainText, MainTitle, ContentWrap} from "./style";

const Top = () => {
    return (
        <Section id={topData.id}>
            <Wrapper>
                <ContentWrap>
                    <MainTitle>{topData.title}</MainTitle>
                    <MainText>{topData.text}</MainText>
                    <SquareTransparentBtn text={topData.btnText}/>
                </ContentWrap>
            </Wrapper>
        </Section>
    )
}

export default Top
